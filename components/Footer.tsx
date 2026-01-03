'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ChevronRight, ArrowUp } from 'lucide-react';

const footerLinks = {
  propiedades: [
    { label: 'Ciudad de México', href: '/?ciudad=Ciudad+de+México#propiedades' },
    { label: 'Monterrey', href: '/?ciudad=Monterrey#propiedades' },
    { label: 'Guadalajara', href: '/?ciudad=Guadalajara#propiedades' },
    { label: 'Ver todo el catálogo', href: '/#propiedades' },
  ],
  empresa: [
    { label: 'Sobre Carlos Anaya', href: '/#sobre-mi' },
    { label: 'Contacto Directo', href: '/#contacto' },
    { label: 'Política de Privacidad', href: '/privacidad' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-vantra-midnight text-white relative overflow-hidden">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vantra-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-14">
                <Image
                  src="/images/vantralogo.png"
                  alt="Vantra Real Estate"
                  fill
                  className="object-contain brightness-0 invert" // Invierte colores para que el logo se vea blanco sobre fondo oscuro
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed font-light">
              Redefiniendo la experiencia inmobiliaria de lujo en México. Curaduría exclusiva y asesoría integral por Carlos Anaya Ruiz.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/vantra.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-vantra-gold hover:border-vantra-gold hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/VantraInmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-vantra-gold hover:border-vantra-gold hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vantra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-vantra-gold hover:border-vantra-gold hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links: Propiedades */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6 text-vantra-gold">Propiedades</h4>
            <ul className="space-y-4">
              {footerLinks.propiedades.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-vantra-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Empresa */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6 text-vantra-gold">Vantra</h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-4 h-4 text-vantra-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6 text-vantra-gold">Contacto</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+525555555555"
                  className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vantra-gold/20 transition-colors">
                    <Phone className="w-4 h-4 text-vantra-gold" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-white/60 text-xs uppercase tracking-wide mb-1">Llámanos</p>
                    <p className="font-medium">+52 55 5555 5555</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@vantra.mx"
                  className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vantra-gold/20 transition-colors">
                    <Mail className="w-4 h-4 text-vantra-gold" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-white/60 text-xs uppercase tracking-wide mb-1">Escríbenos</p>
                    <p className="font-medium">contacto@vantra.mx</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-vantra-gold" />
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white/60 text-xs uppercase tracking-wide mb-1">Ubicación</p>
                  <p>CDMX, Monterrey, Guadalajara</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {currentYear} Vantra Bienes Raíces. Todos los derechos reservados.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-vantra-gold transition-colors"
          >
            <span>Volver arriba</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}