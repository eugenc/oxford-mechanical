import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink via-brand-ink to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Professional Plumbing Services
              <span className="block text-brand-accent">for Toronto & GTA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              24/7 emergency response, drain cleaning, and maintenance services. 
              Licensed & insured since 2013 with 100% satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
              >
                Get Free Inspection
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
        </div>
      </section>

      {/* Free Property Inspection Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Free Building Inspections
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get a comprehensive property inspection for condos and high-rise buildings in the GTA. 
            Our detailed assessment includes property-wide inspection, detailed reports, and complete cost estimation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inspection"
              className="bg-white text-brand-primary hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Schedule Free Inspection
            </Link>
            <Link
              href="/contact"
              className="bg-brand-primary-600 text-white hover:bg-brand-primary-600/90 border border-white/20 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">
                About Oxford Mechanical
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2013, Oxford Mechanical has been providing comprehensive plumbing services 
                for condos, high-rise buildings, and commercial properties across the Greater Toronto Area.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We specialize in minimizing disruptions while delivering superior service using 
                the latest tools and technology. Our commitment to excellence has made us the 
                trusted choice for property managers and building owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/projects"
                  className="bg-gray-100 text-brand-ink hover:bg-gray-200 inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl transition-all duration-200"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-brand-ink mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">High-rise condos and commercial buildings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Emergency plumbing services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Preventative maintenance programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Water saving solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                  <span className="text-gray-700">Advanced camera inspection technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventative maintenance, we provide comprehensive plumbing solutions for residential and commercial properties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Services",
                description: "24/7 emergency response for urgent plumbing issues",
                icon: "🚨",
                href: "/services/emergency"
              },
              {
                title: "Drain Cleaning",
                description: "Professional drain cleaning and clog removal",
                icon: "🚿",
                href: "/drain-cleaning"
              },
              {
                title: "Camera Inspection",
                description: "Advanced camera inspection for accurate diagnostics",
                icon: "📹",
                href: "/services/camera-inspection"
              },
              {
                title: "Leak Investigation",
                description: "Comprehensive leak detection and repair services",
                icon: "🔧",
                href: "/services/leak-repair"
              },
              {
                title: "Preventative Maintenance",
                description: "Regular maintenance to prevent costly repairs",
                icon: "🛠️",
                href: "/services/maintenance"
              },
              {
                title: "Water Saving Solutions",
                description: "Eco-friendly plumbing upgrades and installations",
                icon: "💧",
                href: "/services/water-saving"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from property managers and building owners who trust Oxford Mechanical.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Oxford Mechanical has been our go-to plumbing service for over 5 years. Their emergency response is unmatched and their preventative maintenance has saved us thousands in repairs.",
                author: "Sarah Johnson",
                title: "Property Manager, Downtown Condo Complex",
                rating: 5
              },
              {
                quote: "The free building inspection was incredibly thorough. They identified several potential issues before they became costly problems. Highly recommend their services.",
                author: "Michael Chen",
                title: "Building Owner, North York",
                rating: 5
              },
              {
                quote: "Professional, reliable, and always on time. Their team understands the unique challenges of high-rise buildings and works efficiently to minimize disruptions.",
                author: "Lisa Rodriguez",
                title: "Facilities Director, Corporate Tower",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-brand-ink">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Why Choose Oxford Mechanical?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience, we've built a reputation for reliability, quality, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "24/7 Emergency Response",
                description: "Round-the-clock availability for urgent plumbing needs"
              },
              {
                title: "Licensed & Insured",
                description: "Fully licensed since 2013 with comprehensive insurance coverage"
              },
              {
                title: "100% Satisfaction Guarantee",
                description: "We stand behind our work with a complete satisfaction guarantee"
              },
              {
                title: "Free Building Inspections",
                description: "Complimentary property inspections to identify potential issues"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly serve the Greater Toronto Area with specialized expertise in high-rise and commercial properties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Greater Toronto Area (GTA)",
              "High-rise condos",
              "Office buildings",
              "Schools and universities",
              "Public buildings",
              "Residential properties",
              "Commercial complexes",
              "Industrial facilities"
            ].map((area, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Weekly inspiration and expert advice on plumbing maintenance and building management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Importance of Regular Plumbing Inspections for Condos",
                excerpt: "Learn why regular plumbing inspections are crucial for high-rise buildings and how they can prevent costly emergency repairs.",
                date: "December 15, 2024",
                readTime: "5 min read",
                href: "/blog/plumbing-inspections-condos"
              },
              {
                title: "Water Saving Solutions for Commercial Buildings",
                excerpt: "Discover eco-friendly plumbing upgrades that can reduce water consumption and lower utility costs for your property.",
                date: "December 8, 2024",
                readTime: "7 min read",
                href: "/blog/water-saving-solutions"
              },
              {
                title: "Emergency Plumbing: What to Do Before We Arrive",
                excerpt: "Essential steps to take during a plumbing emergency to minimize damage and ensure safety for building occupants.",
                date: "December 1, 2024",
                readTime: "4 min read",
                href: "/blog/emergency-plumbing-tips"
              }
            ].map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4">
                  <span className="text-sm text-brand-primary font-medium">{post.date}</span>
                  <span className="text-sm text-gray-500 ml-2">• {post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-ink mb-3 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 text-brand-primary font-medium group-hover:text-brand-primary-600 transition-colors">
                  Read More →
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-primary inline-flex items-center px-6 py-3 text-base font-semibold rounded-xl"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Loyalty & Cashback Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-4">
              Loyalty & Cashback Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value our long-term clients with exclusive programs designed to save you money and provide additional benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">Cashback Program</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Earn cashback on all maintenance services and emergency repairs. 
                The more you use our services, the more you save.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• 2% cashback on all services</li>
                <li>• 5% cashback for annual contracts</li>
                <li>• 10% cashback for multi-property clients</li>
                <li>• Quarterly cashback payments</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-semibold text-brand-ink mb-4">Loyalty Rewards</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Exclusive benefits for our valued clients including priority service, 
                discounted rates, and special maintenance programs.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Priority emergency response</li>
                <li>• 15% discount on preventative maintenance</li>
                <li>• Free annual building inspections</li>
                <li>• Extended warranty on all work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-ink mb-6">
                Schedule Your Free Inspection
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get a comprehensive property inspection for your condo or high-rise building. 
                Our detailed assessment includes property-wide inspection, detailed reports, and complete cost estimation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">Property-Wide Inspection</h3>
                    <p className="text-gray-600 text-sm">Comprehensive assessment of all plumbing systems</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">Detailed Assessment Report</h3>
                    <p className="text-gray-600 text-sm">Complete documentation with photos and recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-ink">Complete Cost Estimation</h3>
                    <p className="text-gray-600 text-sm">Transparent pricing for all recommended services</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Full property address"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Tell us about your specific needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-center py-4 text-lg font-semibold rounded-xl"
                >
                  Schedule Free Inspection
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free building inspection or emergency service. 
            We're here to help with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-primary hover:bg-gray-100 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:+1416-555-0123"
              className="bg-brand-primary-600 text-white hover:bg-brand-primary-600/90 border border-white/20 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              Call Now: (416) 555-0123
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">OM</span>
                </div>
                <span className="ml-2 text-xl font-display font-semibold">
                  Oxford Mechanical
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional plumbing services for Toronto and GTA. 
                Licensed, insured, and committed to excellence since 2013.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/emergency" className="text-gray-300 hover:text-white transition-colors">Emergency Services</Link></li>
                <li><Link href="/drain-cleaning" className="text-gray-300 hover:text-white transition-colors">Drain Cleaning</Link></li>
                <li><Link href="/services/camera-inspection" className="text-gray-300 hover:text-white transition-colors">Camera Inspection</Link></li>
                <li><Link href="/services/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>1111 Finch West, Toronto</p>
                <p>info@oxfordmechanical.ca</p>
                <p>(416) 555-0123</p>
                <p className="text-brand-accent font-medium">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Oxford Mechanical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
