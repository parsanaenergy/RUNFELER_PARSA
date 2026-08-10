"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useLang } from "@/components/lang-provider";
import { toast } from "sonner";

/**
 * QuickContact — فرم تماس سریع و سبک.
 * نام + تلفن + دکمه «ثبت درخواست مشاوره».
 * اطلاعات مستقیماً به ربات بله ارسال می‌گردد.
 */
export function QuickContact() {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          purpose: isFa ? "مشاوره رایگان سریع" : "Quick Free Consultation",
          message: isFa ? "درخواست مشاوره تلفنی از فرم سریع سایت" : "Phone consultation request from quick contact form",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setName("");
        setPhone("");
        toast.success(
          isFa
            ? "درخواست شما با موفقیت ثبت شد. کارشناسان ما به زودی با شما تماس می‌گیرند."
            : "Your request has been submitted successfully. We will call you soon."
        );
      } else {
        toast.error(isFa ? "خطا در ثبت درخواست. لطفا دوباره تلاش کنید." : "Failed to submit request.");
      }
    } catch (err) {
      console.error("Error submitting quick lead:", err);
      toast.error(isFa ? "خطا در ارتباط با سرور." : "Network error.");
    } finally {
      setIsSubmitting(false);
    }
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

          {isSubmitted ? (
            <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-center text-emerald-400">
              <CheckCircle2 className="h-6 w-6 shrink-0" />
              <span className="text-sm font-semibold">
                {isFa
                  ? "درخواست شما با موفقیت ثبت شد! کارشناسان ما به زودی با شما تماس خواهند گرفت."
                  : "Your request has been submitted! Our team will contact you shortly."}
              </span>
            </div>
          ) : (
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
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-bold text-primary-foreground shadow-solar transition-transform hover:scale-105 disabled:opacity-50 shrink-0"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{isFa ? "ثبت درخواست مشاوره" : "Submit Request"}</span>
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-slate-300 sm:flex-row">
            <a href="tel:+989158222199" className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4 text-primary" />
              <span style={{ unicodeBidi: "plaintext" }}>{isFa ? "۰۹۱۵۸۲۲۲۱۹۹" : "+98 915 822 2199"}</span>
            </a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span>{isFa ? "ساعت کاری شنبه تا چهارشنبه ۸-۱۴ و ۱۷-۲۰" : "Sat–Wed, 8:00–14:00 and 17:00–20:00"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
