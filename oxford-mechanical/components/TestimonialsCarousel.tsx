'use client'

import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles - using dynamic imports to avoid webpack issues
// import 'swiper/css'
// import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  rating: number
  company?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Oxford Mechanical has been our go-to plumbing service for over 5 years. Their emergency response is unmatched and their preventative maintenance has saved us thousands in repairs.",
    author: "Sarah Johnson",
    title: "Property Manager",
    company: "Downtown Condo Complex",
    rating: 5
  },
  {
    id: 2,
    quote: "The free building inspection was incredibly thorough. They identified several potential issues before they became costly problems. Highly recommend their services.",
    author: "Michael Chen",
    title: "Building Owner",
    company: "North York Properties",
    rating: 5
  },
  {
    id: 3,
    quote: "Professional, reliable, and always on time. Their team understands the unique challenges of high-rise buildings and works efficiently to minimize disruptions.",
    author: "Lisa Rodriguez",
    title: "Facilities Director",
    company: "Corporate Tower",
    rating: 5
  },
  {
    id: 4,
    quote: "Outstanding service! They fixed our water pressure issues in record time. The team is knowledgeable and the pricing is very competitive.",
    author: "David Thompson",
    title: "Property Manager",
    company: "Midtown Residential",
    rating: 5
  },
  {
    id: 5,
    quote: "We've been using Oxford Mechanical for all our plumbing needs for 3 years now. Their 24/7 emergency service has been a lifesaver multiple times.",
    author: "Jennifer Walsh",
    title: "Operations Manager",
    company: "Healthcare Facility",
    rating: 5
  },
  {
    id: 6,
    quote: "The camera inspection service was excellent. They found the exact location of our sewer line issue and fixed it quickly. Highly professional team.",
    author: "Robert Kim",
    title: "Building Superintendent",
    company: "University Residence",
    rating: 5
  },
  {
    id: 7,
    quote: "Their water conservation solutions helped us reduce our utility costs by 35%. The ROI was incredible and the installation was seamless.",
    author: "Amanda Foster",
    title: "Facilities Manager",
    company: "Shopping Center",
    rating: 5
  },
  {
    id: 8,
    quote: "Oxford Mechanical's preventative maintenance program has been invaluable. We haven't had a major plumbing emergency in over 2 years.",
    author: "Mark Stevens",
    title: "Property Owner",
    company: "Office Complex",
    rating: 5
  }
]

const TestimonialsCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType>()

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext()
      }
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from property managers and building owners who trust Oxford Mechanical.
          </p>
        </div>

        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="testimonials-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 10,
                  stretch: 0,
                  depth: 25,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 15,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                },
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                coverflowEffect: {
                  rotate: 15,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                },
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-yellow-400" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-600 mb-6 leading-relaxed italic text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-brand-ink text-lg">{testimonial.author}</p>
                    <p className="text-brand-primary font-medium">{testimonial.title}</p>
                    {testimonial.company && (
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Additional Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 bg-white rounded-2xl px-6 sm:px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-brand-primary">500+</div>
              <div className="text-xs sm:text-sm text-gray-600">Properties Served</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-brand-primary">15,000+</div>
              <div className="text-xs sm:text-sm text-gray-600">Service Calls</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-brand-primary">99.8%</div>
              <div className="text-xs sm:text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
