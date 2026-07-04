import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert Latin (0-9) digits in a string to Persian digits (۰-۹).
 * Preserves non-digit characters, units, separators and signs.
 *
 * Examples:
 *   faNum("5.13 kWp")  -> "۵.۱۳ kWp"
 *   faNum("1,200,000") -> "۱٬۲۰۰٬۰۰۰"  (thousands separator swapped to Persian)
 *   faNum("99.9%")     -> "۹۹٫۹٪"
 */
export function faNum(input: string | number): string {
  const s = String(input);
  return s
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])
    .replace(/,/g, "٬")        // Persian thousands separator
    .replace(/\./g, "٫");       // Persian decimal separator
}

/** Convert Persian/Arabic digits in a string back to Latin (for <input type=number>). */
export function toLatinDigits(input: string): string {
  return input
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}
