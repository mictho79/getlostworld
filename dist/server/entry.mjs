import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_4ks7yIrY.mjs';
import { manifest } from './manifest_DMXkqcbs.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/compare/_slug_.astro.mjs');
const _page2 = () => import('./pages/compare.astro.mjs');
const _page3 = () => import('./pages/country/_slug_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/compare/[slug].astro", _page1],
    ["src/pages/compare/index.astro", _page2],
    ["src/pages/country/[slug].astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///C:/Users/micth/Desktop/dev/seo/claud/maps/dist/client/",
    "server": "file:///C:/Users/micth/Desktop/dev/seo/claud/maps/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
