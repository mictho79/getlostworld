import {
  Fragment,
  render as $$render,
  createAstro as $$createAstro,
  createComponent as $$createComponent,
  renderComponent as $$renderComponent,
  renderHead as $$renderHead,
  maybeRenderHead as $$maybeRenderHead,
  unescapeHTML as $$unescapeHTML,
  renderSlot as $$renderSlot,
  mergeSlots as $$mergeSlots,
  addAttribute as $$addAttribute,
  spreadAttributes as $$spreadAttributes,
  defineStyleVars as $$defineStyleVars,
  defineScriptVars as $$defineScriptVars,
  renderTransition as $$renderTransition,
  createTransitionScope as $$createTransitionScope,
  renderScript as $$renderScript,
  createMetadata as $$createMetadata
} from "astro/runtime/server/index.js";


export const $$metadata = $$createMetadata("test.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: new Set([]), hoisted: [] });

const $$Astro = $$createAstro();
const Astro = $$Astro;
export async function getStaticPaths() {
  return [{ params: { slug: 'test' } }];
}
const $$Test = $$createComponent(($$result, $$props, $$slots) => {
const Astro = $$result.createAstro($$Astro, $$props, $$slots);
Astro.self = $$Test;

const { slug } = Astro.params;


return $$render`${$$maybeRenderHead($$result)}<div>${slug}</div>`;
}, 'test.astro', undefined);
export default $$Test;
