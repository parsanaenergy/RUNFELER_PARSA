"use client";

import { Phone, MessageCircle } from "lucide-react";

/**
 * StickyCTA — دکمه‌های شناور در پایین صفحه (موبایل).
 * تماس تلفنی + واتساپ — همیشه در دسترس.
 */
export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-card/95 p-2 backdrop-blur md:hidden">
      <a
        href="tel:+989108888199"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary font-bold text-primary-foreground shadow-solar"
      >
        <Phone className="h-4 w-4" />
        <span>تماس</span>
      </a>
      <a
        href="https://wa.me/989108888199"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-green-500 font-bold text-white"
      >
        <MessageCircle className="h-4 w-4" />
        <span>واتساپ</span>
      </a>
    </div>
  );
}
