import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Vantra',
    description: siteConfig.description,
    start_url: '/?source=pwa', // Tracking para saber si vienen de la "app"
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#C9A961',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/images/icon-512.png', // Recomendable agregar una versión de alta res
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    categories: ['business', 'finance', 'real estate'],
    shortcuts: [
      {
        name: 'Ver Propiedades',
        short_name: 'Propiedades',
        description: 'Explora nuestro catálogo exclusivo',
        url: '/#propiedades',
        icons: [{ src: '/icon.svg', sizes: '96x96' }]
      }
    ]
  };
}