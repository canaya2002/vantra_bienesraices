import { Metadata } from 'next';
import { Property } from '@/types';

// 1. Configuración Maestra con datos de E-E-A-T
export const siteConfig = {
  name: 'Vantra Bienes Raíces',
  shortName: 'Vantra',
  tagline: 'El Arte de Encontrar tu Hogar',
  description: 'Curaduría inmobiliaria de lujo por Carlos Anaya Ruiz. Propiedades exclusivas, venta y renta en Ciudad de México, Monterrey y Guadalajara.',
  url: 'https://vantra.mx', // IMPORTANTE: Cambiar al dominio real producción
  author: 'Carlos Anaya Ruiz',
  authorUrl: 'https://vantra.mx/sobre-mi', // URL del perfil del autor (ideal para E-E-A-T)
  phone: '+52 55 5555 5555',
  email: 'contacto@vantra.mx',
  address: {
    street: 'Av. Presidente Masaryk', // Dirección física real ayuda mucho al SEO Local
    city: 'Ciudad de México',
    region: 'CDMX',
    postalCode: '11560',
    country: 'MX'
  },
  social: {
    instagram: 'https://instagram.com/vantra.mx',
    facebook: 'https://facebook.com/VantraInmobiliaria',
    linkedin: 'https://linkedin.com/company/vantra',
    twitter: 'https://twitter.com/vantra_mx'
  },
  // IDs de verificación (Terceros)
  googleVerification: 'TU_CODIGO_DE_SEARCH_CONSOLE', // Te diré cómo obtenerlo abajo
};

export const baseKeywords = [
  'inmobiliaria de lujo',
  'bienes raíces México',
  'Carlos Anaya Ruiz',
  'propiedades exclusivas',
  'agente inmobiliario de lujo',
  'venta de casas premium',
  'departamentos en polanco',
  'residencias en san pedro',
  'inversión inmobiliaria'
];

// 2. Generador de Metadata Base (Super Potenciado)
export function generateMetadata(customMeta?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`, // Plantilla para páginas internas
    },
    description: customMeta?.description || siteConfig.description,
    keywords: baseKeywords.join(', '),
    authors: [{ name: siteConfig.author, url: siteConfig.authorUrl }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    // Verificación para herramientas de Webmaster
    verification: {
      google: siteConfig.googleVerification,
    },
    alternates: {
      canonical: '/', // Se sobreescribe en páginas internas
    },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: customMeta?.title as string || siteConfig.name,
      description: customMeta?.description as string || siteConfig.description,
      images: [
        {
          url: '/images/og-image.jpg', // Asegúrate de tener esta imagen en public/images/
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: customMeta?.title as string || siteConfig.name,
      description: customMeta?.description as string || siteConfig.description,
      creator: '@vantra_mx', // Tu usuario de twitter si tienes
      images: ['/images/og-image.jpg']
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...customMeta
  };
}

// 3. Generador Metadata para Propiedades (Canonical dinámico + OG Images)
export function generatePropertyMetadata(property: Property): Metadata {
  const title = `${property.title} | ${property.city}`;
  const description = `${property.shortDescription} Ubicada en ${property.neighborhood}. Precio: ${property.priceFormatted}. Contacta a Carlos Anaya Ruiz.`;
  
  // Usamos la imagen principal de la propiedad para compartir en redes
  const ogImage = property.mainImage;

  return {
    title,
    description,
    keywords: [
      ...baseKeywords,
      property.city,
      property.neighborhood,
      property.propertyType,
      `venta de ${property.propertyType.toLowerCase()}`,
      property.address
    ].join(', '),
    alternates: {
      canonical: `/propiedades/${property.slug}`,
    },
    openGraph: {
      type: 'article', // 'article' o 'website'
      locale: 'es_MX',
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: property.title
        }
      ],
      authors: [siteConfig.author],
      publishedTime: property.createdAt,
      modifiedTime: property.updatedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

// --- SCHEMA.ORG GENERATORS (DATOS ESTRUCTURADOS) ---

// Schema de Organización (Para el Home)
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent', // Más específico que Organization
    name: siteConfig.name,
    image: `${siteConfig.url}/images/vantralogo.png`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    priceRange: '$$$$', // Indica que es lujo
    founder: {
      '@type': 'Person',
      name: siteConfig.author,
      url: siteConfig.authorUrl
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin
    ]
  };
}

// Schema de Propiedad Individual (Product / RealEstateListing)
export function generatePropertySchema(property: Property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `${siteConfig.url}/propiedades/${property.slug}`,
    image: property.images.map(img => `${siteConfig.url}${img.url}`),
    datePosted: property.createdAt,
    offer: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      seller: {
        '@type': 'RealEstateAgent',
        name: siteConfig.author,
        image: `${siteConfig.url}/images/carlos-anaya.jpg`
      }
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.city,
      addressCountry: 'MX'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.coordinates.lat,
      longitude: property.coordinates.lng
    },
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.squareMeters,
      unitCode: 'MTK' // Metros Cuadrados
    },
    amenityFeature: property.features.map(feature => ({
      '@type': 'LocationFeatureSpecification',
      name: feature,
      value: true
    }))
  };
}

// Schema Breadcrumb (Migas de pan - Muy importante para Google)
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  };
}