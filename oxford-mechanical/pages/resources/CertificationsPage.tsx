'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      name: 'Licensed Master Plumber',
      issuingBody: 'Ontario College of Trades',
      description: 'Highest level of plumbing certification in Ontario',
      validUntil: '2025-12-31',
      icon: '🏆'
    },
    {
      name: 'Certified Backflow Prevention',
      issuingBody: 'Ontario Water Works Association',
      description: 'Specialized certification for backflow prevention systems',
      validUntil: '2024-08-15',
      icon: '🔒'
    },
    {
      name: 'OSHA Safety Certified',
      issuingBody: 'Occupational Safety and Health Administration',
      description: 'Workplace safety and health standards compliance',
      validUntil: '2025-03-20',
      icon: '🛡️'
    },
    {
      name: 'Water Efficiency Specialist',
      issuingBody: 'Alliance for Water Efficiency',
      description: 'Expertise in water conservation and efficiency programs',
      validUntil: '2024-11-30',
      icon: '💧'
    },
    {
      name: 'Commercial HVAC Certified',
      issuingBody: 'Heating, Refrigeration and Air Conditioning Institute',
      description: 'Commercial heating and cooling system expertise',
      validUntil: '2025-06-10',
      icon: '🌡️'
    },
    {
      name: 'Project Management Professional',
      issuingBody: 'Project Management Institute',
      description: 'Advanced project management and coordination skills',
      validUntil: '2025-09-05',
      icon: '📋'
    }
  ];

  const licenses = [
    {
      type: 'Master Plumber License',
      number: 'MP-2023-001234',
      status: 'Active',
      expiry: '2025-12-31'
    },
    {
      type: 'Business License',
      number: 'BL-2013-567890',
      status: 'Active',
      expiry: '2024-12-31'
    },
    {
      type: 'Insurance Certificate',
      number: 'INS-2024-789012',
      status: 'Active',
      expiry: '2024-12-31'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Certifications & Licenses
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Our professional credentials and industry certifications that ensure quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards with ongoing professional development and industry certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-ink">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500">{cert.issuingBody}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Valid until:</span>
                  <span className="font-semibold text-brand-primary">
                    {cert.validUntil}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Business Licenses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All necessary licenses and insurance coverage for commercial plumbing services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-6">
                {licenses.map((license, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <div>
                      <h3 className="font-bold text-brand-ink">{license.type}</h3>
                      <p className="text-sm text-gray-600">License #: {license.number}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        license.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {license.status}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">Expires: {license.expiry}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Coverage */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Insurance Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance coverage for your peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-brand-ink mb-2">General Liability</h3>
              <p className="text-sm text-gray-600">$2M coverage for property damage and bodily injury</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold text-brand-ink mb-2">Professional Liability</h3>
              <p className="text-sm text-gray-600">$1M coverage for professional errors and omissions</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl mb-3">👷</div>
              <h3 className="font-bold text-brand-ink mb-2">Workers Compensation</h3>
              <p className="text-sm text-gray-600">Full coverage for all employees and contractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Trust Our Professional Team
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Work with licensed, certified, and insured professionals you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+1416-555-0123"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-primary transition-colors"
            >
              Call: (416) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;
