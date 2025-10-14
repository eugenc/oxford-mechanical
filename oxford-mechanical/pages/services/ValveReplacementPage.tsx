import React from 'react';
import { Link } from 'react-router-dom';

const ValveReplacementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🔩</span>
              <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">VALVE REPLACEMENT</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Valve Replacement Services
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Professional valve installation and replacement services for commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-colors"
              >
                Schedule Service
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

      {/* Content placeholder */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-brand-ink mb-4">
            Valve Replacement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional valve installation and replacement services for commercial properties.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ValveReplacementPage;
