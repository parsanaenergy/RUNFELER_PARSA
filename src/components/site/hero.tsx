"use client";

import Image from "next/image";
import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/lang-provider";

/**
 * Hero سبک — فقط معرفی کوتاه + CTA.
 * بنر متحرک ۵ حوزه در بخش بعدی (DivisionBanner) قرار دارد.
 * کپسول پاسخ BLUF برای سئو و هوش مصنوعی.
 */
export function Hero() {
  const { lang } = useLang();
  const isFa = lang === "fa";

  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar-plant.png"
          alt={isFa ? "نیروگاه خورشیدی پارسا انرژی" : "Parsa Energy solar plant"}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            {isFa ? "مرجع تخصصی انرژی خورشیدی و تاسیسات" : "Solar & HVAC Authority"}
          </span>

          <h1 className="mt-5 font-display text-3xl font-bold leading-relaxed text-white sm:text-4xl lg:text-5xl">
            {isFa ? (
              <>
                پارسا انرژی
                <br />
                <span className="text-gradient-solar">پنج حوزه تخصصی</span> در یک مجموعه
              </>
            ) : (
              <>
                Parsa Energy
                <br />
                <span className="text-gradient-solar">five divisions</span> in one company
              </>
            )}
          </h1>

          {/* Answer capsule (BLUF) — for SEO + AI */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-loose text-slate-100 sm:text-lg">
            {isFa
              ? "طراحی و اجرای نیروگاه خورشیدی، تامین برق اضطراری، فروش و تعمیر تاسیسات مکانیکی، قطعات تهویه و آموزش فنی‌وحرفه‌ای."
              : "Solar power plants, emergency power, HVAC sales & repair, parts, and vocational training."}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 shadow-solar">
              <a href="#contact">
                <Phone className="h-4 w-4" />
                <span className="mx-2">{isFa ? "مشاوره رایگان" : "Free Consultation"}</span>
              </a>
            </Button>
            <div className="flex items-center gap-1.5 text-sm text-slate-200">
              <Star className="h-4 w-4 fill-amber text-amber" />
              <span>{isFa ? "۴.۹ از ۵ رضایت مشتری" : "4.9/5 client rating"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
