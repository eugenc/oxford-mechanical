'use client'

import Image from 'next/image'
import { useState } from 'react'
import Icon, { type IconName } from '@/components/Icon'

interface FallbackImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackIcon?: IconName
  fallbackText?: string
  fallbackSubtext?: string
  fallbackBg?: string
}

export default function FallbackImage({
  src,
  alt,
  width = 600,
  height = 400,
  className = "",
  fallbackIcon = "building",
  fallbackText = "Professional Building",
  fallbackSubtext = "High-quality facility",
  fallbackBg = "from-gray-100 to-gray-200"
}: FallbackImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div 
        className={`w-full h-96 bg-gradient-to-br ${fallbackBg} rounded-2xl shadow-lg flex items-center justify-center ${className}`}
        style={{ width: width, height: height }}
      >
        <div className="text-center text-gray-600">
          <div className="mb-4 flex justify-center">
            <Icon name={fallbackIcon} className="w-24 h-24" />
          </div>
          <div className="text-xl font-semibold">{fallbackText}</div>
          <div className="text-sm opacity-75">{fallbackSubtext}</div>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImageError(true)}
    />
  )
}
