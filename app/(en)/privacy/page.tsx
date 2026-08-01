import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy · TravelSkills.io',
  description: 'Privacy policy for TravelSkills.io: data collection, GDPR compliance, user rights.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://travelskills.io/privacy/',
    languages: {
      en: 'https://travelskills.io/privacy/',
      fr: 'https://travelskills.io/fr/politique-de-confidentialite/',
    },
  },
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Data & privacy"
      title="Privacy policy"
      homeHref="/"
      backLabel="← Back"
      updated="Last updated: August 2026"
    >
      <h2>1. Purpose</h2>
      <p>
        This privacy policy explains how personal data is collected, processed and protected on{' '}
        <strong>travelskills.io</strong>, in accordance with the General Data Protection Regulation
        (GDPR) and French data protection law.
      </p>
      <p>
        This site uses no analytics or advertising cookies, and the emails we send contain no
        tracking pixels.
      </p>

      <h2>2. Data controller</h2>
      <p>
        <strong>Nicolas François</strong>
        <br />
        Status: Sole trader (Entrepreneur Individuel)
        <br />
        SIRET: 92832116500013
        <br />
        Email: <a href="mailto:hello@travelskills.io">hello@travelskills.io</a>
      </p>
      <p>
        For any question about this policy, or to exercise your rights under the GDPR, write to:{' '}
        <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>
      <p>
        You have the right to lodge a complaint with your national data protection authority. In
        France, this is the CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">
          cnil.fr
        </a>
        ).
      </p>

      <h2>3. Data collected</h2>

      <h3>3.1 Data you provide</h3>
      <p>The signup form collects:</p>
      <ul>
        <li>
          <strong>Email address</strong>: collected with your explicit consent, to send you the
          launch notification and occasional updates about TravelSkills
        </li>
        <li>
          <strong>Language preference</strong>: detected from the page used to sign up (FR or EN), so
          that we write to you in your language
        </li>
      </ul>
      <p>Nothing else is asked of you.</p>

      <h3>3.2 Data collected automatically</h3>
      <p>
        Browsing the site generates technical data processed by the services described in section 4:
        aggregated audience measurement, and the hosting provider’s connection logs, which include
        your IP address.
      </p>

      <h2>4. Recipients and processors</h2>

      <h3>Brevo (email delivery)</h3>
      <p>
        Email addresses collected through the form are stored and processed by <strong>Brevo</strong>{' '}
        (formerly Sendinblue), a French company, with data hosted in the European Union.
      </p>
      <ul>
        <li>Purpose: launch notification and occasional updates about TravelSkills</li>
        <li>Legal basis: consent (GDPR article 6.1.a)</li>
        <li>
          <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener">
            Brevo privacy policy
          </a>
        </li>
      </ul>

      <h3>Plausible Analytics (audience measurement)</h3>
      <p>
        Site traffic is measured with <strong>Plausible Analytics</strong>, hosted in the European
        Union.
      </p>
      <ul>
        <li>Purpose: understanding site traffic, in strictly aggregated form</li>
        <li>
          Legal basis: legitimate interest (GDPR article 6.1.f), with audience measurement limited to
          that sole purpose
        </li>
        <li>
          Plausible sets no cookies, keeps no identifier that would recognize you from one visit to
          the next, and does not track your browsing on other sites. No data is shared with third
          parties or used for advertising.
        </li>
        <li>
          <a href="https://plausible.io/privacy" target="_blank" rel="noopener">
            Plausible privacy policy
          </a>
        </li>
      </ul>

      <h3>Vercel (hosting)</h3>
      <p>
        The site is hosted by <strong>Vercel Inc.</strong>, a company based in the United States. As
        such, Vercel processes technical connection logs, which include visitors’ IP addresses.
      </p>
      <ul>
        <li>Purpose: operation, security and availability of the site</li>
        <li>Legal basis: legitimate interest (GDPR article 6.1.f)</li>
        <li>
          This involves a transfer of data outside the European Union, covered by the safeguards set
          out in chapter V of the GDPR.
        </li>
        <li>
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">
            Vercel privacy policy
          </a>
        </li>
      </ul>

      <h2>5. Emails and tracking pixels</h2>
      <p>
        Emails sent from travelskills.io <strong>contain no tracking pixels</strong>. Whether you open
        our messages is not measured.
      </p>
      <p>
        Clicks on links inside those emails are recorded by Brevo, so we know which topics interest
        subscribers. Every message includes an unsubscribe link that takes effect immediately.
      </p>

      <h2>6. Retention periods</h2>
      <ul>
        <li>
          <strong>Email address and language preference</strong>: kept until you unsubscribe or ask
          for deletion
        </li>
        <li>
          <strong>Traffic statistics</strong>: kept in aggregated form, with no data that could
          identify you
        </li>
        <li>
          <strong>Hosting provider logs</strong>: kept for a limited period, according to the
          provider’s practices
        </li>
      </ul>
      <p>
        Your data is used for no purpose other than the ones stated at the time of collection, and is
        never sold, rented or passed on to third parties for commercial purposes.
      </p>

      <h2>7. Your rights</h2>
      <p>Under the GDPR, you have the following rights:</p>
      <ul>
        <li>Right of access to your data</li>
        <li>Right to rectification</li>
        <li>Right to erasure</li>
        <li>Right to restriction of processing</li>
        <li>Right to object</li>
        <li>Right to data portability</li>
        <li>Right to withdraw your consent at any time</li>
      </ul>
      <p>
        To exercise these rights:{' '}
        <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>

      <h2>8. Cookies</h2>
      <p>
        This site sets no analytics, profiling or advertising cookies. Technical cookies strictly
        necessary for the signup form to work may be used by Brevo.
      </p>

      <h2>9. Changes</h2>
      <p>
        This policy may be updated to reflect regulatory or technical changes. The date of the latest
        update is shown below.
      </p>
    </LegalLayout>
  );
}
