import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

// Sitemap is hand-rolled at src/pages/sitemap.xml.ts — it reads COUNTRY_VIBES
// and emits hreflang pairs plus curated compare/best-of/use-case URLs that
// @astrojs/sitemap cannot know about. Keep it; do not add the integration.

export default defineConfig({
  site: 'https://terralenses.com',
  output: 'hybrid',
  adapter: cloudflare(),
  integrations: [mdx()],
  image: {
    service: passthroughImageService(),
  },
  build: {
    format: 'directory', // /country/france/ instead of /country/france.html
  },
});
