"use client";

import * as React from "react";
import { useLanguage, type Lang } from "@/lib/i18n-store";
import { ui, type UIKey } from "@/lib/i18n";

/**
 * Applies the current language's text direction (rtl/ltr) and lang attribute
 * to <html>, and returns the language + a `t()` translator bound to the UI
 * dictionary. Mount this provider once near the root.
 */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useLanguage((s) => s.lang);

  React.useEffect(() => {
    const dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.classList.toggle("font-fa", lang === "fa");
  }, [lang]);

  return <>{children}</>;
}

/** Returns the current language and a translator for UI strings. */
export function useLang() {
  const lang = useLanguage((s) => s.lang);
  const setLang = useLanguage((s) => s.setLang);
  const toggle = useLanguage((s) => s.toggle);
  const t = React.useCallback(
    (key: UIKey) => ui[lang][key] as string,
    [lang],
  );
  const pick = React.useCallback(
    <T extends { fa: unknown; en: unknown }>(obj: T): T[Lang] => obj[lang] as T[Lang],
    [lang],
  );
  return { lang, setLang, toggle, t, pick, dir: lang === "fa" ? "rtl" : "ltr" as const };
}
