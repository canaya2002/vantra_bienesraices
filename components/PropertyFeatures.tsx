'use client';

import { Check } from 'lucide-react';

interface PropertyFeaturesProps {
  features: string[];
}

export default function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-center gap-3 p-3 bg-vantra-gray-50 rounded-xl"
        >
          <div className="w-6 h-6 bg-vantra-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-vantra-gold" />
          </div>
          <span className="text-vantra-gray-700 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
