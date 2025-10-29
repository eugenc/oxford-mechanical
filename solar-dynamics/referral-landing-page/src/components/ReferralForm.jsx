import React, { useState } from 'react'
import './ReferralForm.css'

const ReferralForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Referred person
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: 'United States',
    zipCode: '',
    // Person referring
    referrerName: '',
    referrerEmail: '',
    referrerPhone: ''
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required'
    }
    
    if (!formData.state.trim()) {
      newErrors.state = 'State is required'
    }
    
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required'
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    
    if (!formData.referrerName.trim()) {
      newErrors.referrerName = 'Your name is required'
    }
    
    if (!formData.referrerEmail.trim()) {
      newErrors.referrerEmail = 'Your email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Please enter a valid email'
    }
    
    if (!formData.referrerPhone.trim()) {
      newErrors.referrerPhone = 'Your phone number is required'
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.referrerPhone.replace(/\s/g, ''))) {
      newErrors.referrerPhone = 'Please enter a valid phone number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (validateStep1()) {
      setStep(2)
      window.scrollTo({ top: document.getElementById('referral-form').offsetTop - 20, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setStep(1)
    window.scrollTo({ top: document.getElementById('referral-form').offsetTop - 20, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep2()) {
      onSubmit(formData)
    }
  }

  const handleAddressSearch = async () => {
    // Placeholder for address autocomplete functionality
    // You can integrate Google Places API or similar service here
    alert('Address search functionality would integrate with Google Places API or similar service')
  }

  return (
    <section id="referral-form" className="referral-form-section">
      <div className="container">
        <div className="form-header">
          <h2>Submit Your Referral</h2>
          <div className="step-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Referral Details</span>
            </div>
            <div className="step-divider"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Your Information</span>
            </div>
          </div>
        </div>

        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="referral-form">
          {step === 1 && (
            <div className="form-step">
              <h3>Who are you referring?</h3>
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? 'error' : ''}
                  placeholder="John Doe"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <div className="address-input-wrapper">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={errors.address ? 'error' : ''}
                    placeholder="123 Main Street"
                  />
                  <button type="button" onClick={handleAddressSearch} className="search-button">
                    🔍 Search
                  </button>
                </div>
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? 'error' : ''}
                    placeholder="Miami"
                  />
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={errors.state ? 'error' : ''}
                  >
                    <option value="">Select State</option>
                    <option value="FL">Florida</option>
                    <option value="AL">Alabama</option>
                    <option value="GA">Georgia</option>
                    <option value="SC">South Carolina</option>
                    <option value="NC">North Carolina</option>
                    {/* Add more states as needed */}
                  </select>
                  {errors.state && <span className="error-message">{errors.state}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={errors.zipCode ? 'error' : ''}
                    placeholder="33101"
                  />
                  {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  Next Step →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h3>Your Contact Information</h3>
              
              <div className="form-group">
                <label htmlFor="referrerName">Your Full Name *</label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleInputChange}
                  className={errors.referrerName ? 'error' : ''}
                  placeholder="Your Name"
                />
                {errors.referrerName && <span className="error-message">{errors.referrerName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="referrerEmail">Your Email Address *</label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  value={formData.referrerEmail}
                  onChange={handleInputChange}
                  className={errors.referrerEmail ? 'error' : ''}
                  placeholder="your@example.com"
                />
                {errors.referrerEmail && <span className="error-message">{errors.referrerEmail}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="referrerPhone">Your Phone Number *</label>
                <input
                  type="tel"
                  id="referrerPhone"
                  name="referrerPhone"
                  value={formData.referrerPhone}
                  onChange={handleInputChange}
                  className={errors.referrerPhone ? 'error' : ''}
                  placeholder="(555) 123-4567"
                />
                {errors.referrerPhone && <span className="error-message">{errors.referrerPhone}</span>}
              </div>

              <div className="referral-info">
                <p>
                  <strong>💰 Earn up to $1,000</strong> when your referral completes their solar installation!
                </p>
              </div>

              <div className="form-actions">
                <button type="button" onClick={handleBack} className="btn-secondary">
                  ← Back
                </button>
                <button type="submit" className="btn-primary">
                  Submit Referral
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default ReferralForm

