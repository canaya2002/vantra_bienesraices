'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { PropertyImage } from '@/types';

interface PropertyGalleryProps {
  images: PropertyImage[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          <div
            className="lg:col-span-3 relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={images[currentIndex]?.url || '/images/placeholder.jpg'}
              alt={images[currentIndex]?.alt || title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Expandir imagen"
            >
              <Maximize2 className="w-5 h-5 text-vantra-midnight" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-3">
            {images.slice(0, 4).map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-2 ring-vantra-gold ring-offset-2' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={image.url} alt={image.alt} fill className="object-cover" sizes="25vw" />
                {index === 3 && images.length > 4 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">+{images.length - 4}</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center z-10"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div
              className="relative w-full h-full max-w-6xl max-h-[90vh] m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]?.url || '/images/placeholder.jpg'}
                alt={images[currentIndex]?.alt || title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 text-white rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
