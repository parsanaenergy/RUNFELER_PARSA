"use client";

import { leadOfferings } from "@/lib/content";
import { SectionHeader } from "./section-header";
import { useLang } from "@/components/lang-provider";

export function LeadGenSection() {
  const { t, pick } = useLang();
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("leadEyebrow")}
          title={<>{t("leadTitle1")} <span className="text-gradient-solar">{t("leadTitle2")}</span></>}
          description={t("leadDesc")}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadOfferings.map((o) => {
            const accent = o.accent === "solar" ? "text-primary bg-primary/10" : o.accent === "tech" ? "text-tech bg-tech/10" : "text-amber bg-amber/10";
            return (
              <a key={o.slug} href="#contact" className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent}`}>
                  <o.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{pick(o.title)}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{pick(o.description)}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
