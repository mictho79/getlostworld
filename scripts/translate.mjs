#!/usr/bin/env node
/**
 * scripts/translate.mjs
 *
 * Translates COUNTRY_VIBES, COUNTRY_DATA.fact, and COUNTRY_INSIGHTS
 * via the free Google Translate API and writes language-specific data files.
 *
 * Usage:
 *   node scripts/translate.mjs
 *   node scripts/translate.mjs --langs=fr,es
 *   node scripts/translate.mjs --dry-run
 *   node scripts/translate.mjs --langs=es --force   (overwrite existing output)
 *
 * If rate-limited mid-run, progress is saved in .translate-cache.json
 * and automatically resumed on the next run.
 *
 * Output:
 *   src/lib/countryData.fr.js
 *   src/lib/countryData.es.js
 *   src/lib/countryData.de.js
 */

import pkg from '@vitalets/google-translate-api';
const { translate } = pkg;
const isRateLimit = (err) => err?.message?.includes('Too Many Requests') || err?.statusCode === 429;
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// ── Paths ─────────────────────────────────────────────────────────────────────
const __dir    = dirname(fileURLToPath(import.meta.url));
const ROOT     = resolve(__dir, '..');
const CACHE_FILE = resolve(ROOT, '.translate-cache.json');

// ── CLI args ──────────────────────────────────────────────────────────────────
const DRY_RUN  = process.argv.includes('--dry-run');
const FORCE    = process.argv.includes('--force');
const LANG_ARG = process.argv.find(a => a.startsWith('--langs='));
const LANGS    = (LANG_ARG ? LANG_ARG.split('=')[1] : 'fr,es,de')
  .split(',').map(l => l.trim().toUpperCase());

// Google Translate language codes
const GOOGLE_LANG = { FR: 'fr', ES: 'es', DE: 'de' };

// ── Config ────────────────────────────────────────────────────────────────────
const DELAY_MS       = 1500;    // ms between requests (base)
const DELAY_JITTER   = 500;     // ± random jitter added to each delay
const RATELIMIT_WAIT = 300_000; // ms to wait after a 429 (5 minutes)
const MAX_RETRY      = 10;      // keep retrying with long waits

// ── Validate ──────────────────────────────────────────────────────────────────
for (const l of LANGS) {
  if (!GOOGLE_LANG[l]) {
    console.error(`❌  Unknown language "${l}". Supported: fr, es, de`);
    process.exit(1);
  }
}

// ── Load source data ──────────────────────────────────────────────────────────
const srcPath = `${ROOT}/src/lib/countryData.js`;
if (!existsSync(srcPath)) {
  console.error(`❌  Source file not found: ${srcPath}`);
  process.exit(1);
}

console.log('\n📂 Loading source data…');
const { COUNTRY_VIBES, COUNTRY_DATA, COUNTRY_INSIGHTS } =
  await import(pathToFileURL(srcPath).href);

// ── Build translation queue ───────────────────────────────────────────────────
const queue = [];
const INSIGHT_FIELDS = ['capital', 'people', 'food', 'sport', 'nature'];

for (const [country, value] of Object.entries(COUNTRY_VIBES)) {
  if (value) queue.push({ section: 'vibes', country, field: null, value });
}
for (const [country, data] of Object.entries(COUNTRY_DATA)) {
  if (data?.fact) queue.push({ section: 'fact', country, field: null, value: data.fact });
}
for (const [country, ins] of Object.entries(COUNTRY_INSIGHTS)) {
  for (const field of INSIGHT_FIELDS) {
    if (ins?.[field]) queue.push({ section: 'insight', country, field, value: ins[field] });
  }
}

if (queue.length === 0) {
  console.error('❌  No strings found to translate. Check your source data exports.');
  process.exit(1);
}

const totalChars = queue.reduce((n, q) => n + q.value.length, 0);
console.log(`\n📊 Strings to translate  : ${queue.length.toLocaleString()}`);
console.log(`📏 Characters per lang   : ~${totalChars.toLocaleString()}`);
console.log(`🌍 Target languages      : ${LANGS.map(l => GOOGLE_LANG[l]).join(', ')}`);
console.log(`⏱  Estimated time/lang   : ~${Math.round(queue.length * DELAY_MS / 60000)} min\n`);

if (DRY_RUN) {
  console.log('🚧 Dry-run mode — no API calls made.\n');
  process.exit(0);
}

// ── Cache helpers ─────────────────────────────────────────────────────────────
function loadCache() {
  try { return existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, 'utf8')) : {}; }
  catch { return {}; }
}
function saveCache(cache) {
  writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf8');
}
function deleteCache() {
  try { if (existsSync(CACHE_FILE)) writeFileSync(CACHE_FILE, '{}', 'utf8'); } catch {}
}

