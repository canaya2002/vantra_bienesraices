import { Property } from '@/types';

export const properties: Property[] = [
  {
    id: '1',
    slug: 'residencia-lomas-chapultepec',
    title: 'Residencia de Lujo en Lomas de Chapultepec',
    description: `Una extraordinaria residencia que redefine el concepto de lujo en una de las zonas más exclusivas de Ciudad de México. Esta propiedad de arquitectura contemporánea ofrece espacios amplios bañados de luz natural, acabados de primera calidad y vistas panorámicas impresionantes.

La casa cuenta con un diseño de planta abierta que integra perfectamente las áreas sociales con el jardín privado. La cocina gourmet está equipada con electrodomésticos de alta gama y cuenta con una isla central ideal para reuniones familiares.

El área de master suite incluye vestidor amplio, baño de mármol con tina independiente y terraza privada. Las habitaciones adicionales ofrecen baño propio y closets amplios.

Amenidades destacadas: alberca climatizada, cava de vinos, gimnasio privado, sistema domótico integral, seguridad 24/7 y estacionamiento para 4 vehículos.`,
    shortDescription: 'Espectacular residencia con arquitectura contemporánea, alberca y vistas panorámicas en la exclusiva zona de Lomas.',
    price: 45000000,
    priceFormatted: '$45,000,000 MXN',
    city: 'Ciudad de México',
    neighborhood: 'Lomas de Chapultepec',
    address: 'Paseo de la Reforma 2500, Lomas de Chapultepec',
    squareMeters: 850,
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 4,
    yearBuilt: 2022,
    propertyType: 'Casa',
    features: [
      'Alberca climatizada',
      'Cava de vinos',
      'Gimnasio privado',
      'Sistema domótico',
      'Seguridad 24/7',
      'Jardín privado',
      'Terraza con vista',
      'Cocina gourmet',
      'Elevador privado'
    ],
    images: [
      { id: '1-1', url: '/images/propiedades/prop_1_img_1.jpg', alt: 'Fachada principal residencia Lomas', order: 1 },
      { id: '1-2', url: '/images/propiedades/prop_1_img_2.jpg', alt: 'Sala de estar con vista al jardín', order: 2 },
      { id: '1-3', url: '/images/propiedades/prop_1_img_3.jpg', alt: 'Cocina gourmet moderna', order: 3 },
      { id: '1-4', url: '/images/propiedades/prop_1_img_4.jpg', alt: 'Master suite con terraza', order: 4 },
      { id: '1-5', url: '/images/propiedades/prop_1_img_5.jpg', alt: 'Alberca y área exterior', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_1_img_1.jpg',
    videoUrl: '/videos/video_1.mp4',
    coordinates: { lat: 19.4284, lng: -99.2122 },
    isFeatured: true,
    isNew: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: '2',
    slug: 'penthouse-polanco',
    title: 'Penthouse de Ensueño en Polanco',
    description: `Un penthouse excepcional ubicado en el corazón de Polanco, el barrio más sofisticado de Ciudad de México. Este espacio único ofrece vistas de 360 grados de la ciudad y el Bosque de Chapultepec.

Con techos de doble altura y ventanales del piso al techo, cada rincón de este penthouse está diseñado para impresionar. La sala principal se abre a una terraza de 200m² perfecta para entretenimiento al aire libre.

La cocina italiana cuenta con los más finos acabados y equipo profesional. El comedor tiene capacidad para 12 personas con vistas espectaculares.

Incluye: terraza panorámica privada, jacuzzi exterior, área de asador, bodega, cuarto de servicio, y dos estacionamientos con acceso directo por elevador.`,
    shortDescription: 'Penthouse único con terraza panorámica de 200m² y vistas 360° en el corazón de Polanco.',
    price: 68000000,
    priceFormatted: '$68,000,000 MXN',
    city: 'Ciudad de México',
    neighborhood: 'Polanco',
    address: 'Av. Presidente Masaryk 500, Polanco',
    squareMeters: 520,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 2,
    yearBuilt: 2023,
    propertyType: 'Penthouse',
    features: [
      'Terraza panorámica 200m²',
      'Jacuzzi exterior',
      'Vistas 360°',
      'Techos doble altura',
      'Cocina italiana',
      'Área de asador',
      'Elevador privado',
      'Domótica completa',
      'Seguridad biométrica'
    ],
    images: [
      { id: '2-1', url: '/images/propiedades/prop_2_img_1.jpg', alt: 'Sala principal penthouse Polanco', order: 1 },
      { id: '2-2', url: '/images/propiedades/prop_2_img_2.jpg', alt: 'Terraza panorámica con vista', order: 2 },
      { id: '2-3', url: '/images/propiedades/prop_2_img_3.jpg', alt: 'Cocina italiana de lujo', order: 3 },
      { id: '2-4', url: '/images/propiedades/prop_2_img_4.jpg', alt: 'Recámara principal', order: 4 },
      { id: '2-5', url: '/images/propiedades/prop_2_img_5.jpg', alt: 'Jacuzzi exterior nocturno', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_2_img_1.jpg',
    videoUrl: '/videos/video_2.mp4',
    coordinates: { lat: 19.4332, lng: -99.1962 },
    isFeatured: true,
    isNew: false,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18'
  },
  {
    id: '3',
    slug: 'casa-valle-oriente-monterrey',
    title: 'Casa Moderna en Valle Oriente',
    description: `Impresionante residencia de estilo contemporáneo en Valle Oriente, Monterrey. Con vistas privilegiadas a la Sierra Madre, esta propiedad combina arquitectura vanguardista con confort excepcional.

Los espacios interiores fluyen naturalmente hacia el exterior a través de grandes ventanales que maximizan la luz natural y las vistas panorámicas. El diseño interior presenta una paleta de colores neutros con acentos de madera y piedra natural.

La propiedad cuenta con un amplio jardín que incluye alberca infinity edge, área de asador techada y espacios para eventos al aire libre.

Características premium: sistema de automatización completo, paneles solares, tratamiento de agua, estudio/oficina independiente, y cuarto de pánico.`,
    shortDescription: 'Residencia contemporánea con vistas a la Sierra Madre, alberca infinity y arquitectura vanguardista.',
    price: 38500000,
    priceFormatted: '$38,500,000 MXN',
    city: 'Monterrey',
    neighborhood: 'Valle Oriente',
    address: 'Sierra Alta 200, Valle Oriente',
    squareMeters: 720,
    bedrooms: 5,
    bathrooms: 5,
    parkingSpaces: 3,
    yearBuilt: 2021,
    propertyType: 'Casa',
    features: [
      'Vistas Sierra Madre',
      'Alberca infinity edge',
      'Paneles solares',
      'Automatización total',
      'Área de asador',
      'Estudio independiente',
      'Cuarto de pánico',
      'Tratamiento de agua',
      'Jardín amplio'
    ],
    images: [
      { id: '3-1', url: '/images/propiedades/prop_3_img_1.jpg', alt: 'Fachada casa Valle Oriente', order: 1 },
      { id: '3-2', url: '/images/propiedades/prop_3_img_2.jpg', alt: 'Sala con vista a la sierra', order: 2 },
      { id: '3-3', url: '/images/propiedades/prop_3_img_3.jpg', alt: 'Alberca infinity edge', order: 3 },
      { id: '3-4', url: '/images/propiedades/prop_3_img_4.jpg', alt: 'Cocina moderna', order: 4 },
      { id: '3-5', url: '/images/propiedades/prop_3_img_5.jpg', alt: 'Master suite', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_3_img_1.jpg',
    videoUrl: '/videos/video_3.mp4',
    coordinates: { lat: 25.6518, lng: -100.3352 },
    isFeatured: true,
    isNew: true,
    createdAt: '2024-01-12',
    updatedAt: '2024-01-19'
  },
  {
    id: '4',
    slug: 'departamento-providencia-guadalajara',
    title: 'Departamento Premium en Providencia',
    description: `Elegante departamento en la zona más cotizada de Guadalajara. Providencia ofrece la combinación perfecta entre exclusividad residencial y acceso a la mejor oferta gastronómica y cultural de la ciudad.

Este departamento de acabados impecables cuenta con espacios amplios y luminosos. La sala-comedor se integra con una terraza que ofrece vistas al arbolado característico de la zona.

La cocina abierta con barra de granito es ideal para quienes disfrutan de cocinar y recibir invitados. Los materiales incluyen pisos de madera de ingeniería, carpintería fina y iluminación arquitectónica.

El edificio ofrece: lobby con concierge, gimnasio equipado, roof garden con área social, y estacionamiento techado.`,
    shortDescription: 'Departamento de diseñador en Providencia con terraza arbolada y acabados de lujo.',
    price: 12800000,
    priceFormatted: '$12,800,000 MXN',
    city: 'Guadalajara',
    neighborhood: 'Providencia',
    address: 'Av. Providencia 1800, Col. Providencia',
    squareMeters: 185,
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 2,
    yearBuilt: 2022,
    propertyType: 'Departamento',
    features: [
      'Terraza arbolada',
      'Pisos de madera',
      'Cocina abierta',
      'Gimnasio en edificio',
      'Roof garden',
      'Concierge 24/7',
      'Iluminación arquitectónica',
      'Closets vestidor',
      'Cuarto de lavado'
    ],
    images: [
      { id: '4-1', url: '/images/propiedades/prop_4_img_1.jpg', alt: 'Sala departamento Providencia', order: 1 },
      { id: '4-2', url: '/images/propiedades/prop_4_img_2.jpg', alt: 'Terraza con vista', order: 2 },
      { id: '4-3', url: '/images/propiedades/prop_4_img_3.jpg', alt: 'Cocina moderna abierta', order: 3 },
      { id: '4-4', url: '/images/propiedades/prop_4_img_4.jpg', alt: 'Recámara principal', order: 4 },
      { id: '4-5', url: '/images/propiedades/prop_4_img_5.jpg', alt: 'Baño de mármol', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_4_img_1.jpg',
    coordinates: { lat: 20.6942, lng: -103.3845 },
    isFeatured: false,
    isNew: false,
    createdAt: '2024-01-08',
    updatedAt: '2024-01-15'
  },
  {
    id: '5',
    slug: 'residencia-carretera-nacional-monterrey',
    title: 'Residencia Exclusiva Carretera Nacional',
    description: `Majestuosa residencia ubicada en uno de los desarrollos más exclusivos de Carretera Nacional en Monterrey. Esta propiedad representa el máximo exponente del lujo regiomontano.

Con más de 1,100 metros cuadrados de construcción, la casa ofrece espacios monumentales con techos de más de 6 metros de altura en áreas principales. El diseño arquitectónico aprovecha al máximo el terreno con desniveles que crean ambientes únicos.

El área exterior es un verdadero oasis: alberca de forma orgánica, cascada, palapa con cocina exterior completa, y extensos jardines con riego automatizado.

Incluye: cine en casa, cava con capacidad para 500 botellas, bar, sala de juegos, cuarto de masajes, y sistema de seguridad perimetral con CCTV.`,
    shortDescription: 'Majestuosa residencia de 1,100m² con cine, cava y extensos jardines en Carretera Nacional.',
    price: 75000000,
    priceFormatted: '$75,000,000 MXN',
    city: 'Monterrey',
    neighborhood: 'Carretera Nacional',
    address: 'Residencial Las Misiones, Carretera Nacional km 268',
    squareMeters: 1100,
    bedrooms: 6,
    bathrooms: 8,
    parkingSpaces: 6,
    yearBuilt: 2020,
    propertyType: 'Casa',
    features: [
      'Cine en casa',
      'Cava 500 botellas',
      'Alberca con cascada',
      'Palapa con cocina',
      'Sala de juegos',
      'Cuarto de masajes',
      'Jardines extensos',
      'CCTV perimetral',
      'Techos 6m altura'
    ],
    images: [
      { id: '5-1', url: '/images/propiedades/prop_5_img_1.jpg', alt: 'Vista aérea residencia', order: 1 },
      { id: '5-2', url: '/images/propiedades/prop_5_img_2.jpg', alt: 'Sala monumental', order: 2 },
      { id: '5-3', url: '/images/propiedades/prop_5_img_3.jpg', alt: 'Alberca con cascada', order: 3 },
      { id: '5-4', url: '/images/propiedades/prop_5_img_4.jpg', alt: 'Cine en casa', order: 4 },
      { id: '5-5', url: '/images/propiedades/prop_5_img_5.jpg', alt: 'Cava de vinos', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_5_img_1.jpg',
    videoUrl: '/videos/video_4.mp4',
    coordinates: { lat: 25.5789, lng: -100.2567 },
    isFeatured: true,
    isNew: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-16'
  },
  {
    id: '6',
    slug: 'penthouse-andares-guadalajara',
    title: 'Penthouse en Puerta de Hierro',
    description: `Sofisticado penthouse en la torre más emblemática de Puerta de Hierro, junto a Andares. Esta propiedad es sinónimo de exclusividad y representa lo mejor del mercado inmobiliario de Guadalajara.

El diseño interior fue realizado por un reconocido despacho de arquitectura y cuenta con piezas de arte y mobiliario de diseñador. Cada detalle ha sido cuidadosamente seleccionado para crear una atmósfera de elegancia contemporánea.

La terraza envolvente ofrece vistas de 270 grados que incluyen el atardecer sobre la ciudad. El espacio exterior cuenta con pérgola motorizada, área lounge y jacuzzi con vista panorámica.

Amenidades del edificio: spa, gimnasio de última generación, alberca infinity, salón de eventos, business center, y servicio de valet parking.`,
    shortDescription: 'Penthouse de autor con terraza envolvente 270° y vistas al atardecer en Puerta de Hierro.',
    price: 42000000,
    priceFormatted: '$42,000,000 MXN',
    city: 'Guadalajara',
    neighborhood: 'Puerta de Hierro',
    address: 'Av. Empresarios 200, Puerta de Hierro',
    squareMeters: 450,
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    yearBuilt: 2023,
    propertyType: 'Penthouse',
    features: [
      'Terraza 270°',
      'Jacuzzi panorámico',
      'Diseño de autor',
      'Pérgola motorizada',
      'Spa en edificio',
      'Alberca infinity',
      'Business center',
      'Valet parking',
      'Salón de eventos'
    ],
    images: [
      { id: '6-1', url: '/images/propiedades/prop_6_img_1.jpg', alt: 'Living penthouse Andares', order: 1 },
      { id: '6-2', url: '/images/propiedades/prop_6_img_2.jpg', alt: 'Terraza con atardecer', order: 2 },
      { id: '6-3', url: '/images/propiedades/prop_6_img_3.jpg', alt: 'Comedor de diseñador', order: 3 },
      { id: '6-4', url: '/images/propiedades/prop_6_img_4.jpg', alt: 'Jacuzzi panorámico', order: 4 },
      { id: '6-5', url: '/images/propiedades/prop_6_img_5.jpg', alt: 'Suite principal', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_6_img_1.jpg',
    videoUrl: '/videos/video_5.mp4',
    coordinates: { lat: 20.7128, lng: -103.4159 },
    isFeatured: true,
    isNew: true,
    createdAt: '2024-01-14',
    updatedAt: '2024-01-21'
  },
  {
    id: '7',
    slug: 'departamento-santa-fe-cdmx',
    title: 'Departamento Ejecutivo Santa Fe',
    description: `Moderno departamento en el corazón del distrito financiero de Santa Fe. Ideal para ejecutivos y profesionales que buscan vivir cerca de su lugar de trabajo sin sacrificar comodidad y estilo.

El departamento cuenta con un diseño funcional y contemporáneo que maximiza cada metro cuadrado. Los acabados incluyen piso de porcelanato, cocina integral con electrodomésticos y baños con cancel de cristal templado.

La vista desde el piso 18 ofrece un panorama impresionante del skyline de Santa Fe y los bosques que rodean la zona.

El edificio cuenta con amenidades de primer nivel: gimnasio, área de coworking, terraza común con asadores, y acceso directo al centro comercial.`,
    shortDescription: 'Departamento ejecutivo con vista al skyline de Santa Fe y amenidades premium.',
    price: 8500000,
    priceFormatted: '$8,500,000 MXN',
    city: 'Ciudad de México',
    neighborhood: 'Santa Fe',
    address: 'Av. Santa Fe 440, Santa Fe',
    squareMeters: 125,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    yearBuilt: 2022,
    propertyType: 'Departamento',
    features: [
      'Vista al skyline',
      'Piso 18',
      'Área coworking',
      'Gimnasio equipado',
      'Terraza con asadores',
      'Acceso a mall',
      'Cocina integral',
      'Portero 24/7',
      'Pet friendly'
    ],
    images: [
      { id: '7-1', url: '/images/propiedades/prop_7_img_1.jpg', alt: 'Sala departamento Santa Fe', order: 1 },
      { id: '7-2', url: '/images/propiedades/prop_7_img_2.jpg', alt: 'Vista nocturna skyline', order: 2 },
      { id: '7-3', url: '/images/propiedades/prop_7_img_3.jpg', alt: 'Cocina integral', order: 3 },
      { id: '7-4', url: '/images/propiedades/prop_7_img_4.jpg', alt: 'Recámara con vista', order: 4 },
      { id: '7-5', url: '/images/propiedades/prop_7_img_5.jpg', alt: 'Amenidades del edificio', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_7_img_1.jpg',
    coordinates: { lat: 19.3592, lng: -99.2773 },
    isFeatured: false,
    isNew: false,
    createdAt: '2024-01-03',
    updatedAt: '2024-01-10'
  },
  {
    id: '8',
    slug: 'casa-san-pedro-garza-garcia',
    title: 'Residencia San Pedro Garza García',
    description: `Elegante residencia en el municipio con el más alto ingreso per cápita de México. San Pedro Garza García es sinónimo de exclusividad, seguridad y calidad de vida excepcional.

Esta propiedad de estilo californiano contemporáneo ofrece amplios espacios de convivencia que fluyen naturalmente entre interior y exterior. Los jardines maduros proporcionan privacidad y un ambiente de tranquilidad único.

La casa ha sido meticulosamente mantenida y actualizada con sistemas de última generación. El diseño permite múltiples configuraciones para familias de diferentes tamaños.

Destacan: roof garden privado, sótano con cava y área de entretenimiento, sistema de riego inteligente, y ubicación a minutos de las mejores escuelas y hospitales de la zona.`,
    shortDescription: 'Elegante residencia californiana con jardines maduros en el exclusivo San Pedro Garza García.',
    price: 52000000,
    priceFormatted: '$52,000,000 MXN',
    city: 'Monterrey',
    neighborhood: 'San Pedro Garza García',
    address: 'Calzada del Valle 400, Del Valle',
    squareMeters: 680,
    bedrooms: 5,
    bathrooms: 5,
    parkingSpaces: 4,
    yearBuilt: 2019,
    propertyType: 'Casa',
    features: [
      'Estilo californiano',
      'Jardines maduros',
      'Roof garden',
      'Sótano con cava',
      'Área entretenimiento',
      'Riego inteligente',
      'Cerca de escuelas',
      'Alta plusvalía',
      'Privacidad total'
    ],
    images: [
      { id: '8-1', url: '/images/propiedades/prop_8_img_1.jpg', alt: 'Fachada residencia San Pedro', order: 1 },
      { id: '8-2', url: '/images/propiedades/prop_8_img_2.jpg', alt: 'Jardín y terraza', order: 2 },
      { id: '8-3', url: '/images/propiedades/prop_8_img_3.jpg', alt: 'Sala familiar', order: 3 },
      { id: '8-4', url: '/images/propiedades/prop_8_img_4.jpg', alt: 'Roof garden', order: 4 },
      { id: '8-5', url: '/images/propiedades/prop_8_img_5.jpg', alt: 'Sótano entretenimiento', order: 5 }
    ],
    mainImage: '/images/propiedades/prop_8_img_1.jpg',
    videoUrl: '/videos/video_6.mp4',
    coordinates: { lat: 25.6614, lng: -100.3898 },
    isFeatured: false,
    isNew: true,
    createdAt: '2024-01-16',
    updatedAt: '2024-01-20'
  }
];

export const cities = ['Ciudad de México', 'Monterrey', 'Guadalajara'] as const;
export const propertyTypes = ['Casa', 'Departamento', 'Penthouse', 'Terreno'] as const;

export const priceRange = {
  min: 5000000,
  max: 80000000,
  step: 1000000
};

export const squareMetersRange = {
  min: 50,
  max: 1500,
  step: 50
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter(p => p.isFeatured);
}

export function getNewProperties(): Property[] {
  return properties.filter(p => p.isNew);
}
