import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/seo'

export const metadata = pageMetadata.office()

const challenges = [
  {
    title: "Business Hour Restrictions",
    description: "Minimizing disruption during peak business hours while maintaining service quality.",
    solution: "After-hours and weekend service scheduling"
  },
  {
    title: "High-Traffic Facilities",
    description: "Managing plumbing systems under constant use by employees and visitors.",
    solution: "Redundant systems and rapid response protocols"
  },
  {
    title: "Complex HVAC Integration",
    description: "Coordinating plumbing systems with building HVAC and mechanical systems.",
    solution: "Integrated system design and maintenance"
  },
  {
    title: "Energy Efficiency Requirements",
    description: "Meeting strict energy efficiency standards and sustainability goals.",
    solution: "Smart monitoring and water conservation systems"
  }
]

const services = [
  {
    title: "Emergency Response",
    description: "24/7 emergency service with guaranteed response times for business-critical issues.",
    icon: "🚨",
    features: ["Rapid response team", "Business continuity planning", "Minimal disruption protocols"]
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs designed around your business operations.",
    icon: "🛠️",
    features: ["Flexible scheduling", "Predictive maintenance", "System optimization"]
  },
  {
    title: "System Upgrades",
    description: "Modern plumbing system upgrades for improved efficiency and reliability.",
    icon: "⚡",
    features: ["Energy-efficient fixtures", "Smart monitoring", "Water conservation"]
  },
  {
    title: "Compliance Support",
    description: "Ensuring compliance with building codes and health regulations.",
    icon: "📋",
    features: ["Code compliance", "Health department requirements", "Documentation support"]
  }
]

const officeTypes = [
  {
    type: "Corporate Headquarters",
    description: "Large-scale plumbing systems for corporate office buildings.",
    icon: "🏢"
  },
  {
    type: "Medical Office Buildings",
    description: "Specialized plumbing for medical and dental offices.",
    icon: "🏥"
  },
  {
    type: "Law Firms",
    description: "Professional office environments with specific requirements.",
    icon: "⚖️"
  },
  {
    type: "Financial Centers",
    description: "High-rise financial district buildings with complex systems.",
    icon: "💰"
  }
]

const benefits = [
  "Minimized business disruption",
  "Improved system reliability",
  "Reduced operational costs",
  "Enhanced tenant satisfaction",
  "Compliance assurance",
  "24/7 emergency support"
]

export default function OfficeBuildingsPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: 'Office Building Plumbing Services',
          description: 'Commercial-grade plumbing solutions for corporate environments and business facilities.',
          url: 'https://oxfordmechanical.ca/industries/office',
        }}
        pathname="/industries/office"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Office Building Plumbing Services"
        subtitle="Specialized plumbing solutions for corporate environments, ensuring business continuity and operational efficiency"
        backgroundImage="/assets/industries/office.jpg"
        ctaText="Get Office Quote"
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
                Office Building Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Office buildings present unique plumbing challenges that require specialized expertise. 
                From high-traffic restrooms to complex mechanical systems, we understand the demands 
                of commercial office environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our office building services are designed to minimize business disruption while 
                maintaining the highest standards of service quality and system reliability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Minimal</div>
                  <div className="text-sm text-gray-600">Business Disruption</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/industries/office.jpg"
                alt="Modern office building"
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
              Office Building Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of office building plumbing and provide targeted solutions.
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
              Office Building Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing services designed specifically for office environments.
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

      {/* Office Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Office Building Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all types of office buildings with specialized expertise for each environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeTypes.map((type, index) => (
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
              Why Choose Us for Office Buildings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our office building expertise delivers measurable benefits for your business operations.
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
              title="Office Building Consultation"
              subtitle="Get a customized plumbing solution for your office building that minimizes disruption and maximizes efficiency."
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
