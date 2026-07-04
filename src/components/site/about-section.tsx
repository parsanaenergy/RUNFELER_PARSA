"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./section-header";
import { stats } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { faNum } from "@/lib/utils";

export function AboutSection() {
  const { t, pick, lang } = useLang();
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);

  const values = [
    { title: t("aboutValue1T"), desc: t("aboutValue1D") },
    { title: t("aboutValue2T"), desc: t("aboutValue2D") },
    { title: t("aboutValue3T"), desc: t("aboutValue3D") },
    { title: t("aboutValue4T"), desc: t("aboutValue4D") },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-4 sm:p-8">
          {stats.map((s) => (
            <div key={pick(s.label)} className="flex flex-col items-center text-center">
              <s.icon className="h-7 w-7 text-primary" />
              <div className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl tabular-nums" dir="ltr">
                {fmt(s.value)}<span className="text-primary">+</span>
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">{pick(s.label)}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/solar-installation.png" alt={t("brandName")} fill sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" className="object-cover" />
            </div>
          </div>
          <div>
            <SectionHeader
              align="left"
              eyebrow={t("aboutEyebrow")}
              title={<>{t("aboutTitle1")} <span className="text-gradient-solar">{t("aboutTitle2")}</span></>}
              description={t("aboutDesc")}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-muted/20 p-4">
                  <h3 className="font-display text-sm font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="shadow-solar">
                <Link href="#contact">
                  {t("navContact")}
                  <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
