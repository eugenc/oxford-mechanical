import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      name: 'Emergency Services',
      href: '/services/emergency',
      description: '24/7 emergency response for urgent plumbing issues',
      icon: '🚨',
      features: ['24/7 Availability', 'Rapid Response', 'Emergency Repairs']
    },
    {
      name: 'Drain Cleaning',
      href: '/services/drain-cleaning',
      description: 'Professional drain cleaning and sewer maintenance',
      icon: '🚿',
      features: ['Hydro Jetting', 'Camera Inspection', 'Root Removal']
    },
    {
      name: 'Camera Inspection',
      href: '/services/camera-inspection',
      description: 'Advanced diagnostic technology for accurate problem identification',
      icon: '📹',
      features: ['HD Video Inspection', 'Detailed Reports', 'Cost Estimation']
    },
    {
      name: 'Leak Repair',
      href: '/services/leak-repair',
      description: 'Comprehensive leak investigation and precision repair',
      icon: '🔧',
      features: ['Leak Detection', 'Non-Invasive Repair', 'Water Damage Prevention']
    },
    {
      name: 'Maintenance',
      href: '/services/maintenance',
      description: 'Preventative maintenance programs to avoid costly repairs',
      icon: '🛠️',
      features: ['Scheduled Inspections', 'Preventive Care', 'Cost Savings']
    },
    {
      name: 'Water Saving Solutions',
      href: '/services/water-saving',
      description: 'Eco-friendly upgrades and water conservation solutions',
      icon: '💧',
      features: ['Water Audits', 'Efficient Fixtures', 'Conservation Programs']
    },
    {
      name: 'Rough-In Plumbing',
      href: '/services/rough-in',
      description: 'New construction and renovation plumbing installation',
      icon: '🏗️',
      features: ['New Construction', 'Renovations', 'Code Compliance']
    },
    {
      name: 'Valve Replacement',
      href: '/services/valve-replacement',
      description: 'Professional valve installation and replacement services',
      icon: '🔩',
      features: ['Valve Installation', 'System Upgrades', 'Reliability']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Professional Plumbing Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Comprehensive plumbing solutions for commercial properties across the Greater Toronto Area
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventative maintenance, we provide comprehensive plumbing solutions for every commercial property need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-500">
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                    Learn More
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Need Professional Plumbing Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and consultation. We're here to help with all your commercial plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Inspection
            </Link>
            <Link
              to="/services/emergency"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-primary transition-colors"
            >
              Emergency Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
