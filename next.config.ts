import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Active le mode strict de React
  swcMinify: true, // Utilise le compilateur SWC pour minifier
  images: {
    domains: [""], // Ajouter des domaines pour le chargement d'images
  },
  i18n: {
    locales: ["fr"], // Gestion multilingue
    defaultLocale: "fr",
  },
};

export default nextConfig;
