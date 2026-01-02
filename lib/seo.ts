import { Metadata } from 'next';
import { Property } from '@/types';

const siteConfig = {
  name: 'Vantra',
  tagline: 'El Arte de Encontrar tu Hogar',
  description: 'Curaduría inmobiliaria de lujo por Carlos Anaya Ruiz. Propiedades exclusivas en Ciudad de México, Monterrey y Guadalajara.',
  url: 'https://vantra.mx',
  author: 'Carlos Anaya Ruiz',
  phone: '+52 55 5555 5555',
  email: 'contacto@vantra.mx',
  social: {
    instagram: '@vantra.mx',
    facebook: 'VantraInmobiliaria'
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

export function generateMetadata(customMeta?: Partial<Metadata>): Metadata {
  return {
    title: customMeta?.title || `${siteConfig.name} | ${siteConfig.tagline}`,
    description: customMeta?.description || siteConfig.description,
    keywords: baseKeywords.join(', '),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/'
    },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: customMeta?.title as string || `${siteConfig.name} | ${siteConfig.tagline}`,
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
      title: customMeta?.title as string || `${siteConfig.name} | ${siteConfig.tagline}`,
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

export function generatePropertyMetadata(property: Property): Metadata {
  const title = `${property.title} | ${property.priceFormatted} | Vantra`;
  const description = `${property.shortDescription} ${property.bedrooms} recámaras, ${property.bathrooms} baños, ${property.squareMeters}m² en ${property.neighborhood}, ${property.city}. Conoce esta propiedad exclusiva.`;
  
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

export function generateStructuredData(property?: Property) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX'
    },
    founder: {
      '@type': 'Person',
      name: siteConfig.author
    }
  };

  if (property) {
    return {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: property.title,
      description: property.description,
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      image: property.images.map(img => img.url),
      offers: {
        '@type': 'Offer',
        price: property.price,
        priceCurrency: 'MXN',
        availability: 'https://schema.org/InStock'
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: property.address,
        addressLocality: property.city,
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
      }
    };
  }

  return baseData;
}

export { siteConfig };
