import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Allow local images from /public
    // Add Cloudinary domains when ready
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/studioeratofilms/**",
      },
    ],
    // Supported formats for modern browsers
    formats: ["image/avif", "image/webp"],
    // Reasonable device sizes for wedding photography site
    deviceSizes: [390, 768, 1080, 1280, 1440, 1920],
    imageSizes: [120, 256, 384, 512, 640],
  },
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;
