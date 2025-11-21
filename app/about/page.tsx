import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
import EmergencyServiceWidget from '@/components/EmergencyServiceWidget'
import Icon from '@/components/Icon'
import Image from 'next/image'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/seo'

export const metadata = pageMetadata.about()

const values = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every job is completed to the highest standards using premium materials and proven techniques.",
    icon: "🏆"
  },
  {
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
    icon: "👥"
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and techniques to provide more efficient, effective, and sustainable plumbing solutions.",
    icon: "💡"
  },
  {
    title: "Reliability",
    description: "When you need us, we're there. Our 24/7 emergency service and consistent quality make us a trusted partner.",
    icon: "⚡"
  }
]

const milestones = [
  {
    year: "2013",
    title: "Company Founded",
    description: "Oxford Mechanical was established with a vision to provide superior plumbing services to the GTA."
  },
  {
    year: "2015",
    title: "First Major Contract",
    description: "Secured our first high-rise condo complex contract, establishing our expertise in commercial plumbing."
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew our team to 20+ certified technicians and expanded our service area across the GTA."
  },
  {
    year: "2020",
    title: "Technology Integration",
    description: "Implemented smart monitoring systems and advanced diagnostic tools for improved service delivery."
  },
  {
    year: "2023",
    title: "Sustainability Focus",
    description: "Launched water conservation programs and eco-friendly solutions to help clients reduce environmental impact."
  }
]

export default function AboutPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: 'About Oxford Mechanical',
          description: 'Learn about Oxford Mechanical, Toronto\'s trusted plumbing partner since 2013.',
          url: 'https://oxfordmechanical.ca/about',
        }}
        pathname="/about"
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="About Oxford Mechanical"
        subtitle="Your trusted plumbing partner since 2013, serving the Greater Toronto Area with excellence and reliability"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Get In Touch"
        ctaHref="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaHref="/services"
      />

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2013, Oxford Mechanical has grown from a small local plumbing company 
                to a trusted partner for commercial and residential properties across the Greater Toronto Area.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality, reliability, and customer satisfaction has earned us 
                a reputation as one of the region&apos;s most trusted plumbing service providers. 
                We specialize in high-rise condos, office buildings, and commercial properties, 
                bringing over a decade of expertise to every project.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/city-background.jpeg"
                alt="Oxford Mechanical Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company&apos;s growth and development over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of professionalism and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="trophy" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Licensed Plumber</h3>
              <p className="text-gray-600">Fully licensed since 2013</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="shield" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600">Comprehensive liability coverage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="check" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bonded</h3>
              <p className="text-gray-600">Bonded for your protection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="star" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">A+ Rating</h3>
              <p className="text-gray-600">BBB accredited business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Ready to Work With Us?"
              subtitle="Contact us today to discuss your plumbing needs and learn how we can help your property."
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
