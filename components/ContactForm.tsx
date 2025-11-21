'use client'

import { useState } from 'react'
import { sendContactForm } from '@/lib/emailjs'

interface ContactFormProps {
  title?: string
  subtitle?: string
  showServiceSelection?: boolean
  showUrgencyLevel?: boolean
  className?: string
}

export default function ContactForm({ 
  title = "Get In Touch",
  subtitle = "Ready to solve your plumbing challenges? Contact us today for a free consultation.",
  showServiceSelection = true,
  showUrgencyLevel = false,
  className = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    urgency: 'normal',
    message: '',
    preferredContact: 'phone'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const services = [
    'Emergency Services',
    'Drain Cleaning',
    'Camera Inspection',
    'Leak Repair',
    'Maintenance',
    'Water Saving Solutions',
    'General Inquiry'
  ]

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency (24/7)', description: 'Immediate response needed' },
    { value: 'urgent', label: 'Urgent', description: 'Within 24 hours' },
    { value: 'normal', label: 'Standard', description: 'Within 1-3 business days' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      await sendContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        urgency: formData.urgency,
        message: formData.message,
        preferredContact: formData.preferredContact
      })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        urgency: 'normal',
        message: '',
        preferredContact: 'phone'
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden ${className}`}>
      {/* Form header with gradient */}
      <div className="bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-t-3xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-2 left-2 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">{title}</h2>
            <p className="text-white/90 text-sm lg:text-base">{subtitle}</p>
          </div>
        </div>
      </div>
      
      {/* Form content */}
      <div className="p-8 lg:p-10">

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
              <p className="text-sm text-green-700 mt-1">We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error sending message</h3>
              <p className="text-sm text-red-700 mt-1">Please try again or call us directly.</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Contact form">
        {/* Contact Information Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Contact Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                placeholder="your.email@company.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                placeholder="(416) 555-0123"
                autoComplete="tel"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                Company/Property
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
                placeholder="Your company or property name"
                autoComplete="organization"
              />
            </div>
          </div>
        </div>

        {/* Service Information Section */}
        {showServiceSelection && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Service Information</h4>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base"
              >
                <option value="">Select a service</option>
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {showUrgencyLevel && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Urgency Level</h4>
            <div className="space-y-3">
              {urgencyLevels.map(level => (
                <label key={level.value} className="flex items-start p-3 rounded-xl border border-gray-200 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-200 cursor-pointer">
                  <input
                    type="radio"
                    name="urgency"
                    value={level.value}
                    checked={formData.urgency === level.value}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"
                  />
                  <div className="ml-3 flex-1">
                    <div className="text-sm font-medium text-gray-900">{level.label}</div>
                    <div className="text-sm text-gray-500">{level.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Message Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Project Details</h4>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 hover:border-gray-400 text-base resize-none"
              placeholder="Please describe your plumbing needs, location, and any specific requirements..."
            />
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-brand-ink border-b border-gray-200 pb-2">Contact Preferences</h4>
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-200 cursor-pointer flex-1 min-w-[140px]">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
                className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">Phone Call</span>
            </label>
            <label className="flex items-center p-3 rounded-xl border border-gray-200 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all duration-200 cursor-pointer flex-1 min-w-[140px]">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
                className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">Email</span>
            </label>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 disabled:from-gray-400 disabled:to-gray-500 text-white text-center py-4 text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-brand-primary/25 flex items-center justify-center gap-3 disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Send Message</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
      </div>

      {/* Form footer */}
      <div className="px-8 lg:px-10 pb-8 lg:pb-10">
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24hr Response</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
            <a 
              href="tel:+14165550123" 
              className="text-brand-primary hover:text-brand-primary/80 font-semibold text-lg transition-colors duration-200"
            >
              Call (416) 555-0123
            </a>
            <p className="text-xs text-gray-500 mt-1">24/7 Emergency Service</p>
          </div>
        </div>
      </div>
    </div>
  )
}
