import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import Tabs from '@/components/Tabs'
import PropertyTypeSelector from '@/components/PropertyTypeSelector'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 lg:pb-0">
      
      {/* Hero Section - Enhanced for Performance & Accessibility */}
      <section 
        className="relative bg-gradient-to-br from-brand-ink via-brand-ink to-gray-900 text-white overflow-hidden min-h-[90vh] flex items-center"
        role="banner"
        aria-label="Hero section with main call-to-action"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/header-background.webp"
            alt="Commercial plumbing equipment and facilities"
            fill
            className="object-cover"
            priority
            quality={95}
          />
          {/* Optimized dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-5xl">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-1 rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <span className="text-brand-accent">🏅</span>
                <span className="text-xs sm:text-sm font-medium">Licensed Since 2013</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-1 rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <span className="text-brand-accent">🛡️</span>
                <span className="text-xs sm:text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-1 rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <span className="text-brand-accent">⭐</span>
                <span className="text-xs sm:text-sm font-medium">100% Satisfaction</span>
              </div>
            </div>

            {/* Main Headline - Optimized for SEO and Accessibility */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[0.9] mb-6 sm:mb-8">
              <span className="block text-white mb-1 sm:mb-2">Commercial Plumbing</span>
              <span className="block text-brand-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">Services for Toronto & GTA</span>
            </h1>
            
            {/* Description */}
            <div className="max-w-3xl mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-3 sm:mb-4 leading-relaxed">
                24/7 emergency response, drain cleaning, and maintenance services.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                Licensed & insured since 2013 with 100% satisfaction guarantee.
              </p>
            </div>

            {/* CTA Buttons - Enhanced for Better UX and Accessibility */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link
                href="/contact"
                className="group bg-brand-primary hover:bg-brand-primary-600 text-white inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-primary/50"
                aria-label="Get free plumbing inspection for your property"
              >
                <span className="mr-2 sm:mr-3">Get Free Inspection</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group bg-white/10 backdrop-blur-1 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="View our comprehensive plumbing services"
              >
                <span className="mr-2 sm:mr-3">View Services</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Licensed, Insured & 
              <span className="text-brand-primary block">Certified Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving the Greater Toronto Area with the highest standards of professionalism and safety since 2013.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Licensed Since 2013",
                description: "Fully licensed by the Ontario College of Trades with continuous education and certification",
                highlight: "11+ Years",
                bgImage: "/assets/trust/license-certificate-bg.jpg",
                fallbackBg: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              },
              {
                title: "Fully Insured",
                description: "Comprehensive liability and workers' compensation coverage up to $2M",
                highlight: "Up to $2M",
                bgImage: "/assets/trust/insurance-shield-bg.jpg",
                fallbackBg: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              },
              {
                title: "24/7 Emergency Response",
                description: "Round-the-clock availability for urgent plumbing needs across the GTA",
                highlight: "Always Available",
                bgImage: "/assets/trust/emergency-response-bg.jpg",
                fallbackBg: "bg-gradient-to-br from-red-900 via-red-800 to-red-900"
              },
              {
                title: "100% Satisfaction",
                description: "We stand behind our work with a complete satisfaction guarantee",
                highlight: "Guaranteed",
                bgImage: "/assets/trust/certified-excellence-bg.jpg",
                fallbackBg: "bg-gradient-to-br from-green-900 via-green-800 to-green-900"
              }
            ].map((trust, index) => (
              <div 
                key={index} 
                className="trust-card group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-brand-primary/20"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {/* Background image with fallback */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${trust.bgImage})`,
                    }}
                  >
                    {/* Fallback gradient background */}
                    <div className={`absolute inset-0 ${trust.fallbackBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  </div>
                  {/* Overlay for better text readability - 45% transparency */}
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-500"></div>
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
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-1 rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🔧</span>
              <span className="text-sm font-medium text-brand-ink">Professional Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Comprehensive Plumbing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                backgroundImage: "/assets/services/emergency-plumbing-service.jpg",
                fallbackBg: "bg-gradient-to-br from-red-500 to-red-600"
              },
              {
                title: "Drain & Sewer Services",
                description: "Professional drain cleaning, camera inspection, and sewer line maintenance",
                href: "/drain-cleaning",
                category: "Maintenance",
                backgroundImage: "/assets/services/drain-cleaning-service.jpg",
                fallbackBg: "bg-gradient-to-br from-blue-500 to-blue-600"
              },
              {
                title: "Camera Inspection",
                description: "Advanced diagnostic technology for accurate problem identification",
                href: "/services/camera-inspection",
                category: "Diagnostics",
                backgroundImage: "/assets/services/camera-inspection-service.jpg",
                fallbackBg: "bg-gradient-to-br from-purple-500 to-purple-600"
              },
              {
                title: "Leak Detection & Repair",
                description: "Comprehensive leak investigation and precision repair services",
                href: "/services/leak-repair",
                category: "Repair Services",
                backgroundImage: "/assets/services/leak-detection-service.jpg",
                fallbackBg: "bg-gradient-to-br from-orange-500 to-orange-600"
              },
              {
                title: "Preventative Maintenance",
                description: "Scheduled maintenance programs to prevent costly emergency repairs",
                href: "/services/maintenance",
                category: "Maintenance",
                backgroundImage: "/assets/services/preventative-maintenance-service.jpg",
                fallbackBg: "bg-gradient-to-br from-green-500 to-green-600"
              },
              {
                title: "Water Conservation",
                description: "Eco-friendly upgrades and water-saving solutions for cost reduction",
                href: "/services/water-saving",
                category: "Upgrades",
                backgroundImage: "/assets/services/water-conservation-service.jpg",
                fallbackBg: "bg-gradient-to-br from-cyan-500 to-cyan-600"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="service-card group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-brand-primary/30 overflow-hidden will-change-transform min-h-[350px] sm:min-h-[400px] flex flex-col"
                aria-label={`Learn more about ${service.title} - ${service.description}`}
              >
                {/* High-quality background image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.backgroundImage}
                    alt={`${service.title} service`}
                    fill
                    quality={95}
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Background fallback for when image doesn't load */}
                <div className={`absolute inset-0 ${service.fallbackBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Brand blue overlay with 55% opacity */}
                <div className="absolute inset-0 bg-brand-primary/55"></div>
                
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-1"></div>
                
                {/* Content with glass effect */}
                <div className="relative z-10 p-8 flex flex-col h-full">
                  {/* Category badge */}
                  <div className="flex justify-end mb-6">
                    <div className="bg-white/20 backdrop-blur-1 border border-white/30 text-white text-xs font-bold px-4 py-2 rounded-full">
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
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    Free Plumbing Inspections
                  </h2>
                  <h3 className="text-xl font-display font-semibold text-blue-100 mb-4">
                    for Condos, Commercial, and High-Rise Buildings
                  </h3>
                  <p className="text-xl text-blue-100 mb-8">
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
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
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

      {/* Specialized Industry Expertise Section */}
      <section 
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
        role="region"
        aria-label="Specialized industry expertise"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl floating-bg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl floating-bg"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-1 rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🏢</span>
              <span className="text-sm font-medium text-brand-ink">Industry Specialization</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Specialized Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of different property types and industries. Our specialized approach ensures optimal solutions for your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                industry: "High-Rise Condos",
                description: "Minimal disruption maintenance for high-density residential properties",
                image: "/assets/industries/condos.jpg",
                fallbackBg: "bg-gradient-to-br from-blue-500 to-blue-600"
              },
              {
                industry: "Office Buildings",
                description: "Commercial-grade solutions for corporate environments",
                image: "/assets/industries/office.jpg",
                fallbackBg: "bg-gradient-to-br from-gray-500 to-gray-600"
              },
              {
                industry: "Healthcare Facilities",
                description: "Specialized plumbing for hospitals and medical centers",
                image: "/assets/industries/healthcare.jpg",
                fallbackBg: "bg-gradient-to-br from-red-500 to-red-600"
              },
              {
                industry: "Educational Institutions",
                description: "School and university plumbing maintenance and upgrades",
                image: "/assets/industries/education.jpg",
                fallbackBg: "bg-gradient-to-br from-green-500 to-green-600"
              },
              {
                industry: "Retail & Commercial",
                description: "Shopping centers and retail space plumbing solutions",
                image: "/assets/industries/retail.jpg",
                fallbackBg: "bg-gradient-to-br from-purple-500 to-purple-600"
              },
              {
                industry: "Industrial Facilities",
                description: "Heavy-duty plumbing for manufacturing and industrial sites",
                image: "/assets/industries/industrial.webp",
                fallbackBg: "bg-gradient-to-br from-orange-500 to-orange-600"
              }
            ].map((industry, index) => (
              <div key={index} className="industry-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-brand-primary/20 flex flex-col h-full will-change-transform">
                {/* Image section - 40% height */}
                <div className="image-section h-[40%] min-h-[200px] relative overflow-hidden">
                  {/* High-quality background image */}
                  <Image
                    src={industry.image}
                    alt={`${industry.industry} industry`}
                    fill
                    quality={95}
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/40 to-brand-primary/30"></div>
                  
                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-1"></div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                </div>
                
                {/* Content section - 60% height */}
                <div className="content-section h-[60%] p-6 lg:p-8 flex flex-col justify-center relative">
                  {/* Subtle background accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-xl lg:text-2xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {industry.industry}
                    </h4>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-500"></div>
                </div>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6 leading-tight">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real solutions for real challenges. See how we&apos;ve helped property managers and building owners across the GTA achieve remarkable results.
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
                image: "/assets/city-background.jpeg"
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
                image: "/assets/header-background.webp"
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
                image: "/assets/water-savings-solutions.webp"
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
                      <Image 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        width={400}
                        height={192}
                        quality={95}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      {/* Category Badge on Image */}
                      <div className="absolute bottom-4 left-4">
                        <div className={`inline-block text-xs font-bold bg-white/90 backdrop-blur-1 text-gray-800 px-3 py-1.5 rounded-full shadow-lg`}>
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
                  quality={95}
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
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-1 rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🎁</span>
              <span className="text-sm font-medium text-brand-ink">Exclusive Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Loyalty & Cashback Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-1 rounded-full px-4 py-2 border border-brand-primary/20 mb-6">
              <span className="text-brand-primary">🔍</span>
              <span className="text-sm font-medium text-brand-ink">Free Property Assessment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Schedule Your Free Inspection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free building inspection or emergency service. 
            We&apos;re here to help with all your plumbing needs.
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
      <div className="floating-cta-mobile fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-1 border-t border-gray-200 p-4">
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

    </div>
  )
}
