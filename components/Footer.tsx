import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-brand-ink text-white py-16">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/oxford-mechanical-logo-new.png"
                  alt="Oxford Mechanical Logo"
                  width={180}
                  height={43}
                  className="brightness-0 invert"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Professional plumbing services for Toronto and GTA. 
              Licensed, insured, and committed to excellence since 2013.
            </p>
            <div className="flex items-center space-x-4">
              <div className="trust-badge">
                <span>🏅</span>
                Licensed Since 2013
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/emergency" className="text-gray-300 hover:text-white transition-colors">Emergency Services</Link></li>
              <li><Link href="/drain-cleaning" className="text-gray-300 hover:text-white transition-colors">Drain Cleaning</Link></li>
              <li><Link href="/services/camera-inspection" className="text-gray-300 hover:text-white transition-colors">Camera Inspection</Link></li>
              <li><Link href="/services/leak-repair" className="text-gray-300 hover:text-white transition-colors">Leak Repair</Link></li>
              <li><Link href="/services/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link href="/services/water-saving" className="text-gray-300 hover:text-white transition-colors">Water Saving Solutions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/industries/condos" className="text-gray-300 hover:text-white transition-colors">High-Rise Condos</Link></li>
              <li><Link href="/industries/office" className="text-gray-300 hover:text-white transition-colors">Office Buildings</Link></li>
              <li><Link href="/industries/education" className="text-gray-300 hover:text-white transition-colors">Schools & Universities</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare Facilities</Link></li>
              <li><Link href="/industries/retail" className="text-gray-300 hover:text-white transition-colors">Retail & Commercial</Link></li>
              <li><Link href="/industries/industrial" className="text-gray-300 hover:text-white transition-colors">Industrial Facilities</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact & Resources</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-300 mb-2">1111 Finch West, Toronto</p>
                <p className="text-gray-300 mb-2">info@oxfordmechanical.ca</p>
                <p className="text-gray-300 mb-2">(416) 555-0123</p>
                <p className="text-brand-accent font-medium">24/7 Emergency Service</p>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center px-4 py-2 text-sm font-semibold rounded-xl"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; {currentYear} Oxford Mechanical. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
