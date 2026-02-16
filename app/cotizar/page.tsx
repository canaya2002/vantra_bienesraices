import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Solicitar Cotización – Propiedades de Lujo',
  description:
    'Solicita una cotización personalizada para propiedades de lujo en México. Un asesor te contactará sin compromiso.',
  alternates: { canonical: '/cotizar' },
};

export default function CotizarPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Cotizar', url: '/cotizar' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24 pb-16 bg-vantra-gray-50 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Cotizar' }]} />
          </div>
          <div className="text-center mt-8 mb-10">
            <h1 className="font-display text-4xl font-semibold text-vantra-midnight mb-4">
              Solicitar Cotización
            </h1>
            <p className="text-vantra-gray-600 text-lg">
              Cuéntanos qué tipo de propiedad buscas. Un asesor te orienta sin compromiso con opciones que se ajusten a tus necesidades.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8 border border-vantra-gray-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
