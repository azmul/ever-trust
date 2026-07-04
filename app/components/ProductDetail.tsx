"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageProvider";
import type { ProductContent } from "../lib/content";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";

export function ProductDetail({ product }: { product: ProductContent }) {
  const { messages, locale } = useLanguage();
  const cat = messages.catalog;
  const bn = locale === "bn";

  const title = bn ? product.titleBn : product.titleEn;
  const shortDesc = bn ? product.descBn : product.descEn;
  const overview = bn ? product.overviewBn : product.overviewEn;
  const features = bn ? product.featuresBn : product.featuresEn;
  const moq = bn ? product.moqBn : product.moqEn;
  const leadTime = bn ? product.leadTimeBn : product.leadTimeEn;

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center py-5">
        <div className="flex flex-col w-full max-w-[1280px] px-4 lg:px-10 gap-10">
          <Reveal className="flex flex-col gap-2">
            <Link
              href="/#products"
              className="text-primary text-sm font-semibold flex items-center gap-1 w-fit hover:underline"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              {cat.backToProducts}
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#2c4823]">
              <Image
                src={product.image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </Reveal>

            <Reveal className="flex flex-col gap-5">
              <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
                {cat.detailEyebrow}
              </span>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">
                  {product.icon}
                </span>
                <h1 className="text-white text-4xl font-black">{title}</h1>
              </div>
              <p className="text-gray-300 text-lg">{shortDesc}</p>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <Stat label={cat.moqLabel} value={moq} />
                <Stat label={cat.leadTimeLabel} value={leadTime} />
              </div>

              <ButtonLink
                href={`/#contact?product=${encodeURIComponent(title)}`}
                size="lg"
                className="mt-2 w-fit"
              >
                {cat.requestQuote}
              </ButtonLink>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Reveal className="lg:col-span-2 flex flex-col gap-4 bg-surface-dark rounded-2xl p-8 border border-[#2c4823]">
              <h2 className="text-white text-2xl font-bold">{cat.overviewHeading}</h2>
              <p className="text-gray-400 leading-relaxed">{overview}</p>

              {features.length > 0 && (
                <>
                  <h3 className="text-white text-xl font-bold mt-4">{cat.featuresHeading}</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-gray-300">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>

            {product.origins.length > 0 && (
              <Reveal className="flex flex-col gap-4 bg-surface-dark rounded-2xl p-8 border border-[#2c4823] h-fit">
                <h2 className="text-white text-xl font-bold">{cat.originHeading}</h2>
                <div className="flex flex-wrap gap-2">
                  {product.origins.map((o) => (
                    <span
                      key={o}
                      className="rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-primary text-sm font-semibold"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-dark border border-[#2c4823] p-4">
      <div className="text-gray-400 text-xs uppercase tracking-wide">{label}</div>
      <div className="text-white font-bold text-lg mt-1">{value}</div>
    </div>
  );
}
