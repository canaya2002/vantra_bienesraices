'use client';

// Usamos etiquetas estándar <a> e <img> para compatibilidad en este entorno
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
    <footer className="bg-white text-slate-600 relative overflow-hidden border-t border-slate-100">
      {/* Elemento decorativo de fondo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <a href="/" className="inline-block">
              <div className="relative w-40 h-14">
                <img
                  src="/images/vantralogo.png"
                  alt="Vantra Real Estate"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Redefiniendo la experiencia inmobiliaria de lujo en México. Curaduría exclusiva y asesoría integral por Carlos Anaya Ruiz.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/vantra.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/VantraInmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/vantra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links: Propiedades */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-slate-900">Propiedades</h4>
            <ul className="space-y-4">
              {footerLinks.propiedades.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-yellow-600 transition-colors text-sm flex items-center gap-2 group font-medium"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Empresa */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-slate-900">Vantra</h4>
            <ul className="space-y-4">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-yellow-600 transition-colors text-sm flex items-center gap-2 group font-medium"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-slate-900">Contacto</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+525555555555"
                  className="flex items-start gap-4 text-slate-500 hover:text-yellow-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-yellow-50 transition-colors shrink-0">
                    <Phone className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Llámanos</p>
                    <p className="font-bold text-slate-700 group-hover:text-yellow-700 transition-colors">+52 55 5555 5555</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@vantra.mx"
                  className="flex items-start gap-4 text-slate-500 hover:text-yellow-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-yellow-50 transition-colors shrink-0">
                    <Mail className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Escríbenos</p>
                    <p className="font-bold text-slate-700 group-hover:text-yellow-700 transition-colors">contacto@vantra.mx</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4 text-slate-500">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-400 text-[10px] uppercase tracking-wider mb-1">Ubicación</p>
                  <p className="font-medium text-slate-700">CDMX, Monterrey, Guadalajara</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400 font-medium">
          <p>© {currentYear} Vantra Bienes Raíces. Todos los derechos reservados.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-yellow-600 transition-colors group"
          >
            <span>Volver arriba</span>
            <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-yellow-500 group-hover:bg-yellow-50 transition-all">
              <ArrowUp className="w-3 h-3 group-hover:text-yellow-600" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}