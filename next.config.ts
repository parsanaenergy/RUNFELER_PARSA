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
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
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
