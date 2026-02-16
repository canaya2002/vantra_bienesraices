import { CityData } from '@/types';

export const cities: CityData[] = [
  {
    slug: 'ciudad-de-mexico',
    name: 'Ciudad de México',
    state: 'CDMX',
    description:
      'La Ciudad de México es el epicentro cultural, financiero y gastronómico del país. Colonias como Polanco, Lomas de Chapultepec, Condesa y Santa Fe concentran las propiedades más exclusivas del mercado inmobiliario mexicano. Su oferta incluye penthouses con vistas al Bosque de Chapultepec, residencias de arquitectura contemporánea y departamentos en edificios emblemáticos.',
    shortDescription:
      'Propiedades exclusivas en Polanco, Lomas, Condesa y Santa Fe.',
    image: '/images/propiedades/prop_1_img_1.jpg',
  },
  {
    slug: 'monterrey',
    name: 'Monterrey',
    state: 'Nuevo León',
    description:
      'Monterrey es la capital industrial de México y una de las ciudades con mayor crecimiento económico. Zonas como Valle Oriente, San Pedro Garza García y Carretera Nacional ofrecen residencias de alto nivel con vistas a la Sierra Madre. La ciudad combina modernidad, seguridad y una calidad de vida que atrae a familias e inversionistas por igual.',
    shortDescription:
      'Residencias con vistas a la Sierra Madre en Valle Oriente y San Pedro.',
    image: '/images/propiedades/prop_3_img_1.jpg',
  },
  {
    slug: 'guadalajara',
    name: 'Guadalajara',
    state: 'Jalisco',
    description:
      'Guadalajara, la Perla de Occidente, destaca por su riqueza cultural y su creciente escena tecnológica. Providencia, Puerta de Hierro y Colinas de San Javier son referentes del mercado residencial de lujo. La ciudad ofrece un clima excepcional, excelente conectividad y una calidad de vida reconocida internacionalmente.',
    shortDescription:
      'Lujo contemporáneo en Providencia y Puerta de Hierro.',
    image: '/images/propiedades/prop_4_img_1.jpg',
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
