"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Phone, Quote, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/components/lang-provider";
import { type KB_article } from "@/lib/kb-articles";
import { faNum } from "@/lib/utils";
import { renderMarkdownLinks } from "@/lib/render-links";

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
      {/* Top navigation bar */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <Button variant="ghost" size="sm" onClick={onBack} className="gap-2">
            {isFa ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {isFa ? "بازگشت به دانشنامه" : "Back to Knowledge Center"}
          </Button>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {pick(article.categoryLabel)}
          </span>
        </div>
      </nav>

      {/* Article header */}
      <section className="border-b border-border bg-muted/20 py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl leading-tight">
            {pick(article.title)}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground sm:text-sm">
            <span className="flex items-center gap-1">
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
          {/* Humanized Expert Summary with real technical director quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="expert-summary relative mb-10 overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-background to-primary/5 p-6 shadow-sm sm:p-7"
          >
            <div className="mb-3 flex items-center justify-between gap-3 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-foreground sm:text-base">
                    {isFa ? "دیدگاه و جمع‌بندی کارشناسی" : "Engineering Team Executive Summary"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {isFa ? "تیم فنی و مهندسی پارسا انرژی" : "Parsa Energy Technical Engineering Team"}
                  </p>
                </div>
              </div>
              <Quote className="h-8 w-8 text-amber-500/20 rtl:scale-x-[-1]" />
            </div>
            <blockquote className="text-sm leading-8 text-foreground/90 sm:text-base">
              «{pick(article.excerpt)}»
            </blockquote>
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
                <p className="mt-3 text-base leading-8 text-muted-foreground">{renderMarkdownLinks(section.p)}</p>
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
