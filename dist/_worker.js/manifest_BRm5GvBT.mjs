globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as decodeKey } from './chunks/astro/server_CzKrnJyY.mjs';
import './chunks/astro-designed-error-pages_Cg7UM_jw.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DSqiLD53.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/micth/Desktop/dev/seo/claud/maps/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const u=JSON.parse(document.getElementById(\"cmp-countries\").textContent);let o=document.querySelector(\".hero-name--a\")?.closest(\".hero-side\")?.querySelector(\".hero-name\")?.dataset.slug??\"\",a=document.querySelector(\".hero-name--b\")?.closest(\".hero-side\")?.querySelector(\".hero-name\")?.dataset.slug??\"\";const I=window.location.pathname.replace(/\\/$/,\"\"),g=I.split(\"/\").pop()||\"\",f=g.indexOf(\"-vs-\");f>-1&&(o=g.slice(0,f),a=g.slice(f+4));function B(e,n,i){let l=-1;const v=t=>{if(n.innerHTML=\"\",l=-1,!t.trim()){n.hidden=!0;return}const c=t.toLowerCase(),d=u.filter(s=>s.name.toLowerCase().includes(c)).sort((s,r)=>{const m=s.name.toLowerCase().startsWith(c),k=r.name.toLowerCase().startsWith(c);return m===k?s.name.localeCompare(r.name):m?-1:1}).slice(0,8);if(!d.length){n.hidden=!0;return}d.forEach(s=>{const r=document.createElement(\"div\");r.className=\"ac-opt\",r.dataset.slug=s.slug,r.textContent=s.name,r.addEventListener(\"mousedown\",m=>{m.preventDefault(),w(s)}),n.appendChild(r)}),n.hidden=!1},w=t=>{e.value=t.name,n.hidden=!0,l=-1,i(t)},y=t=>{n.querySelectorAll(\".ac-opt\").forEach((c,d)=>c.classList.toggle(\"ac-opt--on\",d===t)),l=t};return e.addEventListener(\"input\",()=>v(e.value)),e.addEventListener(\"focus\",()=>{e.value&&v(e.value)}),e.addEventListener(\"blur\",()=>setTimeout(()=>{n.hidden=!0},200)),e.addEventListener(\"keydown\",t=>{const c=n.querySelectorAll(\".ac-opt\");if(t.key===\"ArrowDown\")t.preventDefault(),y(Math.min(l+1,c.length-1));else if(t.key===\"ArrowUp\")t.preventDefault(),y(Math.max(l-1,-1));else if(t.key===\"Enter\"&&l>=0){t.preventDefault();const d=u.find(s=>s.slug===c[l].dataset.slug);d&&w(d)}else t.key===\"Escape\"&&(n.hidden=!0,e.blur())}),{setValue:t=>{e.value=t}}}function h(){o&&a&&o!==a&&(window.location.href=`/compare/${o}-vs-${a}/`)}const S=document.getElementById(\"sw-a\"),b=document.getElementById(\"sw-b\"),q=document.getElementById(\"sw-drop-a\"),x=document.getElementById(\"sw-drop-b\"),D=document.getElementById(\"sw-swap\"),A=B(S,q,e=>{o=e.slug,h()}),C=B(b,x,e=>{a=e.slug,h()}),p=u.find(e=>e.slug===o),L=u.find(e=>e.slug===a);p&&A.setValue(p.name);L&&C.setValue(L.name);D.addEventListener(\"click\",()=>{[o,a]=[a,o];const e=u.find(i=>i.slug===o),n=u.find(i=>i.slug===a);e&&A.setValue(e.name),n&&C.setValue(n.name),h()});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.CWAURvma.css"}],"routeData":{"route":"/compare/[slug]","isIndex":false,"type":"page","pattern":"^\\/compare\\/([^/]+?)\\/?$","segments":[[{"content":"compare","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/compare/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.OI1ReYsC.js"}],"styles":[{"type":"external","src":"/_astro/index.Dh2pQJyb.css"}],"routeData":{"route":"/compare","isIndex":true,"type":"page","pattern":"^\\/compare\\/?$","segments":[[{"content":"compare","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compare/index.astro","pathname":"/compare","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const m=JSON.parse(document.getElementById(\"cp-countries-data\").textContent),p=document.getElementById(\"cp-compare-open\"),i=document.getElementById(\"cp-modal\"),w=document.getElementById(\"cp-modal-close\"),s=document.getElementById(\"cp-modal-input\"),o=document.getElementById(\"cp-modal-dropdown\"),f=p.dataset.slug??\"\";let a=-1;function y(){i.hidden=!1,s.value=\"\",o.hidden=!0,a=-1,setTimeout(()=>s.focus(),50),document.addEventListener(\"keydown\",v)}function l(){i.hidden=!0,document.removeEventListener(\"keydown\",v)}function v(e){e.key===\"Escape\"&&l()}p.addEventListener(\"click\",y);w.addEventListener(\"click\",l);i.addEventListener(\"click\",e=>{e.target===i&&l()});function E(e){if(o.innerHTML=\"\",a=-1,!e.trim()){o.hidden=!0;return}const d=e.toLowerCase(),c=m.filter(t=>t.slug!==f&&t.name.toLowerCase().includes(d)).sort((t,n)=>{const r=t.name.toLowerCase().startsWith(d),h=n.name.toLowerCase().startsWith(d);return r===h?t.name.localeCompare(n.name):r?-1:1}).slice(0,8);if(!c.length){o.hidden=!0;return}c.forEach(t=>{const n=document.createElement(\"div\");n.className=\"ac-option\",n.setAttribute(\"role\",\"option\"),n.dataset.slug=t.slug,n.textContent=t.name,n.addEventListener(\"mousedown\",r=>{r.preventDefault(),g(t)}),o.appendChild(n)}),o.hidden=!1}function g(e){window.location.href=`/compare/${f}-vs-${e.slug}/`}function u(e){o.querySelectorAll(\".ac-option\").forEach((c,t)=>c.classList.toggle(\"ac-option--active\",t===e)),a=e}s.addEventListener(\"input\",()=>E(s.value));s.addEventListener(\"blur\",()=>setTimeout(()=>{o.hidden=!0},200));s.addEventListener(\"focus\",()=>{s.value&&E(s.value)});s.addEventListener(\"keydown\",e=>{const d=o.querySelectorAll(\".ac-option\");if(e.key===\"ArrowDown\")e.preventDefault(),u(Math.min(a+1,d.length-1));else if(e.key===\"ArrowUp\")e.preventDefault(),u(Math.max(a-1,-1));else if(e.key===\"Enter\"&&a>=0){e.preventDefault();const c=m.find(t=>t.slug===d[a].dataset.slug);c&&g(c)}else e.key===\"Escape\"&&l()});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.CIGWqoxr.css"}],"routeData":{"route":"/country/[slug]","isIndex":false,"type":"page","pattern":"^\\/country\\/([^/]+?)\\/?$","segments":[[{"content":"country","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/country/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-y6dp7ad7],[data-astro-cid-y6dp7ad7]:before,[data-astro-cid-y6dp7ad7]:after{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden;font-family:Inter,sans-serif;background:#0d1117}#sidebar[data-astro-cid-y6dp7ad7]{position:fixed;top:0;left:0;width:300px;height:100%;z-index:9500;background:#0d1117;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;overflow:hidden}#sb-welcome[data-astro-cid-y6dp7ad7]{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;transition:opacity .4s}#sb-welcome[data-astro-cid-y6dp7ad7].hidden{opacity:0;pointer-events:none}.sb-globe[data-astro-cid-y6dp7ad7]{font-size:48px;margin-bottom:4px}.sb-welcome-title[data-astro-cid-y6dp7ad7]{font-size:17px;font-weight:600;color:#fff;letter-spacing:-.02em}.sb-welcome-sub[data-astro-cid-y6dp7ad7]{font-size:12px;color:#ffffff47}#sb-country[data-astro-cid-y6dp7ad7]{position:absolute;inset:0;display:flex;flex-direction:column;opacity:0;pointer-events:none;transition:opacity .4s;overflow-y:auto}#sb-country[data-astro-cid-y6dp7ad7].visible{opacity:1;pointer-events:all}#sb-accent[data-astro-cid-y6dp7ad7]{height:3px;width:100%;background:linear-gradient(90deg,#3b82f6,#8b5cf6);flex-shrink:0}#sb-banner[data-astro-cid-y6dp7ad7]{padding:24px 24px 20px;display:flex;align-items:center;gap:16px;flex-shrink:0}#sb-flag[data-astro-cid-y6dp7ad7]{font-size:44px;line-height:1;flex-shrink:0}.sb-name-block[data-astro-cid-y6dp7ad7]{display:flex;flex-direction:column;gap:3px;min-width:0}#sb-name[data-astro-cid-y6dp7ad7]{font-size:22px;font-weight:700;color:#fff;letter-spacing:-.03em;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#sb-region[data-astro-cid-y6dp7ad7]{font-size:11px;color:#ffffff4d;letter-spacing:.05em;text-transform:uppercase}.sb-divider[data-astro-cid-y6dp7ad7]{height:1px;background:#ffffff0f;margin:0 24px;flex-shrink:0}.sb-section-label[data-astro-cid-y6dp7ad7]{font-size:10px;font-weight:500;color:#fff3;text-transform:uppercase;letter-spacing:.09em;padding:16px 24px 10px}.sb-primary-grid[data-astro-cid-y6dp7ad7]{display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:0 24px}.sb-primary-stat[data-astro-cid-y6dp7ad7]{background:#ffffff08;border:1px solid rgba(255,255,255,.05);border-radius:8px;padding:12px 14px;display:flex;flex-direction:column;gap:5px;margin:2px}.sb-primary-label[data-astro-cid-y6dp7ad7]{font-size:10px;color:#ffffff40;text-transform:uppercase;letter-spacing:.07em}.sb-primary-val[data-astro-cid-y6dp7ad7]{font-size:14px;font-weight:500;color:#ffffffe0;line-height:1.2}.sb-secondary-list[data-astro-cid-y6dp7ad7]{display:flex;flex-direction:column;gap:0;padding:0 24px}.sb-secondary-row[data-astro-cid-y6dp7ad7]{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.04)}.sb-secondary-row[data-astro-cid-y6dp7ad7]:last-child{border-bottom:none}.sb-secondary-label[data-astro-cid-y6dp7ad7]{font-size:11px;color:#ffffff40}.sb-secondary-val[data-astro-cid-y6dp7ad7]{font-size:12px;font-weight:500;color:#ffffffa6;text-align:right;max-width:160px}.sb-fact[data-astro-cid-y6dp7ad7]{margin:16px 24px 24px;padding:14px 16px;background:#3b82f612;border:1px solid rgba(59,130,246,.15);border-radius:10px;flex-shrink:0}.sb-fact-label[data-astro-cid-y6dp7ad7]{font-size:10px;font-weight:500;color:#3b82f6b3;text-transform:uppercase;letter-spacing:.08em;margin-bottom:7px;display:block}.sb-fact-text[data-astro-cid-y6dp7ad7]{font-size:12px;color:#ffffff80;line-height:1.65}#map[data-astro-cid-y6dp7ad7]{position:fixed;inset:0 0 0 300px}.leaflet-container[data-astro-cid-y6dp7ad7]{background:#dde1e7!important}\n"}],"routeData":{"route":"/map","isIndex":false,"type":"page","pattern":"^\\/map\\/?$","segments":[[{"content":"map","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/map.astro","pathname":"/map","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CpP4YkXZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/map.astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/country/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/compare/index@_@astro":"pages/compare.astro.mjs","\u0000@astro-page:src/pages/map@_@astro":"pages/map.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/compare/[slug]@_@astro":"pages/compare/_slug_.astro.mjs","\u0000@astro-page:src/pages/country/[slug]@_@astro":"pages/country/_slug_.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","C:/Users/micth/Desktop/dev/seo/claud/maps/src/lib/countryData.fr.js":"chunks/countryData.fr_cY2axPH-.mjs","C:/Users/micth/Desktop/dev/seo/claud/maps/node_modules/world-atlas/countries-10m.json":"chunks/countries-10m_CGUkeq-w.mjs","\u0000@astrojs-manifest":"manifest_BRm5GvBT.mjs","C:/Users/micth/Desktop/dev/seo/claud/maps/node_modules/topojson-client/src/index.js":"chunks/index_CJmyl5Hu.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DCQ2pqz1.js","/astro/hoisted.js?q=1":"_astro/hoisted.CCAVWU2o.js","/astro/hoisted.js?q=2":"_astro/hoisted.OI1ReYsC.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.CWAURvma.css","/_astro/index.Dh2pQJyb.css","/_astro/_slug_.CIGWqoxr.css","/_astro/index.CpP4YkXZ.css","/config.js","/countries.js","/lang.js","/map.js","/sidebar.js","/style.css","/topojson.min.js","/uk-nations.geojson","/_astro/hoisted.OI1ReYsC.js","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/chunks/astro-designed-error-pages_Cg7UM_jw.mjs","/_worker.js/chunks/astro_Cs47w1Yi.mjs","/_worker.js/chunks/Base_V3W5Uk2M.mjs","/_worker.js/chunks/countries-10m_CGUkeq-w.mjs","/_worker.js/chunks/countryData.fr_cY2axPH-.mjs","/_worker.js/chunks/detect_Dmjs2yL7.mjs","/_worker.js/chunks/index_CJmyl5Hu.mjs","/_worker.js/chunks/index_D3v0-_K7.mjs","/_worker.js/chunks/noop-middleware_DSqiLD53.mjs","/_worker.js/chunks/translations_DBjSdkLy.mjs","/_worker.js/chunks/travelScores_CyA0wfgg.mjs","/_worker.js/pages/compare.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/map.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/_astro/index.CpP4YkXZ.css","/_worker.js/_astro/index.Dh2pQJyb.css","/_worker.js/_astro/_slug_.CIGWqoxr.css","/_worker.js/_astro/_slug_.CWAURvma.css","/_worker.js/chunks/astro/env-setup_nxDOIah1.mjs","/_worker.js/chunks/astro/server_CzKrnJyY.mjs","/_worker.js/pages/compare/_slug_.astro.mjs","/_worker.js/pages/country/_slug_.astro.mjs"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"RdihJ86SlEfk2OEMXrcIuRSQNLjrlhuDqAolT0dGD4g=","experimentalEnvGetSecretEnabled":false});

export { manifest };
