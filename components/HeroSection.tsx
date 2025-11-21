'use client'

import Image from 'next/image'
import Icon from './Icon'

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage?: string
  overlayColor?: string
  showTrustBadges?: boolean
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  className?: string
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  overlayColor = "from-gray-900/85 via-gray-800/75 to-gray-900/85",
  showTrustBadges = true,
  ctaText = "Get Free Quote",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`relative min-h-[65vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-700 ease-out"
            priority
            quality={70}
            fetchPriority="high"
          />
          {/* Additional blur layer for better text readability */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
        </div>
      )}
      
      {/* Enhanced Overlay with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayColor}`}>
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Trust Indicators - Enhanced */}
          {showTrustBadges && (
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up">
              <div className="group flex items-center gap-2.5 bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 border border-white/25 shadow-lg hover:bg-white/20 hover:border-white/35 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <Icon name="shield" className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base font-semibold tracking-wide">Licensed & Insured</span>
              </div>
              <div className="group flex items-center gap-2.5 bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 border border-white/25 shadow-lg hover:bg-white/20 hover:border-white/35 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <Icon name="emergency" className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base font-semibold tracking-wide">24/7 Emergency Service</span>
              </div>
              <div className="group flex items-center gap-2.5 bg-white/15 backdrop-blur-md rounded-full px-4 sm:px-5 py-2.5 sm:py-3 border border-white/25 shadow-lg hover:bg-white/20 hover:border-white/35 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                <Icon name="star" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0" />
                <span className="text-white text-sm sm:text-base font-semibold tracking-wide">100% Satisfaction</span>
              </div>
            </div>
          )}

          {/* Main Content - Enhanced Typography */}
          <div className="text-center space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              <span className="block">{title}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg px-2">
              {subtitle}
            </p>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pt-2 sm:pt-4">
              <a
                href={ctaHref}
                className={`group relative inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98] ${
                  ctaText === "Call Emergency Line"
                    ? "bg-brand-primary text-white hover:bg-brand-primary-600 hover:shadow-[0_20px_60px_rgba(0,55,255,0.4)] focus:ring-brand-primary/50"
                    : "bg-white text-brand-ink hover:bg-white/95 hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] focus:ring-white/50"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {ctaText}
                  <svg className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                {/* Shine effect on hover */}
                <span className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent ${
                  ctaText === "Call Emergency Line" ? "via-white/20" : "via-white/20"
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full`}></span>
              </a>
              
              {secondaryCtaText && secondaryCtaHref && (
                <a
                  href={secondaryCtaHref}
                  className="group relative bg-transparent border-2 border-white text-white hover:bg-white/10 inline-flex items-center justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center">
                    {secondaryCtaText}
                    <svg className="ml-2.5 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  {/* Shine effect on hover */}
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"></span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
