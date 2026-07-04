"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./section-header";
import { testimonials } from "@/lib/content";
import { useLang } from "@/components/lang-provider";

export function TestimonialsSection() {
  const { t, pick } = useLang();
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("testimonialsEyebrow")}
          title={<>{t("testimonialsTitle1")} <span className="text-gradient-solar">{t("testimonialsTitle2")}</span></>}
          description={t("testimonialsDesc")}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((tm, i) => (
            <figure key={i} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
              <Quote className="h-7 w-7 text-primary/30 rtl:scale-x-[-1]" />
              <div className="mt-3 flex">
                {Array.from({ length: tm.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">«{pick(tm.quote)}»</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="font-display text-sm font-bold text-foreground">{pick(tm.author)}</div>
                <div className="text-xs text-muted-foreground">{pick(tm.role)}</div>
                <div className="text-xs font-medium text-primary">{pick(tm.company)}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
