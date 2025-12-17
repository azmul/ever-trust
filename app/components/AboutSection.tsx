"use client";

import { useLanguage } from "../LanguageProvider";

export function AboutSection() {
  const { messages } = useLanguage();

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5"
      id="about"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-3xl font-bold">
          {messages.about.heading}
        </h2>
        <p className="text-gray-400 leading-relaxed whitespace-pre-line">
          {messages.about.body}
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center p-8 bg-surface-dark rounded-2xl relative overflow-hidden">
        <span className="material-symbols-outlined text-[#2c4823] text-9xl absolute -right-4 -bottom-8 opacity-50">
          format_quote
        </span>
        <blockquote className="relative z-10">
          <p className="text-white text-lg font-medium italic mb-6">
            {messages.about.quote}
          </p>
          <footer className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-gray-600 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Portrait of a satisfied business client"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwN-PprmJ7oeKtWFF4bLIKJfdwK6n5JgzcVcD8GljNT47Z6OEyUw3zHt13X9irQL-t1Ejkxdp9wCabEMMa4JbvyO_E2GS5VtmXVrIVOWa82bvfJGfy7TbzMGTAdNA1ToylxNiX15am7WogvksK7gDPNNTCSk2UGG_B3qn3vpfwal1RZO4u22UiBNg0tjJArZOxRO8NAahPmymmj29vvXimVxnoOECNTw3L-peMZpioHYLeGNJwm7eHFBKUWoH2XJ8LQmIBErWUlXCU"
              />
            </div>
            <div>
              <div className="text-white font-bold">Faisal Ahmed</div>
              <div className="text-primary text-sm">Business Owner, BD</div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}


