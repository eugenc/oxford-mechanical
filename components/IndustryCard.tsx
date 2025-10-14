'use client'

import Link from 'next/link'
import Image from 'next/image'

interface IndustryCardProps {
  title: string
  description: string
  icon: string
  href: string
  challenges?: string[]
  solutions?: string[]
  image?: string
  className?: string
}

export default function IndustryCard({ 
  title, 
  description, 
  icon, 
  href, 
  challenges = [],
  solutions = [],
  image,
  className = ""
}: IndustryCardProps) {
  return (
    <div className={`group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
              {icon}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {!image && (
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Challenges */}
        {challenges.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Common Challenges:</h4>
            <ul className="space-y-1">
              {challenges.slice(0, 2).map((challenge, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {challenge}
                  {index === 1 && challenges.length > 2 && (
                    <span className="text-gray-400 ml-1">+{challenges.length - 2} more</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Solutions */}
        {solutions.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Our Solutions:</h4>
            <ul className="space-y-1">
              {solutions.slice(0, 2).map((solution, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-3 h-3 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {solution}
                  {index === 1 && solutions.length > 2 && (
                    <span className="text-gray-400 ml-1">+{solutions.length - 2} more</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={href}
          className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 font-semibold group-hover:gap-3 transition-all duration-300"
        >
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
