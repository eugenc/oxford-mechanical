'use client'

import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: 'Preventing Winter Plumbing Emergencies in Commercial Buildings',
      excerpt: 'Essential tips to protect your plumbing systems during cold weather months.',
      category: 'Maintenance',
      readTime: '5 min read',
      date: 'December 15, 2024',
      image: '/assets/blog/winter-plumbing.jpg'
    },
    {
      title: 'Water Conservation Strategies for High-Rise Buildings',
      excerpt: 'How to implement effective water-saving measures in residential towers.',
      category: 'Sustainability',
      readTime: '7 min read',
      date: 'December 10, 2024',
      image: '/assets/blog/water-conservation.jpg'
    },
    {
      title: 'Emergency Response: What to Do When Pipes Burst',
      excerpt: 'Immediate steps to take when facing a burst pipe emergency.',
      category: 'Emergency',
      readTime: '4 min read',
      date: 'December 5, 2024',
      image: '/assets/blog/emergency-response.jpg'
    },
    {
      title: 'The Importance of Regular Drain Maintenance',
      excerpt: 'Why preventive drain cleaning saves money and prevents major issues.',
      category: 'Maintenance',
      readTime: '6 min read',
      date: 'November 28, 2024',
      image: '/assets/blog/drain-maintenance.jpg'
    },
    {
      title: 'Smart Water Systems for Commercial Properties',
      excerpt: 'How technology is revolutionizing commercial plumbing management.',
      category: 'Technology',
      readTime: '8 min read',
      date: 'November 20, 2024',
      image: '/assets/blog/smart-systems.jpg'
    },
    {
      title: 'Understanding Commercial Plumbing Codes',
      excerpt: 'A guide to plumbing regulations for commercial properties.',
      category: 'Compliance',
      readTime: '10 min read',
      date: 'November 15, 2024',
      image: '/assets/blog/plumbing-codes.jpg'
    }
  ];

  const categories = ['All', 'Maintenance', 'Emergency', 'Sustainability', 'Technology', 'Compliance'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-ink to-gray-900 text-white py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Expert advice and industry insights from our plumbing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-brand-ink mb-3 hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="text-brand-primary font-semibold hover:text-brand-accent cursor-pointer">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-brand-primary py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest plumbing insights and maintenance tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/30"
            />
            <button className="bg-white text-brand-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
