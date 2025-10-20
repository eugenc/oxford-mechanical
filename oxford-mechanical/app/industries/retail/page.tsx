import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'

const challenges = [
  {
    title: "High Customer Traffic",
    description: "Managing plumbing systems under constant use by customers and staff.",
    solution: "Robust systems designed for high-traffic environments"
  },
  {
    title: "Peak Hour Maintenance",
    description: "Scheduling maintenance during off-peak hours to minimize customer impact.",
    solution: "Flexible scheduling and rapid service protocols"
  },
  {
    title: "Aesthetic Requirements",
    description: "Maintaining clean, attractive facilities that enhance customer experience.",
    solution: "Discrete service delivery and aesthetic considerations"
  },
  {
    title: "Cost Management",
    description: "Delivering quality service within retail business budget constraints.",
    solution: "Cost-effective solutions and flexible payment options"
  }
]

const services = [
  {
    title: "Emergency Response",
    description: "Rapid response for plumbing emergencies that could impact business operations.",
    icon: "🚨",
    features: ["Priority scheduling", "Minimal disruption", "Business continuity", "Customer communication"]
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled maintenance programs designed around retail operations.",
    icon: "🛠️",
    features: ["Off-peak scheduling", "Cost optimization", "System reliability", "Customer satisfaction"]
  },
  {
    title: "System Upgrades",
    description: "Modern plumbing system upgrades for improved efficiency and customer experience.",
    icon: "⚡",
    features: ["Customer-focused design", "Energy efficiency", "Water conservation", "Aesthetic appeal"]
  },
  {
    title: "Food Service Support",
    description: "Specialized plumbing services for restaurants and food service areas.",
    icon: "🍽️",
    features: ["Grease trap service", "Commercial equipment", "Health compliance", "Rapid service"]
  }
]

const retailTypes = [
  {
    type: "Shopping Centers",
    description: "Large retail complexes with diverse plumbing needs.",
    icon: "🏬"
  },
  {
    type: "Restaurants",
    description: "Food service establishments with specialized plumbing requirements.",
    icon: "🍕"
  },
  {
    type: "Retail Stores",
    description: "Individual retail stores and boutiques.",
    icon: "🛍️"
  },
  {
    type: "Entertainment Venues",
    description: "Movie theaters, arcades, and entertainment facilities.",
    icon: "🎬"
  }
]

const benefits = [
  "Enhanced customer experience",
  "Reduced operational costs",
  "Improved system reliability",
  "Minimal business disruption",
  "Aesthetic maintenance",
  "Cost-effective solutions"
]

export default function RetailPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Retail & Commercial Plumbing"
        subtitle="Shopping centers and retail space plumbing solutions optimized for customer experience and operational efficiency"
        backgroundImage="/assets/industries/retail.jpg"
        ctaText="Get Retail Quote"
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
                Retail & Commercial Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Retail environments require plumbing services that prioritize customer experience, 
                operational efficiency, and cost-effectiveness. We understand the unique demands 
                of retail and commercial spaces.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our retail services are designed to work around customer traffic patterns, ensuring 
                minimal disruption to business operations while maintaining the highest standards 
                of service quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Customer</div>
                  <div className="text-sm text-gray-600">Experience Focus</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Minimal</div>
                  <div className="text-sm text-gray-600">Business Disruption</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/industries/retail.jpg"
                alt="Retail shopping center"
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
              Retail & Commercial Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of retail plumbing and provide customer-focused solutions.
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
              Retail & Commercial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing services designed specifically for retail and commercial environments.
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

      {/* Retail Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Retail & Commercial Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all types of retail and commercial facilities with specialized expertise for each environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailTypes.map((type, index) => (
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
              Why Choose Us for Retail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our retail and commercial expertise delivers measurable benefits for customer experience and operational efficiency.
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
              title="Retail & Commercial Consultation"
              subtitle="Get a customized plumbing solution for your retail or commercial facility that prioritizes customer experience and operational efficiency."
              showServiceSelection={true}
              showUrgencyLevel={false}
            />
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  )
}
