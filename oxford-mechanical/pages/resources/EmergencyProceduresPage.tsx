'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const EmergencyProceduresPage: React.FC = () => {
  const procedures = [
    {
      title: 'Burst Pipe Emergency',
      description: 'Immediate steps to take when a pipe bursts',
      steps: [
        'Turn off main water supply immediately',
        'Call emergency plumbing service',
        'Document damage with photos',
        'Move valuables away from water'
      ],
      priority: 'High'
    },
    {
      title: 'Sewer Backup',
      description: 'What to do when sewage backs up into your property',
      steps: [
        'Evacuate affected areas immediately',
        'Turn off water supply',
        'Call emergency service',
        'Do not use any drains or toilets'
      ],
      priority: 'Critical'
    },
    {
      title: 'Water Heater Failure',
      description: 'Emergency response for water heater issues',
      steps: [
        'Turn off power/gas to water heater',
        'Turn off water supply to heater',
        'Call for emergency service',
        'Check for gas leaks if applicable'
      ],
      priority: 'High'
    },
    {
      title: 'Flooding Emergency',
      description: 'Response procedures for flooding situations',
      steps: [
        'Turn off main water supply',
        'Call emergency services',
        'Evacuate if necessary',
        'Document damage for insurance'
      ],
      priority: 'Critical'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🚨</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">EMERGENCY PROCEDURES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Emergency Procedures
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              What to do during plumbing emergencies and how to prevent them.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Emergency Hotline</h3>
              <a href="tel:+1416-555-0123" className="text-2xl font-bold">
                (416) 555-0123
              </a>
              <p className="text-sm mt-2">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Emergency Response Procedures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these step-by-step procedures during plumbing emergencies to minimize damage and ensure safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {procedures.map((procedure, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-ink">
                    {procedure.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    procedure.priority === 'Critical' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {procedure.priority}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {procedure.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-ink">Steps to Take:</h4>
                  {procedure.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Prevention is Key
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Regular maintenance and preventive measures can help avoid most plumbing emergencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                🔧
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Regular Maintenance
              </h3>
              <p className="text-gray-600">
                Schedule regular inspections and maintenance to catch problems early.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                🌡️
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Winter Preparation
              </h3>
              <p className="text-gray-600">
                Insulate pipes and prepare systems for cold weather to prevent freezing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Emergency Contacts
              </h3>
              <p className="text-gray-600">
                Keep emergency plumbing contacts readily available for quick response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Need Emergency Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait - contact us immediately for emergency plumbing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1416-555-0123"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Call Emergency Line
            </a>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyProceduresPage;
