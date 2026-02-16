import { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contacto – Habla con un Asesor Inmobiliario',
  description:
    'Contacta a Vantra Bienes Raíces. Un asesor te orienta sobre propiedades de lujo en Ciudad de México, Monterrey y Guadalajara.',
  alternates: { canonical: '/contacto' },
};

export default function ContactoPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Contacto', url: '/contacto' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />
        </div>
        <CTASection />
      </div>
    </>
  );
}
