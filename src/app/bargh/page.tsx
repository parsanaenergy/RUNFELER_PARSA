import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SectionHeader } from "@/components/site/section-header";
import { AnswerCapsule } from "@/components/site/answer-capsule";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Sun,
  BatteryCharging,
  Wrench,
  Cpu,
  Calculator,
  PhoneCall,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Building2,
  HelpCircle,
  GraduationCap,
} from "lucide-react";
import { TopicClusterHub } from "@/components/site/cluster-hub";
import { topicClusterItemListSchema } from "@/lib/seo-data";

const SITE_URL = "https://parsaenergyco.ir";
const PAGE_URL = `${SITE_URL}/bargh`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "سیستم‌های برق، برق خورشیدی و برق اضطراری",
  description:
    "مرجع سیستم‌های برق اضطراری در مشهد: طراحی نیروگاه خورشیدی، UPS آنلاین، دیزل ژنراتور، سایزینگ کابل و تعمیر اینورتر با استاندارد IEC. مشاوره رایگان.",
  keywords: [
    "برق",
    "برق خورشیدی",
    "برق اضطراری",
    "تجهیزات برق",
    "سیستم‌های برق",
    "سایزینگ کابل برق",
    "افت ولتاژ برق",
    "تعمیر اینورتر برق",
    "UPS",
    "دیزل ژنراتور",
    "نیروگاه خورشیدی",
    "پارسا انرژی مشهد",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "مرجع تخصصی سیستم‌های برق، برق خورشیدی و برق اضطراری",
    description:
      "مشاوره تخصصی، محاسبات مهندسی برق، اجرا و نگهداری نیروگاه‌های خورشیدی و سیستم‌های برق اضطراری در مشهد.",
    url: PAGE_URL,
    siteName: "پارسا انرژی | Parsa Energy",
    images: [
      {
        url: `${SITE_URL}/images/hero-solar-plant.png`,
        width: 1200,
        height: 630,
        alt: "سیستم‌های برق و نیروگاه خورشیدی پارسا انرژی",
      },
    ],
    type: "article",
    locale: "fa_IR",
  },
  twitter: {
    card: "summary_large_image",
    title: "مرجع جامع سیستم‌های برق | پارسا انرژی",
    description: "طراحی، اجرا و تعمیرات تخصصی سیستم‌های برق خورشیدی و برق اضطراری.",
    images: [`${SITE_URL}/images/hero-solar-plant.png`],
  },
};

const faqs = [
  {
    q: "هزینه احداث نیروگاه خورشیدی خانگی و صنعتی چقدر است و چه مدت بازگشت سرمایه دارد؟",
    a: "هزینه احداث به ظرفیت (کیلووات)، برند اینورتر و پنل‌ها و نوع متصل یا منفصل از شبکه بستگی دارد. به طور میانگین دوره بازگشت سرمایه نیروگاه‌های خورشیدی متصل به شبکه با قرارداد خرید تضمینی ۲۰ ساله ساتبا بین ۳ تا ۴ سال است و پس از آن سود خالص به همراه دارد.",
  },
  {
    q: "برای تامین برق اضطراری در زمان قطعی، UPS بهتر است یا دیزل ژنراتور؟",
    a: "یو پی اس (UPS) بدون وقفه (Zero Transfer Time)، بدون صدا و بدون آلودگی برای تجهیزات حساس رایانه‌ای، پزشکی و روشنایی فوری ایده‌آل است. ژنراتور برای بارهای بسیار سنگین و قطعی‌های طولانی‌مدت به کار می‌رود؛ بهترین ترکیب، استفاده همزمان از UPS برای پل زدن تا زمان استارت ژنراتور است.",
  },
  {
    q: "آیا برق تولیدی نیروگاه خورشیدی را می‌توان به شبکه سراسری فروخت؟",
    a: "بله؛ از طریق سامانه مهرسان و عقد قرارداد خرید تضمینی ۲۰ ساله (PPA) با ساتبا و شرکت توزیع برق، نرخ خرید به صورت ماهیانه و تعدیل‌شده با تورم و نرخ ارز به حساب شما واریز می‌شود. همچنین صنایع می‌توانند در تابلوی سبز بورس انرژی برق خود را به فروش برسانند.",
  },
  {
    q: "علائم خرابی اینورتر خورشیدی چیست و چگونه تعمیر می‌شود؟",
    a: "نمایش ارورهای ولتاژ ورودی/خروجی (Overvoltage/Undervoltage)، خطای عایقی (Isolation Fault)، داغ شدن بیش از حد، یا خاموش شدن ناگهانی از علائم خرابی است. بیشتر خرابی‌ها مربوط به بردهای کنترلی، خازن‌های لینک DC و ماسفت‌ها/IGBTها بوده که در مرکز خدمات پارسا انرژی به صورت تخصصی در سطح قطعه عیب‌یابی و تعمیر می‌شوند.",
  },
  {
    q: "چگونه می‌توان در دوره‌های تخصصی آموزش نصب و طراحی نیروگاه خورشیدی شرکت کرد؟",
    a: "دوره‌های آموزشی پارسا انرژی با سرفصل‌های استاندارد فنی و حرفه‌ای شامل کار با نرم‌افزارهای PVsyst، محاسبات کابل و سازه، سیم‌کشی استرینگ‌ها و راه‌اندازی اینورترها برگزار شده و مدرک معتبر ارائه می‌شود.",
  },
  {
    q: "برای محاسبه سایز کابل برق و جلوگیری از افت ولتاژ چه مواردی اهمیت دارند؟",
    a: "افت ولتاژ نباید از ۲ الی ۳ درصد طول مسیر تجاوز کند. پارامترهای کلیدی عبارتند از: طول کابل (متر)، میزان جریان عبوری (آمپر)، ولتاژ نامی سیستم (۲۲۰V یا ۳۸۰V)، جنس هادی (مسی یا آلومینیومی) و ضریب دمای محیط.",
  },
  {
    q: "سیستم برق آفگرید (مستقل از شبکه) با هایبرید چه تفاوتی دارد؟",
    a: "سیستم آفگرید (Off-Grid) کاملاً از شبکه برق شهری جدا است و تنها به خورشید و باتری متکی است. سیستم هایبرید (Hybrid) همزمان توانایی متصل شدن به شبکه، پنل خورشیدی، باتری و ژنراتور را دارد و در زمان قطعی برق به‌صورت هوشمند سوییچ می‌کند.",
  },
];

