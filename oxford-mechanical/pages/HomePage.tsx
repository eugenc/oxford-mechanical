import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import EmergencyServiceWidget from '../components/EmergencyServiceWidget';
import Tabs from '../components/Tabs';
import PropertyTypeSelector from '../components/PropertyTypeSelector';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 lg:pb-0">
      {/* Hero Section - Enhanced for Performance & Accessibility */}
      <section 
        className="relative bg-gradient-to-br from-brand-ink via-brand-ink to-gray-900 text-white overflow-hidden min-h-[90vh] flex items-center"
        role="banner"
        aria-label="Hero section with main call-to-action"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/header-background.webp"
            alt="Commercial plumbing equipment and facilities"
            className="w-full h-full object-cover"
          />
          {/* Optimized dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80"></div>
        </div>
        
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-5xl">
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <span className="text-brand-accent">🏅</span>
                <span className="text-xs sm:text-sm font-medium">Licensed Since 2013</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <span className="text-brand-accent">🛡️</span>
                <span className="text-xs sm:text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20">
                <span className="text-brand-accent">⭐</span>
                <span className="text-xs sm:text-sm font-medium">100% Satisfaction</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6 sm:mb-8">
              Professional
              <span className="block text-brand-accent">Plumbing Services</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-white/90 mt-2">
                for Toronto's Commercial Properties
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl leading-relaxed">
              Expert plumbing solutions for high-rise condos, office buildings, and commercial properties. 
              Emergency response, preventative maintenance, and water-saving solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                Get Free Inspection
                <svg className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/services/emergency"
                className="group bg-brand-primary hover:bg-brand-primary/90 text-white inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
              >
                Emergency Service
                <svg className="ml-2 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the homepage content will be added here */}
      {/* This is a simplified version - the full content will be added in subsequent steps */}
      
      {/* Emergency Service Widget */}
      <EmergencyServiceWidget />
    </div>
  );
};

export default HomePage;
