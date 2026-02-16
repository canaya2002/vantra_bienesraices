'use client';

import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
  subtitle?: string;
  filterByOperation?: 'venta' | 'renta';
  filterByCity?: string;
}

export default function PropertyGrid({
  properties,
  title = 'Propiedades Exclusivas',
  subtitle,
  filterByOperation,
  filterByCity,
}: PropertyGridProps) {
  const filtered = useMemo(() => {
    let result = properties;
    if (filterByOperation) result = result.filter((p) => p.operation === filterByOperation);
    if (filterByCity) result = result.filter((p) => p.citySlug === filterByCity);
    return result;
  }, [properties, filterByOperation, filterByCity]);

  return (
    <section id="propiedades" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-vantra-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-vantra-midnight mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-vantra-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <p className="text-vantra-gray-600 mb-8">
          <span className="font-semibold text-vantra-midnight">{filtered.length}</span>{' '}
          propiedad{filtered.length !== 1 ? 'es' : ''} encontrada{filtered.length !== 1 ? 's' : ''}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                layout
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-display font-semibold text-vantra-midnight mb-2">
              No encontramos propiedades
            </h3>
            <p className="text-vantra-gray-500">Intenta ajustar los filtros para ver más resultados.</p>
          </div>
        )}

        <p className="text-xs text-vantra-gray-400 text-center mt-8">
          La información y precios son referenciales, están sujetos a cambios y disponibilidad. Un asesor te orienta con datos actualizados.
        </p>
      </div>
    </section>
  );
}
