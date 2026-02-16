'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const words = ['Encontrar', 'Amar', 'Vivir', 'Crear', 'Sentir'];

  useEffect(() => {
    const timer = setTimeout(() => setIsIntroFinished(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isIntroFinished) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isIntroFinished, words.length]);

  const scrollToProperties = () => {
    document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background — INTOCABLE */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/vantralanding.mp4" type="video/mp4" />
        </video>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroFinished ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"
        />
      </div>

      {/* Content */}
      <AnimatePresence>
        {isIntroFinished && (
          <div className="relative z-10 container mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-vantra-gold/10 backdrop-blur-md border border-vantra-gold/20 rounded-full text-sm font-medium tracking-wider uppercase text-vantra-gold-light">
                  Inmobiliaria de Lujo en México
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-white mb-8"
              >
                <span className="block font-light">Vantra:</span>
                <span className="block font-bold flex flex-wrap items-center gap-x-3">
                  El Arte de{' '}
                  <span className="inline-flex relative h-[1.2em] min-w-[4ch] overflow-hidden">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={words[index]}
                        initial={{ y: '100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{
                          y: { type: 'spring', stiffness: 100, damping: 20 },
                          opacity: { duration: 0.2 },
                        }}
                        className="bg-gradient-gold bg-clip-text text-transparent block"
                      >
                        {words[index]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
                <span className="block font-bold">tu Hogar</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <button
                  onClick={scrollToProperties}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wide hover:bg-white/20 transition-all group"
                >
                  Explorar Propiedades
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </button>
                <Link
                  href="/cotizar"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-vantra-gold to-vantra-gold-dark text-white font-semibold tracking-wide shadow-gold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  Solicitar Cotización
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}
