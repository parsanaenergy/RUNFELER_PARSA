"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n-store";

export function LanguageToggle() {
  const lang = useLanguage((s) => s.lang);
  const toggle = useLanguage((s) => s.toggle);
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      className="h-9 gap-1.5 px-2.5 font-semibold"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs">{lang === "fa" ? "EN" : "فا"}</span>
    </Button>
  );
}
