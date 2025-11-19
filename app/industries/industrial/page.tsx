import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/seo'

export const metadata = pageMetadata.industrial()

const challenges = [
  {
    title: "Heavy-Duty Equipment",
    description: "Managing plumbing systems that support industrial machinery and processes.",
    solution: "Industrial-grade materials and specialized installation techniques"
  },
  {
    title: "Safety Regulations",
    description: "Meeting strict industrial safety standards and regulatory requirements.",
    solution: "Full compliance expertise and safety-first protocols"
  },
  {
    title: "Production Downtime",
    description: "Minimizing downtime during maintenance and repairs to maintain production schedules.",
    solution: "Scheduled maintenance and rapid response protocols"
  },
  {
    title: "Specialized Materials",
    description: "Working with industrial-grade materials and specialized plumbing components.",
    solution: "Expert knowledge of industrial materials and installation methods"
  }
]

const services = [
  {
    title: "Industrial Maintenance",
    description: "Comprehensive maintenance programs for industrial plumbing systems.",
    icon: "🛠️",
    features: ["Heavy-duty systems", "Safety protocols", "Production scheduling", "Compliance tracking"]
  },
  {
    title: "Emergency Response",
    description: "24/7 emergency service for critical industrial plumbing issues.",
    icon: "🚨",
    features: ["Rapid response", "Safety compliance", "Production continuity", "Expert technicians"]
  },
  {
    title: "System Installation",
    description: "Installation of new industrial plumbing systems and equipment.",
    icon: "⚡",
    features: ["Industrial materials", "Code compliance", "Safety standards", "Quality assurance"]
  },
  {
    title: "Process Piping",
    description: "Specialized piping systems for industrial processes and manufacturing.",
    icon: "🔧",
    features: ["Process optimization", "Material compatibility", "Pressure systems", "Flow control"]
  }
]

const facilityTypes = [
  {
    type: "Manufacturing Plants",
    description: "Production facilities with complex plumbing requirements.",
    icon: "🏭"
  },
  {
    type: "Chemical Facilities",
    description: "Chemical processing plants with specialized material requirements.",
    icon: "🧪"
  },
  {
    type: "Food Processing",
    description: "Food manufacturing facilities with strict hygiene requirements.",
    icon: "🥫"
  },
  {
    type: "Warehouses",
    description: "Distribution centers and warehouse facilities.",
    icon: "📦"
  }
]

const benefits = [
  "Enhanced safety compliance",
  "Reduced production downtime",
  "Improved system reliability",
  "Cost-effective maintenance",
  "Expert industrial knowledge",
  "24/7 emergency support"
]

export default function IndustrialPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: 'Industrial Facility Plumbing Services',
          description: 'Heavy-duty plumbing for manufacturing and industrial sites with specialized equipment and safety requirements.',
          url: 'https://oxfordmechanical.ca/industries/industrial',
        }}
        pathname="/industries/industrial"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Industrial Facility Plumbing"
        subtitle="Heavy-duty plumbing for manufacturing and industrial sites with specialized equipment and safety requirements"
        backgroundImage="/assets/industries/industrial.webp"
        ctaText="Get Industrial Quote"
        ctaHref="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Industry Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Industrial Facility Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Industrial facilities require specialized plumbing expertise to handle heavy-duty systems, 
                safety regulations, and production-critical operations. We understand the unique demands 
                of industrial environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our industrial services prioritize safety, compliance, and minimal production disruption 
                while maintaining the highest standards of quality and reliability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Safety</div>
                  <div className="text-sm text-gray-600">First Priority</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Minimal</div>
                  <div className="text-sm text-gray-600">Downtime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/industries/industrial.webp"
                alt="Industrial facility"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industrial Facility Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of industrial plumbing and provide specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-brand-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold text-brand-primary mb-2">Our Solution:</h4>
                  <p className="text-gray-700">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industrial Facility Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing services designed specifically for industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industrial Facility Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all types of industrial facilities with specialized expertise for each environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {type.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{type.type}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us for Industrial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our industrial facility expertise delivers measurable benefits for safety compliance and operational efficiency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Industrial Facility Consultation"
              subtitle="Get a customized plumbing solution for your industrial facility that prioritizes safety compliance and operational efficiency."
              showServiceSelection={true}
              showUrgencyLevel={false}
            />
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
    </>
  )
}
