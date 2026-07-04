"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { HeroSlider } from "@/components/site/hero-slider";
import { AudienceSelector } from "@/components/site/audience-selector";
import { TrustSignals } from "@/components/site/trust-signals";
import { QuickContact } from "@/components/site/quick-contact";
import { StickyCTA } from "@/components/site/sticky-cta";
import { DivisionDetailPage } from "@/components/site/division-detail-page";
import { ServerContentLayer } from "@/components/site/server-content-layer";
import { KnowledgeCenterView } from "@/components/site/knowledge-center-view";
import { ArticleReader } from "@/components/site/article-reader";
import { divisions, type Division } from "@/lib/content";
import { type KB_article } from "@/lib/kb-articles";

type View =
  | { type: "home" }
  | { type: "division"; division: Division }
  | { type: "knowledge" }
  | { type: "article"; article: KB_article };

/**
 * صفحه اصلی — معماری اطلاعات Progressve Disclosure.
 *
 * نماها (client-side views):
 *  - home: صفحه اصلی (بنر + باکس‌ها + trust + contact)
 *  - division: صفحه جزئیات هر حوزه
 *  - knowledge: مرکز دانشنامه و اخبار
 *  - article: خواننده مقاله کامل
 *
 * محتوای کامل سئو در ServerContentLayer مخفی در HTML باقی می‌ماند.
 */
export function HomeClient() {
  const [view, setView] = React.useState<View>({ type: "home" });

  const selectBySlug = React.useCallback((slug: string) => {
    const d = divisions.find((x) => x.slug === slug);
    if (d) setView({ type: "division", division: d });
  }, []);

  // Navigate to home and scroll to a section (contact, services) — works from ANY view
  const navigateToSection = React.useCallback((section: "contact" | "services") => {
    setView({ type: "home" });
    // Wait for home to render, then scroll
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);

  const onNavigateContact = React.useCallback(() => navigateToSection("contact"), [navigateToSection]);
  const onNavigateServices = React.useCallback(() => navigateToSection("services"), [navigateToSection]);

  React.useEffect(() => {
    if (view.type !== "home") {
      window.history.pushState({ view: view.type }, "");
    }
    const onPopState = () => setView({ type: "home" });
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [view]);

  const goHome = React.useCallback(() => {
    setView({ type: "home" });
    window.history.back();
  }, []);

  // Division detail view
  if (view.type === "division") {
    return (
      <div className="flex min-h-screen flex-col pb-14 md:pb-0">
        <SiteHeader onNavigateContact={onNavigateContact} onNavigateServices={onNavigateServices} />
        <main className="flex-1">
          <DivisionDetailPage division={view.division} onBack={goHome} />
        </main>
        <SiteFooter />
        <StickyCTA />
      </div>
    );
  }

  // Knowledge center view
  if (view.type === "knowledge") {
    return (
      <div className="flex min-h-screen flex-col pb-14 md:pb-0">
        <SiteHeader onNavigateContact={onNavigateContact} onNavigateServices={onNavigateServices} />
        <main className="flex-1">
          <KnowledgeCenterView
            onBack={goHome}
            onSelectArticle={(article) => setView({ type: "article", article })}
          />
        </main>
        <SiteFooter />
        <StickyCTA />
      </div>
    );
  }

  // Article reader view
  if (view.type === "article") {
    return (
      <div className="flex min-h-screen flex-col pb-14 md:pb-0">
        <SiteHeader onNavigateContact={onNavigateContact} onNavigateServices={onNavigateServices} />
        <main className="flex-1">
          <ArticleReader article={view.article} onBack={() => setView({ type: "knowledge" })} />
        </main>
        <SiteFooter />
        <StickyCTA />
      </div>
    );
  }

  // Home view
  return (
    <div className="flex min-h-screen flex-col pb-14 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader
        onNavigateKnowledge={() => setView({ type: "knowledge" })}
        onNavigateContact={onNavigateContact}
        onNavigateServices={onNavigateServices}
      />
      <main id="main" className="flex-1">
        <HeroSlider onSelectDivision={selectBySlug} />
        <AudienceSelector onSelect={selectBySlug} />
        <TrustSignals />
        <QuickContact />
        <ServerContentLayer />
      </main>
      <SiteFooter />
      <StickyCTA />
    </div>
  );
}
