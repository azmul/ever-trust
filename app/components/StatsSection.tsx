"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageProvider";
import { useReveal } from "../hooks/useReveal";

type Stat = { value: number; suffix: string; labelKey: "shipments" | "countries" | "clients" | "categories" };

const STATS: Stat[] = [
  { value: 500, suffix: "+", labelKey: "shipments" },
  { value: 4, suffix: "", labelKey: "countries" },
  { value: 120, suffix: "+", labelKey: "clients" },
  { value: 5, suffix: "", labelKey: "categories" },
];

export function StatsSection() {
  const { messages } = useLanguage();
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-surface-dark/40 border border-[#2c4823] rounded-3xl p-8 lg:p-10"
    >
      {STATS.map((stat) => (
        <div key={stat.labelKey} className="flex flex-col items-center text-center gap-1">
          <div className="text-primary text-4xl lg:text-5xl font-black">
            <CountUp target={stat.value} run={isVisible} />
            {stat.suffix}
          </div>
          <div className="text-gray-400 text-sm font-medium">
            {messages.stats[stat.labelKey]}
          </div>
        </div>
      ))}
    </div>
  );
}

function CountUp({ target, run }: { target: number; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const duration = 1200;
    let raf = 0;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);

  return <>{n}</>;
}
