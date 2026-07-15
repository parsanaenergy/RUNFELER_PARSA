"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail, MapPin, Clock,
  Wrench, Zap, Sun, BatteryCharging, Cpu, ShieldCheck, HardHat,
  ClipboardCheck, Gauge, Network, Activity, PanelTop, Flame, Wind,
  Package, GraduationCap, Settings, Microscope, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { divisions, services, products, type Division } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

interface DivisionDetailPageProps {
  division: Division;
  onBack: () => void;
}

/* محتوای اختصاصی هر حوزه — متن کامل، سوالات متداول، خدمات مرتبط */
const divisionContent: Record<string, {
  hero: { fa: string; en: string };
  longDesc: { fa: string; en: string };
  features: { fa: string; en: string }[];
  faqs: { q: { fa: string; en: string }; a: { fa: string; en: string } }[];
  relatedServices: string[]; // service slugs
  relatedProducts: string[]; // product categoryKeys
  image: string;
}> = {
  "hvac-equipment": {
    image: "/images/solar-installation.png",
    hero: {
      fa: "فروش و تامین تجهیزات و تاسیسات مکانیکی",
      en: "HVAC Equipment Sales & Supply",
    },
    longDesc: {
      fa: "پارسا انرژی تامین‌کننده رسمی انواع تجهیزات تاسیسات مکانیکی از برندهای معتبر داخلی و خارجی است. ما پکیج دیواری، رادیاتور شوفاژ، کولر گازی (اسپلیت)، هواساز، داکت اسپلیت و پمپ آب را با گارانتی اصالت کالا و خدمات نصب برای منازل، ادارات، مجتمع‌ها و صنایع عرضه می‌کنیم. مشاوره انتخاب تجهیز متناسب با نیاز و فضای شما رایگان است.",
      en: "Parsa Energy is an official supplier of HVAC mechanical equipment from reputable domestic and international brands. We supply wall-hung packages, heating radiators, air conditioners, air handlers, ducted splits and water pumps with authenticity warranty and installation services for homes, offices, complexes and industry. Equipment selection consultation is free.",
    },
    features: [
      { fa: "پکیج دیواری از برندهای معتبر با گارانتی", en: "Wall-hung packages from reputable brands with warranty" },
      { fa: "رادیاتور شوفاژ چدنی و آلومینیومی", en: "Cast iron and aluminum heating radiators" },
      { fa: "کولر گازی (اسپلیت) از ۱۲۰۰۰ تا ۶۰۰۰۰ BTU", en: "Air conditioners from 12,000 to 60,000 BTU" },
      { fa: "هواساز و داکت اسپلیت برای فضاهای بزرگ", en: "Air handlers and ducted splits for large spaces" },
      { fa: "پمپ آب خانگی و صنعتی", en: "Domestic and industrial water pumps" },
      { fa: "مشاوره رایگان انتخاب تجهیز", en: "Free equipment selection consultation" },
    ],
    faqs: [
      { q: { fa: "کدام برند پکیج را پیشنهاد می‌دهید؟", en: "Which package brand do you recommend?" }, a: { fa: "بر اساس نیاز گرمایشی، فضای نصب و بودجه شما، از برندهای معتبر مانند ایران‌رادیاتور، پاکشوما و بوتان پیشنهاد می‌دهیم.", en: "Based on your heating needs, installation space and budget, we recommend reputable brands such as Iran Radiator, Pakshoma and Butan." } },
      { q: { fa: "نصب هم انجام می‌دهید؟", en: "Do you also install?" }, a: { fa: "بله، تیم نصب مجرب ما تجهیزات را با رعایت استانداردها نصب و راه‌اندازی می‌کند.", en: "Yes, our experienced installation team installs and commissions equipment to standards." } },
    ],
    relatedServices: [],
    relatedProducts: [],
  },
  "solar-emergency-power": {
    image: "/images/hero-solar-plant.png",
    hero: {
      fa: "طراحی، فروش و اجرای نیروگاه خورشیدی و تامین برق اضطراری",
      en: "Solar Power Plant Design, Sales & Emergency Power",
    },
    longDesc: {
      fa: "بزرگ‌ترین حوزه فعالیت پارسا انرژی. ما نیروگاه خورشیدی آفگرید، هایبرید و متصل به شبکه را برای منازل، اصناف، کارخانه‌ها، باغ و ویلا، ادارات و شرکت‌ها طراحی، تأمین و نصب می‌کنیم. همچنین تامین برق اضطراری شامل UPS، بانک باتری، موتور برق و دیزل ژنراتور را با انتقال بدون قطعی ارائه می‌دهیم. تمام پروژه‌ها با استانداردهای IEC 62446 و 62548 اجرا می‌شوند.",
      en: "Parsa Energy's largest division. We design, supply and install off-grid, hybrid and grid-tied solar power plants for homes, businesses, factories, villas, offices and companies. We also provide emergency power including UPS, battery banks, generators and diesel generators with seamless transfer. All projects follow IEC 62446 and 62548 standards.",
    },
    features: [
      { fa: "طراحی و اجرای نیروگاه خورشیدی آفگرید و هایبرید", en: "Off-grid and hybrid solar plant design & installation" },
      { fa: "پنل خورشیدی Tier-1 با گارانتی ۲۵ ساله", en: "Tier-1 solar panels with 25-year warranty" },
      { fa: "اینورتر On-grid، هایبرید و آفگرید", en: "On-grid, hybrid and off-grid inverters" },
      { fa: "بانک باتری LiFePO4 و سرب‌اسید", en: "LiFePO4 and lead-acid battery banks" },
      { fa: "UPS و دیزل ژنراتور با ATS", en: "UPS and diesel generators with ATS" },
      { fa: "پایش آنلاین و پشتیبانی ۲۴/۷", en: "Online monitoring and 24/7 support" },
    ],
    faqs: [
      { q: { fa: "هزینه نیروگاه خورشیدی چقدر است؟", en: "How much does a solar power plant cost?" }, a: { fa: "بستگی به اندازه (kWp) و ظرفیت باتری دارد. از ابزار محاسبه هزینه میکروگرید ما استفاده کنید، سپس پیش‌فاکتور رایگان به تومان درخواست کنید.", en: "Depends on size (kWp) and battery capacity. Use our Microgrid Cost Estimator, then request a free quote in Toman." } },
      { q: { fa: "بازگشت سرمایه چقدر است؟", en: "What is the ROI?" }, a: { fa: "برای مشهد با ۵.۰ ساعت تابش اوج، معمولاً ۴ تا ۵ سال با IRR ۱۵ تا ۲۰٪.", en: "For Mashhad with 5.0 PSH, typically 4-5 years with IRR 15-20%." } },
      { q: { fa: "آیا مجوز ساتبا دارید؟", en: "Do you have SATBA license?" }, a: { fa: "برای پروژه‌های متصل به شبکه، فرآیند اخذ مجوز ساتبا را همراه شما انجام می‌دهیم.", en: "For grid-tied projects, we handle the SATBA licensing process with you." } },
    ],
    relatedServices: ["solar-plant-design-construction", "emergency-power-design-install", "electronic-board-repair-spec"],
    relatedProducts: ["inverters", "batteries", "panels", "ups", "controllers"],
  },
  "hvac-repair": {
    image: "/images/inverter-repair.png",
    hero: {
      fa: "سرویس‌کاری و تعمیرات تاسیسات مکانیکی",
      en: "HVAC Servicing & Repair",
    },
    longDesc: {
      fa: "تیم تعمیرات پارسا انرژی با تجربه چندین ساله، سرویس‌کاری و تعمیرات تمام انواع تاسیسات مکانیکی را در محل شما انجام می‌دهد. از تعمیر و شارژ کولر گازی تا تعمیر پکیج، پمپ آب، هواساز و داکت اسپلیت — تمام خرابی‌ها در سطح قطعه برطرف می‌شوند. سرویس دوره‌ای برای حفظ کارایی و طول عمر تجهیزات نیز ارائه می‌شود.",
      en: "Parsa Energy's repair team with years of experience performs servicing and repair of all types of mechanical HVAC at your location. From AC repair and recharge to package, water pump, air handler and ducted split repair — all faults are fixed at component level. Periodic service to maintain efficiency and equipment life is also offered.",
    },
    features: [
      { fa: "تعمیر و شارژ کولر گازی (تمام برندها)", en: "AC repair and recharge (all brands)" },
      { fa: "تعمیر پکیج دیواری و رادیاتور", en: "Wall package and radiator repair" },
      { fa: "تعمیر پمپ آب خانگی و صنعتی", en: "Domestic and industrial water pump repair" },
      { fa: "تعمیر هواساز و داکت اسپلیت", en: "Air handler and ducted split repair" },
      { fa: "سرویس دوره‌ای تاسیسات", en: "Periodic HVAC service" },
      { fa: "نشتی‌یابی و رفع خرابی در محل", en: "On-site leak detection and troubleshooting" },
    ],
    faqs: [
      { q: { fa: "سرویس دوره‌ای کولر چه فوایدی دارد؟", en: "What are the benefits of periodic AC service?" }, a: { fa: "کاهش مصرف برق تا ۲۰٪، افزایش طول عمر دستگاه، جلوگیری از خرابی ناگهانی و بهبود کیفیت سرما.", en: "Reduces electricity consumption up to 20%, extends equipment life, prevents sudden failures and improves cooling quality." } },
      { q: { fa: "تعمیر در محل انجام می‌شود؟", en: "Is repair done on-site?" }, a: { fa: "بله، اکثر تعمیرات در محل شما انجام می‌شود. برای خرابی‌های پیچیده، تجهیز به کارگاه منتقل می‌شود.", en: "Yes, most repairs are done at your location. For complex faults, equipment is taken to the workshop." } },
    ],
    relatedServices: ["electronic-board-repair-spec"],
    relatedProducts: [],
  },
  "hvac-parts": {
    image: "/images/inverter-repair.png",
    hero: {
      fa: "قطعات و لوازم جانبی تهویه مطبوع",
      en: "HVAC Parts & Accessories",
    },
    longDesc: {
      fa: "پارسا انرژی مرکز تخصصی فروش قطعات و لوازم جانبی تهویه مطبوع برای تعمیرکاران، شرکت‌های خدماتی و صنایع است. کمپرسور، موتور فن، برد الکترونیکی، شیر انبساط، خازن، فیلتر، لوله مسی و گاز کولر — تمام قطعات مصرفی با گارانتی اصالت کالا موجود است.",
      en: "Parsa Energy is a specialist center for HVAC parts and accessories for technicians, service companies and industry. Compressors, fan motors, electronic boards, expansion valves, capacitors, filters, copper pipe and refrigerant gas — all consumable parts with authenticity warranty in stock.",
    },
    features: [
      { fa: "کمپرسور تمام برندها (LG، Toshiba، GMCC)", en: "Compressors all brands (LG, Toshiba, GMCC)" },
      { fa: "موتور فن و موتور کولر", en: "Fan motor and AC motor" },
      { fa: "برد الکترونیکی کولر و پکیج", en: "AC and package electronic board" },
      { fa: "شیر انبساط و خازن", en: "Expansion valve and capacitor" },
      { fa: "فیلتر، لوله مسی و گاز کولر (R410A, R22, R32)", en: "Filter, copper pipe and refrigerant gas" },
      { fa: "فروش عمده به تعمیرکاران", en: "Wholesale to technicians" },
    ],
    faqs: [
      { q: { fa: "قطعه اصل است؟", en: "Are parts genuine?" }, a: { fa: "بله، تمام قطعات با گارانتی اصالت کالا عرضه می‌شوند.", en: "Yes, all parts come with authenticity warranty." } },
      { q: { fa: "فروش عمده دارید؟", en: "Do you sell wholesale?" }, a: { fa: "بله، برای تعمیرکاران و شرکت‌ها تخفیف عمده ارائه می‌شود.", en: "Yes, wholesale discounts for technicians and companies." } },
    ],
    relatedServices: [],
    relatedProducts: [],
  },
  "training-school": {
    image: "/images/solar-installation.png",
    hero: {
      fa: "آموزشگاه آزاد فنی‌وحرفه‌ای پارسا انرژی",
      en: "Parsa Energy Vocational Training School",
    },
    longDesc: {
      fa: "آموزشگاه آزاد فنی‌وحرفه‌ای پارسا انرژی در حوزه تاسیسات مکانیکی، برق و انرژی خورشیدی، دوره‌های تخصصی کوتاه‌مدت و مهارتی برگزار می‌کند. دوره‌ها توسط مهندسان مجرب و در کارگاه مجهز با تجهیزات واقعی ارائه می‌شوند. به فارغ‌التحصیلان مدرک معتبر فنی‌وحرفه‌ای و فرصت استخدام در تیم پارسا انرژی ارائه می‌دهیم.",
      en: "Parsa Energy vocational training school offers specialist short-term and skill courses in mechanical HVAC, electrical and solar energy. Courses are taught by experienced engineers in an equipped workshop with real equipment. Graduates receive recognized vocational certificates and employment opportunities at Parsa Energy.",
    },
    features: [
      { fa: "دوره تاسیسات مکانیکی (۸۰ ساعت)", en: "HVAC mechanical course (80 hrs)" },
      { fa: "دوره نیروگاه خورشیدی (۱۲۰ ساعت)", en: "Solar power plant course (120 hrs)" },
      { fa: "دوره برق صنعتی و ساختمان (۱۰۰ ساعت)", en: "Industrial & building electrical (100 hrs)" },
      { fa: "تعمیر اینورتر و برد الکترونیکی (۶۰ ساعت)", en: "Inverter & board repair (60 hrs)" },
      { fa: "تعمیرات کولر و پکیج (۵۰ ساعت)", en: "AC & package repair (50 hrs)" },
      { fa: "مدرک معتبر + فرصت شغلی", en: "Recognized certificate + job opportunity" },
    ],
    faqs: [
      { q: { fa: "مدرک معتبر است؟", en: "Is the certificate recognized?" }, a: { fa: "بله، مدرک فنی‌وحرفه‌ای معتبر و قابل استناد برای بازار کار است.", en: "Yes, recognized vocational certificate valid for the job market." } },
      { q: { fa: "پس از فارغ‌التحصیلی استخدام می‌شوم؟", en: "Will I be employed after graduation?" }, a: { fa: "فارغ‌التحصیلان برتر فرصت استخدام در تیم پارسا انرژی دارند.", en: "Top graduates have employment opportunities at Parsa Energy." } },
    ],
    relatedServices: [],
    relatedProducts: [],
  },
};

