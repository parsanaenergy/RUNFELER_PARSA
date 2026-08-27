import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { kbArticles } from "@/lib/kb-articles";
import { services } from "@/lib/content";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SectionHeader } from "@/components/site/section-header";
import { AnswerCapsule } from "@/components/site/answer-capsule";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Calendar, Clock, PhoneCall, HelpCircle, ArrowLeft, ShieldCheck, Wrench } from "lucide-react";
import { PillarBackLink } from "@/components/site/cluster-hub";
import { renderMarkdownLinks } from "@/lib/render-links";

const SITE_URL = "https://parsaenergyco.ir";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return kbArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = kbArticles.find(
    (a) =>
      a.slug === slug ||
      a.slug === decodedSlug ||
      (a.slug === "sarmayeh-gozari-khorshidi-tala-arz" &&
        (decodedSlug.includes("sarmāyeh") || slug.includes("%C4%81yeh")))
  );
  if (!article) return {};

  const pageUrl = `${SITE_URL}/knowledge/${article.slug}`;
  const title = article.title.fa;
  const description = article.excerpt.fa;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "پارسا انرژی | Parsa Energy",
      images: [
        {
          url: `${SITE_URL}/images/hero-solar-plant.png`,
          width: 1200,
          height: 630,
          alt: article.title.fa,
        },
      ],
      type: "article",
      publishedTime: article.date,
      locale: "fa_IR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/images/hero-solar-plant.png`],
    },
  };
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  if (decodedSlug.includes("sarmāyeh") || slug.includes("%C4%81yeh")) {
    redirect("/knowledge/sarmayeh-gozari-khorshidi-tala-arz");
  }

  const article = kbArticles.find((a) => a.slug === slug || a.slug === decodedSlug);
  if (!article) notFound();

  const pageUrl = `${SITE_URL}/knowledge/${article.slug}`;

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${pageUrl}/#article`,
    headline: article.title.fa,
    description: article.excerpt.fa,
    datePublished: article.date,
    inLanguage: "fa-IR",
    author: {
      "@type": "Organization",
      name: "پارسا انرژی",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "پارسا انرژی",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/parsa-energy-logo.png`,
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "دانشنامه پارسا انرژی", item: `${SITE_URL}/knowledge` },
      { "@type": "ListItem", position: 3, name: article.title.fa, item: pageUrl },
    ],
  };

  const jsonLdFaq = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q.fa,
          acceptedAnswer: { "@type": "Answer", text: faq.a.fa },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col dir-rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}

      <SiteHeader />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">صفحه اصلی</Link>
            <span>/</span>
            <Link href="/knowledge" className="hover:text-primary transition-colors">دانشنامه</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-xs">{article.title.fa}</span>
          </nav>
        </div>

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-semibold">
                {article.categoryLabel.fa}
              </span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> زمان مطالعه: {article.readTime.fa}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">{article.title.fa}</h1>

            <AnswerCapsule capsule={article.excerpt} />

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 pt-4">
              {article.body.fa.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground border-r-4 border-amber-500 pr-3">
                    {section.h2}
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{renderMarkdownLinks(section.p)}</p>
                </div>
              ))}
            </div>
          </div>

          {article.faqs?.length ? (
            <div className="mt-16 border-t pt-12">
              <SectionHeader badge="سوالات متداول" title="پرسش و پاسخ‌های کلیدی" description="پاسخ‌های شفاف درباره این موضوع" />
              <div className="mt-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {article.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 py-2 bg-card">
                      <AccordionTrigger className="text-right text-base font-semibold hover:no-underline">
                        <span className="flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-amber-500 shrink-0" />
                          {faq.q.fa}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {faq.a.fa}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ) : null}

          {/* Related Services & Direct Solution Links */}
          <div className="mt-16 border-t pt-12">
            <SectionHeader
              badge="راهکارهای اجرایی"
              title="خدمات و راهکارهای مهندسی مرتبط"
              description="تامین تجهیزات استاندارد، طراحی و اجرای تخصصی توسط تیم مهندسی پارسا انرژی"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {(article.category === "hvac"
                ? services.filter((s) => s.slug === "hvac-repair-service" || s.slug === "electronic-board-repair-spec")
                : services.filter((s) => s.slug === "solar-plant-design-construction" || s.slug === "emergency-power-design-install")
              ).map((service) => (
                <div
                  key={service.slug}
                  className="rounded-2xl border border-border bg-card p-5 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <service.icon className="h-5 w-5 text-amber-500" />
                      <h4 className="font-bold text-foreground text-base">{service.name.fa}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.tagline.fa}</p>
                  </div>
                  <div className="pt-4 mt-2 border-t border-border/50 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                    >
                      مشاهده جزئیات و استعلام قیمت
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <PillarBackLink
            pillarUrl="/bargh"
            pillarTitle="مرجع اصلی: سیستم‌های برق، نیروگاه خورشیدی و برق اضطراری"
            description="برای بررسی جامع سیستم‌های برق، جداول محاسبات فنی، دانلود راهنماها و مقایسه راهکارهای نیروگاهی به مرجع تخصصی سیستم‌های برق مراجعه کنید."
          />

          <div className="mt-12 bg-muted/40 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border">
            <div>
              <h3 className="text-xl font-bold">نیاز به اجرای پروژه یا مشاوره تکمیلی دارید؟</h3>
              <p className="text-sm text-muted-foreground mt-1">تیم مهندسی پارسا انرژی در مشهد آماده پاسخگویی و اجرای پروژه‌های شماست.</p>
            </div>
            <Button size="lg" asChild className="gap-2 shrink-0 font-bold">
              <a href="tel:09158222199">
                <PhoneCall className="h-5 w-5" />
                تماس با کارشناسان: ۰۹۱۵۸۲۲۲۱۹۹
              </a>
            </Button>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
