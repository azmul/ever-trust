"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import { Reveal } from "./ui/Reveal";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80";

export function AboutSection() {
  const { messages } = useLanguage();

  return (
    <Reveal as="section" id="about" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-3xl lg:text-4xl font-bold">
          {messages.about.heading}
        </h2>
        <p className="text-gray-400 leading-relaxed whitespace-pre-line">
          {messages.about.body}
        </p>
      </div>
      <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#2c4823]">
        <Image
          src={ABOUT_IMAGE}
          alt="Cargo containers at a shipping port"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
      </div>
    </Reveal>
  );
}
