import React from 'react';
import { Link } from 'react-router-dom';

const DrainCleaningPage: React.FC = () => {
  const services = [
    {
      title: 'Hydro Jetting',
      description: 'High-pressure water cleaning for stubborn blockages',
      features: ['Removes grease and debris', 'Safe for all pipe types', 'Long-lasting results']
    },
    {
      title: 'Camera Inspection',
      description: 'Advanced video inspection to identify problems',
      features: ['HD video quality', 'Detailed reports', 'Precise problem identification']
    },
    {
      title: 'Root Removal',
      description: 'Professional tree root removal from sewer lines',
      features: ['Specialized equipment', 'Prevents future growth', 'System restoration']
    },
    {
      title: 'Preventive Maintenance',
      description: 'Regular cleaning to prevent future blockages',
      features: ['Scheduled service', 'Cost savings', 'System longevity']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🚿</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">DRAIN CLEANING</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Professional Drain Cleaning Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Expert drain cleaning and sewer maintenance for commercial properties. We keep your plumbing systems flowing smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-colors"
              >
                Schedule Service
              </Link>
              <a
                href="tel:+1416-555-0123"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-ink transition-colors"
              >
                Call: (416) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Our Drain Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency blockages, we provide comprehensive drain cleaning solutions for all commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-ink mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Why Choose Our Drain Cleaning Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine advanced technology with expert knowledge to deliver superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔧
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Advanced Equipment
              </h3>
              <p className="text-gray-600">
                State-of-the-art hydro jetting and camera inspection equipment for thorough cleaning and accurate diagnosis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⏰
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Quick Response
              </h3>
              <p className="text-gray-600">
                Fast service to minimize disruption to your business operations and prevent further damage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Cost Effective
              </h3>
              <p className="text-gray-600">
                Preventive maintenance programs that save money by avoiding costly emergency repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Need Drain Cleaning Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let blocked drains disrupt your business. Contact us today for professional drain cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Service
            </Link>
            <a
              href="tel:+1416-555-0123"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-primary transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrainCleaningPage;
