import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CHUtHXSQ.mjs';
import 'es-module-lexer';
import { o as decodeKey } from './chunks/astro/server_CpuTesIu.mjs';
import 'clsx';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/micth/Desktop/dev/seo/claud/maps/","adapterName":"@astrojs/node","routes":[{"file":"compare/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/compare","isIndex":true,"type":"page","pattern":"^\\/compare\\/?$","segments":[[{"content":"compare","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compare/index.astro","pathname":"/compare","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const u=JSON.parse(document.getElementById(\"cmp-countries\").textContent);let o=document.querySelector(\".hero-name--a\")?.closest(\".hero-side\")?.querySelector(\".hero-name\")?.dataset.slug??\"\",a=document.querySelector(\".hero-name--b\")?.closest(\".hero-side\")?.querySelector(\".hero-name\")?.dataset.slug??\"\";const I=window.location.pathname.replace(/\\/$/,\"\"),g=I.split(\"/\").pop()||\"\",f=g.indexOf(\"-vs-\");f>-1&&(o=g.slice(0,f),a=g.slice(f+4));function B(e,n,i){let l=-1;const v=t=>{if(n.innerHTML=\"\",l=-1,!t.trim()){n.hidden=!0;return}const c=t.toLowerCase(),d=u.filter(s=>s.name.toLowerCase().includes(c)).sort((s,r)=>{const m=s.name.toLowerCase().startsWith(c),k=r.name.toLowerCase().startsWith(c);return m===k?s.name.localeCompare(r.name):m?-1:1}).slice(0,8);if(!d.length){n.hidden=!0;return}d.forEach(s=>{const r=document.createElement(\"div\");r.className=\"ac-opt\",r.dataset.slug=s.slug,r.textContent=s.name,r.addEventListener(\"mousedown\",m=>{m.preventDefault(),w(s)}),n.appendChild(r)}),n.hidden=!1},w=t=>{e.value=t.name,n.hidden=!0,l=-1,i(t)},y=t=>{n.querySelectorAll(\".ac-opt\").forEach((c,d)=>c.classList.toggle(\"ac-opt--on\",d===t)),l=t};return e.addEventListener(\"input\",()=>v(e.value)),e.addEventListener(\"focus\",()=>{e.value&&v(e.value)}),e.addEventListener(\"blur\",()=>setTimeout(()=>{n.hidden=!0},200)),e.addEventListener(\"keydown\",t=>{const c=n.querySelectorAll(\".ac-opt\");if(t.key===\"ArrowDown\")t.preventDefault(),y(Math.min(l+1,c.length-1));else if(t.key===\"ArrowUp\")t.preventDefault(),y(Math.max(l-1,-1));else if(t.key===\"Enter\"&&l>=0){t.preventDefault();const d=u.find(s=>s.slug===c[l].dataset.slug);d&&w(d)}else t.key===\"Escape\"&&(n.hidden=!0,e.blur())}),{setValue:t=>{e.value=t}}}function h(){o&&a&&o!==a&&(window.location.href=`/compare/${o}-vs-${a}/`)}const S=document.getElementById(\"sw-a\"),b=document.getElementById(\"sw-b\"),q=document.getElementById(\"sw-drop-a\"),x=document.getElementById(\"sw-drop-b\"),D=document.getElementById(\"sw-swap\"),A=B(S,q,e=>{o=e.slug,h()}),C=B(b,x,e=>{a=e.slug,h()}),p=u.find(e=>e.slug===o),L=u.find(e=>e.slug===a);p&&A.setValue(p.name);L&&C.setValue(L.name);D.addEventListener(\"click\",()=>{[o,a]=[a,o];const e=u.find(i=>i.slug===o),n=u.find(i=>i.slug===a);e&&A.setValue(e.name),n&&C.setValue(n.name),h()});\n"}],"styles":[{"type":"external","src":"/_astro/_slug_.CEABkSKN.css"}],"routeData":{"route":"/compare/[slug]","isIndex":false,"type":"page","pattern":"^\\/compare\\/([^/]+?)\\/?$","segments":[[{"content":"compare","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/compare/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/compare/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/micth/Desktop/dev/seo/claud/maps/src/pages/country/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/compare/[slug]@_@astro":"pages/compare/_slug_.astro.mjs","\u0000@astro-page:src/pages/compare/index@_@astro":"pages/compare.astro.mjs","\u0000@astro-page:src/pages/country/[slug]@_@astro":"pages/country/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","C:/Users/micth/Desktop/dev/seo/claud/maps/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DMXkqcbs.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DCQ2pqz1.js","/astro/hoisted.js?q=1":"_astro/hoisted.CLy5m93I.js","/astro/hoisted.js?q=2":"_astro/hoisted.CCAVWU2o.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.CEABkSKN.css","/_astro/index.BmS6QBkm.css","/_astro/_slug_.CIGWqoxr.css","/config.js","/countries.js","/lang.js","/map.js","/sidebar.js","/style.css","/topojson.min.js","/_astro/hoisted.CLy5m93I.js","/compare/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"bBXm62dE5amM1miP7JdX+Khdf/6umo7ig7Q1R4HHxnA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
