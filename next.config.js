/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  transpilePackages: ['@react-pdf/renderer', '@react-pdf/layout', '@react-pdf/pdfkit', '@react-pdf/primitives'],
  rewrites: async () => [
    {
      source: '/link/:slug',
      destination: '/api/:slug'
    },
    {
      source: '/resume.pdf',
      destination: '/api/resume'
    },
    {
      source: '/resume',
      destination: '/api/resume'
    }
  ]
}

module.exports = nextConfig
