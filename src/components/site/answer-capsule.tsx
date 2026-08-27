import { Quote, UserCheck } from "lucide-react";

/**
 * Humanized Expert Summary — جایگزین انسان‌محور کپسول پاسخ هوش مصنوعی.
 * شامل جمع‌بندی فنی و نقل‌قول واقعی از مدیر فنی و تیم مهندسی پارسا انرژی.
 */

interface AnswerCapsuleProps {
  /** متن خلاصه و دیدگاه کارشناسی */
  children: string;
  expertName?: string;
  expertRole?: string;
}

export function AnswerCapsule({
  children,
  expertName = "تیم مهندسی پارسا انرژی",
  expertRole = "مرجع تخصصی سیستم‌های برق و انرژی خورشیدی",
}: AnswerCapsuleProps) {
  return (
    <div
      className="expert-summary relative mx-auto mb-8 max-w-3xl overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-background to-primary/5 p-6 shadow-sm sm:p-7"
      role="region"
      aria-label="جمع‌بندی کارشناسی"
    >
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground sm:text-base">
              دیدگاه و جمع‌بندی کارشناسی
            </h4>
            <p className="text-xs text-muted-foreground">{expertName} · {expertRole}</p>
          </div>
        </div>
        <Quote className="h-8 w-8 text-amber-500/20 rtl:scale-x-[-1]" />
      </div>

      <blockquote className="text-sm leading-8 text-foreground/90 sm:text-base">
        «{children}»
      </blockquote>
    </div>
  );
}

