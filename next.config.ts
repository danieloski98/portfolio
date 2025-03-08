import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-strapi-site-production.up.railway.app',
        port: '',
        pathname: '/uploads/**',
        search: ''
      }
    ],
  }
};

export default nextConfig;
