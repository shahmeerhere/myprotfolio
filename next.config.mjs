/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configuration (e.g., experimental, webpack)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
    ],
    // Alternative (for older Next versions)
    // domains: ['placehold.co', 'cdn-icons-png.flaticon.com', 'img.icons8.com', 'images.unsplash.com', 'cdn.jsdelivr.net'],
  },
};

export default nextConfig;
