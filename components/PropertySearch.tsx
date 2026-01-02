'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X, MapPin, DollarSign, Maximize } from 'lucide-react';
import { cities, propertyTypes, priceRange, squareMetersRange, formatPrice } from '@/data/properties';
import { FilterState } from '@/types';

interface PropertySearchProps {
  onFilterChange?: (filters: FilterState) => void;
}

const initialFilters: FilterState = {
  city: '',
  minPrice: priceRange.min,
  maxPrice: priceRange.max,
  minSquareMeters: squareMetersRange.min,
  maxSquareMeters: squareMetersRange.max,
  bedrooms: 0,
  propertyType: '',
};

export default function PropertySearch({ onFilterChange }: PropertySearchProps) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = useCallback((key: keyof FilterState, value: string | number) => {
    setFilters(prev => {
      const newFilters = { ...prev, [key]: value };
      return newFilters;
    });
  }, []);

  useEffect(() => {
    onFilterChange?.(filters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (filters.city) params.set('ciudad', filters.city);
    if (filters.propertyType) params.set('tipo', filters.propertyType);
    if (filters.bedrooms > 0) params.set('recamaras', filters.bedrooms.toString());
    if (filters.minPrice > priceRange.min) params.set('precioMin', filters.minPrice.toString());
    if (filters.maxPrice < priceRange.max) params.set('precioMax', filters.maxPrice.toString());
    
    const queryString = params.toString();
    const newUrl = queryString ? `?${queryString}#propiedades` : '#propiedades';
    window.history.replaceState({}, '', newUrl);
  }, [filters, onFilterChange]);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const hasActiveFilters = 
    filters.city !== '' ||
    filters.propertyType !== '' ||
    filters.bedrooms > 0 ||
    filters.minPrice > priceRange.min ||
    filters.maxPrice < priceRange.max ||
    filters.minSquareMeters > squareMetersRange.min ||
    filters.maxSquareMeters < squareMetersRange.max;

  return (
    <section className="sticky top-16 z-30 bg-white shadow-soft border-b border-vantra-gray-100">
      <div className="container-custom py-4">
        {/* Main Filter Bar */}
        <div className="flex flex-wrap items-center gap-4">
          {/* City Filter */}
          <div className="relative flex-1 min-w-[200px]">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-vantra-gray-400" />
            <select
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              className="filter-select w-full pl-10"
              aria-label="Seleccionar ciudad"
            >
              <option value="">Todas las ciudades</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Property Type Filter */}
          <div className="relative flex-1 min-w-[180px]">
            <select
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
              className="filter-select w-full"
              aria-label="Tipo de propiedad"
            >
              <option value="">Tipo de propiedad</option>
              {propertyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Bedrooms Filter */}
          <div className="relative flex-1 min-w-[150px]">
            <select
              value={filters.bedrooms}
              onChange={(e) => handleFilterChange('bedrooms', parseInt(e.target.value))}
              className="filter-select w-full"
              aria-label="Número de recámaras"
            >
              <option value={0}>Recámaras</option>
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}+ recámaras</option>
              ))}
            </select>
          </div>

          {/* More Filters Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 ${
              isExpanded 
                ? 'bg-vantra-gold text-white border-vantra-gold' 
                : 'border-vantra-gray-200 text-vantra-gray-700 hover:border-vantra-gold'
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden sm:inline">Más filtros</span>
          </button>

          {/* Reset Button */}
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={resetFilters}
              className="flex items-center gap-2 px-4 py-3 text-vantra-gray-500 hover:text-vantra-gray-700 transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">Limpiar</span>
            </motion.button>
          )}
        </div>

        {/* Expanded Filters */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-6 pb-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-vantra-gray-700 mb-3">
                Rango de Precio
              </label>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-vantra-gray-600">
                  <span>{formatPrice(filters.minPrice)}</span>
                  <span>{formatPrice(filters.maxPrice)}</span>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    step={priceRange.step}
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', parseInt(e.target.value))}
                    className="w-full"
                    aria-label="Precio mínimo"
                  />
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    step={priceRange.step}
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                    className="w-full"
                    aria-label="Precio máximo"
                  />
                </div>
              </div>
            </div>

            {/* Square Meters Range */}
            <div>
              <label className="block text-sm font-medium text-vantra-gray-700 mb-3">
                Metros Cuadrados
              </label>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-vantra-gray-600">
                  <span>{filters.minSquareMeters} m²</span>
                  <span>{filters.maxSquareMeters} m²</span>
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min={squareMetersRange.min}
                    max={squareMetersRange.max}
                    step={squareMetersRange.step}
                    value={filters.minSquareMeters}
                    onChange={(e) => handleFilterChange('minSquareMeters', parseInt(e.target.value))}
                    className="w-full"
                    aria-label="Metros mínimos"
                  />
                </div>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min={squareMetersRange.min}
                    max={squareMetersRange.max}
                    step={squareMetersRange.step}
                    value={filters.maxSquareMeters}
                    onChange={(e) => handleFilterChange('maxSquareMeters', parseInt(e.target.value))}
                    className="w-full"
                    aria-label="Metros máximos"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
