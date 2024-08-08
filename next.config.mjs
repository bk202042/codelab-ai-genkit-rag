
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'rstr.in' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
    ],
  },
  swcMinify: true, // Enable SWC minification
};

export default nextConfig;
