"use client";

import { useLanguage } from "../LanguageProvider";

export function GlobalSourcingSection() {
  const { messages } = useLanguage();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-surface-dark/30 p-8 rounded-2xl border border-[#2c4823]">
      <div className="flex flex-col gap-6">
        <h2 className="text-white text-3xl font-bold">
          {messages.global.heading}
        </h2>
        <p className="text-gray-400">{messages.global.description}</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded bg-background-dark border border-[#2c4823]">
            <span className="material-symbols-outlined text-primary">
              public
            </span>
            <span className="text-white font-medium">
              {messages.global.countryChina}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded bg-background-dark border border-[#2c4823]">
            <span className="material-symbols-outlined text-primary">
              public
            </span>
            <span className="text-white font-medium">
              {messages.global.countryTurkey}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded bg-background-dark border border-[#2c4823]">
            <span className="material-symbols-outlined text-primary">
              public
            </span>
            <span className="text-white font-medium">
              {messages.global.countryIndia}
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded bg-background-dark border border-[#2c4823]">
            <span className="material-symbols-outlined text-primary">
              public
            </span>
            <span className="text-white font-medium">
              {messages.global.countryVietnam}
            </span>
          </div>
        </div>
      </div>
      <div className="h-64 lg:h-80 w-full rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/10 z-10" />
        <img
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          alt="Abstract dark world map representing global logistics network"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2GZI3boSKmCH-1rmx3vv64iuRGIc0Vovm7ppzus5VYR6S3qj_G7Bu-CNgmWVfKlyYmcdMxNAFjMtsUtxJ2bja2sVFwjRxnM9zIhUq7SCP2xmSkI9gFkvgHwkVI6ccJ_taBRHu_8Ol9sVn-dl2fnBV8c1LClFuW6MwMNDym-9k7RY4Dtd_qNEVx7lpvel1CGxcrhK6AHWEnSDmYuON5fLq47T0SJS7Zq6Y_d40PKu6xJOf1endTZAEBMAyWtuk3wV5ADrZiMOwfnZP"
        />
      </div>
    </section>
  );
}


