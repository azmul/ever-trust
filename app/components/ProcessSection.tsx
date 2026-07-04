"use client";

import { useLanguage } from "../LanguageProvider";
import type { Messages } from "../i18n/messages";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

type Step = {
  icon: string;
  titleKey: keyof Messages["process"];
  descKey: keyof Messages["process"];
};

const STEPS: Step[] = [
  { icon: "chat", titleKey: "step1Title", descKey: "step1Description" },
  { icon: "travel_explore", titleKey: "step2Title", descKey: "step2Description" },
  { icon: "fact_check", titleKey: "step3Title", descKey: "step3Description" },
  { icon: "sailing", titleKey: "step4Title", descKey: "step4Description" },
  { icon: "local_shipping", titleKey: "step5Title", descKey: "step5Description" },
];

export function ProcessSection() {
  const { messages } = useLanguage();

  return (
    <Section
      id="process"
      heading={messages.process.heading}
      description={messages.process.subheading}
      centered
    >
      <div className="relative mt-4">
        <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-[#2c4823] to-[#2c4823] -z-10" />
        <Reveal stagger className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.icon} className="flex flex-col items-center text-center gap-4">
              <div
                className={`size-16 rounded-full bg-surface-dark border-2 flex items-center justify-center z-10 transition-colors ${
                  i === 0
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-[#2c4823]"
                }`}
              >
                <span className="material-symbols-outlined text-2xl text-white">
                  {step.icon}
                </span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {messages.process[step.titleKey]}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {messages.process[step.descKey]}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
