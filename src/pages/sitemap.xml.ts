import type { APIRoute } from 'astro';
import { COUNTRY_DATA, slugify } from '../lib/countryData.js';

export const GET: APIRoute = async () => {
  const base = 'https://terralenses.com';
  const countries = Object.keys(COUNTRY_DATA as any);
  const urls = [
    base + '/',
    base + '/map/',
    base + '/compare/',
    ...countries.map(c => `${base}/country/${slugify(c)}/`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
