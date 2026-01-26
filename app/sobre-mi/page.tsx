import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/lib/seo';
import { Award, BookOpen, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Carlos Anaya Ruiz | Agente Inmobiliario de Lujo',
  description: 'Conoce a Carlos Anaya Ruiz, experto en bienes raíces de lujo en México. Más de 10 años de experiencia redefiniendo la curaduría inmobiliaria.',
  alternates: {
    canonical: '/sobre-mi',
  },
};

export default function AboutPage() {
  // Schema específico de Persona para esta página
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author,
    image: `${siteConfig.url}/images/carlos-anaya.jpg`,
    jobTitle: 'Agente Inmobiliario de Lujo',
    worksFor: {
      '@type': 'RealEstateAgent',
      name: siteConfig.name
    },
    url: `${siteConfig.url}/sobre-mi`,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.linkedin // Si tienes LinkedIn, es vital para E-E-A-T
    ],
    knowsAbout: ['Bienes Raíces de Lujo', 'Inversión Inmobiliaria', 'Arquitectura Mexicana']
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Columna Imagen */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
                <Image
                  src="/images/carlos-anaya.jpg"
                  alt="Carlos Anaya Ruiz - Vantra Bienes Raíces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Badge Decorativo */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-vantra-gold/20 max-w-xs hidden md:block">
                <p className="font-display text-3xl font-bold text-vantra-gold mb-1">10+</p>
                <p className="text-sm text-gray-600 font-medium">Años transformando el mercado inmobiliario</p>
              </div>
            </div>

            {/* Columna Texto */}
            <div className="space-y-8">
              <div>
                <span className="text-vantra-gold font-bold tracking-widest uppercase text-sm mb-2 block">
                  Sobre Mí
                </span>
                <h1 className="font-display text-4xl md:text-5xl text-vantra-midnight font-bold leading-tight">
                  Más que un agente, <br />
                  <span className="text-vantra-gold">tu socio patrimonial.</span>
                </h1>
              </div>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Mi nombre es <strong>Carlos Anaya Ruiz</strong>. Fundé Vantra con una visión clara: 
                  elevar el estándar del servicio inmobiliario en México. No se trata solo de vender 
                  propiedades, sino de curar estilos de vida.
                </p>
                <p>
                  Mi especialización en el mercado de lujo me permite entender las sutilezas que 
                  hacen que una propiedad sea verdaderamente excepcional. Desde la arquitectura 
                  hasta la plusvalía a largo plazo, cada recomendación está respaldada por datos 
                  y experiencia.
                </p>
              </div>

              {/* Grid de Credenciales */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-vantra-gray-50 rounded-full flex items-center justify-center flex-shrink-0 text-vantra-gold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-vantra-midnight">Certificado</h3>
                    <p className="text-sm text-gray-500">Licencia Inmobiliaria Federal</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-vantra-gray-50 rounded-full flex items-center justify-center flex-shrink-0 text-vantra-gold">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-vantra-midnight">Networking</h3>
                    <p className="text-sm text-gray-500">Red global de inversionistas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}