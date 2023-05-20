<<<<<<< HEAD
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '9000',
//       },
//     ],
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;





=======
>>>>>>> 422fd55f024ffc92bcc9e2d9b03e8a1fa0cf1522
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

