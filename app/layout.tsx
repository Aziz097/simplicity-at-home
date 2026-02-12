import type { Metadata, Viewport } from "next";
import { Shippori_Mincho, Inter } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { JsonLd } from '@/components/seo/JsonLd';
import { QuickCheckoutToast } from '@/components/ui/QuickCheckoutToast';
import { SITE_CONFIG } from '@/constants';

const zenFont = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-zen",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['serif'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['sans-serif'],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const viewport: Viewport = {
  themeColor: '#1B263B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'Japanese lifestyle',
    'minimalism',
    'Yumiko Sekine',
    'ebook',
    'home decor',
    'Japanese rituals',
    'recipes',
    'four seasons framework',
    'Fog Linen Work',
    'mindful living',
    'home organization',
  ],
  authors: [{ name: 'Yumiko Sekine', url: SITE_CONFIG.url }],
  creator: 'Yumiko Sekine',
  publisher: 'Simplicity at Home',
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.shortName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.shortName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${zenFont.variable} ${inter.variable}`}>
      <body
        className="antialiased font-[var(--font-inter)] bg-[var(--color-cream-silk)] text-[var(--color-text-dark)]"
        suppressHydrationWarning
      >
        <SkipLink />
        <JsonLd />
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        {children}
        <QuickCheckoutToast />
      </body>
    </html>
  );
}
