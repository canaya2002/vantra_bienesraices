'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Definición de tipos para los filtros
export interface FilterState {
  city: string;
  minPrice: number;
  maxPrice: number;
  minSquareMeters: number;
  maxSquareMeters: number;
  bedrooms: number;
  propertyType: string;
}

// Interfaz del contexto
interface PropertyContextType {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  updateFilter: (key: keyof FilterState, value: any) => void;
  isNavSearchVisible: boolean;
  setIsNavSearchVisible: (visible: boolean) => void;
}

// Valores iniciales
const initialFilters: FilterState = {
  city: '',
  minPrice: 0,
  maxPrice: 50000000,
  minSquareMeters: 50,
  maxSquareMeters: 5000,
  bedrooms: 0,
  propertyType: '',
};

// Creación del contexto
const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

// Provider
export function PropertyProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isNavSearchVisible, setIsNavSearchVisible] = useState(false);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <PropertyContext.Provider value={{ 
      filters, 
      setFilters, 
      updateFilter,
      isNavSearchVisible, 
      setIsNavSearchVisible 
    }}>
      {children}
    </PropertyContext.Provider>
  );
}

// Hook personalizado
export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
}