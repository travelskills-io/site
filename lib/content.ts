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
// License MUST match the retained project license.
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
  a: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface LocaleContent {
  htmlLang: string;
  season: string;
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
      socialProofSuffix: 'travel pros have already joined the waitlist',
      statusLine: 'First skills: Fall 2026 · Follow the project on GitHub',
      emailPlaceholder: 'your@email.com',
      emailLabel: 'Email address',
      consent: 'I agree to receive emails from TravelSkills.io.',
      privacyLinkLabel: 'Privacy policy',
      privacyHref: '/privacy/',
      submitting: 'Sending',
      success: 'You are on the list. We will email you when the first skills ship.',
      apiError: 'Something went wrong. Try again in a moment.',
      emailEmpty: 'Enter your email address.',
      emailInvalid: 'This email address is not valid.',
      consentRequired: 'Check this box to join the waitlist.',
    },
    anchorCta: {
      prompt: 'The first skills ship in autumn 2026.',
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
      heading: 'Questions we get asked',
      items: [
        {
          q: "Why isn't a general-purpose AI enough for travel?",
          a: 'It learned the job from the web at large, so it knows all the words without knowing the voice of the people who do the work. It knows what a tailor-made trip is. It doesn’t know that the same word lands differently with a high-end client than with a supplier. The output looks right: the right terms, the right apparent tone. And it rings false to someone who has done the job for ten years, on a detail they catch in two seconds. That gap is what a skill fixes.',
        },
        {
          q: 'How do you actually build these skills?',
          a: 'We start from how the work is really done, not from the web: interviews, podcasts, trade articles, what practitioners tell us about their day-to-day. We look for what sets an experienced pro apart from a beginner. The phrasings they use, the ones they have learned to avoid, how they shift their tone depending on who they’re talking to. Then we turn all of it into before/after examples: one version that sounds generic, one that sounds right. That lets an assistant learn by example, rather than from abstract rules. Each skill targets one job, not tourism as a whole.',
        },
        {
          q: 'How do you know a skill sounds genuinely right?',
          a: 'We ask that about every example, because a text can be clean and still sound off. To settle it, we don’t stop at the pro’s point of view. We also look at how travelers actually talk, the raw language you read in forums, reviews, and online communities. The idea is simple: a text meant to earn a client’s trust should produce that reaction when tested from that side. If it doesn’t, the rewrite doesn’t hold, and we go back to it. That’s how we keep ourselves honest.',
        },
      ],
    },
    footer: {
      baseline: 'Built from real practice. For the people who live it.',
      paragraph:
        'TravelSkills is an open-source project, open to contributions from professionals in the industry. Every example added to the library comes from a real source. Every skill is public, testable, adjustable, and open to improvement.',
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
        'La première bibliothèque open-source de Claude Agent Skills dédiée aux professionnels du tourisme et du voyage. Construite à partir du travail réel des praticiens, pas des données génériques du web.',
      cta: 'Rejoindre la waitlist',
      socialProofSuffix: 'pros du voyage ont déjà rejoint la waitlist',
      statusLine: 'Premiers skills : Automne 2026 · Suivez le projet sur GitHub',
      emailPlaceholder: 'votre@email.com',
      emailLabel: 'Adresse e-mail',
      consent: 'J’accepte de recevoir des e-mails de TravelSkills.io.',
      privacyLinkLabel: 'Confidentialité',
      privacyHref: '/fr/politique-de-confidentialite/',
      submitting: 'Envoi en cours',
      success: 'C’est noté. Vous recevrez un e-mail à la sortie des premiers skills.',
      apiError: 'L’inscription n’a pas abouti. Réessayez dans un instant.',
      emailEmpty: 'Renseignez votre adresse e-mail.',
      emailInvalid: 'Cette adresse e-mail n’est pas valide.',
      consentRequired: 'Cochez cette case pour rejoindre la waitlist.',
    },
    anchorCta: {
      prompt: 'Les premiers skills sortent à l’automne 2026.',
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
      heading: 'Les questions qu’on nous pose',
      items: [
        {
          q: 'Pourquoi un assistant IA classique ne suffit pas pour le voyage ?',
          a: 'Parce qu’il a appris le métier sur le web en général, donc il en connaît tous les mots sans connaître la voix de ceux qui le pratiquent. Il sait ce qu’est un voyage sur mesure, mais il ne sait pas qu’un même mot ne se dit pas pareil selon qu’on s’adresse à un client haut de gamme ou à un fournisseur. Le résultat a l’air juste : les bons termes, le bon ton apparent. Et il sonne faux à quelqu’un qui fait ce métier depuis dix ans, sur un détail qu’il repère en deux secondes. C’est ce décalage qu’un skill vient corriger.',
        },
        {
          q: 'Comment vous construisez ces skills, concrètement ?',
          a: 'On part de la matière de terrain plutôt que du web : entretiens, podcasts, articles métier, ce que des praticiens nous racontent de leur travail réel. On y repère ce qui sépare un pro expérimenté d’un débutant, les tournures qu’il emploie, celles qu’il a appris à éviter, la façon dont il ajuste son registre. Puis on transforme tout ça en exemples avant/après : une version qui sonne générique, une version qui sonne juste. C’est le format qui permet à un assistant d’apprendre par l’exemple, pas par la règle abstraite. Chaque skill vise un métier précis, pas le tourisme en bloc.',
        },
        {
          q: 'Comment vous savez qu’un skill sonne vraiment juste ?',
          a: 'C’est la question qu’on se pose à chaque pattern, parce qu’un texte peut être propre et sonner faux quand même. Pour trancher, on ne s’arrête pas au point de vue du pro. On regarde aussi du côté du voyageur, dans le registre brut qu’on lit sur les forums, les avis, les groupes de discussion. L’idée est simple : un texte censé inspirer confiance à un client devrait produire cette réaction quand on le teste de ce côté-là. Si ce n’est pas le cas, le pattern ne tient pas et on le revoit. C’est notre garde-fou.',
        },
      ],
    },
    footer: {
      baseline: 'Construit depuis le terrain. Pour ceux qui y travaillent.',
      paragraph:
        'TravelSkills est un projet open source, ouvert aux contributions des professionnels du secteur. Chaque pattern ajouté à la base vient d’une source réelle. Chaque skill est public, testable, ajustable, perfectible.',
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
