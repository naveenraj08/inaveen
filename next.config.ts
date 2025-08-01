import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: [
      "www.credly.com",
      "images.ctfassets.net",
    ],
  },
};

export default nextConfig;
