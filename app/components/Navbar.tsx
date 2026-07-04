"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../LanguageProvider";
import type { Messages } from "../i18n/messages";

const NAV_LINKS: { hash: string; labelKey: keyof Messages["navbar"] }[] = [
  { hash: "products", labelKey: "products" },
  { hash: "process", labelKey: "process" },
  { hash: "about", labelKey: "about" },
  { hash: "contact", labelKey: "contact" },
];

export function Navbar() {
  const { messages, toggleLocale } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Smooth-scroll when already on the home page; otherwise let the link
  // navigate to "/#hash" and the browser handles the jump.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      const el = document.querySelector(`#${hash}`);
      if (el) {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
    closeMobileMenu();
  };

  return (
    <div className="w-full flex justify-center sticky top-0 z-50 bg-[#152211]/90 backdrop-blur-md border-b border-[#2c4823]">
      <div className="flex flex-col w-full max-w-[1280px]">
        <header className="flex items-center justify-between whitespace-nowrap px-4 lg:px-10 py-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="material-symbols-outlined text-primary text-3xl">public</span>
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
              {messages.navbar.brand}
            </h2>
          </Link>
          <div className="hidden lg:flex flex-1 justify-end gap-6">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.hash}
                  className="text-white hover:text-primary transition-colors text-sm font-medium"
                  href={`/#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                >
                  {messages.navbar[link.labelKey]}
                </Link>
              ))}
            </nav>
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
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
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
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </header>
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#2c4823] bg-[#152211]">
            <nav className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.hash}
                  className="text-white hover:text-primary transition-colors text-base font-medium py-2"
                  href={`/#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                >
                  {messages.navbar[link.labelKey]}
                </Link>
              ))}
              <Link
                className="flex items-center justify-center rounded-full h-12 px-6 bg-primary text-[#152211] text-base font-bold hover:bg-[#3cd610] transition-colors mt-2"
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                {messages.navbar.cta}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
