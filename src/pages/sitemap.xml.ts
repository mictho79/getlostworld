import type { APIRoute } from 'astro';
import { COUNTRY_DATA, slugify } from '../lib/countryData.js';

const today = new Date().toISOString().slice(0, 10);

const url = (loc: string, priority: string, changefreq: string) =>
  `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;

export const GET: APIRoute = async () => {
  const base = 'https://terralenses.com';
  const countries = Object.keys(COUNTRY_DATA as any);

  const curated = [
    ['france', 'germany'],
    ['united-states-of-america', 'canada'],
    ['japan', 'south-korea'],
    ['india', 'china'],
    ['brazil', 'argentina'],
    ['australia', 'new-zealand'],
    ['united-kingdom', 'france'],
    ['spain', 'italy'],
    ['egypt', 'morocco'],
    ['nigeria', 'ghana'],
  ];

  const lines = [
    url(base + '/',         '1.0', 'weekly'),
    url(base + '/map/',     '0.9', 'weekly'),
    url(base + '/compare/', '0.8', 'weekly'),
    ...countries.map(c => url(`${base}/country/${slugify(c)}/`, '0.8', 'monthly')),
    ...curated.map(([a, b]) => url(`${base}/compare/${a}-vs-${b}/`, '0.7', 'monthly')),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${lines.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
