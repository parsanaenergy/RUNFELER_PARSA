"use client";

import * as React from "react";
import { ArrowRight, Clock, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";
import { AnswerCapsule } from "./answer-capsule";
import { articles, knowledgeCategories, type Article } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { faNum } from "@/lib/utils";

function ArticleDialog({ article }: { article: Article }) {
  const { t, pick, lang } = useLang();
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);
  return (
    <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto scroll-soft">
      <DialogHeader>
        <Badge variant="secondary" className="w-fit bg-tech/10 text-tech">{pick(article.category)}</Badge>
        <DialogTitle className="text-2xl font-bold leading-snug sm:text-3xl">{pick(article.title)}</DialogTitle>
        <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{fmt(pick(article.readTime))}</span>
          <span className="tabular-nums" dir="ltr">{fmt(article.date)}</span>
          <span className="text-muted-foreground">{pick(article.author)}</span>
        </DialogDescription>
      </DialogHeader>
      <p className="mt-2 text-base font-medium leading-relaxed text-foreground">{pick(article.excerpt)}</p>
      <article className="mt-4 max-w-none">
        {article.body.map((para, i) => (
          <p key={i} className="mb-3 text-sm leading-relaxed text-muted-foreground">{pick(para)}</p>
        ))}
      </article>
      {article.faqs && article.faqs.length > 0 && (
        <div className="mt-5 rounded-xl border border-border bg-muted/30 p-4">
          <h4 className="flex items-center gap-2 font-display text-sm font-semibold text-foreground">
            <Lightbulb className="h-4 w-4 text-amber" /> {t("knowledgeQuickAnswers")}
          </h4>
          <Accordion type="single" collapsible className="mt-2">
            {article.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm text-start">{pick(faq.q)}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{pick(faq.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground">{t("knowledgeApplyProject")}</p>
        <Button asChild className="shadow-solar">
          <a href="#contact">{t("navContact")} <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" /></a>
        </Button>
      </div>
    </DialogContent>
  );
}

export function KnowledgeSection() {
  const { t, pick, lang } = useLang();
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);
  const [category, setCategory] = React.useState("all");
  const filtered = React.useMemo(
    () => (category === "all" ? articles : articles.filter((a) => a.categoryKey === category)),
    [category],
  );

  return (
    <section id="knowledge" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("knowledgeEyebrow")}
          title={<>{t("knowledgeTitle1")} <span className="text-gradient-solar">{t("knowledgeTitle2")}</span></>}
          description={t("knowledgeDesc")}
        />
        <AnswerCapsule>
          دانشنامه پارسا انرژی شامل مقالات تخصصی در حوزه میکروگرید، باتری، اینورتر، کنترلر شارژ MPPT و PWM، کابل و حفاظت، نگهداری و محاسبات مهندسی است. هر مقاله توسط تیم مهندسی نوشته شده و شامل پاسخ‌های مستقیم به پرسش‌های فنی، فرمول‌های محاسباتی و راهنمای عملی است. محتوا به‌صورت ساختاریافته برای دستیاران هوش مصنوعی و موتورهای جستجو قابل استناد است.
        </AnswerCapsule>
        <div className="mt-10 flex justify-center">
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList className="flex h-auto flex-wrap justify-center gap-1 bg-background p-1.5">
              {knowledgeCategories.map((c) => (
                <TabsTrigger key={c.key} value={c.key} className="h-8 text-xs sm:text-sm">{pick(c.label)}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <Dialog key={article.slug}>
              <DialogTrigger asChild>
                <button className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-tech/10">
                      <BookOpen className="h-5 w-5 text-tech" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />{fmt(pick(article.readTime))}
                    </span>
                  </div>
                  <Badge variant="outline" className="mt-4 w-fit text-xs">{pick(article.category)}</Badge>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground">{pick(article.title)}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{pick(article.excerpt)}</p>
                  <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    {t("readArticle")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </div>
                </button>
              </DialogTrigger>
              <ArticleDialog article={article} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
