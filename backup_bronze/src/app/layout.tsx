import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartWidget from '../components/CartWidget';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PrimeSteelKSA | Saudi Arabia\'s Premium Industrial Steel Supplier',
  description: 'Supplier of JIS, ASTM, and SASO certified structural steel beams, reinforcing construction rebar, walkway mesh, galvanized pipe tubes, and sheet plates across KSA.',
  keywords: 'Steel supplier Saudi Arabia, JIS H-bridges, SASO reinforcing rebar, galvanized steel sheets, industrial metal mesh, Riyadh steel catalog, Dammam piping tubes',
  metadataBase: new URL('https://primesteelksa.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/?lang=en',
      'ar-SA': '/?lang=ar',
    },
  },
  openGraph: {
    title: 'PrimeSteelKSA | Certified Steel Products & Building Solutions',
    description: 'Leading bilingual catalog directory for premium industrial steel sheets, columns, heavy beams, and mesh nets. Prompt WhatsApp pricing quotes.',
    url: 'https://primesteelksa.com',
    siteName: 'PrimeSteelKSA',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PrimeSteelKSA Premium Industrial Steel Inventory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeSteelKSA | Saudi Arabia\'s Trusted Steel Supplier',
    description: 'Bilingual steel catalog directory offering heavy industrial UPN channels, HEB H-beams, plain aluminum sheets, and epoxy rebars.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body className="bg-brand-surface text-slate-100 flex flex-col min-h-screen">
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow pt-24">
              {children}
            </main>
            <Footer />
            <CartWidget />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
