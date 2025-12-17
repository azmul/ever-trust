"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
} from "react";
import { translations, type Locale, type Messages } from "./i18n/messages";

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("bn");

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      messages: translations[locale],
      toggleLocale: () => setLocale((prev) => (prev === "en" ? "bn" : "en")),
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
