import type { APIRoute } from 'astro';
import { COUNTRY_VIBES, slugify } from '../lib/countryData.js';
import { USE_CASE_SLUGS } from '../lib/useCaseData.js';
import { BEST_OF_SLUGS } from '../lib/bestOfData.js';

const BLOG_SLUGS = [
  'france-vs-spain-which-to-visit',
  'usa-vs-canada-comparison',
  'japan-vs-south-korea-travel',
  'italy-vs-greece-summer-holiday',
  'thailand-vs-vietnam-backpacking',
  'australia-vs-new-zealand-travel',
  'portugal-vs-spain-expat',
  'germany-vs-austria-differences',
];

const today = new Date().toISOString().slice(0, 10);

const url = (loc: string, priority: string, changefreq: string, frLoc?: string, esLoc?: string) => {
  let hreflang = '';
  if (frLoc && esLoc) {
    hreflang =
      `\n    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="fr" href="${frLoc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="es" href="${esLoc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`;
  } else if (frLoc) {
    hreflang =
      `\n    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="fr" href="${frLoc}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`;
  }
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
    ['england', 'france'],
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
    ['united-states-of-america', 'england'],
    ['australia', 'new-zealand'],
    ['canada', 'australia'],
    // Africa
    ['egypt', 'morocco'],
    ['nigeria', 'ghana'],
    ['south-africa', 'kenya'],
  ];

  const lines = [
    // ── Pages statiques avec hreflang ───────────────────────
    url(base + '/',           '1.0', 'weekly',  base + '/fr/',           base + '/es/'),
    url(base + '/map/',       '0.9', 'weekly',  base + '/fr/map/',       base + '/es/map/'),
    url(base + '/compare/',   '0.8', 'weekly',  base + '/fr/compare/',   base + '/es/compare/'),
    url(base + '/countries/', '0.8', 'weekly',  base + '/fr/countries/', base + '/es/countries/'),
    url(base + '/legal/',     '0.3', 'yearly',  base + '/fr/legal/',     base + '/es/legal/'),
    url(base + '/privacy/',   '0.3', 'yearly',  base + '/fr/privacy/',   base + '/es/privacy/'),
    url(base + '/contact/',   '0.3', 'yearly',  base + '/fr/contact/',   base + '/es/contact/'),
    // ── E-E-A-T pages (EN only for now) ────────────────────
    url(base + '/about/',          '0.7', 'monthly'),
    url(base + '/authors/mike/',   '0.6', 'monthly'),
    url(base + '/methodology/',    '0.5', 'yearly'),
    url(base + '/cookies/',        '0.3', 'yearly'),
    // ── FR static (alternate, no hreflang duplication) ──────
    url(base + '/fr/',           '0.9', 'weekly'),
    url(base + '/fr/map/',       '0.8', 'weekly'),
    url(base + '/fr/compare/',   '0.7', 'weekly'),
    url(base + '/fr/countries/', '0.7', 'weekly'),
    url(base + '/fr/legal/',     '0.3', 'yearly'),
    url(base + '/fr/privacy/',   '0.3', 'yearly'),
    url(base + '/fr/contact/',   '0.3', 'yearly'),
    // ── ES static ───────────────────────────────────────────
    url(base + '/es/',           '0.9', 'weekly'),
    url(base + '/es/map/',       '0.8', 'weekly'),
    url(base + '/es/compare/',   '0.7', 'weekly'),
    url(base + '/es/countries/', '0.7', 'weekly'),
    url(base + '/es/legal/',     '0.3', 'yearly'),
    url(base + '/es/privacy/',   '0.3', 'yearly'),
    url(base + '/es/contact/',   '0.3', 'yearly'),
    // ── EN country pages with hreflang ──────────────────────
    ...countries.map(c => url(
      `${base}/country/${slugify(c)}/`, '0.8', 'monthly',
      `${base}/fr/country/${slugify(c)}/`,
      `${base}/es/country/${slugify(c)}/`
    )),
    // ── FR country pages ────────────────────────────────────
    ...countries.map(c => url(`${base}/fr/country/${slugify(c)}/`, '0.7', 'monthly')),
    // ── ES country pages ────────────────────────────────────
    ...countries.map(c => url(`${base}/es/country/${slugify(c)}/`, '0.7', 'monthly')),
    // ── EN curated compare pairs with hreflang ──────────────
    ...curated.map(([a, b]) => url(
      `${base}/compare/${a}-vs-${b}/`, '0.7', 'monthly',
      `${base}/fr/compare/${a}-vs-${b}/`,
      `${base}/es/compare/${a}-vs-${b}/`
    )),
    // ── FR curated compare pairs ────────────────────────────
    ...curated.map(([a, b]) => url(`${base}/fr/compare/${a}-vs-${b}/`, '0.6', 'monthly')),
    // ── ES curated compare pairs ────────────────────────────
    ...curated.map(([a, b]) => url(`${base}/es/compare/${a}-vs-${b}/`, '0.6', 'monthly')),
    // ── Blog index ─────────────────────────────────────────
    url(`${base}/blog/`,    '0.8', 'weekly', `${base}/fr/blog/`,    `${base}/es/blog/`),
    url(`${base}/fr/blog/`, '0.7', 'weekly'),
    url(`${base}/es/blog/`, '0.7', 'weekly'),
    // ── Blog articles with hreflang ─────────────────────────
    ...BLOG_SLUGS.map(s => url(
      `${base}/blog/${s}/`, '0.7', 'monthly',
      `${base}/fr/blog/${s}/`,
      `${base}/es/blog/${s}/`
    )),
    ...BLOG_SLUGS.map(s => url(`${base}/fr/blog/${s}/`, '0.6', 'monthly')),
    ...BLOG_SLUGS.map(s => url(`${base}/es/blog/${s}/`, '0.6', 'monthly')),
    // ── Use Case pages with hreflang ───────────────────────
    url(`${base}/for/`, '0.7', 'monthly', `${base}/fr/for/`, `${base}/es/for/`),
    url(`${base}/fr/for/`, '0.6', 'monthly'),
    url(`${base}/es/for/`, '0.6', 'monthly'),
    ...USE_CASE_SLUGS.map((s: string) => url(
      `${base}/for/${s}/`, '0.7', 'monthly',
      `${base}/fr/for/${s}/`,
      `${base}/es/for/${s}/`
    )),
    ...USE_CASE_SLUGS.map((s: string) => url(`${base}/fr/for/${s}/`, '0.6', 'monthly')),
    ...USE_CASE_SLUGS.map((s: string) => url(`${base}/es/for/${s}/`, '0.6', 'monthly')),
    // ── Best Of index ──────────────────────────────────────
    url(`${base}/best/`, '0.8', 'monthly', `${base}/fr/best/`, `${base}/es/best/`),
    url(`${base}/fr/best/`, '0.7', 'monthly'),
    url(`${base}/es/best/`, '0.7', 'monthly'),
    // ── Best Of pages with hreflang ────────────────────────
    ...BEST_OF_SLUGS.map((s: string) => url(
      `${base}/best/${s}/`, '0.7', 'monthly',
      `${base}/fr/best/${s}/`,
      `${base}/es/best/${s}/`
    )),
    ...BEST_OF_SLUGS.map((s: string) => url(`${base}/fr/best/${s}/`, '0.6', 'monthly')),
    ...BEST_OF_SLUGS.map((s: string) => url(`${base}/es/best/${s}/`, '0.6', 'monthly')),
    // ── EN ranking pages with hreflang ──────────────────────
    url(`${base}/rankings/largest-countries/`,  '0.8', 'monthly', `${base}/fr/rankings/largest-countries/`,  `${base}/es/rankings/largest-countries/`),
    url(`${base}/rankings/most-populated/`,     '0.8', 'monthly', `${base}/fr/rankings/most-populated/`,     `${base}/es/rankings/most-populated/`),
    url(`${base}/rankings/most-neighbors/`,     '0.7', 'monthly', `${base}/fr/rankings/most-neighbors/`,     `${base}/es/rankings/most-neighbors/`),
    url(`${base}/rankings/island-nations/`,     '0.7', 'monthly', `${base}/fr/rankings/island-nations/`,     `${base}/es/rankings/island-nations/`),
    url(`${base}/rankings/smallest-countries/`, '0.7', 'monthly', `${base}/fr/rankings/smallest-countries/`, `${base}/es/rankings/smallest-countries/`),
    // ── FR ranking pages ────────────────────────────────────
    url(`${base}/fr/rankings/largest-countries/`,  '0.7', 'monthly'),
    url(`${base}/fr/rankings/most-populated/`,     '0.7', 'monthly'),
    url(`${base}/fr/rankings/most-neighbors/`,     '0.6', 'monthly'),
    url(`${base}/fr/rankings/island-nations/`,     '0.6', 'monthly'),
    url(`${base}/fr/rankings/smallest-countries/`, '0.6', 'monthly'),
    // ── ES ranking pages ────────────────────────────────────
    url(`${base}/es/rankings/largest-countries/`,  '0.7', 'monthly'),
    url(`${base}/es/rankings/most-populated/`,     '0.7', 'monthly'),
    url(`${base}/es/rankings/most-neighbors/`,     '0.6', 'monthly'),
    url(`${base}/es/rankings/island-nations/`,     '0.6', 'monthly'),
    url(`${base}/es/rankings/smallest-countries/`, '0.6', 'monthly'),
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
