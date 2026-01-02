'use client';

import { MapPin, ExternalLink } from 'lucide-react';

interface PropertyMapProps {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export default function PropertyMap({ address, coordinates }: PropertyMapProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=15&size=800x400&maptype=roadmap&markers=color:gold%7C${coordinates.lat},${coordinates.lng}&key=YOUR_API_KEY`;

  return (
    <div className="space-y-4">
      {/* Map Container */}
      <div className="relative aspect-[2/1] bg-vantra-gray-100 rounded-2xl overflow-hidden">
        {/* Placeholder Map Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-vantra-gray-100 to-vantra-gray-200">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9CA3AF" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Center Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-12 h-12 bg-vantra-gold rounded-full flex items-center justify-center shadow-gold animate-pulse">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-vantra-gold transform rotate-45"></div>
            </div>
          </div>
          
          {/* Decorative Roads */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-vantra-gray-300/50"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-vantra-gray-300/50"></div>
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-vantra-gray-300/30"></div>
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-vantra-gray-300/30"></div>
          </div>
        </div>

        {/* Open in Maps Button */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-soft text-vantra-midnight font-medium hover:shadow-soft-lg transition-shadow"
        >
          <span>Ver en Google Maps</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3 text-vantra-gray-600">
        <MapPin className="w-5 h-5 text-vantra-gold flex-shrink-0 mt-0.5" />
        <p>{address}</p>
      </div>

      {/* Note */}
      <p className="text-sm text-vantra-gray-400 italic">
        * La ubicación mostrada es aproximada para proteger la privacidad del propietario. 
        Se proporcionará la dirección exacta al agendar una visita.
      </p>
    </div>
  );
}
