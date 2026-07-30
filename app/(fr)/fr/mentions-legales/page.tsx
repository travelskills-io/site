import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Mentions légales · TravelSkills.io',
  description: 'Mentions légales de TravelSkills.io : éditeur, hébergement et attributions.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://travelskills.io/fr/mentions-legales/',
    languages: {
      en: 'https://travelskills.io/legal/',
      fr: 'https://travelskills.io/fr/mentions-legales/',
    },
  },
};

export default function Page() {
  return (
    <LegalLayout eyebrow="Mentions légales" title="Mentions légales" homeHref="/fr/" backLabel="← Retour">
      <h2>Éditeur</h2>
      <p>
        <strong>Nicolas François</strong>
        <br />
        Entrepreneur Individuel
        <br />
        SIRET : 92832116500013
        <br />
        Email : <a href="mailto:hello@travelskills.io">hello@travelskills.io</a>
      </p>
      <p>Directeur de la publication : Nicolas François.</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789,
        États-Unis (
        <a href="https://vercel.com" target="_blank" rel="noopener">
          vercel.com
        </a>
        ).
      </p>

      <h2>Licence</h2>
      <p>
        TravelSkills est un projet open source. La bibliothèque et le code de ce site sont publiés
        sous <strong>licence MIT</strong>.
      </p>

      <h2>Attributions</h2>
      <ul>
        <li>Polices : Geist et Geist Mono par Vercel, sous licence SIL Open Font License 1.1.</li>
        <li>Icônes : Heroicons par Tailwind Labs, sous licence MIT.</li>
      </ul>
    </LegalLayout>
  );
}
