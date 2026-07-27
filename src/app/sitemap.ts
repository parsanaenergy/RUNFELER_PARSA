import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { kbArticles } from "@/lib/kb-articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://parsaenergyco.ir";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // صفحات خدمات: /services/[slug] — هر خدمت یک URL مستقل دارد
  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // صفحات مقالات: /knowledge/[slug] — هر مقاله یک URL مستقل دارد
  const articleRoutes = kbArticles.map((a) => ({
    url: `${SITE_URL}/knowledge/${a.slug}`,
    lastModified: new Date(a.date) || lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    // صفحه اصلی — بالاترین اولویت
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // صفحه سیستم‌های برق اضطراری
    {
      url: `${SITE_URL}/bargh`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // صفحات خدمات مجزا (/services/[slug])
    ...serviceRoutes,
    // صفحات مقالات دانشنامه (/knowledge/[slug])
    ...articleRoutes,
    // توجه: anchor URLs (#services, #products, ...) حذف شدند —
    // گوگل و بینگ anchor URLها را به عنوان صفحه مستقل index نمی‌کنند.
  ];
}
