import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y Condiciones de uso del sitio web de Vantra Bienes Raíces.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/terminos' },
};

export default function TerminosPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Términos y Condiciones' }]} />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 mb-8">
          <p className="text-sm text-amber-800">
            <strong>Nota:</strong> Este documento es un template referencial y requiere revisión por un profesional legal antes de su publicación definitiva. No constituye asesoría legal.
          </p>
        </div>

        <h1 className="font-display text-4xl font-semibold text-vantra-midnight mb-8">Términos y Condiciones</h1>

        <div className="text-vantra-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar el sitio web de Vantra Bienes Raíces (en adelante "el Sitio"), usted acepta los presentes Términos y Condiciones. Si no está de acuerdo con alguno de ellos, le recomendamos no utilizar el Sitio.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">2. Naturaleza del Servicio</h2>
            <p>El Sitio tiene carácter informativo y de intermediación comercial inmobiliaria. La información publicada sobre propiedades, precios y características es referencial, está sujeta a cambios sin previo aviso y no constituye una oferta vinculante ni una garantía de disponibilidad.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">3. Información Publicada</h2>
            <p>Vantra realiza esfuerzos razonables para mantener la información actualizada. Sin embargo, no se garantiza la exactitud, integridad o vigencia de los datos publicados. Las condiciones finales de cualquier operación inmobiliaria se confirman directamente con un asesor autorizado.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">4. Propiedad Intelectual</h2>
            <p>Todo el contenido del Sitio (textos, imágenes, diseños, logotipos, marcas) es propiedad de Vantra o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o uso sin autorización expresa.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">5. Uso del Sitio</h2>
            <p>El usuario se compromete a utilizar el Sitio de buena fe, para fines legítimos y conforme a la legislación aplicable en México. Vantra se reserva el derecho de restringir el acceso en caso de uso indebido.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">6. Limitación de Responsabilidad</h2>
            <p>Vantra no será responsable por daños directos o indirectos derivados del uso o imposibilidad de uso del Sitio, ni por decisiones tomadas con base en la información publicada. Recomendamos consultar directamente con un asesor para cualquier operación inmobiliaria.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">7. Modificaciones</h2>
            <p>Vantra se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones serán efectivas al publicarse en el Sitio.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">8. Legislación Aplicable</h2>
            <p>Los presentes Términos se rigen por la legislación aplicable en México. Para cualquier controversia, las partes se someterán a los tribunales competentes de la Ciudad de México.</p>
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
