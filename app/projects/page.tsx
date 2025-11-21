import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/seo'

export const metadata = pageMetadata.projects()

const projects = [
  {
    title: "Downtown Condo Complex",
    category: "High-Rise Residential",
    description: "Complete plumbing system overhaul for a 500-unit high-rise condominium complex in downtown Toronto.",
    image: "/assets/industries/condos.jpg",
    results: [
      "40% reduction in maintenance costs",
      "Zero emergency calls in 6 months",
      "Improved water pressure throughout building",
      "Enhanced resident satisfaction"
    ],
    duration: "3 months",
    units: "500 units"
  },
  {
    title: "Regional Hospital Upgrade",
    category: "Healthcare",
    description: "Critical infrastructure upgrade for a major regional hospital, including emergency backup systems and water conservation measures.",
    image: "/assets/industries/healthcare.jpg",
    results: [
      "25% reduction in water usage",
      "100% compliance with health regulations",
      "Zero downtime during implementation",
      "Enhanced patient safety protocols"
    ],
    duration: "6 months",
    units: "15 floors"
  },
  {
    title: "University Campus Renovation",
    category: "Education",
    description: "Comprehensive plumbing infrastructure upgrade across 15 buildings on a major university campus.",
    image: "/assets/industries/education.jpg",
    results: [
      "60% reduction in emergency calls",
      "Modernized all student facilities",
      "Improved energy efficiency",
      "Enhanced accessibility compliance"
    ],
    duration: "8 months",
    units: "15 buildings"
  },
  {
    title: "Office Tower Modernization",
    category: "Commercial",
    description: "Smart plumbing system installation for a 40-story office tower in Toronto's financial district.",
    image: "/assets/industries/office.jpg",
    results: [
      "30% reduction in water costs",
      "Real-time monitoring capabilities",
      "Predictive maintenance alerts",
      "Improved tenant satisfaction"
    ],
    duration: "4 months",
    units: "40 floors"
  },
  {
    title: "Shopping Center Renovation",
    category: "Retail",
    description: "Complete plumbing system upgrade for a major shopping center, including food court and retail spaces.",
    image: "/assets/industries/retail.jpg",
    results: [
      "Enhanced customer experience",
      "Reduced maintenance downtime",
      "Improved water efficiency",
      "Better tenant facilities"
    ],
    duration: "2 months",
    units: "200+ stores"
  },
  {
    title: "Industrial Facility Upgrade",
    category: "Industrial",
    description: "Heavy-duty plumbing system installation for a manufacturing facility with specialized requirements.",
    image: "/assets/industries/industrial.webp",
    results: [
      "Compliance with safety regulations",
      "Reduced production downtime",
      "Improved system reliability",
      "Enhanced worker safety"
    ],
    duration: "5 months",
    units: "50,000 sq ft"
  }
]

const categories = [
  "All Projects",
  "High-Rise Residential",
  "Healthcare",
  "Education",
  "Commercial",
  "Retail",
  "Industrial"
]

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: 'Our Projects & Case Studies',
          description: 'See our successful plumbing projects and case studies across the Greater Toronto Area.',
          url: 'https://oxfordmechanical.ca/projects',
        }}
        pathname="/projects"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Project Portfolio"
        subtitle="Showcasing successful plumbing projects across the Greater Toronto Area"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Start Your Project"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
      />

      {/* Project Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 bg-white text-gray-700 rounded-full border border-gray-200 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful plumbing projects across various industries 
              and property types throughout the Greater Toronto Area.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-1 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">{project.duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-brand-primary">{project.units}</div>
                      <div className="text-sm text-gray-600">Scope</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 font-semibold"
                  >
                    Start Similar Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Project Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to project completion, we follow a proven process 
              that ensures successful outcomes and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Initial assessment and requirements gathering</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Detailed project planning and timeline development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Professional implementation with minimal disruption</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Start Your Project"
              subtitle="Ready to begin your plumbing project? Contact us for a detailed consultation and project proposal."
              showServiceSelection={true}
              showUrgencyLevel={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
    </>
  )
}
