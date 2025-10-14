import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'

const services = [
  {
    title: "Emergency Services",
    description: "24/7 emergency response for urgent plumbing issues that can&apos;t wait. Our certified technicians are ready to respond to your call anytime, anywhere in the GTA.",
    icon: "🚨",
    href: "/services/emergency",
    features: [
      "24/7 availability",
      "Rapid response time",
      "Certified technicians",
      "Emergency equipment"
    ],
    image: "/assets/services/emergency-service.jpg"
  },
  {
    title: "Drain Cleaning",
    description: "Professional drain cleaning and sewer maintenance using advanced hydro-jetting technology. We clear even the toughest blockages safely and effectively.",
    icon: "🚿",
    href: "/drain-cleaning",
    features: [
      "Hydro-jetting technology",
      "Camera inspection included",
      "Preventive maintenance",
      "Eco-friendly solutions"
    ],
    image: "/assets/services/drain-cleaning.jpg"
  },
  {
    title: "Camera Inspection",
    description: "Advanced diagnostic technology for accurate problem identification. Our high-definition cameras provide detailed insights into your plumbing system&apos;s condition.",
    icon: "📹",
    href: "/services/camera-inspection",
    features: [
      "HD camera technology",
      "Detailed reporting",
      "Problem identification",
      "Cost estimation"
    ],
    image: "/assets/services/camera-inspection.jpg"
  },
  {
    title: "Leak Repair",
    description: "Comprehensive leak investigation and precision repair services. We locate and fix leaks quickly to prevent water damage and reduce costs.",
    icon: "🔧",
    href: "/services/leak-repair",
    features: [
      "Leak detection technology",
      "Non-invasive methods",
      "Precision repairs",
      "Water damage prevention"
    ],
    image: "/assets/services/leak-repair.jpg"
  },
  {
    title: "Maintenance",
    description: "Preventative maintenance programs to avoid costly repairs. Our scheduled maintenance keeps your plumbing systems running efficiently year-round.",
    icon: "🛠️",
    href: "/services/maintenance",
    features: [
      "Scheduled maintenance",
      "System optimization",
      "Cost savings",
      "Extended equipment life"
    ],
    image: "/assets/services/maintenance.jpg"
  },
  {
    title: "Water Saving Solutions",
    description: "Eco-friendly upgrades and water conservation solutions. Reduce your water bills and environmental impact with our sustainable plumbing solutions.",
    icon: "💧",
    href: "/services/water-saving",
    features: [
      "Water-efficient fixtures",
      "Smart monitoring systems",
      "Cost reduction",
      "Environmental benefits"
    ],
    image: "/assets/services/water-saving.jpg"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Professional Plumbing Services"
        subtitle="Comprehensive plumbing solutions for commercial and residential properties across the Greater Toronto Area"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Get Free Quote"
        ctaHref="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventive maintenance, we provide complete plumbing solutions 
              tailored to your specific needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                features={service.features}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Oxford Mechanical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience serving the GTA, we&apos;ve built our reputation on 
              reliability, expertise, and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🏆
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured since 2013 with comprehensive coverage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-600">Round-the-clock emergency response for urgent plumbing issues</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                💯
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction</h3>
              <p className="text-gray-600">Guaranteed satisfaction with our workmanship and service quality</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔧
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with extensive training and experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Serving the Greater Toronto Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive plumbing services across the GTA, specializing in 
              high-rise condos, office buildings, and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Rise Condos</h3>
              <p className="text-gray-600 mb-4">Specialized services for high-density residential properties with minimal disruption to residents.</p>
              <a href="/industries/condos" className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Buildings</h3>
              <p className="text-gray-600 mb-4">Commercial-grade solutions for corporate environments and business facilities.</p>
              <a href="/industries/office" className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🎓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Facilities</h3>
              <p className="text-gray-600 mb-4">Specialized plumbing maintenance for schools and universities across the GTA.</p>
              <a href="/industries/education" className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Ready to Get Started?"
              subtitle="Contact us today for a free consultation and quote. Our team is ready to help with all your plumbing needs."
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
