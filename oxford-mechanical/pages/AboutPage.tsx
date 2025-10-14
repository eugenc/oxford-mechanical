'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Founder & CEO',
      experience: '15+ years',
      specialties: ['Commercial Plumbing', 'Project Management', 'Team Leadership'],
      image: '/assets/team/ceo.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Lead Technician',
      experience: '12+ years',
      specialties: ['Emergency Repairs', 'System Diagnostics', 'Training'],
      image: '/assets/team/lead-tech.jpg'
    },
    {
      name: 'Mike Chen',
      position: 'Senior Plumber',
      experience: '10+ years',
      specialties: ['High-Rise Systems', 'Preventive Maintenance', 'Water Conservation'],
      image: '/assets/team/senior-plumber.jpg'
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Customer Relations Manager',
      experience: '8+ years',
      specialties: ['Client Relations', 'Service Coordination', 'Quality Assurance'],
      image: '/assets/team/customer-manager.jpg'
    }
  ];

  const certifications = [
    'Licensed Master Plumber',
    'Certified Backflow Prevention',
    'OSHA Safety Certified',
    'Water Efficiency Specialist',
    'Commercial HVAC Certified'
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on quality, using only the best materials and techniques.',
      icon: '🏆'
    },
    {
      title: 'Reliability',
      description: 'Count on us to be there when you need us, with consistent, dependable service.',
      icon: '⏰'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead with the latest technology and industry best practices.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent communication and fair pricing in everything we do.',
      icon: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              About Oxford Mechanical
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Your trusted partner for commercial plumbing services across the Greater Toronto Area since 2013.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2013, Oxford Mechanical has grown from a small local plumbing company to one of Toronto's most trusted commercial plumbing service providers. Our journey began with a simple mission: to provide exceptional plumbing services that commercial property owners and managers can rely on.
                </p>
                <p>
                  Over the years, we've built lasting relationships with property management companies, building owners, and facility managers across the Greater Toronto Area. Our commitment to quality, reliability, and customer service has earned us a reputation as the go-to plumbing experts for high-rise condos, office buildings, and commercial facilities.
                </p>
                <p>
                  Today, we're proud to serve hundreds of commercial properties with our comprehensive range of plumbing services, from emergency repairs to preventative maintenance programs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-brand-ink mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">10+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">500+</div>
                  <div className="text-gray-600">Properties Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-ink mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional plumbing services for your commercial property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-ink mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-primary font-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.experience} experience
                  </p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, specIndex) => (
                      <div key={specIndex} className="text-sm text-gray-500">
                        • {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Certifications & Licenses
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We maintain the highest standards with professional certifications and ongoing training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🏅</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help with your commercial plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-brand-primary text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-brand-primary hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
