"use client";

import { Calculator, ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/components/lang-provider";

/**
 * کارت لینک ابزارهای مهندسی — به‌جای نمایش کل بخش محاسبات در صفحه اصلی.
 * کاربر با کلیک به بخش #tools در صفحه جزئیات حوزه خورشیدی می‌رود،
 * یا مستقیماً به تماس هدایت می‌شود.
 */
export function ToolsLinkCard() {
  const { lang } = useLang();
  const isFa = lang === "fa";

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-muted/30 p-6 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                {isFa ? "ابزار محاسباتی مهندسی" : "Engineering Calculators"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isFa
                  ? "۹ ماشین‌حساب رایگان: اندازه سیستم، ظرفیت باتری، سایز کابل، بازگشت سرمایه..."
                  : "9 free calculators: system size, battery, cable, ROI..."}
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-solar transition-transform hover:scale-105"
          >
            {isFa ? "مشاوره رایگان" : "Free Consultation"}
            {isFa ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </a>
        </div>
      </div>
    </section>
  );
}
