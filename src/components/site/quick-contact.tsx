"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { useLang } from "@/components/lang-provider";

/**
 * QuickContact — فرم تماس سریع و سبک.
 * به‌جای فرم طولانی، فقط ۳ فیلد + دکمه.
 * نام + تلفن + دکمه «تماس بگیرید».
 */
export function QuickContact() {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      isFa
        ? `سلام، من ${name || "بدون نام"} هستم. مایل به مشاوره رایگان پارسا انرژی هستم. شماره تماس: ${phone}`
        : `Hi, I'm ${name || "unknown"}. I'd like a free Parsa Energy consultation. Phone: ${phone}`,
    );
    window.open(`https://wa.me/989158222199?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-slate-950 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl sm:p-12"
        >
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {isFa ? "مشاوره رایگان دریافت کنید" : "Get a free consultation"}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              {isFa
                ? "نام و شماره خود را وارد کنید — کارشناس ما در ساعات اداری زیر ۱ ساعت با شما تماس می‌گیرد."
                : "Enter your name and number — our specialist will contact you within 1 hour during business hours."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isFa ? "نام شما" : "Your name"}
              className="h-12 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-white placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="tel"
              required
              dir="ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={isFa ? "۰۹۱۲۳۴۵۶۷۸۹" : "09123456789"}
              className="h-12 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 text-white placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-bold text-primary-foreground shadow-solar transition-transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{isFa ? "ارسال در واتساپ" : "Send via WhatsApp"}</span>
            </button>
          </form>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-slate-300 sm:flex-row">
            <a href="tel:+989158222199" className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-primary" />
              <span style={{ unicodeBidi: "plaintext" }}>۰۹۱۵۸۲۲۲۱۹۹</span>
            </a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span>{isFa ? "ساعت کاری شنبه تا چهارشنبه ۸-۱۴ و ۱۷-۲۰" : "Sat–Wed, 8:00–14:00 and 17:00–20:00"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
