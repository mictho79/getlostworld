globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, f as renderComponent, d as renderTemplate, e as createAstro, F as Fragment, u as unescapeHTML, a as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_C2HQGDfO.mjs';
import { $ as $$Base } from '../../chunks/Base_DzHndBSy.mjs';
import { d as detectLang, a as COUNTRY_VIBES, C as COUNTRY_DATA, b as COUNTRY_INSIGHTS, s as slugify, f as COUNTRY_CITIES, e as COUNTRY_DISHES, c as COUNTRY_PEAKS, g as getT, t as translateRegion } from '../../chunks/detect_CIgPMk7_.mjs';
import { T as TRAVEL_ADVISORY } from '../../chunks/travelScores_CyA0wfgg.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

// Static mapping: country common name → ISO 3166-1 numeric code (ccn3)
// Used as fallback when REST Countries API is unavailable at build time
const COUNTRY_CCN3 = {
  "Afghanistan":"004","Albania":"008","Algeria":"012","Angola":"024",
  "Argentina":"032","Armenia":"051","Australia":"036","Austria":"040",
  "Azerbaijan":"031","Bangladesh":"050","Belarus":"112","Belgium":"056",
  "Bolivia":"068","Bosnia and Herzegovina":"070","Brazil":"076","Bulgaria":"100",
  "Cambodia":"116","Cameroon":"120","Canada":"124","Chile":"152","China":"156",
  "Colombia":"170","Costa Rica":"188","Croatia":"191","Cuba":"192",
  "Czech Republic":"203","Czechia":"203","Denmark":"208","Ecuador":"218",
  "Egypt":"818","Ethiopia":"231","Finland":"246","France":"250","Georgia":"268",
  "Germany":"276","Ghana":"288","Greece":"300","Guatemala":"320","Hungary":"348",
  "India":"356","Indonesia":"360","Iran":"364","Iraq":"368","Ireland":"372",
  "Israel":"376","Italy":"380","Japan":"392","Jordan":"400","Kazakhstan":"398",
  "Kenya":"404","Kosovo":"383","Kuwait":"414","Kyrgyzstan":"417",
  "Laos":"418","Latvia":"428","Lebanon":"422","Libya":"434","Lithuania":"440",
  "Luxembourg":"442","Madagascar":"450","Malaysia":"458","Mali":"466",
  "Mexico":"484","Mongolia":"496","Morocco":"504","Mozambique":"508",
  "Myanmar":"104","Nepal":"524","Netherlands":"528","New Zealand":"554",
  "Nicaragua":"558","Nigeria":"566","North Korea":"408","Norway":"578",
  "Pakistan":"586","Palestine":"275","Panama":"591","Paraguay":"600",
  "Peru":"604","Philippines":"608","Poland":"616","Portugal":"620",
  "Romania":"642","Russia":"643","Saudi Arabia":"682","Senegal":"686",
  "Serbia":"688","Singapore":"702","Slovakia":"703","Slovenia":"705",
  "Somalia":"706","South Africa":"710","South Korea":"410","Spain":"724",
  "Sri Lanka":"144","Sudan":"729","Sweden":"752","Switzerland":"756",
  "Syria":"760","Taiwan":"158","Tajikistan":"762","Tanzania":"834",
  "Thailand":"764","Tunisia":"788","Turkey":"792","Turkmenistan":"795",
  "Uganda":"800","Ukraine":"804","United Arab Emirates":"784",
  "England":"826","Scotland":"826","Wales":"826","Northern Ireland":"826",
  "United Kingdom":"826","United States of America":"840","Uruguay":"858",
  "Uzbekistan":"860","Venezuela":"862","Vietnam":"704","Yemen":"887",
  "Zambia":"894","Zimbabwe":"716","Democratic Republic of the Congo":"180",
  "Republic of the Congo":"178","Ivory Coast":"384","Côte d'Ivoire":"384",
  "North Macedonia":"807","Moldova":"498","Albania":"008","Eritrea":"232",
  "Djibouti":"262","Rwanda":"646","Burundi":"108","Malawi":"454",
  "Botswana":"072","Namibia":"516","Lesotho":"426","Eswatini":"748",
  "Chad":"148","Niger":"562","Burkina Faso":"854","Guinea":"324",
  "Sierra Leone":"694","Liberia":"430","Togo":"768","Benin":"204",
  "Gabon":"266","Equatorial Guinea":"226","Central African Republic":"140",
  "South Sudan":"728","Estonia":"233","Finland":"246","Cyprus":"196",
  "Malta":"470","Iceland":"352","Albania":"008","Honduras":"340",
  "El Salvador":"222","Belize":"084","Jamaica":"388","Haiti":"332",
  "Dominican Republic":"214","Trinidad and Tobago":"780","Bahamas":"044",
  "Barbados":"052","Ecuador":"218","Bolivia":"068","Guyana":"328",
  "Suriname":"740","French Guiana":"254","Papua New Guinea":"598",
  "Fiji":"242","Vanuatu":"548","Solomon Islands":"090","Samoa":"882",
  "Tonga":"776","Kiribati":"296","Micronesia":"583","Palau":"585",
  "Marshall Islands":"584","Nauru":"520","Tuvalu":"798","New Caledonia":"540",
  "Greenland":"304","Afghanistan":"004","Bhutan":"064","Maldives":"462",
  "Sri Lanka":"144","Oman":"512","Qatar":"634","Bahrain":"048",
  "United Arab Emirates":"784","Kuwait":"414","Armenia":"051",
  "Timor-Leste":"626","Brunei":"096","Mongolia":"496"
};

