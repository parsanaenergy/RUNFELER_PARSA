"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, FileText, Download, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";
import { AnswerCapsule } from "./answer-capsule";
import { products, productCategories, type Product } from "@/lib/content";
import { useLang } from "@/components/lang-provider";

function ProductDialog({ product }: { product: Product }) {
  const { t, pick } = useLang();
  return (
    <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto scroll-soft">
      <DialogHeader>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-tech/10 text-tech">{pick(product.category)}</Badge>
          {product.badge && <Badge className="bg-primary text-primary-foreground">{pick(product.badge)}</Badge>}
        </div>
        <DialogTitle className="text-2xl font-bold sm:text-3xl">{pick(product.name)}</DialogTitle>
        <DialogDescription className="text-base">{pick(product.tagline)}</DialogDescription>
      </DialogHeader>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(product.description)}</p>
      <div className="mt-5">
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("productSpecs")}</h4>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {product.specs.map((s) => (
            <div key={pick(s.label)} className="rounded-lg border border-border bg-muted/30 p-3">
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{pick(s.label)}</div>
              <div className="mt-0.5 text-sm font-semibold text-foreground">{pick(s.value)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("productApplications")}</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.applications.map((app) => (
            <span key={pick(app)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-tech" />
              {pick(app)}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-lg border border-border p-3">
          <FileText className="h-5 w-5 text-primary" />
          <div className="flex-1"><div className="text-sm font-semibold text-foreground">{t("productDatasheet")}</div><div className="text-xs text-muted-foreground">PDF</div></div>
          <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
        </div>
        <div className="flex items-center gap-3 rounded-lg border border-border p-3">
          <Video className="h-5 w-5 text-tech" />
          <div className="flex-1"><div className="text-sm font-semibold text-foreground">{t("productInstallGuide")}</div><div className="text-xs text-muted-foreground">Video + PDF</div></div>
          <Button variant="ghost" size="sm">▶</Button>
        </div>
      </div>
      {product.faqs.length > 0 && (
        <div className="mt-5">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("serviceFaq")}</h4>
          <Accordion type="single" collapsible className="mt-2">
            {product.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm text-start">{pick(faq.q)}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{pick(faq.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs text-muted-foreground">{t("productPriceFrom")}</div>
          <div className="font-display text-xl font-bold text-foreground">{pick(product.priceFrom)}</div>
        </div>
        <Button asChild className="shadow-solar">
          <a href="#contact">{t("requestQuote")} <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" /></a>
        </Button>
      </div>
    </DialogContent>
  );
}

export function ProductsSection() {
  const { t, pick } = useLang();
  const [category, setCategory] = React.useState("all");
  const filtered = React.useMemo(
    () => (category === "all" ? products : products.filter((p) => p.categoryKey === category)),
    [category],
  );

  return (
    <section id="products" className="scroll-mt-20 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("productsEyebrow")}
          title={<>{t("productsTitle1")} <span className="text-gradient-solar">{t("productsTitle2")}</span></>}
          description={t("productsDesc")}
        />
        <AnswerCapsule>
          پارسا انرژی تامین‌کننده پنل خورشیدی، اینورتر (On-grid، هایبرید، آفگرید)، باتری LiFePO4 و سرب‌اسید، UPS، دیزل ژنراتور، کنترلر شارژ MPPT و PWM، و لوازم جانبی از برندهای معتبر است. تمام محصولات دارای دیتاشیت فنی، راهنمای نصب و گارانتی هستند. قیمت‌ها به تومان اعلام می‌شود و خرید عمده با تخفیف ممکن است.
        </AnswerCapsule>
        <div className="mt-10 flex justify-center">
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList className="flex h-auto flex-wrap justify-center gap-1 bg-background p-1.5">
              {productCategories.map((c) => (
                <TabsTrigger key={c.key} value={c.key} className="h-8 text-xs sm:text-sm">{pick(c.label)}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Dialog key={product.slug}>
              <DialogTrigger asChild>
                <button className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tech/10">
                      <product.icon className="h-6 w-6 text-tech" />
                    </div>
                    {product.badge && <Badge className="bg-primary text-primary-foreground">{pick(product.badge)}</Badge>}
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{product.brand}</div>
                  <h3 className="mt-1 font-display text-lg font-bold text-foreground">{pick(product.name)}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{pick(product.tagline)}</p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{t("productPriceFrom")}</div>
                      <div className="font-display text-lg font-bold text-foreground">{pick(product.priceFrom)}</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {t("viewDetails")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </button>
              </DialogTrigger>
              <ProductDialog product={product} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
