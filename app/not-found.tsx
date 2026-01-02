import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-vantra-gray-50">
      <h1 className="font-display text-9xl font-bold text-vantra-gold/20 select-none">404</h1>
      
      <div className="relative -mt-12 z-10">
        <h2 className="heading-2 text-vantra-midnight mb-4">
          Página no encontrada
        </h2>
        <p className="paragraph max-w-md mx-auto mb-8">
          Lo sentimos, la propiedad o página que estás buscando no existe o ha sido movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="btn-primary"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir al Inicio
          </Link>
          <Link 
            href="/#propiedades" 
            className="btn-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Ver Propiedades
          </Link>
        </div>
      </div>
    </div>
  );
}