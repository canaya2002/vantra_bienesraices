'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';

const locations = [
  {
    id: 'cdmx',
    name: 'Ciudad de México',
    top: '65%',
    left: '48%',
    price: '$45 MDP',
    image: '/images/propiedades/prop_1_img_1.jpg',
    type: 'Penthouse'
  },
  {
    id: 'mty',
    name: 'Monterrey',
    top: '35%',
    left: '45%',
    price: '$75 MDP',
    image: '/images/propiedades/prop_3_img_1.jpg',
    type: 'Residencia'
  },
  {
    id: 'gdl',
    name: 'Guadalajara',
    top: '60%',
    left: '38%',
    price: '$28 MDP',
    image: '/images/propiedades/prop_4_img_1.jpg',
    type: 'Villa'
  },
  {
    id: 'tulum',
    name: 'Tulum',
    top: '62%',
    left: '85%',
    price: '$1.5 MDD',
    image: '/images/propiedades/prop_2_img_1.jpg',
    type: 'Eco-Resort'
  },
  {
    id: 'cabos',
    name: 'Los Cabos',
    top: '45%',
    left: '20%',
    price: '$5.2 MDD',
    image: '/images/propiedades/prop_5_img_1.jpg',
    type: 'Beachfront'
  }
];

export default function MexicoMap() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-vantra-midnight to-[#0F172A] overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-vantra-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Cobertura Nacional
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display text-white font-bold leading-tight"
          >
            Presencia en las zonas <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-gold">más exclusivas de México</span>
          </motion.h2>
        </div>

        {/* Contenedor del Mapa */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[1.8/1]">
          {/* Mapa SVG de México (Silueta Aproximada Mejorada) */}
          <svg
            viewBox="0 0 1000 650"
            className="w-full h-full drop-shadow-[0_0_50px_rgba(201,169,97,0.1)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Silueta estilizada de México */}
            <motion.path
              d="M172,207 C172,207 183,189 193,178 C203,167 215,223 215,223 L222,256 C222,256 235,270 235,270 L248,300 L260,335 L300,350 L345,340 L380,310 L400,280 L425,230 L450,195 L490,175 L530,170 L560,185 L580,210 L570,240 L550,260 L540,290 L530,320 L535,350 L560,370 L600,380 L640,375 L670,360 L700,340 L730,320 L760,310 L790,305 L820,310 L850,330 L870,360 L850,390 L820,410 L790,420 L760,430 L730,440 L700,450 L670,460 L640,470 L610,480 L580,485 L550,480 L520,470 L490,460 L460,450 L430,440 L400,435 L370,430 L340,420 L310,400 L280,380 L250,360 L220,340 L190,320 L160,300 L172,207 Z M900,350 L930,330 L950,350 L930,380 L900,350 Z" 
              className="fill-white/5 stroke-vantra-gold/40 hover:fill-white/10 transition-colors duration-500"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          {/* Hotspots */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="absolute z-20"
              style={{ top: loc.top, left: loc.left }}
            >
              <button
                onMouseEnter={() => setActiveLocation(loc.id)}
                onMouseLeave={() => setActiveLocation(null)}
                className="relative group focus:outline-none -translate-x-1/2 -translate-y-1/2"
              >
                {/* Ondas expansivas */}
                <div className="absolute -inset-6 bg-vantra-gold/20 rounded-full animate-ping opacity-75" />
                <div className="absolute -inset-2 bg-vantra-gold/40 rounded-full animate-pulse" />
                
                {/* Pin Central */}
                <div className="relative w-4 h-4 bg-vantra-gold rounded-full border-2 border-white shadow-[0_0_20px_#C9A961] transition-transform duration-300 group-hover:scale-125" />

                {/* Tarjeta de Información */}
                <AnimatePresence>
                  {activeLocation === loc.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 w-64 pointer-events-none z-50"
                    >
                      <div className="bg-vantra-midnight/90 backdrop-blur-md border border-vantra-gold/30 rounded-xl overflow-hidden shadow-2xl">
                        {/* Imagen */}
                        <div className="relative h-32 w-full">
                          <img 
                            src={loc.image} 
                            alt={loc.name} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-vantra-midnight to-transparent" />
                          <div className="absolute top-2 right-2 px-2 py-1 bg-white/90 rounded-md text-[10px] font-bold text-vantra-midnight uppercase tracking-wider">
                            {loc.type}
                          </div>
                        </div>
                        
                        {/* Texto */}
                        <div className="p-4 text-center -mt-6 relative z-10">
                          <h3 className="text-white font-display text-lg mb-1">{loc.name}</h3>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-vantra-gold/10 border border-vantra-gold/20 rounded-full">
                            <Star className="w-3 h-3 text-vantra-gold fill-vantra-gold" />
                            <span className="text-vantra-gold text-xs font-bold">{loc.price}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Triángulo */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-vantra-midnight/90 border-r border-b border-vantra-gold/30 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Decoración de Fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-vantra-gold/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}