"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageProvider";
import { site, whatsappLink } from "../data/site";
import { Reveal } from "./ui/Reveal";

type FormState = {
  name: string;
  phone: string;
  product: string;
  quantity: string;
  details: string;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  product: "",
  quantity: "",
  details: "",
};

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full h-12 rounded-lg bg-background-dark border border-[#3f6732] px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors";

export function ContactSection() {
  const { messages } = useLanguage();
  const c = messages.contact;

  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  // Allow catalog "Request a quote" links to prefill the product, e.g. #contact?product=Electronics
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.hash.split("?")[1] ?? "");
    const product = params.get("product");
    if (product) setForm((f) => ({ ...f, product }));
  }, []);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = c.validationName;
    if (form.phone.trim().length < 6) next.phone = c.validationPhone;
    if (!form.product.trim()) next.product = c.validationProduct;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || status === "sending") return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const handleWhatsApp = () => {
    const lines = [
      messages.whatsapp.greeting,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.product && `Product: ${form.product}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.details && `Details: ${form.details}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <Reveal
      as="section"
      id="contact"
      className="flex flex-col lg:flex-row gap-10 bg-surface-dark rounded-3xl overflow-hidden border border-[#2c4823]"
    >
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between gap-10 bg-[#1a2c16]">
        <div>
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
            {c.heading}
          </h2>
          <p className="text-gray-400 mb-8">{c.subtitle}</p>
          <div className="flex flex-col gap-6">
            <ContactRow icon="call" label={c.phoneLabel} value={site.phoneDisplay} />
            <ContactRow icon="mail" label={c.emailLabel} value={site.email} />
            <ContactRow
              icon="location_on"
              label={c.officeLabel}
              value={`${site.address.street}, ${site.address.city}, ${site.address.country}`}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 p-8 lg:p-12">
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center text-center gap-4 h-full min-h-[320px]">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">
                check_circle
              </span>
            </div>
            <h3 className="text-white text-2xl font-bold">{c.successTitle}</h3>
            <p className="text-gray-400 max-w-sm">{c.successBody}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-primary text-sm font-semibold hover:underline"
            >
              {c.formButton}
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <Field label={c.formNameLabel} error={errors.name}>
              <input
                className={inputClass}
                placeholder={c.formNamePlaceholder}
                type="text"
                value={form.name}
                onChange={update("name")}
              />
            </Field>
            <Field label={c.formPhoneLabel} error={errors.phone}>
              <input
                className={inputClass}
                placeholder={c.formPhonePlaceholder}
                type="tel"
                value={form.phone}
                onChange={update("phone")}
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label={c.formProductLabel} error={errors.product}>
                <input
                  className={inputClass}
                  placeholder={c.formProductPlaceholder}
                  type="text"
                  value={form.product}
                  onChange={update("product")}
                />
              </Field>
              <Field label={c.formQuantityLabel}>
                <input
                  className={inputClass}
                  placeholder={c.formQuantityPlaceholder}
                  type="text"
                  value={form.quantity}
                  onChange={update("quantity")}
                />
              </Field>
            </div>
            <Field label={c.formDetailsLabel}>
              <textarea
                className="w-full h-32 rounded-lg bg-background-dark border border-[#3f6732] p-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder={c.formDetailsPlaceholder}
                value={form.details}
                onChange={update("details")}
              />
            </Field>

            {status === "error" && (
              <p className="text-red-400 text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                {c.errorBody}
              </p>
            )}

            <button
              className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-5 bg-primary text-[#152211] text-base font-bold hover:bg-[#3cd610] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? c.sending : c.formButton}
            </button>
            <button
              className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-5 bg-transparent border border-[#25D366] text-[#25D366] text-base font-bold hover:bg-[#25D366]/10 transition-colors"
              type="button"
              onClick={handleWhatsApp}
            >
              <span className="material-symbols-outlined">chat</span>
              {c.whatsappButton}
            </button>
          </form>
        )}
      </div>
    </Reveal>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-primary">{icon}</span>
      </div>
      <div>
        <div className="text-gray-400 text-sm">{label}</div>
        <div className="text-white font-bold text-lg">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-sm font-bold">{label}</label>
      {children}
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}
