import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

const guides = [
  {
    title: "Monthly Maintenance Checklist",
    description: "Essential monthly tasks to keep your plumbing systems running smoothly.",
    icon: "📅",
    downloadUrl: "#",
    category: "Preventive"
  },
  {
    title: "Seasonal Maintenance Guide",
    description: "Season-specific maintenance tasks for optimal system performance.",
    icon: "🍂",
    downloadUrl: "#",
    category: "Seasonal"
  },
  {
    title: "Water Heater Maintenance",
    description: "Step-by-step guide to maintaining your water heater for maximum efficiency.",
    icon: "🔥",
    downloadUrl: "#",
    category: "Equipment"
  },
  {
    title: "Drain Care Guide",
    description: "How to prevent clogs and maintain healthy drains.",
    icon: "🚿",
    downloadUrl: "#",
    category: "Preventive"
  },
  {
    title: "Fixture Maintenance",
    description: "Maintaining faucets, toilets, and other fixtures for longevity.",
    icon: "🚰",
    downloadUrl: "#",
    category: "Equipment"
  },
  {
    title: "Emergency Shut-off Guide",
    description: "How to locate and use emergency shut-off valves in your property.",
    icon: "🚨",
    downloadUrl: "#",
    category: "Safety"
  }
]

const tips = [
  "Check for leaks monthly by monitoring your water bill",
  "Clean drains regularly with natural solutions",
  "Insulate pipes in winter to prevent freezing",
  "Test water pressure periodically",
  "Replace old fixtures with water-efficient models",
  "Schedule annual professional inspections"
]

export default function MaintenanceGuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Maintenance Guides"
        subtitle="Step-by-step maintenance instructions to keep your plumbing systems running efficiently"
        backgroundImage="/assets/resources/maintenance.jpg"
        ctaText="Download Guides"
        ctaHref="#guides"
        secondaryCtaText="Get Professional Service"
        secondaryCtaHref="/contact"
      />

      {/* Guides Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Free Maintenance Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive maintenance guides to keep your plumbing systems 
              in top condition and prevent costly repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="guides">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {guide.icon}
                  </div>
                  <span className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-6">{guide.description}</p>
                
                <a
                  href={guide.downloadUrl}
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center block"
                >
                  Download Guide
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quick Maintenance Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps you can take right now to improve your plumbing system&apos;s performance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Need Professional Maintenance?"
              subtitle="While these guides are helpful, nothing replaces professional maintenance. Contact us for comprehensive maintenance services."
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
