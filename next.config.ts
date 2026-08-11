import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  /* GEO-010: Performance optimization for LCP/TTFB < 2.5s */
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/knowledge/sarmāyeh-gozari-khorshidi-tala-arz",
        destination: "/knowledge/sarmayeh-gozari-khorshidi-tala-arz",
        permanent: true,
      },
      {
        source: "/knowledge/sarm%C4%81yeh-gozari-khorshidi-tala-arz",
        destination: "/knowledge/sarmayeh-gozari-khorshidi-tala-arz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
