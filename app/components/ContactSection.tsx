"use client";

import { useLanguage } from "../LanguageProvider";

export function ContactSection() {
  const { messages } = useLanguage();

  return (
    <section
      className="flex flex-col lg:flex-row gap-10 bg-surface-dark rounded-3xl overflow-hidden border border-[#2c4823]"
      id="contact"
    >
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between gap-10 bg-[#1a2c16]">
        <div>
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            {messages.contact.heading}
          </h2>
          <p className="text-gray-400 mb-8">{messages.contact.subtitle}</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
              </div>
              <div>
                <div className="text-gray-400 text-sm">
                  {messages.contact.phoneLabel}
                </div>
                <div className="text-white font-bold text-lg">
                  {messages.contact.phoneCaption}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
              </div>
              <div>
                <div className="text-gray-400 text-sm">
                  {messages.contact.emailLabel}
                </div>
                <div className="text-white font-bold text-lg">
                  sourcing@importco.com
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
              </div>
              <div>
                <div className="text-gray-400 text-sm">
                  {messages.contact.officeLabel}
                </div>
                <div className="text-white font-bold text-lg">
                  Gulshan-1, Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 lg:p-12">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-bold">
              {messages.contact.formNameLabel}
            </label>
            <input
              className="w-full h-12 rounded-lg bg-background-dark border border-[#3f6732] px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              placeholder={messages.contact.formNamePlaceholder}
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-bold">
              {messages.contact.formPhoneLabel}
            </label>
            <input
              className="w-full h-12 rounded-lg bg-background-dark border border-[#3f6732] px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              placeholder={messages.contact.formPhonePlaceholder}
              type="tel"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-bold">
                {messages.contact.formProductLabel}
              </label>
              <input
                className="w-full h-12 rounded-lg bg-background-dark border border-[#3f6732] px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder={messages.contact.formProductPlaceholder}
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-bold">
                {messages.contact.formQuantityLabel}
              </label>
              <input
                className="w-full h-12 rounded-lg bg-background-dark border border-[#3f6732] px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                placeholder={messages.contact.formQuantityPlaceholder}
                type="number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-bold">
              {messages.contact.formDetailsLabel}
            </label>
            <textarea
              className="w-full h-32 rounded-lg bg-background-dark border border-[#3f6732] p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder={messages.contact.formDetailsPlaceholder}
            />
          </div>
          <button
            className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary text-[#152211] text-base font-bold hover:bg-[#3cd610] transition-colors shadow-lg"
            type="button"
          >
            {messages.contact.formButton}
          </button>
        </form>
      </div>
    </section>
  );
}


