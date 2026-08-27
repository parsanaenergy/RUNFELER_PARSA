import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { kbArticles } from "@/lib/kb-articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://parsaenergyco.ir";

/**
 * Dynamic XML Sitemap Generator for Next.js App Router.
 * Implements Topic Clusters hierarchy with granular Priority and Changefreq settings.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. مسیرهای خدمات تخصصی: /services/[slug] (Priority: 0.9, Changefreq: monthly)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 2. مسیرهای مقالات دانشنامه: /knowledge/[slug] (Priority: 0.8, Changefreq: weekly/monthly)
  const articleRoutes: MetadataRoute.Sitemap = kbArticles.map((article) => {
    let articleDate = currentDate;
    if (article.date) {
      const parsed = new Date(article.date);
      if (!isNaN(parsed.getTime())) {
        articleDate = parsed;
      }
    }

    return {
      url: `${SITE_URL}/knowledge/${article.slug}`,
      lastModified: articleDate,
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [
    // صفحه اصلی — بالاترین اولویت
    {
      url: `${SITE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // مرجع تخصصی سیستم‌های برق (Pillar Hub) — راهنمای جامع تامین برق و نیروگاه خورشیدی
    {
      url: `${SITE_URL}/bargh`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // هاب دانشنامه فنی و مقالات تخصصی
    {
      url: `${SITE_URL}/knowledge`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // آرشیو کامل محتوای متنی
    {
      url: `${SITE_URL}/content-archive`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // خوشه‌های خدمات تخصصی
    ...serviceRoutes,
    // مقالات و محتواهای تخصصی دانشنامه
    ...articleRoutes,
  ];
}
