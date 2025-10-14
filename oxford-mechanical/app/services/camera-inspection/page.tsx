import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import Image from 'next/image'

const features = [
  {
    title: "High-Definition Cameras",
    description: "State-of-the-art HD camera technology provides crystal-clear images of your plumbing system's interior.",
    icon: "📹"
  },
  {
    title: "Detailed Reporting",
    description: "Comprehensive reports with photos, videos, and detailed analysis of any issues found.",
    icon: "📊"
  },
  {
    title: "Problem Identification",
    description: "Accurate diagnosis of blockages, cracks, root intrusion, and other plumbing issues.",
    icon: "🔍"
  },
  {
    title: "Cost Estimation",
    description: "Clear cost estimates for any repairs or maintenance work identified during inspection.",
    icon: "💰"
  }
]

const processSteps = [
  {
    step: "1",
    title: "Schedule Inspection",
    description: "Contact us to schedule your camera inspection at a convenient time."
  },
  {
    step: "2", 
    title: "Equipment Setup",
    description: "Our technicians will set up professional-grade camera equipment at the inspection point."
  },
  {
    step: "3",
    title: "Live Inspection",
    description: "Real-time video feed allows us to identify issues and provide immediate feedback."
  },
  {
    step: "4",
    title: "Detailed Report",
    description: "Receive a comprehensive report with photos, videos, and recommended actions."
  }
]

const benefits = [
  "Non-invasive inspection method",
  "Accurate problem identification",
  "Prevents unnecessary excavation",
  "Saves time and money",
  "Provides visual documentation",
  "Enables proactive maintenance"
]

export default function CameraInspectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Camera Inspection Services"
        subtitle="Advanced diagnostic technology for accurate problem identification and cost-effective solutions"
        backgroundImage="/assets/services/camera-inspection.jpg"
        ctaText="Schedule Inspection"
        ctaHref="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaHref="tel:+14165550123"
      />

      {/* Service Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Professional Camera Inspection
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced camera inspection technology allows us to see inside your pipes and drains 
                without excavation. This non-invasive method provides accurate diagnosis of plumbing 
                issues, saving you time and money.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Using high-definition cameras and professional lighting, we can identify blockages, 
                cracks, root intrusion, pipe deterioration, and other issues that might not be 
                visible through traditional inspection methods.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">HD Quality</div>
                  <div className="text-sm text-gray-600">Crystal Clear Images</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Accurate Diagnosis</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/services/camera-inspection.jpg"
                alt="Camera inspection equipment"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Camera Inspection?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our professional camera inspection services provide the most accurate and 
              cost-effective way to diagnose plumbing issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Inspection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, professional, and thorough - our camera inspection process ensures 
              you get the information you need to make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
              Benefits of Camera Inspection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Camera inspection offers numerous advantages over traditional inspection methods.
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
              title="Schedule Your Camera Inspection"
              subtitle="Get a professional camera inspection to identify plumbing issues before they become costly problems."
              showServiceSelection={true}
              showUrgencyLevel={false}
            />
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  )
}
