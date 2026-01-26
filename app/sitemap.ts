import { MetadataRoute } from 'next';
import { properties } from '@/data/properties';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 1. Páginas estáticas principales
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre-mi`, // ¡NUEVA!
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8, // Alta prioridad porque define tu autoridad
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // 2. Páginas dinámicas de propiedades
  const propertyRoutes = properties.map((property) => ({
    url: `${baseUrl}/propiedades/${property.slug}`,
    lastModified: property.updatedAt || new Date().toISOString(),
    changeFrequency: property.isNew ? 'daily' as const : 'monthly' as const,
    priority: property.isFeatured ? 0.9 : 0.7,
  }));

  return [...routes, ...propertyRoutes];
}