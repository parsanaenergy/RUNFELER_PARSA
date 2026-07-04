"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, BookOpen, Newspaper } from "lucide-react";
import { useLang } from "@/components/lang-provider";
import { kbArticles, kbCategories, type KB_article } from "@/lib/kb-articles";
import { cn } from "@/lib/utils";

interface KnowledgeCenterViewProps {
  onBack: () => void;
  onSelectArticle: (article: KB_article) => void;
}

const categoryIcon: Record<string, typeof BookOpen> = {
  hvac: BookOpen,
  solar: BookOpen,
  news: Newspaper,
};

const categoryColor: Record<string, string> = {
  hvac: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  solar: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  news: "bg-rose-500/10 text-rose-600 border-rose-500/20",
};

export function KnowledgeCenterView({ onBack, onSelectArticle }: KnowledgeCenterViewProps) {
  const { lang } = useLang();
  const isFa = lang === "fa";
  const [category, setCategory] = React.useState<string>("all");
  const pick = (b: { fa: string; en: string }) => (isFa ? b.fa : b.en);

  const filtered = React.useMemo(
    () => (category === "all" ? kbArticles : kbArticles.filter((a) => a.category === category)),
    [category],
  );

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero header */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            {isFa ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {isFa ? "بازگشت به صفحه اصلی" : "Back to home"}
          </button>
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {isFa ? "دانشنامه و اخبار پارسا انرژی" : "Parsa Energy Knowledge & News"}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            {isFa
              ? "مقالات آموزشی تاسیسات و خورشیدی، اخبار قوانین و تعرفه‌های روز انرژی ایران. محتوای تخصصی برای تصمیم‌گیری بهتر."
              : "Educational HVAC & solar articles, plus latest energy laws and tariffs in Iran. Expert content for better decisions."}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {kbCategories.map((c) => {
              const active = category === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setCategory(c.key)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/70",
                  )}
                >
                  {pick(c.label)}
                </button>
              );
            })}
          </div>

          {/* Article cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, idx) => {
              const Icon = categoryIcon[article.category] || BookOpen;
              return (
                <motion.button
                  key={article.slug}
                  type="button"
                  onClick={() => onSelectArticle(article)}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-start shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl border", categoryColor[article.category])}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {pick(article.readTime)}
                    </span>
                  </div>
                  <span className={cn("mt-3 inline-block w-fit rounded-full border px-2.5 py-0.5 text-[11px] font-medium", categoryColor[article.category])}>
                    {pick(article.categoryLabel)}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-foreground">{pick(article.title)}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{pick(article.excerpt)}</p>
                  <div className="mt-auto flex items-center gap-1.5 pt-4 text-sm font-semibold text-primary">
                    {isFa ? "مطالعه مقاله" : "Read article"}
                    {isFa ? <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
