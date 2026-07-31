import type { Metadata, Viewport } from 'next';
import RootHtml from '@/components/RootHtml';

export const metadata: Metadata = {
  metadataBase: new URL('https://travelskills.io'),
  icons: {
    // Lead with a raster (Google Search uses this and skips SVG in SERPs),
    // then a >=48px PNG (192, a multiple of 48, ideal for Google), then the
    // SVG which modern browsers prefer regardless of order.
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0a0a0e',
  colorScheme: 'dark',
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
