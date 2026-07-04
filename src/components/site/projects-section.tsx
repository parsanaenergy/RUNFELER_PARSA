"use client";

import { ArrowRight, MapPin, Calendar, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { SectionHeader } from "./section-header";
import { projects, type Project } from "@/lib/content";
import { useLang } from "@/components/lang-provider";
import { faNum } from "@/lib/utils";

function ProjectDialog({ project }: { project: Project }) {
  const { t, pick, lang } = useLang();
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);
  return (
    <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto scroll-soft">
      <DialogHeader>
        <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">{pick(project.sector)}</Badge>
        <DialogTitle className="text-2xl font-bold sm:text-3xl">{pick(project.title)}</DialogTitle>
        <DialogDescription className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{pick(project.location)}</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-amber" />{pick(project.capacity)}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-tech" />{fmt(project.year)}</span>
        </DialogDescription>
      </DialogHeader>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(project.summary)}</p>
      <div className="mt-5">
        <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{t("projectHighlights")}</h4>
        <ul className="mt-3 space-y-2">
          {project.highlights.map((h) => (
            <li key={pick(h)} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {pick(h)}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {project.metrics.map((m) => (
          <div key={pick(m.label)} className="rounded-xl border border-border bg-muted/30 p-4 text-center">
            <div className="font-display text-xl font-bold text-foreground tabular-nums" dir="ltr">{fmt(pick(m.value))}</div>
            <div className="mt-0.5 text-[11px] uppercase tracking-wide text-muted-foreground">{pick(m.label)}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground">{t("projectSimilar")}</p>
        <Button asChild className="shadow-solar">
          <a href="#contact">{t("projectFeasibility")} <ArrowRight className="mx-1 h-4 w-4 rtl:rotate-180" /></a>
        </Button>
      </div>
    </DialogContent>
  );
}

export function ProjectsSection() {
  const { t, pick, lang } = useLang();
  const fmt = (v: string) => (lang === "fa" ? faNum(v) : v);
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("projectsEyebrow")}
          title={<>{t("projectsTitle1")} <span className="text-gradient-solar">{t("projectsTitle2")}</span></>}
          description={t("projectsDesc")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Dialog key={project.slug}>
              <DialogTrigger asChild>
                <button className="group flex h-full w-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs tabular-nums">{fmt(project.year)}</Badge>
                  </div>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">{pick(project.sector)}</div>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug text-foreground">{pick(project.title)}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{pick(project.summary)}</p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{pick(project.location)}</span>
                    <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5" />{pick(project.capacity)}</span>
                  </div>
                  <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                    {t("readCaseStudy")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </div>
                </button>
              </DialogTrigger>
              <ProjectDialog project={project} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
