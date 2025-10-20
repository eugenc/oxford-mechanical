import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import FallbackImage from '@/components/FallbackImage'

const challenges = [
  {
    title: "Sterile Environment Requirements",
    description: "Maintaining sterile conditions while performing plumbing work in healthcare facilities.",
    solution: "Specialized sterilization protocols and containment procedures"
  },
  {
    title: "Critical System Reliability",
    description: "Ensuring uninterrupted water supply for patient care and medical equipment.",
    solution: "Redundant systems and emergency backup protocols"
  },
  {
    title: "Regulatory Compliance",
    description: "Meeting strict health department and healthcare facility regulations.",
    solution: "Full compliance expertise and documentation support"
  },
  {
    title: "Emergency Backup Systems",
    description: "Maintaining backup systems for critical healthcare operations.",
    solution: "Comprehensive backup system maintenance and testing"
  }
]

const services = [
  {
    title: "Emergency Response",
    description: "24/7 emergency service with priority response for healthcare facilities.",
    icon: "🚨",
    features: ["Priority scheduling", "Sterile protocols", "Backup systems", "Compliance documentation"]
  },
  {
    title: "Preventive Maintenance",
    description: "Comprehensive maintenance programs designed for healthcare environments.",
    icon: "🛠️",
    features: ["Sterilization procedures", "Infection control", "System redundancy", "Compliance tracking"]
  },
  {
    title: "System Upgrades",
    description: "Modern plumbing system upgrades meeting healthcare standards.",
    icon: "⚡",
    features: ["Healthcare-grade materials", "Sterile systems", "Backup integration", "Compliance certification"]
  },
  {
    title: "Water Quality Management",
    description: "Specialized water treatment and quality management for healthcare use.",
    icon: "💧",
    features: ["Water testing", "Treatment systems", "Quality monitoring", "Compliance reporting"]
  }
]

const facilityTypes = [
  {
    type: "Hospitals",
    description: "Large-scale medical facilities with complex plumbing systems.",
    icon: "🏥"
  },
  {
    type: "Medical Centers",
    description: "Outpatient medical facilities with specialized requirements.",
    icon: "🏥"
  },
  {
    type: "Dental Offices",
    description: "Dental practices with specific plumbing and water quality needs.",
    icon: "🦷"
  },
  {
    type: "Long-term Care",
    description: "Nursing homes and assisted living facilities.",
    icon: "👴"
  }
]

const benefits = [
  "Enhanced patient safety",
  "Regulatory compliance",
  "System reliability",
  "Infection control",
  "Emergency preparedness",
  "Cost-effective maintenance"
]

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Healthcare Facility Plumbing"
        subtitle="Specialized plumbing services for hospitals and medical centers with strict hygiene and safety requirements"
        backgroundImage="/assets/industries/healthcare.jpg"
        ctaText="Get Healthcare Quote"
        ctaHref="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
        className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
      />

      {/* Industry Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Healthcare Facility Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Healthcare facilities require the highest standards of plumbing service, with strict 
                attention to hygiene, safety, and regulatory compliance. We understand the critical 
                nature of healthcare plumbing systems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our healthcare services prioritize patient safety, system reliability, and compliance 
                with all healthcare regulations and standards.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Sterile</div>
                  <div className="text-sm text-gray-600">Protocols</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Compliance</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <FallbackImage
                src="/assets/industries/healthcare.jpg"
                alt="Healthcare facility"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
                fallbackIcon="🏥"
                fallbackText="Healthcare Facility"
                fallbackSubtext="Professional medical environment"
                fallbackBg="from-blue-100 to-blue-200"
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
              Healthcare Facility Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of healthcare facility plumbing and provide specialized solutions.
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
              Healthcare Facility Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing services designed specifically for healthcare environments.
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
              Healthcare Facility Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all types of healthcare facilities with specialized expertise for each environment.
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
              Why Choose Us for Healthcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our healthcare facility expertise delivers measurable benefits for patient safety and operational compliance.
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
              title="Healthcare Facility Consultation"
              subtitle="Get a customized plumbing solution for your healthcare facility that prioritizes patient safety and regulatory compliance."
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
