import HeroSection from '@/components/HeroSection'
import IndustryCard from '@/components/IndustryCard'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

const industries = [
  {
    title: "High-Rise Condos",
    description: "Specialized plumbing services for high-density residential properties with minimal disruption to residents and maximum efficiency.",
    icon: "🏢",
    href: "/industries/condos",
    challenges: [
      "High-density plumbing systems",
      "Minimal disruption requirements",
      "24/7 resident availability",
      "Complex vertical infrastructure"
    ],
    solutions: [
      "Scheduled maintenance programs",
      "Emergency response protocols",
      "Advanced diagnostic equipment",
      "Resident communication systems"
    ],
    image: "/assets/industries/condos.jpg"
  },
  {
    title: "Office Buildings",
    description: "Commercial-grade plumbing solutions for corporate environments, ensuring business continuity and operational efficiency.",
    icon: "🏢",
    href: "/industries/office",
    challenges: [
      "Business hour restrictions",
      "High-traffic facilities",
      "Complex HVAC integration",
      "Energy efficiency requirements"
    ],
    solutions: [
      "After-hours maintenance",
      "Rapid response protocols",
      "Energy-efficient upgrades",
      "Smart monitoring systems"
    ],
    image: "/assets/industries/office.jpg"
  },
  {
    title: "Schools & Universities",
    description: "Educational institution plumbing maintenance and upgrades designed for student safety and facility longevity.",
    icon: "🎓",
    href: "/industries/education",
    challenges: [
      "Student safety requirements",
      "Seasonal usage patterns",
      "Budget constraints",
      "Regulatory compliance"
    ],
    solutions: [
      "Safety-first protocols",
      "Preventive maintenance",
      "Cost-effective solutions",
      "Compliance documentation"
    ],
    image: "/assets/industries/education.jpg"
  },
  {
    title: "Healthcare Facilities",
    description: "Specialized plumbing for hospitals and medical centers with strict hygiene and safety requirements.",
    icon: "🏥",
    href: "/industries/healthcare",
    challenges: [
      "Sterile environment requirements",
      "Critical system reliability",
      "Regulatory compliance",
      "Emergency backup systems"
    ],
    solutions: [
      "Sterilization protocols",
      "Redundant systems",
      "Compliance expertise",
      "Emergency response"
    ],
    image: "/assets/industries/healthcare.jpg"
  },
  {
    title: "Retail & Commercial",
    description: "Shopping centers and retail space plumbing solutions optimized for customer experience and operational efficiency.",
    icon: "🛍️",
    href: "/industries/retail",
    challenges: [
      "High customer traffic",
      "Peak hour maintenance",
      "Aesthetic requirements",
      "Cost management"
    ],
    solutions: [
      "Off-peak scheduling",
      "Discrete service delivery",
      "Cost-effective solutions",
      "Customer communication"
    ],
    image: "/assets/industries/retail.jpg"
  },
  {
    title: "Industrial Facilities",
    description: "Heavy-duty plumbing for manufacturing and industrial sites with specialized equipment and safety requirements.",
    icon: "🏭",
    href: "/industries/industrial",
    challenges: [
      "Heavy-duty equipment",
      "Safety regulations",
      "Production downtime",
      "Specialized materials"
    ],
    solutions: [
      "Industrial-grade materials",
      "Safety compliance",
      "Minimal downtime protocols",
      "Specialized expertise"
    ],
    image: "/assets/industries/industrial.jpg"
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Industry-Specific Solutions"
        subtitle="Tailored plumbing services for every industry across the Greater Toronto Area"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Get Industry Quote"
        ctaHref="/contact"
        secondaryCtaText="View Our Services"
        secondaryCtaHref="/services"
      />

      {/* Industries Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each industry has unique plumbing challenges and requirements. Our specialized 
              expertise ensures optimal solutions for your specific sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                href={industry.href}
                challenges={industry.challenges}
                solutions={industry.solutions}
                image={industry.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep understanding of industry-specific requirements allows us to deliver 
              solutions that meet regulatory standards and operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📋
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Full compliance with industry regulations and safety standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Response</h3>
              <p className="text-gray-600">Quick response times tailored to your industry&apos;s operational needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔧
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Specialized Equipment</h3>
              <p className="text-gray-600">Industry-specific tools and equipment for optimal results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Analytics</h3>
              <p className="text-gray-600">Detailed reporting and analytics for operational optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we&apos;ve helped organizations across different industries solve their 
              plumbing challenges and improve operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🏢
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Condo Complex</h3>
              <p className="text-gray-600 mb-4">Reduced maintenance costs by 40% through our preventive maintenance program for a 500-unit high-rise.</p>
              <a href="/projects" className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                View Case Study →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🏥
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regional Hospital</h3>
              <p className="text-gray-600 mb-4">Implemented smart monitoring systems that reduced water usage by 25% while maintaining safety standards.</p>
              <a href="/projects" className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                View Case Study →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                🎓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">University Campus</h3>
              <p className="text-gray-600 mb-4">Upgraded aging infrastructure across 15 buildings, improving efficiency and reducing emergency calls by 60%.</p>
              <a href="/projects" className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                View Case Study →
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
              title="Industry-Specific Consultation"
              subtitle="Tell us about your industry and specific requirements. We&apos;ll provide a tailored solution that meets your unique needs."
              showServiceSelection={true}
              showUrgencyLevel={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  )
}
