'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FallbackImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fallbackIcon?: string
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
  fallbackIcon = "🏢",
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
          <div className="text-6xl mb-4">{fallbackIcon}</div>
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
