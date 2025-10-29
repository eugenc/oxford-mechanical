import React from 'react'
import './Benefits.css'
// import risingCostsIcon from '../assets/images/rising-costs-icon.svg'
// import stormProtectionIcon from '../assets/images/storm-protection-icon.svg'
// import sunshineIcon from '../assets/images/sunshine-icon.svg'
// import homeValueIcon from '../assets/images/home-value-icon.svg'

const Benefits = () => {
  const benefits = [
    {
      icon: '💰',
      // image: risingCostsIcon, // Uncomment when you add images
      title: 'Rising Energy Costs',
      description: 'Electric rates increase by about 11% per year. Solar locks in lower, predictable payments.'
    },
    {
      icon: '⚡',
      // image: stormProtectionIcon,
      title: 'Storm Season Protection',
      description: 'Solar + battery keeps power on when the grid goes down.'
    },
    {
      icon: '☀️',
      // image: sunshineIcon,
      title: 'Sunshine Advantage',
      description: 'Florida is the Sunshine State; every day is an opportunity to save.'
    },
    {
      icon: '🏠',
      // image: homeValueIcon,
      title: 'Boost in Home Value',
      description: 'Homes with solar sell faster and for more.'
    }
  ]

  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-intro">
          <h2 className="benefits-title">Why Referrals Matter</h2>
          <p className="benefits-subtitle">
            You've already taken a big step by going solar. Now you can help your family and friends make the switch — and earn cash rewards for every successful referral.
          </p>
          <div className="benefits-process">
            <h3>We make the process simple:</h3>
            <ol>
              <li>Share your unique referral link</li>
              <li>Your referral completes a solar installation</li>
              <li>You get paid up to $1,000</li>
            </ol>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">
                {benefit.image ? (
                  <img src={benefit.image} alt={benefit.title} />
                ) : (
                  benefit.icon
                )}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-highlight">
          <p>
            For each friend, family member, or neighbor you refer who installs solar with us,{' '}
            <strong>you'll receive up to $1,000</strong>. There's no limit — the more people you refer, the more you earn.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits

