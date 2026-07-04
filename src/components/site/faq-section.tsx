"use client";

import * as React from "react";
import { HelpCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";
import { AnswerCapsule } from "./answer-capsule";
import { faqs } from "@/lib/content";
import { useLang } from "@/components/lang-provider";

export function FAQSection() {
  const { t, pick } = useLang();
  const categories = React.useMemo(() => {
    const set = new Set(faqs.map((f) => pick(f.category)));
    return [t("allCategories"), ...Array.from(set)];
  }, [pick, t]);
  const [cat, setCat] = React.useState(t("allCategories"));
  const filtered = cat === t("allCategories") ? faqs : faqs.filter((f) => pick(f.category) === cat);

  return (
    <section id="faq" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("faqEyebrow")}
          title={<>{t("faqTitle1")} <span className="text-gradient-solar">{t("faqTitle2")}</span></>}
          description={t("faqDesc")}
        />
        <AnswerCapsule>
          پارسا انرژی در مشهد - الهیه در پنج حوزه فعالیت می‌کند: فروش تجهیزات تاسیسات مکانیکی، طراحی و اجرای نیروگاه خورشیدی و برق اضطراری، سرویس‌کاری و تعمیرات، فروش قطعات تهویه و آموزشگاه فنی‌وحرفه‌ای. تلفن تماس: ۰۹۱۰۸۸۸۸۱۹۹. هزینه نیروگاه خورشیدی به تومان و بر اساس ظرفیت (kWp) اعلام می‌شود. مشاوره رایگان است.
        </AnswerCapsule>
        <div className="mt-8 flex justify-center">
          <Tabs value={cat} onValueChange={setCat}>
            <TabsList className="flex h-auto flex-wrap justify-center gap-1 bg-background p-1.5">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c} className="h-8 text-xs sm:text-sm">{c}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
          <Accordion type="single" collapsible className="w-full">
            {filtered.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-start text-sm font-medium sm:text-base">
                  <span className="flex items-start gap-2">
                    <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {pick(faq.q)}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="ps-6 text-sm text-muted-foreground">{pick(faq.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
