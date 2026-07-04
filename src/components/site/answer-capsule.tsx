/**
 * GEO-003: Answer Capsule (BLUF — Bottom Line Up Front).
 *
 * یک کپسول پاسخ مستقیم که بلافاصله زیر عنوان H2 هر بخش قرار می‌گیرد.
 * محدودیت‌ها:
 *  - طول ۴۰ تا ۱۲۰ کلمه
 *  - جمله اول: تعریف مستقیم یا پاسخ صریح
 *  - جملات بعدی: جزئیات یا آمار کلیدی
 *  - جمله آخر: دامنه یا محدودیت
 *  - بدون لینک خروجی (سیگنال مرجعیت حفظ می‌شود)
 *
 * متن فارسی (زبان اصلی) به‌صورت Server Component رندر می‌شود تا در HTML خام
 * بدون نیاز به JavaScript قابل استخراج باشد.
 */

interface AnswerCapsuleProps {
  /** متن کپسول پاسخ به زبان فارسی */
  children: string;
}

export function AnswerCapsule({ children }: AnswerCapsuleProps) {
  return (
    <p
      className="mx-auto mb-8 max-w-3xl rounded-xl border-r-4 border-primary bg-primary/5 px-5 py-4 text-sm leading-7 text-foreground sm:text-base"
      role="doc-abstract"
    >
      <span className="sr-only">پاسخ کوتاه: </span>
      {children}
    </p>
  );
}
