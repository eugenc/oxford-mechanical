import { Metadata } from 'next'

export const siteConfig = {
  name: 'Oxford Mechanical',
  url: 'https://oxfordmechanical.ca',
  description: 'Commercial plumbing services, 24/7 emergency response, drain cleaning, and maintenance for Toronto and GTA. Licensed & insured since 2013.',
  defaultTitle: 'Oxford Mechanical - Commercial Plumbing Services',
  defaultDescription: 'Commercial plumbing services, 24/7 emergency response, drain cleaning, and maintenance for Toronto and GTA. Licensed & insured since 2013.',
  keywords: ['commercial plumbing', 'Toronto', 'GTA', 'emergency plumbing', 'drain cleaning', 'commercial plumbing services'],
  author: 'Oxford Mechanical',
  locale: 'en_CA',
  business: {
    name: 'Oxford Mechanical',
    type: 'Plumbing Service',
    founded: '2013',
    address: {
      street: '1111 Finch West',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M3J 2P5',
      country: 'CA',
    },
    phone: '+14165550123',
    email: 'info@oxfordmechanical.ca',
    serviceAreas: [
      'Toronto',
      'Mississauga',
      'Brampton',
      'Markham',
      'Vaughan',
      'Richmond Hill',
      'Greater Toronto Area',
      'GTA',
    ],
    services: [
      'Emergency Plumbing',
      'Drain Cleaning',
      'Camera Inspection',
      'Leak Repair',
      'Preventive Maintenance',
      'Water Saving Solutions',
    ],
    certifications: ['Licensed Plumber', 'Fully Insured', 'Bonded'],
    hours: {
      weekdays: 'Mo-Fr 08:00-18:00',
      saturday: 'Sa 09:00-16:00',
      emergency: '24/7',
    },
  },
}

interface MetadataOptions {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  image?: string
  noindex?: boolean
  type?: 'website' | 'article' | 'business'
}

export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  image,
  noindex = false,
  type = 'website',
}: MetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle
  const fullDescription = description || siteConfig.defaultDescription
  const url = `${siteConfig.url}${path}`
  const imageUrl = image || `${siteConfig.url}/assets/oxford-mechanical-logo.webp`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    category: 'Plumbing Services',
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    other: {
      'business:contact_data:street_address': siteConfig.business.address.street,
      'business:contact_data:locality': siteConfig.business.address.city,
      'business:contact_data:region': siteConfig.business.address.province,
      'business:contact_data:postal_code': siteConfig.business.address.postalCode,
      'business:contact_data:country_name': siteConfig.business.address.country,
      'business:contact_data:phone_number': siteConfig.business.phone,
      'business:contact_data:email': siteConfig.business.email,
      'business:hours': siteConfig.business.hours.weekdays,
    },
  }
}

