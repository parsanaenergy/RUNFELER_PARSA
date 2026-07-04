"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { divisions } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

const bannerImages = [
  "/images/hero-solar-plant.png",
  "/images/solar-installation.png",
  "/images/microgrid-storage.png",
  "/images/inverter-repair.png",
  "/images/hero-solar-plant.png",
];

const accentBg: Record<string, string> = {
  solar: "from-primary/80 to-amber/60",
  tech: "from-tech/80 to-primary/40",
  amber: "from-amber/80 to-primary/50",
};

/**
 * بنر متحرک ۵ حوزه اصلی پارسا انرژی.
 * اسلایدر اتوماتیک با پشتیبانی RTL، ناوبری دستی و نقطه‌های نشانگر.
 */
export function DivisionBanner() {
  const { t, pick, lang } = useLang();
  const [current, setCurrent] = React.useState(0);
  const isFa = lang === "fa";

  const next = React.useCallback(() => setCurrent((c) => (c + 1) % divisions.length), []);
  const prev = React.useCallback(() => setCurrent((c) => (c - 1 + divisions.length) % divisions.length), []);

  // Auto-advance every 4.5 seconds
  React.useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="divisions-banner" className="relative isolate overflow-hidden bg-slate-950">
      {/* Slides */}
      <div className="relative h-[440px] sm:h-[500px] lg:h-[540px]">
        {divisions.map((d, i) => (
          <div
            key={d.slug}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === current ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-hidden={i !== current}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={bannerImages[i] || bannerImages[0]}
                alt={pick(d.name)}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className={cn("absolute inset-0 bg-gradient-to-r", accentBg[d.accent])} />
              <div className="absolute inset-0 bg-slate-950/50" />
            </div>

            {/* Content */}
            <div className="relative flex h-full items-center">
              <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[10px]">{d.number}</span>
                    {isFa ? `حوزه ${d.number} از ۵` : `Division ${d.number} of 5`}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
                    {pick(d.name)}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-100 sm:text-lg">{pick(d.short)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{pick(d.description)}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {d.items.slice(0, 4).map((item) => (
                      <span key={pick(item)} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {pick(item)}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`#division-${d.slug}`}
                    onClick={(e) => { e.preventDefault(); setCurrent(i); document.getElementById(`division-cards`)?.scrollIntoView({ behavior: "smooth" }); }}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition-transform hover:scale-105"
                  >
                    {isFa ? "مشاهده جزئیات" : "View details"}
                    {isFa ? <ArrowLeft className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label={isFa ? "قبلی" : "Previous"}
        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
      >
        <ChevronRight className="h-5 w-5 rtl:hidden" />
        <ChevronLeft className="hidden h-5 w-5 rtl:block" />
      </button>
      <button
        onClick={next}
        aria-label={isFa ? "بعدی" : "Next"}
        className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25"
      >
        <ChevronLeft className="h-5 w-5 ltr:block rtl:hidden" />
        <ChevronRight className="hidden h-5 w-5 rtl:block" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {divisions.map((d, i) => (
          <button
            key={d.slug}
            onClick={() => setCurrent(i)}
            aria-label={`${isFa ? "حوزه" : "Division"} ${d.number}`}
            className={cn(
              "h-2 rounded-full transition-all",
              i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}
