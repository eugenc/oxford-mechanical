import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'

const emergencyServices = [
  {
    title: "Burst Pipe Repair",
    description: "Immediate response to burst pipes to prevent water damage and restore service quickly.",
    icon: "💥",
    responseTime: "30 minutes",
    features: [
      "Emergency shut-off",
      "Temporary repairs",
      "Permanent solutions",
      "Damage assessment"
    ]
  },
  {
    title: "Sewer Backup",
    description: "Professional sewer backup cleanup and repair to restore proper drainage and prevent health hazards.",
    icon: "🚽",
    responseTime: "45 minutes",
    features: [
      "Sewer line inspection",
      "Backup removal",
      "Sanitization",
      "Prevention measures"
    ]
  },
  {
    title: "Water Heater Failure",
    description: "Emergency water heater repair or replacement to restore hot water service for your property.",
    icon: "🔥",
    responseTime: "60 minutes",
    features: [
      "Diagnostic testing",
      "Emergency repairs",
      "Temporary solutions",
      "Replacement options"
    ]
  },
  {
    title: "Gas Leak Detection",
    description: "Critical gas leak detection and repair to ensure safety and prevent potential hazards.",
    icon: "⚠️",
    responseTime: "20 minutes",
    features: [
      "Gas leak detection",
      "Emergency shut-off",
      "Safety protocols",
      "Certified repairs"
    ]
  },
  {
    title: "Flooding Emergency",
    description: "Rapid response to flooding situations with water extraction and damage prevention.",
    icon: "🌊",
    responseTime: "30 minutes",
    features: [
      "Water extraction",
      "Source identification",
      "Damage prevention",
      "Restoration planning"
    ]
  },
  {
    title: "No Water Service",
    description: "Emergency diagnosis and repair for complete water service loss affecting your property.",
    icon: "🚰",
    responseTime: "45 minutes",
    features: [
      "System diagnosis",
      "Pressure testing",
      "Line repairs",
      "Service restoration"
    ]
  }
]

const emergencySteps = [
  {
    step: "1",
    title: "Call Immediately",
    description: "Call our 24/7 emergency line at (416) 555-0123. Our dispatcher will gather essential information and dispatch a technician."
  },
  {
    step: "2",
    title: "Safety First",
    description: "If there's a gas leak, evacuate immediately. For water emergencies, turn off the main water supply if safe to do so."
  },
  {
    step: "3",
    title: "Rapid Response",
    description: "Our certified technician will arrive within 30-60 minutes with all necessary equipment and parts."
  },
  {
    step: "4",
    title: "Assessment & Repair",
    description: "We'll assess the situation, implement temporary fixes if needed, and provide a permanent solution."
  }
]

export default function EmergencyServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="24/7 Emergency Plumbing Services"
        subtitle="When plumbing emergencies strike, we're here to help. Our certified technicians respond quickly to restore your service and prevent damage."
        backgroundImage="/assets/services/emergency-service.jpg"
        ctaText="Call Emergency Line"
        ctaHref="tel:+14165550123"
        secondaryCtaText="Get Free Quote"
        secondaryCtaHref="/contact"
      />

      {/* Emergency Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Emergency Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified technicians are equipped to handle any plumbing emergency, 
              from burst pipes to gas leaks, with rapid response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-700">Response Time:</span>
                    <span className="text-brand-primary font-bold">{service.responseTime}</span>
                  </div>
                </div>

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

      {/* Emergency Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What to Do in an Emergency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these steps to ensure your safety and minimize damage during a plumbing emergency.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emergencySteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Emergency Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When every minute counts, you need a reliable emergency plumbing service you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600">Average response time of 30-60 minutes across the GTA</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🛠️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Equipped</h3>
              <p className="text-gray-600">Our trucks carry all necessary parts and equipment for most repairs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Technicians</h3>
              <p className="text-gray-600">Licensed, insured, and experienced professionals you can trust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees - you&apos;ll know the cost before we start work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Emergency Service Request"
              subtitle="For urgent plumbing emergencies, call us immediately at (416) 555-0123. For non-emergency requests, use this form."
              showServiceSelection={true}
              showUrgencyLevel={true}
            />
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  )
}
