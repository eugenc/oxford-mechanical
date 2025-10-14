import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'

const services = [
  {
    title: "Leak Detection",
    description: "Advanced technology to locate hidden leaks without destructive testing.",
    icon: "🔍",
    methods: ["Acoustic detection", "Thermal imaging", "Moisture meters", "Pressure testing"]
  },
  {
    title: "Pipe Repair",
    description: "Professional repair services for all types of pipe materials and sizes.",
    icon: "🔧",
    methods: ["Epoxy lining", "Pipe replacement", "Joint repair", "Corrosion treatment"]
  },
  {
    title: "Fixture Repair",
    description: "Repair and replacement of faucets, toilets, and other plumbing fixtures.",
    icon: "🚿",
    methods: ["Faucet repair", "Toilet repair", "Shower repair", "Fixture replacement"]
  },
  {
    title: "Emergency Response",
    description: "24/7 emergency leak repair services to prevent water damage.",
    icon: "🚨",
    methods: ["Rapid response", "Emergency shut-off", "Temporary repairs", "Damage assessment"]
  }
]

const detectionMethods = [
  {
    title: "Acoustic Leak Detection",
    description: "Uses sensitive microphones to detect the sound of water escaping from pipes.",
    icon: "🎵"
  },
  {
    title: "Thermal Imaging",
    description: "Infrared cameras detect temperature differences caused by water leaks.",
    icon: "🌡️"
  },
  {
    title: "Moisture Detection",
    description: "Advanced moisture meters identify areas with elevated moisture levels.",
    icon: "💧"
  },
  {
    title: "Pressure Testing",
    description: "Systematic pressure testing to isolate and identify leak locations.",
    icon: "📊"
  }
]

const warningSigns = [
  "Unexplained increase in water bills",
  "Damp spots on walls or ceilings",
  "Musty odors in certain areas",
  "Low water pressure",
  "Sounds of running water when fixtures are off",
  "Cracks in foundation or walls"
]

export default function LeakRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Leak Detection & Repair"
        subtitle="Professional leak detection and repair services to prevent water damage and reduce costs"
        backgroundImage="/assets/services/leak-repair.jpg"
        ctaText="Schedule Inspection"
        ctaHref="/contact"
        secondaryCtaText="Emergency Repair"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Expert Leak Detection & Repair
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Water leaks can cause significant damage and increase your water bills. Our professional 
                leak detection and repair services use advanced technology to quickly locate and fix 
                leaks before they become costly problems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in both residential and commercial leak detection, offering non-invasive 
                methods that minimize disruption to your property while providing accurate results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">Non-Invasive</div>
                  <div className="text-sm text-gray-600">Detection Methods</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/services/leak-repair.jpg"
                alt="Leak detection equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Leak Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive leak detection and repair services for all types of plumbing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-2xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.methods.map((method, methodIndex) => (
                    <div key={methodIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Advanced Detection Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use state-of-the-art equipment and proven methods to accurately locate leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Signs You May Have a Leak
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early detection can save you thousands in water damage and repair costs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSigns.map((sign, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{sign}</span>
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
              title="Schedule Leak Detection"
              subtitle="Don't wait for water damage - contact us for professional leak detection and repair services."
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
