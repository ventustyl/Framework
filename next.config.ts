import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
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
