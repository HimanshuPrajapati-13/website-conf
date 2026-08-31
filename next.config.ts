import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@phosphor-icons/react"],
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
