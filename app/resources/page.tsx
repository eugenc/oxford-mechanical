import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

const resources = [
  {
    title: "Maintenance Guides",
    description: "Step-by-step maintenance instructions to keep your plumbing systems running efficiently.",
    icon: "📋",
    href: "/resources/maintenance-guides",
    category: "Guides",
    downloadCount: "2.5k downloads"
  },
  {
    title: "Emergency Procedures",
    description: "What to do during plumbing emergencies to minimize damage and ensure safety.",
    icon: "🚨",
    href: "/resources/emergency-procedures",
    category: "Safety",
    downloadCount: "1.8k downloads"
  },
  {
    title: "Water Saving Tips",
    description: "Eco-friendly water conservation strategies to reduce costs and environmental impact.",
    icon: "💧",
    href: "/resources/water-saving",
    category: "Sustainability",
    downloadCount: "3.2k downloads"
  },
  {
    title: "Case Studies",
    description: "Real solutions for real challenges - learn from our successful project implementations.",
    icon: "📊",
    href: "/case-studies",
    category: "Case Studies",
    downloadCount: "1.5k downloads"
  },
  {
    title: "Certifications",
    description: "Our professional credentials and licenses demonstrating our expertise and reliability.",
    icon: "🏅",
    href: "/certifications",
    category: "Credentials",
    downloadCount: "800 downloads"
  },
  {
    title: "Blog & Insights",
    description: "Expert advice and industry insights from our team of plumbing professionals.",
    icon: "📝",
    href: "/blog",
    category: "Articles",
    downloadCount: "5.1k views"
  }
]

const faqs = [
  {
    question: "What should I do in a plumbing emergency?",
    answer: "First, turn off the main water supply to prevent further damage. Then call our 24/7 emergency line at (416) 555-0123. We'll dispatch a technician immediately to assess and resolve the issue."
  },
  {
    question: "How often should I schedule maintenance?",
    answer: "We recommend quarterly maintenance for commercial properties and semi-annual maintenance for residential properties. However, the frequency may vary based on your specific system and usage patterns."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free, no-obligation estimates for all our services. Our estimates include detailed breakdowns of work required, materials needed, and timeline expectations."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed and insured since 2013. Our technicians are certified professionals with extensive training and experience in commercial and residential plumbing."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the entire Greater Toronto Area, including Toronto, Mississauga, Brampton, Markham, Vaughan, and surrounding municipalities. We specialize in high-rise condos, office buildings, and commercial properties."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency plumbing services. Our emergency response team is available around the clock to handle urgent plumbing issues that can't wait for regular business hours."
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Resources & Tools"
        subtitle="Expert guidance and helpful resources to keep your plumbing systems running smoothly"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Get Free Consultation"
        ctaHref="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Resources Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of guides, procedures, and insights to help you 
              maintain your plumbing systems and make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {resource.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.downloadCount}</span>
                  <a
                    href={resource.href}
                    className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 font-semibold"
                  >
                    Access Resource
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and policies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quick Maintenance Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps you can take to prevent common plumbing issues and extend the life of your systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Inspections</h3>
              <p className="text-gray-600">Check for leaks, corrosion, and unusual noises monthly</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🧽
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Drains</h3>
              <p className="text-gray-600">Use drain screens and avoid pouring grease down drains</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                🌡️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monitor Temperature</h3>
              <p className="text-gray-600">Keep pipes warm in winter to prevent freezing and bursting</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Service</h3>
              <p className="text-gray-600">Schedule regular maintenance with certified professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Need More Information?"
              subtitle="Can't find what you're looking for? Contact us for personalized assistance and expert advice."
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
