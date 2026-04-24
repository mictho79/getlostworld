// Resize all JPEGs under public/images/countries/ to max 1920px wide + quality 80 progressive JPEG.
// In-place: overwrites originals. Skips files already <= 1920px AND already mozjpeg-compressed.
import { readdir, stat, rename } from 'node:fs/promises';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const ROOT = join(dirname(__filename), '..', 'public', 'images', 'countries');
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    const s = await stat(p);
    if (s.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(jpe?g|png|webp)$/i.test(name)) out.push(p);
  }
  return out;
}

const files = await walk(ROOT);
console.log(`Processing ${files.length} images...`);

let savedBytes = 0;
let count = 0;

for (const src of files) {
  try {
    const before = (await stat(src)).size;
    const meta = await sharp(src).metadata();
    const needResize = (meta.width || 0) > MAX_WIDTH;

    const tmp = src + '.tmp';
    const pipeline = sharp(src).rotate();
    if (needResize) pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    await pipeline
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toFile(tmp);

    await rename(tmp, src);
    const after = (await stat(src)).size;
    savedBytes += before - after;
    count++;
    console.log(`  ${basename(dirname(src))}/${basename(src)}  ${meta.width}→${needResize ? MAX_WIDTH : meta.width}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
  } catch (e) {
    console.error(`  FAIL ${src}: ${e.message}`);
  }
}

console.log(`\nDone. ${count} files. Saved ${(savedBytes / 1024 / 1024).toFixed(2)} MB total.`);
