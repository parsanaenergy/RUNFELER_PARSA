"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./section-header";
import { divisions } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

const accentClasses: Record<"solar" | "tech" | "amber", { ring: string; bg: string; text: string; num: string }> = {
  solar: { ring: "hover:border-primary/40", bg: "bg-primary/10", text: "text-primary", num: "from-primary/20" },
  tech: { ring: "hover:border-tech/40", bg: "bg-tech/10", text: "text-tech", num: "from-tech/20" },
  amber: { ring: "hover:border-amber/40", bg: "bg-amber/10", text: "text-amber", num: "from-amber/20" },
};

export function DivisionsSection() {
  const { t, pick } = useLang();

  return (
    <section id="divisions" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("divisionsEyebrow")}
          title={<>{t("divisionsTitle1")} <span className="text-gradient-solar">{t("divisionsTitle2")}</span></>}
          description={t("divisionsDesc")}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => {
            const a = accentClasses[d.accent];
            return (
              <div
                key={d.slug}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg",
                  a.ring,
                )}
              >
                {/* Big faded number */}
                <span className={cn("pointer-events-none absolute -top-4 ltr:right-2 rtl:left-2 font-display text-8xl font-bold leading-none opacity-10 bg-gradient-to-b to-transparent", a.num, a.text)}>
                  {d.number}
                </span>
                <div className={cn("relative flex h-12 w-12 items-center justify-center rounded-xl", a.bg)}>
                  <d.icon className={cn("h-6 w-6", a.text)} />
                </div>
                <h3 className="relative mt-4 font-display text-lg font-bold leading-snug text-foreground">{pick(d.name)}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{pick(d.description)}</p>
                <ul className="relative mt-4 flex flex-wrap gap-1.5">
                  {d.items.map((item) => (
                    <li key={pick(item)} className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      {pick(item)}
                    </li>
                  ))}
                </ul>
                <Link
                  href={d.slug === "solar-emergency-power" ? "#services" : d.slug === "training-school" ? "#training" : "#contact"}
                  className="relative mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary"
                >
                  {t("viewDetails")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
