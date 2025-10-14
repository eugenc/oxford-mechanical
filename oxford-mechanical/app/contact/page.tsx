import HeroSection from '@/components/HeroSection'
import ContactForm from '@/components/ContactForm'
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
    title: "Emergency Service",
    phone: "(416) 555-0123",
    description: "24/7 emergency response for urgent plumbing issues",
    hours: "Available 24/7"
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

const serviceHours = [
  { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
  { day: "Emergency Service", hours: "24/7 Available" }
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

      {/* Service Hours */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Service Hours
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our regular business hours and emergency service availability.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <div className="space-y-4">
                {serviceHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-semibold text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ContactForm
              title="Send Us a Message"
              subtitle="Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent issues, please call us directly."
              showServiceSelection={true}
              showUrgencyLevel={true}
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our main office in Toronto or contact us for service at your location.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
              <p className="text-gray-600 mb-4">1111 Finch West, Toronto, ON M3J 2P5</p>
              <a 
                href="https://maps.google.com/?q=1111+Finch+West+Toronto+ON+M3J+2P5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 font-semibold"
              >
                View on Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  )
}
