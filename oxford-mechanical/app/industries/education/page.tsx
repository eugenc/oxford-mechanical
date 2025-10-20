import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'

const challenges = [
  {
    title: "Student Safety Requirements",
    description: "Ensuring all plumbing systems meet strict safety standards for educational environments.",
    solution: "Safety-first protocols and regular compliance audits"
  },
  {
    title: "Seasonal Usage Patterns",
    description: "Managing systems during peak usage periods and extended breaks.",
    solution: "Seasonal maintenance programs and usage optimization"
  },
  {
    title: "Budget Constraints",
    description: "Delivering high-quality service within educational institution budgets.",
    solution: "Cost-effective solutions and flexible payment options"
  },
  {
    title: "Regulatory Compliance",
    description: "Meeting health department and educational facility regulations.",
    solution: "Full compliance documentation and regular inspections"
  }
]

const services = [
  {
    title: "Preventive Maintenance",
    description: "Comprehensive maintenance programs designed for educational facilities.",
    icon: "🛠️",
    features: ["Seasonal scheduling", "Student safety focus", "Budget optimization", "Compliance tracking"]
  },
  {
    title: "Emergency Response",
    description: "Rapid response for urgent plumbing issues that could disrupt classes.",
    icon: "🚨",
    features: ["Priority scheduling", "Minimal disruption", "Safety protocols", "Communication updates"]
  },
  {
    title: "System Upgrades",
    description: "Modern plumbing system upgrades for improved efficiency and safety.",
    icon: "⚡",
    features: ["Energy efficiency", "Water conservation", "Accessibility compliance", "Future-proofing"]
  },
  {
    title: "Summer Maintenance",
    description: "Comprehensive maintenance during summer breaks when disruption is minimal.",
    icon: "☀️",
    features: ["Full system inspection", "Major repairs", "System upgrades", "Deep cleaning"]
  }
]

const facilityTypes = [
  {
    type: "Elementary Schools",
    description: "Age-appropriate plumbing solutions for young students.",
    icon: "🎒"
  },
  {
    type: "High Schools",
    description: "High-traffic facilities with diverse plumbing needs.",
    icon: "🎓"
  },
  {
    type: "Universities",
    description: "Large-scale systems for campus-wide operations.",
    icon: "🏫"
  },
  {
    type: "Trade Schools",
    description: "Specialized plumbing for technical training facilities.",
    icon: "🔧"
  }
]

const benefits = [
  "Enhanced student safety",
  "Reduced operational costs",
  "Improved system reliability",
  "Compliance assurance",
  "Minimal class disruption",
  "Long-term cost savings"
]

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Educational Facility Plumbing"
        subtitle="Specialized plumbing services for schools and universities, ensuring student safety and facility longevity"
        backgroundImage="/assets/industries/education.jpg"
        ctaText="Get Education Quote"
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
                Education Facility Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Educational facilities have unique plumbing requirements that prioritize student safety, 
                system reliability, and cost-effectiveness. We understand the challenges of maintaining 
                plumbing systems in high-traffic educational environments.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our education-focused services are designed to work around academic schedules, ensuring 
                minimal disruption to learning while maintaining the highest standards of safety and compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Safety</div>
                  <div className="text-sm text-gray-600">First Priority</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Minimal</div>
                  <div className="text-sm text-gray-600">Class Disruption</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/industries/education.jpg"
                alt="Educational facility"
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
              Education Facility Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of educational facility plumbing and provide targeted solutions.
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
              Education Facility Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive plumbing services designed specifically for educational environments.
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
              Educational Facility Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve all types of educational facilities with specialized expertise for each environment.
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
              Why Choose Us for Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our education facility expertise delivers measurable benefits for student safety and operational efficiency.
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
              title="Education Facility Consultation"
              subtitle="Get a customized plumbing solution for your educational facility that prioritizes student safety and operational efficiency."
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
