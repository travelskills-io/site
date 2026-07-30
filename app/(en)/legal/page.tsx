import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Legal notice · TravelSkills.io',
  description: 'Legal notice for TravelSkills.io: publisher, hosting, and attributions.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://travelskills.io/legal/',
    languages: {
      en: 'https://travelskills.io/legal/',
      fr: 'https://travelskills.io/fr/mentions-legales/',
    },
  },
};

export default function Page() {
  return (
    <LegalLayout eyebrow="Legal" title="Legal notice" homeHref="/" backLabel="← Back">
      <h2>Publisher</h2>
      <p>
        <strong>Nicolas François</strong>
        <br />
        Individual Entrepreneur (France)
        <br />
        SIRET: 92832116500013
        <br />
        Email: <a href="mailto:hello@travelskills.io">hello@travelskills.io</a>
      </p>
      <p>Publication director: Nicolas François.</p>

      <h2>Hosting</h2>
      <p>
        This site is hosted by <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789,
        USA (
        <a href="https://vercel.com" target="_blank" rel="noopener">
          vercel.com
        </a>
        ).
      </p>

      <h2>License</h2>
      <p>
        TravelSkills is an open-source project. The library and this site&rsquo;s source are released
        under the <strong>MIT license</strong>.
      </p>

      <h2>Attributions</h2>
      <ul>
        <li>Typefaces: Geist and Geist Mono by Vercel, under the SIL Open Font License 1.1.</li>
        <li>Icons: Heroicons by Tailwind Labs, under the MIT license.</li>
      </ul>
    </LegalLayout>
  );
}