// ── Google Translate helpers ──────────────────────────────────────────────────
async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callGoogle(text, targetLang, attempt = 1) {
  try {
    const result = await translate(text, { from: 'en', to: targetLang });
    return result.text;
  } catch (err) {
    if (isRateLimit(err)) {
      if (attempt <= MAX_RETRY) {
        console.warn(`\n  ⚠️  Rate limited — waiting ${RATELIMIT_WAIT / 1000}s before retry (attempt ${attempt}/${MAX_RETRY})…`);
        await sleep(RATELIMIT_WAIT);
        return callGoogle(text, targetLang, attempt + 1);
      }
      throw new Error('Rate limit exceeded after max retries.');
    }
    if (attempt <= MAX_RETRY) {
      await sleep(2000 * attempt);
      return callGoogle(text, targetLang, attempt + 1);
    }
    throw err;
  }
}

async function translateAll(items, targetLang, langKey) {
  const cache  = loadCache();
  if (!cache[langKey]) cache[langKey] = {};

  const out    = new Array(items.length);
  const total  = items.length;
  const padLen = String(total).length;
  let   done   = 0;

  for (let i = 0; i < total; i++) {
    const { value } = items[i];
    const cacheKey  = `${i}`;

    // Resume from cache if available
    if (cache[langKey][cacheKey] !== undefined) {
      out[i] = cache[langKey][cacheKey];
      done++;
      continue;
    }

    const pct = Math.round(((i + 1) / total) * 100);
    process.stdout.write(`  [${String(i + 1).padStart(padLen)}/${total}] ${pct.toString().padStart(3)}%  `);

    const translated = await callGoogle(value, targetLang);
    out[i] = translated;

    // Save to cache immediately
    cache[langKey][cacheKey] = translated;
    saveCache(cache);
    done++;

    process.stdout.write(`✓\n`);

    if (i < total - 1) await sleep(DELAY_MS + Math.floor(Math.random() * DELAY_JITTER * 2) - DELAY_JITTER);
  }

  if (done === total) {
    // Clear this lang from cache on success
    delete cache[langKey];
    saveCache(cache);
  }

  return out;
}

// ── Reconstruct data from flat translated array ───────────────────────────────
function reconstruct(translated) {
  const vibes    = {};
  const facts    = {};
  const insights = {};

  for (let i = 0; i < queue.length; i++) {
    const { section, country, field } = queue[i];
    const text = translated[i];

    if      (section === 'vibes')   { vibes[country] = text; }
    else if (section === 'fact')    { facts[country] = text; }
    else if (section === 'insight') {
      if (!insights[country]) insights[country] = {};
      insights[country][field] = text;
    }
  }

  const countryData = {};
  for (const [name, data] of Object.entries(COUNTRY_DATA)) {
    countryData[name] = facts[name] ? { ...data, fact: facts[name] } : { ...data };
  }

  return { vibes, countryData, insights };
}

// ── Serialise to JS module source ─────────────────────────────────────────────
function toJsModule(lang, vibes, countryData, insights) {
  const date = new Date().toISOString().slice(0, 10);
  return [
    `// Auto-generated by scripts/translate.mjs — do not edit manually.`,
    `// Source: EN → ${lang}  (generated ${date})`,
    `// Re-run the script to update: node scripts/translate.mjs --langs=${lang.toLowerCase()}`,
    ``,
    `export const COUNTRY_VIBES = ${JSON.stringify(vibes, null, 2)};`,
    ``,
    `export const COUNTRY_DATA = ${JSON.stringify(countryData, null, 2)};`,
    ``,
    `export const COUNTRY_INSIGHTS = ${JSON.stringify(insights, null, 2)};`,
    ``,
  ].join('\n');
}

// ── Main loop — one language at a time ────────────────────────────────────────
for (const lang of LANGS) {
  const glLang  = GOOGLE_LANG[lang];
  const outPath = resolve(ROOT, `src/lib/countryData.${lang.toLowerCase()}.js`);
  const langKey = lang; // cache key

  if (existsSync(outPath) && !FORCE) {
    // Check if there's a partial cache for this lang — if so, resume
    const cache = loadCache();
    if (!cache[langKey]) {
      console.log(`⏭️  ${lang.toLowerCase()} already exists — skipping (use --force to overwrite)\n`);
      continue;
    }
    console.log(`♻️  Resuming partial translation for ${lang}…`);
  }

  console.log(`\n🔄 Translating to ${glLang.toUpperCase()}…`);
  const t0 = Date.now();

  let translated;
  try {
    translated = await translateAll(queue, glLang, langKey);
  } catch (err) {
    console.error(`\n❌  ${err.message}`);
    console.error('    Re-run the same command to resume from the checkpoint.\n');
    process.exit(1);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`  ⏱  Completed in ${elapsed}s`);

  const { vibes, countryData, insights } = reconstruct(translated);
  const src = toJsModule(lang, vibes, countryData, insights);

  writeFileSync(outPath, src, 'utf8');
  console.log(`  ✅  Wrote ${lang.toLowerCase()}`);
}

deleteCache();
console.log('\n🎉 Done!\n');
