import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

const tips = [
  {
    title: "Install Low-Flow Fixtures",
    description: "Replace old faucets and showerheads with water-efficient models.",
    savings: "Up to 30% water reduction",
    icon: "🚿"
  },
  {
    title: "Fix Leaks Immediately",
    description: "Even small leaks can waste hundreds of gallons of water monthly.",
    savings: "Prevent water waste",
    icon: "🔧"
  },
  {
    title: "Use Water-Smart Appliances",
    description: "Choose ENERGY STAR rated dishwashers and washing machines.",
    savings: "Up to 40% less water",
    icon: "🏠"
  },
  {
    title: "Collect Rainwater",
    description: "Use rain barrels for irrigation and outdoor cleaning.",
    savings: "Reduce municipal water use",
    icon: "🌧️"
  },
  {
    title: "Optimize Irrigation",
    description: "Water plants during cooler hours and use drip irrigation.",
    savings: "Up to 50% outdoor water savings",
    icon: "🌱"
  },
  {
    title: "Monitor Water Usage",
    description: "Track your water consumption to identify waste patterns.",
    savings: "Awareness leads to savings",
    icon: "📊"
  }
]

const benefits = [
  "Lower water bills",
  "Reduced environmental impact",
  "Improved system efficiency",
  "Extended equipment life",
  "Enhanced property value",
  "Government rebates available"
]

const rebateInfo = [
  {
    program: "City of Toronto Water Rebate",
    description: "Rebates for water-efficient fixtures and appliances",
    amount: "Up to $200",
    requirements: "Proof of purchase and installation"
  },
  {
    program: "Ontario Water Rebate",
    description: "Provincial rebates for water conservation upgrades",
    amount: "Up to $500",
    requirements: "ENERGY STAR certification required"
  },
  {
    program: "Federal Green Grants",
    description: "Federal incentives for environmental upgrades",
    amount: "Up to $1,000",
    requirements: "Professional installation required"
  }
]

export default function WaterSavingTipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Water Saving Tips"
        subtitle="Eco-friendly water conservation strategies to reduce costs and environmental impact"
        backgroundImage="/assets/resources/water-saving.jpg"
        ctaText="Get Water Audit"
        ctaHref="/contact"
        secondaryCtaText="View Services"
        secondaryCtaHref="/services/water-saving"
      />

      {/* Tips Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Water Conservation Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple changes can make a big difference in your water usage and costs. 
              Start with these proven water-saving strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {tip.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                
                <div className="bg-brand-primary/10 rounded-lg p-3">
                  <div className="text-sm font-semibold text-brand-primary">Potential Savings:</div>
                  <div className="text-sm text-gray-700">{tip.savings}</div>
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
              Benefits of Water Conservation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Water conservation offers numerous advantages for your property and the environment.
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

      {/* Rebate Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Available Rebates & Incentives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take advantage of government rebates and incentives for water conservation upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rebateInfo.map((rebate, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{rebate.program}</h3>
                <p className="text-gray-600 mb-4">{rebate.description}</p>
                <div className="text-2xl font-bold text-brand-primary mb-4">{rebate.amount}</div>
                <div className="text-sm text-gray-600">{rebate.requirements}</div>
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
              title="Get Your Water Audit"
              subtitle="Let us help you identify water-saving opportunities and maximize your conservation efforts."
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
