import { Metadata } from 'next';
import { Property, BlogPost } from '@/types';

export const siteConfig = {
  name: 'Vantra Bienes Raíces',
  shortName: 'Vantra',
  tagline: 'Inmobiliaria de lujo en México',
  description:
    'Propiedades exclusivas en venta y renta en Ciudad de México, Monterrey y Guadalajara. Asesoría inmobiliaria personalizada para encontrar tu próximo hogar.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vantra.mx',
  author: 'Carlos Anaya Ruiz',
  phone: '+52 55 5555 5555',
  email: 'contacto@vantra.mx',
  address: {
    street: 'Av. Presidente Masaryk',
    city: 'Ciudad de México',
    region: 'CDMX',
    postalCode: '11560',
    country: 'MX',
  },
  social: {
    instagram: 'https://instagram.com/vantra.mx',
    facebook: 'https://facebook.com/VantraInmobiliaria',
    linkedin: 'https://linkedin.com/company/vantra',
  },
};

export function generateMetadata(customMeta?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: customMeta?.description || siteConfig.description,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    formatDetection: { email: false, address: false, telephone: false },
    alternates: { canonical: '/' },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: (customMeta?.title as string) || siteConfig.name,
      description: (customMeta?.description as string) || siteConfig.description,
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} – ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: (customMeta?.title as string) || siteConfig.name,
      description: (customMeta?.description as string) || siteConfig.description,
      images: ['/images/og-image.jpg'],
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
    ...customMeta,
  };
}

export function generatePropertyMetadata(property: Property): Metadata {
  const title = `${property.title} | ${property.neighborhood}, ${property.city}`;
  const description = `${property.shortDescription} Precio: ${property.priceFormatted}. ${property.bedrooms} recámaras, ${property.bathrooms} baños, ${property.squareMeters} m².`;
  return {
    title,
    description,
    alternates: { canonical: `/propiedades/${property.slug}` },
    openGraph: {
      type: 'article',
      locale: 'es_MX',
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: property.mainImage, width: 1200, height: 630, alt: property.title }],
      publishedTime: property.createdAt,
      modifiedTime: property.updatedAt,
    },
    twitter: { card: 'summary_large_image', title, description, images: [property.mainImage] },
  };
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  const title = post.title;
  const description = post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      locale: 'es_MX',
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: { card: 'summary_large_image', title, description, images: [post.image] },
  };
}

/* ── Schema.org Generators ─────────────────────────────────── */

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
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
      addressCountry: siteConfig.address.country,
    },
    priceRange: '$$$$',
    founder: { '@type': 'Person', name: siteConfig.author },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.linkedin],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/propiedades?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generatePropertySchema(property: Property) {
  const isHouse = property.propertyType === 'Casa' || property.propertyType === 'Villa';
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.shortDescription,
    url: `${siteConfig.url}/propiedades/${property.slug}`,
    image: property.images.map((img) => `${siteConfig.url}${img.url}`),
    datePosted: property.createdAt,
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'MXN',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      seller: { '@type': 'RealEstateAgent', name: siteConfig.name },
    },
    about: {
      '@type': isHouse ? 'House' : 'Apartment',
      address: {
        '@type': 'PostalAddress',
        streetAddress: property.address,
        addressLocality: property.city,
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: property.coordinates.lat,
        longitude: property.coordinates.lng,
      },
      numberOfRooms: property.bedrooms,
      numberOfBathroomsTotal: property.bathrooms,
      floorSize: { '@type': 'QuantitativeValue', value: property.squareMeters, unitCode: 'MTK' },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/images/vantralogo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/blog/${post.slug}` },
  };
}

export function generateItemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${siteConfig.url}${item.url}`,
    })),
  };
}
