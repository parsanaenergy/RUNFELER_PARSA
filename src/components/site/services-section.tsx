"use client";

import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./section-header";
import { AnswerCapsule } from "./answer-capsule";
import { services, type Service } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

const accentClasses: Record<Service["accent"], { ring: string; bg: string; text: string }> = {
  solar: { ring: "hover:border-primary/40", bg: "bg-primary/10", text: "text-primary" },
  tech: { ring: "hover:border-tech/40", bg: "bg-tech/10", text: "text-tech" },
  amber: { ring: "hover:border-amber/40", bg: "bg-amber/10", text: "text-amber" },
};

function ServiceDialog({ service }: { service: Service }) {
  const { t, pick } = useLang();
  return (
    <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto scroll-soft">
      <DialogHeader>
        <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">{t("servicesEyebrow")}</Badge>
        <DialogTitle className="text-2xl font-bold sm:text-3xl">{pick(service.name)}</DialogTitle>
        <DialogDescription className="text-base">{pick(service.tagline)}</DialogDescription>
      </DialogHeader>
      <div className="mt-2 rounded-xl bg-muted/50 p-4">
        <p className="text-sm leading-relaxed text-foreground">{pick(service.description)}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {service.trust.map((tr) => (
          <span key={pick(tr)} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            {pick(tr)}
          </span>
        ))}
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("serviceWhatsIncluded")}</h4>
          <ul className="mt-3 space-y-2">
            {service.features.map((f) => (
              <li key={pick(f)} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {pick(f)}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("serviceDeliverables")}</h4>
          <ul className="mt-3 space-y-2">
            {service.deliverables.map((d) => (
              <li key={pick(d)} className="flex items-start gap-2 text-sm text-muted-foreground">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-tech" />
                {pick(d)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {service.faqs.length > 0 && (
        <div className="mt-6">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("serviceFaq")}</h4>
          <Accordion type="single" collapsible className="mt-2">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-sm text-start">{pick(faq.q)}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{pick(faq.a)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground">{t("serviceCtaReady")}</p>
        <Button asChild className="shadow-solar">
          <a href="#contact">{pick(service.ctaLabel)} <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" /></a>
        </Button>
      </div>
    </DialogContent>
  );
}

export function ServicesSection({
  activeServiceSlug,
  onCloseActiveService,
}: {
  activeServiceSlug?: string;
  onCloseActiveService?: () => void;
}) {
  const { t, pick } = useLang();
  const [localOpenSlug, setLocalOpenSlug] = React.useState<string | null>(null);

  const openSlug = activeServiceSlug !== undefined ? activeServiceSlug : localOpenSlug;
  const setOpenSlug = (slug: string | null) => {
    if (slug === null) {
      if (onCloseActiveService) onCloseActiveService();
      setLocalOpenSlug(null);
    } else {
      setLocalOpenSlug(slug);
    }
  };

  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("solarEyebrow")}
          title={<>{t("servicesTitle1")} <span className="text-gradient-solar">{t("servicesTitle2")}</span></>}
          description={t("servicesDesc")}
        />
        <AnswerCapsule>
          پارسا انرژی در مشهد، طراحی، فروش و اجرای نیروگاه خورشیدی، تامین برق اضطراری (UPS، باتری، دیزل ژنراتور)، نصب و راه‌اندازی، نگهداری و تعمیر اینورتر و برد الکترونیکی را به‌صورت کامل ارائه می‌دهد. خدمات بر پایه استانداردهای IEC 62446 و 62548 اجرا می‌شوند و با گارانتی کاری ۱۰ ساله همراه هستند. قیمت و زمان اجرا بر اساس اندازه سیستم (kWp) و ظرفیت باتری (kWh) تعیین می‌شود.
        </AnswerCapsule>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const a = accentClasses[service.accent];
            const isOpen = openSlug === service.slug;
            return (
              <Dialog key={service.slug} open={isOpen} onOpenChange={(open) => setOpenSlug(open ? service.slug : null)}>
                <DialogTrigger asChild>
                  <button className={cn("group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg", a.ring)}>
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl", a.bg)}>
                      <service.icon className={cn("h-6 w-6", a.text)} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">{pick(service.name)}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{pick(service.tagline)}</p>
                    <p className="mt-3 line-clamp-2 text-sm text-muted-foreground/90">{pick(service.description)}</p>
                    <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                      {t("viewDetails")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </div>
                  </button>
                </DialogTrigger>
                <ServiceDialog service={service} />
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
