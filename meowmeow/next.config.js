/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental:{appDir: true},
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          statusCode: 301,
        }
      ]
    }
  }
  
  module.exports = nextConfig
  