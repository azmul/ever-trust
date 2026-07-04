"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageProvider";
import type { ProductContent } from "../lib/content";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function ProductsSection({ products }: { products: ProductContent[] }) {
  const { messages, locale } = useLanguage();

  return (
    <Section
      id="products"
      eyebrow={messages.navbar.products}
      heading={messages.products.heading}
      description={messages.products.description}
    >
      <Reveal stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => {
          const title = locale === "bn" ? product.titleBn : product.titleEn;
          const desc = locale === "bn" ? product.descBn : product.descEn;
          return (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col rounded-2xl border border-border-dark bg-surface-dark overflow-hidden hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_40px_-12px_rgba(70,236,19,0.25)]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/20 to-transparent" />
                <div className="absolute top-4 left-4 size-11 rounded-full bg-background-dark/80 backdrop-blur flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {product.icon}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-6">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-[#9fc992] text-sm">{desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-primary text-sm font-semibold opacity-80 group-hover:opacity-100 group-hover:gap-2 transition-all">
                  {messages.catalog.viewDetails}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
            </Link>
          );
        })}
      </Reveal>
    </Section>
  );
}
