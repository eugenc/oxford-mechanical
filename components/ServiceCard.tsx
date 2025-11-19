'use client'

import Link from 'next/link'
import Image from 'next/image'
import Icon, { type IconName } from '@/components/Icon'

interface ServiceCardProps {
  title: string
  description: string
  icon: IconName | string
  href: string
  features?: string[]
  image?: string
  className?: string
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  href, 
  features = [],
  image,
  className = ""
}: ServiceCardProps) {
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
            <div className="w-12 h-12 bg-white/90 backdrop-blur-1 rounded-xl flex items-center justify-center">
              {typeof icon === 'string' && (icon.length === 1 || icon.length === 2) && icon.charCodeAt(0) > 127 ? (
                <span className="text-2xl">{icon}</span>
              ) : (
                <Icon name={icon as IconName} className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {!image && (
          <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
            {typeof icon === 'string' && (icon.length === 1 || icon.length === 2) && icon.charCodeAt(0) > 127 ? (
              <span className="text-3xl">{icon}</span>
            ) : (
              <Icon name={icon as IconName} className="w-8 h-8" />
            )}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
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
