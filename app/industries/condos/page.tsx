import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'

const condoChallenges = [
  {
    title: "High-Density Systems",
    description: "Complex plumbing systems serving hundreds of units with interconnected water and waste lines.",
    icon: "🏢",
    solutions: [
      "System mapping and documentation",
      "Preventive maintenance programs",
      "Emergency response protocols",
      "Resident communication systems"
    ]
  },
  {
    title: "Minimal Disruption",
    description: "Maintaining service while minimizing impact on residents' daily lives and routines.",
    icon: "🔇",
    solutions: [
      "Scheduled maintenance windows",
      "Advance notice systems",
      "Alternative service arrangements",
      "Resident coordination"
    ]
  },
  {
    title: "Vertical Infrastructure",
    description: "Managing plumbing systems across multiple floors with complex pressure and flow requirements.",
    icon: "📈",
    solutions: [
      "Pressure testing and balancing",
      "Pump system maintenance",
      "Flow optimization",
      "System monitoring"
    ]
  },
  {
    title: "24/7 Availability",
    description: "Ensuring residents have access to plumbing services at all times, including emergencies.",
    icon: "⏰",
    solutions: [
      "24/7 emergency response",
      "On-site maintenance teams",
      "Remote monitoring systems",
      "Quick response protocols"
    ]
  }
]

const condoServices = [
  {
    title: "Preventive Maintenance",
    description: "Regular maintenance programs to prevent costly repairs and ensure system reliability.",
    features: [
      "Quarterly inspections",
      "System testing",
      "Component replacement",
      "Performance optimization"
    ]
  },
  {
    title: "Emergency Response",
    description: "Rapid response to plumbing emergencies with minimal disruption to residents.",
    features: [
      "24/7 availability",
      "Rapid response times",
      "Emergency repairs",
      "Damage prevention"
    ]
  },
  {
    title: "System Upgrades",
    description: "Modernization of aging plumbing systems to improve efficiency and reliability.",
    features: [
      "Energy-efficient fixtures",
      "Smart monitoring systems",
      "Water conservation measures",
      "System integration"
    ]
  },
  {
    title: "Resident Services",
    description: "Individual unit plumbing services for residents while maintaining building systems.",
    features: [
      "Unit inspections",
      "Fixture repairs",
      "Leak detection",
      "Maintenance coordination"
    ]
  }
]

const condoBenefits = [
  {
    title: "Reduced Maintenance Costs",
    description: "Preventive maintenance programs reduce emergency repairs by up to 60%",
    icon: "💰"
  },
  {
    title: "Improved Resident Satisfaction",
    description: "Reliable plumbing services enhance resident experience and retention",
    icon: "😊"
  },
  {
    title: "Extended System Life",
    description: "Proper maintenance extends plumbing system life by 30-50%",
    icon: "⏳"
  },
  {
    title: "Compliance Assurance",
    description: "Ensure compliance with building codes and health regulations",
    icon: "✅"
  }
]

export default function CondosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="High-Rise Condo Plumbing Services"
        subtitle="Specialized plumbing solutions for high-density residential properties with minimal disruption to residents"
        backgroundImage="/assets/industries/condos.jpg"
        ctaText="Get Condo Quote"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services"
      />

      {/* Condo Challenges */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Unique Condo Plumbing Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-rise condominiums present unique plumbing challenges that require specialized 
              expertise and tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {condoChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {challenge.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 mb-6">{challenge.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {challenge.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Condo Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Specialized Condo Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive services are designed specifically for high-rise condominium properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {condoServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
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
              Benefits for Condo Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized condo services deliver measurable benefits for property managers and residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {condoBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we helped a downtown Toronto condo complex improve their plumbing systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Downtown Condo Complex</h3>
                  <p className="text-gray-600 mb-6">
                    A 500-unit high-rise condominium in downtown Toronto was experiencing frequent 
                    plumbing emergencies and high maintenance costs. The property management team 
                    needed a comprehensive solution.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenges:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Frequent emergency calls</li>
                        <li>• High maintenance costs</li>
                        <li>• Resident complaints</li>
                        <li>• Aging infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">40%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">0</div>
                      <div className="text-sm text-gray-600">Emergency Calls</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">6</div>
                      <div className="text-sm text-gray-600">Months</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Preventive maintenance program</li>
                      <li>• System upgrades and modernization</li>
                      <li>• 24/7 emergency response</li>
                      <li>• Resident communication system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Condo Plumbing Consultation"
              subtitle="Get a customized plumbing solution for your condominium property. We'll assess your needs and provide a comprehensive service plan."
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
