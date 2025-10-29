import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Green Approved Solutions</h3>
            <p>Helping Florida families save money with solar energy.</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>
              <a href="tel:9547024288">(954) 702-4288</a>
            </p>
            <p>
              <a href="tel:18669349106">1 (866) 934-9106</a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Solar Installation</li>
              <li>Battery Storage</li>
              <li>Energy Consultation</li>
              <li>Referral Program</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Green Approved Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

