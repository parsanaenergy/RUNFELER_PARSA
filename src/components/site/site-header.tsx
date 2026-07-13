"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLang } from "@/components/lang-provider";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onNavigateKnowledge?: () => void;
  onNavigateContact?: () => void;
  onNavigateServices?: () => void;
}

export function SiteHeader({ onNavigateKnowledge, onNavigateContact, onNavigateServices }: SiteHeaderProps = {}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t } = useLang();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav items: use callbacks so they work in ALL views (home, knowledge, article, division)
  const navItems = [
    { label: t("navDivisions"), href: "#services", onClick: onNavigateServices },
    { label: t("navKnowledge"), href: undefined, onClick: onNavigateKnowledge },
    { label: t("navContact"), href: "#contact", onClick: onNavigateContact },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-border/70 shadow-sm" : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2.5" aria-label="Parsa Energy home">
          <Image src="/parsa-energy-logo.png" alt="پارسا انرژی" width={40} height={40} className="h-9 w-auto shrink-0" priority />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              شرکت پارسا <span className="text-primary">انرژی</span> رویش سبز امید
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {t("brandTagline")}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.onClick ? (
              <button
                key={item.label}
                onClick={item.onClick}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle />
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
              <SheetTitle className="flex items-center gap-2 px-1">
                <Sun className="h-5 w-5 text-primary" />
                {t("brandName")}
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item) =>
                  item.onClick ? (
                    <SheetClose asChild key={item.label}>
                      <button
                        onClick={() => { item.onClick?.(); setMobileOpen(false); }}
                        className="rounded-md px-3 py-2.5 text-start text-base font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {item.label}
                      </button>
                    </SheetClose>
                  ) : (
                    <SheetClose asChild key={item.label}>
                      <Link href={item.href || "#"} className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent">
                        {item.label}
                      </Link>
                    </SheetClose>
                  ),
                )}
              </nav>
              <SheetClose asChild>
                <Button
                  onClick={() => { onNavigateContact?.(); setMobileOpen(false); }}
                  className="mt-6 w-full shadow-solar"
                >
                  <Phone className="h-4 w-4" />
                  <span className="mx-1.5">{t("freeConsultation")}</span>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
