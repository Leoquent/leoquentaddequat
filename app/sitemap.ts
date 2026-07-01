import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lunda-ki.de';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `${siteUrl}${basePath}`;
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
