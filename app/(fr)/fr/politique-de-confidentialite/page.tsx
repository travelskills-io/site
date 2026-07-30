import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Politique de confidentialité · TravelSkills.io',
  description:
    'Politique de confidentialité de TravelSkills.io : collecte des données, conformité RGPD, droits des utilisateurs.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://travelskills.io/fr/politique-de-confidentialite/',
    languages: {
      en: 'https://travelskills.io/privacy/',
      fr: 'https://travelskills.io/fr/politique-de-confidentialite/',
    },
  },
};

export default function Page() {
  return (
    <LegalLayout
      eyebrow="Données & confidentialité"
      title="Politique de confidentialité"
      homeHref="/fr/"
      backLabel="← Retour"
      updated="Dernière mise à jour : juillet 2026"
    >
      <h2>1. Préambule</h2>
      <p>
        La présente politique de confidentialité a pour objectif d&rsquo;informer les utilisateurs du
        site <strong>travelskills.io</strong> sur la collecte, le traitement et la protection de
        leurs données personnelles, conformément au Règlement Général sur la Protection des Données
        (RGPD) et à la loi Informatique et Libertés.
      </p>
      <p>Ce site s&rsquo;inscrit dans une démarche responsable de respect des données personnelles : aucun cookie de tracking publicitaire n&rsquo;est utilisé.</p>

      <h2>2. Responsable du traitement</h2>
      <p>
        <strong>Nicolas François</strong>
        <br />
        Statut : Entrepreneur Individuel
        <br />
        SIRET : 92832116500013
        <br />
        Email : <a href="mailto:hello@travelskills.io">hello@travelskills.io</a>
      </p>
      <p>
        Pour toute question relative à cette politique ou pour exercer vos droits conformément au
        RGPD, contactez-nous à : <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>
      <p>
        Vous avez le droit d&rsquo;introduire une réclamation auprès de votre autorité nationale de
        protection des données. En France, il s&rsquo;agit de la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">
          cnil.fr
        </a>
        ).
      </p>

      <h2>3. Données collectées</h2>
      <p>Le site travelskills.io collecte les données suivantes via le formulaire d&rsquo;inscription :</p>
      <ul>
        <li>
          <strong>Adresse e-mail</strong> : collectée avec votre consentement explicite, pour vous
          envoyer la notification de lancement et des actualités ponctuelles liées à TravelSkills.io
        </li>
        <li>
          <strong>Préférence de langue</strong> : détectée depuis la page utilisée pour
          l&rsquo;inscription (FR ou EN), afin de vous adresser les communications dans votre langue
        </li>
      </ul>
      <p>Aucune autre donnée personnelle n&rsquo;est collectée directement. Des données peuvent être collectées indirectement par les services tiers suivants :</p>

      <h2>Service d&rsquo;emailing (Brevo)</h2>
      <p>
        Les adresses e-mail collectées via le formulaire sont transmises à <strong>Brevo</strong>
        {' '}(anciennement Sendinblue), hébergé en Europe.
      </p>
      <ul>
        <li>Finalité : notification de lancement et actualités ponctuelles liées à TravelSkills.io</li>
        <li>Base légale : consentement (article 6.1.a du RGPD)</li>
        <li>
          Voir la{' '}
          <a href="https://www.brevo.com/fr/legal/privacypolicy/" target="_blank" rel="noopener">
            politique de confidentialité de Brevo
          </a>
        </li>
      </ul>

      <h2>4. Durée de conservation</h2>
      <p>
        Les adresses e-mail collectées sont conservées jusqu&rsquo;à désinscription de votre part, ou
        suppression à votre demande. Elles ne seront pas utilisées à d&rsquo;autres fins que celles
        déclarées au moment de la collecte.
      </p>

      <h2>5. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d&rsquo;accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l&rsquo;effacement</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d&rsquo;opposition</li>
        <li>Droit à la portabilité</li>
      </ul>
      <p>
        Pour exercer ces droits : <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>

      <h2>6. Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie à des fins statistiques ou publicitaires. Des cookies
        techniques strictement nécessaires au fonctionnement du formulaire peuvent être utilisés par
        Brevo.
      </p>

      <h2>7. Modifications</h2>
      <p>
        Cette politique peut être modifiée à tout moment pour s&rsquo;adapter aux évolutions
        réglementaires ou techniques. La date de dernière mise à jour est indiquée ci-dessous.
      </p>
    </LegalLayout>
  );
}
