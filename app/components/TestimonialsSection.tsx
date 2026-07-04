"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageProvider";
import type { TestimonialContent } from "../lib/content";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: TestimonialContent[];
}) {
  const { messages, locale } = useLanguage();
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  // Auto-advance every 6s; resets when the index changes (manual nav).
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count, index]);

  if (count === 0) return null;
  const safeIndex = index % count;
  const active = testimonials[safeIndex];
  const go = (next: number) => setIndex(((next % count) + count) % count);

  const quote = locale === "bn" ? active.quoteBn : active.quoteEn;
  const role = locale === "bn" ? active.roleBn : active.roleEn;

  return (
    <Section
      eyebrow={messages.testimonials.heading}
      heading={messages.testimonials.heading}
      description={messages.testimonials.subheading}
      centered
    >
      <Reveal className="relative max-w-3xl mx-auto w-full">
        <div className="relative bg-surface-dark rounded-3xl p-8 lg:p-12 border border-[#2c4823] overflow-hidden">
          <span className="material-symbols-outlined text-[#2c4823] text-9xl absolute -right-2 -top-6 opacity-60 select-none">
            format_quote
          </span>
          <blockquote className="relative z-10 min-h-[160px] flex flex-col justify-center">
            <p className="text-white text-lg lg:text-xl font-medium italic">“{quote}”</p>
            <footer className="mt-6">
              <div className="text-white font-bold">{active.name}</div>
              <div className="text-primary text-sm">{role}</div>
            </footer>
          </blockquote>
        </div>

        {count > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => go(safeIndex - 1)}
              aria-label="Previous testimonial"
              className="size-9 rounded-full border border-[#3f6732] text-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === safeIndex ? "w-6 bg-primary" : "w-2 bg-[#3f6732] hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(safeIndex + 1)}
              aria-label="Next testimonial"
              className="size-9 rounded-full border border-[#3f6732] text-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
