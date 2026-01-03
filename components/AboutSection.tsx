'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Award, Users, Building, Heart, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: Building, value: '150+', label: 'Propiedades vendidas' },
  { icon: Users, value: '200+', label: 'Clientes satisfechos' },
  { icon: Award, value: '10+', label: 'Años de experiencia' },
  { icon: Heart, value: '100%', label: 'Compromiso total' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre-mi" className="section-padding bg-gradient-to-b from-white via-vantra-gray-50 to-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Columna de Imagen - Diseño Elevado */}
          <motion.div 
            variants={itemVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white">
              <Image
                src="/images/carlos-anaya.jpg"
                alt="Carlos Anaya Ruiz - Fundador de Vantra"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority // Carga prioritaria para mejorar calidad percivida
              />
              {/* Overlay gradiente sutil para mejorar contraste visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-vantra-midnight/30 to-transparent pointer-events-none" />
            </div>
            
            {/* Elementos Decorativos de Fondo */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-vantra-gold/30 rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-vantra-gold/10 rounded-full blur-3xl -z-10" />
            
            {/* Tarjeta Flotante de Experiencia */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 lg:-right-10 glass-3d-effect bg-white/90 p-6 rounded-xl max-w-[260px] z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-vantra-gold text-white rounded-lg flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-vantra-midnight">10+</p>
                  <p className="text-xs font-bold text-vantra-gold uppercase tracking-wider">Años de Trayectoria</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna de Contenido */}
          <motion.div 
            variants={itemVariants}
            className="lg:pl-8 order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-12 bg-vantra-gold" />
              <span className="text-vantra-gold font-bold tracking-widest uppercase text-sm">
                Fundador & Director
              </span>
            </div>
            
            <h2 className="heading-2 text-vantra-midnight mb-6">
              Carlos Anaya Ruiz
            </h2>
            
            <p className="paragraph mb-6 text-lg">
              Con más de una década redefiniendo el sector inmobiliario de lujo en México, mi misión va más allá de cerrar tratos; se trata de <span className="font-semibold text-vantra-midnight">curar estilos de vida</span>.
            </p>
            
            <p className="paragraph mb-8">
              En <span className="text-vantra-gold font-bold">Vantra</span>, fusionamos la inteligencia de mercado con un servicio hiper-personalizado. Entiendo que una propiedad no es solo una inversión financiera, es el escenario donde transcurrirá tu legado.
            </p>

            {/* Lista de Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Atención Personalizada', 'Cartera Exclusiva', 'Negociación Estratégica', 'Discreción Absoluta'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vantra-gold flex-shrink-0" />
                  <span className="text-vantra-midnight font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#contacto" className="btn-primary gold shadow-xl">
                Agenda una Consulta Privada
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section - Cards con efecto Glass */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-3d-effect bg-white p-6 rounded-2xl text-center group hover:bg-white/80 transition-colors"
            >
              <div className="w-14 h-14 bg-vantra-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vantra-gold/10 transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-vantra-gray-400 group-hover:text-vantra-gold transition-colors duration-300" />
              </div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-vantra-midnight mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-vantra-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}