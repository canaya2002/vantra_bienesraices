import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { properties, getPropertyBySlug, formatPrice } from '@/data/properties';
import { generatePropertyMetadata, generateStructuredData } from '@/lib/seo';
import PropertyGallery from '@/components/PropertyGallery';
import ContactForm from '@/components/ContactForm';
import PropertyFeatures from '@/components/PropertyFeatures';
import PropertyMap from '@/components/PropertyMap';
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Square, 
  Car, 
  Calendar,
  MapPin,
  Home,
  MessageCircle
} from 'lucide-react'; 

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const property = getPropertyBySlug(resolvedParams.slug);
  
  if (!property) {
    return {
      title: 'Propiedad no encontrada | Vantra',
    };
  }
  
  return generatePropertyMetadata(property);
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const resolvedParams = await params;
  const property = getPropertyBySlug(resolvedParams.slug);
  
  if (!property) {
    notFound();
  }

  const structuredData = generateStructuredData(property);
  
  const whatsappMessage = encodeURIComponent(
    `Hola Carlos, me interesa la propiedad "${property.title}" en ${property.neighborhood}, ${property.city}. ¿Podemos agendar una visita?`
  );
  const whatsappUrl = `https://wa.me/5255555555?text=${whatsappMessage}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article className="pt-20">
        {/* Back Navigation */}
        <div className="container-custom py-6">
          <Link 
            href="/#propiedades"
            className="inline-flex items-center gap-2 text-vantra-gray-600 hover:text-vantra-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a propiedades</span>
          </Link>
        </div>

        {/* Gallery Section */}
        <section className="mb-12">
          <PropertyGallery images={property.images} title={property.title} />
        </section>

        {/* Property Content */}
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <header>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {property.isNew && (
                    <span className="px-3 py-1 bg-vantra-gold/10 text-vantra-gold text-sm font-medium rounded-full">
                      Nueva
                    </span>
                  )}
                  <span className="px-3 py-1 bg-vantra-gray-100 text-vantra-gray-600 text-sm font-medium rounded-full flex items-center gap-1">
                    <Home className="w-3 h-3" />
                    {property.propertyType}
                  </span>
                </div>
                
                <h1 className="heading-2 text-vantra-midnight mb-4">
                  {property.title}
                </h1>
                
                <div className="flex items-center gap-2 text-vantra-gray-600 mb-6">
                  <MapPin className="w-5 h-5 text-vantra-gold" />
                  <span>{property.neighborhood}, {property.city}</span>
                </div>

                <p className="text-3xl sm:text-4xl font-display font-semibold text-vantra-gold">
                  {property.priceFormatted}
                </p>
              </header>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.bedrooms}</p>
                  <p className="text-sm text-vantra-gray-500">Recámaras</p>
                </div>
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center">
                  <Bath className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.bathrooms}</p>
                  <p className="text-sm text-vantra-gray-500">Baños</p>
                </div>
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center">
                  <Square className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.squareMeters}</p>
                  <p className="text-sm text-vantra-gray-500">m²</p>
                </div>
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center">
                  <Car className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.parkingSpaces}</p>
                  <p className="text-sm text-vantra-gray-500">Estacionamientos</p>
                </div>
              </div>

              {/* Description */}
              <section>
                <h2 className="heading-3 text-vantra-midnight mb-4">Descripción</h2>
                <div className="prose prose-lg max-w-none text-vantra-gray-600">
                  {property.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section>
                <h2 className="heading-3 text-vantra-midnight mb-4">Características</h2>
                <PropertyFeatures features={property.features} />
              </section>

              {/* Map */}
              <section>
                <h2 className="heading-3 text-vantra-midnight mb-4">Ubicación</h2>
                <PropertyMap 
                  address={property.address}
                  coordinates={property.coordinates}
                />
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl shadow-soft-lg p-6 border border-vantra-gray-100">
                  <h3 className="text-xl font-display font-semibold text-vantra-midnight mb-4">
                    ¿Te interesa esta propiedad?
                  </h3>
                  <p className="text-vantra-gray-600 mb-6">
                    Agenda una visita con Carlos Anaya Ruiz para conocer esta propiedad en persona.
                  </p>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full mb-4 gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Consultar por WhatsApp
                  </a>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-vantra-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-white text-vantra-gray-500">o</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-soft-lg p-6 border border-vantra-gray-100">
                  <h3 className="text-lg font-semibold text-vantra-midnight mb-4">
                    Enviar mensaje
                  </h3>
                  <ContactForm 
                    propertyId={property.id} 
                    propertyTitle={property.title} 
                  />
                </div>

                {/* Property Info */}
                <div className="bg-vantra-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-vantra-midnight mb-4">
                    Información adicional
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-vantra-gray-500">Tipo de propiedad</dt>
                      <dd className="text-vantra-gray-800 font-medium">{property.propertyType}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-vantra-gray-500">Año de construcción</dt>
                      <dd className="text-vantra-gray-800 font-medium">{property.yearBuilt}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-vantra-gray-500">Ciudad</dt>
                      <dd className="text-vantra-gray-800 font-medium">{property.city}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-vantra-gray-500">Zona</dt>
                      <dd className="text-vantra-gray-800 font-medium">{property.neighborhood}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="h-24"></div>
      </article>
    </>
  );
}
