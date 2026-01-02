'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/propiedades/${property.slug}`} className="block group">
      <article className="card-property h-full">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.mainImage}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {property.isNew && (
              <span className="px-3 py-1 bg-vantra-gold text-white text-xs font-semibold rounded-full">
                Nueva
              </span>
            )}
            {property.isFeatured && (
              <span className="px-3 py-1 bg-white/90 text-vantra-midnight text-xs font-semibold rounded-full">
                Destacada
              </span>
            )}
          </div>
          
          {/* Favorite Button */}
          <button 
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100"
            onClick={(e) => {
              e.preventDefault();
              // Add to favorites functionality
            }}
            aria-label="Agregar a favoritos"
          >
            <Heart className="w-5 h-5 text-vantra-gray-600 hover:text-red-500 transition-colors" />
          </button>

          {/* Property Type */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-3 py-1 bg-white/90 text-vantra-midnight text-sm font-medium rounded-full">
              {property.propertyType}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Location */}
          <div className="flex items-center gap-1 text-vantra-gray-500 text-sm mb-2">
            <MapPin className="w-4 h-4 text-vantra-gold" />
            <span>{property.neighborhood}, {property.city}</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-semibold text-vantra-midnight mb-3 line-clamp-2 group-hover:text-vantra-gold transition-colors">
            {property.title}
          </h3>

          {/* Features */}
          <div className="flex items-center gap-4 text-vantra-gray-600 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{property.squareMeters} m²</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-vantra-gray-100">
            <p className="text-xl font-display font-bold text-vantra-gold">
              {property.priceFormatted}
            </p>
            <span className="text-vantra-gray-500 text-sm group-hover:text-vantra-gold transition-colors">
              Ver detalles →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
