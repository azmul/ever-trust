"use client";

import { useLanguage } from "../LanguageProvider";

export function ProcessSection() {
  const { messages } = useLanguage();

  return (
    <section className="flex flex-col gap-10 py-10" id="process">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
          {messages.process.heading}
        </h2>
        <p className="text-gray-400 text-lg">
          {messages.process.subheading}
        </p>
      </div>
      <div className="relative mt-8">
        <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-[#2c4823] -z-10" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center text-center gap-4 relative">
            <div className="size-16 rounded-full bg-surface-dark border-2 border-primary text-white flex items-center justify-center z-10 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">chat</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {messages.process.step1Title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {messages.process.step1Description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 relative">
            <div className="size-16 rounded-full bg-surface-dark border-2 border-[#2c4823] text-white flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-2xl">
                travel_explore
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {messages.process.step2Title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {messages.process.step2Description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 relative">
            <div className="size-16 rounded-full bg-surface-dark border-2 border-[#2c4823] text-white flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-2xl">
                fact_check
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {messages.process.step3Title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {messages.process.step3Description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 relative">
            <div className="size-16 rounded-full bg-surface-dark border-2 border-[#2c4823] text-white flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-2xl">
                sailing
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {messages.process.step4Title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {messages.process.step4Description}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 relative">
            <div className="size-16 rounded-full bg-surface-dark border-2 border-[#2c4823] text-white flex items-center justify-center z-10">
              <span className="material-symbols-outlined text-2xl">
                local_shipping
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">
                {messages.process.step5Title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {messages.process.step5Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


