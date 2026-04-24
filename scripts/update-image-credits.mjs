// Update CountryImage credits in EN MDX files to match actual Unsplash photographers.
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'src', 'content', 'countries', 'en');

// Mapping: country slug → photographer name (from the Unsplash filename we placed)
const CREDITS = {
  'egypt':                    '2H Media',
  'portugal':                 'Aayush Gupta',
  'turkey':                   'Alain Bonnardeaux',
  'indonesia':                'Alea Film',
  'austria':                  'Alessandra Verre',
  'spain':                    'Alexander Psiuk',
  'germany':                  'Brooks DeCillia',
  'sweden':                   'Chris Caines',
  'malaysia':                 'Danica Tanjutco',
  'denmark':                  'Daniel Diemer',
  'japan':                    'David Emrich',
  'netherlands':              'Ethan Hu',
  'ireland':                  'E. Vos',
  'vatican-city':             'Gautam Sood',
  'england':                  'George Ciobra',
  'singapore':                'Hu Chen',
  'south-korea':              'Jin Woo Lee',
  'canada':                   'Lianhao Qu',
  'hungary':                  'Linda Gerbec',
  'italy':                    'Luca Micheli',
  'united-states-of-america': 'Maddox Furlong',
  'croatia':                  'Maksim Shutov',
  'poland':                   'Maksym Harbar',
  'vietnam':                  'Marina Lobato',
  'india':                    'Rohit Dey',
  'czech-republic':           'Mike Swigunski',
  'iceland':                  'Morey Longo',
  'finland':                  'Ozgu Ozden',
  'switzerland':              'Patrick F',
  'south-africa':             'Peter Burdon',
  'australia':                'Photoholgic',
  'china':                    'Pikacent',
  'belgium':                  'Rafael Hoyos Weht',
  'morocco':                  'Selina Bubendörfer',
  'greece':                   'Spencer Davis',
  'norway':                   'Till Daling',
  'thailand':                 'Worachat Sodsri',
  'mexico':                   'Yuta Koike',
};

let updated = 0;
for (const [slug, photographer] of Object.entries(CREDITS)) {
  const path = join(ROOT, `${slug}.mdx`);
  let text = await readFile(path, 'utf8');
  const before = text;
  // Replace any credit= line that comes after <CountryImage, with Unsplash attribution.
  text = text.replace(
    /(<CountryImage[\s\S]*?credit=")([^"]+)(" — Unsplash"|")/,
    (_, pre, _old, post) => `${pre}${photographer} — Unsplash${post === '" — Unsplash"' ? '"' : '"'}`
  );
  // Simpler targeted replacement — just replace the credit value between quotes
  text = before.replace(
    /(<CountryImage[\s\S]*?credit=")([^"]+)(")/,
    `$1${photographer} — Unsplash$3`
  );
  if (text !== before) {
    await writeFile(path, text);
    console.log(`  ${slug}.mdx → ${photographer}`);
    updated++;
  }
}
console.log(`\nUpdated ${updated} files.`);
