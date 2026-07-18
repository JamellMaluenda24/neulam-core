import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Necesario para canonical URLs, Open Graph absolutos y sitemap.
  site: 'https://neulam-core.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
