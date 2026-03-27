import type { APIRoute } from 'astro';
import { COUNTRY_VIBES, slugify } from '../lib/countryData.js';

const today = new Date().toISOString().slice(0, 10);

const url = (loc: string, priority: string, changefreq: string, frLoc?: string) => {
  const hreflang = frLoc
    ? `\n    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="fr" href="${frLoc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`
    : '';
  return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority>${hreflang}\n  </url>`;
};

export const GET: APIRoute = async () => {
  const base = 'https://terralenses.com';
  // Only include countries that have actual pages (COUNTRY_VIBES = source of truth)
  const countries = Object.keys(COUNTRY_VIBES as any);

  const curated = [
    // Europe vs Europe
    ['france', 'germany'],
    ['france', 'spain'],
    ['france', 'italy'],
    ['germany', 'italy'],
    ['spain', 'italy'],
    ['portugal', 'spain'],
    ['united-kingdom', 'france'],
    ['netherlands', 'belgium'],
    // Americas
    ['united-states-of-america', 'canada'],
    ['brazil', 'argentina'],
    ['united-states-of-america', 'brazil'],
    ['mexico', 'colombia'],
    // Asia vs Asia
    ['japan', 'south-korea'],
    ['india', 'china'],
    ['japan', 'china'],
    ['thailand', 'vietnam'],
    ['indonesia', 'malaysia'],
    // Cross-continent popular
    ['france', 'japan'],
    ['germany', 'japan'],
    ['united-states-of-america', 'united-kingdom'],
    ['australia', 'new-zealand'],
    ['canada', 'australia'],
    // Africa
    ['egypt', 'morocco'],
    ['nigeria', 'ghana'],
    ['south-africa', 'kenya'],
  ];

  const lines = [
    // ── Pages statiques avec hreflang ───────────────────────
    url(base + '/',           '1.0', 'weekly',  base + '/fr/'),
    url(base + '/map/',       '0.9', 'weekly',  base + '/fr/map/'),
    url(base + '/compare/',   '0.8', 'weekly',  base + '/fr/compare/'),
    url(base + '/countries/', '0.8', 'weekly',  base + '/fr/countries/'),
    url(base + '/legal/',     '0.3', 'yearly',  base + '/fr/legal/'),
    url(base + '/privacy/',   '0.3', 'yearly',  base + '/fr/privacy/'),
    // ── FR static (alternate, no hreflang duplication) ──────
    url(base + '/fr/',           '0.9', 'weekly'),
    url(base + '/fr/map/',       '0.8', 'weekly'),
    url(base + '/fr/compare/',   '0.7', 'weekly'),
    url(base + '/fr/countries/', '0.7', 'weekly'),
    url(base + '/fr/legal/',     '0.3', 'yearly'),
    url(base + '/fr/privacy/',   '0.3', 'yearly'),
    // ── EN country pages with hreflang ──────────────────────
    ...countries.map(c => url(
      `${base}/country/${slugify(c)}/`, '0.8', 'monthly',
      `${base}/fr/country/${slugify(c)}/`
    )),
    // ── FR country pages ────────────────────────────────────
    ...countries.map(c => url(`${base}/fr/country/${slugify(c)}/`, '0.7', 'monthly')),
    // ── EN curated compare pairs with hreflang ──────────────
    ...curated.map(([a, b]) => url(
      `${base}/compare/${a}-vs-${b}/`, '0.7', 'monthly',
      `${base}/fr/compare/${a}-vs-${b}/`
    )),
    // ── FR curated compare pairs ────────────────────────────
    ...curated.map(([a, b]) => url(`${base}/fr/compare/${a}-vs-${b}/`, '0.6', 'monthly')),
    // ── EN ranking pages with hreflang ──────────────────────
    url(`${base}/rankings/largest-countries/`,  '0.8', 'monthly', `${base}/fr/rankings/largest-countries/`),
    url(`${base}/rankings/most-populated/`,     '0.8', 'monthly', `${base}/fr/rankings/most-populated/`),
    url(`${base}/rankings/most-neighbors/`,     '0.7', 'monthly', `${base}/fr/rankings/most-neighbors/`),
    url(`${base}/rankings/island-nations/`,     '0.7', 'monthly', `${base}/fr/rankings/island-nations/`),
    url(`${base}/rankings/smallest-countries/`, '0.7', 'monthly', `${base}/fr/rankings/smallest-countries/`),
    // ── FR ranking pages ────────────────────────────────────
    url(`${base}/fr/rankings/largest-countries/`,  '0.7', 'monthly'),
    url(`${base}/fr/rankings/most-populated/`,     '0.7', 'monthly'),
    url(`${base}/fr/rankings/most-neighbors/`,     '0.6', 'monthly'),
    url(`${base}/fr/rankings/island-nations/`,     '0.6', 'monthly'),
    url(`${base}/fr/rankings/smallest-countries/`, '0.6', 'monthly'),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${lines.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
