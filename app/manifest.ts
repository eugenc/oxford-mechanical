import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Oxford Mechanical',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0037ff',
    icons: [
      {
        src: '/assets/oxford-mechanical-logo.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  }
}

