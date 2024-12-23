import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Liste des domaines autorisés pour les images externes
    domains: [
      "infrequently.org",
      "repository-images.githubusercontent.com",
      "www.datocms-assets.com",
    ],
    // Configuration optionnelle pour des chemins spécifiques
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yourdomain.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
