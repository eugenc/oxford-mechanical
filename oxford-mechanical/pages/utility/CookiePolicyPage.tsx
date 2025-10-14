import React from 'react';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-brand-ink mb-8">
              Cookie Policy
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                This cookie policy explains how Oxford Mechanical uses cookies on our website.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">What Are Cookies</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Contact Us</h2>
              <p className="text-gray-600">
                For questions about our cookie policy, contact us at info@oxfordmechanical.ca
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
