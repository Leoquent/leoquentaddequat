import type { Metadata } from 'next';
import { Inter, Playfair_Display, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lunda-ki.de';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const ogImage = `${siteUrl}${basePath}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'leoquent & addequat | Die AGENTur für den Mittelstand',
  description:
    'Wir befreien Sie von administrativen Lasten. Mit autonomen KI-Mitarbeitern, die genau so arbeiten, wie Sie denken.',
  applicationName: 'leoquent & addequat',
  alternates: {
    canonical: `${siteUrl}${basePath}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'leoquent & addequat',
    title: 'leoquent & addequat | Die AGENTur für den Mittelstand',
    description:
      'KI-Systeme, die Ihre Arbeit machen. Nicht umgekehrt. Autonome KI-Lösungen für den Mittelstand — DSGVO-konform, gehostet in Deutschland.',
    url: `${siteUrl}${basePath}/`,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'leoquent & addequat — Die AGENTur für den Mittelstand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'leoquent & addequat | Die AGENTur für den Mittelstand',
    description: 'KI-Systeme, die Ihre Arbeit machen. Nicht umgekehrt.',
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${syne.variable} ${playfair.variable} bg-vanta text-bone overflow-x-hidden`}>
      <body suppressHydrationWarning className="antialiased selection:bg-[#CCFF00] selection:text-[#050505]">
        {children}
      </body>
    </html>
  );
}
