import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/data/services';
import { ARTICLES } from '@/lib/data/knowledge';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oxygenservices.in';
  const now = new Date();

  const coreRoutes = [
    '',
    '/services',
    '/request-service',
    '/track-service',
    '/locations',
    '/locations/mumbai',
    '/locations/pune',
    '/locations/lucknow',
    '/oxygen-equipment-service-mumbai',
    '/oxygen-equipment-service-pune',
    '/oxygen-equipment-service-lucknow',
    '/resources',
    '/contact',
    '/terms',
    '/privacy',
    '/disclaimer',
    '/refund-policy'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/locations') || route.startsWith('/services') ? 0.9 : 0.8
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.95
  }));

  const articleRoutes = ARTICLES.map((article) => ({
    url: `${baseUrl}/resources/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.85
  }));

  return [...coreRoutes, ...serviceRoutes, ...articleRoutes];
}
