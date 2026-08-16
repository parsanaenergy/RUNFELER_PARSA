"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Cpu, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/components/lang-provider";

/**
 * TrustSignals — چرا پارسا انرژی؟ (Asymmetrical Humanized Grid)
 * شکستن ساختار متقارن به ۱ باکس بزرگ پروژه‌محور، ۲ باکس متوسط تحلیلی و ۱ باکس تک‌جمله‌ای کوبنده.
 */
export function TrustSignals() {
  const { lang } = useLang();
  const isFa = lang === "fa";

  return (
    <section className="py-16 sm:py-20 bg-muted/10 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-start flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              {isFa ? "مزیت رقابتی و تعهد فنی" : "Engineering Edge & Commitment"}
            </div>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
              {isFa ? "چرا صنایع و مالکان در مشهد ما را انتخاب می‌کنند؟" : "Why Industries & Property Owners Choose Us"}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-muted-foreground">
            {isFa
              ? "ترکیب محاسبات دقیق مهندسی برق، تامین بی‌واسطه تجهیزات استاندارد و پشتیبانی حضوری در خراسان رضوی."
              : "Engineering rigor, direct tier-1 supply, and rapid on-site field support across Khorasan."}
          </p>
        </div>

        {/* Asymmetrical Grid: 1 Large, 2 Medium, 1 Punchline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {/* Box 1: Large Featured Box with Project Image & Track Record (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 relative overflow-hidden rounded-2xl border border-primary/30 bg-card p-6 sm:p-8 shadow-md flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase">
                <Award className="h-4 w-4" />
                {isFa ? "بیش از ۱۰ سال حضور میدانی و ۴۵+ مگاوات اجرا" : "10+ Years Field Track Record"}
              </div>
              <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-foreground">
                {isFa
                  ? "مهندسی بومی با استانداردهای بین‌المللی IEC"
                  : "Localized Engineering with International IEC Standards"}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {isFa
                  ? "ما تنها مجری نیروگاه نیستیم؛ نیروگاه‌های اجرا شده توسط پارسا انرژی در شهرک صنعتی توس، چناران، فریمان و مشهد بر مبنای تحلیل دقیق زاویه تابش سالانه، شبیه‌سازی سایه‌اندازی با PVSyst و تاب‌آوری در برابر گردوغبار طراحی می‌شوند."
                  : "We design plants in Toos, Chenaran, and Fariman industrial parks backed by PVSyst solar irradiance simulations and extreme dust-load resilience testing."}
              </p>
              
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {isFa ? "تاییدیه رسمی ساتبا" : "SATBA Accredited"}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {isFa ? "عضو نظام مهندسی" : "Engineering Council"}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  {isFa ? "تحویل پروژه طبق برنامه" : "On-time Delivery"}
                </div>
              </div>
            </div>

            <div className="relative mt-6 h-48 w-full overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/hero-solar-plant.png"
                alt="پروژه نیروگاه خورشیدی پارسا انرژی"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">
                  {isFa ? "تصویر واقعی از پروژه مگاواتی نیروگاه خورشیدی اجرایی در خراسان" : "Real execution of MW-scale solar plant"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 2 & 3: Two Medium Boxes (col-span-5 stacked) */}
          <div className="md:col-span-5 flex flex-col gap-5 justify-between">
            {/* Box 2: Medium (Component-level Repair Lab) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {isFa ? "آزمایشگاه تخصصی تعمیرات در سطح قطعه" : "Component-Level Repair Laboratory"}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-muted-foreground">
                  {isFa
                    ? "به جای تحمیل هزینه تعویض چندصد میلیونی اینورتر یا کنترلر، قطعات نیمه‌هادی (IGBT/MOSFET) و بردهای صنعتی شما را در آزمایشگاه اختصاصی مشهد با گارانتی ۶ ماهه تعمیر و عیب‌یابی می‌کنیم."
                    : "Instead of costly inverter replacements, our Mashhad repair lab repairs IGBT/MOSFET modules and control boards at component level with 6-month warranty."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                <Link href="/services/electronic-board-repair-spec" className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                  {isFa ? "بررسی فرآیند آزمایشگاه تعمیرات" : "Explore repair laboratory"}
                  <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg]" />
                </Link>
              </div>
            </motion.div>

            {/* Box 3: Medium (25-Year Guarantee + Emergency SLA) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm flex-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {isFa ? "گارانتی رسمی ۲۵ ساله و امداد فنی فوری" : "25-Year Written Warranty & Emergency SLA"}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-muted-foreground">
                  {isFa
                    ? "تضمین کتبی ۲۵ ساله راندمان پنل‌های خورشیدی Tier-1، تامین قطعات یدکی در انبار مرکزی مشهد، و اعزام تیم فنی در کمتر از ۴ ساعت در موارد اضطراری قطع برق صنایع."
                    : "Written 25-year linear performance warranty on Tier-1 panels, local parts warehouse in Mashhad, and under-4-hour emergency dispatch."}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border">
                <Link href="#contact" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">
                  {isFa ? "درخواست مشاوره و استعلام گارانتی" : "Request warranty details"}
                  <ArrowUpRight className="h-3.5 w-3.5 rtl:rotate-[-90deg]" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Box 4: Impactful Punchline Box (col-span-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/15 via-primary/10 to-amber-500/15 p-5 sm:p-6 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0 font-bold text-base">
                ⚡
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-foreground">
                  {isFa
                    ? "«ما به حدس و تقریب تکیه نمی‌کنیم؛ هر کیلووات را بر پایه تحلیل اقلیمی دقیق خراسان و استاندارد IEC مهندسی می‌کنیم.»"
                    : "“We never rely on guesswork; every kilowatt is engineered on precise regional irradiance data and IEC compliance.”"}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {isFa ? "مدیریت فنی و مهندسی شرکت پارسا انرژی" : "Technical Directorate, Parsa Energy"}
                </p>
              </div>
            </div>
            <Link
              href="#contact"
              className="shrink-0 rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-solar hover:bg-primary/90 transition-colors"
            >
              {isFa ? "دریافت مشاوره رایگان مهندسی" : "Get Free Consultation"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

