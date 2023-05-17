// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }


// module.exports = {
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'egovernanceprojectwithnestjs-production.up.railway.app',
//         port: '3000',    
//       },
//     ],
//   },
//   nextConfig
// }




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }


// module.exports = {
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
//   nextConfig
// }






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

