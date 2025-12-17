"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export function HeroSection() {
  const { messages } = useLanguage();

  return (
    <div className="@container">
      <div>
        <div
          className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-12 lg:px-10 lg:pb-16 relative overflow-hidden group"
          style={{
            backgroundImage:
              'linear-gradient(rgba(21, 34, 17, 0.3) 0%, rgba(21, 34, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjsqNHYCDxpaQhC7TUhBHYofuQ9q0_YLyla3rlAdfAgo3PMHZhxbhL5v7Kq4JmJj-mL6aHaUnR5UNsKHHIz2PzdJDtwsaFPRa1i3dKvOWHkwLHTW1IZlJ6vrF7b1iqtTjUkXvrdECwKq8eyjJyYOMLwgkNbu_PHJ2JjlEi1btwlr9yd1y9cub1rdgo-DdLQDcdx8Ve7_F-Nr2xGbEywX4CMjL7Y6BtTtURpX0rGRD2hVDSv6dad6BNZcGbdv0iGHnKSLpaiIXYzFKA")',
          }}
        >
          <div className="absolute inset-0 bg-[#152211]/20 group-hover:bg-[#152211]/10 transition-colors duration-500" />
          <div className="relative flex flex-col gap-4 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 w-fit">
              <span className="material-symbols-outlined text-primary text-sm">
                verified
              </span>
              <span className="text-primary text-xs font-bold uppercase tracking-wide">
                {messages.hero.badge}
              </span>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
              {messages.hero.title}
            </h1>
            <h2 className="text-gray-200 text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
              {messages.hero.subtitle}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                className="flex items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-[#152211] text-base font-bold hover:bg-[#3cd610] transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)]"
                href="#contact"
              >
                {messages.hero.primaryCta}
              </Link>
              <Link
                className="flex items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all"
                href="#process"
              >
                {messages.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
