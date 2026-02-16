import { Metadata } from 'next';
import { properties } from '@/data/properties';
import { generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import PropertyGrid from '@/components/PropertyGrid';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Propiedades en Renta – Departamentos y Casas de Lujo',
  description:
    'Propiedades de lujo disponibles en renta en Ciudad de México, Monterrey y Guadalajara. Departamentos amueblados y casas en zonas exclusivas.',
  alternates: { canonical: '/renta' },
};

export default function RentaPage() {
  const rentaProperties = properties.filter((p) => p.operation === 'renta');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Renta', url: '/renta' },
  ]);
  const itemListSchema = generateItemListSchema(
    rentaProperties.map((p) => ({ name: p.title, url: `/propiedades/${p.slug}` }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Renta' }]} />
        </div>
        <PropertyGrid
          properties={rentaProperties}
          title="Propiedades en Renta"
          subtitle="Departamentos y casas de lujo disponibles para arrendamiento."
        />
      </div>
    </>
  );
}
