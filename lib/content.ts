// All landing-page copy, EN + FR. Text is real strings so it lands in the DOM
// as crawlable content (SEO requirement: identifiers and FAQ must be real text,
// never images or post-hydration injection).

export type Locale = 'en' | 'fr';

// ── Shared, locale-independent constants ─────────────────────────────────────
export const GITHUB_URL = 'https://github.com/TravelSkills-io';
export const CONTACT_EMAIL = 'hello@travelskills.io';
export const WAITLIST_COUNT = 142; // real Brevo list 5 count (2026-07)

// The four skill identifiers. STRICTLY identical across FR, EN, GitHub and repos.
// Rendered in monospace, they read like filenames. Order is deliberate:
// Travel Agent first, as it concentrates inbound traffic.
export const SKILL_IDS = {
  travelAgent: 'claude-travel-agent-skill',
  travelPlanner: 'travel-planner-skill',
  stayAdvisor: 'tourism-stay-advisor',
  tourOperator: 'tour-operator-skill',
} as const;

// Decorative hero code block. It is code, so identical in both locales.
// Carries no license line: the project license is not decided yet.
export const HERO_CODE = `---
name: ${SKILL_IDS.travelAgent}
version: 1.0.0
description: AI skills for travel
  & tourism professionals
---

# Skills for travel pros

## Use when
- Sales and objection handling
- Visitor counseling
- Itinerary storytelling
- Product copy`;

export interface Role {
  num: string;
  id: string;
  name: string;
  description: string;
}

export interface Faq {
  q: string;
  /** One entry per paragraph. */
  a: string[];
  /** First paragraph rendered bold (used by the opening question only). */
  leadBold?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface LocaleContent {
  htmlLang: string;
  season: string;
  skipToContent: string;
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    ogLocaleAlternate: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    cta: string;
    socialProofSuffix: string;
    statusLine: string;
    emailPlaceholder: string;
    emailLabel: string;
    consent: string;
    privacyLinkLabel: string;
    privacyHref: string;
    reassurance: string;
    // form status + validation messages
    submitting: string;
    success: string;
    apiError: string;
    emailEmpty: string;
    emailInvalid: string;
    consentRequired: string;
  };
  anchorCta: { prompt: string; link: string };
  roles: { heading: string; items: Role[] };
  faq: { heading: string; items: Faq[] };
  footer: {
    baseline: string;
    paragraph: string;
    name: string;
    nameUrl: string;
    role: string;
    links: FooterLink[];
  };
}

