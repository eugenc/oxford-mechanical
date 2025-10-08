import Navigation from '@/components/Navigation'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink via-brand-ink to-gray-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/95 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-brand-accent rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-5xl">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-brand-accent">🏅</span>
                <span className="text-sm font-medium">Licensed Since 2013</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-brand-accent">🛡️</span>
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <span className="text-brand-accent">⭐</span>
                <span className="text-sm font-medium">100% Satisfaction</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8">
              <span className="block text-white mb-2">Commercial Plumbing</span>
              <span className="block text-brand-accent text-4xl md:text-5xl lg:text-6xl font-medium">Services for Toronto & GTA</span>
            </h1>
            
            {/* Description */}
            <div className="max-w-3xl mb-12">
              <p className="text-xl md:text-2xl text-gray-100 mb-4 leading-relaxed">
                24/7 emergency response, drain cleaning, and maintenance services.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Licensed & insured since 2013 with 100% satisfaction guarantee.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group bg-brand-primary hover:bg-brand-primary-600 text-white inline-flex items-center justify-center px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="mr-3">Get Free Inspection</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 inline-flex items-center justify-center px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="mr-3">View Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-trust rounded-full px-4 py-2 border border-brand-primary/20 mb-6 trust-badge-pulse">
              <span className="text-brand-primary">✓</span>
              <span className="text-sm font-medium text-brand-ink">Trusted & Certified</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Licensed, Insured & 
              <span className="text-brand-primary block">Certified Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Serving the Greater Toronto Area with the highest standards of professionalism and safety since 2013.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Licensed Since 2013",
                description: "Fully licensed by the Ontario College of Trades with continuous education and certification",
                highlight: "11+ Years",
                bgImage: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              },
              {
                title: "Fully Insured",
                description: "Comprehensive liability and workers' compensation coverage up to $2M",
                highlight: "Up to $2M",
                bgImage: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              },
              {
                title: "24/7 Emergency Response",
                description: "Round-the-clock availability for urgent plumbing needs across the GTA",
                highlight: "Always Available",
                bgImage: "bg-gradient-to-br from-red-900 via-red-800 to-red-900"
              },
              {
                title: "100% Satisfaction",
                description: "We stand behind our work with a complete satisfaction guarantee",
                highlight: "Guaranteed",
                bgImage: "bg-gradient-to-br from-green-900 via-green-800 to-green-900"
              }
            ].map((trust, index) => (
              <div 
                key={index} 
                className="trust-card group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-brand-primary/20"
              >
                {/* Background Image */}
                <div className={`absolute inset-0 ${trust.bgImage}`}>
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-brand-accent mb-3 uppercase tracking-wider">
                      {trust.highlight}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-brand-accent transition-colors duration-300">
                      {trust.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-sm">
                    {trust.description}
                  </p>
                </div>
                
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white/60 backdrop-blur-trust rounded-2xl px-8 py-6 border border-gray-200">
              <div className="trust-indicator flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Ontario Licensed</span>
              </div>
              <div className="trust-indicator flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">🛡️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Fully Insured</span>
              </div>
              <div className="trust-indicator flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm">⭐</span>
                </div>
                <span className="text-sm font-medium text-gray-700">5-Star Rated</span>
              </div>
              <div className="trust-indicator flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">🚨</span>
                </div>
                <span className="text-sm font-medium text-gray-700">24/7 Emergency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Plumbing Inspection Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-brand-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            {/* Background decorative elements inside the blue box */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-white rounded-full blur-xl"></div>
            </div>
            
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div className="text-left">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
                    Free Plumbing Inspections
                  </h2>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-blue-100 mb-6 leading-tight">
                    for Condos, Commercial, and High-Rise Buildings
                  </h3>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                    Prevent costly water damage and get peace of mind with a detailed plumbing report — at no cost.
                  </p>
                  
                  <div className="flex justify-start">
                    <Link
                      href="/inspection"
                      className="bg-white text-brand-primary hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-white/25"
                    >
                      <span className="mr-3">📅</span>
                      Book Your Free Inspection
                    </Link>
                  </div>
                </div>
                
                {/* Right Side - Supporting Points */}
                <div className="grid grid-cols-2 gap-10">
                  {/* Row 1 */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Detailed inspection & report</h3>
                    <div className="w-12 h-0.5 bg-white/60 mb-3"></div>
                    <p className="text-blue-100 text-base">Comprehensive assessment of all plumbing systems</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Photos, findings, and recommendations</h3>
                    <div className="w-12 h-0.5 bg-white/60 mb-3"></div>
                    <p className="text-blue-100 text-base">Visual documentation with expert analysis</p>
                  </div>
                  
                  {/* Row 2 */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Budget recommendations</h3>
                    <div className="w-12 h-0.5 bg-white/60 mb-3"></div>
                    <p className="text-blue-100 text-base">Cost estimates and priority-based repair planning</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Zero obligations or hidden fees</h3>
                    <div className="w-12 h-0.5 bg-white/60 mb-3"></div>
                    <p className="text-blue-100 text-base">Completely free with no strings attached</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">
                About Oxford Mechanical
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2013, Oxford Mechanical has been providing comprehensive plumbing services 
                for condos, high-rise buildings, and commercial properties across the Greater Toronto Area.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in minimizing disruptions while delivering superior service using 
                the latest tools and technology. Our commitment to excellence has made us the 
                trusted choice for property managers and building owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/projects"
                  className="bg-gray-100 text-brand-ink hover:bg-gray-200 inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-brand-ink mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">High-rise condos and commercial buildings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Emergency plumbing services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Preventative maintenance programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Water saving solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Advanced camera inspection technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Comprehensive Plumbing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventative maintenance, we provide specialized plumbing services for every industry and property type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Emergency Response",
                description: "24/7 emergency response for urgent plumbing issues affecting building operations",
                icon: "🚨",
                href: "/services/emergency",
                category: "Emergency Services"
              },
              {
                title: "Drain & Sewer Services",
                description: "Professional drain cleaning, camera inspection, and sewer line maintenance",
                icon: "🚿",
                href: "/drain-cleaning",
                category: "Maintenance"
              },
              {
                title: "Camera Inspection",
                description: "Advanced diagnostic technology for accurate problem identification",
                icon: "📹",
                href: "/services/camera-inspection",
                category: "Diagnostics"
              },
              {
                title: "Leak Detection & Repair",
                description: "Comprehensive leak investigation and precision repair services",
                icon: "🔧",
                href: "/services/leak-repair",
                category: "Repair Services"
              },
              {
                title: "Preventative Maintenance",
                description: "Scheduled maintenance programs to prevent costly emergency repairs",
                icon: "🛠️",
                href: "/services/maintenance",
                category: "Maintenance"
              },
              {
                title: "Water Conservation",
                description: "Eco-friendly upgrades and water-saving solutions for cost reduction",
                icon: "💧",
                href: "/services/water-saving",
                category: "Upgrades"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-xs font-semibold text-brand-primary bg-blue-50 px-3 py-1 rounded-full">
                    {service.category}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-brand-primary font-medium group-hover:text-brand-primary-600 transition-colors">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          {/* Industry Focus Section */}
          <div className="bg-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-brand-ink mb-4">
                Specialized Industry Expertise
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges of different property types and industries. Our specialized approach ensures optimal solutions for your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  industry: "High-Rise Condos",
                  description: "Minimal disruption maintenance for high-density residential properties",
                  icon: "🏢"
                },
                {
                  industry: "Office Buildings",
                  description: "Commercial-grade solutions for corporate environments",
                  icon: "🏢"
                },
                {
                  industry: "Healthcare Facilities",
                  description: "Specialized plumbing for hospitals and medical centers",
                  icon: "🏥"
                },
                {
                  industry: "Educational Institutions",
                  description: "School and university plumbing maintenance and upgrades",
                  icon: "🎓"
                },
                {
                  industry: "Retail & Commercial",
                  description: "Shopping centers and retail space plumbing solutions",
                  icon: "🛍️"
                },
                {
                  industry: "Industrial Facilities",
                  description: "Heavy-duty plumbing for manufacturing and industrial sites",
                  icon: "🏭"
                }
              ].map((industry, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="text-2xl mr-4">{industry.icon}</div>
                  <div>
                    <h4 className="font-semibold text-brand-ink mb-1">{industry.industry}</h4>
                    <p className="text-sm text-gray-600">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - 3D Carousel */}
      <TestimonialsCarousel />

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real solutions for real challenges. See how we've helped property managers and building owners across the GTA.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Downtown Condo Complex",
                challenge: "Recurring drain blockages affecting 200+ units",
                solution: "Comprehensive camera inspection and preventative maintenance program",
                result: "95% reduction in emergency calls",
                savings: "$50,000 annually",
                image: "🏢",
                category: "High-Rise Condos"
              },
              {
                title: "Corporate Office Tower",
                challenge: "Water pressure issues in upper floors",
                solution: "Complete water system analysis and pump upgrades",
                result: "Consistent pressure throughout building",
                savings: "$25,000 in avoided downtime",
                image: "🏢",
                category: "Office Buildings"
              },
              {
                title: "University Residence",
                challenge: "High water consumption and utility costs",
                solution: "Water-saving fixture upgrades and leak detection",
                result: "40% reduction in water usage",
                savings: "$75,000 annually",
                image: "🎓",
                category: "Education"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{caseStudy.image}</div>
                  <div className="text-xs font-semibold text-brand-primary bg-blue-50 px-3 py-1 rounded-full">
                    {caseStudy.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                  {caseStudy.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">Result:</h4>
                    <p className="text-sm text-gray-600">{caseStudy.result}</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                  <div className="text-lg font-bold text-green-700">Saved {caseStudy.savings}</div>
                  <div className="text-sm text-green-600">in operational costs</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="btn-primary inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Why Choose Oxford Mechanical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience, we've built a reputation for reliability, quality, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "24/7 Emergency Response",
                description: "Round-the-clock availability for urgent plumbing needs"
              },
              {
                title: "Licensed & Insured",
                description: "Fully licensed since 2013 with comprehensive insurance coverage"
              },
              {
                title: "100% Satisfaction Guarantee",
                description: "We stand behind our work with a complete satisfaction guarantee"
              },
              {
                title: "Free Building Inspections",
                description: "Complimentary property inspections to identify potential issues"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve the Greater Toronto Area with specialized expertise in high-rise and commercial properties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Greater Toronto Area (GTA)",
              "High-rise condos",
              "Office buildings",
              "Schools and universities",
              "Public buildings",
              "Residential properties",
              "Commercial complexes",
              "Industrial facilities"
            ].map((area, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Weekly inspiration and expert advice on plumbing maintenance and building management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Importance of Regular Plumbing Inspections for Condos",
                excerpt: "Learn why regular plumbing inspections are crucial for high-rise buildings and how they can prevent costly emergency repairs.",
                date: "December 15, 2024",
                readTime: "5 min read",
                href: "/blog/plumbing-inspections-condos"
              },
              {
                title: "Water Saving Solutions for Commercial Buildings",
                excerpt: "Discover eco-friendly plumbing upgrades that can reduce water consumption and lower utility costs for your property.",
                date: "December 8, 2024",
                readTime: "7 min read",
                href: "/blog/water-saving-solutions"
              },
              {
                title: "Emergency Plumbing: What to Do Before We Arrive",
                excerpt: "Essential steps to take during a plumbing emergency to minimize damage and ensure safety for building occupants.",
                date: "December 1, 2024",
                readTime: "4 min read",
                href: "/blog/emergency-plumbing-tips"
              }
            ].map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <span className="text-sm text-brand-primary font-medium">{post.date}</span>
                  <span className="text-sm text-gray-500 ml-2">• {post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-brand-primary font-medium group-hover:text-brand-primary-600 transition-colors">
                  Read More →
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-primary inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Loyalty & Cashback Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Loyalty & Cashback Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value our long-term clients with exclusive programs designed to save you money and provide additional benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">Cashback Program</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Earn cashback on all maintenance services and emergency repairs. 
                The more you use our services, the more you save.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• 2% cashback on all services</li>
                <li>• 5% cashback for annual contracts</li>
                <li>• 10% cashback for multi-property clients</li>
                <li>• Quarterly cashback payments</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">Loyalty Rewards</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Exclusive benefits for our valued clients including priority service, 
                discounted rates, and special maintenance programs.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Priority emergency response</li>
                <li>• 15% discount on preventative maintenance</li>
                <li>• Free annual building inspections</li>
                <li>• Extended warranty on all work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">
                Schedule Your Free Inspection
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get a comprehensive property inspection for your condo or high-rise building. 
                Our detailed assessment includes property-wide inspection, detailed reports, and complete cost estimation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">Property-Wide Inspection</h3>
                    <p className="text-gray-600 text-sm">Comprehensive assessment of all plumbing systems</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">Detailed Assessment Report</h3>
                    <p className="text-gray-600 text-sm">Complete documentation with photos and recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">Complete Cost Estimation</h3>
                    <p className="text-gray-600 text-sm">Transparent pricing for all recommended services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Full property address"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Tell us about your specific needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-center py-4 text-lg font-semibold rounded-xl"
                >
                  Schedule Free Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free building inspection or emergency service. 
            We're here to help with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-primary hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+1416-555-0123"
              className="bg-brand-primary-600 text-white hover:bg-brand-primary-600/90 border border-white/20 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Call Now: (416) 555-0123
            </Link>
          </div>
        </div>
      </section>

      {/* Floating CTA Section */}
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-sm">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-brand-ink mb-1">Need Emergency Service?</h3>
            <p className="text-sm text-gray-600">24/7 emergency response available</p>
          </div>
          <div className="space-y-2">
            <Link
              href="tel:+1416-555-0123"
              className="w-full btn-primary text-center py-2 text-sm font-semibold rounded-xl block"
            >
              Call Now: (416) 555-0123
            </Link>
            <Link
              href="/contact"
              className="w-full btn-secondary text-center py-2 text-sm font-semibold rounded-xl block"
            >
              Schedule Inspection
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-brand-ink text-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">OM</span>
                </div>
                <span className="ml-4 text-2xl font-display font-semibold">
                  Oxford Mechanical
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Professional plumbing services for Toronto and GTA. 
                Licensed, insured, and committed to excellence since 2013.
              </p>
              <div className="flex items-center space-x-4">
                <div className="trust-badge">
                  <span>🏅</span>
                  Licensed Since 2013
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/services/emergency" className="text-gray-300 hover:text-white transition-colors">Emergency Services</Link></li>
                <li><Link href="/drain-cleaning" className="text-gray-300 hover:text-white transition-colors">Drain Cleaning</Link></li>
                <li><Link href="/services/camera-inspection" className="text-gray-300 hover:text-white transition-colors">Camera Inspection</Link></li>
                <li><Link href="/services/leak-repair" className="text-gray-300 hover:text-white transition-colors">Leak Repair</Link></li>
                <li><Link href="/services/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
                <li><Link href="/services/water-saving" className="text-gray-300 hover:text-white transition-colors">Water Saving Solutions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Industries</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/industries/condos" className="text-gray-300 hover:text-white transition-colors">High-Rise Condos</Link></li>
                <li><Link href="/industries/office" className="text-gray-300 hover:text-white transition-colors">Office Buildings</Link></li>
                <li><Link href="/industries/education" className="text-gray-300 hover:text-white transition-colors">Schools & Universities</Link></li>
                <li><Link href="/industries/healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare Facilities</Link></li>
                <li><Link href="/industries/retail" className="text-gray-300 hover:text-white transition-colors">Retail & Commercial</Link></li>
                <li><Link href="/industries/industrial" className="text-gray-300 hover:text-white transition-colors">Industrial Facilities</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact & Resources</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-300 mb-2">1111 Finch West, Toronto</p>
                  <p className="text-gray-300 mb-2">info@oxfordmechanical.ca</p>
                  <p className="text-gray-300 mb-2">(416) 555-0123</p>
                  <p className="text-brand-accent font-medium">24/7 Emergency Service</p>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>&copy; 2024 Oxford Mechanical. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
