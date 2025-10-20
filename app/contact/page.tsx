import HeroSection from '@/components/HeroSection'
import PropertyTypeSelector from '@/components/PropertyTypeSelector'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'

const contactInfo = [
  {
    title: "Main Office",
    address: "1111 Finch West, Toronto, ON M3J 2P5",
    phone: "(416) 555-0123",
    email: "info@oxfordmechanical.ca",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM"
  },
  {
    title: "Service Hours",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM",
    description: "Regular business hours and emergency availability",
    detailedHours: [
      { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
      { day: "Sunday", hours: "Emergency Only" },
      { day: "Emergency Service", hours: "24/7 Available" }
    ]
  },
  {
    title: "Service Areas",
    areas: [
      "Toronto",
      "Mississauga", 
      "Brampton",
      "Markham",
      "Vaughan",
      "Richmond Hill"
    ],
    description: "Serving the entire Greater Toronto Area"
  }
]


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch for professional plumbing services across the Greater Toronto Area"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Call Now"
        ctaHref="tel:+14165550123"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for all your plumbing needs. We&apos;re here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                
                {info.address && (
                  <div className="mb-4">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-brand-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600">{info.address}</p>
                    </div>
                  </div>
                )}

                {info.phone && (
                  <div className="mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${info.phone}`} className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                        {info.phone}
                      </a>
                    </div>
                  </div>
                )}

                {info.email && (
                  <div className="mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${info.email}`} className="text-brand-primary hover:text-brand-primary/80 font-semibold">
                        {info.email}
                      </a>
                    </div>
                  </div>
                )}

                {info.hours && (
                  <div className="mb-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-600">{info.hours}</p>
                    </div>
                  </div>
                )}

                {info.detailedHours && (
                  <div className="mb-4">
                    <div className="space-y-2">
                      {info.detailedHours.map((schedule, scheduleIndex) => (
                        <div key={scheduleIndex} className="flex justify-between items-center py-1">
                          <span className="text-sm font-medium text-gray-700">{schedule.day}</span>
                          <span className="text-sm text-gray-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {info.description && (
                  <p className="text-gray-600 mb-4">{info.description}</p>
                )}

                {info.areas && (
                  <div>
                    <p className="text-gray-600 mb-2">{info.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {info.areas.map((area, areaIndex) => (
                        <span key={areaIndex} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enhanced Free Inspection Section - Optimized for Conversion */}
      <section 
        className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
        role="region"
        aria-label="Free inspection booking section"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🔍</span>
              <span className="text-sm font-medium text-brand-ink">Free Property Assessment</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Schedule Your Free Inspection
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Get a comprehensive property inspection for your condo or high-rise building. 
              Our detailed assessment includes property-wide inspection, detailed reports, and complete cost estimation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Enhanced Benefits & Trust Elements */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Value Proposition */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-brand-ink mb-4">What You Get</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📋</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-ink mb-2">Property-Wide Inspection</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Comprehensive assessment of all plumbing systems, fixtures, and infrastructure</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📊</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-ink mb-2">Detailed Assessment Report</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Complete documentation with photos, findings, and expert recommendations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">💰</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-ink mb-2">Complete Cost Estimation</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">Transparent pricing for all recommended services with no hidden fees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
                  <div className="text-sm text-gray-600">Properties Inspected</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">$0</div>
                  <div className="text-sm text-gray-600">No Cost to You</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium mb-4 leading-relaxed">
                    &ldquo;The free inspection saved us thousands. They identified issues we never knew existed and provided a clear roadmap for maintenance.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">SM</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Mitchell</div>
                      <div className="text-sm opacity-90">Property Manager, Downtown Condo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Enhanced Form */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden order-1 lg:order-2">
              {/* Form header - Hat design */}
              <div className="bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-t-3xl p-6 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute top-2 left-2 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
                
                <div className="relative z-10 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Text content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Get In Touch</h3>
                    <p className="text-white/90 text-sm">Ready to schedule your free inspection? Contact us today!</p>
                  </div>
                </div>
              </div>
              
              {/* Form content */}
              <div className="p-8 lg:p-10">

              <form className="space-y-6" role="form" aria-label="Free inspection request form">
                {/* Personal Information Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Contact Information</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                        placeholder="Your full name"
                        required
                        autoComplete="name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                        placeholder="(416) 555-0123"
                        required
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                      placeholder="your.email@company.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Property Information Section */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Property Information</h4>
                  
                  <div>
                    <label htmlFor="property-address" className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="property-address"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                      placeholder="Full property address"
                      required
                      autoComplete="street-address"
                    />
                  </div>
                </div>
                
                <PropertyTypeSelector />
                
                {/* Enhanced CTA Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white text-center py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-brand-primary/25 flex items-center justify-center gap-3"
                >
                  <span>📅</span>
                  <span>Schedule Free Inspection</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>

              {/* Form footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24hr Response</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  )
}
