import { MapPin, ExternalLink } from 'lucide-react';

interface PropertyMapProps {
  address: string;
  coordinates: { lat: number; lng: number };
}

export default function PropertyMap({ address, coordinates }: PropertyMapProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;

  return (
    <div className="space-y-4">
      <div className="relative aspect-[2/1] bg-vantra-gray-100 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vantra-gray-100 to-vantra-gray-200">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-vantra-gold rounded-full flex items-center justify-center shadow-gold animate-pulse">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-vantra-gray-300/30" />
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-vantra-gray-300/30" />
        </div>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-soft text-vantra-midnight font-medium hover:shadow-soft-lg transition-shadow text-sm"
        >
          Ver en Google Maps <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <div className="flex items-start gap-3 text-vantra-gray-600">
        <MapPin className="w-5 h-5 text-vantra-gold flex-shrink-0 mt-0.5" />
        <p className="text-sm">{address}</p>
      </div>
      <p className="text-xs text-vantra-gray-400 italic">
        * La ubicación es aproximada. La dirección exacta se proporciona al agendar una visita con un asesor.
      </p>
    </div>
  );
}
