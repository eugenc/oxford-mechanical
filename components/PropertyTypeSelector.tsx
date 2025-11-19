'use client'

import { useState, useEffect } from 'react'
import Icon, { type IconName } from '@/components/Icon'

interface PropertyType {
  id: string
  label: string
  icon: IconName
  description: string
}

const propertyTypes: PropertyType[] = [
  { 
    id: 'high-rise-condo', 
    label: 'High-Rise Condo', 
    icon: 'building',
    description: 'Residential towers'
  },
  { 
    id: 'office-building', 
    label: 'Office Building', 
    icon: 'building',
    description: 'Corporate spaces'
  },
  { 
    id: 'retail-commercial', 
    label: 'Retail/Commercial', 
    icon: 'retail',
    description: 'Shopping centers'
  },
  { 
    id: 'educational', 
    label: 'Educational', 
    icon: 'education',
    description: 'Schools & universities'
  },
  { 
    id: 'healthcare', 
    label: 'Healthcare', 
    icon: 'healthcare',
    description: 'Medical facilities'
  },
  { 
    id: 'industrial', 
    label: 'Industrial', 
    icon: 'industrial',
    description: 'Manufacturing sites'
  }
]

export default function PropertyTypeSelector() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    )
  }

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-4">
        Property Type <span className="text-gray-500 font-normal">(Select all that apply)</span>
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {propertyTypes.map((property) => (
          <label
            key={property.id}
            className="property-type-option group relative cursor-pointer"
          >
            <input
              type="checkbox"
              name="property-types"
              value={property.id}
              className="sr-only peer"
              checked={selectedTypes.includes(property.id)}
              onChange={() => handleTypeToggle(property.id)}
            />
            <div className={`flex flex-col items-center p-4 border-2 rounded-xl transition-all duration-200 hover:border-brand-primary/50 hover:shadow-md ${
              selectedTypes.includes(property.id)
                ? 'border-brand-primary bg-brand-primary/5 shadow-lg'
                : 'border-gray-200'
            }`}>
              <div className="mb-2 group-hover:scale-110 transition-transform duration-200">
                <Icon name={property.icon} className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className={`text-sm font-semibold transition-colors duration-200 ${
                  selectedTypes.includes(property.id)
                    ? 'text-brand-primary'
                    : 'text-gray-800 group-hover:text-brand-primary'
                }`}>
                  {property.label}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {property.description}
                </div>
              </div>
              {/* Check indicator */}
              <div className={`absolute top-2 right-2 w-5 h-5 bg-brand-primary rounded-full flex items-center justify-center transition-opacity duration-200 ${
                selectedTypes.includes(property.id) ? 'opacity-100' : 'opacity-0'
              }`}>
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </label>
        ))}
      </div>
      
    </div>
  )
}