function geojsonToSvgPath(feature) {
  try {
    if (!feature?.geometry) return null;
    const { type, coordinates } = feature.geometry;
    let polys = type === 'MultiPolygon' ? coordinates : [coordinates];

    if (polys.length > 1) {
      const bbox = poly => {
        let x0=Infinity,x1=-Infinity,y0=Infinity,y1=-Infinity;
        for (const ring of poly) for (const [lng,lat] of ring) {
          if (lng<x0) x0=lng; if (lng>x1) x1=lng;
          if (lat<y0) y0=lat; if (lat>y1) y1=lat;
        }
        return { area:(x1-x0)*(y1-y0), cx:(x0+x1)/2, cy:(y0+y1)/2 };
      };
      const bboxes = polys.map(bbox);
      const primary = bboxes.reduce((best,b) => b.area > best.area ? b : best);
      polys = polys.filter((_,i) =>
        Math.abs(bboxes[i].cx - primary.cx) <= 45 &&
        Math.abs(bboxes[i].cy - primary.cy) <= 45
      );
    }

    let minLng = Infinity, maxLng = -Infinity, minLat = Infinity, maxLat = -Infinity;
    for (const poly of polys) for (const ring of poly) for (const [lng, lat] of ring) {
      if (lng < minLng) minLng = lng; if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat; if (lat > maxLat) maxLat = lat;
    }
    if (!isFinite(minLng)) return null;

    if (maxLng - minLng > 180) {
      minLng = Infinity; maxLng = -Infinity;
      for (const poly of polys) for (const ring of poly) for (const pt of ring) {
        if (pt[0] < 0) pt[0] += 360;
        if (pt[0] < minLng) minLng = pt[0]; if (pt[0] > maxLng) maxLng = pt[0];
      }
    }
    const padLng = Math.max((maxLng - minLng) * 0.07, 0.5);
    const padLat = Math.max((maxLat - minLat) * 0.07, 0.5);
    minLng -= padLng; maxLng += padLng;
    minLat -= padLat; maxLat  += padLat;

    const centerLat = (minLat + maxLat) / 2;
    const cosLat = Math.cos(centerLat * Math.PI / 180);
    const lngSpan = (maxLng - minLng) * cosLat;
    const latSpan = maxLat - minLat;

    const MAX_W = 400, MAX_H = 300;
    let W, H, scale;
    if (lngSpan / latSpan > MAX_W / MAX_H) {
      W = MAX_W; H = Math.max(MAX_W * latSpan / lngSpan, 1); scale = MAX_W / lngSpan;
    } else {
      H = MAX_H; W = Math.max(MAX_H * lngSpan / latSpan, 1); scale = MAX_H / latSpan;
    }

    const project = ([lng, lat]) => {
      const x = (lng - minLng) * cosLat * scale;
      const y = (maxLat - lat) * scale;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    };
    const ringToPath = ring => ring.map((pt, i) => `${i === 0 ? 'M' : 'L'}${project(pt)}`).join(' ') + ' Z';
    const path = polys.map(poly => poly.map(ringToPath).join(' ')).join(' ');
    return { path, viewBox: `0 0 ${W.toFixed(1)} ${H.toFixed(1)}` };
  } catch { return null; }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const SLUG_ALIASES = {
    "united-states": "/country/united-states-of-america/",
    "usa": "/country/united-states-of-america/",
    "uk": "/country/england/",
    "united-kingdom": "/country/england/",
    "czechia": "/country/czech-republic/",
    "dr-congo": "/country/democratic-republic-of-the-congo/",
    "ivory-coast": "/country/cote-divoire/",
    "cape-verde": "/country/cabo-verde/"
  };
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/");
  if (SLUG_ALIASES[slug]) return Astro2.redirect(SLUG_ALIASES[slug], 301);
  const lang = detectLang(Astro2.request.headers.get("accept-language") ?? "en");
  const t = getT(lang);
  const tr = (r) => translateRegion(r, lang);
  let countryVibes = COUNTRY_VIBES;
  let countryDataSrc = COUNTRY_DATA;
  let countryInsights = COUNTRY_INSIGHTS;
  if (lang === "fr") {
    const fr = await import('../../chunks/countryData.fr_cY2axPH-.mjs');
    countryVibes = { ...COUNTRY_VIBES, ...fr.COUNTRY_VIBES };
    countryDataSrc = { ...COUNTRY_DATA, ...fr.COUNTRY_DATA };
    countryInsights = { ...COUNTRY_INSIGHTS, ...fr.COUNTRY_INSIGHTS };
  }
  function formatPop(n) {
    if (!n) return "\u2014";
    if (n >= 1e9) return (n / 1e9).toFixed(1) + "B";
    if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
    return String(n);
  }
  function formatCurrency(c) {
    if (!c) return "\u2014";
    const vals = Object.values(c);
    if (!vals.length) return "\u2014";
    return vals.map((v) => `${v.name}${v.symbol ? " (" + v.symbol + ")" : ""}`).join(", ");
  }
  const LOCAL_TO_REST = {
    "Czech Republic": "Czechia",
    "United States of America": "United States",
    "Democratic Republic of the Congo": "DR Congo",
    "Cabo Verde": "Cape Verde",
    "C\xF4te d'Ivoire": "Ivory Coast"
  };
  const REST_TO_LOCAL = {
    "Czechia": "Czech Republic",
    "United States": "United States of America",
    "DR Congo": "Democratic Republic of the Congo",
    "Cape Verde": "Cabo Verde",
    "Ivory Coast": "C\xF4te d'Ivoire"
  };
  const localName = Object.keys(countryDataSrc).find((k) => slugify(k) === slug) || (lang !== "en" ? Object.keys(COUNTRY_DATA).find((k) => slugify(k) === slug) : void 0);
  if (!localName) return Astro2.redirect("/");
  const localData = countryDataSrc[localName] || COUNTRY_DATA[localName] || {};
  const restName = LOCAL_TO_REST[localName] || localName;
  const RF = "name,capital,population,languages,flags,area,cca2,cca3,ccn3,latlng,region,subregion,currencies,timezones,idd,borders,car";
  let rc = null;
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(restName)}?fullText=true&fields=${RF}`);
    const data = await res.json();
    rc = Array.isArray(data) ? data[0] : null;
  } catch {
  }
  let svgShape = "";
  let svgViewBox = "0 0 400 300";
  try {
    const topojson = await import('../../chunks/index_CJmyl5Hu.mjs');
    const { default: worldTopo } = await import('../../chunks/countries-10m_CGUkeq-w.mjs');
    const geojson = topojson.feature(worldTopo, worldTopo.objects.countries);
    const ccn3 = rc?.ccn3 || COUNTRY_CCN3[localName] || "";
    if (ccn3) {
      const numId = String(+ccn3).padStart(3, "0");
      const feat = geojson.features.find((f) => String(f.id) === numId);
      if (feat) {
        const result = geojsonToSvgPath(feat);
        if (result) {
          svgShape = result.path;
          svgViewBox = result.viewBox;
        }
      }
    }
  } catch {
  }
  const borderCodes = rc?.borders || [];
  let borderCountries = [];
  if (borderCodes.length > 0) {
    try {
      const bRes = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes.join(",")}&fields=name,cca3`);
      const bData = await bRes.json();
      if (Array.isArray(bData)) {
        borderCountries = bData.map((b) => {
          const n = REST_TO_LOCAL[b.name?.common] || b.name?.common || "";
          return { name: n, slug: slugify(n) };
        }).filter((b) => b.name);
      }
    } catch {
    }
  }
  const country = {
    name: localName,
    officialName: rc?.name?.official || localName,
    slug,
    flag: localData.flag || rc?.flags?.emoji || "\u{1F30D}",
    capital: localData.capital || rc?.capital?.[0] || "\u2014",
    population: localData.population || formatPop(rc?.population),
    language: localData.language || Object.values(rc?.languages || {}).join(", ") || "\u2014",
    sport: localData.sport || "\u2014",
    fact: localData.fact || "",
    vibe: countryVibes[localName] || "Fascinating \xB7 Historic \xB7 Unique",
    area: rc?.area ? Math.round(rc.area).toLocaleString("en-US") : "\u2014",
    region: rc?.region || "",
    subregion: rc?.subregion || "",
    latlng: rc?.latlng || [0, 0],
    currency: formatCurrency(rc?.currencies),
    timezone: rc?.timezones?.[0] || "\u2014",
    callingCode: rc?.idd?.root ? rc.idd.root + (rc.idd.suffixes?.length === 1 ? rc.idd.suffixes[0] : "") : "\u2014",
    drivingSide: rc?.car?.side === "left" ? "Left" : rc?.car?.side === "right" ? "Right" : "\u2014",
    borderCountries,
    dish: COUNTRY_DISHES[localName] || null,
    peak: COUNTRY_PEAKS[localName] || null,
    cities: COUNTRY_CITIES[localName] || [],
    svgShape,
    svgViewBox
  };
  const ci = countryInsights[country.name] || {};
  const advisory = TRAVEL_ADVISORY[country.name] ?? null;
  const isDNT = advisory === "do-not-travel";
  const isRecon = advisory === "reconsider";
  const REGION_ACCENT = {
    "Europe": "#5b8fff",
    "Asia": "#ff7043",
    "Africa": "#ffb74d",
    "Americas": "#69d89a",
    "Oceania": "#26c6da",
    "Antarctic": "#b0c4de"
  };
  const accent = REGION_ACCENT[country.region] || "#aaaaaa";
  const countriesList = [.../* @__PURE__ */ new Set([
    ...Object.keys(countryDataSrc),
    ...Object.keys(countryVibes)
  ])].sort().map((name) => ({ name, slug: slugify(name) }));
  const siteBase = Astro2.site?.href ?? "https://terralenses.com/";
  const pageUrl = new URL(`country/${country.slug}/`, siteBase).href;
  const title = `${country.name} \u2013 Facts, Capital & Geography | TerraLenses`;
  const description = [
    `${country.name} is a country in ${country.subregion || country.region}.`,
    country.capital !== "\u2014" ? `Capital: ${country.capital}.` : "",
    country.population !== "\u2014" ? `Population: ${country.population}.` : "",
    country.language !== "\u2014" ? `Language: ${country.language}.` : "",
    country.fact ? country.fact.slice(0, 110) + "\u2026" : country.vibe
  ].filter(Boolean).join(" ");
  const insights = [];
  if (country.capital !== "\u2014") {
    const otherCities = country.cities.slice(0, 3).map((c) => c.name);
    const cityLine = otherCities.length ? `${t.capBeyond}${otherCities.join(", ")}${t.capCitiesHub}` : "";
    insights.push({
      icon: "\u{1F3DB}",
      title: t.insightCapital,
      text: `${country.capital}${t.capServes}${country.name}${country.subregion ? `${t.capPositionedIn}${tr(country.subregion)}` : ""}${t.capSeat}${cityLine}${ci.capital ? " " + ci.capital : ""}`
    });
  }
  if (country.population !== "\u2014") {
    const langs = country.language !== "\u2014" ? country.language : null;
    const plural = langs?.includes(",");
    const langNote = langs ? ` ${plural ? t.popLangsAre : t.popLangIs}${langs}${plural ? t.popLangReflect : t.popLangReflects}` : "";
    const callNote = country.callingCode !== "\u2014" ? `${t.popInternationally}${country.name}${t.popDialCode}${country.callingCode}${t.popDialCodeEnd}` : "";
    insights.push({
      icon: "\u{1F465}",
      title: t.insightPeople,
      text: `${t.aboutPopApprox.trimStart()}${country.population}, ${country.name}${t.popVibrant}${langNote}${callNote}${ci.people ? " " + ci.people : ""}`
    });
  }
  if (country.area !== "\u2014") {
    const loc = country.subregion ? `${t.geoInThe}${tr(country.subregion)}${t.geoSubregionOf}${tr(country.region)}` : country.region ? `${t.geoIn}${tr(country.region)}` : "";
    const coords = country.latlng[0] !== 0 || country.latlng[1] !== 0 ? `${t.geoGeoCentred}${Math.abs(country.latlng[0]).toFixed(1)}\xB0${country.latlng[0] >= 0 ? "N" : "S"}, ${Math.abs(country.latlng[1]).toFixed(1)}\xB0${country.latlng[1] >= 0 ? "E" : "W"},` : "";
    const drive = country.drivingSide !== "\u2014" ? `${country.drivingSide === "Left" ? t.geoLeftHandRule : t.geoRightHandRule}${tr(country.region) || "regional"}${t.geoConvention}` : "";
    insights.push({
      icon: "\u{1F5FA}",
      title: t.insightGeography,
      text: `${country.name}${t.geoSpans}${country.area} km\xB2${loc ? `, ${loc}` : ""}.${coords}${t.geoDiverseLandscapes}${drive}`
    });
  }
  if (country.currency !== "\u2014") {
    const tzNote = country.timezone !== "\u2014" ? `${t.econBusiness}${country.timezone}${t.econAligning}` : "";
    insights.push({
      icon: "\u{1F4B1}",
      title: t.insightEconomy,
      text: `${t.econCurrencyIs}${country.currency}${t.econUsedFor}${t.econShapedPre}${country.name}${t.econShapedPost}${tzNote}`
    });
  }
  if (country.dish) {
    insights.push({
      icon: "\u{1F37D}",
      title: t.insightFood,
      text: `${t.foodEmblem}${country.name}${t.foodIs}${country.dish}. ${ci.food ? ci.food : `${t.foodCulture}${country.name}${t.foodTied}`}`
    });
  }
  if (country.sport !== "\u2014") {
    insights.push({
      icon: "\u{1F3C5}",
      title: t.insightSport,
      text: `${country.sport}${t.sportHolds}${country.name}${t.sportNatId}${ci.sport ? ci.sport : `${t.sportIn}${country.name}${t.sportBeyond}`}`
    });
  }
  if (country.peak) {
    const elev = country.peak.elevation.toLocaleString("en-US");
    insights.push({
      icon: "\u26F0",
      title: t.insightNature,
      text: `${t.natureHighest}${country.name}${t.natureIs}${country.peak.name}${t.natureRising}${elev}${t.natureMetres}${ci.nature ? ci.nature : t.natureEmbodies}`
    });
  }
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "TerraLenses", "item": siteBase },
          { "@type": "ListItem", "position": 2, "name": country.name, "item": pageUrl }
        ]
      },
      {
        "@type": "Place",
        "name": country.name,
        ...country.officialName !== country.name ? { "alternateName": country.officialName } : {},
        "description": description,
        "url": pageUrl,
        ...country.latlng[0] !== 0 || country.latlng[1] !== 0 ? {
          "geo": { "@type": "GeoCoordinates", "latitude": country.latlng[0], "longitude": country.latlng[1] }
        } : {},
        ...country.region ? { "containedInPlace": { "@type": "Continent", "name": country.region } } : {}
      }
    ]
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "countryName": country.name, "data-astro-cid-croo5tvz": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="cp-page"', ' data-astro-cid-croo5tvz> <!-- \u2500\u2500 Decorative background (always visible) \u2500\u2500 --> <div class="cp-bg-deco" aria-hidden="true" data-astro-cid-croo5tvz> <div class="cp-bg-ring cp-bg-ring-1" data-astro-cid-croo5tvz></div> <div class="cp-bg-ring cp-bg-ring-2" data-astro-cid-croo5tvz></div> <div class="cp-bg-ring cp-bg-ring-3" data-astro-cid-croo5tvz></div> ', ' </div> <div class="cp-wrap" data-astro-cid-croo5tvz> <!-- Back --> <a href="/map" class="cp-back" data-astro-cid-croo5tvz> <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-croo5tvz><path d="M10 12L6 8l4-4" data-astro-cid-croo5tvz></path></svg> ', ' </a> <!-- Hero --> <header class="cp-hero" data-astro-cid-croo5tvz> ', ' <h1 class="cp-title" data-astro-cid-croo5tvz>', "</h1> ", ' <p class="cp-region" data-astro-cid-croo5tvz>', '</p> <p class="cp-vibe" data-astro-cid-croo5tvz>', '</p> </header> <hr class="cp-divider" data-astro-cid-croo5tvz> <!-- Advisory banner --> ', " ", ' <!-- Key facts --> <section class="cp-section" aria-label="Key facts" data-astro-cid-croo5tvz> <h2 class="cp-section-label" data-astro-cid-croo5tvz>', '</h2> <div class="cp-stats-grid" data-astro-cid-croo5tvz> ', " ", " ", " ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Compare button --> <div class="cp-compare-wrap" data-astro-cid-croo5tvz> <button class="cp-compare-btn" id="cp-compare-open"', "", ' data-astro-cid-croo5tvz> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-croo5tvz> <rect x="3" y="3" width="7" height="18" data-astro-cid-croo5tvz></rect><rect x="14" y="3" width="7" height="18" data-astro-cid-croo5tvz></rect> </svg> ', ' </button> </div> <!-- About --> <section class="cp-section" data-astro-cid-croo5tvz> <h2 class="cp-section-label" data-astro-cid-croo5tvz>', " ", '</h2> <p class="cp-about" data-astro-cid-croo5tvz> <strong data-astro-cid-croo5tvz>', "</strong>", "", " ", " ", " ", " ", " ", " </p> </section> <!-- Did you know --> ", " <!-- SEO Insight paragraphs --> ", " <!-- Cities --> ", " <!-- Neighbouring countries --> ", " <!-- CTA map --> ", ' </div> <!-- Countries data for modal autocomplete --> <script type="application/json" id="cp-countries-data">', '<\/script> <!-- Compare modal --> <div class="cp-modal-overlay" id="cp-modal" hidden aria-modal="true" role="dialog" aria-label="Compare countries" data-astro-cid-croo5tvz> <div class="cp-modal-box" data-astro-cid-croo5tvz> <div class="cp-modal-header" data-astro-cid-croo5tvz> <p class="cp-modal-title" data-astro-cid-croo5tvz>', "<strong data-astro-cid-croo5tvz>", "</strong>", '</p> <button class="cp-modal-close" id="cp-modal-close" aria-label="Close" data-astro-cid-croo5tvz> <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" data-astro-cid-croo5tvz><path d="M2 2l12 12M14 2L2 14" data-astro-cid-croo5tvz></path></svg> </button> </div> <div class="cp-modal-search-wrap" data-astro-cid-croo5tvz> <input id="cp-modal-input" type="text" class="cp-modal-input"', ' autocomplete="off" spellcheck="false" data-astro-cid-croo5tvz> <div class="cp-modal-dropdown" id="cp-modal-dropdown" role="listbox" hidden data-astro-cid-croo5tvz></div> </div> </div> </div> </div>'])), maybeRenderHead(), addAttribute(`--accent:${accent};`, "style"), country.svgShape && renderTemplate`<svg class="cp-shape-svg"${addAttribute(country.svgViewBox, "viewBox")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" data-astro-cid-croo5tvz> <path${addAttribute(country.svgShape, "d")} data-astro-cid-croo5tvz></path> </svg>`, t.backToMap, country.svgShape ? renderTemplate`<div class="cp-hero-shape" aria-hidden="true" data-astro-cid-croo5tvz> <svg${addAttribute(country.svgViewBox, "viewBox")} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" data-astro-cid-croo5tvz> <path${addAttribute(country.svgShape, "d")} data-astro-cid-croo5tvz></path> </svg> </div>` : renderTemplate`<span class="cp-flag" role="img"${addAttribute(`Flag of ${country.name}`, "aria-label")} data-astro-cid-croo5tvz>${country.flag}</span>`, country.name, country.officialName !== country.name && renderTemplate`<p class="cp-official" data-astro-cid-croo5tvz>${country.officialName}</p>`, tr(country.subregion || country.region), country.vibe, isRecon && renderTemplate`<div class="cp-advisory cp-advisory--reconsider" role="alert" data-astro-cid-croo5tvz> <span data-astro-cid-croo5tvz>⚠️</span> <span data-astro-cid-croo5tvz>${t.advisoryReconsiderPre}<strong data-astro-cid-croo5tvz>${country.name}</strong>${t.advisoryReconsiderPost}</span> </div>`, isDNT && renderTemplate`<div class="cp-advisory cp-advisory--dnt" role="alert" data-astro-cid-croo5tvz> <span data-astro-cid-croo5tvz>⛔</span> <span data-astro-cid-croo5tvz>${t.advisoryDntPre}<strong data-astro-cid-croo5tvz>${country.name}</strong>${t.advisoryDntPost}</span> </div>`, t.keyFacts, country.capital !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.capitalLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.capital}</span></div>`, country.population !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.populationLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.population}</span></div>`, country.language !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${country.language.includes(",") ? t.languagesLabel : t.languageLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.language}</span></div>`, country.area !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.areaLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.area} km²</span></div>`, country.currency !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.currencyLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.currency}</span></div>`, country.timezone !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.timezoneLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.timezone}</span></div>`, country.callingCode !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.callingCodeLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.callingCode}</span></div>`, country.drivingSide !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.drivesOnLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.drivingSide === "Left" ? t.driveLeft : t.driveRight}</span></div>`, country.sport !== "\u2014" && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.nationalSportLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.sport}</span></div>`, country.dish && renderTemplate`<div class="cp-stat" data-astro-cid-croo5tvz><span class="cp-stat-label" data-astro-cid-croo5tvz>${t.nationalDishLabel}</span><span class="cp-stat-val" data-astro-cid-croo5tvz>${country.dish}</span></div>`, addAttribute(country.slug, "data-slug"), addAttribute(country.name, "data-name"), t.compareWithAnother, t.aboutSection, country.name, country.name, country.officialName !== country.name ? ` (${t.aboutOfficially} ${country.officialName})` : "", country.subregion ? `${t.aboutIsCountryLocatedIn}${tr(country.subregion)}.` : country.region ? `${t.aboutIsCountryIn}${tr(country.region)}.` : t.aboutIsCountry, country.capital !== "\u2014" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-croo5tvz": true }, { "default": async ($$result3) => renderTemplate`${t.aboutCapitalIs}<strong data-astro-cid-croo5tvz>${country.capital}</strong>${`${country.cities.length > 0 ? `${t.aboutWithOtherCities}${country.cities.slice(0, 2).map((c) => c.name).join(` ${t.andConj} `)}` : ""}.`}` })}`, country.population !== "\u2014" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-croo5tvz": true }, { "default": async ($$result3) => renderTemplate`${t.aboutPopApprox}<strong data-astro-cid-croo5tvz>${country.population}</strong>${country.language !== "\u2014" ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-croo5tvz": true }, { "default": async ($$result4) => renderTemplate`${country.language.includes(",") ? t.aboutMainLangsAre : t.aboutMainLangIs}<strong data-astro-cid-croo5tvz>${country.language}</strong>${"."}` })}` : "."}` })}`, country.area !== "\u2014" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-croo5tvz": true }, { "default": async ($$result3) => renderTemplate`${t.aboutCoversArea}<strong data-astro-cid-croo5tvz>${country.area} km²</strong>${"."}` })}`, country.currency !== "\u2014" && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-croo5tvz": true }, { "default": async ($$result3) => renderTemplate`${t.aboutOfficialCurrency}<strong data-astro-cid-croo5tvz>${country.currency}</strong>${"."}` })}`, country.drivingSide !== "\u2014" && (country.drivingSide === "Left" ? t.aboutDrivesLeft : t.aboutDrivesRight), country.fact && renderTemplate`<section class="cp-section" data-astro-cid-croo5tvz> <h2 class="cp-section-label" data-astro-cid-croo5tvz>${t.didYouKnow}</h2> <blockquote class="cp-fact" data-astro-cid-croo5tvz>${country.fact}</blockquote> </section>`, insights.length > 0 && renderTemplate`<section class="cp-section" data-astro-cid-croo5tvz> <h2 class="cp-section-label" data-astro-cid-croo5tvz>${t.exploreSection} ${country.name}</h2> <div class="cp-insights" data-astro-cid-croo5tvz> ${insights.map((ins) => renderTemplate`<div class="cp-insight" data-astro-cid-croo5tvz> <div class="cp-insight-head" data-astro-cid-croo5tvz> <span class="cp-insight-icon" data-astro-cid-croo5tvz>${ins.icon}</span> <h3 class="cp-insight-title" data-astro-cid-croo5tvz>${ins.title}</h3> </div> <p class="cp-insight-text" data-astro-cid-croo5tvz>${ins.text}</p> </div>`)} </div> </section>`, country.cities.length > 0 && renderTemplate`<section class="cp-section" data-astro-cid-croo5tvz> <h2 class="cp-section-label" data-astro-cid-croo5tvz>${t.majorCities}</h2> <div class="cp-cities" data-astro-cid-croo5tvz> <div class="cp-city cp-city--capital" data-astro-cid-croo5tvz> <span class="cp-city-dot cp-city-dot--capital" data-astro-cid-croo5tvz></span> <span class="cp-city-name" data-astro-cid-croo5tvz>${country.capital}</span> <span class="cp-city-tag" data-astro-cid-croo5tvz>${t.capitalTag}</span> </div> ${country.cities.map((city) => renderTemplate`<div class="cp-city" data-astro-cid-croo5tvz> <span class="cp-city-dot" data-astro-cid-croo5tvz></span> <span class="cp-city-name" data-astro-cid-croo5tvz>${city.name}</span> </div>`)} </div> </section>`, country.borderCountries.length > 0 && renderTemplate`<nav class="cp-section" aria-label="Neighbouring countries" data-astro-cid-croo5tvz> <h2 class="cp-section-label" data-astro-cid-croo5tvz>${t.neighbouringCountries}</h2> <div class="cp-neighbours" data-astro-cid-croo5tvz> ${country.borderCountries.map((b) => renderTemplate`<a${addAttribute(`/country/${b.slug}/`, "href")} class="cp-neighbour" data-astro-cid-croo5tvz>${b.name}</a>`)} </div> </nav>`, !isDNT && renderTemplate`<div class="cp-map-cta" data-astro-cid-croo5tvz> <a href="/map" class="cp-map-btn" data-astro-cid-croo5tvz> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-croo5tvz> <circle cx="12" cy="12" r="10" data-astro-cid-croo5tvz></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-croo5tvz></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-croo5tvz></path> </svg> ${isRecon ? `${t.viewOnMapPre}${country.name}${t.viewOnMapPost}` : t.exploreOnMap} </a> </div>`, unescapeHTML(JSON.stringify(countriesList)), t.compareModalPre, country.name, t.compareModalPost, addAttribute(t.typeCountryName, "placeholder")), "head": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": async ($$result3) => renderTemplate(_b || (_b = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(jsonLd)) })}` })}   `;
}, "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/country/[slug].astro", void 0);

const $$file = "C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/country/[slug].astro";
const $$url = "/country/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
