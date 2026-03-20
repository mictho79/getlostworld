#!/usr/bin/env node
/**
 * scripts/translate.mjs
 *
 * Translates COUNTRY_VIBES, COUNTRY_DATA.fact, and COUNTRY_INSIGHTS
 * via the DeepL free API and writes language-specific data files.
 *
 * Usage:
 *   DEEPL_API_KEY=xxx node scripts/translate.mjs
 *   DEEPL_API_KEY=xxx node scripts/translate.mjs --langs=fr,es
 *   node scripts/translate.mjs --dry-run
 *
 * Output:
 *   src/lib/countryData.fr.js
 *   src/lib/countryData.es.js
 *   src/lib/countryData.de.js
 */

import { writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// ── Paths ─────────────────────────────────────────────────────────────────────
const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, '..');

// ── CLI args ──────────────────────────────────────────────────────────────────
const DRY_RUN  = process.argv.includes('--dry-run');
const FORCE    = process.argv.includes('--force');
const LANG_ARG = process.argv.find(a => a.startsWith('--langs='));
const LANGS    = (LANG_ARG ? LANG_ARG.split('=')[1] : 'fr,es,de')
  .split(',').map(l => l.trim().toUpperCase());

// DeepL language codes (target_lang)
const DEEPL_LANG = { FR: 'FR', ES: 'ES', DE: 'DE' };

// ── Config ────────────────────────────────────────────────────────────────────
const API_KEY    = process.env.DEEPL_API_KEY;
const DEEPL_URL  = 'https://api-free.deepl.com/v2/translate';
const BATCH_SIZE = 50;   // max texts per API call (DeepL supports up to 50)
const DELAY_MS   = 400;  // ms between batches — stay within free tier limits
const MAX_RETRY  = 3;    // retries on transient errors (429, 5xx)
const RETRY_MS   = 2000; // base delay before retry (doubles each attempt)

// ── Validate ──────────────────────────────────────────────────────────────────
if (!API_KEY && !DRY_RUN) {
  console.error('\n❌  DEEPL_API_KEY env variable is required.');
  console.error('    Get a free key at https://www.deepl.com/pro-api');
  console.error('    Or run with --dry-run to estimate usage without calling the API.\n');
  process.exit(1);
}
for (const l of LANGS) {
  if (!DEEPL_LANG[l]) {
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
// One flat array of { section, country, field, value } so we can translate
// everything in a single pass per language and reconstruct afterwards.
const queue = [];
const INSIGHT_FIELDS = ['capital', 'people', 'food', 'sport', 'nature'];

// 1. COUNTRY_VIBES  — short adjective phrases, e.g. "Ancient · Rugged · Proud"
for (const [country, value] of Object.entries(COUNTRY_VIBES)) {
  if (value) queue.push({ section: 'vibes', country, field: null, value });
}

// 2. COUNTRY_DATA.fact  — one standalone "did you know" sentence per country
for (const [country, data] of Object.entries(COUNTRY_DATA)) {
  if (data?.fact) queue.push({ section: 'fact', country, field: null, value: data.fact });
}

// 3. COUNTRY_INSIGHTS  — 2–5 prose paragraphs per country
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
const batchCount = Math.ceil(queue.length / BATCH_SIZE);

console.log(`\n📊 Strings to translate  : ${queue.length.toLocaleString()}`);
console.log(`📏 Characters per lang   : ~${totalChars.toLocaleString()}`);
console.log(`📏 Total API characters  : ~${(totalChars * LANGS.length).toLocaleString()} (${LANGS.length} languages)`);
console.log(`🌍 Target languages      : ${LANGS.map(l => DEEPL_LANG[l]).join(', ')}`);
console.log(`📦 Batch size            : ${BATCH_SIZE}`);
console.log(`🔢 API calls per language: ${batchCount} (${queue.length} strings ÷ ${BATCH_SIZE})`);

if (totalChars * LANGS.length > 450_000) {
  console.warn('\n⚠️  WARNING: Estimated usage exceeds 450 000 characters.');
  console.warn('   The DeepL free tier allows 500 000 chars/month.');
  console.warn('   Use --langs=fr to translate one language at a time if needed.\n');
} else {
  console.log('');
}

if (DRY_RUN) {
  console.log('🚧 Dry-run mode — no API calls made.\n');
  process.exit(0);
}

// ── DeepL API helpers ─────────────────────────────────────────────────────────
async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function callDeepL(texts, targetLang, attempt = 1) {
  const res = await fetch(DEEPL_URL, {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text:                texts,
      source_lang:         'EN',
      target_lang:         targetLang,
      preserve_formatting: true,
    }),
  });

  // Retry on rate-limit or server errors
  if ((res.status === 429 || res.status >= 500) && attempt <= MAX_RETRY) {
    const wait = RETRY_MS * attempt;
    console.warn(`\n  ⚠️  HTTP ${res.status} — retrying in ${wait}ms (attempt ${attempt}/${MAX_RETRY})…`);
    await sleep(wait);
    return callDeepL(texts, targetLang, attempt + 1);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`DeepL API error ${res.status}: ${body}`);
  }

  const json = await res.json();
  return json.translations.map(t => t.text);
}

async function translateAll(items, targetLang) {
  const texts  = items.map(i => i.value);
  const out    = [];
  const batches = Math.ceil(texts.length / BATCH_SIZE);

  for (let b = 0; b < batches; b++) {
    const start = b * BATCH_SIZE;
    const slice = texts.slice(start, start + BATCH_SIZE);
    const pct   = Math.round(((b + 1) / batches) * 100);

    process.stdout.write(`  [${String(b + 1).padStart(String(batches).length)}/${batches}] ${pct.toString().padStart(3)}%  `);

    const translated = await callDeepL(slice, targetLang);
    out.push(...translated);

    process.stdout.write(`✓  (${slice.length} strings, ~${slice.reduce((n, s) => n + s.length, 0).toLocaleString()} chars)\n`);

    if (b < batches - 1) await sleep(DELAY_MS);
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

  // Build COUNTRY_DATA with translated facts, all other fields unchanged
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
    `// Re-run the script to update: DEEPL_API_KEY=xxx node scripts/translate.mjs --langs=${lang.toLowerCase()}`,
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
  const dlLang  = DEEPL_LANG[lang];
  const outPath = resolve(ROOT, `src/lib/countryData.${lang.toLowerCase()}.js`);

  if (existsSync(outPath) && !FORCE) {
    console.log(`⏭️  ${outPath.replace(ROOT + '/', '')} already exists — skipping (use --force to overwrite)\n`);
    continue;
  }

  console.log(`\n🔄 Translating to ${dlLang}…`);
  const t0 = Date.now();

  let translated;
  try {
    translated = await translateAll(queue, dlLang);
  } catch (err) {
    console.error(`\n❌  Translation failed for ${lang}: ${err.message}`);
    process.exit(1);
  }

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`  ⏱  Completed in ${elapsed}s`);

  const { vibes, countryData, insights } = reconstruct(translated);
  const src = toJsModule(lang, vibes, countryData, insights);

  writeFileSync(outPath, src, 'utf8');
  console.log(`  ✅  Wrote ${outPath.replace(ROOT + '/', '')}`);
}

console.log('\n🎉 Done!\n');
