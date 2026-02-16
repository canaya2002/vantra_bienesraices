'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  {
    href: '#',
    label: 'Propiedades',
    children: [
      { href: '/propiedades', label: 'Todas' },
      { href: '/venta', label: 'Venta' },
      { href: '/renta', label: 'Renta' },
    ],
  },
  { href: '/ciudades', label: 'Ciudades' },
  { href: '/blog', label: 'Blog' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/525555555555?text=${encodeURIComponent('Hola, me interesa una propiedad de Vantra.')}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex-shrink-0">
            <div className="relative w-36 h-10 sm:w-44 sm:h-12">
              <img
                src="/images/vantralogo.png"
                alt="Vantra Bienes Raíces"
                className="w-full h-full object-contain object-left transition-all duration-300"
                style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors ${
                      isScrolled ? 'text-vantra-midnight hover:text-vantra-gold' : 'text-white hover:text-vantra-gold-light'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-soft-lg border border-vantra-gray-100 overflow-hidden py-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-vantra-gray-700 hover:bg-vantra-gold/5 hover:text-vantra-gold transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isScrolled ? 'text-vantra-midnight hover:text-vantra-gold' : 'text-white hover:text-vantra-gold-light'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                isScrolled
                  ? 'bg-white border-vantra-gray-200 text-vantra-midnight hover:border-vantra-gold'
                  : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-green-500" />
              WhatsApp
            </a>
            <Link
              href="/cotizar"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-vantra-gold to-vantra-gold-dark text-white text-sm font-bold tracking-wide shadow-gold hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Cotizar
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-50 p-2 ${isScrolled ? 'text-vantra-midnight' : 'text-white'}`}
            aria-label="Menú de navegación"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-vantra-midnight/95 backdrop-blur-md z-40 flex items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full px-8" aria-label="Menú móvil">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col items-center gap-3">
                    <span className="text-vantra-gold text-sm font-semibold uppercase tracking-widest">
                      {link.label}
                    </span>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-display text-white/80 hover:text-vantra-gold transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display text-white hover:text-vantra-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="w-16 h-px bg-white/20 my-2" />
              <Link
                href="/cotizar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs text-center py-4 rounded-full bg-gradient-to-r from-vantra-gold to-vantra-gold-dark text-white font-bold text-lg tracking-wide"
              >
                Solicitar Cotización
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
