'use client'
import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      name: 'Blog & Insights',
      href: '/resources/blog',
      description: 'Expert advice and industry insights from our plumbing professionals',
      icon: '📝',
      articles: 25
    },
    {
      name: 'Maintenance Guides',
      href: '/resources/maintenance-guides',
      description: 'Step-by-step maintenance instructions for property managers',
      icon: '📋',
      guides: 15
    },
    {
      name: 'Emergency Procedures',
      href: '/resources/emergency-procedures',
      description: 'What to do during plumbing emergencies and how to prevent them',
      icon: '🚨',
      procedures: 8
    },
    {
      name: 'Water Saving Tips',
      href: '/resources/water-saving',
      description: 'Eco-friendly water conservation strategies for commercial properties',
      icon: '💧',
      tips: 20
    },
    {
      name: 'Case Studies',
      href: '/resources/case-studies',
      description: 'Real solutions for real challenges in commercial plumbing',
      icon: '📊',
      studies: 12
    },
    {
      name: 'Certifications',
      href: '/resources/certifications',
      description: 'Our professional credentials and industry certifications',
      icon: '🏅',
      certs: 5
    }
  ];

  const featuredArticles = [
    {
      title: 'Preventing Winter Plumbing Emergencies in Commercial Buildings',
      excerpt: 'Essential tips to protect your plumbing systems during cold weather months.',
      category: 'Maintenance',
      readTime: '5 min read',
      date: 'December 15, 2024'
    },
    {
      title: 'Water Conservation Strategies for High-Rise Buildings',
      excerpt: 'How to implement effective water-saving measures in residential towers.',
      category: 'Sustainability',
      readTime: '7 min read',
      date: 'December 10, 2024'
    },
    {
      title: 'Emergency Response: What to Do When Pipes Burst',
      excerpt: 'Immediate steps to take when facing a burst pipe emergency.',
      category: 'Emergency',
      readTime: '4 min read',
      date: 'December 5, 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Expert guidance, maintenance guides, and helpful resources for commercial property managers.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Resource Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of plumbing resources, guides, and expert insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {Object.keys(category).find(key => key !== 'name' && key !== 'href' && key !== 'description' && key !== 'icon') && 
                       `${Object.values(category).find(val => typeof val === 'number')} items`}
                    </div>
                    
                    <div className="flex items-center text-brand-primary font-semibold group-hover:text-brand-accent transition-colors">
                      Explore
                      <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Latest insights and expert advice from our plumbing professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-brand-ink mb-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="text-brand-primary font-semibold hover:text-brand-accent cursor-pointer">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Frequently accessed resources and tools for property managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-brand-ink mb-2">Emergency Hotline</h3>
              <p className="text-sm text-gray-600 mb-3">24/7 emergency response</p>
              <a href="tel:+1416-555-0123" className="text-brand-primary font-semibold">
                (416) 555-0123
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-bold text-brand-ink mb-2">Maintenance Checklist</h3>
              <p className="text-sm text-gray-600 mb-3">Monthly maintenance tasks</p>
              <Link to="/resources/maintenance-guides" className="text-brand-primary font-semibold">
                Download PDF
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="font-bold text-brand-ink mb-2">Water Audit</h3>
              <p className="text-sm text-gray-600 mb-3">Free water efficiency assessment</p>
              <Link to="/contact" className="text-brand-primary font-semibold">
                Schedule Audit
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-brand-ink mb-2">Service Request</h3>
              <p className="text-sm text-gray-600 mb-3">Request maintenance or repairs</p>
              <Link to="/contact" className="text-brand-primary font-semibold">
                Submit Request
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Need More Information?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our experts are here to help with any plumbing questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Our Experts
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

export default ResourcesPage;
