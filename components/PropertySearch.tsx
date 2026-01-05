'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, MapPin, Home, BedDouble, ChevronDown, DollarSign, Maximize, Check } from 'lucide-react';
import { useProperty } from '@/context/PropertyContext'; // Importar Contexto

// --- COMPONENTES AUXILIARES ---
interface CustomSelectProps {
  icon: React.ElementType;
  value: string | number;
  options: (string | number)[];
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const CustomSelect = ({ icon: Icon, value, options, onChange, placeholder = "Seleccionar" }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isSelected = value !== '' && value !== 0;

  return (
    <div className="relative w-full lg:flex-1" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full h-14 pl-14 pr-10 flex items-center bg-gray-50 hover:bg-white border transition-all duration-300 rounded-2xl text-left outline-none group ${
          isOpen || isSelected 
            ? 'border-[#D4AF37] bg-white ring-4 ring-[#D4AF37]/10' 
            : 'border-transparent hover:border-[#D4AF37]/30'
        }`}
      >
        <div className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-colors duration-300 ${
            isOpen || isSelected 
            ? 'bg-[#D4AF37]/10 text-[#B8860B]' 
            : 'bg-white shadow-sm text-gray-400 group-hover:text-[#B8860B] group-hover:bg-[#D4AF37]/10'
        }`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`font-medium truncate ml-1 ${isSelected ? 'text-slate-800' : 'text-slate-500'}`}>
          {!value || value === 0 ? placeholder : value}
        </span>
        <ChevronDown className={`absolute right-4 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#B8860B]' : 'text-gray-400'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2 max-h-64 overflow-y-auto custom-scrollbar"
          >
            <div className="px-2">
                <button
                    onClick={() => { onChange(''); setIsOpen(false); }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors mb-1"
                >
                    {placeholder} (Todos)
                </button>
                {options.map((option) => (
                <button
                    key={option}
                    onClick={() => { onChange(option); setIsOpen(false); }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group ${
                    value === option ? 'bg-[#D4AF37]/10 text-[#B8860B]' : 'text-slate-600 hover:bg-gray-50 hover:text-slate-900'
                    }`}
                >
                    <span>{option} {typeof option === 'number' && '+'}</span>
                    {value === option && <Check className="w-4 h-4 text-[#B8860B]" />}
                </button>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface RangeInputsProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  onChange: (value: { min: number; max: number }) => void;
  prefix?: string;
  suffix?: string;
}

const RangeInputs = ({ min, max, value, onChange, prefix = "", suffix = "" }: RangeInputsProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 group">
        <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Mínimo</label>
        <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20 transition-all flex items-center h-12">
            {prefix && <span className="pl-3 text-gray-400 font-medium">{prefix}</span>}
            <input 
                type="number" 
                value={value.min || ''} 
                placeholder={min.toString()}
                onChange={(e) => {
                    const val = e.target.value === '' ? 0 : Number(e.target.value);
                    onChange({ min: val, max: value.max });
                }}
                className="w-full h-full px-3 outline-none text-slate-800 font-bold placeholder:text-gray-300 bg-transparent" 
            />
            {suffix && <span className="pr-3 text-gray-400 text-sm font-medium">{suffix}</span>}
        </div>
      </div>
      <div className="pt-6 text-gray-300"><div className="w-4 h-[2px] bg-gray-200 rounded-full"></div></div>
      <div className="flex-1 group">
        <label className="block text-xs font-bold text-gray-400 uppercase mb-1.5 ml-1">Máximo</label>
        <div className="relative bg-white border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20 transition-all flex items-center h-12">
             {prefix && <span className="pl-3 text-gray-400 font-medium">{prefix}</span>}
            <input 
                type="number" 
                value={value.max || ''} 
                placeholder={max.toString()}
                onChange={(e) => {
                    const val = e.target.value === '' ? 0 : Number(e.target.value);
                    onChange({ min: value.min, max: val });
                }}
                className="w-full h-full px-3 outline-none text-slate-800 font-bold placeholder:text-gray-300 bg-transparent" 
            />
             {suffix && <span className="pr-3 text-gray-400 text-sm font-medium">{suffix}</span>}
        </div>
      </div>
    </div>
  );
};

const cities = ['Ciudad de México', 'Monterrey', 'Guadalajara'];
const propertyTypes = ['Departamento', 'Casa', 'Penthouse', 'Terreno', 'Villa', 'Loft'];

