import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://parsaenergyco.ir";

/**
 * Dynamic robots.txt Generator for Next.js App Router.
 * Configures crawler access, protects internal endpoints, and blocks malicious bots.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
          "/download/",
          "/upload/",
        ],
      },
      // مسدودسازی بات‌ها و اسکریپت‌های اسکرپینگ مخرب و هرزنامه
      {
        userAgent: [
          "PetalBot",
          "MJ12bot",
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "Scrapy",
          "MegaIndex",
          "BLEXBot",
          "Bytespider",
          "DataForSeoBot",
        ],
        disallow: "/",
      },
      // مسدودسازی خزنده‌های صرفاً آموزشی مدل‌های زبانی (بدون ورودی و ارجاع زنده)
      {
        userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot"],
        disallow: "/",
      },
      // مجاز بودن کامل خزنده‌های استاندارد موتورهای جستجو و موتورهای پاسخ‌دهی زنده (Live RAG)
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "Claude-SearchBot",
          "PerplexityBot",
          "Perplexity-User",
          "Applebot",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
