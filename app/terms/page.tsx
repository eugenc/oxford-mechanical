import HeroSection from '@/components/HeroSection'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Terms of Service"
        subtitle="Terms and conditions for using our services"
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600">
                  By accessing or using our services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                <p className="text-gray-600 mb-4">
                  Oxford Mechanical provides professional plumbing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Emergency plumbing services</li>
                  <li>Drain cleaning and sewer maintenance</li>
                  <li>Camera inspection and diagnostics</li>
                  <li>Leak detection and repair</li>
                  <li>Preventative maintenance programs</li>
                  <li>Water conservation solutions</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  All work is performed by licensed and insured technicians in accordance with applicable 
                  building codes and regulations.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>
                <p className="text-gray-600 mb-4">
                  All pricing is provided in advance through written estimates. Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Payment is due upon completion of services unless other arrangements are made</li>
                  <li>We accept cash, check, and major credit cards</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are in Canadian dollars (CAD)</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty and Guarantees</h2>
                <p className="text-gray-600">
                  We stand behind our work with a satisfaction guarantee. All services are covered by our 
                  workmanship warranty. Specific warranty terms will be provided with your service agreement. 
                  If you are not satisfied with our work, please contact us immediately and we will make it right.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the maximum extent permitted by law, Oxford Mechanical shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages resulting from the use 
                  or inability to use our services.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h2>
                <p className="text-gray-600">
                  Our 24/7 emergency services are available for urgent plumbing issues. Emergency service 
                  calls may incur additional fees. Response times may vary based on location and current demand.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately 
                  upon posting. Your continued use of our services after changes are posted constitutes acceptance 
                  of the modified terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have questions about these Terms of Service, please contact us:
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
  )
}

