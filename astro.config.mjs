import { defineConfig, passthroughImageService } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://terralenses.com',
  output: 'hybrid',
  trailingSlash: 'always',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
  build: {
    format: 'directory', // /country/france/ instead of /country/france.html
  },
});
