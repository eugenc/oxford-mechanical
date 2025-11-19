import { Metadata } from 'next'
import { generateMetadata } from './seo'

// Pre-configured metadata for each page type
export const pageMetadata = {
  home: (): Metadata =>
    generateMetadata({
      title: 'Commercial Plumbing Services',
      description:
        'Commercial plumbing services, 24/7 emergency response, drain cleaning, and maintenance for Toronto and GTA. Licensed & insured since 2013.',
      path: '',
    }),

  about: (): Metadata =>
    generateMetadata({
      title: 'About Us',
      description:
        'Learn about Oxford Mechanical, Toronto\'s trusted plumbing partner since 2013. Licensed, insured, and serving the GTA with excellence.',
      path: '/about',
      keywords: ['about', 'company', 'team', 'history'],
    }),

  contact: (): Metadata =>
    generateMetadata({
      title: 'Contact Us',
      description:
        'Get in touch for professional plumbing services across the Greater Toronto Area. Call us 24/7 for emergency service.',
      path: '/contact',
      keywords: ['contact', 'phone', 'email', 'location'],
    }),

  services: (): Metadata =>
    generateMetadata({
      title: 'Commercial Plumbing Services',
      description:
        'Comprehensive commercial plumbing solutions for commercial and residential properties across the Greater Toronto Area.',
      path: '/services',
      keywords: ['services', 'commercial plumbing services', 'commercial plumbing'],
    }),

  emergency: (): Metadata =>
    generateMetadata({
      title: '24/7 Emergency Plumbing Services',
      description:
        'Immediate emergency plumbing response in Toronto & GTA. Available 24/7 for burst pipes, sewer backups, and urgent repairs.',
      path: '/services/emergency',
      keywords: ['emergency plumbing', '24/7', 'urgent repair', 'burst pipe'],
    }),

  cameraInspection: (): Metadata =>
    generateMetadata({
      title: 'Camera Inspection Services',
      description:
        'Advanced diagnostic camera inspection for accurate problem identification in your plumbing system.',
      path: '/services/camera-inspection',
      keywords: ['camera inspection', 'plumbing diagnostics', 'sewer inspection'],
    }),

  leakRepair: (): Metadata =>
    generateMetadata({
      title: 'Leak Detection & Repair',
      description:
        'Comprehensive leak investigation and precision repair services. We locate and fix leaks quickly to prevent water damage.',
      path: '/services/leak-repair',
      keywords: ['leak detection', 'leak repair', 'water leak'],
    }),

  maintenance: (): Metadata =>
    generateMetadata({
      title: 'Preventive Maintenance Services',
      description:
        'Preventative maintenance programs to avoid costly repairs. Scheduled maintenance keeps your plumbing systems running efficiently.',
      path: '/services/maintenance',
      keywords: ['preventive maintenance', 'plumbing maintenance', 'maintenance program'],
    }),

  waterSaving: (): Metadata =>
    generateMetadata({
      title: 'Water Saving Solutions',
      description:
        'Eco-friendly upgrades and water conservation solutions. Reduce water bills and environmental impact.',
      path: '/services/water-saving',
      keywords: ['water conservation', 'water saving', 'eco-friendly plumbing'],
    }),

  industries: (): Metadata =>
    generateMetadata({
      title: 'Industry-Specific Solutions',
      description: 'Tailored plumbing services for every industry across the Greater Toronto Area.',
      path: '/industries',
      keywords: ['commercial plumbing', 'industrial plumbing', 'industry solutions'],
    }),

  condos: (): Metadata =>
    generateMetadata({
      title: 'High-Rise Condo Plumbing Services',
      description:
        'Specialized plumbing services for high-density residential properties with minimal disruption to residents.',
      path: '/industries/condos',
      keywords: ['condo plumbing', 'high-rise plumbing', 'residential plumbing'],
    }),

  office: (): Metadata =>
    generateMetadata({
      title: 'Office Building Plumbing Services',
      description:
        'Commercial-grade plumbing solutions for corporate environments and business facilities.',
      path: '/industries/office',
      keywords: ['office plumbing', 'commercial plumbing', 'business plumbing'],
    }),

  education: (): Metadata =>
    generateMetadata({
      title: 'School & University Plumbing Services',
      description:
        'Educational institution plumbing maintenance and upgrades designed for student safety and facility longevity.',
      path: '/industries/education',
      keywords: ['school plumbing', 'university plumbing', 'education facility plumbing'],
    }),

  healthcare: (): Metadata =>
    generateMetadata({
      title: 'Healthcare Facility Plumbing Services',
      description:
        'Specialized plumbing for hospitals and medical centers with strict hygiene and safety requirements.',
      path: '/industries/healthcare',
      keywords: ['hospital plumbing', 'healthcare plumbing', 'medical facility plumbing'],
    }),

  retail: (): Metadata =>
    generateMetadata({
      title: 'Retail & Commercial Plumbing Services',
      description:
        'Shopping centers and retail space plumbing solutions optimized for customer experience.',
      path: '/industries/retail',
      keywords: ['retail plumbing', 'shopping center plumbing', 'commercial plumbing'],
    }),

  industrial: (): Metadata =>
    generateMetadata({
      title: 'Industrial Facility Plumbing Services',
      description:
        'Heavy-duty plumbing for manufacturing and industrial sites with specialized equipment and safety requirements.',
      path: '/industries/industrial',
      keywords: ['industrial plumbing', 'manufacturing plumbing', 'factory plumbing'],
    }),

  projects: (): Metadata =>
    generateMetadata({
      title: 'Our Projects & Case Studies',
      description:
        'See our successful plumbing projects and case studies across the Greater Toronto Area.',
      path: '/projects',
      keywords: ['projects', 'case studies', 'portfolio'],
    }),

  drainCleaning: (): Metadata =>
    generateMetadata({
      title: 'Professional Drain Cleaning Services',
      description:
        'Professional drain cleaning and sewer maintenance using advanced hydro-jetting technology.',
      path: '/drain-cleaning',
      keywords: ['drain cleaning', 'sewer cleaning', 'hydro-jetting'],
    }),

  privacy: (): Metadata =>
    generateMetadata({
      title: 'Privacy Policy',
      description: 'How we protect and handle your personal information.',
      path: '/privacy',
      keywords: [],
      noindex: true,
    }),

  terms: (): Metadata =>
    generateMetadata({
      title: 'Terms of Service',
      description: 'Terms and conditions for using our services.',
      path: '/terms',
      keywords: [],
      noindex: true,
    }),
}

