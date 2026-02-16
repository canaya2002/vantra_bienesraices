import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { Shield, Eye, Users, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nosotros – Quiénes Somos',
  description:
    'Conoce a Vantra Bienes Raíces: asesoría inmobiliaria de lujo con transparencia, profesionalismo y cumplimiento normativo en México.',
  alternates: { canonical: '/nosotros' },
};

export default function NosotrosPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Nosotros', url: '/nosotros' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }]} />
          </div>

          {/* Header */}
          <div className="text-center mt-8 mb-16">
            <span className="text-vantra-gold font-medium tracking-wider uppercase text-sm">Sobre Vantra</span>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-vantra-midnight mt-4 mb-6">
              Quiénes Somos
            </h1>
            <p className="text-vantra-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Vantra Bienes Raíces es una firma de asesoría inmobiliaria especializada en el segmento premium del mercado mexicano. Nuestro enfoque combina curaduría cuidadosa, transparencia y acompañamiento personalizado.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Eye,
                title: 'Transparencia',
                desc: 'Comunicamos con claridad las condiciones, precios y características de cada propiedad. Sin sorpresas.',
              },
              {
                icon: Users,
                title: 'Asesoría Personalizada',
                desc: 'Cada cliente tiene necesidades distintas. Escuchamos, entendemos y proponemos opciones alineadas a tu perfil.',
              },
              {
                icon: Award,
                title: 'Profesionalismo',
                desc: 'Contamos con un equipo con experiencia en el mercado inmobiliario de lujo en México.',
              },
              {
                icon: Shield,
                title: 'Cumplimiento',
                desc: 'Operamos conforme a la legislación aplicable en México. Tus datos y tu operación están protegidos.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-vantra-gray-50">
                <div className="w-12 h-12 bg-vantra-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-vantra-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-vantra-midnight mb-2">{item.title}</h3>
                <p className="text-vantra-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* About the founder */}
          <div className="bg-vantra-midnight rounded-3xl p-8 sm:p-12 text-center mb-16">
            <h2 className="font-display text-3xl font-semibold text-white mb-4">Carlos Anaya Ruiz</h2>
            <p className="text-vantra-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Fundador de Vantra Bienes Raíces. Con experiencia en el mercado inmobiliario premium, Carlos se enfoca en ofrecer un servicio de asesoría integral que prioriza las necesidades de cada cliente.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-vantra-gold to-vantra-gold-dark text-white font-semibold rounded-full shadow-gold hover:shadow-lg transition-all"
            >
              Hablar con un asesor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Compliance */}
          <div className="text-center text-sm text-vantra-gray-500 max-w-2xl mx-auto">
            <p className="mb-2">
              Operamos conforme a la legislación aplicable en México. Para más información, consulta nuestro{' '}
              <Link href="/aviso-de-privacidad" className="text-vantra-gold hover:underline">
                Aviso de Privacidad
              </Link>
              ,{' '}
              <Link href="/terminos" className="text-vantra-gold hover:underline">
                Términos y Condiciones
              </Link>{' '}
              y{' '}
              <Link href="/aviso-legal" className="text-vantra-gold hover:underline">
                Aviso Legal
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
