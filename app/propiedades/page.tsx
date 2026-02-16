import { Metadata } from 'next';
import { properties } from '@/data/properties';
import { generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import PropertyGrid from '@/components/PropertyGrid';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Propiedades Exclusivas en Venta y Renta',
  description:
    'Explora nuestro catálogo de propiedades de lujo en venta y renta en Ciudad de México, Monterrey y Guadalajara. Casas, departamentos y penthouses exclusivos.',
  alternates: { canonical: '/propiedades' },
};

export default function PropiedadesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Propiedades', url: '/propiedades' },
  ]);
  const itemListSchema = generateItemListSchema(
    properties.map((p) => ({ name: p.title, url: `/propiedades/${p.slug}` }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Propiedades' }]} />
        </div>
        <PropertyGrid
          properties={properties}
          title="Todas las Propiedades"
          subtitle="Catálogo completo de propiedades exclusivas en venta y renta."
        />
      </div>
    </>
  );
}
