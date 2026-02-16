import Hero from '@/components/Hero';
import PropertyGrid from '@/components/PropertyGrid';
import FAQSection from '@/components/FAQSection';
import { faqs } from '@/data/faqs';
import CTASection from '@/components/CTASection';
import { properties } from '@/data/properties';
import { cities } from '@/data/cities';
import { generateFAQSchema } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Key, TrendingUp, Shield, MapPin } from 'lucide-react';

export default function HomePage() {
  const faqSchema = generateFAQSchema(faqs);
  const featuredProperties = properties.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero con video */}
      <Hero />

      {/* Beneficios */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-vantra-midnight">
              ¿Por qué Vantra?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: 'Curaduría Exclusiva', desc: 'Seleccionamos propiedades que cumplen con altos estándares de calidad y ubicación.' },
              { icon: Key, title: 'Asesoría Personalizada', desc: 'Un asesor te acompaña desde la primera consulta hasta el cierre de tu operación.' },
              { icon: TrendingUp, title: 'Análisis de Mercado', desc: 'Te proporcionamos información relevante del mercado para decisiones informadas.' },
              { icon: Shield, title: 'Transparencia', desc: 'Operamos conforme a la legislación aplicable en México, con procesos claros.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-vantra-gray-50 hover:bg-vantra-gold/5 transition-colors">
                <div className="w-12 h-12 bg-vantra-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-vantra-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-vantra-midnight mb-2">{item.title}</h3>
                <p className="text-vantra-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <PropertyGrid
        properties={featuredProperties}
        title="Propiedades Destacadas"
        subtitle="Nuestra selección de propiedades exclusivas en las zonas más codiciadas de México."
      />

      {/* Ciudades */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-vantra-gold font-medium tracking-wider uppercase text-sm">Ubicaciones</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-vantra-midnight mt-4">
              Presencia en las zonas más exclusivas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/ciudades/${city.slug}`}
                className="group relative aspect-[3/2] rounded-2xl overflow-hidden"
              >
                <Image
                  src={city.image}
                  alt={`Propiedades en ${city.name}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-vantra-gold-light text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    {city.state}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-1">{city.name}</h3>
                  <p className="text-white/70 text-sm">{city.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/ciudades"
              className="inline-flex items-center gap-2 text-vantra-gold font-medium hover:gap-3 transition-all"
            >
              Ver todas las ciudades <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </>
  );
}
