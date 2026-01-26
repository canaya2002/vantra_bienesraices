import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PropertySearch from '@/components/PropertySearch';
import PropertyGrid from '@/components/PropertyGrid';
import CTASection from '@/components/CTASection';
import { properties } from '@/data/properties';
import { siteConfig } from '@/lib/seo';

export default function Home() {
  // Schema adicional para el Home: WebSite (Search Box potential)
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
      <Hero />
      <AboutSection />
      <PropertySearch />
      <PropertyGrid properties={properties} />
      <CTASection />
    </>
  );
}