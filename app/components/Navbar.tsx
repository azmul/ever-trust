"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export function Navbar() {
  const { messages, toggleLocale } = useLanguage();

  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-[#152211]/90 backdrop-blur-md border-b border-[#2c4823]">
      <div className="layout-content-container flex flex-col w-full max-w-[1280px]">
        <header className="flex items-center justify-between whitespace-nowrap px-4 lg:px-10 py-4">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <span className="material-symbols-outlined text-4xl">public</span>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              {messages.navbar.brand}
            </h2>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-6">
            <div className="flex items-center gap-6">
              <Link
                className="text-white hover:text-primary transition-colors text-sm font-medium"
                href="#products"
              >
                {messages.navbar.products}
              </Link>
              <Link
                className="text-white hover:text-primary transition-colors text-sm font-medium"
                href="#process"
              >
                {messages.navbar.process}
              </Link>
              <Link
                className="text-white hover:text-primary transition-colors text-sm font-medium"
                href="#about"
              >
                {messages.navbar.about}
              </Link>
              <Link
                className="text-white hover:text-primary transition-colors text-sm font-medium"
                href="#contact"
              >
                {messages.navbar.contact}
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLocale}
                className="h-9 px-4 rounded-full border border-white/20 text-xs font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10 transition-colors"
              >
                {messages.navbar.switchLabel}
              </button>
              <Link
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-[#152211] text-sm font-bold hover:bg-[#3cd610] transition-colors"
                href="#contact"
              >
                <span className="truncate">{messages.navbar.cta}</span>
              </Link>
            </div>
          </div>
          <div className="lg:hidden flex items-center gap-3 text-white">
            <button
              type="button"
              onClick={toggleLocale}
              className="h-8 px-3 rounded-full border border-white/20 text-[11px] font-semibold uppercase tracking-wide text-white/90 hover:bg-white/10 transition-colors"
            >
              {messages.navbar.switchLabel}
            </button>
            <span className="material-symbols-outlined">menu</span>
          </div>
        </header>
      </div>
    </div>
  );
}

