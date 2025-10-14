import React from 'react';
import { Link } from 'react-router-dom';

const EmergencyServicesPage: React.FC = () => {
  const emergencyFeatures = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock emergency response, including weekends and holidays',
      icon: '🕐'
    },
    {
      title: 'Rapid Response',
      description: 'Quick dispatch and arrival times to minimize property damage',
      icon: '⚡'
    },
    {
      title: 'Licensed Technicians',
      description: 'Fully licensed and insured professionals with extensive experience',
      icon: '🏅'
    },
    {
      title: 'Advanced Equipment',
      description: 'State-of-the-art tools and equipment for efficient emergency repairs',
      icon: '🔧'
    }
  ];

  const emergencyServices = [
    'Burst pipe repairs',
    'Sewer line emergencies',
    'Water leak detection and repair',
    'Drain blockages and backups',
    'Water heater failures',
    'Gas line emergencies',
    'Flooding and water damage control',
    'Emergency valve replacements'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🚨</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">EMERGENCY SERVICE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              24/7 Emergency Plumbing Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              When plumbing emergencies strike, we're here to help. Fast, reliable emergency response across the Greater Toronto Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1416-555-0123"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                📞 Call Now: (416) 555-0123
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Request Service Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Why Choose Our Emergency Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When every minute counts, you need a plumbing service you can trust to respond quickly and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services List */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-8 text-center">
              Emergency Services We Provide
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyServices.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Form */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Need Emergency Service?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don't wait - contact us immediately for emergency plumbing services.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📞</div>
                  <h3 className="font-bold text-lg mb-2">Call Now</h3>
                  <a href="tel:+1416-555-0123" className="text-brand-primary font-bold text-xl">
                    (416) 555-0123
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className="font-bold text-lg mb-2">Text Us</h3>
                  <a href="sms:+1416-555-0123" className="text-brand-primary font-bold text-xl">
                    (416) 555-0123
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Quick response</p>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="w-full bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors inline-block"
              >
                Request Service Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyServicesPage;
