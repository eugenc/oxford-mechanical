'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon, { type IconName } from '@/components/Icon'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceItems = [
    { 
      name: 'Emergency Services', 
      href: '/services/emergency',
      description: '24/7 emergency response for urgent plumbing issues',
      icon: 'emergency' as IconName
    },
    { 
      name: 'Drain Cleaning', 
      href: '/drain-cleaning',
      description: 'Professional drain cleaning and sewer maintenance',
      icon: 'shower' as IconName
    },
    { 
      name: 'Camera Inspection', 
      href: '/services/camera-inspection',
      description: 'Advanced diagnostic technology for accurate problem identification',
      icon: 'camera' as IconName
    },
    { 
      name: 'Leak Repair', 
      href: '/services/leak-repair',
      description: 'Comprehensive leak investigation and precision repair',
      icon: 'wrench' as IconName
    },
    { 
      name: 'Maintenance', 
      href: '/services/maintenance',
      description: 'Preventative maintenance programs to avoid costly repairs',
      icon: 'tools' as IconName
    },
    { 
      name: 'Water Saving Solutions', 
      href: '/services/water-saving',
      description: 'Eco-friendly upgrades and water conservation solutions',
      icon: 'water' as IconName
    },
  ]

  const industryItems = [
    { 
      name: 'High-Rise Condos', 
      href: '/industries/condos',
      description: 'Minimal disruption maintenance for high-density residential properties',
      icon: 'building' as IconName
    },
    { 
      name: 'Office Buildings', 
      href: '/industries/office',
      description: 'Commercial-grade solutions for corporate environments',
      icon: 'building' as IconName
    },
    { 
      name: 'Schools & Universities', 
      href: '/industries/education',
      description: 'Educational institution plumbing maintenance and upgrades',
      icon: 'education' as IconName
    },
    { 
      name: 'Healthcare Facilities', 
      href: '/industries/healthcare',
      description: 'Specialized plumbing for hospitals and medical centers',
      icon: 'healthcare' as IconName
    },
    { 
      name: 'Retail & Commercial', 
      href: '/industries/retail',
      description: 'Shopping centers and retail space plumbing solutions',
      icon: 'retail' as IconName
    },
    { 
      name: 'Industrial Facilities', 
      href: '/industries/industrial',
      description: 'Heavy-duty plumbing for manufacturing and industrial sites',
      icon: 'industrial' as IconName
    },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-1 border-b border-gray-200/80 sticky top-0 z-50 shadow-sm">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src="/assets/oxford-mechanical-logo-new.png"
                alt="Oxford Mechanical Logo"
                width={200}
                height={48}
                className="group-hover:scale-105 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center hover:bg-blue-50 relative">
                  Services
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                <div className="absolute left-0 mt-3 w-[50vw] max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-4">
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-bold text-gray-900">Our Services</h3>
                      <p className="text-xs text-gray-500 mt-1">Professional plumbing solutions for every need</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex flex-col items-center text-center gap-2 p-3 rounded-xl hover:bg-blue-50 hover:text-brand-primary transition-all duration-200 group"
                        >
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                            <Icon name={service.icon} className="w-5 h-5 text-gray-700 group-hover:text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center hover:bg-blue-50 relative">
                  Industries
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                <div className="absolute left-0 mt-3 w-[50vw] max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-4">
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-bold text-gray-900">Industries We Serve</h3>
                      <p className="text-xs text-gray-500 mt-1">Specialized solutions for every industry</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {industryItems.map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="flex flex-col items-center text-center gap-2 p-3 rounded-xl hover:bg-blue-50 hover:text-brand-primary transition-all duration-200 group"
                        >
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                            <Icon name={industry.icon} className="w-5 h-5 text-gray-700 group-hover:text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                              {industry.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {industry.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/projects"
                className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="/resources"
                className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 relative group"
              >
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-primary p-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white border-t border-gray-200 shadow-lg">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary block px-4 py-3 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="pt-2">
                <div className="text-gray-500 text-sm font-semibold px-4 py-2 uppercase tracking-wider">Services</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="flex flex-col items-center text-center gap-2 p-3 rounded-xl hover:bg-blue-50 hover:text-brand-primary transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                        <Icon name={service.icon} className="w-5 h-5 text-gray-700 group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Industries */}
              <div className="pt-2">
                <div className="text-gray-500 text-sm font-semibold px-4 py-2 uppercase tracking-wider">Industries</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4">
                  {industryItems.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="flex flex-col items-center text-center gap-2 p-3 rounded-xl hover:bg-blue-50 hover:text-brand-primary transition-all duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                        <Icon name={industry.icon} className="w-5 h-5 text-gray-700 group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                          {industry.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {industry.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/projects"
                className="text-gray-700 hover:text-brand-primary block px-4 py-3 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>

              <Link
                href="/resources"
                className="text-gray-700 hover:text-brand-primary block px-4 py-3 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-primary block px-4 py-3 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-primary block px-4 py-3 rounded-xl text-base font-semibold hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