export function DivisionDetailPage({ division, onBack }: DivisionDetailPageProps) {
  const { t, pick, lang } = useLang();
  const isFa = lang === "fa";
  const content = divisionContent[division.slug];
  const relatedServices = services.filter((s) => content.relatedServices.includes(s.slug));

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [division.slug]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero of the division */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image src={content.image} alt={pick(division.name)} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {isFa ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {isFa ? "بازگشت به صفحه اصلی" : "Back to home"}
          </button>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">{division.number}</span>
            {isFa ? `حوزه ${division.number} از ۵` : `Division ${division.number} of 5`}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {pick(division.name)}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-100">{pick(division.short)}</p>
        </div>
      </section>

      {/* Body */}
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <p className={cn("mb-8 rounded-xl border-primary bg-primary/5 px-5 py-4 text-base leading-7 text-foreground", isFa ? "border-r-4" : "border-l-4")}>
            {pick(content.longDesc)}
          </p>

          {/* Features */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-foreground">{isFa ? "ویژگی‌ها و خدمات" : "Features & Services"}</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{pick(f)}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Items/tags */}
          <section className="mb-12">
            <h2 className="mb-4 text-xl font-bold text-foreground">{isFa ? "اقلام قابل تامین" : "Available items"}</h2>
            <div className="flex flex-wrap gap-2">
              {division.items.map((item) => (
                <span key={pick(item)} className="inline-flex items-center rounded-full border border-border bg-muted/30 px-3 py-1.5 text-sm font-medium text-foreground">
                  {pick(item)}
                </span>
              ))}
            </div>
          </section>

          {/* Related services (only for solar division) */}
          {relatedServices.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">{isFa ? "خدمات تخصصی این حوزه" : "Specialized services"}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedServices.map((s) => (
                  <div key={s.slug} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <s.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-foreground">{pick(s.name)}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{pick(s.tagline)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQs */}
          {content.faqs.length > 0 && (
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-foreground">{isFa ? "سوالات متداول" : "FAQ"}</h2>
              <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {content.faqs.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-start text-sm font-medium sm:text-base">{pick(f.q)}</AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground">{pick(f.a)}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-tech/10 p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">{isFa ? "آماده شروع هستید؟" : "Ready to start?"}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{isFa ? "مشاوره رایگان دریافت کنید — یک مهندس ظرف یک روز کاری پاسخ می‌دهد." : "Get a free consultation — an engineer responds within one business day."}</p>
            <Button asChild size="lg" className="mt-6 shadow-solar">
              <a href="#contact" onClick={(e) => { e.preventDefault(); onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100); }}>
                <Phone className="h-4 w-4" />
                <span className="mx-2">{isFa ? "درخواست مشاوره رایگان" : "Request free consultation"}</span>
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground" dir="ltr">
              {isFa
                ? "۰۹۱۵۸۲۲۲۱۹۹ | ۰۹۱۵۸۲۲۲۱۹۸ | ۰۹۱۵۸۲۲۲۱۹۷"
                : "+98 915 822 2199 | +98 915 822 2198 | +98 915 822 2197"}
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
