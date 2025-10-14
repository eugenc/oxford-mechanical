import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

const emergencyTypes = [
  {
    title: "Burst Pipe",
    description: "Immediate steps to take when a pipe bursts in your property.",
    icon: "💥",
    steps: [
      "Turn off main water supply immediately",
      "Turn off electricity if water is near electrical outlets",
      "Move valuables away from water",
      "Call emergency plumber immediately",
      "Take photos for insurance if safe to do so"
    ]
  },
  {
    title: "Severe Clog",
    description: "What to do when drains are completely blocked.",
    icon: "🚫",
    steps: [
      "Stop using all drains in the affected area",
      "Do not use chemical drain cleaners",
      "Try plunging gently to avoid damage",
      "Call professional plumber",
      "Avoid using toilets until resolved"
    ]
  },
  {
    title: "Water Heater Failure",
    description: "Emergency procedures for water heater malfunctions.",
    icon: "🔥",
    steps: [
      "Turn off gas/electricity to water heater",
      "Turn off water supply to heater",
      "Check for leaks around the unit",
      "Do not attempt repairs yourself",
      "Call emergency plumber immediately"
    ]
  },
  {
    title: "Sewer Backup",
    description: "Critical steps when dealing with sewer backup.",
    icon: "⚠️",
    steps: [
      "Evacuate the affected area immediately",
      "Do not use any drains or toilets",
      "Turn off main water supply if safe",
      "Call emergency plumber and health department",
      "Avoid contact with contaminated water"
    ]
  }
]

const emergencyContacts = [
  {
    title: "Oxford Mechanical Emergency",
    phone: "(416) 555-0123",
    description: "24/7 emergency plumbing service",
    available: "Always Available"
  },
  {
    title: "Water Emergency Shut-off",
    phone: "311",
    description: "City water emergency line",
    available: "24/7"
  },
  {
    title: "Gas Emergency",
    phone: "1-866-763-5427",
    description: "Enbridge gas emergency line",
    available: "24/7"
  }
]

const preventionTips = [
  "Know the location of your main water shut-off valve",
  "Keep emergency contact numbers easily accessible",
  "Regular maintenance prevents most emergencies",
  "Insulate pipes in winter to prevent freezing",
  "Have basic tools available (plunger, bucket, towels)",
  "Keep a flashlight and emergency kit ready"
]

export default function EmergencyProceduresPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Emergency Procedures"
        subtitle="What to do during plumbing emergencies to minimize damage and ensure safety"
        backgroundImage="/assets/resources/emergency.jpg"
        ctaText="Call Emergency Service"
        ctaHref="tel:+14165550123"
        secondaryCtaText="Download Guide"
        secondaryCtaHref="#emergency-guide"
      />

      {/* Emergency Procedures */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Emergency Response Procedures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick reference guide for common plumbing emergencies. Remember: safety first, then call professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="emergency-guide">
            {emergencyTypes.map((emergency, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {emergency.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{emergency.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{emergency.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Immediate Steps:</h4>
                  {emergency.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Emergency Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep these numbers handy for plumbing and utility emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{contact.title}</h3>
                <a 
                  href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
                  className="text-2xl font-bold text-brand-primary hover:text-brand-primary/80 mb-4 block"
                >
                  {contact.phone}
                </a>
                <p className="text-gray-600 mb-3">{contact.description}</p>
                <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full inline-block">
                  {contact.available}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Prevention is Key
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most emergencies can be prevented with proper maintenance and preparation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preventionTips.map((tip, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <svg className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{tip}</span>
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
              title="Emergency Service Request"
              subtitle="For immediate plumbing emergencies, call us directly. For non-emergency issues, use this form."
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
