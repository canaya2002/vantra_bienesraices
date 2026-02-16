import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { cities, getCityBySlug } from '@/data/cities';
import { properties } from '@/data/properties';
import { generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import PropertyGrid from '@/components/PropertyGrid';
import Breadcrumb from '@/components/Breadcrumb';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return { title: 'Ciudad no encontrada' };
  return {
    title: `Propiedades de Lujo en ${city.name} – Venta y Renta`,
    description: `Encuentra propiedades exclusivas en ${city.name}, ${city.state}. ${city.shortDescription}`,
    alternates: { canonical: `/ciudades/${city.slug}` },
  };
}

export default async function CiudadPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityProperties = properties.filter((p) => p.citySlug === city.slug);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Ciudades', url: '/ciudades' },
    { name: city.name, url: `/ciudades/${city.slug}` },
  ]);
  const itemListSchema = generateItemListSchema(
    cityProperties.map((p) => ({ name: p.title, url: `/propiedades/${p.slug}` }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Ciudades', href: '/ciudades' }, { label: city.name }]} />
        </div>

        {/* Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden mb-8">
          <Image
            src={city.image}
            alt={`Propiedades de lujo en ${city.name}`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-3">
              Propiedades en {city.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl">{city.shortDescription}</p>
          </div>
        </section>

        {/* Description */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <p className="text-vantra-gray-600 leading-relaxed max-w-3xl">{city.description}</p>
        </div>

        <PropertyGrid
          properties={cityProperties}
          title={`${cityProperties.length} propiedades en ${city.name}`}
        />
      </div>
    </>
  );
}