export default function BarghPillarPage() {
  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}/#webpage`,
    url: PAGE_URL,
    name: "مرجع جامع سیستم‌های برق، برق خورشیدی و برق اضطراری | پارسا انرژی",
    description:
      "راهنمای جامع مهندسی برق، طراحی و اجرای سیستم‌های برق خورشیدی، تامین برق اضطراری (UPS و دیزل ژنراتور) و محاسبات سایز کابل در مشهد.",
    inLanguage: "fa-IR",
    publisher: {
      "@type": "Organization",
      name: "پارسا انرژی",
      url: SITE_URL,
      logo: `${SITE_URL}/parsa-energy-logo.png`,
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "صفحه اصلی",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "سیستم‌های برق و انرژی",
        item: PAGE_URL,
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col dir-rtl">
      {/* Dynamic JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(topicClusterItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />


      <SiteHeader />

      <main className="flex-1 pt-24 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              صفحه اصلی
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">سیستم‌های برق و انرژی</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="bg-gradient-to-br from-amber-500/10 via-background to-blue-600/10 border border-amber-500/20 rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-xl">
            <div className="max-w-3xl relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs md:text-sm font-semibold">
                <Zap className="h-4 w-4" />
                مرجع تخصصی برق، سولار و انرژی پایداری
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                سیستم‌های برق، برق خورشیدی و تامین برق اضطراری
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                شرکت مهندسی پیمانکاری پارسا انرژی در مشهد؛ مرجع تخصصی طراحی، تامین تجهیزات، محاسبات فنی، اجرای نیروگاه‌های خورشیدی و راهکارهای صفر تا صد تامین برق بدون قطعی برای مصارف خانگی، تجاری و صنعتی.
              </p>

              {/* Answer Capsule BLUF */}
              <AnswerCapsule
                capsule={{
                  fa: "مجموعه پارسا انرژی با بیش از ۱۰ سال سابقه تخصصی در مشهد، خدمات مهندسی برق شامل طراحی نیروگاه خورشیدی (PV)، تامین تجهیزات برق اضطراری (UPS و ژنراتور)، محاسبات سایز کابل و افت ولتاژ، و تعمیرات تخصصی اینورتر و بردهای قدرتی را با گارانتی معتبر ارائه می‌دهد.",
                  en: "Parsa Energy offers comprehensive electrical engineering, solar plant design, emergency power solutions (UPS & generator), cable sizing, and component-level inverter repair in Mashhad.",
                }}
              />

              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" asChild className="gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-lg">
                  <a href="tel:09158222199">
                    <PhoneCall className="h-5 w-5" />
                    مشاوره رایگان مهندسی برق: ۰۹۱۵۸۲۲۲۱۹۹
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="gap-2">
                  <a href="#calculators">
                    <Calculator className="h-5 w-5 text-amber-500" />
                    ابزارهای محاسبه‌گر برق
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Topic Cluster Compass Navigation Hub */}
        <section className="container mx-auto px-4">
          <TopicClusterHub />
        </section>

        {/* Core Electrical Pillars Section */}
        <section className="container mx-auto px-4 py-12">
          <SectionHeader
            badge="ارکان مهندسی"
            title="۴ حوزه اصلی سیستم‌های برق در پارسا انرژی"
            description="راهکارهای استاندارد، ایمن و بهینه‌سازی شده برق مطابق با استانداردهای IEC و مبحث ۱۳ مقررات ملی ساختمان"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="hover:border-amber-500/50 transition-all duration-300 shadow-md flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-2">
                  <Sun className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">برق خورشیدی (Solar)</CardTitle>
                <CardDescription>طراحی و اجرای نیروگاه‌های آنگرید و آفگرید</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground flex flex-col justify-between flex-1">
                <div>
                  <p>تولید برق پاک، کاهش هزینه‌های انرژی و احداث نیروگاه‌های خورشیدی خانگی، ویلایی و صنعتی در مشهد و سراسر کشور.</p>
                  <ul className="space-y-1.5 font-medium text-foreground mt-3">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> پنل‌های Tier-1 مونو نیم‌برش</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> اینورترهای هایبرید و منفصل از شبکه</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <Link
                    href="/services/solar-plant-design-construction"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    راهنمای صفر تا صد احداث نیروگاه خورشیدی
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-blue-500/50 transition-all duration-300 shadow-md flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-2">
                  <BatteryCharging className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">برق اضطراری (UPS)</CardTitle>
                <CardDescription>تامین جریان بدون حتی ۱ میلی‌ثانیه قطعی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground flex flex-col justify-between flex-1">
                <div>
                  <p>محافظت از تجهیزات حساس، سرورها، بردهای کنترل تاسیسات، پکیج‌ها و سیستم‌های پزشکی در برابر قطعی و نوسان برق.</p>
                  <ul className="space-y-1.5 font-medium text-foreground mt-3">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> سیستم‌های آنلاین و تابلویی</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> بانک باتری LiFePO4 و ژل</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <Link
                    href="/services/emergency-power-design-install"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    طراحی و نصب سیستم برق اضطراری
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-purple-500/50 transition-all duration-300 shadow-md flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-2">
                  <Building2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">برق صنعتی و ساختمان</CardTitle>
                <CardDescription>طراحی تابلو برق، سایزینگ کابل و سیم‌کشی</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground flex flex-col justify-between flex-1">
                <div>
                  <p>طراحی و اجرای تابلوهای برق قدرت و فرمان، تابلوهای تغییر وضعیت خودکار (ATS) و بالانس بار فازها.</p>
                  <ul className="space-y-1.5 font-medium text-foreground mt-3">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> محاسبه افت ولتاژ و ایمنی IEC</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> هماهنگی کلیدهای حفاظتی و SPD</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <Link
                    href="/services/emergency-power-design-install"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    سیستم‌های برق اضطراری صنعتی
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:border-emerald-500/50 transition-all duration-300 shadow-md flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2">
                  <Cpu className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">تعمیرات تخصصی الکترونیک</CardTitle>
                <CardDescription>تعمیر بردهای قدرتی و اینورتر در سطح قطعه</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground flex flex-col justify-between flex-1">
                <div>
                  <p>عیب‌یابی پیشرفته و تعمیرات تخصصی اینورترهای خورشیدی، بردهای پکیج، کولر گازی، BMS و شارژکنترلرها.</p>
                  <ul className="space-y-1.5 font-medium text-foreground mt-3">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> کاریاب SMD و تست اسیلوسکوپ</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> تعویض IGBT و برد کنترل</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <Link
                    href="/services/electronic-board-repair-spec"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    تعمیر تخصصی برد الکترونیکی مشهد
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>



        {/* FAQ Section with JSON-LD backing */}
        <section className="container mx-auto px-4 py-16">
          <SectionHeader
            badge="سوالات متداول سئو"
            title="پرسش‌های رایج در زمینه سیستم‌های برق و انرژی"
            description="پاسخ‌های تخصصی مهندسان پارسا انرژی به رایج‌ترین ابهامات شما"
          />

          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border rounded-2xl px-6 py-2 bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-right text-base font-semibold hover:no-underline hover:text-amber-500">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-amber-500 shrink-0" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 text-sm md:text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Consultation CTA Banner */}
        <section className="container mx-auto px-4 pb-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-right">
              <h2 className="text-2xl md:text-4xl font-bold">نیاز به مشاوره تخصصی سیستم برق دارید؟</h2>
              <p className="text-amber-100 max-w-xl text-sm md:text-base">
                کارشناسان مجرب پارسا انرژی آماده ارائه مشاوره رایگان، امکان‌سنجی نیروگاه خورشیدی و طراحی سیستم‌های برق اضطراری در مشهد هستند.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button size="lg" variant="secondary" asChild className="font-bold text-amber-600 hover:bg-white">
                <a href="tel:09158222199">
                  <PhoneCall className="h-5 w-5 ml-2" />
                  ۰۹۱۵۸۲۲۲۱۹۹
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20">
                <Link href="/#contact">
                  ثبت درخواست مشاوره
                  <ArrowLeft className="h-5 w-5 mr-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
