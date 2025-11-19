import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'

export const metadata = pageMetadata.waterSaving()

const solutions = [
  {
    title: "Low-Flow Fixtures",
    description: "Install water-efficient faucets, showerheads, and toilets that use significantly less water.",
    savings: "Up to 30% water reduction",
    icon: "🚿",
    features: ["Low-flow showerheads", "Water-efficient toilets", "Aerated faucets", "Smart fixtures"]
  },
  {
    title: "Smart Monitoring",
    description: "Advanced monitoring systems that track water usage and detect leaks in real-time.",
    savings: "Up to 25% cost reduction",
    icon: "📊",
    features: ["Real-time monitoring", "Leak detection", "Usage analytics", "Automated alerts"]
  },
  {
    title: "Greywater Systems",
    description: "Recycle and reuse greywater for irrigation and other non-potable applications.",
    savings: "Up to 40% water savings",
    icon: "♻️",
    features: ["Greywater collection", "Treatment systems", "Distribution networks", "Compliance certification"]
  },
  {
    title: "Rainwater Harvesting",
    description: "Collect and store rainwater for irrigation and other uses, reducing municipal water demand.",
    savings: "Up to 50% outdoor water reduction",
    icon: "🌧️",
    features: ["Collection systems", "Storage tanks", "Filtration systems", "Distribution pumps"]
  }
]

const technologies = [
  {
    title: "Smart Water Meters",
    description: "Advanced metering technology that provides detailed usage data and leak detection.",
    icon: "📱"
  },
  {
    title: "Pressure Reducing Valves",
    description: "Optimize water pressure to reduce waste and extend fixture life.",
    icon: "⚙️"
  },
  {
    title: "Water-Efficient Appliances",
    description: "High-efficiency dishwashers, washing machines, and other water-using appliances.",
    icon: "🏠"
  },
  {
    title: "Leak Detection Systems",
    description: "Automated systems that monitor for leaks and shut off water when problems are detected.",
    icon: "🚨"
  }
]

const benefits = [
  "Reduced water bills",
  "Lower environmental impact",
  "Improved system efficiency",
  "Extended equipment life",
  "Enhanced property value",
  "Government rebates available"
]

const caseStudies = [
  {
    title: "Downtown Office Tower",
    description: "Implemented smart monitoring and low-flow fixtures across 40 floors.",
    savings: "35% water reduction",
    payback: "18 months"
  },
  {
    title: "High-Rise Condo Complex",
    description: "Installed greywater recycling system for 500-unit building.",
    savings: "45% water reduction",
    payback: "24 months"
  },
  {
    title: "Shopping Center",
    description: "Complete water efficiency upgrade including rainwater harvesting.",
    savings: "50% water reduction",
    payback: "30 months"
  }
]

export default function WaterSavingPage() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          serviceType: 'Water Saving Solutions Service',
          name: 'Water Saving Solutions',
          description: 'Eco-friendly upgrades and water conservation solutions. Reduce water bills and environmental impact.',
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Water Conservation Solutions"
        subtitle="Eco-friendly upgrades and water conservation solutions to reduce costs and environmental impact"
        backgroundImage="/assets/services/water-saving.jpg"
        ctaText="Get Water Audit"
        ctaHref="/contact"
        secondaryCtaText="View Case Studies"
        secondaryCtaHref="/projects"
      />

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sustainable Water Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Water conservation is not just environmentally responsible—it&apos;s also economically smart. 
                Our water-saving solutions help reduce your water bills while contributing to environmental 
                sustainability.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From smart monitoring systems to greywater recycling, we offer comprehensive water 
                conservation solutions that can reduce your water usage by up to 50% while maintaining 
                full functionality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">50%</div>
                  <div className="text-sm text-gray-600">Water Reduction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">2 Years</div>
                  <div className="text-sm text-gray-600">Average Payback</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/services/water-saving.jpg"
                alt="Water conservation equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Water Conservation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water-saving solutions tailored to your specific needs and property type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-brand-primary font-semibold mb-3">{solution.savings}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Advanced Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology and equipment for maximum water efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
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
              Benefits of Water Conservation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Water conservation offers numerous benefits for your property and the environment.
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

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our water conservation projects across the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-primary">{study.savings}</div>
                    <div className="text-sm text-gray-600">Water Reduction</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-primary">{study.payback}</div>
                    <div className="text-sm text-gray-600">Payback Period</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Start Saving Water Today"
              subtitle="Get a free water audit and discover how much you can save with our conservation solutions."
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
