import React from 'react';
import { Link } from 'react-router-dom';

const CameraInspectionPage: React.FC = () => {
  const inspectionFeatures = [
    {
      title: 'HD Video Quality',
      description: 'Crystal clear video footage for accurate problem identification',
      icon: '📹'
    },
    {
      title: 'Detailed Reports',
      description: 'Comprehensive inspection reports with photos and recommendations',
      icon: '📋'
    },
    {
      title: 'Cost Estimation',
      description: 'Accurate repair cost estimates based on inspection findings',
      icon: '💰'
    },
    {
      title: 'Preventive Maintenance',
      description: 'Identify potential issues before they become major problems',
      icon: '🛠️'
    }
  ];

  const inspectionTypes = [
    {
      name: 'Sewer Line Inspection',
      description: 'Complete sewer line assessment from building to municipal connection',
      features: ['Blockage identification', 'Root intrusion detection', 'Pipe condition assessment']
    },
    {
      name: 'Drain System Inspection',
      description: 'Comprehensive drain system evaluation for commercial properties',
      features: ['Grease buildup analysis', 'Flow rate assessment', 'Structural integrity check']
    },
    {
      name: 'Pre-Purchase Inspection',
      description: 'Property condition assessment before purchase or lease',
      features: ['System documentation', 'Repair recommendations', 'Cost projections']
    },
    {
      name: 'Maintenance Inspection',
      description: 'Regular system monitoring for preventive maintenance',
      features: ['Trend analysis', 'Performance tracking', 'Maintenance scheduling']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📹</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">CAMERA INSPECTION</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Advanced Camera Inspection Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              State-of-the-art video inspection technology for accurate problem identification and cost-effective solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-colors"
              >
                Schedule Inspection
              </Link>
              <a
                href="tel:+1416-555-0123"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-ink transition-colors"
              >
                Call: (416) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inspection Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Why Choose Camera Inspection?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced camera inspection technology provides accurate diagnosis and cost-effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Types */}
      <section className="bg-white py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Types of Inspections
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive inspection services for every commercial plumbing need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inspectionTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-brand-ink mb-4">
                  {type.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-brand-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
              Our Inspection Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure thorough and accurate inspection results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-brand-ink mb-2">Initial Assessment</h3>
              <p className="text-gray-600 text-sm">
                We evaluate your system and determine the best inspection approach.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-brand-ink mb-2">Camera Deployment</h3>
              <p className="text-gray-600 text-sm">
                Advanced camera equipment is deployed to capture detailed video footage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-brand-ink mb-2">Analysis & Reporting</h3>
              <p className="text-gray-600 text-sm">
                Detailed analysis of findings with comprehensive reports and recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-brand-ink mb-2">Solution Planning</h3>
              <p className="text-gray-600 text-sm">
                Cost estimates and repair recommendations based on inspection findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Schedule Your Camera Inspection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get accurate diagnosis and cost-effective solutions with our advanced camera inspection services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Inspection
            </Link>
            <a
              href="tel:+1416-555-0123"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-brand-primary transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CameraInspectionPage;
