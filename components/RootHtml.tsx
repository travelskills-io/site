import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import PlausibleTracker from './PlausibleTracker';
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
        {/* Privacy-friendly analytics (no cookies) via the official tracker. */}
        <PlausibleTracker />
      </body>
    </html>
  );
}
