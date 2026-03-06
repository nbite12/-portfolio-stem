import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Useful for simple deployments like Vercel with static images
  },
};

export default nextConfig;
