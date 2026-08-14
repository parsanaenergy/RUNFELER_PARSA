import * as React from "react";
import Link from "next/link";
import {
  Sun,
  Zap,
  Cpu,
  GraduationCap,
  Calculator,
  ArrowLeft,
  Compass,
  Layers,
  ChevronLeft,
  BatteryCharging,
} from "lucide-react";

export interface ClusterLinkItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  highlight?: boolean;
}

export const defaultClusterNodes: ClusterLinkItem[] = [
  {
    title: "راهنمای صفر تا صد احداث نیروگاه خورشیدی",
    description: "طراحی، مهندسی و اجرای نیروگاه متصل به شبکه، آفگرید و هایبرید با استاندارد IEC",
    href: "/services/solar-plant-design-construction",
    icon: Sun,
    badge: "خدمت کلیدی",
    highlight: true,
  },
  {
    title: "تامین برق اضطراری، UPS آنلاین و ژنراتور",
    description: "تامین بدون وقفه برق سرورها، مراکز تجاری، بیمارستانی و مسکونی با کلید هوشمند ATS",
    href: "/services/emergency-power-design-install",
    icon: BatteryCharging,
    badge: "بدون قطعی",
  },
  {
    title: "عیب‌یابی و تعمیر تخصصی اینورتر و بردهای الکترونیکی",
    description: "تعمیرات سخت‌افزاری در سطح قطعه SMD، ماسفت‌ها، IGBTها و تست زیر بار اسیلوسکوپ",
    href: "/services/electronic-board-repair-spec",
    icon: Cpu,
    badge: "تخصصی مشهد",
  },
  {
    title: "دانشنامه تخصصی و سرفصل‌های دوره آموزشی",
    description: "آموزش‌های کاربردی نرم‌افزار PVsyst، محاسبات کابل، قوانین ساتبا و مقالات تحلیلی",
    href: "/knowledge",
    icon: GraduationCap,
    badge: "دانشنامه جامع",
  },
  {
    title: "ابزارهای محاسباتی آنلاین و محاسبه‌گر ROI",
    description: "محاسبه زمان پشتیبانی باتری، افت ولتاژ، سودآوری نیروگاه و تخمین سرمایه اولیه",
    href: "/#calculators",
    icon: Calculator,
    badge: "ابزار رایگان",
  },
];

interface TopicClusterHubProps {
  title?: string;
  subtitle?: string;
  items?: ClusterLinkItem[];
  className?: string;
}

/**
 * TopicClusterHub — قطب‌نمای محتوا و ناوبری خوشه‌ای (Topic Cluster Compass)
 * قرارگیری در صفحه مادر (Pillar Page) جهت هدایت ساختاریافته کاربران و ربات‌های گوگل به صفحات اقماری
 */
export function TopicClusterHub({
  title = "🗺️ نقشه راه جامع تامین برق و انرژی خورشیدی",
  subtitle = "برای دسترسی مستقیم به راهنماهای تخصصی، خدمات و تحلیل‌های فنی روی هر بخش کلیک کنید:",
  items = defaultClusterNodes,
  className = "",
}: TopicClusterHubProps) {
  return (
    <section
      aria-label="Topic Cluster Hub"
      className={`rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-background to-emerald-500/5 p-6 md:p-8 shadow-lg my-8 ${className}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-bold mb-2">
            <Compass className="h-3.5 w-3.5" />
            Anti-Gravity Topic Cluster Hub
          </div>
          <h2 className="text-xl md:text-2xl font-black text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground mt-1.5">{subtitle}</p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-muted-foreground bg-muted/60 px-3.5 py-2 rounded-2xl border border-border">
          <Layers className="h-4 w-4 text-amber-500" />
          معماری سیلوی محتوایی (SEO Cluster)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((node, idx) => {
          const Icon = node.icon;
          return (
            <Link
              key={idx}
              href={node.href}
              title={node.title}
              className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                node.highlight
                  ? "bg-amber-500/[0.07] border-amber-500/40 hover:border-amber-500"
                  : "bg-card/80 border-border hover:border-primary/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      node.highlight
                        ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  {node.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      {node.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {node.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                  {node.description}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-primary pt-3 border-t border-border/40">
                <span>مشاهده بخش تخصصی</span>
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

interface PillarBackLinkProps {
  pillarUrl?: string;
  pillarTitle?: string;
  description?: string;
  className?: string;
}

/**
 * PillarBackLink — باکس بازگشت به صفحه مادر (Back to Pillar Hub)
 * قرارگیری در انتهای مقالات و صفحات خدمات خوشه‌ای جهت تکمیل لینکسازی داخلی دوطرفه و ارتقای رتبه سئو
 */
export function PillarBackLink({
  pillarUrl = "/bargh",
  pillarTitle = "راهنمای جامع سیستم‌های برق، نیروگاه خورشیدی و برق اضطراری",
  description = "این صفحه بخشی از خوشه تخصصی انرژی پارسا انرژی است. برای مشاهده نقشه راه و مقایسه جامع تمام سیستم‌ها به صفحه مرجع مراجعه کنید.",
  className = "",
}: PillarBackLinkProps) {
  return (
    <div
      className={`my-10 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-background to-primary/10 p-6 md:p-7 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 ${className}`}
    >
      <div className="space-y-1.5">
        <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 dark:text-amber-400">
          <Zap className="h-3.5 w-3.5" />
          مرجع مادر (Topic Cluster Pillar)
        </span>
        <h4 className="text-base md:text-lg font-bold text-foreground">
          {pillarTitle}
        </h4>
        <p className="text-xs md:text-sm text-muted-foreground max-w-xl leading-relaxed">
          {description}
        </p>
      </div>

      <Link
        href={pillarUrl}
        title={pillarTitle}
        className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
      >
        <span>🔙 بازگشت به مرجع اصلی</span>
        <ArrowLeft className="h-4 w-4" />
      </Link>
    </div>
  );
}
