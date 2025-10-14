'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const WaterSavingTipsPage: React.FC = () => {
  const tips = [
    {
      category: 'Fixtures',
      title: 'Install Low-Flow Fixtures',
      description: 'Replace old fixtures with water-efficient models',
      savings: 'Up to 30% water reduction',
      icon: '🚿'
    },
    {
      category: 'Maintenance',
      title: 'Fix Leaks Immediately',
      description: 'Even small leaks can waste thousands of gallons',
      savings: 'Prevent water waste',
      icon: '🔧'
    },
    {
      category: 'Monitoring',
      title: 'Install Smart Meters',
      description: 'Track water usage and identify inefficiencies',
      savings: '15-25% reduction',
      icon: '📊'
    },
    {
      category: 'Landscaping',
      title: 'Use Drought-Resistant Plants',
      description: 'Reduce outdoor water consumption',
      savings: '50% outdoor water savings',
      icon: '🌱'
    },
    {
      category: 'Equipment',
      title: 'Upgrade Water Heaters',
      description: 'Install energy-efficient water heating systems',
      savings: '20-30% energy savings',
      icon: '🔥'
    },
    {
      category: 'Behavior',
      title: 'Educate Staff and Tenants',
      description: 'Promote water-conscious habits',
      savings: '10-15% reduction',
      icon: '👥'
    }
  ];

  const caseStudies = [
    {
      property: 'Downtown Office Tower',
      location: 'Toronto',
      savings: '35% water reduction',
      investment: '$15,000',
      payback: '18 months',
      description: 'Comprehensive water audit and fixture upgrades'
    },
    {
      property: 'High-Rise Condo Complex',
      location: 'Mississauga',
      savings: '28% water reduction',
      investment: '$25,000',
      payback: '24 months',
      description: 'Smart metering and leak detection system'
    },
    {
      property: 'Shopping Center',
      location: 'Brampton',
      savings: '42% water reduction',
      investment: '$18,000',
      payback: '15 months',
      description: 'Low-flow fixtures and irrigation upgrades'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">💧</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">WATER SAVING TIPS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Water Saving Tips
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Eco-friendly water conservation strategies for commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Water Saving Tips */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Water Conservation Strategies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Implement these proven strategies to reduce water consumption and lower utility costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{tip.icon}</div>
                  <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-ink mb-3">
                  {tip.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {tip.description}
                </p>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <span className="text-sm font-semibold text-green-800">
                    💰 {tip.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our water conservation projects across the GTA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-brand-ink mb-2">
                  {study.property}
                </h3>
                <p className="text-gray-600 mb-4">{study.location}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Water Savings:</span>
                    <span className="font-semibold text-green-600">{study.savings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold">{study.investment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payback Period:</span>
                    <span className="font-semibold">{study.payback}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Audit CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Get Your Free Water Audit
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how much water and money you can save with our comprehensive water audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Free Audit
            </Link>
            <a
              href="tel:+1416-555-0123"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call: (416) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterSavingTipsPage;
