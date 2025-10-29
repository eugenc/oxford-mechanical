import React from 'react'
import './Hero.css'
// import logo from '../assets/images/logo.png' // Uncomment when you add your logo
import heroBackground from '../assets/images/hero-bg.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Uncomment to add logo:
          <img src={logo} alt="Green Approved Solutions" className="hero-logo" />
          */}
          <h1 className="hero-title">
            SHARE SOLAR ENERGY<br />
            WITH YOUR FAMILY & FRIENDS
          </h1>
          <p className="hero-subtitle">
            Help your loved ones save money while you earn up to <strong>$1,000 per referral</strong>
          </p>
          <div className="hero-cta-buttons">
            <a href="#referral-form" className="hero-cta hero-cta-primary">
              Refer a Friend
            </a>
            <a href="tel:9547024288" className="hero-cta hero-cta-secondary">
              📞 Call Us: (954) 702-4288
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

