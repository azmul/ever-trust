"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InquiriesPanel } from "./InquiriesPanel";
import { ProductsPanel } from "./ProductsPanel";
import { TestimonialsPanel } from "./TestimonialsPanel";

type Tab = "inquiries" | "products" | "testimonials";

const TABS: { key: Tab; label: string; icon: string }[] = [
  { key: "inquiries", label: "Inquiries", icon: "inbox" },
  { key: "products", label: "Products", icon: "category" },
  { key: "testimonials", label: "Testimonials", icon: "format_quote" },
];

export function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("inquiries");

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <header className="sticky top-0 z-10 bg-[#152211]/90 backdrop-blur-md border-b border-[#2c4823]">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">public</span>
            <span className="font-bold text-lg">Ever Trust Admin</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 h-9 px-4 rounded-full border border-[#3f6732] text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-[1100px] mx-auto px-4 lg:px-8 py-8">
        <nav className="flex gap-2 mb-8 border-b border-[#2c4823]">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                tab === t.key
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>

        {tab === "inquiries" && <InquiriesPanel />}
        {tab === "products" && <ProductsPanel />}
        {tab === "testimonials" && <TestimonialsPanel />}
      </div>
    </div>
  );
}
