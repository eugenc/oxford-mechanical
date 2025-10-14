import React from 'react';
import { Link } from 'react-router-dom';

const RetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Retail & Commercial
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Shopping centers and retail space plumbing solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetailPage;
