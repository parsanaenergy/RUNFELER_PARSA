"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Lightbulb, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/components/lang-provider";
import { type KB_article } from "@/lib/kb-articles";
import { faNum } from "@/lib/utils";

interface ArticleReaderProps {
  article: KB_article;
  onBack: () => void;
}

export function ArticleReader({ article, onBack }: ArticleReaderProps) {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const pick = (b: { fa: string; en: string }) => (isFa ? b.fa : b.en);
  const body = isFa ? article.body.fa : article.body.en;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [article.slug]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Article header */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="relative mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {isFa ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {isFa ? "بازگشت به دانشنامه" : "Back to knowledge center"}
          </button>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {pick(article.categoryLabel)}
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-relaxed text-white sm:text-4xl">
            {pick(article.title)}
          </h1>
          <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {pick(article.readTime)}
            </span>
            <span className="tabular-nums" dir="ltr">{isFa ? faNum(article.date) : article.date}</span>
          </p>
        </div>
      </section>

      {/* Article body */}
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {/* BLUF answer capsule */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 rounded-xl border-r-4 border-primary bg-primary/5 px-5 py-4"
          >
            <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Lightbulb className="h-4 w-4" />
              {isFa ? "پاسخ کوتاه" : "Quick answer"}
            </div>
            <p className="text-base leading-relaxed text-foreground">{pick(article.excerpt)}</p>
          </motion.div>

          {/* Body sections */}
          <div className="space-y-8">
            {body.map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">{section.h2}</h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">{section.p}</p>
              </motion.section>
            ))}
          </div>

          {/* FAQ */}
          {article.faqs.length > 0 && (
            <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
              <h2 className="font-display text-lg font-bold text-foreground">{isFa ? "سوالات متداول" : "FAQ"}</h2>
              <Accordion type="single" collapsible className="mt-4">
                {article.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-start text-sm font-medium sm:text-base">{pick(f.q)}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{pick(f.a)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-tech/10 p-8 text-center">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              {isFa ? "سؤال دارید؟" : "Have a question?"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {isFa ? "کارشناسان پارسا انرژی رایگان مشاوره می‌دهند." : "Parsa Energy specialists offer free consultation."}
            </p>
            <Button asChild size="lg" className="mt-6 shadow-solar">
              <a href="#contact" onClick={(e) => { e.preventDefault(); onBack(); setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 150); }}>
                <Phone className="h-4 w-4" />
                <span className="mx-2">{isFa ? "مشاوره رایگان" : "Free consultation"}</span>
              </a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground" dir="ltr">+98 915 822 2199 / 2198 / 2197</p>
          </div>
        </article>
      </main>
    </div>
  );
}
