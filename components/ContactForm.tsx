'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Loader2, User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
// Usamos <a> estándar para evitar dependencias externas en este entorno, 
// en tu proyecto real puedes usar Link de next/link si prefieres.

export default function ContactForm({ propertyId, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: propertyTitle 
      ? `Hola, estoy interesado en la propiedad "${propertyTitle}".`
      : '',
    propertyId,
    propertyTitle,
  });
  
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setStatus('success');
    
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '', propertyId, propertyTitle });
      setStatus('idle');
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center py-10"
      >
        <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-[#B8860B]" />
        </div>
        <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2">¡Enviado!</h4>
        <p className="text-slate-500 text-lg">
          Pronto nos pondremos en contacto.
        </p>
      </motion.div>
    );
  }

  return (
    // Eliminado el contenedor bg-white, shadow, border. Ahora es transparente y fluido.
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full space-y-5"
    >
      {/* --- CAMPO NOMBRE --- */}
      <div className="relative group">
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-l-xl transition-all duration-300 ${focusedField === 'name' ? 'opacity-100' : 'opacity-0'}`} />
        <div className="relative flex items-center">
          <User className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="w-full pl-12 pr-4 h-14 bg-white border border-slate-200 rounded-xl outline-none text-slate-700 font-medium transition-all duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 placeholder:text-slate-400"
            placeholder="Nombre Completo"
          />
        </div>
      </div>

      {/* --- CAMPO EMAIL --- */}
      <div className="relative group">
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-l-xl transition-all duration-300 ${focusedField === 'email' ? 'opacity-100' : 'opacity-0'}`} />
        <div className="relative flex items-center">
          <Mail className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="w-full pl-12 pr-4 h-14 bg-white border border-slate-200 rounded-xl outline-none text-slate-700 font-medium transition-all duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 placeholder:text-slate-400"
            placeholder="Correo Electrónico"
          />
        </div>
      </div>

      {/* --- CAMPO TELÉFONO --- */}
      <div className="relative group">
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-l-xl transition-all duration-300 ${focusedField === 'phone' ? 'opacity-100' : 'opacity-0'}`} />
        <div className="relative flex items-center">
          <Phone className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'phone' ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField(null)}
            className="w-full pl-12 pr-4 h-14 bg-white border border-slate-200 rounded-xl outline-none text-slate-700 font-medium transition-all duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 placeholder:text-slate-400"
            placeholder="Teléfono"
          />
        </div>
      </div>

      {/* --- CAMPO MENSAJE --- */}
      <div className="relative group">
         <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] rounded-l-xl transition-all duration-300 ${focusedField === 'message' ? 'opacity-100' : 'opacity-0'}`} />
        <div className="relative">
          <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${focusedField === 'message' ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl outline-none text-slate-700 font-medium transition-all duration-300 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 placeholder:text-slate-400 resize-none"
            placeholder="Mensaje..."
          />
        </div>
      </div>

      {/* --- BOTÓN --- */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full h-14 rounded-xl overflow-hidden group shadow-lg shadow-[#D4AF37]/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F2D06B] transition-all duration-500" />
        <div className="relative z-10 flex items-center justify-center gap-2 text-white font-bold tracking-wide h-full">
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </div>
      </motion.button>

      {/* --- DISCLAIMER --- */}
      <div className="text-center pt-1">
        <p className="text-[11px] text-slate-400">
          Aceptas nuestra{' '}
          <a href="/privacidad" className="text-[#B8860B] hover:text-[#D4AF37] underline transition-colors">
            Política de Privacidad
          </a>.
        </p>
      </div>
    </motion.form>
  );
}