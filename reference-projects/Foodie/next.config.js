/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  swcMinify: false,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

module.exports = nextConfig