export default function PropertySearch() {
  const { filters, updateFilter, setFilters, isNavSearchVisible, setIsNavSearchVisible } = useProperty();
  const [isExpanded, setIsExpanded] = useState(false);
  const searchRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (searchRef.current) {
        const rect = searchRef.current.getBoundingClientRect();
        // Si la parte superior del componente toca la barra de navegación (aprox 100px para dar margen)
        // Y aseguramos que "pasó" hacia arriba.
        const shouldBeInNav = rect.top <= 80;
        
        if (shouldBeInNav !== isNavSearchVisible) {
          setIsNavSearchVisible(shouldBeInNav);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavSearchVisible, setIsNavSearchVisible]);

  const resetFilters = () => {
    setFilters({
      city: '',
      minPrice: 0,
      maxPrice: 50000000,
      minSquareMeters: 50,
      maxSquareMeters: 5000,
      bedrooms: 0,
      propertyType: '',
    });
    setIsExpanded(false);
  };

  const hasActiveFilters = 
    filters.city !== '' || filters.propertyType !== '' || filters.bedrooms > 0 ||
    filters.minPrice > 0 || filters.maxPrice < 50000000 || filters.minSquareMeters > 50;

  return (
    <section 
      ref={searchRef} 
      className="relative z-30 px-4 py-6 min-h-[140px]" 
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Ocultamos visualmente el buscador grande cuando el del navbar está activo,
            pero mantenemos su espacio en el DOM (opacity 0) para evitar saltos en el scroll */}
        <motion.div 
          animate={{ opacity: isNavSearchVisible ? 0 : 1, pointerEvents: isNavSearchVisible ? 'none' : 'auto' }}
          transition={{ duration: 0.3 }}
          className="relative bg-white shadow-2xl border border-gray-100 rounded-3xl"
        >
          <div className="p-3 lg:p-4 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 relative z-20">
            
            <CustomSelect 
                icon={MapPin} 
                placeholder="Ubicación"
                value={filters.city}
                options={cities}
                onChange={(val: any) => updateFilter('city', val)}
            />

            <div className="hidden lg:block w-[1px] h-8 bg-gray-200" />

            <CustomSelect 
                icon={Home} 
                placeholder="Tipo de Inmueble"
                value={filters.propertyType}
                options={propertyTypes}
                onChange={(val: any) => updateFilter('propertyType', val)}
            />

            <div className="w-full lg:w-56">
                <CustomSelect 
                    icon={BedDouble} 
                    placeholder="Habitaciones"
                    value={filters.bedrooms}
                    options={[1, 2, 3, 4, 5]}
                    onChange={(val: any) => updateFilter('bedrooms', val)}
                />
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex-1 lg:flex-none flex items-center justify-center gap-2 h-14 px-6 rounded-2xl transition-all duration-300 font-medium border ${
                  isExpanded 
                    ? 'bg-[#D4AF37]/10 text-[#B8860B] border-[#D4AF37]/30 shadow-inner' 
                    : 'bg-white text-slate-600 border-gray-200 hover:border-[#D4AF37]/50 hover:text-[#B8860B] hover:shadow-md'
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filtros</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden flex-1 lg:flex-none flex items-center justify-center gap-2 h-14 px-8 rounded-2xl group transition-all duration-300 shadow-xl shadow-[#D4AF37]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] group-hover:from-[#E5C564] group-hover:to-[#D4AF37] transition-all z-0" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-40 z-0" />
                <div className="absolute inset-0 border border-white/30 rounded-2xl z-10" />
                <div className="relative z-20 flex items-center gap-2 text-white">
                    <Search className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <span className="font-bold tracking-wide text-white">Buscar</span>
                </div>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden border-t border-gray-100 bg-slate-50/50"
              >
                <div className="p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-[#D4AF37]/10 rounded-lg text-[#B8860B]"><DollarSign className="w-5 h-5" /></div>
                        <h3 className="font-bold text-slate-800 text-lg">Presupuesto</h3>
                    </div>
                    <RangeInputs 
                        min={0} max={50000000} prefix="$"
                        value={{ min: filters.minPrice, max: filters.maxPrice }}
                        onChange={(val: any) => { updateFilter('minPrice', val.min); updateFilter('maxPrice', val.max); }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-700"><Maximize className="w-5 h-5" /></div>
                        <h3 className="font-bold text-slate-800 text-lg">Superficie</h3>
                    </div>
                    <RangeInputs 
                        min={50} max={5000} suffix="m²"
                        value={{ min: filters.minSquareMeters, max: filters.maxSquareMeters }}
                        onChange={(val: any) => { updateFilter('minSquareMeters', val.min); updateFilter('maxSquareMeters', val.max); }}
                    />
                  </div>
                  <div className="md:col-span-2 flex justify-end items-center pt-2">
                    {hasActiveFilters && (
                      <button onClick={resetFilters} className="text-sm text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition-colors px-4 py-2 hover:bg-red-50 rounded-lg">
                        <X className="w-4 h-4" /> Limpiar Filtros
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}