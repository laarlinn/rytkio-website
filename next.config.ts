import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // Keep the old WordPress-style trailing-slash URLs working (/tuoremehuasema/)
  trailingSlash: true,
  // GitHub Pages has no image optimization server
  images: { unoptimized: true },
};

export default nextConfig;
