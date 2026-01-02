import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'], // Ejemplo de rutas protegidas
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}