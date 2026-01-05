'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Award, Users, Building, Heart, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

// --- CONFIGURACIÓN DE ANIMACIONES ---
const ANIMATION_CONFIG = {
  stiffness: 100,
  damping: 30,
  mass: 0.5
};

// --- COMPONENTE: FONDO DE CONSTELACIÓN (LIMPIO Y DIFUMINADO) ---
const ConstellationBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
      {/* Luz ambiental central difusa */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-400/10 rounded-full blur-[120px]"
      />
      
      {/* Aro de luz suave en movimiento rotativo */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] opacity-20 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.2)_180deg,transparent_360deg)] blur-3xl"
      />
    </div>
  );
};

// --- COMPONENTE: TEXTO FLIP VERTICAL ---
const FlipWords = () => {
  const words = ["del lujo", "de la excelencia", "del prestigio", "del futuro"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Cambia cada 2.5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-grid h-[1.1em] overflow-hidden align-bottom mx-2">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800 font-bold italic"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// --- COMPONENTE: TARJETA CON BORDE NEÓN EN MOVIMIENTO ---
const NeonStatCard = ({ icon: Icon, value, label, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative group h-48 w-full rounded-2xl bg-white cursor-default overflow-hidden"
    >
      {/* --- EFECTO BORDE NEÓN --- */}
      {/* Capa de gradiente giratorio detrás del contenido para simular el borde neón */}
      <div className="absolute inset-[-2px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500 blur-sm" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-[1px] bg-white rounded-2xl z-0" /> {/* Máscara blanca para dejar solo el borde */}

      {/* Contenido de la Tarjeta */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
        {/* Fondo sutil al hover */}
        <div className="absolute inset-0 bg-yellow-50/0 group-hover:bg-yellow-50/30 transition-colors duration-500 rounded-2xl" />
        
        <div className="mb-3 p-4 rounded-full bg-slate-50 text-yellow-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="text-4xl font-serif font-bold text-slate-900 mb-1 tracking-tight group-hover:text-yellow-700 transition-colors">
          {value}
        </h3>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-yellow-600 transition-colors">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yValues = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const stats = [
    { icon: Building, value: '150+', label: 'Propiedades Vendidas' },
    { icon: Users, value: '200+', label: 'Clientes Satisfechos' },
    { icon: Award, value: '10+', label: 'Años de Experiencia' },
    { icon: Heart, value: '100%', label: 'Compromiso Total' },
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 lg:py-40 overflow-hidden bg-slate-50">
      <ConstellationBackground />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          
          {/* --- LADO IZQUIERDO: IMAGEN --- */}
          <div className="relative group">
             {/* Elemento Decorativo Flotante Detrás */}
             <motion.div 
               style={{ y: yValues }}
               className="absolute -top-12 -left-12 w-full h-full border border-yellow-500/20 rounded-3xl z-0"
             />

             {/* Contenedor Imagen */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10"
             >
                <img
                  src="/images/carlos-anaya.jpg" 
                  alt="Carlos Anaya" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                
                {/* Badge Flotante */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500 rounded-full p-1.5 animate-pulse">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Top Producer</p>
                      <p className="text-slate-900 font-serif font-bold">2024 - 2025</p>
                    </div>
                  </div>
                </motion.div>
             </motion.div>
          </div>

          {/* --- LADO DERECHO: CONTENIDO --- */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-yellow-600" />
              <span className="text-yellow-600 font-bold tracking-[0.25em] text-sm uppercase">Carlos Anaya Ruiz</span>
            </motion.div>

            {/* Título con FLIP TEXT ANIMATION */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
                Redefiniendo el estándar <br className="hidden lg:block" />
                <FlipWords /> 
                <br className="hidden lg:block" />
                inmobiliario.
              </h2>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              La excelencia no es un acto, es un hábito. En <span className="text-slate-900 font-bold border-b-2 border-yellow-400">Vantra</span>, transformamos la búsqueda de propiedades en una experiencia de curaduría artística. Mi enfoque combina la precisión de datos de mercado con la calidez de un trato profundamente personal.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {['Visión Estratégica', 'Networking Global', 'Marketing de Elite', 'Resultados Probados'].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (idx * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-yellow-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* BOTÓN GLASS 3D (Sin azul, efecto difuminado) */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 rounded-full overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-white/50 bg-white/20 backdrop-blur-md"
            >
              {/* Brillo de fondo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-slate-200/20 opacity-50" />
              
              <div className="relative z-10 flex items-center gap-3 text-slate-900 font-bold tracking-wide">
                <span>Iniciar Conversación</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
              
              {/* Brillo 3D en borde */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/80 pointer-events-none" />
              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.5)] pointer-events-none" />
            </motion.button>
          </div>
        </div>

        {/* --- GRID DE ESTADÍSTICAS NEÓN --- */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <NeonStatCard 
                key={i} 
                icon={stat.icon} 
                value={stat.value} 
                label={stat.label} 
                delay={0.2 + (i * 0.1)} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}