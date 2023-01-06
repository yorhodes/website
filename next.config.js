/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/link/:slug',
      destination: '/api/:slug'
    }
  ]
}

module.exports = nextConfig
