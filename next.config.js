/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'egovernanceprojectwithnestjs-production.up.railway.app',
        port: '3000',
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

