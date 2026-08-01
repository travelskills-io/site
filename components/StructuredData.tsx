import { content, GITHUB_URL, type Locale } from '@/lib/content';

const ORIGIN = 'https://travelskills.io';

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, project-authored content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization + WebSite + FAQPage + ItemList of the four skills.
// Establishes the entity for search engines and answer engines (GEO), and the
// FAQ/ItemList give AI systems clean, quotable structured facts.
export default function StructuredData({ locale }: { locale: Locale }) {
  const c = content[locale];
  const inLanguage = locale === 'fr' ? 'fr-FR' : 'en-US';
  const homeUrl = locale === 'fr' ? `${ORIGIN}/fr/` : `${ORIGIN}/`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${ORIGIN}/#organization`,
        name: 'TravelSkills',
        alternateName: 'TravelSkills.io',
        url: `${ORIGIN}/`,
        logo: `${ORIGIN}/favicon-192.png`,
        image: `${ORIGIN}/og/`,
        description: c.meta.description,
        founder: {
          '@type': 'Person',
          name: 'Nicolas François',
          url: 'https://nfrancois.fr/',
        },
        sameAs: [GITHUB_URL],
      },
      {
        '@type': 'WebSite',
        '@id': `${ORIGIN}/#website`,
        name: 'TravelSkills.io',
        url: `${ORIGIN}/`,
        inLanguage,
        publisher: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${homeUrl}#webpage`,
        url: homeUrl,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage,
        isPartOf: { '@id': `${ORIGIN}/#website` },
        about: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@type': 'ItemList',
        name: c.roles.heading,
        itemListElement: c.roles.items.map((role, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: role.name,
          description: role.description,
          identifier: role.id,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${homeUrl}#faq`,
        inLanguage,
        mainEntity: c.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a.join(' ') },
        })),
      },
    ],
  };

  return <JsonLd data={graph} />;
}
