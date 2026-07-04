"use client";

import { useState } from "react";
import type { ProductRow } from "../../db/schema";
import { PanelState, useDbResource, fieldClass, Labeled } from "./shared";

type Draft = Omit<ProductRow, "id"> & { id?: number };

const BLANK: Draft = {
  slug: "",
  icon: "category",
  image: "",
  titleEn: "",
  titleBn: "",
  descEn: "",
  descBn: "",
  overviewEn: "",
  overviewBn: "",
  featuresEn: [],
  featuresBn: [],
  moqEn: "",
  moqBn: "",
  leadTimeEn: "",
  leadTimeBn: "",
  origins: [],
  sortOrder: 0,
};

export function ProductsPanel() {
  const { data, setData, state, reload } = useDbResource<ProductRow[]>(
    "/api/admin/products",
    (json) => (json as { products: ProductRow[] }).products
  );
  const [editing, setEditing] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const save = async () => {
    if (!editing) return;
    setSaving(true);
    setError("");
    const isNew = editing.id === undefined;
    const res = await fetch(
      isNew ? "/api/admin/products" : `/api/admin/products/${editing.id}`,
      {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      }
    );
    const json = await res.json();
    setSaving(false);
    if (!res.ok || !json.ok) {
      setError(json.error ?? "Save failed");
      return;
    }
    setEditing(null);
    reload();
  };

  const remove = async (row: ProductRow) => {
    if (!confirm(`Delete product "${row.titleEn}"?`)) return;
    await fetch(`/api/admin/products/${row.id}`, { method: "DELETE" });
    setData((prev) => (prev ?? []).filter((p) => p.id !== row.id));
  };

  if (state !== "ready") return <PanelState state={state} onRetry={reload} />;

  if (editing) {
    return (
      <ProductForm
        draft={editing}
        onChange={setEditing}
        onSave={save}
        onCancel={() => {
          setEditing(null);
          setError("");
        }}
        saving={saving}
        error={error}
      />
    );
  }

  const rows = data ?? [];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">{rows.length} products</p>
        <button
          onClick={() => setEditing({ ...BLANK })}
          className="flex items-center gap-1 h-9 px-4 rounded-full bg-primary text-[#152211] text-sm font-bold hover:bg-[#3cd610] transition-colors"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Add product
        </button>
      </div>
      {rows.map((row) => (
        <div
          key={row.id}
          className="rounded-2xl border border-[#2c4823] bg-surface-dark/40 p-4 flex items-center gap-4"
        >
          <span className="material-symbols-outlined text-primary text-2xl">{row.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="font-bold">{row.titleEn} <span className="text-gray-500 font-normal">/ {row.titleBn}</span></div>
            <div className="text-gray-500 text-xs">/{row.slug}</div>
          </div>
          <button
            onClick={() => setEditing({ ...row })}
            className="text-sm font-semibold text-gray-300 hover:text-primary"
          >
            Edit
          </button>
          <button
            onClick={() => remove(row)}
            className="text-sm font-semibold text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

function ProductForm({
  draft,
  onChange,
  onSave,
  onCancel,
  saving,
  error,
}: {
  draft: Draft;
  onChange: (d: Draft) => void;
  onSave: () => void;
  onCancel: () => void;
  saving: boolean;
  error: string;
}) {
  const set = (patch: Partial<Draft>) => onChange({ ...draft, ...patch });
  const lines = (arr: string[]) => arr.join("\n");
  const toArr = (s: string) => s.split("\n").map((x) => x.trim()).filter(Boolean);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#2c4823] bg-surface-dark/40 p-6">
      <h3 className="font-bold text-lg">{draft.id ? "Edit product" : "New product"}</h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <Labeled label="Slug (URL)">
          <input className={fieldClass} value={draft.slug} onChange={(e) => set({ slug: e.target.value })} placeholder="electronics" />
        </Labeled>
        <Labeled label="Icon (Material Symbol name)">
          <input className={fieldClass} value={draft.icon} onChange={(e) => set({ icon: e.target.value })} placeholder="devices" />
        </Labeled>
      </div>

      <Labeled label="Image URL">
        <input className={fieldClass} value={draft.image} onChange={(e) => set({ image: e.target.value })} placeholder="https://…" />
      </Labeled>

      <div className="grid sm:grid-cols-2 gap-4">
        <Labeled label="Title (EN)">
          <input className={fieldClass} value={draft.titleEn} onChange={(e) => set({ titleEn: e.target.value })} />
        </Labeled>
        <Labeled label="Title (BN)">
          <input className={fieldClass} value={draft.titleBn} onChange={(e) => set({ titleBn: e.target.value })} />
        </Labeled>
        <Labeled label="Short description (EN)">
          <input className={fieldClass} value={draft.descEn} onChange={(e) => set({ descEn: e.target.value })} />
        </Labeled>
        <Labeled label="Short description (BN)">
          <input className={fieldClass} value={draft.descBn} onChange={(e) => set({ descBn: e.target.value })} />
        </Labeled>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Labeled label="Overview (EN)">
          <textarea className={`${fieldClass} h-24 resize-none`} value={draft.overviewEn} onChange={(e) => set({ overviewEn: e.target.value })} />
        </Labeled>
        <Labeled label="Overview (BN)">
          <textarea className={`${fieldClass} h-24 resize-none`} value={draft.overviewBn} onChange={(e) => set({ overviewBn: e.target.value })} />
        </Labeled>
        <Labeled label="Features (EN) — one per line">
          <textarea className={`${fieldClass} h-24 resize-none`} value={lines(draft.featuresEn)} onChange={(e) => set({ featuresEn: toArr(e.target.value) })} />
        </Labeled>
        <Labeled label="Features (BN) — one per line">
          <textarea className={`${fieldClass} h-24 resize-none`} value={lines(draft.featuresBn)} onChange={(e) => set({ featuresBn: toArr(e.target.value) })} />
        </Labeled>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Labeled label="MOQ (EN)">
          <input className={fieldClass} value={draft.moqEn} onChange={(e) => set({ moqEn: e.target.value })} />
        </Labeled>
        <Labeled label="MOQ (BN)">
          <input className={fieldClass} value={draft.moqBn} onChange={(e) => set({ moqBn: e.target.value })} />
        </Labeled>
        <Labeled label="Lead time (EN)">
          <input className={fieldClass} value={draft.leadTimeEn} onChange={(e) => set({ leadTimeEn: e.target.value })} />
        </Labeled>
        <Labeled label="Lead time (BN)">
          <input className={fieldClass} value={draft.leadTimeBn} onChange={(e) => set({ leadTimeBn: e.target.value })} />
        </Labeled>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Labeled label="Sourcing origins — one per line">
          <textarea className={`${fieldClass} h-20 resize-none`} value={lines(draft.origins)} onChange={(e) => set({ origins: toArr(e.target.value) })} />
        </Labeled>
        <Labeled label="Sort order">
          <input type="number" className={fieldClass} value={draft.sortOrder} onChange={(e) => set({ sortOrder: Number(e.target.value) })} />
        </Labeled>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex gap-3">
        <button
          onClick={onSave}
          disabled={saving}
          className="h-10 px-6 rounded-full bg-primary text-[#152211] font-bold hover:bg-[#3cd610] transition-colors disabled:opacity-60"
        >
          {saving ? "Saving…" : "Save"}
        </button>
        <button onClick={onCancel} className="h-10 px-6 rounded-full border border-[#3f6732] font-semibold hover:border-primary transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}
