import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso Legal del sitio web de Vantra Bienes Raíces. Información sobre responsabilidad y uso del contenido.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/aviso-legal' },
};

export default function AvisoLegalPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Aviso Legal' }]} />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 mb-8">
          <p className="text-sm text-amber-800">
            <strong>Nota:</strong> Este documento es un template referencial y requiere revisión por un profesional legal antes de su publicación definitiva. No constituye asesoría legal.
          </p>
        </div>

        <h1 className="font-display text-4xl font-semibold text-vantra-midnight mb-8">Aviso Legal</h1>

        <div className="text-vantra-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Responsable del Sitio</h2>
            <p>Este sitio web es operado por Vantra Bienes Raíces, con domicilio en Ciudad de México, México.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Naturaleza de la Información</h2>
            <p>Toda la información publicada en este sitio tiene carácter meramente informativo y referencial. Los precios, características, disponibilidad y condiciones de las propiedades están sujetos a cambios sin previo aviso y deben confirmarse directamente con un asesor autorizado antes de tomar cualquier decisión.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Sin Promesas ni Garantías</h2>
            <p>Vantra no garantiza resultados específicos de ninguna operación inmobiliaria. La compraventa o arrendamiento de inmuebles está sujeta a múltiples factores que escapan al control de la empresa. Los testimonios o casos de éxito, cuando existan, representan experiencias individuales y no son indicativos de resultados futuros.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Intermediación Inmobiliaria</h2>
            <p>Vantra actúa como intermediario inmobiliario. Las condiciones definitivas de cada operación se formalizan conforme a la legislación aplicable en México y se acuerdan directamente entre las partes involucradas.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Cumplimiento Normativo</h2>
            <p>Operamos conforme a la legislación aplicable en México. La formalización de operaciones inmobiliarias se realiza ante los profesionales legales correspondientes (notarios públicos, abogados).</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Enlaces a Terceros</h2>
            <p>El sitio puede contener enlaces a sitios web de terceros. Vantra no se hace responsable del contenido, políticas de privacidad ni prácticas de estos sitios.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">Contacto</h2>
            <p>Para cualquier consulta relacionada con este aviso, puede escribir a: <a href="mailto:legal@vantra.mx" className="text-vantra-gold hover:underline">legal@vantra.mx</a>.</p>
          </section>

          <p className="text-sm text-vantra-gray-400 italic">Última actualización: Enero 2025</p>
        </div>

        <div className="mt-8 pt-6 border-t border-vantra-gray-200">
          <Link href="/" className="text-vantra-gold font-medium hover:underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
