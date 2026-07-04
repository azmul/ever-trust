"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import { ButtonLink } from "./ui/Button";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAjsqNHYCDxpaQhC7TUhBHYofuQ9q0_YLyla3rlAdfAgo3PMHZhxbhL5v7Kq4JmJj-mL6aHaUnR5UNsKHHIz2PzdJDtwsaFPRa1i3dKvOWHkwLHTW1IZlJ6vrF7b1iqtTjUkXvrdECwKq8eyjJyYOMLwgkNbu_PHJ2JjlEi1btwlr9yd1y9cub1rdgo-DdLQDcdx8Ve7_F-Nr2xGbEywX4CMjL7Y6BtTtURpX0rGRD2hVDSv6dad6BNZcGbdv0iGHnKSLpaiIXYzFKA";

export function HeroSection() {
  const { messages } = useLanguage();

  return (
    <div className="@container">
      <div className="relative flex min-h-[560px] flex-col gap-6 rounded-2xl items-start justify-end px-4 pb-12 lg:px-10 lg:pb-16 overflow-hidden group">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Layered gradient + ambient glow */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,34,17,0.3)_0%,rgba(21,34,17,0.92)_100%)]" />
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-primary/20 blur-3xl animate-ambient-glow pointer-events-none" />

        <div className="reveal reveal-stagger is-visible relative flex flex-col gap-4 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 w-fit">
            <span className="material-symbols-outlined text-primary text-sm">verified</span>
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
            <ButtonLink href="#contact" size="lg">
              {messages.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#process" variant="secondary" size="lg">
              {messages.hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
