'use client'
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-brand-ink mb-8">
              Terms of Service
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                These terms of service govern your use of Oxford Mechanical's services and website.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Service Terms</h2>
              <p className="text-gray-600 mb-6">
                By using our services, you agree to these terms and conditions.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Contact Us</h2>
              <p className="text-gray-600">
                For questions about these terms, contact us at info@oxfordmechanical.ca
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
