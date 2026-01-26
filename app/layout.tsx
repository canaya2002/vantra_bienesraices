import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Montserrat } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'; // Importación nueva
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { generateMetadata as generateBaseMetadata, generateOrganizationSchema } from '@/lib/seo';
import { PropertyProvider } from '@/context/PropertyContext';

// Fuentes optimizadas por Next.js
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });

// Usamos nuestra función super-vitaminada
export const metadata: Metadata = generateBaseMetadata();

export const viewport: Viewport = {
  themeColor: '#C9A961',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateOrganizationSchema();
  // REEMPLAZAR ESTE ID CON EL TUYO REAL DE GOOGLE ANALYTICS
  const GA_ID = 'G-XXXXXXXXXX'; 

  return (
    <html lang="es-MX" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        {/* Schema Global de Organización/Agente */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <PropertyProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </PropertyProvider>
      </body>
      {/* Componente optimizado de Google que no bloquea la carga */}
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}