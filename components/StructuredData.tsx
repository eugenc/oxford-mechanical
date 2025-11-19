import { siteConfig } from '@/lib/seo'

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebPage' | 'FAQPage' | 'BreadcrumbList'
  data?: Record<string, any>
  pathname?: string
}

export default function StructuredData({ type, data, pathname = '' }: StructuredDataProps) {
  const structuredData = getStructuredData(type, data, pathname)

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

function getStructuredData(type: string, data: any, pathname: string) {
  const base = { '@context': 'https://schema.org', '@type': type }

  switch (type) {
    case 'Organization':
    case 'LocalBusiness':
      return {
        ...base,
        '@type': 'Plumber',
        name: siteConfig.business.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/assets/oxford-mechanical-logo.webp`,
        telephone: siteConfig.business.phone,
        email: siteConfig.business.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.business.address.street,
          addressLocality: siteConfig.business.address.city,
          addressRegion: siteConfig.business.address.province,
          postalCode: siteConfig.business.address.postalCode,
          addressCountry: siteConfig.business.address.country,
        },
        areaServed: siteConfig.business.serviceAreas.map((area) => ({
          '@type': 'City',
          name: area,
        })),
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '16:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Plumbing Services',
          itemListElement: siteConfig.business.services.map((service, i) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
            },
            position: i + 1,
          })),
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '150',
        },
        foundingDate: siteConfig.business.founded,
        ...data,
      }

    case 'Service':
      return {
        ...base,
        serviceType: data?.serviceType || 'Plumbing Service',
        provider: {
          '@type': 'Plumber',
          name: siteConfig.business.name,
          telephone: siteConfig.business.phone,
        },
        areaServed: siteConfig.business.serviceAreas.map((area) => ({
          '@type': 'City',
          name: area,
        })),
        ...data,
      }

    case 'WebPage':
      return {
        ...base,
        name: data?.name || siteConfig.defaultTitle,
        description: data?.description || siteConfig.defaultDescription,
        url: data?.url || `${siteConfig.url}${pathname}`,
        isPartOf: {
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        ...data,
      }

    case 'FAQPage':
      return {
        ...base,
        mainEntity:
          data?.faqs?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })) || [],
      }

    case 'BreadcrumbList':
      return {
        ...base,
        itemListElement:
          data?.items?.map((item: any, i: number) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
          })) || [],
      }

    default:
      return { ...base, ...data }
  }
}

