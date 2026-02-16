'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

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

interface PropertyContextType {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  updateFilter: (key: keyof FilterState, value: string | number) => void;
  isNavSearchVisible: boolean;
  setIsNavSearchVisible: (visible: boolean) => void;
}

const initialFilters: FilterState = {
  city: '',
  minPrice: 0,
  maxPrice: 100000000,
  minSquareMeters: 0,
  maxSquareMeters: 5000,
  bedrooms: 0,
  propertyType: '',
  operation: '',
};

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isNavSearchVisible, setIsNavSearchVisible] = useState(false);

  const updateFilter = (key: keyof FilterState, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <PropertyContext.Provider
      value={{ filters, setFilters, updateFilter, isNavSearchVisible, setIsNavSearchVisible }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
}
