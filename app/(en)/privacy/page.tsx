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
      title="Privacy Policy"
      homeHref="/"
      backLabel="← Back"
      updated="Last updated: July 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        This privacy policy explains how <strong>travelskills.io</strong> collects, processes, and
        protects your personal data, in compliance with the General Data Protection Regulation
        (GDPR).
      </p>
      <p>This site follows a responsible approach to personal data: no advertising tracking cookies are used.</p>

      <h2>2. Data Controller</h2>
      <p>
        <strong>Nicolas François</strong>
        <br />
        Status: Individual Entrepreneur (France)
        <br />
        SIRET: 92832116500013
        <br />
        Email: <a href="mailto:hello@travelskills.io">hello@travelskills.io</a>
      </p>
      <p>
        For any questions regarding this policy or to exercise your rights under GDPR, please contact
        us at: <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>
      <p>
        You have the right to lodge a complaint with your national data protection authority. For
        France, this is the CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">
          cnil.fr
        </a>
        ).
      </p>

      <h2>3. Data Collected</h2>
      <p>TravelSkills.io collects the following data through the email signup form:</p>
      <ul>
        <li>
          <strong>Email address</strong>: collected with your explicit consent, to send you the
          launch notification and occasional project updates related to TravelSkills.io
        </li>
        <li>
          <strong>Language preference</strong>: detected from the page you signed up on (EN or FR),
          used to send communications in your language
        </li>
      </ul>
      <p>No other personal data is collected directly. Data may be collected indirectly by the following third-party service:</p>

      <h2>Email service (Brevo)</h2>
      <p>
        Email addresses collected through the form are transmitted to <strong>Brevo</strong>
        {' '}(formerly Sendinblue), hosted in Europe.
      </p>
      <ul>
        <li>Purpose: launch notification and occasional project updates related to TravelSkills.io</li>
        <li>Legal basis: consent (GDPR Article 6.1.a)</li>
        <li>
          See{' '}
          <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener">
            Brevo&rsquo;s privacy policy
          </a>
        </li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        Email addresses are retained until you unsubscribe or request deletion. They will not be used
        for any purpose other than those stated at the time of collection.
      </p>

      <h2>5. Your Rights</h2>
      <p>Under the GDPR, you have the following rights:</p>
      <ul>
        <li>Right of access to your data</li>
        <li>Right to rectification</li>
        <li>Right to erasure</li>
        <li>Right to restriction of processing</li>
        <li>Right to object</li>
        <li>Right to data portability</li>
      </ul>
      <p>
        To exercise these rights: <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>

      <h2>6. Cookies</h2>
      <p>
        This site does not use any cookies for analytics or advertising purposes. Technical cookies
        strictly necessary for the form to function may be used by Brevo.
      </p>

      <h2>7. Changes</h2>
      <p>
        This policy may be updated at any time to reflect regulatory or technical changes. The last
        update date is shown below.
      </p>
    </LegalLayout>
  );
}
