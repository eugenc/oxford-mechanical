'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EmergencyServiceWidget() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      {/* Collapsed Bubble State */}
      {!isExpanded && (
        <div 
          className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-full shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          onClick={() => setIsExpanded(true)}
        >
          <svg className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          
          {/* Pulsing indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent rounded-full animate-pulse flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        </div>
      )}

      {/* Expanded Widget State */}
      {isExpanded && (
        <div className="floating-cta bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-6 max-w-sm hover:shadow-3xl transition-all duration-300 animate-in slide-in-from-bottom-2 fade-in">
          {/* Close button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute -top-2 -right-2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-md"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-brand-ink mb-2">Need Emergency Service?</h3>
            <p className="text-sm text-gray-600">24/7 emergency response available</p>
          </div>
          
          <div className="space-y-3">
            <Link
              href="tel:+1416-555-0123"
              className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white text-center py-3 text-sm font-bold rounded-xl block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: (416) 555-0123
            </Link>
            <Link
              href="/contact"
              className="w-full bg-gradient-to-r from-brand-accent to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-3 text-sm font-bold rounded-xl block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule Free Inspection
            </Link>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
