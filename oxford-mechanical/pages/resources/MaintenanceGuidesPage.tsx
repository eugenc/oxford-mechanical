'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceGuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'Monthly Plumbing Checklist',
      description: 'Essential monthly maintenance tasks for commercial properties',
      category: 'Preventive',
      downloadCount: '2.3k downloads',
      pdfSize: '2.4 MB'
    },
    {
      title: 'Winter Plumbing Preparation',
      description: 'Step-by-step guide to prepare your plumbing for winter',
      category: 'Seasonal',
      downloadCount: '1.8k downloads',
      pdfSize: '3.1 MB'
    },
    {
      title: 'Drain Maintenance Guide',
      description: 'How to maintain and clean commercial drain systems',
      category: 'Maintenance',
      downloadCount: '1.5k downloads',
      pdfSize: '2.8 MB'
    },
    {
      title: 'Water Heater Maintenance',
      description: 'Comprehensive water heater care and troubleshooting',
      category: 'Equipment',
      downloadCount: '1.2k downloads',
      pdfSize: '2.1 MB'
    },
    {
      title: 'Emergency Shut-off Procedures',
      description: 'Quick reference for emergency water shut-off procedures',
      category: 'Emergency',
      downloadCount: '3.1k downloads',
      pdfSize: '1.2 MB'
    },
    {
      title: 'Commercial Toilet Maintenance',
      description: 'Maintaining commercial restroom facilities',
      category: 'Facilities',
      downloadCount: '980 downloads',
      pdfSize: '2.6 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Maintenance Guides
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Step-by-step maintenance instructions for property managers and facility teams.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Downloadable Maintenance Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional maintenance guides to help you keep your plumbing systems running efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-xs text-gray-500">{guide.pdfSize}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-ink mb-3">
                  {guide.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{guide.downloadCount}</span>
                  <button className="text-brand-primary font-semibold hover:text-brand-accent transition-colors">
                    Download PDF →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Quick Maintenance Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential maintenance tips you can implement immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-bold text-brand-ink mb-2">Regular Inspections</h3>
              <p className="text-sm text-gray-600">Check for leaks and signs of wear monthly</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">🧹</div>
              <h3 className="font-bold text-brand-ink mb-2">Clean Drains</h3>
              <p className="text-sm text-gray-600">Prevent clogs with regular drain cleaning</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">🌡️</div>
              <h3 className="font-bold text-brand-ink mb-2">Monitor Temperature</h3>
              <p className="text-sm text-gray-600">Keep pipes from freezing in winter</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-brand-ink mb-2">Professional Service</h3>
              <p className="text-sm text-gray-600">Schedule regular professional maintenance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceGuidesPage;
