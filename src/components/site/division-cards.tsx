"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { divisions, type Division } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

interface DivisionCardsProps {
  onSelect: (d: Division) => void;
}

const accentClasses: Record<string, { ring: string; bg: string; text: string }> = {
  solar: { ring: "hover:border-primary/40", bg: "bg-primary/10", text: "text-primary" },
  tech: { ring: "hover:border-tech/40", bg: "bg-tech/10", text: "text-tech" },
  amber: { ring: "hover:border-amber/40", bg: "bg-amber/10", text: "text-amber" },
};

export function DivisionCards({ onSelect }: DivisionCardsProps) {
  const { lang } = useLang();
  const isFa = lang === "fa";

  return (
    <section id="division-cards" className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {isFa ? "روی هر حوزه کلیک کنید" : "Click each division"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {isFa ? "جزئیات کامل هر حوزه در صفحه اختصاصی آن" : "Full details on each division's page"}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => {
            const a = accentClasses[d.accent];
            return (
              <button
                key={d.slug}
                id={`division-${d.slug}`}
                onClick={() => onSelect(d)}
                className={cn(
                  "group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                  a.ring,
                )}
              >
                <div className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-lg", a.bg)}>
                  <d.icon className={cn("h-5 w-5", a.text)} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-display text-sm font-bold text-foreground">{isFa ? d.name.fa : d.name.en}</h3>
                  <p className="truncate text-xs text-muted-foreground">{isFa ? d.short.fa : d.short.en}</p>
                </div>
                {isFa ? (
                  <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                )}
              </button>
            );
          })}

          {/* CTA card */}
          <a
            href="#contact"
            className="flex items-center gap-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4 transition-all hover:border-primary/60 hover:bg-primary/10"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-sm font-bold text-foreground">
                {isFa ? "مشاوره رایگان" : "Free Consultation"}
              </h3>
              <p className="truncate text-xs text-muted-foreground">
                {isFa ? "۰۹۱۰۸۸۸۸۱۹۹" : "+98 910 888 8199"}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
