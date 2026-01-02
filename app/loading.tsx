import React from 'react';

export default function Loading() {
  // Generamos un array de 62 elementos para las partículas
  const particles = Array.from({ length: 62 });
  const lapDuration = 3; // Segundos

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-vantra-midnight overflow-hidden">
      {/* Definimos los estilos de la animación localmente para encapsular la lógica compleja */}
      <style>{`
        .vantra-loader-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 2;
          perspective: 500px;
        }

        .vantra-particle {
          display: block;
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0;
          background: rgba(201, 169, 97, 0.5); /* Vantra Gold con opacidad */
          box-shadow: 0px 0px 10px rgba(201, 169, 97, 1); /* Brillo Dorado */
          
          animation-name: spin;
          animation-duration: ${lapDuration}s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes spin {
          from {
            opacity: 0.0;
            /* El estado inicial se toma del estilo inline del elemento (el anillo) */
          }
          to {
            opacity: 0.6;
            transform: translate3d(-4px, -4px, 570px);
          }
        }
      `}</style>

      <div className="vantra-loader-wrapper">
        {particles.map((_, i) => {
          const index = i + 1; // 1-based index
          const particlesCount = 62;
          const radius = 80;
          
          // Calculamos el ángulo y el delay matemáticamente como en el SCSS original
          const angle = (index / particlesCount) * 720;
          const delay = index * (lapDuration / particlesCount);

          return (
            <i
              key={i}
              className="vantra-particle"
              style={{
                // Transformación inicial (forma el anillo)
                transform: `rotate(${angle}deg) translate3d(${radius}px, 0, 0)`,
                // Delay escalonado para crear el efecto de espiral
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      {/* Texto de carga opcional pero elegante */}
      <div className="absolute bottom-12 text-vantra-gold font-display tracking-[0.2em] text-sm animate-pulse opacity-80">
        VANTRA
      </div>
    </div>
  );
}