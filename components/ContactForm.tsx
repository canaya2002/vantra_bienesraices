'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Loader2, User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

export default function ContactForm({ propertyId, propertyTitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle ? `Hola, me interesa la propiedad "${propertyTitle}".` : '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setStatus('loading');
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, propertyId, propertyTitle }),
      });
    } catch {
      // Demo: silently handle
    }
    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      setStatus('idle');
    }, 4000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-10"
      >
        <div className="w-20 h-20 bg-vantra-gold/10 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-vantra-gold" />
        </div>
        <h4 className="text-2xl font-display font-bold text-vantra-midnight mb-2">¡Mensaje enviado!</h4>
        <p className="text-vantra-gray-500">Un asesor te contactará pronto.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-vantra-gray-400" />
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full pl-12 pr-4 h-14 bg-vantra-gray-50 border border-vantra-gray-200 rounded-xl text-vantra-gray-800 placeholder-vantra-gray-400 focus:outline-none focus:ring-2 focus:ring-vantra-gold/50 focus:border-vantra-gold transition-all"
          placeholder="Nombre completo"
        />
      </div>
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-vantra-gray-400" />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full pl-12 pr-4 h-14 bg-vantra-gray-50 border border-vantra-gray-200 rounded-xl text-vantra-gray-800 placeholder-vantra-gray-400 focus:outline-none focus:ring-2 focus:ring-vantra-gold/50 focus:border-vantra-gold transition-all"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-vantra-gray-400" />
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full pl-12 pr-4 h-14 bg-vantra-gray-50 border border-vantra-gray-200 rounded-xl text-vantra-gray-800 placeholder-vantra-gray-400 focus:outline-none focus:ring-2 focus:ring-vantra-gold/50 focus:border-vantra-gold transition-all"
          placeholder="Teléfono"
        />
      </div>
      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-vantra-gray-400" />
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-4 bg-vantra-gray-50 border border-vantra-gray-200 rounded-xl text-vantra-gray-800 placeholder-vantra-gray-400 focus:outline-none focus:ring-2 focus:ring-vantra-gold/50 focus:border-vantra-gold transition-all resize-none"
          placeholder="Mensaje (opcional)"
        />
      </div>

      {/* Consent checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 w-4 h-4 rounded border-vantra-gray-300 text-vantra-gold focus:ring-vantra-gold/50"
        />
        <span className="text-xs text-vantra-gray-500 leading-relaxed">
          Acepto el{' '}
          <Link href="/aviso-de-privacidad" className="text-vantra-gold hover:underline" target="_blank">
            Aviso de Privacidad
          </Link>{' '}
          y autorizo el tratamiento de mis datos personales para ser contactado por un asesor.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'loading' || !formData.consent}
        className="w-full h-14 rounded-xl bg-gradient-to-r from-vantra-gold to-vantra-gold-dark text-white font-bold tracking-wide shadow-gold hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            Enviar
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
