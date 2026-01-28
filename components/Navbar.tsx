'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, MapPin, Home, Search, ChevronDown, Check, BedDouble } from 'lucide-react';
import { useProperty } from '@/context/PropertyContext';

// --- COMPONENTE SELECTOR ---
interface NavSelectProps {
  icon: React.ElementType;
  value: string | number;
  options: (string | number)[];
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const NavSelect = ({ icon: Icon, value, options, onChange, placeholder = "Seleccionar" }: NavSelectProps) => {
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

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 text-sm font-medium border bg-white shadow-sm ${
          isOpen || value 
            ? 'border-vantra-gold text-vantra-midnight' 
            : 'border-gray-200 text-gray-600 hover:border-gray-300' 
        }`}
      >
        <Icon className={`w-4 h-4 ${value ? 'text-vantra-gold' : 'text-gray-400'}`} />
        <span className="truncate max-w-[100px]">{value || placeholder}</span>
        <ChevronDown className="w-3 h-3 opacity-50" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 py-1"
          >
            <button
                onClick={() => { onChange(''); setIsOpen(false); }}
                className="w-full text-left px-4 py-2 text-xs font-bold text-gray-400 uppercase hover:bg-gray-50"
            >
                Ver Todos
            </button>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => { onChange(option); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center justify-between ${
                  value === option ? 'text-vantra-gold bg-vantra-gold/5' : 'text-slate-600 hover:bg-gray-50'
                }`}
              >
                {option}
                {value === option && <Check className="w-3 h-3" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const cities = ['Ciudad de México', 'Monterrey', 'Guadalajara'];
const propertyTypes = ['Departamento', 'Casa', 'Penthouse', 'Terreno'];
const bedroomOptions = [1, 2, 3, 4, 5];

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '#propiedades', label: 'Propiedades' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const { isNavSearchVisible, filters, updateFilter } = useProperty();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Detectamos scroll para cambiar el color del texto a oscuro, 
      // pero el fondo se mantiene transparente.
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/525555555555?text=${encodeURIComponent('Hola, me interesa una propiedad.')}`;

  // Lógica de color: Oscuro si hay scroll O si el buscador está activo. Blanco solo en el Hero.
  const isDarkText = isScrolled || isNavSearchVisible;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
            // FONDO: Siempre transparente (invisible) en scroll, solo gradiente arriba en Hero.
            isScrolled 
              ? 'bg-transparent' // Invisible al hacer scroll
              : 'bg-gradient-to-b from-black/60 to-transparent py-6'
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between gap-4">
              
              {/* --- LOGO --- */}
              <a href="/" className="relative z-50 group flex-shrink-0">
                <motion.div
                  className="relative w-36 h-10 sm:w-48 sm:h-12"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/vantralogo.png"
                    alt="Vantra Logo"
                    className="w-full h-full object-contain object-left transition-all duration-300"
                    // Filtro: Invertir a blanco solo si estamos en el top (texto no oscuro).
                    // Si isDarkText es true (scroll o buscador), el logo se ve normal (negro/dorado).
                    style={{ filter: isDarkText ? 'none' : 'brightness(0) invert(1)' }}
                  />
                </motion.div>
              </a>

              {/* --- CENTRO: LINKS O BUSCADOR --- */}
              <div className="flex-1 flex justify-center items-center">
                <AnimatePresence mode="wait">
                  {isNavSearchVisible ? (
                    // --- SEARCH BAR COMPACTA (Visible al llegar a PropertySearch) ---
                    // Fondo propio (blanco) para que resalte sobre el fondo transparente
                    <motion.div
                      key="search-bar"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="hidden lg:flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-gray-200 shadow-xl"
                    >
                      <NavSelect 
                        icon={MapPin} 
                        value={filters.city} 
                        options={cities} 
                        onChange={(val: any) => updateFilter('city', val)}
                        placeholder="Ubicación"
                      />
                      <div className="w-px h-6 bg-gray-300" />
                      <NavSelect 
                        icon={Home} 
                        value={filters.propertyType} 
                        options={propertyTypes} 
                        onChange={(val: any) => updateFilter('propertyType', val)}
                        placeholder="Tipo"
                      />
                      {/* --- AÑADIDO: SELECTOR DE HABITACIONES --- */}
                      <div className="w-px h-6 bg-gray-300" />
                      <NavSelect 
                        icon={BedDouble} 
                        value={filters.bedrooms} 
                        options={bedroomOptions} 
                        onChange={(val: any) => updateFilter('bedrooms', val)}
                        placeholder="Hab."
                      />
                      
                      <button 
                        onClick={() => document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-[#C9A961] to-[#B8860B] text-white p-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all shadow-md ml-1"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    // --- LINKS NORMALES (Visibles hasta que entra el buscador) ---
                    <motion.div
                      key="nav-links"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="hidden lg:flex items-center gap-8 xl:gap-10"
                    >
                      {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="relative group py-2">
                          <span 
                            className={`font-rajdhani font-medium text-lg tracking-wide transition-colors duration-300 ${
                              // CAMBIO DE COLOR: Texto oscuro al hacer scroll para verse sobre fondo blanco de la página
                              isDarkText
                                ? 'text-vantra-midnight group-hover:text-vantra-gold font-bold' 
                                : 'text-white drop-shadow-md group-hover:text-vantra-gold'
                            }`}
                          >
                            {link.label}
                          </span>
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-vantra-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* --- DESKTOP CTA --- */}
              <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-150 border shadow-md ${
                    isDarkText
                      ? 'bg-white border-gray-200 text-vantra-midnight hover:bg-gray-50' // Estilo solido en scroll
                      : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20' // Estilo glass en Hero
                  }`}
                >
                  <MessageCircle className={`w-4 h-4 ${isDarkText ? 'text-green-600' : 'text-green-400'}`} />
                  <span className="text-sm font-bold font-rajdhani tracking-wider">+52 55 5555 5555</span>
                </a>
                
                <a
                  href="#contacto"
                  className="relative flex items-center justify-center px-6 py-2 rounded-full 
                             bg-gradient-to-r from-[#C9A961] to-[#B8860B] text-white 
                             text-sm font-bold tracking-widest uppercase
                             shadow-lg hover:shadow-vantra-gold/40 hover:-translate-y-0.5 
                             active:translate-y-0 transition-all duration-150"
                >
                  Vender
                </a>
              </div>

              {/* --- MOBILE MENU TOGGLE --- */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative z-50 p-2 transition-colors drop-shadow-md ${
                  isDarkText ? 'text-vantra-midnight' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>

          {/* --- MOBILE MENU OVERLAY --- */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center lg:hidden"
              >
                <div className="flex flex-col items-center gap-8 w-full px-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                      className="w-full text-center"
                    >
                      <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-4xl font-serif font-medium text-white/90 hover:text-vantra-gold transition-colors py-2">
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                  <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4 }} className="w-20 h-[1px] bg-white/20 my-4" />
                  <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-xs text-center py-4 rounded-full bg-gradient-to-r from-[#C9A961] to-[#B8860B] text-white font-bold text-lg tracking-widest uppercase shadow-lg">
                    Vender
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}