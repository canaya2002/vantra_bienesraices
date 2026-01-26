'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  // Estado para la rotación de palabras
  const [index, setIndex] = useState(0);
  
  const words = ["Encontrar", "Amar", "Vivir", "Crear", "Sentir"];

  // Efecto para el intro inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntroFinished(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Efecto para rotar las palabras cada 3 segundos
  useEffect(() => {
    // Solo iniciamos la rotación después de que termine la intro para no distraer
    if (!isIntroFinished) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isIntroFinished]);

  const scrollToProperties = () => {
    const element = document.getElementById('propiedades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background - Siempre presente */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          {/* Asegúrate de que la ruta del video sea correcta */}
          <source src="/videos/vantralanding.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradiente */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroFinished ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" 
        />
      </div>

      {/* Contenido del Hero - Alineado a la izquierda */}
      <AnimatePresence>
        {isIntroFinished && (
          <div className="relative z-10 container-custom w-full px-6 lg:px-12">
            <div className="max-w-3xl"> 
                
                {/* Badge */}
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

                {/* Título Principal */}
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="heading-1 text-white mb-8 leading-tight"
                >
                  <span className="block font-light">Vantra:</span>
                  <span className="block font-bold flex flex-wrap items-center gap-x-3">
                    El Arte de 
                    {/* Contenedor de la palabra animada */}
                    <span className="inline-flex relative h-[1.2em] min-w-[4ch] overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={words[index]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ 
                            y: { type: "spring", stiffness: 100, damping: 20 },
                            opacity: { duration: 0.2 }
                          }}
                          className="text-gradient bg-gradient-gold bg-clip-text text-transparent block"
                        >
                          {words[index]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </span>
                  <span className="block font-bold">tu Hogar</span>
                </motion.h1>

                {/* Botones */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
                >
                  <button
                    onClick={scrollToProperties}
                    className="btn-primary group w-full sm:w-auto"
                  >
                    <span>Explorar Propiedades</span>
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </button>
                  
                  <a
                    href="#sobre-mi"
                    className="btn-secondary w-full sm:w-auto text-center bg-white/5 border-white/20 text-white hover:bg-white hover:text-vantra-midnight backdrop-blur-sm transition-all duration-300"
                  >
                    Conocer más
                  </a>
                </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Elementos Decorativos sutiles */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}