export const content: Record<Locale, LocaleContent> = {
  en: {
    htmlLang: 'en',
    season: 'Fall 2026',
    skipToContent: 'Skip to main content',
    meta: {
      title: 'TravelSkills, open-source Claude Skills for travel and tourism',
      description:
        'Open-source library of Claude Agent Skills for travel pros: travel agent, travel planner, stay advisor, tour operator. Built from the field.',
      ogLocale: 'en_US',
      ogLocaleAlternate: 'fr_FR',
    },
    hero: {
      h1: 'AI skills for travel professionals.',
      subtitle:
        'The first open-source library of Claude Agent Skills for travel pros. Built from how the work is really done, not from generic web data.',
      cta: 'Join the waitlist',
      socialProofSuffix: 'people on the waitlist',
      statusLine: 'First skill: Fall 2026 · Follow the project on GitHub',
      emailPlaceholder: 'your@email.com',
      emailLabel: 'Email address',
      consent: 'I agree to receive emails from TravelSkills.io.',
      privacyLinkLabel: 'Privacy policy',
      privacyHref: '/privacy/',
      reassurance: 'One email when a skill ships. Unsubscribe in one click.',
      submitting: 'Sending',
      success: 'You are on the list. We will email you when the first skill ships.',
      apiError: 'Something went wrong. Try again in a moment.',
      emailEmpty: 'Enter your email address.',
      emailInvalid: 'This email address is not valid.',
      consentRequired: 'Check this box to join the waitlist.',
    },
    anchorCta: {
      prompt: 'The first skill ships in Fall 2026.',
      link: 'Join the waitlist',
    },
    roles: {
      heading: 'Four roles, four skills',
      items: [
        {
          num: '01',
          id: SKILL_IDS.travelAgent,
          name: 'Travel Agent',
          description: 'Sales, objection handling, dispute resolution, legal obligations.',
        },
        {
          num: '02',
          id: SKILL_IDS.travelPlanner,
          name: 'Travel Planner',
          description:
            'Tailor-made trips, high-end client relationships, itinerary storytelling, pricing rationale.',
        },
        {
          num: '03',
          id: SKILL_IDS.stayAdvisor,
          name: 'Stay Advisor',
          description:
            'Visitor welcome, local guidance, deep local knowledge, handling lost or unhappy travelers.',
        },
        {
          num: '04',
          id: SKILL_IDS.tourOperator,
          name: 'Tour Operator',
          description:
            'Product copy, supplier negotiation, B2B communication, pre-departure documents.',
        },
      ],
    },
    faq: {
      heading: 'What you should know',
      items: [
        {
          q: "Why isn't a general-purpose AI enough for travel?",
          leadBold: true,
          a: [
            'It learned the job from the web, so it knows all the words without knowing the voice of the people who do the work.',
            'It knows what a tailor-made trip is. It doesn’t know that the same word lands differently with a high-end client than with a supplier. The output looks right and it rings false to someone who has done the job for ten years, on a detail they catch in two seconds. That gap is what a skill fixes.',
          ],
        },
        {
          q: 'Where is the project right now?',
          a: [
            'Nothing is published yet. We are collecting the material: interviews with practitioners, plus the podcasts and trade articles we go through alongside. The patterns are being written, one role at a time.',
            'What is settled: four roles, one skill per role, published on GitHub. The first one ships in Fall 2026. The rest, starting with the release order, is open.',
          ],
        },
        {
          q: 'What do I get by joining the waitlist?',
          a: [
            'An email when a skill ships and close to nothing in between. We may send you one or two messages before Fall 2026, on what is moving and what we are trying to validate. No automated sequence behind it and your address goes nowhere else. Unsubscribe in one click.',
          ],
        },
      ],
    },
    footer: {
      baseline: 'Built from real practice. For the people who live it.',
      paragraph:
        'TravelSkills is an open-source project, open to contributions from professionals in the industry. Every pattern will come from a real, identified source.',
      name: 'Nicolas François',
      nameUrl: 'https://nfrancois.fr/en/',
      role: 'Founder, TravelSkills',
      links: [
        { label: 'GitHub', href: GITHUB_URL, external: true },
        { label: 'Legal notice', href: '/legal/' },
        { label: 'Privacy', href: '/privacy/' },
        { label: 'Contact', href: `mailto:${CONTACT_EMAIL}`, external: true },
      ],
    },
  },

  fr: {
    htmlLang: 'fr',
    season: 'Automne 2026',
    skipToContent: 'Aller au contenu principal',
    meta: {
      title: 'TravelSkills, Claude Skills open-source pour le voyage et le tourisme',
      description:
        'Bibliothèque open-source de Claude Agent Skills pour les pros du voyage : conseiller agence, travel planner, conseiller en séjour, tour-opérateur. Construite depuis le terrain.',
      ogLocale: 'fr_FR',
      ogLocaleAlternate: 'en_US',
    },
    hero: {
      h1: 'Des skills IA pensés pour les pros du voyage.',
      subtitle:
        'La première bibliothèque open-source de Claude Agent Skills dédiée aux professionnels du tourisme et du voyage. Construite à partir de la façon dont le métier se fait vraiment, pas des données génériques du web.',
      cta: 'Rejoindre la waitlist',
      socialProofSuffix: 'inscrits sur la waitlist',
      statusLine: 'Premier skill : automne 2026 · Suivez le projet sur GitHub',
      emailPlaceholder: 'votre@email.com',
      emailLabel: 'Adresse e-mail',
      consent: 'J’accepte de recevoir des e-mails de TravelSkills.io.',
      privacyLinkLabel: 'Confidentialité',
      privacyHref: '/fr/politique-de-confidentialite/',
      reassurance: 'Un mail à la sortie de chaque skill. Désinscription en un clic.',
      submitting: 'Envoi en cours',
      success: 'C’est noté. Vous recevrez un e-mail à la sortie du premier skill.',
      apiError: 'L’inscription n’a pas abouti. Réessayez dans un instant.',
      emailEmpty: 'Renseignez votre adresse e-mail.',
      emailInvalid: 'Cette adresse e-mail n’est pas valide.',
      consentRequired: 'Cochez cette case pour rejoindre la waitlist.',
    },
    anchorCta: {
      prompt: 'Le premier skill sort à l’automne 2026.',
      link: 'Rejoindre la waitlist',
    },
    roles: {
      heading: 'Quatre métiers, quatre skills',
      items: [
        {
          num: '01',
          id: SKILL_IDS.travelAgent,
          name: 'Conseiller voyages en agence',
          description:
            'Vente, argumentation, gestion des objections, réponse aux litiges, obligations légales.',
        },
        {
          num: '02',
          id: SKILL_IDS.travelPlanner,
          name: 'Travel Planner',
          description:
            'Sur-mesure, relation client haut de gamme, narration d’itinéraire, justification d’honoraires.',
        },
        {
          num: '03',
          id: SKILL_IDS.stayAdvisor,
          name: 'Conseiller en séjour',
          description:
            'Accueil, orientation terrain, ancrage local, gestion des visiteurs déçus ou perdus.',
        },
        {
          num: '04',
          id: SKILL_IDS.tourOperator,
          name: 'Tour-opérateur',
          description:
            'Rédaction produit, négociation fournisseur, communication B2B, documentation de départ.',
        },
      ],
    },
    faq: {
      heading: 'Ce qu’il faut savoir',
      items: [
        {
          q: 'Pourquoi un assistant IA classique ne suffit pas pour le voyage ?',
          leadBold: true,
          a: [
            'Parce qu’il a appris le métier sur le web, donc il en connaît tous les mots sans connaître la voix de ceux qui le pratiquent.',
            'Il sait ce qu’est un voyage sur mesure. Il ne sait pas qu’un même mot ne se dit pas pareil selon qu’on s’adresse à un client haut de gamme ou à un fournisseur. Le résultat a l’air juste et il sonne faux à quelqu’un qui fait ce métier depuis dix ans, sur un détail qu’il repère en deux secondes. C’est ce décalage qu’un skill vient corriger.',
          ],
        },
        {
          q: 'Où en est le projet, concrètement ?',
          a: [
            'Rien n’est publié à ce jour. On collecte la matière : entretiens avec des pros du voyage, podcasts et articles métier dépouillés en parallèle. Les patterns sont en cours d’écriture, métier par métier.',
            'Ce qui est acquis : quatre métiers, un skill par métier, publiés sur GitHub. Le premier sort à l’automne 2026. Le reste, à commencer par l’ordre de sortie, n’est pas tranché.',
          ],
        },
        {
          q: 'Qu’est-ce qu’on reçoit en s’inscrivant à la waitlist ?',
          a: [
            'Un mail à la sortie de chaque skill et à peu près rien entre-temps. D’ici l’automne 2026, il est possible qu’on vous envoie un ou deux messages sur ce qui avance et sur ce qu’on cherche à valider. Pas de séquence automatisée derrière et votre adresse ne part nulle part ailleurs. Désinscription en un clic.',
          ],
        },
      ],
    },
    footer: {
      baseline: 'Construit depuis le terrain. Pour ceux qui y travaillent.',
      paragraph:
        'TravelSkills est un projet open source, ouvert aux contributions des professionnels du secteur. Chaque pattern viendra d’une source réelle, identifiée et vérifiable.',
      name: 'Nicolas François',
      nameUrl: 'https://nfrancois.fr/',
      role: 'Fondateur, TravelSkills',
      links: [
        { label: 'GitHub', href: GITHUB_URL, external: true },
        { label: 'Mentions légales', href: '/fr/mentions-legales/' },
        { label: 'Confidentialité', href: '/fr/politique-de-confidentialite/' },
        { label: 'Contact', href: `mailto:${CONTACT_EMAIL}`, external: true },
      ],
    },
  },
};
