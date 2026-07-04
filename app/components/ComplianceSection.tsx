"use client";

import { useLanguage } from "../LanguageProvider";
import type { Messages } from "../i18n/messages";
import { Reveal } from "./ui/Reveal";

const BADGES: (keyof Messages["compliance"])[] = [
  "badgeTradeLicense",
  "badgeImportReg",
  "badgeVatBin",
  "badgeChamber",
];

export function ComplianceSection() {
  const { messages } = useLanguage();

  return (
    <Reveal as="section" className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-[#2c4823] pb-10">
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-bold">{messages.compliance.heading}</h3>
          <p className="text-gray-400 text-sm">{messages.compliance.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {BADGES.map((key) => (
            <div
              key={key}
              className="px-4 py-2 rounded-full border border-[#2c4823] bg-surface-dark text-gray-300 text-sm font-medium flex items-center gap-2 hover:border-primary/40 transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-base">
                verified
              </span>
              {messages.compliance[key]}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-primary/10 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
        <span className="material-symbols-outlined text-primary text-4xl">groups</span>
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg">{messages.compliance.whoHeading}</h3>
          <p className="text-gray-300">
            {messages.compliance.whoText}{" "}
            <span className="text-primary font-bold">
              {messages.compliance.whoHighlight}
            </span>
          </p>
        </div>
      </div>
    </Reveal>
  );
}
