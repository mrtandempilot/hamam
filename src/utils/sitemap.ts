import { writeFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://oludeniz-hamam.com';

const routes = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/contact',
  '/blog/history-of-turkish-hamam',
  '/blog/benefits-of-turkish-bath',
  '/blog/first-hamam-experience'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};

export default generateSitemap; 