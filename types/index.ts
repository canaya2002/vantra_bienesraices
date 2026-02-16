export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  priceFormatted: string;
  operation: 'venta' | 'renta';
  city: string;
  citySlug: string;
  neighborhood: string;
  address: string;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  yearBuilt: number;
  propertyType: 'Casa' | 'Departamento' | 'Penthouse' | 'Terreno' | 'Villa' | 'Loft';
  features: string[];
  images: PropertyImage[];
  mainImage: string;
  videoUrl?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  isFeatured: boolean;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  description: string;
  shortDescription: string;
  image: string;
  propertyCount?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  author: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FilterState {
  city: string;
  minPrice: number;
  maxPrice: number;
  minSquareMeters: number;
  maxSquareMeters: number;
  bedrooms: number;
  propertyType: string;
  operation: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  propertyId?: string;
  propertyTitle?: string;
}
