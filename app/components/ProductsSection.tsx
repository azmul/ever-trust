"use client";

import { useLanguage } from "../LanguageProvider";

export function ProductsSection() {
  const { messages } = useLanguage();

  return (
    <section className="flex flex-col gap-10" id="products">
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
          {messages.products.heading}
        </h2>
        <p className="text-gray-400 text-lg max-w-[720px]">
          {messages.products.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">
              restaurant
            </span>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              {messages.products.foodProductsTitle}
            </h3>
            <p className="text-[#9fc992] text-sm">
              {messages.products.foodProductsDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">
              devices
            </span>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              {messages.products.electronicsTitle}
            </h3>
            <p className="text-[#9fc992] text-sm">
              {messages.products.electronicsDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">
              science
            </span>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              {messages.products.rawMaterialsTitle}
            </h3>
            <p className="text-[#9fc992] text-sm">
              {messages.products.rawMaterialsDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">
              construction
            </span>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold mb-1">
              {messages.products.constructionTitle}
            </h3>
            <p className="text-[#9fc992] text-sm">
              {messages.products.constructionDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


