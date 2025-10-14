import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-brand-ink mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                This privacy policy describes how Oxford Mechanical collects, uses, and protects your personal information.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you contact us for services.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use your information to provide plumbing services and communicate with you about our services.
              </p>
              <h2 className="text-2xl font-bold text-brand-ink mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this privacy policy, please contact us at info@oxfordmechanical.ca
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
