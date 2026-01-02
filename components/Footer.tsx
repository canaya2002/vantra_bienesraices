'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ChevronRight } from 'lucide-react';

const footerLinks = {
  propiedades: [
    { label: 'Ciudad de México', href: '/?ciudad=Ciudad+de+México#propiedades' },
    { label: 'Monterrey', href: '/?ciudad=Monterrey#propiedades' },
    { label: 'Guadalajara', href: '/?ciudad=Guadalajara#propiedades' },
    { label: 'Todas las propiedades', href: '/#propiedades' },
  ],
  empresa: [
    { label: 'Sobre nosotros', href: '/#sobre-mi' },
    { label: 'Contacto', href: '/#contacto' },
    { label: 'Política de privacidad', href: '/privacidad' },
    { label: 'Términos y condiciones', href: '/terminos' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vantra-midnight text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vantra-gold rounded-lg flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-white">V</span>
                </div>
                <span className="font-display text-2xl font-semibold">Vantra</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              El arte de encontrar tu hogar. Curaduría inmobiliaria de lujo por Carlos Anaya Ruiz en las mejores zonas de México.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/vantra.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vantra-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/VantraInmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vantra-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vantra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-vantra-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Propiedades</h4>
            <ul className="space-y-3">
              {footerLinks.propiedades.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-vantra-gold transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-vantra-gold transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+525555555555"
                  className="flex items-start gap-3 text-white/70 hover:text-vantra-gold transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-vantra-gold" />
                  <span>+52 55 5555 5555</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@vantra.mx"
                  className="flex items-start gap-3 text-white/70 hover:text-vantra-gold transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-vantra-gold" />
                  <span>contacto@vantra.mx</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 text-vantra-gold" />
                <span>Ciudad de México, Monterrey, Guadalajara</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {currentYear} Vantra. Todos los derechos reservados.</p>
            <p>
              Diseñado con <span className="text-vantra-gold">♥</span> para Carlos Anaya Ruiz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
