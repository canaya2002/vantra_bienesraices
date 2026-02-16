import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cities } from '@/data/cities';
import { properties } from '@/data/properties';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/Breadcrumb';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ciudades – Propiedades de Lujo por Ubicación',
  description:
    'Explora propiedades exclusivas por ciudad: Ciudad de México, Monterrey y Guadalajara. Encuentra tu hogar ideal en la ubicación que prefieras.',
  alternates: { canonical: '/ciudades' },
};

export default function CiudadesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Ciudades', url: '/ciudades' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Ciudades' }]} />
          </div>
          <div className="text-center mb-12 mt-8">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-vantra-midnight mb-4">
              Propiedades por Ciudad
            </h1>
            <p className="text-vantra-gray-600 text-lg max-w-2xl mx-auto">
              Tenemos presencia en las principales ciudades de México, con propiedades exclusivas en las zonas de mayor plusvalía.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cities.map((city) => {
              const count = properties.filter((p) => p.citySlug === city.slug).length;
              return (
                <Link
                  key={city.slug}
                  href={`/ciudades/${city.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-soft-lg transition-all"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={city.image}
                      alt={`Propiedades de lujo en ${city.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-1 text-vantra-gold-light text-sm mb-1">
                        <MapPin className="w-4 h-4" /> {city.state}
                      </div>
                      <h2 className="font-display text-2xl font-semibold text-white">{city.name}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-vantra-gray-600 text-sm mb-4 leading-relaxed">{city.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-vantra-midnight">{count} propiedades</span>
                      <span className="text-vantra-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explorar <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
