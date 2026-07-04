"use client";

import { useLanguage } from "../LanguageProvider";
import type { Messages } from "../i18n/messages";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

type Feature = {
  icon: string;
  titleKey: keyof Messages["why"];
  descKey: keyof Messages["why"];
};

const FEATURES: Feature[] = [
  { icon: "verified_user", titleKey: "verifiedTitle", descKey: "verifiedDescription" },
  { icon: "fact_check", titleKey: "inspectionTitle", descKey: "inspectionDescription" },
  { icon: "savings", titleKey: "pricingTitle", descKey: "pricingDescription" },
  { icon: "schedule", titleKey: "deliveryTitle", descKey: "deliveryDescription" },
  { icon: "description", titleKey: "docsTitle", descKey: "docsDescription" },
  { icon: "support_agent", titleKey: "supportTitle", descKey: "supportDescription" },
];

export function WhyChooseUsSection() {
  const { messages } = useLanguage();

  return (
    <Section heading={messages.why.heading} description={messages.why.subheading}>
      <Reveal stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.icon}
            className="flex gap-4 p-5 rounded-xl bg-surface-dark/50 border border-transparent hover:border-primary/40 hover:bg-surface-dark transition-all"
          >
            <span className="material-symbols-outlined text-primary text-3xl shrink-0">
              {f.icon}
            </span>
            <div>
              <h3 className="text-white font-bold text-lg">{messages.why[f.titleKey]}</h3>
              <p className="text-gray-400 text-sm mt-1">{messages.why[f.descKey]}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
