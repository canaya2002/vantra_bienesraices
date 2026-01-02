'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from './ContactForm';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 55 5555 5555',
    href: 'tel:+525555555555',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@vantra.mx',
    href: 'mailto:contacto@vantra.mx',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Ciudad de México, México',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun - Sáb: 9:00 - 19:00',
    href: '#',
  },
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-vantra-gold font-medium tracking-wider uppercase text-sm">
              Contacto
            </span>
            
            <h2 className="heading-2 text-vantra-midnight mt-4 mb-6">
              ¿Listo para encontrar tu hogar ideal?
            </h2>
            
            <p className="paragraph mb-8">
              Cuéntame sobre tu proyecto inmobiliario. Ya sea que busques comprar, vender 
              o invertir en propiedades de lujo, estoy aquí para ayudarte a hacer realidad 
              tus objetivos.
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-vantra-gray-50 rounded-xl hover:bg-vantra-gold/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-vantra-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-vantra-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-vantra-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-vantra-gray-500">{item.label}</p>
                    <p className="text-vantra-midnight font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-vantra-gray-500 mb-3">Síguenos en redes sociales</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/vantra.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-vantra-gray-100 rounded-lg flex items-center justify-center text-vantra-gray-600 hover:bg-vantra-gold hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/VantraInmobiliaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-vantra-gray-100 rounded-lg flex items-center justify-center text-vantra-gray-600 hover:bg-vantra-gold hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-soft-lg p-6 sm:p-8 border border-vantra-gray-100"
          >
            <h3 className="text-xl font-display font-semibold text-vantra-midnight mb-6">
              Envíanos un mensaje
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
