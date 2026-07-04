"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "fa" | "en";

interface LanguageState {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

/**
 * Client-side language store. Persian ("fa") is the primary/default language
 * (RTL). English ("en") is the secondary language (LTR).
 *
 * Persisted to localStorage so the user's choice survives reloads. In a
 * production deployment this would be backed by route-based i18n (/fa, /en)
 * with next-intl; in this sandbox only the `/` route is visible, so a
 * client-side toggle gives the same UX.
 */
export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: "fa",
      setLang: (lang) => set({ lang }),
      toggle: () => set({ lang: get().lang === "fa" ? "en" : "fa" }),
    }),
    { name: "parsa-lang" },
  ),
);

/** Helper to read current language outside React render (e.g. in effect). */
export const currentLang = (): Lang => useLanguage.getState().lang;
