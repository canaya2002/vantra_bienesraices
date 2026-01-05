'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Eye, UserCheck, Scale, Mail } from 'lucide-react';

export default function PrivacyPage() {
  // Animación de entrada escalonada
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 lg:py-32 bg-neutral-50 overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-200/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-white border border-neutral-200 rounded-full text-xs font-bold uppercase tracking-widest text-yellow-600 mb-6 shadow-sm">
              Legal & Transparencia
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6">
              Aviso de Privacidad
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              En <span className="font-bold text-neutral-800">Vantra Bienes Raíces</span>, la confianza es nuestro activo más valioso. Nos comprometemos a proteger tu información personal con los más altos estándares de seguridad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-12"
          >
            
            {/* 1. Responsable */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-yellow-600">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">1. Identidad del Responsable</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Vantra Bienes Raíces (en adelante "Vantra"), con domicilio en Ciudad de México, México, es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente. Este Aviso de Privacidad cumple con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                </p>
              </div>
            </motion.div>

            <div className="h-px bg-neutral-100 w-full" />

            {/* 2. Datos Recabados */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-yellow-600">
                  <FileText className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">2. Datos Personales Recabados</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Nombre completo', 'Teléfono fijo y/o celular', 'Correo electrónico', 'Firma autógrafa', 'Dirección de domicilio', 'RFC y/o CURP (en caso de facturación)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-neutral-600 text-sm bg-neutral-50 px-4 py-2 rounded-lg">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="h-px bg-neutral-100 w-full" />

            {/* 3. Finalidades */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-yellow-600">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">3. Finalidades del Tratamiento</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
                </p>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">A.</span>
                    Intermediación comercial inmobiliaria para la venta, compra o arrendamiento de inmuebles.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">B.</span>
                    Elaboración de contratos de compraventa, arrendamiento o exclusiva.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">C.</span>
                    Facturación y cobro de servicios.
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-yellow-600">D.</span>
                    Investigación y/o estudio socioeconómico (en caso de arrendamiento).
                  </li>
                </ul>
              </div>
            </motion.div>

            <div className="h-px bg-neutral-100 w-full" />

            {/* 4. Derechos ARCO */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-yellow-600">
                  <UserCheck className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">4. Derechos ARCO</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
                </p>
                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Mail className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-yellow-800 font-medium mb-1">Para ejercer sus derechos ARCO:</p>
                    <p className="text-neutral-600 text-sm">
                      Envíe una solicitud por escrito a nuestro Departamento de Privacidad al correo: <a href="mailto:privacidad@vantra.mx" className="text-yellow-600 font-bold hover:underline">privacidad@vantra.mx</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="h-px bg-neutral-100 w-full" />

            {/* 5. Seguridad y Cambios */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-yellow-600">
                  <Lock className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">5. Seguridad y Actualizaciones</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
                </p>
                <p className="text-sm text-neutral-400 mt-6 italic">
                  Última actualización: Enero 2025
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="bg-neutral-900 py-16 text-center px-6">
        <div className="container mx-auto">
          <Scale className="w-10 h-10 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            ¿Tienes dudas sobre el manejo de tus datos?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Nuestro equipo legal está disponible para resolver cualquier inquietud que tengas sobre nuestra política de privacidad.
          </p>
          <a 
            href="mailto:privacidad@vantra.mx"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 font-bold rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
          >
            Contactar al Oficial de Privacidad
          </a>
        </div>
      </section>
    </main>
  );
}