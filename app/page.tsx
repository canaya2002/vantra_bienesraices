import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PropertySearch from '@/components/PropertySearch';
import PropertyGrid from '@/components/PropertyGrid';
import CTASection from '@/components/CTASection';
import { properties } from '@/data/properties';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PropertySearch />
      <PropertyGrid properties={properties} />
      <CTASection />
    </>
  );
}
