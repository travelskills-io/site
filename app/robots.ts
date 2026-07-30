import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://travelskills.io/sitemap.xml',
    host: 'https://travelskills.io',
  };
}
