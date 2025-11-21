import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'

export const metadata = pageMetadata.maintenance()

const maintenancePlans = [
  {
    title: "Basic Maintenance",
    description: "Essential maintenance services to keep your plumbing system running smoothly.",
    price: "Starting at $150/month",
    features: [
      "Quarterly inspections",
      "Drain cleaning",
      "Fixture checks",
      "Basic repairs included",
      "Priority scheduling"
    ],
    icon: "🔧"
  },
  {
    title: "Comprehensive Maintenance",
    description: "Complete maintenance program with advanced diagnostics and preventive measures.",
    price: "Starting at $300/month",
    features: [
      "Monthly inspections",
      "Advanced diagnostics",
      "Preventive repairs",
      "Emergency response",
      "Detailed reporting",
      "Equipment maintenance"
    ],
    icon: "🛠️"
  },
  {
    title: "Premium Maintenance",
    description: "Full-service maintenance with 24/7 monitoring and priority emergency response.",
    price: "Starting at $500/month",
    features: [
      "Weekly inspections",
      "Smart monitoring systems",
      "Predictive maintenance",
      "24/7 emergency response",
      "Annual system upgrades",
      "Comprehensive reporting"
    ],
    icon: "⭐"
  }
]

const maintenanceServices = [
  {
    title: "System Inspections",
    description: "Regular inspections to identify potential issues before they become problems.",
    icon: "🔍",
    frequency: "Monthly/Quarterly"
  },
  {
    title: "Drain Maintenance",
    description: "Professional drain cleaning and maintenance to prevent blockages.",
    icon: "🚿",
    frequency: "As needed"
  },
  {
    title: "Fixture Maintenance",
    description: "Maintenance of faucets, toilets, and other plumbing fixtures.",
    icon: "🚰",
    frequency: "Quarterly"
  },
  {
    title: "Pipe Maintenance",
    description: "Inspection and maintenance of pipes, joints, and connections.",
    icon: "🔗",
    frequency: "Bi-annually"
  },
  {
    title: "Water Heater Service",
    description: "Regular maintenance of water heaters and related equipment.",
    icon: "🔥",
    frequency: "Annually"
  },
  {
    title: "Emergency Response",
    description: "Priority emergency service for maintenance plan customers.",
    icon: "🚨",
    frequency: "24/7"
  }
]

const benefits = [
  "Prevents costly emergency repairs",
  "Extends equipment lifespan",
  "Improves system efficiency",
  "Reduces water waste",
  "Maintains warranty coverage",
  "Peace of mind"
]

export default function MaintenancePage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Preventive Maintenance Service',
          name: 'Preventive Maintenance Services',
          description: 'Preventative maintenance programs to avoid costly repairs. Scheduled maintenance keeps your plumbing systems running efficiently.',
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Preventive Maintenance Programs"
        subtitle="Keep your plumbing systems running efficiently with our comprehensive maintenance programs"
        backgroundImage="/assets/services/preventative-maintenance-service.jpg"
        ctaText="Get Maintenance Plan"
        ctaHref="/contact"
        secondaryCtaText="Schedule Inspection"
        secondaryCtaHref="/contact"
      />

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Preventive Maintenance Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Regular maintenance is the key to avoiding costly emergency repairs and extending 
                the life of your plumbing systems. Our comprehensive maintenance programs are 
                designed to keep your systems running efficiently year-round.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We offer flexible maintenance plans tailored to your specific needs, from basic 
                quarterly inspections to premium programs with smart monitoring and predictive maintenance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">70%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">5x</div>
                  <div className="text-sm text-gray-600">Longer Equipment Life</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/services/preventative-maintenance-service.jpg"
                alt="Maintenance technician at work"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Maintenance Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-2xl font-bold text-brand-primary mb-6">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact#get-in-touch-form"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance services to keep all aspects of your plumbing system in top condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-sm text-brand-primary font-semibold">
                  Frequency: {service.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Regular Maintenance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investing in regular maintenance pays for itself by preventing costly repairs and extending system life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-brand-primary mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
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
              title="Start Your Maintenance Program"
              subtitle="Contact us to discuss your maintenance needs and find the perfect plan for your property."
              showServiceSelection={true}
              showUrgencyLevel={false}
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
