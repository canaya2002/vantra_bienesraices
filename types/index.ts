export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number;
  priceFormatted: string;
  city: 'Ciudad de México' | 'Monterrey' | 'Guadalajara';
  neighborhood: string;
  address: string;
  squareMeters: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  yearBuilt: number;
  propertyType: 'Casa' | 'Departamento' | 'Penthouse' | 'Terreno';
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

export interface FilterState {
  city: string;
  minPrice: number;
  maxPrice: number;
  minSquareMeters: number;
  maxSquareMeters: number;
  bedrooms: number;
  propertyType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyId?: string;
  propertyTitle?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}
