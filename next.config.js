/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      // the solution
      fs: false,
    };

    return config;
  },
  
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
