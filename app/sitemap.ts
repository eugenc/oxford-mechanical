import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const now = new Date()

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/emergency', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/camera-inspection', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/leak-repair', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/maintenance', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/water-saving', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries/condos', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/office', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/education', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/healthcare', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/retail', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/industries/industrial', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/drain-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

