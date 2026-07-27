import type { Metadata } from "next";
import Link from "next/link";
import { kbArticles } from "@/lib/kb-articles";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { BookOpen, Clock, Calendar, ArrowLeft } from "lucide-react";

const SITE_URL = "https://parsaenergyco.ir";
const PAGE_URL = `${SITE_URL}/knowledge`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "دانشنامه تخصصی انرژی خورشیدی و تاسیسات | پارسا انرژی مشهد",
  description:
    "مجموعه مقالات تخصصی پارسا انرژی درباره نیروگاه خورشیدی، برق اضطراری، تاسیسات مکانیکی، تعمیر اینورتر و پکیج در مشهد. راهنماهای فنی، محاسبات مهندسی و اخبار صنعت.",
  keywords: [
    "دانشنامه انرژی خورشیدی",
    "مقالات تاسیسات",
    "راهنمای نیروگاه خورشیدی",
    "آموزش برق اضطراری",
    "تعمیر اینورتر مشهد",
    "پارسا انرژی",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "دانشنامه تخصصی انرژی خورشیدی و تاسیسات | پارسا انرژی",
    description:
      "مقالات تخصصی درباره نیروگاه خورشیدی، برق اضطراری، تاسیسات مکانیکی و تعمیرات در مشهد.",
    url: PAGE_URL,
    siteName: "پارسا انرژی | Parsa Energy",
    images: [
      {
        url: `${SITE_URL}/images/hero-solar-plant.png`,
        width: 1200,
        height: 630,
        alt: "دانشنامه پارسا انرژی",
      },
    ],
    type: "website",
    locale: "fa_IR",
  },
  robots: { index: true, follow: true },
};

const categoryColors: Record<string, string> = {
  hvac: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  solar: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  news: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
};

export default function KnowledgeIndexPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "دانشنامه", item: PAGE_URL },
    ],
  };

  const jsonLdCollectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}/#collection`,
    name: "دانشنامه تخصصی پارسا انرژی",
    description:
      "مجموعه مقالات تخصصی درباره انرژی خورشیدی، تاسیسات مکانیکی و برق اضطراری.",
    url: PAGE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    hasPart: kbArticles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title.fa,
      url: `${PAGE_URL}/${a.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCollectionPage) }}
      />

      <SiteHeader />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">صفحه اصلی</Link>
            <span>/</span>
            <span className="text-foreground font-medium">دانشنامه</span>
          </nav>
        </div>

        <section className="container mx-auto px-4 py-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              دانشنامه تخصصی
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              دانشنامه <span className="text-primary">پارسا انرژی</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              مقالات تخصصی درباره نیروگاه خورشیدی، برق اضطراری، تاسیسات مکانیکی،
              تعمیرات و اخبار صنعت — نوشته تیم مهندسی پارسا انرژی مشهد.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kbArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <span className={`mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[article.category] ?? "bg-muted text-muted-foreground"}`}>
                  {article.categoryLabel.fa}
                </span>
                <h2 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {article.title.fa}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">
                  {article.excerpt.fa}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />{article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />{article.readTime.fa}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                  مطالعه مقاله
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
