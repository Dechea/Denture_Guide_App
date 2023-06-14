/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'experimental-edge',
    typedRoutes: true,
  },
}

module.exports = nextConfig
