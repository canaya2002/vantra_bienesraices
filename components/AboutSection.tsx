'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Award, Users, Building, Heart } from 'lucide-react';

const stats = [
  { icon: Building, value: '150+', label: 'Propiedades vendidas' },
  { icon: Users, value: '200+', label: 'Clientes satisfechos' },
  { icon: Award, value: '10+', label: 'Años de experiencia' },
  { icon: Heart, value: '100%', label: 'Compromiso' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre-mi" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/carlos-anaya.jpg"
                alt="Carlos Anaya Ruiz - Fundador de Vantra"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border-2 border-vantra-gold/30 rounded-xl pointer-events-none" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft-lg p-6 max-w-[280px]"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-vantra-gold/10 rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-vantra-gold" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-vantra-midnight">10+</p>
                  <p className="text-sm text-vantra-gray-500">Años de Experiencia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <span className="text-vantra-gold font-medium tracking-wider uppercase text-sm">
              Sobre Mí
            </span>
            
            <h2 className="heading-2 text-vantra-midnight mt-4 mb-6">
              Carlos Anaya Ruiz
            </h2>
            
            <p className="paragraph mb-6">
              Con más de una década dedicado al sector inmobiliario de lujo, he tenido 
              el privilegio de ayudar a cientos de familias a encontrar no solo una 
              propiedad, sino un hogar que refleje su estilo de vida y aspiraciones.
            </p>
            
            <p className="paragraph mb-6">
              En <span className="text-vantra-gold font-semibold">Vantra</span>, creemos 
              que cada cliente merece una experiencia personalizada. No vendemos casas, 
              curamos espacios donde se construyen memorias. Mi compromiso es entender 
              tus necesidades únicas y presentarte opciones que superen tus expectativas.
            </p>
            
            <p className="paragraph mb-8">
              La confianza de mis clientes es mi mayor activo. Por eso, cada transacción 
              se realiza con total transparencia, profesionalismo y un genuino interés 
              por tu bienestar y el de tu familia.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Transparencia', 'Profesionalismo', 'Confianza', 'Dedicación'].map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-vantra-gold" />
                  <span className="text-vantra-gray-700 font-medium">{value}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contacto" className="btn-primary">
              Agenda una consulta
            </a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-12 border-t border-vantra-gray-100"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 bg-vantra-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-vantra-gold" />
              </div>
              <p className="text-3xl font-display font-bold text-vantra-midnight mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-vantra-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
