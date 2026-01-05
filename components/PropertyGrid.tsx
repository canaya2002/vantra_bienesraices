'use client';

import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';
import { useProperty } from '@/context/PropertyContext';

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  const { filters } = useProperty();

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Filtro Ciudad
      if (filters.city && property.city !== filters.city) return false;
      
      // Filtro Tipo
      if (filters.propertyType && property.propertyType !== filters.propertyType) return false;
      
      // Filtro Recámaras
      if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) return false;
      
      // Filtro Precio
      if (property.price < filters.minPrice || property.price > filters.maxPrice) return false;
      
      // Filtro Metros Cuadrados
      if (property.squareMeters < filters.minSquareMeters || property.squareMeters > filters.maxSquareMeters) return false;
      
      return true;
    });
  }, [properties, filters]);

  return (
    <section id="propiedades" className="section-padding bg-vantra-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-vantra-gold font-medium tracking-wider uppercase text-sm">
            Nuestra Selección
          </span>
          <h2 className="heading-2 text-vantra-midnight mt-4 mb-4">
            Propiedades Exclusivas
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Descubre nuestra cuidadosa selección de propiedades de lujo en las mejores 
            zonas de Ciudad de México, Monterrey y Guadalajara.
          </p>
        </motion.div>

        <div className="flex items-center justify-between mb-8">
          <p className="text-vantra-gray-600">
            <span className="font-semibold text-vantra-midnight">{filteredProperties.length}</span>
            {' '}propiedad{filteredProperties.length !== 1 ? 'es' : ''} encontrada{filteredProperties.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                layout
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-vantra-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-vantra-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-semibold text-vantra-midnight mb-2">
              No encontramos propiedades
            </h3>
            <p className="text-vantra-gray-500 mb-6">
              Intenta ajustar los filtros para ver más resultados.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}