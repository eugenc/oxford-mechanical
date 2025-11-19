import HeroSection from '@/components/HeroSection'
import { pageMetadata } from '@/lib/page-metadata'
import StructuredData from '@/components/StructuredData'
import { siteConfig } from '@/lib/seo'

export const metadata = pageMetadata.privacy()

export default function PrivacyPage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          name: 'Privacy Policy',
          description: 'How we protect and handle your personal information.',
          url: 'https://oxfordmechanical.ca/privacy',
        }}
        pathname="/privacy"
      />
      <div className="min-h-screen">
      <HeroSection
        title="Privacy Policy"
        subtitle="How we protect and handle your personal information"
        backgroundImage="/assets/city-background.jpeg"
        ctaText="Contact Us"
        ctaHref="/contact"
      />
      
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Contact information (name, email, phone number) when you request a quote or schedule a service</li>
                  <li>Property information and service details</li>
                  <li>Payment information for completed services</li>
                  <li>Communication records and correspondence</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our plumbing services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Process payments and send invoices</li>
                  <li>Communicate with you about services, updates, and promotions</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@oxfordmechanical.ca" className="text-brand-primary hover:underline">
                      info@oxfordmechanical.ca
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+14165550123" className="text-brand-primary hover:underline">
                      (416) 555-0123
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 1111 Finch West, Toronto, ON M3J 2P5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

