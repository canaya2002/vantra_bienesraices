'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#propiedades', label: 'Propiedades' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  // Lógica para detectar si estamos en home
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsHomePage(window.location.pathname === '/' || window.location.pathname === '');
    }
  }, []);

  // Lógica de aparición inicial sincronizada
  useEffect(() => {
    if (isHomePage) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2800);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isHomePage]);

  // Detector de Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll body cuando menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Ajustado: py-4 en top y py-2 en scroll para reducir altura vertical
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
            isScrolled
              ? 'bg-black/10 backdrop-blur-xl border-white/10 py-2 shadow-sm' 
              : 'bg-transparent border-transparent py-4'
          }`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between">
              
              {/* --- LOGO OPTIMIZADO --- */}
              <a href="/" className="relative z-50 group">
                <motion.div
                  // Ajustado: Altura reducida (h-10 mobile, h-16 desktop) para evitar que se vea "estirado"
                  className="relative w-40 h-10 sm:w-60 sm:h-16"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/vantralogo.png"
                    alt="Vantra Logo"
                    className="w-full h-full object-contain object-left"
                  />
                </motion.div>
              </a>

              {/* --- DESKTOP NAVIGATION --- */}
              <div className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className={`font-rajdhani font-medium text-lg tracking-wide transition-colors duration-300 ${
                      isScrolled ? 'text-white group-hover:text-yellow-400' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {link.label}
                    </span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* --- DESKTOP CTA --- */}
              <div className="hidden lg:flex items-center gap-6">
                <a
                  href="tel:+525555555555"
                  className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 font-rajdhani tracking-wider ${
                    isScrolled ? 'text-white/80 hover:text-yellow-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>+52 55 5555 5555</span>
                </a>
                
                <a
                  href="#contacto"
                  className={`relative overflow-hidden px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${
                    isScrolled 
                      ? 'border-white/20 bg-white/10 hover:bg-white hover:text-black text-white' 
                      : 'border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  Contactar
                </a>
              </div>

              {/* --- MOBILE MENU TOGGLE --- */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-50 p-2 text-white hover:text-yellow-400 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
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
                className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center lg:hidden"
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
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-4xl font-serif font-medium text-white/90 hover:text-yellow-400 transition-colors py-2"
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}

                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-20 h-[1px] bg-white/20 my-4"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <a
                      href="tel:+525555555555"
                      className="flex items-center gap-3 text-xl text-white/80 hover:text-yellow-400 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>+52 55 5555 5555</span>
                    </a>
                    
                    <a
                      href="#contacto"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-primary gold px-10 py-4 text-lg shadow-2xl bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold rounded-full"
                    >
                      Agendar Cita
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}