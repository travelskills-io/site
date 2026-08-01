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
      updated="Dernière mise à jour : août 2026"
    >
      <h2>1. Préambule</h2>
      <p>
        La présente politique de confidentialité a pour objectif d’informer les utilisateurs du site{' '}
        <strong>travelskills.io</strong> sur la collecte, le traitement et la protection de leurs
        données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD)
        et à la loi Informatique et Libertés.
      </p>
      <p>
        Ce site n’utilise aucun cookie de mesure d’audience ni de publicité, et les e-mails envoyés
        ne contiennent aucun pixel de suivi.
      </p>

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
        RGPD, écrivez à : <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>
      <p>
        Vous avez le droit d’introduire une réclamation auprès de votre autorité nationale de
        protection des données. En France, il s’agit de la CNIL (
        <a href="https://www.cnil.fr" target="_blank" rel="noopener">
          cnil.fr
        </a>
        ).
      </p>

      <h2>3. Données collectées</h2>

      <h3>3.1 Données que vous fournissez</h3>
      <p>Le formulaire d’inscription collecte :</p>
      <ul>
        <li>
          <strong>Adresse e-mail</strong> : collectée avec votre consentement explicite, pour vous
          envoyer la notification de lancement et des actualités ponctuelles liées à TravelSkills
        </li>
        <li>
          <strong>Préférence de langue</strong> : détectée depuis la page utilisée pour l’inscription
          (FR ou EN), afin de vous adresser les communications dans votre langue
        </li>
      </ul>
      <p>Aucune autre donnée ne vous est demandée.</p>

      <h3>3.2 Données collectées automatiquement</h3>
      <p>
        La consultation du site génère des données techniques traitées par les services décrits à la
        section 4 : mesure d’audience agrégée et journaux de connexion de l’hébergeur, qui
        contiennent notamment votre adresse IP.
      </p>

      <h2>4. Destinataires et sous-traitants</h2>

      <h3>Brevo (envoi des e-mails)</h3>
      <p>
        Les adresses e-mail collectées via le formulaire sont enregistrées et traitées par{' '}
        <strong>Brevo</strong> (anciennement Sendinblue), société française, données hébergées dans
        l’Union européenne.
      </p>
      <ul>
        <li>Finalité : notification de lancement et actualités ponctuelles liées à TravelSkills</li>
        <li>Base légale : consentement (article 6.1.a du RGPD)</li>
        <li>
          <a href="https://www.brevo.com/fr/legal/privacypolicy/" target="_blank" rel="noopener">
            Politique de confidentialité de Brevo
          </a>
        </li>
      </ul>

      <h3>Plausible Analytics (mesure d’audience)</h3>
      <p>
        La fréquentation du site est mesurée avec <strong>Plausible Analytics</strong>, service
        hébergé dans l’Union européenne.
      </p>
      <ul>
        <li>Finalité : comprendre la fréquentation du site, de façon strictement agrégée</li>
        <li>
          Base légale : intérêt légitime (article 6.1.f du RGPD), la mesure d’audience étant limitée
          à ce seul usage
        </li>
        <li>
          Plausible ne dépose aucun cookie, ne conserve aucun identifiant permettant de vous
          reconnaître d’une visite à l’autre, et ne suit pas votre navigation sur d’autres sites.
          Aucune donnée n’est transmise à des tiers ni utilisée à des fins publicitaires.
        </li>
        <li>
          <a href="https://plausible.io/privacy" target="_blank" rel="noopener">
            Politique de confidentialité de Plausible
          </a>
        </li>
      </ul>

      <h3>Vercel (hébergement)</h3>
      <p>
        Le site est hébergé par <strong>Vercel Inc.</strong>, société établie aux États-Unis. À ce
        titre, Vercel traite les journaux techniques de connexion, qui incluent l’adresse IP des
        visiteurs.
      </p>
      <ul>
        <li>Finalité : fonctionnement, sécurité et disponibilité du site</li>
        <li>Base légale : intérêt légitime (article 6.1.f du RGPD)</li>
        <li>
          Ce traitement implique un transfert de données hors de l’Union européenne, encadré par les
          garanties prévues au chapitre V du RGPD.
        </li>
        <li>
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">
            Politique de confidentialité de Vercel
          </a>
        </li>
      </ul>

      <h2>5. E-mails et pixels de suivi</h2>
      <p>
        Les e-mails envoyés depuis travelskills.io <strong>ne contiennent aucun pixel de suivi</strong>.
        L’ouverture de nos messages n’est pas mesurée.
      </p>
      <p>
        Les clics sur les liens contenus dans ces e-mails sont enregistrés par Brevo, afin de savoir
        quels sujets intéressent les inscrits. Chaque message contient un lien de désinscription qui
        prend effet immédiatement.
      </p>

      <h2>6. Durées de conservation</h2>
      <ul>
        <li>
          <strong>Adresse e-mail et préférence de langue</strong> : conservées jusqu’à votre
          désinscription ou votre demande de suppression
        </li>
        <li>
          <strong>Statistiques de fréquentation</strong> : conservées sous forme agrégée, sans donnée
          permettant de vous identifier
        </li>
        <li>
          <strong>Journaux techniques de l’hébergeur</strong> : conservés pour une durée limitée,
          selon les pratiques de l’hébergeur
        </li>
      </ul>
      <p>
        Vos données ne sont utilisées à aucune autre fin que celles déclarées au moment de la
        collecte, et ne sont ni vendues, ni cédées, ni transmises à des tiers à des fins
        commerciales.
      </p>

      <h2>7. Vos droits</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d’accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l’effacement</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d’opposition</li>
        <li>Droit à la portabilité</li>
        <li>Droit de retirer votre consentement à tout moment</li>
      </ul>
      <p>
        Pour exercer ces droits :{' '}
        <a href="mailto:privacy@travelskills.io">privacy@travelskills.io</a>
      </p>

      <h2>8. Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie de mesure d’audience, de profilage ou de publicité. Des
        cookies techniques strictement nécessaires au fonctionnement du formulaire d’inscription
        peuvent être utilisés par Brevo.
      </p>

      <h2>9. Modifications</h2>
      <p>
        Cette politique peut être modifiée pour s’adapter aux évolutions réglementaires ou
        techniques. La date de dernière mise à jour est indiquée ci-dessous.
      </p>
    </LegalLayout>
  );
}
