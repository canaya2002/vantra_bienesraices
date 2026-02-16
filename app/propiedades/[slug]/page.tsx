import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPropertyBySlug, properties } from '@/data/properties';
import { generatePropertyMetadata, generatePropertySchema, generateBreadcrumbSchema } from '@/lib/seo';
import PropertyGallery from '@/components/PropertyGallery';
import ContactForm from '@/components/ContactForm';
import PropertyFeatures from '@/components/PropertyFeatures';
import PropertyMap from '@/components/PropertyMap';
import Breadcrumb from '@/components/Breadcrumb';
import { Bed, Bath, Square, Car, MapPin, Home, Calendar, MessageCircle } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: 'Propiedad no encontrada' };
  return generatePropertyMetadata(property);
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const propertySchema = generatePropertySchema(property);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Propiedades', url: '/propiedades' },
    { name: property.title, url: `/propiedades/${property.slug}` },
  ]);

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa la propiedad "${property.title}" en ${property.neighborhood}. Ref: ${property.id}.`
  );
  const whatsappUrl = `https://wa.me/525555555555?text=${whatsappMessage}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Propiedades', href: '/propiedades' },
              { label: property.title },
            ]}
          />
        </div>

        <section className="mb-10">
          <PropertyGallery images={property.images} title={property.title} />
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <header>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {property.isNew && (
                    <span className="px-3 py-1 bg-vantra-gold/10 text-vantra-gold text-sm font-medium rounded-full">Nueva</span>
                  )}
                  <span className="px-3 py-1 bg-vantra-gray-100 text-vantra-gray-600 text-sm font-medium rounded-full capitalize flex items-center gap-1">
                    <Home className="w-3 h-3" /> {property.propertyType} · {property.operation}
                  </span>
                  <span className="px-3 py-1 bg-vantra-gray-100 text-vantra-gray-600 text-sm font-medium rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {property.yearBuilt}
                  </span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-semibold text-vantra-midnight mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-vantra-gray-600 mb-6">
                  <MapPin className="w-5 h-5 text-vantra-gold flex-shrink-0" />
                  <span className="text-lg">{property.neighborhood}, {property.city}</span>
                </div>
                <p className="text-3xl sm:text-4xl font-display font-semibold text-vantra-gold">
                  {property.priceFormatted}
                </p>
              </header>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Bed, value: property.bedrooms, label: 'Recámaras' },
                  { icon: Bath, value: property.bathrooms, label: 'Baños' },
                  { icon: Square, value: property.squareMeters, label: 'm²' },
                  { icon: Car, value: property.parkingSpaces, label: 'Estacionamientos' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-vantra-gray-50 rounded-xl p-4 text-center">
                    <stat.icon className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                    <p className="text-2xl font-semibold text-vantra-midnight">{stat.value}</p>
                    <p className="text-sm text-vantra-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <section>
                <h2 className="font-display text-2xl font-semibold text-vantra-midnight mb-4">Descripción</h2>
                <div className="text-vantra-gray-600 leading-relaxed space-y-4">
                  {property.description.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-vantra-midnight mb-4">Características</h2>
                <PropertyFeatures features={property.features} />
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold text-vantra-midnight mb-4">Ubicación</h2>
                <PropertyMap address={property.address} coordinates={property.coordinates} />
              </section>

              <p className="text-xs text-vantra-gray-400 italic">
                La información y precios publicados son referenciales, están sujetos a cambios sin previo aviso y no constituyen una oferta vinculante. Un asesor te proporciona datos actualizados.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-2xl shadow-soft-lg p-6 border border-vantra-gray-100">
                  <h3 className="text-xl font-display font-semibold text-vantra-midnight mb-4">
                    ¿Te interesa esta propiedad?
                  </h3>
                  <p className="text-vantra-gray-600 mb-6 text-sm">
                    Un asesor te orienta y coordina una visita personalizada.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#1EB954] transition-colors mb-4"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Directo
                  </a>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-vantra-gray-200" /></div>
                    <div className="relative flex justify-center text-sm"><span className="px-3 bg-white text-vantra-gray-500">o envía un mensaje</span></div>
                  </div>
                  <ContactForm propertyId={property.id} propertyTitle={property.title} />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
