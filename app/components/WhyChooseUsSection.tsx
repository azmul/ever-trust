"use client";

import { useLanguage } from "../LanguageProvider";

export function WhyChooseUsSection() {
  const { messages } = useLanguage();

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
          {messages.why.heading}
        </h2>
        <p className="text-gray-400 text-lg max-w-[720px]">
          {messages.why.subheading}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-border-dark transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">
            verified_user
          </span>
          <div>
            <h3 className="text-white font-bold text-lg">
              {messages.why.verifiedTitle}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {messages.why.verifiedDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-border-dark transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">
            fact_check
          </span>
          <div>
            <h3 className="text-white font-bold text-lg">
              {messages.why.inspectionTitle}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {messages.why.inspectionDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-border-dark transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">
            savings
          </span>
          <div>
            <h3 className="text-white font-bold text-lg">
              {messages.why.pricingTitle}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {messages.why.pricingDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-border-dark transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">
            schedule
          </span>
          <div>
            <h3 className="text-white font-bold text-lg">
              {messages.why.deliveryTitle}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {messages.why.deliveryDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-border-dark transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">
            description
          </span>
          <div>
            <h3 className="text-white font-bold text-lg">
              {messages.why.docsTitle}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {messages.why.docsDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-4 p-4 rounded-lg bg-surface-dark/50 border border-transparent hover:border-border-dark transition-all">
          <span className="material-symbols-outlined text-primary text-3xl">
            support_agent
          </span>
          <div>
            <h3 className="text-white font-bold text-lg">
              {messages.why.supportTitle}
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              {messages.why.supportDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


