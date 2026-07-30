import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://travelskills.io/',
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://travelskills.io/',
          fr: 'https://travelskills.io/fr/',
        },
      },
    },
    {
      url: 'https://travelskills.io/fr/',
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://travelskills.io/',
          fr: 'https://travelskills.io/fr/',
        },
      },
    },
  ];
}
