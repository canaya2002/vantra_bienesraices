import Link from 'next/link';
import { Metadata } from 'next';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-vantra-gray-50 pt-24">
      <h1 className="font-display text-9xl font-bold text-vantra-gold/20 select-none">404</h1>
      <div className="relative -mt-12 z-10">
        <h2 className="font-display text-3xl font-semibold text-vantra-midnight mb-4">Página no encontrada</h2>
        <p className="text-vantra-gray-600 max-w-md mx-auto mb-8">
          La propiedad o página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-vantra-gold to-vantra-gold-dark text-white font-semibold rounded-full shadow-gold"
        >
          <Home className="w-5 h-5" /> Ir al Inicio
        </Link>
      </div>
    </div>
  );
}
