'use client'

import React, { useState } from 'react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'emergency', name: 'Emergency Repairs' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'renovation', name: 'Renovations' },
    { id: 'installation', name: 'New Installations' }
  ];

  const projects = [
    {
      id: 1,
      title: 'High-Rise Condo Emergency Repair',
      category: 'emergency',
      location: 'Downtown Toronto',
      description: 'Emergency sewer line repair in 40-story residential tower',
      image: '/assets/projects/condo-emergency.jpg',
      beforeAfter: {
        before: '/assets/projects/before-condo.jpg',
        after: '/assets/projects/after-condo.jpg'
      },
      features: ['24-hour response', 'Minimal disruption', 'Complete restoration'],
      client: 'Metro Property Management'
    },
    {
      id: 2,
      title: 'Office Building Water System Upgrade',
      category: 'installation',
      location: 'Mississauga',
      description: 'Complete water system modernization for 20-story office building',
      image: '/assets/projects/office-upgrade.jpg',
      beforeAfter: {
        before: '/assets/projects/before-office.jpg',
        after: '/assets/projects/after-office.jpg'
      },
      features: ['Energy efficiency', 'Water conservation', 'Smart controls'],
      client: 'Corporate Real Estate Group'
    },
    {
      id: 3,
      title: 'Hospital Plumbing Renovation',
      category: 'renovation',
      location: 'North York',
      description: 'Medical-grade plumbing system installation and upgrade',
      image: '/assets/projects/hospital-renovation.jpg',
      beforeAfter: {
        before: '/assets/projects/before-hospital.jpg',
        after: '/assets/projects/after-hospital.jpg'
      },
      features: ['Medical gas systems', 'Infection control', 'Code compliance'],
      client: 'Toronto Health Network'
    },
    {
      id: 4,
      title: 'Shopping Center Drain System',
      category: 'maintenance',
      location: 'Brampton',
      description: 'Comprehensive drain cleaning and maintenance program',
      image: '/assets/projects/shopping-center.jpg',
      beforeAfter: {
        before: '/assets/projects/before-shopping.jpg',
        after: '/assets/projects/after-shopping.jpg'
      },
      features: ['Preventive maintenance', 'Camera inspection', 'Root removal'],
      client: 'Retail Properties Inc.'
    },
    {
      id: 5,
      title: 'University Campus Water Conservation',
      category: 'installation',
      location: 'Richmond Hill',
      description: 'Campus-wide water efficiency upgrade and monitoring system',
      image: '/assets/projects/university-conservation.jpg',
      beforeAfter: {
        before: '/assets/projects/before-university.jpg',
        after: '/assets/projects/after-university.jpg'
      },
      features: ['Water audits', 'Smart monitoring', '40% water savings'],
      client: 'York University'
    },
    {
      id: 6,
      title: 'Industrial Facility Emergency Response',
      category: 'emergency',
      location: 'Hamilton',
      description: 'Critical system failure emergency repair and system upgrade',
      image: '/assets/projects/industrial-emergency.jpg',
      beforeAfter: {
        before: '/assets/projects/before-industrial.jpg',
        after: '/assets/projects/after-industrial.jpg'
      },
      features: ['Emergency response', 'System redundancy', 'Process continuity'],
      client: 'Manufacturing Solutions Ltd.'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Explore our portfolio of successful commercial plumbing projects across the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">🏗️</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-brand-primary">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-ink mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-4 h-4 mr-2">📍</span>
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-4 h-4 mr-2">🏢</span>
                      {project.client}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    {project.features.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-500">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 bg-brand-primary text-white px-4 py-2 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors">
                    View Details
                  </button>
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
              Project Success by the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself with consistently successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your commercial plumbing needs and create a solution that works for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-primary transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
