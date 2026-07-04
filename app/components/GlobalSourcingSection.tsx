"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import type { Messages } from "../i18n/messages";
import { Reveal } from "./ui/Reveal";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2GZI3boSKmCH-1rmx3vv64iuRGIc0Vovm7ppzus5VYR6S3qj_G7Bu-CNgmWVfKlyYmcdMxNAFjMtsUtxJ2bja2sVFwjRxnM9zIhUq7SCP2xmSkI9gFkvgHwkVI6ccJ_taBRHu_8Ol9sVn-dl2fnBV8c1LClFuW6MwMNDym-9k7RY4Dtd_qNEVx7lpvel1CGxcrhK6AHWEnSDmYuON5fLq47T0SJS7Zq6Y_d40PKu6xJOf1endTZAEBMAyWtuk3wV5ADrZiMOwfnZP";

const COUNTRIES: (keyof Messages["global"])[] = [
  "countryChina",
  "countryTurkey",
  "countryIndia",
  "countryVietnam",
];

export function GlobalSourcingSection() {
  const { messages } = useLanguage();

  return (
    <Reveal
      as="section"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-surface-dark/30 p-8 rounded-3xl border border-[#2c4823]"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-white text-3xl font-bold">{messages.global.heading}</h2>
        <p className="text-gray-400">{messages.global.description}</p>
        <div className="grid grid-cols-2 gap-4">
          {COUNTRIES.map((key) => (
            <div
              key={key}
              className="flex items-center gap-3 p-3 rounded-lg bg-background-dark border border-[#2c4823] hover:border-primary/40 transition-colors"
            >
              <span className="material-symbols-outlined text-primary">public</span>
              <span className="text-white font-medium">{messages.global[key]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-64 lg:h-80 w-full rounded-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-primary/10 z-10" />
        <Image
          src={MAP_IMAGE}
          alt="World map representing the global logistics network"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
        />
      </div>
    </Reveal>
  );
}
