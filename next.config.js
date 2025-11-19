/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13.4+
  eslint: {
    // Disable ESLint during build to avoid parent directory config conflicts
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Redirects for missing pages to existing content
  async redirects() {
    return [
      {
        source: '/inspection',
        destination: '/contact',
        permanent: true, // 308 redirect
      },
      {
        source: '/case-studies',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/certifications',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
