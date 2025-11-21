import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'

export const metadata = pageMetadata.emergency()

const emergencyServices = [
  {
    title: "Burst Pipe Repair",
    description: "Immediate response to burst pipes to prevent water damage and restore service quickly.",
    image: "/assets/services/emergency-plumbing-service.jpg",
    responseTime: "30 minutes",
    features: [
      "Emergency shut-off",
      "Temporary repairs",
      "Permanent solutions",
      "Damage assessment"
    ]
  },
  {
    title: "Sewer Backup",
    description: "Professional sewer backup cleanup and repair to restore proper drainage and prevent health hazards.",
    image: "/assets/services/drain-cleaning-service.jpg",
    responseTime: "45 minutes",
    features: [
      "Sewer line inspection",
      "Backup removal",
      "Sanitization",
      "Prevention measures"
    ]
  },
  {
    title: "Water Heater Failure",
    description: "Emergency water heater repair or replacement to restore hot water service for your property.",
    image: "/assets/services/preventative-maintenance-service.jpg",
    responseTime: "60 minutes",
    features: [
      "Diagnostic testing",
      "Emergency repairs",
      "Temporary solutions",
      "Replacement options"
    ]
  },
  {
    title: "Gas Leak Detection",
    description: "Critical gas leak detection and repair to ensure safety and prevent potential hazards.",
    image: "/assets/services/leak-detection-service.jpg",
    responseTime: "20 minutes",
    features: [
      "Gas leak detection",
      "Emergency shut-off",
      "Safety protocols",
      "Certified repairs"
    ]
  },
  {
    title: "Flooding Emergency",
    description: "Rapid response to flooding situations with water extraction and damage prevention.",
    image: "/assets/services/emergency-plumbing-service.jpg",
    responseTime: "30 minutes",
    features: [
      "Water extraction",
      "Source identification",
      "Damage prevention",
      "Restoration planning"
    ]
  },
  {
    title: "No Water Service",
    description: "Emergency diagnosis and repair for complete water service loss affecting your property.",
    image: "/assets/services/emergency-plumbing-service.jpg",
    responseTime: "45 minutes",
    features: [
      "System diagnosis",
      "Pressure testing",
      "Line repairs",
      "Service restoration"
    ]
  }
]

const emergencySteps = [
  {
    step: "1",
    title: "Call Immediately",
    description: "Call our 24/7 emergency line at (416) 555-0123. Our dispatcher will gather essential information and dispatch a technician."
  },
  {
    step: "2",
    title: "Safety First",
    description: "If there's a gas leak, evacuate immediately. For water emergencies, turn off the main water supply if safe to do so."
  },
  {
    step: "3",
    title: "Rapid Response",
    description: "Our certified technician will arrive within 30-60 minutes with all necessary equipment and parts."
  },
  {
    step: "4",
    title: "Assessment & Repair",
    description: "We'll assess the situation, implement temporary fixes if needed, and provide a permanent solution."
  }
]

