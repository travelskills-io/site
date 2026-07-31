import type { Metadata } from 'next';
import Landing from '@/components/Landing';
import { content } from '@/lib/content';

const c = content.en;

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: {
    canonical: 'https://travelskills.io/',
    languages: {
      en: 'https://travelskills.io/',
      fr: 'https://travelskills.io/fr/',
      'x-default': 'https://travelskills.io/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://travelskills.io/',
    siteName: 'TravelSkills',
    title: c.meta.title,
    description: c.meta.description,
    locale: c.meta.ogLocale,
    alternateLocale: c.meta.ogLocaleAlternate,
    images: [{ url: '/og/', width: 1200, height: 630, alt: c.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: c.meta.title,
    description: c.meta.description,
    images: ['/og/'],
  },
};

export default function Page() {
  return <Landing locale="en" />;
}
