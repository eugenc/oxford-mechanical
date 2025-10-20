import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'

const drainServices = [
  {
    title: "Hydro-Jetting",
    description: "High-pressure water jetting to remove stubborn blockages and buildup from your drain lines.",
    icon: "💨",
    features: [
      "Removes tough blockages",
      "Cleans pipe walls",
      "Eco-friendly process",
      "Long-lasting results"
    ]
  },
  {
    title: "Camera Inspection",
    description: "Advanced camera technology to identify the exact location and cause of drain problems.",
    icon: "📹",
    features: [
      "HD video inspection",
      "Problem identification",
      "Detailed reporting",
      "Cost estimation"
    ]
  },
  {
    title: "Sewer Line Cleaning",
    description: "Professional sewer line maintenance to prevent backups and maintain proper flow.",
    icon: "🚽",
    features: [
      "Main line cleaning",
      "Root removal",
      "Debris clearing",
      "Flow restoration"
    ]
  },
  {
    title: "Grease Trap Service",
    description: "Specialized cleaning for commercial grease traps to prevent clogs and odors.",
    icon: "🧽",
    features: [
      "Grease removal",
      "Odor elimination",
      "Regular maintenance",
      "Compliance support"
    ]
  }
]

const drainTypes = [
  {
    type: "Kitchen Drains",
    description: "Grease, food particles, and soap buildup removal",
    commonIssues: ["Slow drainage", "Foul odors", "Grease buildup"],
    solutions: ["Hydro-jetting", "Enzyme treatment", "Regular maintenance"]
  },
  {
    type: "Bathroom Drains",
    description: "Hair, soap scum, and mineral deposit removal",
    commonIssues: ["Hair clogs", "Soap buildup", "Mineral deposits"],
    solutions: ["Snake cleaning", "Chemical treatment", "Preventive care"]
  },
  {
    type: "Floor Drains",
    description: "Debris and sediment removal from floor drainage systems",
    commonIssues: ["Sediment buildup", "Debris clogs", "Standing water"],
    solutions: ["Vacuum extraction", "High-pressure cleaning", "System inspection"]
  },
  {
    type: "Main Sewer Lines",
    description: "Complete sewer line cleaning and maintenance",
    commonIssues: ["Tree root intrusion", "Pipe collapse", "Debris buildup"],
    solutions: ["Root cutting", "Line replacement", "Preventive maintenance"]
  }
]

export default function DrainCleaningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Professional Drain Cleaning Services"
        subtitle="Advanced hydro-jetting and camera inspection technology to clear even the toughest drain blockages"
        backgroundImage="/assets/services/drain-cleaning-service.jpg"
        ctaText="Schedule Service"
        ctaHref="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Drain Cleaning Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Drain Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use advanced technology and proven methods to clear drains and restore proper flow 
              to your plumbing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {drainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                
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

      {/* Drain Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Types of Drains We Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From kitchen sinks to main sewer lines, we handle all types of drain cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {drainTypes.map((drain, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{drain.type}</h3>
                <p className="text-gray-600 mb-6">{drain.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Common Issues:</h4>
                    <ul className="space-y-1">
                      {drain.commonIssues.map((issue, issueIndex) => (
                        <li key={issueIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                    <ul className="space-y-1">
                      {drain.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-3 h-3 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Drain Cleaning Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure thorough cleaning and long-lasting results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Inspection</h3>
                <p className="text-gray-600">Camera inspection to identify the problem and its location</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Evaluate the severity and determine the best cleaning method</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cleaning</h3>
                <p className="text-gray-600">Use appropriate equipment to clear the blockage completely</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Verification</h3>
                <p className="text-gray-600">Test the drain to ensure proper flow and provide recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Schedule Drain Cleaning Service"
              subtitle="Book your drain cleaning service today. We'll restore proper flow to your drains and prevent future blockages."
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
