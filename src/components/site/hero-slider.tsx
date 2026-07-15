"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

/**
 * HeroSlider — بنر متحرک سبک.
 *
 * فقط تیتر کوتاه هر حوزه + CTA. سرعت ۳ ثانیه.
 * توضیحات کامل در باکس‌های زیر بنر.
 */
export interface HeroSlide {
  id: number;
  slug: string;
  title: { fa: string; en: string };
  cta: { fa: string; en: string };
  bgImage: string;
  gradient: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: 1,
    slug: "solar-emergency-power",
    title: { fa: "نیروگاه خورشیدی و برق اضطراری", en: "Solar Power Plant & Emergency Power" },
    cta: { fa: "مشاهده جزئیات", en: "View details" },
    bgImage: "/images/hero-solar-plant.png",
    gradient: "from-orange-600/80 to-amber-500/60",
  },
  {
    id: 2,
    slug: "hvac-equipment",
    title: { fa: "تجهیزات گرمایشی و سرمایشی", en: "Heating & Cooling Equipment" },
    cta: { fa: "مشاهده جزئیات", en: "View details" },
    bgImage: "/images/hvac-banner.jpg",
    gradient: "from-sky-600/80 to-cyan-500/60",
  },
  {
    id: 3,
    slug: "hvac-repair",
    title: { fa: "تعمیرات تخصصی", en: "Specialized Repair" },
    cta: { fa: "مشاهده جزئیات", en: "View details" },
    bgImage: "/images/inverter-repair.png",
    gradient: "from-rose-600/80 to-red-500/60",
  },
  {
    id: 4,
    slug: "training-school",
    title: { fa: "دوره‌های آموزشی", en: "Training Courses" },
    cta: { fa: "مشاهده جزئیات", en: "View details" },
    bgImage: "/images/solar-installation.png",
    gradient: "from-violet-600/80 to-purple-500/60",
  },
];

interface HeroSliderProps {
  onSelectDivision: (slug: string) => void;
}

export function HeroSlider({ onSelectDivision }: HeroSliderProps) {
  const [current, setCurrent] = React.useState(0);
  const { lang } = useLang();
  const isFa = lang === "fa";
  const slide = SLIDES[current];

  // Auto-advance every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const go = (i: number) => setCurrent(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  const pick = (b: { fa: string; en: string }) => (isFa ? b.fa : b.en);

  return (
    <section className="relative isolate h-[320px] overflow-hidden bg-slate-950 sm:h-[380px] lg:h-[420px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0">
            <Image
              src={slide.bgImage}
              alt={pick(slide.title)}
              fill
              priority={current === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className={cn("absolute inset-0 bg-gradient-to-r", slide.gradient)} />
            <div className="absolute inset-0 bg-slate-950/40" />
          </div>

          <div className="relative flex h-full items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl ltr:ml-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-display text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl"
                >
                  {pick(slide.title)}
                </motion.h2>

                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => onSelectDivision(slide.slug)}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-lg transition-transform hover:scale-105"
                >
                  {pick(slide.cta)}
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress bar — 3 seconds */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20">
        <motion.div
          key={current}
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
        />
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            aria-label={`${isFa ? "اسلاید" : "Slide"} ${s.id}`}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70",
            )}
          />
        ))}
      </div>
    </section>
  );
}
