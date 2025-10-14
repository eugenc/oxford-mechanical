'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'High-Rise Condo Emergency Response',
      client: 'Metro Property Management',
      location: 'Downtown Toronto',
      challenge: 'Multiple burst pipes during extreme cold weather affecting 200+ units',
      solution: 'Emergency response team deployed within 2 hours, temporary repairs completed, full system replacement',
      results: [
        'Zero unit displacement',
        '48-hour complete restoration',
        '$50,000 insurance savings',
        '100% tenant satisfaction'
      ],
      category: 'Emergency'
    },
    {
      title: 'Office Building Water Conservation',
      client: 'Corporate Real Estate Group',
      location: 'Mississauga',
      challenge: 'High water costs and inefficient fixtures in 20-story office building',
      solution: 'Comprehensive water audit, low-flow fixture installation, smart monitoring system',
      results: [
        '35% water usage reduction',
        '$12,000 annual savings',
        '18-month payback period',
        'LEED certification achieved'
      ],
      category: 'Conservation'
    },
    {
      title: 'Hospital Plumbing System Upgrade',
      client: 'Toronto Health Network',
      location: 'North York',
      challenge: 'Aging plumbing infrastructure in critical healthcare facility',
      solution: 'Phased renovation approach, medical-grade fixtures, backup systems',
      results: [
        'Zero service interruption',
        'Code compliance achieved',
        'Infection control improved',
        'Maintenance costs reduced 40%'
      ],
      category: 'Healthcare'
    },
    {
      title: 'Shopping Center Drain System',
      client: 'Retail Properties Inc.',
      location: 'Brampton',
      challenge: 'Recurring drain blockages affecting multiple tenants',
      solution: 'Root cause analysis, preventive maintenance program, tenant education',
      results: [
        '90% reduction in blockages',
        'Tenant satisfaction improved',
        'Maintenance costs reduced 60%',
        'Zero tenant complaints'
      ],
      category: 'Maintenance'
    },
    {
      title: 'University Campus Water Efficiency',
      client: 'York University',
      location: 'Richmond Hill',
      challenge: 'High water consumption across campus facilities',
      solution: 'Campus-wide water audit, smart metering, conservation education program',
      results: [
        '40% water consumption reduction',
        '$75,000 annual savings',
        'Student engagement increased',
        'Sustainability goals exceeded'
      ],
      category: 'Education'
    },
    {
      title: 'Industrial Facility Emergency Repair',
      client: 'Manufacturing Solutions Ltd.',
      location: 'Hamilton',
      challenge: 'Critical system failure threatening production line',
      solution: 'Emergency response, temporary bypass system, permanent replacement',
      results: [
        'Zero production downtime',
        'System reliability improved',
        'Preventive measures implemented',
        'Cost savings of $200,000'
      ],
      category: 'Industrial'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Real solutions for real challenges in commercial plumbing across the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we've solved complex plumbing challenges for commercial properties across the GTA.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">{study.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-ink mb-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-brand-primary font-semibold mb-6">
                    {study.client}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-brand-ink mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-brand-ink mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-brand-ink mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-brand-primary rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven results across hundreds of commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">24/7</div>
              <div className="text-gray-600">Emergency Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you solve your plumbing challenges with proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
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

export default CaseStudiesPage;
