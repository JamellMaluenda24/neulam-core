import type { APIRoute } from 'astro';
import { SITE } from '../data/site';

/**
 * Sitemap generado en build. Al añadir una página nueva, agrégala aquí.
 * (Se prefiere este endpoint a un archivo estático en /public para que la
 * fecha de última modificación se actualice sola en cada despliegue.)
 */
const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.6', changefreq: 'monthly' },
  { path: '/permissions', priority: '0.5', changefreq: 'monthly' },
  { path: '/delete-account', priority: '0.5', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      p => `  <url>
    <loc>${SITE.url}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
