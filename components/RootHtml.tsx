import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import '../app/globals.css';

// Shared <html>/<body> shell. Each locale root layout renders it with its lang
// so the document language is correct for SEO and screen readers.
export default function RootHtml({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        {/* Privacy-friendly analytics (no cookies), carried over from v3. */}
        <Script
          defer
          src="https://plausible.io/js/pa-66_ww6vMzEsKmN5qjc9_E.js"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
