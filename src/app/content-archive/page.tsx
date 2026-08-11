import type { Metadata } from "next";
import { ServerContentLayer } from "@/components/site/server-content-layer";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "آرشیو کامل مقالات و محتوای فنی",
  description:
    "آرشیو جامع مقالات، خدمات، مشخصات محصولات، پرونده پروژه‌ها و سوالات متداول شرکت پارسا انرژی مشهد برای موتورهای جستجو و هوش مصنوعی.",
  alternates: {
    canonical: "https://parsaenergyco.ir/content-archive",
  },
};

export default function ContentArchivePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 py-10">
        <ServerContentLayer />
      </main>
      <SiteFooter />
    </div>
  );
}
