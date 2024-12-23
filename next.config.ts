import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Active les vérifications strictes de React
  swcMinify: true, // Active le minificateur SWC pour une meilleure performance
  images: {
    domains: ["yourdomain.com"], // Ajoutez les domaines externes autorisés pour les images
  },
  output: "standalone", // Requis si vous voulez un déploiement autonome ou personnalisé
};

export default nextConfig;
