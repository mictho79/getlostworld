import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';

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
