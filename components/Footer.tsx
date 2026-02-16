'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const footerLinks = {
  propiedades: [
    { label: 'Venta', href: '/venta' },
    { label: 'Renta', href: '/renta' },
    { label: 'Todas las Propiedades', href: '/propiedades' },
  ],
  ciudades: [
    { label: 'Ciudad de México', href: '/ciudades/ciudad-de-mexico' },
    { label: 'Monterrey', href: '/ciudades/monterrey' },
    { label: 'Guadalajara', href: '/ciudades/guadalajara' },
  ],
  empresa: [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Cotizar', href: '/cotizar' },
  ],
  legal: [
    { label: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Aviso Legal', href: '/aviso-legal' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-vantra-midnight text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/vantralogo.png"
                alt="Vantra Bienes Raíces"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-vantra-gray-400 text-sm leading-relaxed mb-4">
              Asesoría inmobiliaria personalizada en las zonas más exclusivas de México.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://instagram.com/vantra.mx', label: 'Instagram' },
                { Icon: Facebook, href: 'https://facebook.com/VantraInmobiliaria', label: 'Facebook' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/vantra', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-vantra-gray-700 rounded-full flex items-center justify-center text-vantra-gray-400 hover:bg-vantra-gold hover:border-vantra-gold hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-vantra-gold mb-4">
                {key === 'propiedades' ? 'Propiedades' : key === 'ciudades' ? 'Ciudades' : key === 'empresa' ? 'Empresa' : 'Legal'}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-vantra-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-6 text-sm text-vantra-gray-400 mb-8 pt-8 border-t border-vantra-gray-800">
          <a href="tel:+525555555555" className="flex items-center gap-2 hover:text-vantra-gold transition-colors">
            <Phone className="w-4 h-4" /> +52 55 5555 5555
          </a>
          <a href="mailto:contacto@vantra.mx" className="flex items-center gap-2 hover:text-vantra-gold transition-colors">
            <Mail className="w-4 h-4" /> contacto@vantra.mx
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> CDMX · Monterrey · Guadalajara
          </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-vantra-gray-500">
          <div>
            <p>© {currentYear} Vantra Bienes Raíces. Todos los derechos reservados.</p>
            <p className="mt-1">Operamos conforme a la legislación aplicable en México.</p>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-vantra-gold transition-colors"
          >
            Volver arriba
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
