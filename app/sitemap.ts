import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Páginas estáticas
  const routes = [
    '',
    '#sobre-mi',
    '#propiedades',
    '#contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  // Páginas dinámicas de propiedades
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/propiedades/${property.slug}`,
    lastModified: property.updatedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...routes, ...propertyRoutes];
}