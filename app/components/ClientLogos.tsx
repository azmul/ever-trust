"use client";

import { useLanguage } from "../LanguageProvider";
import { Reveal } from "./ui/Reveal";

/**
 * Honest "trust strip": instead of inventing client logos, we surface the
 * sourcing hubs and credentials the business already operates with.
 */
const HUBS = [
  { label: "China", icon: "factory" },
  { label: "India", icon: "public" },
  { label: "Turkey", icon: "anchor" },
  { label: "Vietnam", icon: "local_shipping" },
  { label: "Bangladesh", icon: "verified_user" },
];

export function ClientLogos() {
  const { messages } = useLanguage();

  return (
    <Reveal className="flex flex-col items-center gap-6">
      <p className="text-gray-500 text-sm font-semibold uppercase tracking-[0.2em] text-center">
        {messages.partners.heading}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {HUBS.map((hub) => (
          <div
            key={hub.label}
            className="flex items-center gap-2 text-gray-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-2xl">{hub.icon}</span>
            <span className="font-bold text-lg">{hub.label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
