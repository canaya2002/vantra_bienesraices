'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#sobre-mi', label: 'Sobre Mí' },
  { href: '/#propiedades', label: 'Propiedades' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Lógica de aparición sincronizada con el Hero
  useEffect(() => {
    if (isHomePage) {
      // Si estamos en home, esperamos a que termine el intro del video (aprox 2.5s)
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2800); // 2.8s para coincidir con la aparición del texto en Hero
      return () => clearTimeout(timer);
    } else {
      // En otras páginas mostramos el navbar inmediatamente
      setIsVisible(true);
    }
  }, [isHomePage, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled
              ? 'bg-vantra-midnight/95 backdrop-blur-md shadow-lg py-3'
              : 'bg-transparent py-5'
          }`}
        >
          <nav className="container-custom">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="relative z-10 group">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-32 h-12 sm:w-40 sm:h-14">
                    <Image
                      src="/images/vantralogo.png"
                      alt="Vantra Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 128px, 160px"
                      priority
                    />
                  </div>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-rajdhani font-medium text-lg tracking-wide transition-colors duration-300 hover:text-vantra-gold ${
                      isScrolled ? 'text-white' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-6">
                <a
                  href="tel:+525555555555"
                  className={`flex items-center gap-2 font-medium transition-colors duration-300 font-rajdhani ${
                    isScrolled ? 'text-white hover:text-vantra-gold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>+52 55 5555 5555</span>
                </a>
                <Link
                  href="/#contacto"
                  className={`btn-primary px-6 py-2 text-sm ${
                    isScrolled ? 'gold' : ''
                  }`}
                >
                  Contactar
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative z-10 p-2 transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-8 h-8" />
                ) : (
                  <Menu className="w-8 h-8" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: '100vh' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 top-0 bg-vantra-midnight/95 backdrop-blur-xl lg:hidden z-40"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl font-display font-semibold text-white hover:text-vantra-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex flex-col gap-4 items-center"
                  >
                    <a
                      href="tel:+525555555555"
                      className="btn-primary"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Llamar ahora
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