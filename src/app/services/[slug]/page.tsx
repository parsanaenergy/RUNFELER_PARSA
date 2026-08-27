import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/content";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, HelpCircle } from "lucide-react";
import { PillarBackLink } from "@/components/site/cluster-hub";

const SITE_URL = "https://parsaenergyco.ir";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const pageUrl = `${SITE_URL}/services/${service.slug}`;
  const title = `${service.name.fa} در مشهد`;
  const description = service.description.fa;

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
          alt: service.name.fa,
        },
      ],
      type: "article",
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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const pageUrl = `${SITE_URL}/services/${service.slug}`;

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: service.name.fa,
    description: service.description.fa,
    provider: {
      "@type": "ProfessionalService",
      name: "پارسا انرژی",
      url: SITE_URL,
      telephone: "+989158222199",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mashhad",
        addressCountry: "IR",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Mashhad",
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "خدمات پارسا انرژی", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 3, name: service.name.fa, item: pageUrl },
    ],
  };

  const jsonLdFaq = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q.fa,
          acceptedAnswer: { "@type": "Answer", text: faq.a.fa },
        })),
      }
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col dir-rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdFaq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />}

      <SiteHeader />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">صفحه اصلی</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-primary transition-colors">خدمات</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{service.name.fa}</span>
          </nav>
        </div>

        <section className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-br from-primary/10 via-background to-amber-500/10 border border-primary/20 rounded-3xl p-6 md:p-12 shadow-xl">
            <div className="max-w-3xl space-y-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs md:text-sm font-semibold">
                {service.tagline.fa}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">{service.name.fa}</h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.description.fa}</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild className="gap-2 font-bold shadow-lg">
                  <a href="tel:09158222199">
                    <PhoneCall className="h-5 w-5" />
                    مشاوره رایگان: ۰۹۱۵۸۲۲۲۱۹۹
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <SectionHeader badge="ویژگی‌ها" title="ویژگی‌های کلیدی این خدمت" description="استاندارد، ایمن و بر اساس ضوابط مهندسی" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">مراحل و ویژگی‌های فنی</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat.fa}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">تضمین و تحویل پروژه</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-foreground">
                    <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{del.fa}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {service.faqs?.length ? (
          <section className="container mx-auto px-4 py-8">
            <SectionHeader badge="سوالات متداول" title="پرسش‌های شایع درباره این خدمت" description="پاسخ‌های شفاف کارشناسان پارسا انرژی" />
            <div className="max-w-3xl mx-auto mt-8">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 py-2 bg-card">
                    <AccordionTrigger className="text-right text-base font-semibold hover:no-underline">
                      <span className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary shrink-0" />
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
          </section>
        ) : null}

        <div className="container mx-auto px-4">
          <PillarBackLink
            pillarUrl="/bargh"
            pillarTitle="مرجع اصلی: سیستم‌های برق، نیروگاه خورشیدی و برق اضطراری"
            description="برای مشاهده نقشه راه جامع، استانداردهای فنی، مقایسه راهکارهای نیروگاهی و ابزارهای آنلاین به مرجع تخصصی سیستم‌های برق مراجعه کنید."
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
