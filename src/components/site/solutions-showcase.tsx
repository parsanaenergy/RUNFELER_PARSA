"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, BatteryCharging } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/lang-provider";

export function SolutionsShowcase() {
  const { t, lang } = useLang();
  const isFa = lang === "fa";

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="absolute inset-0">
              <Image src="/images/microgrid-storage.png" alt={isFa ? "سیستم ذخیره انرژی" : "Energy storage"} fill sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
            </div>
            <div className="relative flex h-full min-h-[360px] flex-col justify-end p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/20 backdrop-blur">
                <BatteryCharging className="h-5 w-5 text-amber" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                {isFa ? "باتری و ذخیره انرژی" : "Battery & Energy Storage"}
              </h3>
              <p className="mt-2 max-w-md text-sm text-slate-200">
                {isFa
                  ? "بانک‌های LiFePO4 و ESS کانتینری — سایزینگ برای خودکفایی، اوج‌گیری و حالت جزیره‌ای، با BMS، حفاظت آتش و یکپارچه‌سازی EMS."
                  : "LiFePO4 banks and containerized ESS — sized for autonomy, peak shaving and grid-forming island mode, with BMS, fire suppression and EMS integration."}
              </p>
              <Link href="#services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber hover:gap-2.5 transition-all">
                {isFa ? "بررسی راهکارهای ذخیره" : "Explore storage solutions"} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm">
            <div className="absolute inset-0">
              <Image src="/images/inverter-repair.png" alt={isFa ? "تعمیر اینورتر و برد" : "Inverter & board repair"} fill sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20" />
            </div>
            <div className="relative flex h-full min-h-[360px] flex-col justify-end p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 backdrop-blur">
                <Cpu className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                {isFa ? "آزمایشگاه تعمیر اینورتر و برد" : "Inverter & Board Repair Lab"}
              </h3>
              <p className="mt-2 max-w-md text-sm text-slate-200">
                {isFa
                  ? "تعمیر در سطح قطعه اینورتر، برد درایور، برد کنترل و BMS — با تشخیص اسیلوسکوپ، کاریاب SMD و تست بار کامل. ۴۰ تا ۷۰٪ ارزان‌تر از تعویض."
                  : "Component-level repair of inverters, driver boards, control boards and BMS — using oscilloscope diagnostics, SMD rework and full load testing. 40–70% cheaper than replacement."}
              </p>
              <Link href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                {isFa ? "درخواست تعمیر" : "Get a repair quote"} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-tech/10 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {isFa ? "نمی‌دانید از کجا شروع کنید؟ مشاوره رایگان بگیرید." : "Not sure where to start? Get a free engineering consultation."}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {isFa
                  ? "یک تماس ۳۰ دقیقه‌ای با مهندس نیروگاه خورشیدی — اهداف شما را بررسی می‌کنیم، سایزینگ اولیه و مراحل بعد را مشخص می‌کنیم. بدون تعهد."
                  : "A 30-minute call with a solar power plant engineer — we'll review your goals, run a preliminary sizing, and outline next steps. No obligation."}
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0 shadow-solar">
              <Link href="#contact">
                {t("bookConsultation")} <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
