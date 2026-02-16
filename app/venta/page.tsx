import { Metadata } from 'next';
import { properties } from '@/data/properties';
import { generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import PropertyGrid from '@/components/PropertyGrid';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Propiedades en Venta – Casas, Departamentos y Penthouses de Lujo',
  description:
    'Encuentra propiedades de lujo en venta en Ciudad de México, Monterrey y Guadalajara. Casas, departamentos y penthouses en las zonas más exclusivas de México.',
  alternates: { canonical: '/venta' },
};

export default function VentaPage() {
  const ventaProperties = properties.filter((p) => p.operation === 'venta');
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Venta', url: '/venta' },
  ]);
  const itemListSchema = generateItemListSchema(
    ventaProperties.map((p) => ({ name: p.title, url: `/propiedades/${p.slug}` }))
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Venta' }]} />
        </div>
        <PropertyGrid
          properties={ventaProperties}
          title="Propiedades en Venta"
          subtitle="Casas, departamentos y penthouses de lujo disponibles para compra."
        />
      </div>
    </>
  );
}
