"use client";

import Link from "next/link";
import Image from "next/image";
import { Sun, MapPin, Phone, Mail, Clock, Linkedin, Youtube, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/lang-provider";
import { cn, faNum } from "@/lib/utils";

export function SiteFooter() {
  const { t, lang } = useLang();
  const year = lang === "fa" ? faNum(new Date().getFullYear()) : String(new Date().getFullYear());

  const columns = [
    {
      title: t("footerServices"),
      links: [
        { label: "طراحی نیروگاه خورشیدی | Solar Plant Design", href: "#services" },
        { label: "نصب و اجرا | Installation", href: "#services" },
        { label: "برق اضطراری | Emergency Power", href: "#services" },
        { label: "تعمیر اینورتر | Inverter Repair", href: "#services" },
        { label: "تعمیر تاسیسات | HVAC Repair", href: "#divisions" },
        { label: "نگهداری | Maintenance", href: "#services" },
      ],
    },
    {
      title: t("footerProducts"),
      links: [
        { label: "پنل خورشیدی | Solar Panels", href: "#products" },
        { label: "اینورتر | Inverters", href: "#products" },
        { label: "باتری | Batteries", href: "#products" },
        { label: "UPS و دیزل ژنراتور | UPS & Generators", href: "#products" },
        { label: "پکیج و کولر | Package & AC", href: "#divisions" },
        { label: "قطعات تهویه | HVAC Parts", href: "#divisions" },
      ],
    },
    {
      title: t("footerKnowledge"),
      links: [
        { label: "پایه‌های خورشیدی | Solar Basics", href: "#knowledge" },
        { label: "میکروگرید | Microgrids", href: "#knowledge" },
        { label: "باتری | Batteries", href: "#knowledge" },
        { label: "محاسبات مهندسی | Engineering Calc", href: "#knowledge" },
        { label: "راهنمای نگهداری | Maintenance", href: "#knowledge" },
        { label: t("navTools"), href: "#tools" },
      ],
    },
    {
      title: t("footerCompany"),
      links: [
        { label: t("footerAbout"), href: "#about" },
        { label: t("navProjects"), href: "#projects" },
        { label: t("navTraining"), href: "#training" },
        { label: t("footerCareers"), href: "#" },
        { label: t("footerDownloads"), href: "#" },
        { label: t("footerPrivacy"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-xl">
            <h3 className="font-display text-xl font-bold text-foreground">{t("footerNewsletterTitle")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("footerNewsletterDesc")}</p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input type="email" required placeholder={t("footerEmailPlaceholder")} aria-label="Email" className="h-11" />
            <Button type="submit" className="h-11 shrink-0 shadow-solar">
              <Send className="h-4 w-4" />
              <span className="mx-1.5">{t("footerSubscribe")}</span>
            </Button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Link href="#top" className="flex items-center gap-2.5" aria-label="Parsa Energy home">
              <Image src="/parsa-energy-logo.png" alt="پارسا انرژی" width={44} height={44} className="h-10 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-foreground">
                  پارسا <span className="text-primary">انرژی</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{t("brandTagline")}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t("aboutDesc")}
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {t("contactOffice")}: {lang === "fa"
                    ? "مشهد، بزرگراه هاشمی رفسنجانی، نبش بلوار اقدسیه، طبقه اول"
                    : "Mashhad, Hashemi Rafsanjani Highway, corner of Aqdasiyeh Blvd, 1st Floor"}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className={cn("flex flex-col gap-1", lang === "fa" ? "text-end" : "text-start")} style={{ unicodeBidi: "plaintext" }}>
                  <a href="tel:+989158222199" className="hover:text-primary">{lang === "fa" ? "۰۹۱۵۸۲۲۲۱۹۹" : "+98 915 822 2199"}</a>
                  <a href="tel:+989158222198" className="hover:text-primary">{lang === "fa" ? "۰۹۱۵۸۲۲۲۱۹۸" : "+98 915 822 2198"}</a>
                  <a href="tel:+989158222197" className="hover:text-primary">{lang === "fa" ? "۰۹۱۵۸۲۲۲۱۹۷" : "+98 915 822 2197"}</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:info@parsenergyco.ir" className="hover:text-primary" style={{ unicodeBidi: "plaintext" }}>info@parsenergyco.ir</a>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                {t("hoursValue")}
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
                { icon: Send, label: "Telegram" },
              ].map((s) => (
                <Link key={s.label} href="#" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <s.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {year} {t("brandName")} — {t("footerRights")}</p>
          <p className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5 text-amber" />
            {t("footerSlogan")}
          </p>
        </div>
      </div>
    </footer>
  );
}
