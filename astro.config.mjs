import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'hybrid',
  adapter: node({ mode: 'middleware' }),
  build: {
    format: 'directory', // /country/france/ au lieu de /country/france.html
  },
});
