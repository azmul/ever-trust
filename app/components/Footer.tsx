"use client";

import { useLanguage } from "../LanguageProvider";

export function Footer() {
  const { messages } = useLanguage();

  return (
    <footer className="flex flex-col items-center justify-center border-t border-[#2c4823] py-8 text-center gap-4">
      <div className="flex items-center gap-2 text-white opacity-80">
        <span className="material-symbols-outlined">public</span>
        <span className="font-bold">{messages.footer.brand}</span>
      </div>
      <p className="text-gray-500 text-sm">{messages.footer.copyright}</p>
    </footer>
  );
}
