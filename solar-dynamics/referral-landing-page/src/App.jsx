import React, { useState } from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ReferralForm from './components/ReferralForm'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data)
    // Here you would typically send data to your backend
    setFormSubmitted(true)
  }

  return (
    <div className="app">
      <Hero />
      <Benefits />
      {!formSubmitted ? (
        <ReferralForm onSubmit={handleFormSubmit} />
      ) : (
        <div className="success-message">
          <div className="container">
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Thank You!</h2>
              <p>Your referral has been submitted successfully. We'll be in touch soon!</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App

