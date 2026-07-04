"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Factory, Flame, Wrench, GraduationCap } from "lucide-react";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

/**
 * AudienceSelector — ۴ باکس اصلی صفحه.
 *
 * هر باکس: عنوان بزرگ گویا + لیست تیک‌دار.
 * بنر متحرک بالاست، این باکس‌ها زیر آن.
 * ۵ کارت خدمت قبلی حذف شد و با این ادغام شد.
 */

interface AudienceBox {
  id: number;
  slug: string;
  icon: typeof Factory;
  title: { fa: string; en: string };
  items: { fa: string; en: string }[];
  color: "amber" | "sky" | "rose" | "violet";
}

const BOXES: AudienceBox[] = [
  {
    id: 1,
    slug: "solar-emergency-power",
    icon: Factory,
    title: { fa: "نیروگاه خورشیدی و برق اضطراری", en: "Solar Power & Emergency Power" },
    items: [
      { fa: "احداث نیروگاه خورشیدی (متصل به شبکه، مجزا از شبکه و هیبرید)", en: "Solar plant construction (grid-tied, off-grid, hybrid)" },
      { fa: "تامین برق اضطراری (کارخانجات، اصناف، فروشگاه‌ها و منازل)", en: "Emergency power (factories, trades, shops, homes)" },
      { fa: "فروش تجهیزات برق (پنل خورشیدی، باتری، اینورتر و...)", en: "Electrical equipment sales (panels, batteries, inverters)" },
    ],
    color: "amber",
  },
  {
    id: 2,
    slug: "hvac-equipment",
    icon: Flame,
    title: { fa: "تجهیزات گرمایشی و سرمایشی", en: "Heating & Cooling Equipment" },
    items: [
      { fa: "فروش تجهیزات گرمایشی و سرمایشی نو و استوک (کولر گازی، پکیج شوفاژ، رادیاتور و...)", en: "New & stock heating/cooling equipment (AC, package, radiator)" },
      { fa: "فروش تأسیسات مکانیکی (پمپ آب و...)", en: "Mechanical facilities sales (water pumps)" },
    ],
    color: "sky",
  },
  {
    id: 3,
    slug: "hvac-repair",
    icon: Wrench,
    title: { fa: "تعمیرات پکیج، کولر و بردهای الکترونیکی", en: "Package, AC & Board Repair" },
    items: [
      { fa: "سرویس و تعمیرات تخصصی پکیج و کولر گازی", en: "Package & AC specialized service and repair" },
      { fa: "تعمیر بردهای الکترونیکی", en: "Electronic board repair" },
      { fa: "طراحی و اجرای تاسیسات مکانیکی و نصب تجهیزات گرمایشی، سرمایشی", en: "Mechanical facility design & installation of heating/cooling equipment" },
    ],
    color: "rose",
  },
  {
    id: 4,
    slug: "training-school",
    icon: GraduationCap,
    title: { fa: "دوره‌های آموزشی", en: "Training Courses" },
    items: [
      { fa: "برگزاری دوره‌های آموزشی فنی‌حرفه‌ای:", en: "Vocational training courses:" },
      { fa: "ـ طراحی و نصب نیروگاه خورشیدی", en: "— Solar plant design & installation" },
      { fa: "ـ نصب و راه‌اندازی پکیج شوفاژ دیواری", en: "— Wall package installation" },
      { fa: "ـ عیب‌یابی، تعمیر و سرویس کولرگازی", en: "— AC troubleshooting, repair & service" },
      { fa: "ـ تعمیرات انواع بردهای الکترونیکی", en: "— Electronic board repair" },
    ],
    color: "violet",
  },
];

const COLOR_MAP: Record<AudienceBox["color"], { ring: string; bg: string; text: string; border: string }> = {
  amber: { ring: "hover:border-amber-400/60", bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  sky: { ring: "hover:border-sky-400/60", bg: "bg-sky-500/10", text: "text-sky-600", border: "border-sky-500/20" },
  rose: { ring: "hover:border-rose-400/60", bg: "bg-rose-500/10", text: "text-rose-600", border: "border-rose-500/20" },
  violet: { ring: "hover:border-violet-400/60", bg: "bg-violet-500/10", text: "text-violet-600", border: "border-violet-500/20" },
};

interface AudienceSelectorProps {
  onSelect: (slug: string) => void;
}

export function AudienceSelector({ onSelect }: AudienceSelectorProps) {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const pick = (b: { fa: string; en: string }) => (isFa ? b.fa : b.en);

  return (
    <section id="audience" className="scroll-mt-20 bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            {isFa ? "خدمات پارسا انرژی" : "Parsa Energy Services"}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            {isFa ? "روی هر باکس کلیک کنید تا جزئیات کامل را ببینید" : "Click each box for full details"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BOXES.map((box, idx) => {
            const c = COLOR_MAP[box.color];
            return (
              <motion.button
                key={box.id}
                type="button"
                onClick={() => onSelect(box.slug)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border-2 bg-card p-5 text-start shadow-sm transition-all hover:shadow-lg",
                  c.border,
                  c.ring,
                )}
              >
                {/* Icon */}
                <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", c.bg)}>
                  <box.icon className={cn("h-6 w-6", c.text)} />
                </div>

                {/* Big title */}
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground sm:text-xl">
                  {pick(box.title)}
                </h3>

                {/* Items list with checkmarks */}
                <ul className="mt-4 flex-1 space-y-2">
                  {box.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
                      <Check className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", c.text)} />
                      <span>{pick(item)}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA arrow */}
                <div className={cn("mt-4 flex items-center gap-1.5 text-sm font-bold", c.text)}>
                  <span>{isFa ? "مشاهده جزئیات" : "View details"}</span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
