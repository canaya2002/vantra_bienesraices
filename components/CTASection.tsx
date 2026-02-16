'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+52 55 5555 5555', href: 'tel:+525555555555' },
  { icon: Mail, label: 'Email', value: 'contacto@vantra.mx', href: 'mailto:contacto@vantra.mx' },
  { icon: MapPin, label: 'Ubicación', value: 'CDMX · Monterrey · Guadalajara', href: '#' },
];

export default function CTASection() {
  const whatsappUrl = `https://wa.me/525555555555?text=${encodeURIComponent('Hola, me interesa una propiedad de Vantra.')}`;

  return (
    <section id="contacto" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-vantra-gold font-medium tracking-wider uppercase text-sm">Contacto</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-vantra-midnight mt-4 mb-6">
              ¿Buscas tu próxima propiedad?
            </h2>
            <p className="text-vantra-gray-600 text-lg mb-8 leading-relaxed">
              Cuéntanos sobre tu proyecto inmobiliario. Un asesor te orienta sin compromiso para encontrar la opción que se ajuste a tus necesidades.
            </p>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 bg-vantra-gray-50 rounded-xl hover:bg-vantra-gold/5 transition-colors group"
                >
                  <div className="w-10 h-10 bg-vantra-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-vantra-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-vantra-gray-500">{item.label}</p>
                    <p className="text-vantra-midnight font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1EB954] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
