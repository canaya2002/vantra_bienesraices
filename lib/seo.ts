import { Metadata } from 'next';
import { Property } from '@/types';

export const siteConfig = {
  name: 'Vantra',
  tagline: 'El Arte de Encontrar tu Hogar',
  description: 'Curaduría inmobiliaria de lujo por Carlos Anaya Ruiz. Propiedades exclusivas en Ciudad de México, Monterrey y Guadalajara.',
  url: 'https://vantra.mx', // Asegúrate de cambiar esto a tu dominio real en producción
  author: 'Carlos Anaya Ruiz',
  phone: '+52 55 5555 5555',
  email: 'contacto@vantra.mx',
  social: {
    instagram: 'https://instagram.com/vantra.mx',
    facebook: 'https://facebook.com/VantraInmobiliaria'
  }
};

export const baseKeywords = [
  'inmobiliaria de lujo',
  'bienes raíces México',
  'casas de lujo',
  'propiedades exclusivas',
  'departamentos premium',
  'penthouses México',
  'inmuebles Ciudad de México',
  'casas Monterrey',
  'propiedades Guadalajara',
  'Carlos Anaya Ruiz',
  'Vantra inmobiliaria',
  'real estate Mexico',
  'luxury homes Mexico',
  'inversión inmobiliaria',
  'residencias de lujo'
];

// Generador base de metadata
export function generateMetadata(customMeta?: Partial<Metadata>): Metadata {
  return {
    title: customMeta?.title || siteConfig.name,
    description: customMeta?.description || siteConfig.description,
    keywords: baseKeywords.join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: customMeta?.title as string || siteConfig.name,
      description: customMeta?.description as string || siteConfig.description,
      images: [
        {
          url: '/images/og-image.jpg',
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
        'max-snippet': -1
      }
    },
    ...customMeta
  };
}

// Generador de metadata para propiedades individuales
export function generatePropertyMetadata(property: Property): Metadata {
  const title = `${property.title} | ${property.city}`;
  const description = `${property.shortDescription} ${property.bedrooms} recámaras, ${property.bathrooms} baños, ${property.squareMeters}m² en ${property.neighborhood}. Precio: ${property.priceFormatted}.`;
  
  const keywords = [
    ...baseKeywords,
    property.city,
    property.neighborhood,
    property.propertyType,
    `${property.bedrooms} recámaras`,
    `casa en ${property.city}`,
    `propiedad ${property.neighborhood}`,
    ...property.features.slice(0, 5)
  ];

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `/propiedades/${property.slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'es_MX',
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      siteName: siteConfig.name,
      title,
      description,
      images: property.images.map(img => ({
        url: img.url,
        width: 1200,
        height: 630,
        alt: img.alt
      }))
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [property.mainImage]
    }
  };
}

// Schema: Agente Inmobiliario (Organization/Person)
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX'
    },
    founder: {
      '@type': 'Person',
      name: siteConfig.author
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook
    ]
  };
}

// Schema: Breadcrumbs (Migas de pan)
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

// Schema: Propiedad Individual
export function generatePropertySchema(property: Property) {
  return {
    '@context': 'https://schema.org',
    '@type': ['RealEstateListing', 'Product'], // Doble tipo para mejor cobertura
    name: property.title,
    description: property.description,
    url: `${siteConfig.url}/propiedades/${property.slug}`,
    image: property.images.map(img => img.url),
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/propiedades/${property.slug}`
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.city, // Simplificado para este ejemplo
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
      unitCode: 'MTK'
    },
    amenityFeature: property.features.map(feature => ({
      '@type': 'LocationFeatureSpecification',
      name: feature,
      value: true
    }))
  };
}