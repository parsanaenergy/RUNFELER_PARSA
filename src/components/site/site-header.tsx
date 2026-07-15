"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Sun, MessageSquare, ChevronDown } from "lucide-react";
import { openGoftinoChat } from "@/lib/goftino";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onNavigateKnowledge?: () => void;
  onNavigateContact?: () => void;
  onNavigateServices?: (serviceSlug?: string) => void;
  onNavigateProducts?: (categoryKey?: string) => void;
  onNavigateTraining?: () => void;
  onNavigateAbout?: () => void;
}

function NavDropdown({
  label,
  items,
  onClick,
  lang,
}: {
  label: string;
  items: { label: string; onClick: () => void }[];
  onClick?: () => void;
  lang: string;
}) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={onClick}
        className="flex items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
      >
        <span>{label}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200 text-muted-foreground/70", open && "rotate-180")} />
      </button>

      {open && (
        <div className={cn(
          "absolute top-full z-50 mt-1 w-64 origin-top rounded-xl border border-border bg-card p-2 shadow-xl transition-all animate-in fade-in-0 slide-in-from-top-2",
          lang === "fa" ? "right-0" : "left-0"
        )}>
          <div className="flex flex-col gap-0.5">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
                className="w-full rounded-lg px-3 py-2 text-start text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground leading-relaxed"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavDropdown({
  label,
  items,
  lang,
}: {
  label: string;
  items: { label: string; onClick: () => void }[];
  lang: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
      >
        <span>{label}</span>
        <ChevronDown className={cn("h-5 w-5 transition-transform duration-200 text-muted-foreground", open && "rotate-180")} />
      </button>

      {open && (
        <div className={cn(
          "flex flex-col gap-1.5 border-border/65 mt-1",
          lang === "fa" ? "border-r mr-4 pr-2.5" : "border-l ml-4 pl-2.5"
        )}>
          {items.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="w-full rounded-md px-3 py-2 text-start text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground leading-relaxed"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function SiteHeader({
  onNavigateKnowledge,
  onNavigateContact,
  onNavigateServices,
  onNavigateProducts,
  onNavigateTraining,
  onNavigateAbout,
}: SiteHeaderProps = {}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, lang } = useLang();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const productSubmenu = [
    { label: lang === "fa" ? "تجهیزات نیروگاه خورشیدی" : "Solar Power Plant Equipment", key: "solar-equipment" },
    { label: lang === "fa" ? "تجهیزات تامین برق اضطراری" : "Emergency Power Equipment", key: "emergency-power" },
    { label: lang === "fa" ? "تجهیزات گرمایشی، سرمایشی و تهویه مطبوع (نو)" : "HVAC Equipment (New)", key: "hvac-new" },
    { label: lang === "fa" ? "(استوک)تجهیزات گرمایشی، سرمایشی و تهویه مطبوع" : "HVAC Equipment (Used)", key: "hvac-used" },
  ];

  const serviceSubmenu = [
    { label: lang === "fa" ? "طراحی و احداث نیروگاه خورشیدی" : "Solar Plant Design & Construction", slug: "solar-plant-design-construction" },
    { label: lang === "fa" ? "طراحی و نصب سیستم تامین برق اضطراری" : "Emergency Power Design & Install", slug: "emergency-power-design-install" },
    { label: lang === "fa" ? "تعمیرات پکیج شوفاژ دیواری و کولرگازی" : "Wall Radiator & AC Repair", slug: "hvac-repair-service" },
    { label: lang === "fa" ? "تعمیرات تخصصی بردهای الکترونیکی" : "Specialized Board Repair", slug: "electronic-board-repair-spec" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-border/70 shadow-sm" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 md:h-24 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-1.5 sm:gap-2 shrink-0" aria-label="Parsa Energy home">
          <Image src="/parsa-energy-logo.png" alt="پارسا انرژی" width={80} height={80} className="h-12 md:h-20 w-auto shrink-0" priority />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-bold tracking-tight text-foreground whitespace-nowrap">
              {lang === "fa" ? (
                <>شرکت پارسا <span className="text-primary">انرژی</span> رویش سبز امید</>
              ) : (
                <>Parsa <span className="text-primary">Energy</span> Company</>
              )}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {/* Products Dropdown */}
          <NavDropdown
            label={t("navProducts")}
            items={productSubmenu.map((sub) => ({
              label: sub.label,
              onClick: () => onNavigateProducts?.(sub.key),
            }))}
            onClick={() => onNavigateProducts?.()}
            lang={lang}
          />

          {/* Services Dropdown */}
          <NavDropdown
            label={lang === "fa" ? "خدمات" : "Services"}
            items={serviceSubmenu.map((sub) => ({
              label: sub.label,
              onClick: () => onNavigateServices?.(sub.slug),
            }))}
            onClick={() => onNavigateServices?.()}
            lang={lang}
          />

          <button
            onClick={onNavigateTraining}
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
          >
            {t("navTraining")}
          </button>
          <button
            onClick={onNavigateKnowledge}
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
          >
            {t("navKnowledge")}
          </button>
          <button
            onClick={onNavigateAbout}
            className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
          >
            {t("navAbout")}
          </button>
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden xl:flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Button
            onClick={openGoftinoChat}
            variant="outline"
            className="hidden md:inline-flex border-primary/20 hover:bg-primary/5"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="mx-1.5">{lang === "fa" ? "گفتگوی آنلاین" : "Online Chat"}</span>
          </Button>
          <Button
            onClick={onNavigateContact}
            className="hidden sm:inline-flex shadow-solar"
          >
            <Phone className="h-4 w-4" />
            <span className="mx-1.5">{t("freeConsultation")}</span>
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <SheetTitle className="flex items-center gap-2 px-1">
                  <Sun className="h-5 w-5 text-primary" />
                  {t("brandName")}
                </SheetTitle>
                <div className="flex items-center gap-1.5">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </div>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {/* Mobile Products Dropdown */}
                <MobileNavDropdown
                  label={t("navProducts")}
                  items={productSubmenu.map((sub) => ({
                    label: sub.label,
                    onClick: () => {
                      onNavigateProducts?.(sub.key);
                      setMobileOpen(false);
                    },
                  }))}
                  lang={lang}
                />

                {/* Mobile Services Dropdown */}
                <MobileNavDropdown
                  label={lang === "fa" ? "خدمات" : "Services"}
                  items={serviceSubmenu.map((sub) => ({
                    label: sub.label,
                    onClick: () => {
                      onNavigateServices?.(sub.slug);
                      setMobileOpen(false);
                    },
                  }))}
                  lang={lang}
                />

                <SheetClose asChild>
                  <button
                    onClick={() => { onNavigateTraining?.(); setMobileOpen(false); }}
                    className="rounded-md px-3 py-2.5 text-start text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {t("navTraining")}
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    onClick={() => { onNavigateKnowledge?.(); setMobileOpen(false); }}
                    className="rounded-md px-3 py-2.5 text-start text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {t("navKnowledge")}
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button
                    onClick={() => { onNavigateAbout?.(); setMobileOpen(false); }}
                    className="rounded-md px-3 py-2.5 text-start text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {t("navAbout")}
                  </button>
                </SheetClose>
              </nav>
              <div className="mt-6 flex flex-col gap-2">
                <SheetClose asChild>
                  <Button
                    onClick={() => { onNavigateContact?.(); setMobileOpen(false); }}
                    className="w-full shadow-solar"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="mx-1.5">{t("freeConsultation")}</span>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    onClick={() => { openGoftinoChat(); setMobileOpen(false); }}
                    variant="outline"
                    className="w-full border-primary/20"
                  >
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="mx-1.5">{lang === "fa" ? "گفتگوی آنلاین" : "Online Chat"}</span>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
