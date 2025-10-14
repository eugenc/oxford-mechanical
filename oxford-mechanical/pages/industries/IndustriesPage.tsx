'use client'
import React from 'react';
import { Link } from 'react-router-dom';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      name: 'High-Rise Condos',
      href: '/industries/condos',
      description: 'Minimal disruption maintenance for high-density residential properties',
      icon: '🏢',
      features: ['24/7 Emergency Response', 'Preventive Maintenance', 'Water Conservation Programs'],
      image: '/assets/industries/condos.jpg'
    },
    {
      name: 'Office Buildings',
      href: '/industries/office',
      description: 'Commercial-grade solutions for corporate environments',
      icon: '🏢',
      features: ['Energy Efficiency', 'Compliance Management', 'Scheduled Maintenance'],
      image: '/assets/industries/office.jpg'
    },
    {
      name: 'Schools & Universities',
      href: '/industries/education',
      description: 'Educational institution plumbing maintenance and upgrades',
      icon: '🎓',
      features: ['Student Safety', 'Code Compliance', 'Budget Management'],
      image: '/assets/industries/education.jpg'
    },
    {
      name: 'Healthcare Facilities',
      href: '/industries/healthcare',
      description: 'Specialized plumbing for hospitals and medical centers',
      icon: '🏥',
      features: ['Medical Gas Systems', 'Infection Control', 'Emergency Response'],
      image: '/assets/industries/healthcare.jpg'
    },
    {
      name: 'Retail & Commercial',
      href: '/industries/retail',
      description: 'Shopping centers and retail space plumbing solutions',
      icon: '🛍️',
      features: ['Customer Experience', 'Operational Efficiency', 'Cost Optimization'],
      image: '/assets/industries/retail.jpg'
    },
    {
      name: 'Industrial Facilities',
      href: '/industries/industrial',
      description: 'Heavy-duty plumbing for manufacturing and industrial sites',
      icon: '🏭',
      features: ['Heavy-Duty Systems', 'Process Water', 'Waste Management'],
      image: '/assets/industries/industrial.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Specialized plumbing solutions for every commercial sector across the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Specialized Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each industry has unique plumbing challenges. We understand these differences and provide tailored solutions for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                to={industry.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl">{industry.icon}</span>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {industry.features.map((feature, index) => (
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

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Why Choose Oxford Mechanical?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of each industry and provide specialized solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Deep understanding of each sector's unique plumbing requirements and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Rapid Response
              </h3>
              <p className="text-gray-600">
                24/7 emergency service to minimize downtime and protect your operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                💰
              </div>
              <h3 className="text-xl font-bold text-brand-ink mb-3">
                Cost Efficiency
              </h3>
              <p className="text-gray-600">
                Preventive maintenance programs that reduce long-term costs and extend system life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industry-specific plumbing needs and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-primary transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
