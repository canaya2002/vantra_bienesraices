import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPropertyBySlug, properties } from '@/data/properties'; // Asegúrate de exportar properties si usas generateStaticParams desde un fetch real
import { 
  generatePropertyMetadata, 
  generatePropertySchema, 
  generateBreadcrumbSchema 
} from '@/lib/seo';
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
  MapPin,
  Home,
  MessageCircle,
  Calendar
} from 'lucide-react'; 

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

// Generación estática para rendimiento máximo
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
      title: 'Propiedad no encontrada',
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

  // Generar datos estructurados
  const propertySchema = generatePropertySchema(property);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: '/' },
    { name: 'Propiedades', url: '/#propiedades' },
    { name: property.title, url: `/propiedades/${property.slug}` }
  ]);
  
  const whatsappMessage = encodeURIComponent(
    `Hola Carlos, me interesa la propiedad "${property.title}" en ${property.neighborhood}, ${property.city}. ID: ${property.id}.`
  );
  const whatsappUrl = `https://wa.me/525555555555?text=${whatsappMessage}`; // Corregido número de teléfono

  return (
    <>
      {/* Schemas JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <article className="pt-24 pb-16">
        {/* Navegación y Breadcrumbs visuales */}
        <div className="container-custom py-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-vantra-gray-500 mb-4">
            <Link href="/" className="hover:text-vantra-gold transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/#propiedades" className="hover:text-vantra-gold transition-colors">Propiedades</Link>
            <span>/</span>
            <span className="text-vantra-midnight font-medium truncate max-w-[200px]">{property.title}</span>
          </nav>

          <Link 
            href="/#propiedades"
            className="inline-flex items-center gap-2 text-vantra-gray-600 hover:text-vantra-gold transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
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
            <div className="lg:col-span-2 space-y-10">
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
                  <span className="px-3 py-1 bg-vantra-gray-100 text-vantra-gray-600 text-sm font-medium rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {property.yearBuilt}
                  </span>
                </div>
                
                <h1 className="heading-2 text-vantra-midnight mb-4">
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center hover:shadow-soft transition-shadow">
                  <Bed className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.bedrooms}</p>
                  <p className="text-sm text-vantra-gray-500">Recámaras</p>
                </div>
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center hover:shadow-soft transition-shadow">
                  <Bath className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.bathrooms}</p>
                  <p className="text-sm text-vantra-gray-500">Baños</p>
                </div>
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center hover:shadow-soft transition-shadow">
                  <Square className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.squareMeters}</p>
                  <p className="text-sm text-vantra-gray-500">m²</p>
                </div>
                <div className="bg-vantra-gray-50 rounded-xl p-4 text-center hover:shadow-soft transition-shadow">
                  <Car className="w-6 h-6 text-vantra-gold mx-auto mb-2" />
                  <p className="text-2xl font-semibold text-vantra-midnight">{property.parkingSpaces}</p>
                  <p className="text-sm text-vantra-gray-500">Estacionamientos</p>
                </div>
              </div>

              {/* Description */}
              <section aria-labelledby="desc-heading">
                <h2 id="desc-heading" className="heading-3 text-vantra-midnight mb-4">Descripción</h2>
                <div className="prose prose-lg max-w-none text-vantra-gray-600">
                  {property.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section aria-labelledby="features-heading">
                <h2 id="features-heading" className="heading-3 text-vantra-midnight mb-4">Características</h2>
                <PropertyFeatures features={property.features} />
              </section>

              {/* Map */}
              <section aria-labelledby="location-heading">
                <h2 id="location-heading" className="heading-3 text-vantra-midnight mb-4">Ubicación</h2>
                <PropertyMap 
                  address={property.address}
                  coordinates={property.coordinates}
                />
              </section>
            </div>

            {/* Sidebar Sticky */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl shadow-soft-lg p-6 border border-vantra-gray-100">
                  <h3 className="text-xl font-display font-semibold text-vantra-midnight mb-4">
                    ¿Te interesa esta propiedad?
                  </h3>
                  <p className="text-vantra-gray-600 mb-6 text-sm">
                    Agenda una visita exclusiva con Carlos Anaya Ruiz para conocer esta propiedad.
                  </p>
                  
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full mb-4 gap-2 py-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Directo
                  </a>
                  
                  <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-vantra-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-white text-vantra-gray-500">o envía un correo</span>
                    </div>
                  </div>

                  <ContactForm 
                    propertyId={property.id} 
                    propertyTitle={property.title} 
                  />
                </div>

                {/* Additional Info Card */}
                <div className="bg-vantra-gray-50 rounded-2xl p-6 border border-vantra-gray-200">
                  <h3 className="text-lg font-semibold text-vantra-midnight mb-4">
                    Resumen
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <dt className="text-vantra-gray-500">Referencia</dt>
                      <dd className="text-vantra-gray-800 font-medium font-mono text-xs">{property.id.padStart(6, '0')}</dd>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <dt className="text-vantra-gray-500">Estado</dt>
                      <dd className="text-vantra-gold font-medium">En Venta</dd>
                    </div>
                    <div className="flex justify-between pt-1">
                      <dt className="text-vantra-gray-500">Construcción</dt>
                      <dd className="text-vantra-gray-800 font-medium">{property.squareMeters} m²</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}