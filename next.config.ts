import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Utilisez remotePatterns au lieu de domains pour plus de sécurité
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yourdomain.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

export default nextConfig;
