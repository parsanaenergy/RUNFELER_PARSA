"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Headset } from "lucide-react";
import { useLang } from "@/components/lang-provider";

/**
 * TrustSignals — چرا پارسا انرژی؟
 * ۴ کارت کوتاه: گارانتی، تجربه، پشتیبانی، سرعت.
 */
export function TrustSignals() {
  const { lang } = useLang();
  const isFa = lang === "fa";

  const items = isFa
    ? [
        { icon: ShieldCheck, title: "گارانتی معتبر", desc: "گارانتی کالا و اجرا" },
        { icon: Award, title: "۱۰+ سال تجربه", desc: "صدها پروژه موفق" },
        { icon: Headset, title: "پشتیبانی فنی", desc: "پاسخگویی سریع" },
        { icon: Clock, title: "اجرا سریع", desc: "تحویل به‌موقع" },
      ]
    : [
        { icon: ShieldCheck, title: "Valid warranty", desc: "Product & workmanship" },
        { icon: Award, title: "10+ years", desc: "Hundreds of projects" },
        { icon: Headset, title: "Tech support", desc: "Fast response" },
        { icon: Clock, title: "Fast delivery", desc: "On-time execution" },
      ];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
          {isFa ? "چرا پارسا انرژی؟" : "Why Parsa Energy?"}
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
