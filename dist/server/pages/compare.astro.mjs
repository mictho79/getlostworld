import { f as createComponent, j as renderComponent, r as renderTemplate, i as createAstro, h as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CpuTesIu.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BJhnRqHA.mjs';
import { d as detectLang, C as COUNTRY_DATA, a as COUNTRY_VIBES, b as COUNTRY_INSIGHTS, s as slugify, e as COUNTRY_PEAKS, f as COUNTRY_DISHES } from '../chunks/detect_De9x_lUC.mjs';
import { t as translateRegion, g as getT } from '../chunks/translations_DatnokUw.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = detectLang(Astro2.request.headers.get("accept-language") || "");
  const t = getT(lang);
  let COUNTRY_DATA$1 = COUNTRY_DATA;
  let COUNTRY_VIBES$1 = COUNTRY_VIBES;
  let COUNTRY_INSIGHTS$1 = COUNTRY_INSIGHTS;
  if (lang === "fr") {
    const fr = await import('../chunks/countryData.fr_BVzuCJyw.mjs');
    COUNTRY_DATA$1 = { ...COUNTRY_DATA, ...fr.COUNTRY_DATA };
    COUNTRY_VIBES$1 = { ...COUNTRY_VIBES, ...fr.COUNTRY_VIBES };
    COUNTRY_INSIGHTS$1 = { ...COUNTRY_INSIGHTS, ...fr.COUNTRY_INSIGHTS };
  }
  const REGION_MAP = {
    Algeria: "Africa",
    Angola: "Africa",
    Benin: "Africa",
    Botswana: "Africa",
    "Burkina Faso": "Africa",
    Burundi: "Africa",
    Cameroon: "Africa",
    "Cape Verde": "Africa",
    "Central African Republic": "Africa",
    Chad: "Africa",
    Comoros: "Africa",
    "Democratic Republic of the Congo": "Africa",
    Djibouti: "Africa",
    Egypt: "Africa",
    "Equatorial Guinea": "Africa",
    Eritrea: "Africa",
    Eswatini: "Africa",
    Ethiopia: "Africa",
    Gabon: "Africa",
    Gambia: "Africa",
    Ghana: "Africa",
    Guinea: "Africa",
    "Guinea-Bissau": "Africa",
    "Ivory Coast": "Africa",
    Kenya: "Africa",
    Lesotho: "Africa",
    Liberia: "Africa",
    Libya: "Africa",
    Madagascar: "Africa",
    Malawi: "Africa",
    Mali: "Africa",
    Mauritania: "Africa",
    Mauritius: "Africa",
    Morocco: "Africa",
    Mozambique: "Africa",
    Namibia: "Africa",
    Niger: "Africa",
    Nigeria: "Africa",
    "Republic of the Congo": "Africa",
    Rwanda: "Africa",
    "S\xE3o Tom\xE9 and Pr\xEDncipe": "Africa",
    Senegal: "Africa",
    Seychelles: "Africa",
    "Sierra Leone": "Africa",
    Somalia: "Africa",
    "South Africa": "Africa",
    "South Sudan": "Africa",
    Sudan: "Africa",
    Tanzania: "Africa",
    Togo: "Africa",
    Tunisia: "Africa",
    Uganda: "Africa",
    Zambia: "Africa",
    Zimbabwe: "Africa",
    "Antigua and Barbuda": "Americas",
    Argentina: "Americas",
    Bahamas: "Americas",
    Barbados: "Americas",
    Belize: "Americas",
    Bolivia: "Americas",
    Brazil: "Americas",
    Canada: "Americas",
    Chile: "Americas",
    Colombia: "Americas",
    "Costa Rica": "Americas",
    Cuba: "Americas",
    Dominica: "Americas",
    "Dominican Republic": "Americas",
    Ecuador: "Americas",
    "El Salvador": "Americas",
    Grenada: "Americas",
    Guatemala: "Americas",
    Guyana: "Americas",
    Haiti: "Americas",
    Honduras: "Americas",
    Jamaica: "Americas",
    Mexico: "Americas",
    Nicaragua: "Americas",
    Panama: "Americas",
    Paraguay: "Americas",
    Peru: "Americas",
    "Saint Kitts and Nevis": "Americas",
    "Saint Lucia": "Americas",
    "Saint Vincent and the Grenadines": "Americas",
    Suriname: "Americas",
    "Trinidad and Tobago": "Americas",
    "United States": "Americas",
    Uruguay: "Americas",
    Venezuela: "Americas",
    Afghanistan: "Asia",
    Armenia: "Asia",
    Azerbaijan: "Asia",
    Bahrain: "Asia",
    Bangladesh: "Asia",
    Bhutan: "Asia",
    Brunei: "Asia",
    Cambodia: "Asia",
    China: "Asia",
    Cyprus: "Asia",
    Georgia: "Asia",
    India: "Asia",
    Indonesia: "Asia",
    Iran: "Asia",
    Iraq: "Asia",
    Israel: "Asia",
    Japan: "Asia",
    Jordan: "Asia",
    Kazakhstan: "Asia",
    Kuwait: "Asia",
    Kyrgyzstan: "Asia",
    Laos: "Asia",
    Lebanon: "Asia",
    Malaysia: "Asia",
    Maldives: "Asia",
    Mongolia: "Asia",
    Myanmar: "Asia",
    Nepal: "Asia",
    "North Korea": "Asia",
    Oman: "Asia",
    Pakistan: "Asia",
    Philippines: "Asia",
    Qatar: "Asia",
    "Saudi Arabia": "Asia",
    Singapore: "Asia",
    "South Korea": "Asia",
    "Sri Lanka": "Asia",
    Syria: "Asia",
    Taiwan: "Asia",
    Tajikistan: "Asia",
    Thailand: "Asia",
    "Timor-Leste": "Asia",
    Turkey: "Asia",
    Turkmenistan: "Asia",
    "United Arab Emirates": "Asia",
    Uzbekistan: "Asia",
    Vietnam: "Asia",
    Yemen: "Asia",
    Albania: "Europe",
    Andorra: "Europe",
    Austria: "Europe",
    Belarus: "Europe",
    Belgium: "Europe",
    "Bosnia and Herzegovina": "Europe",
    Bulgaria: "Europe",
    Croatia: "Europe",
    Czechia: "Europe",
    Denmark: "Europe",
    Estonia: "Europe",
    Finland: "Europe",
    France: "Europe",
    Germany: "Europe",
    Greece: "Europe",
    Hungary: "Europe",
    Iceland: "Europe",
    Ireland: "Europe",
    Italy: "Europe",
    Kosovo: "Europe",
    Latvia: "Europe",
    Liechtenstein: "Europe",
    Lithuania: "Europe",
    Luxembourg: "Europe",
    Malta: "Europe",
    Moldova: "Europe",
    Monaco: "Europe",
    Montenegro: "Europe",
    Netherlands: "Europe",
    "North Macedonia": "Europe",
    Norway: "Europe",
    Poland: "Europe",
    Portugal: "Europe",
    Romania: "Europe",
    Russia: "Europe",
    Serbia: "Europe",
    Slovakia: "Europe",
    Slovenia: "Europe",
    Spain: "Europe",
    Sweden: "Europe",
    Switzerland: "Europe",
    Ukraine: "Europe",
    England: "Europe",
    Scotland: "Europe",
    Wales: "Europe",
    "Northern Ireland": "Europe",
    Australia: "Oceania",
    Fiji: "Oceania",
    Kiribati: "Oceania",
    "Marshall Islands": "Oceania",
    Micronesia: "Oceania",
    Nauru: "Oceania",
    "New Zealand": "Oceania",
    Palau: "Oceania",
    "Papua New Guinea": "Oceania",
    Samoa: "Oceania",
    "Solomon Islands": "Oceania",
    Tonga: "Oceania",
    Tuvalu: "Oceania",
    Vanuatu: "Oceania"
  };
  const REGION_ACCENT = {
    Europe: "#5b8fff",
    Asia: "#ff7043",
    Africa: "#ffb74d",
    Americas: "#69d89a",
    Oceania: "#26c6da"
  };
  const cd = COUNTRY_DATA$1;
  const cv = COUNTRY_VIBES$1;
  const allData = {};
  const allNames = [.../* @__PURE__ */ new Set([...Object.keys(COUNTRY_DATA), ...Object.keys(cd), ...Object.keys(cv)])];
  for (const name of allNames) {
    const slug = slugify(name);
    const region = REGION_MAP[name] || "";
    const regionLocalized = translateRegion(region, lang);
    allData[slug] = {
      name,
      slug,
      region: regionLocalized,
      flag: cd[name]?.flag || "\u{1F30D}",
      capital: cd[name]?.capital || "\u2014",
      population: cd[name]?.population || "\u2014",
      language: cd[name]?.language || "\u2014",
      sport: cd[name]?.sport || "\u2014",
      vibe: cv[name] || "Fascinating \xB7 Historic \xB7 Unique",
      dish: COUNTRY_DISHES[name] || null,
      peak: COUNTRY_PEAKS[name] || null,
      insights: COUNTRY_INSIGHTS$1[name] || {},
      accent: REGION_ACCENT[REGION_MAP[name]] || "#aaaaaa"
    };
  }
  const countriesList = Object.values(allData).map((c) => ({ name: c.name, slug: c.slug })).sort((a, b) => a.name.localeCompare(b.name));
  const title = lang === "fr" ? "Comparer les pays \u2014 C\xF4te \xE0 c\xF4te | World Explorer" : "Compare Countries \u2014 Side-by-Side | World Explorer";
  const description = lang === "fr" ? "Comparez deux pays c\xF4te \xE0 c\xF4te : faits, gastronomie, sport, nature et culture. Recherchez et choisissez parmi tous les pays du monde." : "Compare any two countries side by side: facts, food, sport, nature and culture. Search and pick any countries from around the world.";
  const uiLabels = {
    countryA: t.countryA,
    countryB: t.countryB,
    searchPlaceholder: t.typeCountryName,
    swap: t.swap,
    keyFacts: t.keyFacts,
    capital: t.capitalLabel,
    population: t.populationLabel,
    language: t.languageLabel,
    sport: t.nationalSportLabel,
    dish: t.nationalDishLabel,
    peak: t.highestPeakLabel,
    geographyNature: t.geographyNature,
    peopleCulture: t.peopleCulture,
    foodCuisine: t.foodCuisine,
    sportSection: t.sportSection,
    whichVisit: t.whichVisit,
    exploreEach: lang === "fr" ? "Explorer chaque pays" : lang === "es" ? "Explorar cada pa\xEDs" : lang === "de" ? "Jedes Land entdecken" : "Explore each country",
    exploreMap: t.exploreOnMap,
    emptyState: lang === "fr" ? "S\xE9lectionnez deux pays ci-dessus pour les comparer" : lang === "es" ? "Selecciona dos pa\xEDses arriba para compararlos" : lang === "de" ? "W\xE4hlen Sie oben zwei L\xE4nder aus, um sie zu vergleichen" : "Select two countries above to compare them",
    backToMap: lang === "fr" ? "Carte du monde" : lang === "es" ? "Mapa mundial" : lang === "de" ? "Weltkarte" : "World map"
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "data-astro-cid-neplck24": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/json" id="cmp-all-data">', '<\/script> <script type="application/json" id="cmp-country-list">', '<\/script> <script type="application/json" id="cmp-ui-labels">', "<\/script> ", '<div class="cmp-page" id="cmp-page" data-astro-cid-neplck24> <div class="cmp-bg-deco" aria-hidden="true" data-astro-cid-neplck24> <div class="cmp-bg-ring cmp-bg-ring-1" data-astro-cid-neplck24></div> <div class="cmp-bg-ring cmp-bg-ring-2" data-astro-cid-neplck24></div> <div class="cmp-bg-ring cmp-bg-ring-3" data-astro-cid-neplck24></div> </div> <div class="cmp-wrap" data-astro-cid-neplck24> <a href="/map" class="cmp-back" data-astro-cid-neplck24> <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-neplck24><path d="M10 12L6 8l4-4" data-astro-cid-neplck24></path></svg> ', ' </a> <!-- Switcher --> <div class="cmp-switcher" role="search" aria-label="Compare countries" data-astro-cid-neplck24> <div class="cmp-switcher-field" data-astro-cid-neplck24> <label class="cmp-switcher-label" for="cmp-input-a" data-astro-cid-neplck24>', '</label> <div class="cmp-switcher-input-wrap" data-astro-cid-neplck24> <input id="cmp-input-a" type="text" class="cmp-switcher-input" autocomplete="off" spellcheck="false"', ' data-astro-cid-neplck24> <div class="cmp-dropdown" id="cmp-dropdown-a" role="listbox" hidden data-astro-cid-neplck24></div> </div> </div> <button class="cmp-swap" id="cmp-swap"', "", ' data-astro-cid-neplck24> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-neplck24> <path d="M7 16V4m0 0L3 8m4-4l4 4" data-astro-cid-neplck24></path><path d="M17 8v12m0 0l4-4m-4 4l-4-4" data-astro-cid-neplck24></path> </svg> </button> <div class="cmp-switcher-field" data-astro-cid-neplck24> <label class="cmp-switcher-label" for="cmp-input-b" data-astro-cid-neplck24>', '</label> <div class="cmp-switcher-input-wrap" data-astro-cid-neplck24> <input id="cmp-input-b" type="text" class="cmp-switcher-input" autocomplete="off" spellcheck="false"', ' data-astro-cid-neplck24> <div class="cmp-dropdown" id="cmp-dropdown-b" role="listbox" hidden data-astro-cid-neplck24></div> </div> </div> </div> <!-- Dynamic comparison content --> <div id="cmp-content" data-astro-cid-neplck24> <div class="cmp-empty" data-astro-cid-neplck24> <div class="cmp-empty-icon" data-astro-cid-neplck24>\u{1F30D}</div> <p class="cmp-empty-text" data-astro-cid-neplck24>', "</p> </div> </div> </div> </div> "])), unescapeHTML(JSON.stringify(allData)), unescapeHTML(JSON.stringify(countriesList)), unescapeHTML(JSON.stringify(uiLabels)), maybeRenderHead(), uiLabels.backToMap, uiLabels.countryA, addAttribute(uiLabels.searchPlaceholder, "placeholder"), addAttribute(uiLabels.swap, "title"), addAttribute(uiLabels.swap, "aria-label"), uiLabels.countryB, addAttribute(uiLabels.searchPlaceholder, "placeholder"), uiLabels.emptyState) })}   `;
}, "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/index.astro", void 0);

const $$file = "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/index.astro";
const $$url = "/compare";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
