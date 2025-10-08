'use client'

import { useState } from 'react'
import Link from 'next/link'

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
    { name: 'Emergency Services', href: '/services/emergency' },
    { name: 'Drain Cleaning', href: '/drain-cleaning' },
    { name: 'Camera Inspection', href: '/services/camera-inspection' },
    { name: 'Leak Repair', href: '/services/leak-repair' },
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Water Saving Solutions', href: '/services/water-saving' },
  ]

  const industryItems = [
    { name: 'High-Rise Condos', href: '/industries/condos' },
    { name: 'Office Buildings', href: '/industries/office' },
    { name: 'Schools & Universities', href: '/industries/education' },
    { name: 'Healthcare Facilities', href: '/industries/healthcare' },
    { name: 'Retail & Commercial', href: '/industries/retail' },
    { name: 'Industrial Facilities', href: '/industries/industrial' },
  ]

  const resourceItems = [
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Maintenance Guides', href: '/resources/maintenance-guides' },
    { name: 'Emergency Procedures', href: '/resources/emergency-procedures' },
    { name: 'Water Saving Tips', href: '/resources/water-saving' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Certifications', href: '/certifications' },
  ]

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OM</span>
              </div>
              <span className="ml-2 text-xl font-display font-semibold text-brand-ink">
                Oxford Mechanical
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  Industries
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {industryItems.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors duration-200"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/projects"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Projects
              </Link>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
                  Resources
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {resourceItems.map((resource) => (
                      <Link
                        key={resource.name}
                        href={resource.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors duration-200"
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-primary p-2 rounded-md"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="pt-2">
                <div className="text-gray-500 text-sm font-medium px-3 py-2">Services</div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="text-gray-600 hover:text-brand-primary block px-6 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Industries */}
              <div className="pt-2">
                <div className="text-gray-500 text-sm font-medium px-3 py-2">Industries</div>
                {industryItems.map((industry) => (
                  <Link
                    key={industry.name}
                    href={industry.href}
                    className="text-gray-600 hover:text-brand-primary block px-6 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/projects"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>

              {/* Mobile Resources */}
              <div className="pt-2">
                <div className="text-gray-500 text-sm font-medium px-3 py-2">Resources</div>
                {resourceItems.map((resource) => (
                  <Link
                    key={resource.name}
                    href={resource.href}
                    className="text-gray-600 hover:text-brand-primary block px-6 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="btn-primary block text-center px-4 py-2 text-sm font-medium rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
