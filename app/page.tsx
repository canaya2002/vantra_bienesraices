import Hero from '@/components/Hero';
import MexicoMap from '@/components/MexicoMap'; // Importar Mapa
import PropertySearch from '@/components/PropertySearch';
import PropertyGrid from '@/components/PropertyGrid';
import CTASection from '@/components/CTASection';
import { properties } from '@/data/properties';
import { siteConfig } from '@/lib/seo';

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* 1. Hero Limpio */}
      <Hero />
      
      {/* 2. Sección Mapa Interactivo (Nueva Ubicación) */}
      <MexicoMap />
      
      {/* 3. Buscador y Grid */}
      <PropertySearch />
      <PropertyGrid properties={properties} />
      
      {/* 4. CTA Final */}
      <CTASection />
    </>
  );
}