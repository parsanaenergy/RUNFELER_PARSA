"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sun, Flame, Wrench, Package, GraduationCap, Check } from "lucide-react";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

/**
 * ServiceCards — معرفی سریع ۵ حوزه.
 *
 * مشخصات:
 *  - Grid: ۵ ستونه (desktop)، ۲ (tablet)، ۱ (mobile)
 *  - هر کارت: آیکون، عنوان، توضیح کوتاه، ۳ feature، دکمه «ادامه مطلب»
 *  - Hover: framer-motion lift + shadow
 *  - CTA: لینک به صفحه اختصاصی هر حوزه
 */
interface ServiceCard {
  id: number;
  slug: string;
  icon: typeof Sun;
  title: { fa: string; en: string };
  shortDesc: { fa: string; en: string };
  features: { fa: string; en: string }[];
  color: "orange" | "sky" | "rose" | "emerald" | "violet";
}

const SERVICES: ServiceCard[] = [
  {
    id: 1,
    slug: "solar-emergency-power",
    icon: Sun,
    title: { fa: "نیروگاه خورشیدی", en: "Solar Power" },
    shortDesc: { fa: "طراحی و اجرای سیستم‌های فتوولتائیک با وام و گارانتی", en: "PV system design & installation with financing and warranty" },
    features: [
      { fa: "بازگشت سرمایه ۴ ساله", en: "4-year payback" },
      { fa: "نصب سریع", en: "Fast install" },
      { fa: "گارانتی ۵ ساله", en: "5-year warranty" },
    ],
    color: "orange",
  },
  {
    id: 2,
    slug: "hvac-equipment",
    icon: Flame,
    title: { fa: "تاسیسات مکانیکی", en: "HVAC" },
    shortDesc: { fa: "فروش و نصب پکیج، کولر گازی و سیستم‌های تهویه", en: "Package, AC and ventilation sales & installation" },
    features: [
      { fa: "نصب حرفه‌ای", en: "Professional install" },
      { fa: "گارانتی کالا", en: "Product warranty" },
      { fa: "خدمات پس از فروش", en: "After-sales" },
    ],
    color: "sky",
  },
  {
    id: 3,
    slug: "hvac-repair",
    icon: Wrench,
    title: { fa: "تعمیرات تخصصی", en: "Specialized Repair" },
    shortDesc: { fa: "تعمیر پکیج، کولر، آبگرمکن در محل با ضمانت", en: "On-site package, AC, water heater repair with warranty" },
    features: [
      { fa: "تعمیر در محل", en: "On-site" },
      { fa: "ضمانت تعمیر", en: "Repair warranty" },
      { fa: "قیمت منصفانه", en: "Fair price" },
    ],
    color: "rose",
  },
  {
    id: 4,
    slug: "hvac-parts",
    icon: Package,
    title: { fa: "فروش قطعات", en: "Parts Sales" },
    shortDesc: { fa: "تامین قطعات اصلی تهویه و سیستم‌های خورشیدی", en: "Genuine HVAC and solar parts supply" },
    features: [
      { fa: "قطعات اصل", en: "Genuine" },
      { fa: "قیمت مناسب", en: "Fair price" },
      { fa: "ارسال سریع", en: "Fast shipping" },
    ],
    color: "emerald",
  },
  {
    id: 5,
    slug: "training-school",
    icon: GraduationCap,
    title: { fa: "آموزشگاه", en: "Academy" },
    shortDesc: { fa: "دوره‌های عملی نصب و تعمیرات با مدرک فنی‌حرفه‌ای", en: "Practical install & repair courses with vocational certificate" },
    features: [
      { fa: "آموزش عملی", en: "Hands-on" },
      { fa: "مدرک معتبر", en: "Certificate" },
      { fa: "فرصت شغلی", en: "Job opportunity" },
    ],
    color: "violet",
  },
];

const COLOR_MAP: Record<ServiceCard["color"], { bg: string; text: string; btn: string; ring: string }> = {
  orange: { bg: "bg-orange-500/10", text: "text-orange-500", btn: "bg-orange-500 hover:bg-orange-600", ring: "hover:border-orange-400/50" },
  sky: { bg: "bg-sky-500/10", text: "text-sky-500", btn: "bg-sky-500 hover:bg-sky-600", ring: "hover:border-sky-400/50" },
  rose: { bg: "bg-rose-500/10", text: "text-rose-500", btn: "bg-rose-500 hover:bg-rose-600", ring: "hover:border-rose-400/50" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-500", btn: "bg-emerald-500 hover:bg-emerald-600", ring: "hover:border-emerald-400/50" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-500", btn: "bg-violet-500 hover:bg-violet-600", ring: "hover:border-violet-400/50" },
};

interface ServiceCardsProps {
  onSelect: (slug: string) => void;
}

export function ServiceCards({ onSelect }: ServiceCardsProps) {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const pick = (b: { fa: string; en: string }) => (isFa ? b.fa : b.en);

  return (
    <section id="services" className="scroll-mt-20 bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            {isFa ? "خدمات پارسا انرژی" : "Parsa Energy Services"}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            {isFa ? "پنج حوزه تخصصی در یک مجموعه — روی هر کارت کلیک کنید" : "Five divisions in one company — click any card"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, idx) => {
            const c = COLOR_MAP[s.color];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={cn(
                  "flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg",
                  c.ring,
                )}
              >
                {/* Icon */}
                <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", c.bg)}>
                  <s.icon className={cn("h-6 w-6", c.text)} />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{pick(s.title)}</h3>

                {/* Short description */}
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{pick(s.shortDesc)}</p>

                {/* Features */}
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className={cn("h-3.5 w-3.5 shrink-0", c.text)} />
                      {pick(f)}
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  onClick={() => onSelect(s.slug)}
                  className={cn(
                    "mt-auto flex items-center justify-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-colors",
                    c.btn,
                  )}
                >
                  {isFa ? "ادامه مطلب" : "Read more"}
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
