import Navigation from '@/components/Navigation'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import Tabs from '@/components/Tabs'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      <Navigation />
      
      {/* Hero Section - Enhanced for Performance & Accessibility */}
      <section 
        className="relative bg-gradient-to-br from-brand-ink via-brand-ink to-gray-900 text-white overflow-hidden min-h-[90vh] flex items-center"
        role="banner"
        aria-label="Hero section with main call-to-action"
      >
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

            {/* Main Headline - Optimized for SEO and Accessibility */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] mb-8">
              <span className="block text-white mb-2">Commercial Plumbing</span>
              <span className="block text-brand-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium">Services for Toronto & GTA</span>
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

            {/* CTA Buttons - Enhanced for Better UX and Accessibility */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group bg-brand-primary hover:bg-brand-primary-600 text-white inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-primary/50"
                aria-label="Get free plumbing inspection for your property"
              >
                <span className="mr-3">Get Free Inspection</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="View our comprehensive plumbing services"
              >
                <span className="mr-3">View Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

      {/* Trust & Certifications Section - Enhanced for Performance */}
      <section 
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden"
        role="region"
        aria-label="Trust and certifications"
      >
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
      <section className="py-24 bg-white relative overflow-hidden about-section">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="text-reveal">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ink mb-8 leading-tight">
                  About Oxford Mechanical
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mb-8"></div>
              </div>
              
              <div className="space-y-6 text-reveal">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Since 2013, Oxford Mechanical has been providing comprehensive plumbing services 
                  for condos, high-rise buildings, and commercial properties across the Greater Toronto Area.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We specialize in minimizing disruptions while delivering superior service using 
                  the latest tools and technology. Our commitment to excellence has made us the 
                  trusted choice for property managers and building owners.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/about"
                  className="group bg-brand-primary hover:bg-brand-primary-600 text-white inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 btn-enhanced"
                >
                  <span className="mr-3">Learn More About Us</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="group bg-gray-100 hover:bg-gray-200 text-brand-ink inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1 btn-enhanced"
                >
                  <span className="mr-3">View Our Projects</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right Content - Enhanced Expertise Box */}
            <div className="relative">
              <div className="expertise-box bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-24 h-24 bg-brand-primary rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-brand-accent rounded-full blur-xl"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-bold text-brand-ink mb-8 text-reveal">Our Expertise</h3>
                  
                  <div className="space-y-6">
                    {[
                      "High-rise condos and commercial buildings",
                      "Emergency plumbing services", 
                      "Preventative maintenance programs",
                      "Water saving solutions",
                      "Advanced camera inspection technology"
                    ].map((expertise, index) => (
                      <div key={index} className="flex items-center group expertise-item expertise-bullet">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mr-4 group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-lg text-gray-700 font-medium group-hover:text-brand-ink transition-colors duration-200">
                          {expertise}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-8 w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"></div>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-2 floating-badge">
                <div className="flex items-center gap-2">
                  <span className="text-brand-primary text-xl">🏅</span>
                  <span className="text-sm font-semibold text-brand-ink">Trusted Since 2013</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Optimized for Performance */}
      <section 
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
        role="region"
        aria-label="Our services"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🔧</span>
              <span className="text-sm font-medium text-brand-ink">Professional Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Comprehensive Plumbing Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From emergency repairs to preventative maintenance, we provide specialized plumbing services for every industry and property type.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {[
              {
                title: "Emergency Response",
                description: "24/7 emergency response for urgent plumbing issues affecting building operations",
                href: "/services/emergency",
                category: "Emergency Services",
                backgroundImage: "/app/public/assets/emergency-plumbing.jpg",
                fallbackBg: "bg-gradient-to-br from-red-500 to-red-600"
              },
              {
                title: "Drain & Sewer Services",
                description: "Professional drain cleaning, camera inspection, and sewer line maintenance",
                href: "/drain-cleaning",
                category: "Maintenance",
                backgroundImage: "/app/public/assets/drain-cleaning.jpg",
                fallbackBg: "bg-gradient-to-br from-blue-500 to-blue-600"
              },
              {
                title: "Camera Inspection",
                description: "Advanced diagnostic technology for accurate problem identification",
                href: "/services/camera-inspection",
                category: "Diagnostics",
                backgroundImage: "/app/public/assets/camera-inspection.jpg",
                fallbackBg: "bg-gradient-to-br from-purple-500 to-purple-600"
              },
              {
                title: "Leak Detection & Repair",
                description: "Comprehensive leak investigation and precision repair services",
                href: "/services/leak-repair",
                category: "Repair Services",
                backgroundImage: "/app/public/assets/leak-detection.jpg",
                fallbackBg: "bg-gradient-to-br from-orange-500 to-orange-600"
              },
              {
                title: "Preventative Maintenance",
                description: "Scheduled maintenance programs to prevent costly emergency repairs",
                href: "/services/maintenance",
                category: "Maintenance",
                backgroundImage: "/app/public/assets/preventative-maintenance.jpeg",
                fallbackBg: "bg-gradient-to-br from-green-500 to-green-600"
              },
              {
                title: "Water Conservation",
                description: "Eco-friendly upgrades and water-saving solutions for cost reduction",
                href: "/services/water-saving",
                category: "Upgrades",
                backgroundImage: "/app/public/assets/water-savings-solutions.webp",
                fallbackBg: "bg-gradient-to-br from-cyan-500 to-cyan-600"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="service-card group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-brand-primary/30 overflow-hidden will-change-transform min-h-[350px] sm:min-h-[400px] flex flex-col"
                aria-label={`Learn more about ${service.title} - ${service.description}`}
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Background fallback for when image doesn't load */}
                <div className={`absolute inset-0 ${service.fallbackBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Brand blue overlay with 55% opacity */}
                <div className="absolute inset-0 bg-brand-primary/55"></div>
                
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                
                {/* Content with glass effect */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Category badge */}
                  <div className="flex justify-end mb-6">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-2 rounded-full">
                      {service.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed mb-6 text-base">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Learn More link with enhanced styling */}
                    <div className="flex items-center text-white font-semibold group-hover:text-brand-accent transition-colors duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
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
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "High-Rise Condos",
                  description: "Minimal disruption maintenance for high-density residential properties",
                  image: "/app/public/assets/high-rise-condos.jpg",
                  fallbackBg: "bg-gradient-to-br from-blue-500 to-blue-600"
                },
                {
                  industry: "Office Buildings",
                  description: "Commercial-grade solutions for corporate environments",
                  image: "/app/public/assets/office-buildings.jpg",
                  fallbackBg: "bg-gradient-to-br from-gray-500 to-gray-600"
                },
                {
                  industry: "Healthcare Facilities",
                  description: "Specialized plumbing for hospitals and medical centers",
                  image: "/app/public/assets/healthcare-facilities.jpg",
                  fallbackBg: "bg-gradient-to-br from-red-500 to-red-600"
                },
                {
                  industry: "Educational Institutions",
                  description: "School and university plumbing maintenance and upgrades",
                  image: "/app/public/assets/educational-institutions.jpg",
                  fallbackBg: "bg-gradient-to-br from-green-500 to-green-600"
                },
                {
                  industry: "Retail & Commercial",
                  description: "Shopping centers and retail space plumbing solutions",
                  image: "/app/public/assets/retail-commercial.jpg",
                  fallbackBg: "bg-gradient-to-br from-purple-500 to-purple-600"
                },
                {
                  industry: "Industrial Facilities",
                  description: "Heavy-duty plumbing for manufacturing and industrial sites",
                  image: "/app/public/assets/industrial-facilities.jpg",
                  fallbackBg: "bg-gradient-to-br from-orange-500 to-orange-600"
                }
              ].map((industry, index) => (
                <div key={index} className="industry-card group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
                  <div className="flex h-full">
                    {/* Image section - 35% width */}
                    <div 
                      className="image-section w-[35%] relative overflow-hidden"
                      style={{
                        backgroundImage: `url(${industry.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Fallback background */}
                      <div className={`absolute inset-0 ${industry.fallbackBg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Brand blue overlay */}
                      <div className="image-overlay absolute inset-0 bg-brand-primary/40"></div>
                      
                      {/* Glass effect overlay */}
                      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Content section - 65% width */}
                    <div className="content-section flex-1 p-6 flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-primary transition-colors duration-300">
                        {industry.industry}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section - 3D Carousel with Performance Optimization */}
      <Suspense fallback={<div className="py-16 bg-gray-50"><div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center"><div className="animate-pulse">Loading testimonials...</div></div></div>}>
        <TestimonialsCarousel />
      </Suspense>

      {/* Success Stories Section - Enhanced for Performance */}
      <section 
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
        role="region"
        aria-label="Success stories and case studies"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Proven Results
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real solutions for real challenges. See how we've helped property managers and building owners across the GTA achieve remarkable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Downtown Condo Complex",
                challenge: "Recurring drain blockages affecting 200+ units",
                solution: "Comprehensive camera inspection and preventative maintenance program",
                result: "95% reduction in emergency calls",
                savings: "$50,000 annually",
                savingsPercent: "95%",
                category: "High-Rise Condos",
                categoryColor: "bg-blue-100 text-blue-700",
                image: "/app/public/assets/city-background.jpeg"
              },
              {
                title: "Corporate Office Tower",
                challenge: "Water pressure issues in upper floors",
                solution: "Complete water system analysis and pump upgrades",
                result: "Consistent pressure throughout building",
                savings: "$25,000 in avoided downtime",
                savingsPercent: "100%",
                category: "Office Buildings",
                categoryColor: "bg-purple-100 text-purple-700",
                image: "/app/public/assets/header-background.webp"
              },
              {
                title: "University Residence",
                challenge: "High water consumption and utility costs",
                solution: "Water-saving fixture upgrades and leak detection",
                result: "40% reduction in water usage",
                savings: "$75,000 annually",
                savingsPercent: "40%",
                category: "Education",
                categoryColor: "bg-green-100 text-green-700",
                image: "/app/public/assets/water-savings-solutions.webp"
              }
            ].map((caseStudy, index) => (
              <div 
                key={index} 
                className="success-story-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  {/* Card Header with Image */}
                  <div className="mb-6">
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      {/* Category Badge on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`inline-block text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full shadow-lg`}>
                          {caseStudy.category}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-ink mb-4 group-hover:text-brand-primary transition-colors leading-tight">
                    {caseStudy.title}
                  </h3>
                  
                  {/* Story Flow */}
                  <div className="space-y-4 mb-8">
                    <div className="story-step">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Challenge</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="story-step">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Solution</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="story-step">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-1">Result</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{caseStudy.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Savings Highlight */}
                  <div className="relative">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 group-hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-green-700">{caseStudy.savingsPercent}</div>
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-lg font-bold text-green-800 mb-1">Saved {caseStudy.savings}</div>
                      <div className="text-sm text-green-600">in operational costs</div>
                    </div>
                    
                    {/* Success Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-left">
                <h3 className="text-xl font-bold text-brand-ink mb-2">Ready to see similar results?</h3>
                <p className="text-gray-600">Get your free building inspection and discover potential savings.</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/case-studies"
                  className="btn-secondary inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View All Stories
                </Link>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Free Inspection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">⭐</span>
              <span className="text-sm font-medium text-brand-ink">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Why Choose Oxford Mechanical?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With over a decade of experience, we've built a reputation for reliability, quality, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "24/7 Emergency Response",
                description: "Round-the-clock availability for urgent plumbing needs",
                image: "/app/public/assets/emergency-plumbing.jpg",
                fallbackBg: "bg-gradient-to-br from-gray-800 to-gray-900"
              },
              {
                title: "Licensed & Insured",
                description: "Fully licensed since 2013 with comprehensive insurance coverage",
                image: "/app/public/assets/licensed-plumber.jpg",
                fallbackBg: "bg-gradient-to-br from-gray-700 to-gray-800"
              },
              {
                title: "100% Satisfaction Guarantee",
                description: "We stand behind our work with a complete satisfaction guarantee",
                image: "/app/public/assets/satisfaction-guarantee.jpg",
                fallbackBg: "bg-gradient-to-br from-gray-800 to-gray-900"
              },
              {
                title: "Free Building Inspections",
                description: "Complimentary property inspections to identify potential issues",
                image: "/app/public/assets/building-inspection.jpg",
                fallbackBg: "bg-gradient-to-br from-gray-700 to-gray-800"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="why-choose-card group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-brand-primary/20 overflow-hidden"
              >
                {/* Image section - 25% of card height */}
                <div 
                  className="h-32 w-full relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Fallback background */}
                  <div className={`absolute inset-0 ${feature.fallbackBg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content section - 75% of card height */}
                <div className="p-6 flex flex-col justify-center h-48">
                  <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-20">
            <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-16">
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">11+</div>
                  <div className="text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="w-px h-16 bg-gray-200"></div>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
                  <div className="text-gray-700 font-medium">Properties Served</div>
                </div>
                <div className="w-px h-16 bg-gray-200"></div>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">15,000+</div>
                  <div className="text-gray-700 font-medium">Service Calls</div>
                </div>
                <div className="w-px h-16 bg-gray-200"></div>
                <div className="flex-1 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">99.8%</div>
                  <div className="text-gray-700 font-medium">Customer Satisfaction</div>
                </div>
              </div>
            </div>
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
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Large Image on the Left */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/city-background.jpeg"
                  alt="Toronto skyline and surrounding areas"
                  width={600}
                  height={400}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Greater Toronto Area</h3>
                  <p className="text-lg opacity-90">Professional HVAC services across the region</p>
                </div>
              </div>
            </div>
            
            {/* Locations List on the Right */}
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-brand-ink mb-6">
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Downtown Toronto", distance: "0km" },
                    { name: "North York", distance: "15km" },
                    { name: "Scarborough", distance: "20km" },
                    { name: "Etobicoke", distance: "18km" },
                    { name: "Mississauga", distance: "25km" },
                    { name: "Markham", distance: "22km" },
                    { name: "Richmond Hill", distance: "28km" },
                    { name: "Vaughan", distance: "25km" },
                    { name: "Brampton", distance: "30km" },
                    { name: "Pickering", distance: "25km" }
                  ].map((location, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-brand-primary rounded-full mr-3"></div>
                        <span className="text-gray-800 font-medium">{location.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {location.distance}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-brand-primary/10 rounded-xl">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-ink">30km Service Radius</h4>
                      <p className="text-sm text-gray-600">Fast response times across the GTA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Property Types - Enhanced */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
                <span className="text-brand-primary">🏢</span>
                <span className="text-sm font-medium text-brand-ink">Property Types We Serve</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-ink mb-6 leading-tight">
                Comprehensive Property Coverage
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From high-rise condos to industrial facilities, we provide specialized plumbing services for every property type across the GTA.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  type: "High-rise condos", 
                  icon: "🏢", 
                  description: "Minimal disruption solutions for high-density residential properties",
                  gradient: "from-blue-500 to-blue-600"
                },
                { 
                  type: "Office buildings", 
                  icon: "🏬", 
                  description: "Commercial-grade plumbing for corporate environments",
                  gradient: "from-gray-500 to-gray-600"
                },
                { 
                  type: "Schools & universities", 
                  icon: "🎓", 
                  description: "Educational institution maintenance and upgrades",
                  gradient: "from-green-500 to-green-600"
                },
                { 
                  type: "Public buildings", 
                  icon: "🏛️", 
                  description: "Government and municipal building services",
                  gradient: "from-purple-500 to-purple-600"
                },
                { 
                  type: "Residential properties", 
                  icon: "🏠", 
                  description: "Multi-unit and single-family home solutions",
                  gradient: "from-orange-500 to-orange-600"
                },
                { 
                  type: "Commercial complexes", 
                  icon: "🏪", 
                  description: "Shopping centers and retail space maintenance",
                  gradient: "from-cyan-500 to-cyan-600"
                },
                { 
                  type: "Industrial facilities", 
                  icon: "🏭", 
                  description: "Heavy-duty plumbing for manufacturing sites",
                  gradient: "from-red-500 to-red-600"
                },
                { 
                  type: "Healthcare facilities", 
                  icon: "🏥", 
                  description: "Specialized plumbing for hospitals and medical centers",
                  gradient: "from-pink-500 to-pink-600"
                }
              ].map((property, index) => (
                <div 
                  key={index} 
                  className="property-type-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-brand-primary/20 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${property.gradient} rounded-full blur-xl`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{property.icon}</span>
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300 leading-tight">
                      {property.type}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {property.description}
                    </p>
                  </div>
                  
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="text-left">
                  <h4 className="text-lg font-bold text-brand-ink mb-1">Need specialized service for your property type?</h4>
                  <p className="text-gray-600 text-sm">Get a customized solution tailored to your building's unique requirements.</p>
                </div>
                <Link
                  href="/contact"
                  className="bg-brand-primary hover:bg-brand-primary-600 text-white inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <span className="mr-2">Get Custom Quote</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
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

      {/* Loyalty & Cashback Programs Section - Enhanced with Tabs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🎁</span>
              <span className="text-sm font-medium text-brand-ink">Exclusive Programs</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Loyalty & Cashback Programs
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We value our long-term clients with exclusive programs designed to save you money and provide additional benefits.
            </p>
          </div>
          
          <Tabs
            tabs={[
              {
                id: 'cashback',
                label: 'Cashback Program',
                icon: '💰',
                content: (
                  <div className="cashback-program">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Main Content */}
                      <div className="space-y-8">
                        <div className="text-center lg:text-left">
                          <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
                            Earn Cashback on Every Service
                          </h3>
                          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            The more you use our services, the more you save. Our cashback program rewards loyal clients with real money back on every service call.
                          </p>
            </div>
            
                        {/* Cashback Tiers */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-brand-ink mb-4">Cashback Tiers</h4>
                          {[
                            { tier: "Standard", rate: "2%", description: "All maintenance services and emergency repairs", color: "from-blue-500 to-blue-600" },
                            { tier: "Annual Contract", rate: "5%", description: "Yearly maintenance agreements", color: "from-purple-500 to-purple-600" },
                            { tier: "Multi-Property", rate: "10%", description: "Clients with 3+ properties", color: "from-emerald-500 to-emerald-600" }
                          ].map((tier, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                              <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                {tier.rate}
              </div>
                              <div className="flex-1">
                                <h5 className="font-semibold text-brand-ink mb-1">{tier.tier}</h5>
                                <p className="text-sm text-gray-600">{tier.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-brand-primary">{tier.rate}</div>
                                <div className="text-xs text-gray-500">cashback</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Payment Schedule */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">📅</span>
                            </div>
                            <h4 className="text-lg font-semibold text-green-800">Quarterly Payments</h4>
                          </div>
                          <p className="text-green-700">
                            Cashback is automatically calculated and paid quarterly, so you see savings throughout the year.
                          </p>
                        </div>
                      </div>

                      {/* Right Side - Benefits & Stats */}
                      <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                          <h4 className="text-xl font-semibold text-brand-ink mb-6">Program Benefits</h4>
                          <div className="space-y-4">
                            {[
                              { benefit: "Automatic enrollment", icon: "✅" },
                              { benefit: "No minimum spending required", icon: "💳" },
                              { benefit: "Transparent tracking dashboard", icon: "📊" },
                              { benefit: "Direct deposit payments", icon: "🏦" },
                              { benefit: "Annual bonus rewards", icon: "🎁" },
                              { benefit: "Referral bonuses", icon: "👥" }
                            ].map((item, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <span className="text-xl">{item.icon}</span>
                                <span className="text-gray-700 font-medium">{item.benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-2xl p-8 text-white">
                          <h4 className="text-xl font-semibold mb-6">Average Client Savings</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-3xl font-bold mb-1">$2,400</div>
                              <div className="text-sm opacity-90">Annual Savings</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold mb-1">15%</div>
                              <div className="text-sm opacity-90">Average Cashback</div>
                            </div>
                          </div>
                          <div className="mt-6 text-center">
                            <div className="text-sm opacity-90 mb-2">Based on multi-property clients</div>
                            <div className="text-xs opacity-75">*Actual savings may vary based on service usage</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: 'loyalty',
                label: 'Loyalty Rewards',
                icon: '⭐',
                content: (
                  <div className="loyalty-rewards">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Left Side - Main Content */}
                      <div className="space-y-8">
                        <div className="text-center lg:text-left">
                          <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
                            Exclusive Loyalty Benefits
                          </h3>
                          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Unlock premium benefits and priority service as a valued Oxford Mechanical client. 
                            Enjoy exclusive perks designed for long-term partnerships.
                          </p>
                        </div>

                        {/* Loyalty Levels */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-brand-ink mb-4">Loyalty Levels</h4>
                          {[
                            { level: "Bronze", years: "1+ Years", benefits: ["Priority emergency response", "5% discount on maintenance"], color: "from-orange-400 to-orange-500" },
                            { level: "Silver", years: "2+ Years", benefits: ["All Bronze benefits", "10% discount on maintenance", "Free quarterly inspections"], color: "from-gray-400 to-gray-500" },
                            { level: "Gold", years: "3+ Years", benefits: ["All Silver benefits", "15% discount on maintenance", "Free annual comprehensive inspection", "Extended warranty"], color: "from-yellow-400 to-yellow-500" }
                          ].map((level, index) => (
                            <div key={index} className="relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden">
                              <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                  <div className={`w-12 h-12 bg-gradient-to-br ${level.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                                    {index + 1}
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-bold text-brand-ink text-lg">{level.level} Level</h5>
                                    <p className="text-sm text-gray-600">{level.years} of partnership</p>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  {level.benefits.map((benefit, benefitIndex) => (
                                    <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                                      <span className="text-green-500">✓</span>
                                      <span className="text-gray-700">{benefit}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              {/* Level indicator line */}
                              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color}`}></div>
                            </div>
                          ))}
                        </div>

                        {/* Special Programs */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm">👑</span>
                            </div>
                            <h4 className="text-lg font-semibold text-purple-800">VIP Treatment</h4>
                          </div>
                          <p className="text-purple-700">
                            Gold level clients receive VIP treatment including dedicated account manager and priority scheduling for all services.
                          </p>
                        </div>
                      </div>

                      {/* Right Side - Benefits & Rewards */}
                      <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                          <h4 className="text-xl font-semibold text-brand-ink mb-6">Premium Benefits</h4>
                          <div className="grid gap-4">
                            {[
                              { benefit: "Priority Emergency Response", description: "Guaranteed 1-hour response time", icon: "🚨", highlight: true },
                              { benefit: "Extended Warranty", description: "Up to 3 years on all work", icon: "🛡️", highlight: false },
                              { benefit: "Free Annual Inspections", description: "Comprehensive property assessment", icon: "🔍", highlight: false },
                              { benefit: "Dedicated Account Manager", description: "Personal point of contact", icon: "👤", highlight: true },
                              { benefit: "Special Pricing", description: "Exclusive rates on all services", icon: "💰", highlight: false },
                              { benefit: "Flexible Payment Terms", description: "Extended payment options", icon: "📅", highlight: false }
                            ].map((item, index) => (
                              <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${item.highlight ? 'bg-brand-primary/5 border border-brand-primary/20' : 'bg-gray-50'}`}>
                                <span className="text-xl mt-1">{item.icon}</span>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-brand-ink mb-1">{item.benefit}</h5>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                                {item.highlight && (
                                  <span className="text-xs bg-brand-primary text-white px-2 py-1 rounded-full font-medium">VIP</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Loyalty Rewards Card */}
                        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
                          <h4 className="text-xl font-semibold mb-6">Loyalty Rewards</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span>Annual Service Value</span>
                              <span className="font-bold">$50,000+</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Typical Savings</span>
                              <span className="font-bold">$7,500</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>VIP Benefits Value</span>
                              <span className="font-bold">$2,000</span>
                            </div>
                          </div>
                          <div className="mt-6 p-3 bg-white/20 rounded-lg text-center">
                            <div className="text-sm opacity-90 mb-1">Total Annual Value</div>
                            <div className="text-2xl font-bold">$9,500+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
            defaultTab="cashback"
            className="max-w-6xl mx-auto"
          />
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-left">
                <h3 className="text-xl font-bold text-brand-ink mb-2">Ready to start earning rewards?</h3>
                <p className="text-gray-600">Contact us today to learn more about our loyalty and cashback programs.</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="bg-brand-primary hover:bg-brand-primary-600 text-white inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="tel:+1416-555-0123"
                  className="bg-gray-100 hover:bg-gray-200 text-brand-ink inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <span>Call Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Enhanced for Accessibility */}
      <section 
        className="py-16 sm:py-20 bg-white"
        role="region"
        aria-label="Contact form for free inspection"
      >
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
              <form className="space-y-6" role="form" aria-label="Free inspection request form">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    id="organization"
                    type="text"
                    name="organization"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="Your organization name"
                    required
                    aria-describedby="organization-help"
                  />
                  <div id="organization-help" className="sr-only">Enter your organization or company name</div>
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

      {/* Collapsible Emergency Service Widget */}
      <EmergencyServiceWidget />

      {/* Mobile CTA Bar */}
      <div className="floating-cta-mobile fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4">
        <div className="flex gap-3">
          <Link
            href="tel:+1416-555-0123"
            className="flex-1 bg-gradient-to-r from-brand-primary to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white text-center py-3 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Emergency Call
          </Link>
          <Link
            href="/contact"
            className="flex-1 bg-gradient-to-r from-brand-accent to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-3 text-sm font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Free Inspection
          </Link>
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
