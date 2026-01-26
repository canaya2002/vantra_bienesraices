import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Vantra Bienes Raíces',
  description: 'Conoce cómo Vantra protege tus datos personales. Transparencia y seguridad en cada transacción inmobiliaria.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}