export default function EmergencyServicesPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Commercial Emergency Plumbing Service',
          name: '24/7 Commercial Emergency Services',
          description: '24/7 commercial emergency plumbing service in Toronto & GTA. Immediate response for commercial properties with burst pipes, sewer backups, and urgent repairs.',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="24/7 Commercial Emergency Services"
        subtitle="We provide commercial emergency plumbing service 24/7. When plumbing emergencies strike your commercial property, our certified technicians respond quickly to restore your service and prevent damage."
        backgroundImage="/assets/services/emergency-plumbing-service.jpg"
        ctaText="Call Emergency Line"
        ctaHref="tel:+14165550123"
        secondaryCtaText="Get Free Quote"
        secondaryCtaHref="/contact"
      />

      {/* Emergency Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Commercial Emergency Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide commercial emergency plumbing service for businesses and commercial properties. 
              Our certified technicians are equipped to handle any plumbing emergency, 
              from burst pipes to gas leaks, with rapid response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                {/* Image Section - 50% of card */}
                <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Gradient overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Content Section - 50% of card */}
                <div className="flex-1 flex flex-col p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5 text-sm lg:text-base leading-relaxed flex-shrink-0">{service.description}</p>
                  
                  {/* Response Time Badge */}
                  <div className="mb-5 pb-5 border-b border-gray-100">
                    <div className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-lg px-4 py-2">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Response Time:</span>
                      <span className="text-brand-primary font-bold text-lg">{service.responseTime}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-brand-primary mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              What to Do in an Emergency
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow these steps to ensure your safety and minimize damage during a plumbing emergency.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-primary/40 to-brand-primary/20"></div>
              
              {emergencySteps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                    {/* Numbered Circle with enhanced styling */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl lg:text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
                        <span>{step.step}</span>
                      </div>
                      {/* Connecting line indicator for mobile/tablet */}
                      {index < emergencySteps.length - 1 && (
                        <>
                          <div className="hidden md:block lg:hidden absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/30 to-transparent transform translate-x-4"></div>
                          <div className="md:hidden absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-brand-primary/30 to-transparent transform -translate-x-1/2 mt-4"></div>
                        </>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 group-hover:text-brand-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Desktop connecting arrow */}
                  {index < emergencySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-4 w-8 h-8 z-20">
                      <svg className="w-full h-full text-brand-primary/40" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-accent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Why Choose Our Emergency Service?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              When every minute counts, you need a reliable commercial emergency plumbing service you can trust. 
              We provide commercial emergency plumbing service 24/7 to keep your business running.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Rapid Response */}
            <div className="industry-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-brand-primary/20 flex flex-col h-full will-change-transform">
              {/* Image section - 40% height */}
              <div className="image-section h-[40%] min-h-[200px] relative overflow-hidden">
                <Image
                  src="/assets/trust/emergency-response-bg.jpg"
                  alt="Rapid Response"
                  fill
                  quality={75}
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Brand blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/40 to-brand-primary/30"></div>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-1"></div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content section - 60% height */}
              <div className="content-section h-[60%] p-6 lg:p-8 flex flex-col justify-center relative">
                {/* Subtle background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    Rapid Response
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Average response time of 30-60 minutes across the GTA
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-500"></div>
              </div>
            </div>

            {/* Fully Equipped */}
            <div className="industry-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-brand-primary/20 flex flex-col h-full will-change-transform">
              {/* Image section - 40% height */}
              <div className="image-section h-[40%] min-h-[200px] relative overflow-hidden">
                <Image
                  src="/assets/services/emergency-plumbing-service.jpg"
                  alt="Fully Equipped"
                  fill
                  quality={75}
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Brand blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/40 to-brand-primary/30"></div>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-1"></div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content section - 60% height */}
              <div className="content-section h-[60%] p-6 lg:p-8 flex flex-col justify-center relative">
                {/* Subtle background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    Fully Equipped
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Our trucks carry all necessary parts and equipment for most repairs
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-500"></div>
              </div>
            </div>

            {/* Certified Technicians */}
            <div className="industry-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-brand-primary/20 flex flex-col h-full will-change-transform">
              {/* Image section - 40% height */}
              <div className="image-section h-[40%] min-h-[200px] relative overflow-hidden">
                <Image
                  src="/assets/trust/certified-excellence-bg.jpg"
                  alt="Certified Technicians"
                  fill
                  quality={75}
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Brand blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/40 to-brand-primary/30"></div>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-1"></div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content section - 60% height */}
              <div className="content-section h-[60%] p-6 lg:p-8 flex flex-col justify-center relative">
                {/* Subtle background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    Certified Technicians
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Licensed, insured, and experienced professionals you can trust
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-500"></div>
              </div>
            </div>

            {/* Transparent Pricing */}
            <div className="industry-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-brand-primary/20 flex flex-col h-full will-change-transform">
              {/* Image section - 40% height */}
              <div className="image-section h-[40%] min-h-[200px] relative overflow-hidden">
                <Image
                  src="/assets/trust/license-certificate-bg.jpg"
                  alt="Transparent Pricing"
                  fill
                  quality={75}
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Brand blue gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-brand-primary/40 to-brand-primary/30"></div>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-1"></div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-brand-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content section - 60% height */}
              <div className="content-section h-[60%] p-6 lg:p-8 flex flex-col justify-center relative">
                {/* Subtle background accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    Transparent Pricing
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    No hidden fees - you&apos;ll know the cost before we start work
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-primary/0 to-transparent group-hover:via-brand-primary/50 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Commercial Emergency Service Request"
              subtitle="We provide commercial emergency plumbing service 24/7. For urgent commercial plumbing emergencies, call us immediately at (416) 555-0123. For non-emergency requests, use this form."
              showServiceSelection={true}
              showUrgencyLevel={true}
            />
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
    </>
  )
}
