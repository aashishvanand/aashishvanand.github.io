/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add the unoptimized flag to disable the image optimization API for static exports
  images: {
    unoptimized: true,
  },
  // Static export mode for Cloudflare Pages
  output: 'export',
  // Remove experimental options that require additional dependencies
  experimental: {
    // optimizeCss: true, // Remove this as it requires critters
  }
}

module.exports = nextConfig