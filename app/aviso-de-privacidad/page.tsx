import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad',
  description: 'Aviso de Privacidad de Vantra Bienes Raíces. Conoce cómo protegemos tus datos personales.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/aviso-de-privacidad' },
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Aviso de Privacidad' }]} />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 mb-8">
          <p className="text-sm text-amber-800">
            <strong>Nota:</strong> Este documento es un template referencial y requiere revisión por un profesional legal antes de su publicación definitiva. No constituye asesoría legal.
          </p>
        </div>

        <h1 className="font-display text-4xl font-semibold text-vantra-midnight mb-8">Aviso de Privacidad</h1>

        <div className="text-vantra-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">1. Identidad del Responsable</h2>
            <p>Vantra Bienes Raíces (en adelante "Vantra"), con domicilio en Ciudad de México, México, es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente. Este Aviso de Privacidad cumple con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">2. Datos Personales Recabados</h2>
            <p>Para llevar a cabo las finalidades descritas en el presente aviso, utilizaremos los siguientes datos personales: nombre completo, teléfono, correo electrónico, y en caso de facturación, RFC y/o CURP.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">3. Finalidades del Tratamiento</h2>
            <p>Los datos personales que recabamos se utilizan para: intermediación comercial inmobiliaria, elaboración de contratos, facturación, y comunicación sobre propiedades que puedan ser de su interés.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">4. Derechos ARCO</h2>
            <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, envíe una solicitud a: <a href="mailto:privacidad@vantra.mx" className="text-vantra-gold hover:underline">privacidad@vantra.mx</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-vantra-midnight mb-3">5. Seguridad</h2>
            <p>Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales. Este aviso puede actualizarse según requerimientos legales o cambios en nuestras prácticas.</p>
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
