"use client";

import { useState } from "react";
import type { TestimonialRow } from "../../db/schema";
import { PanelState, useDbResource, fieldClass, Labeled } from "./shared";

type Draft = Omit<TestimonialRow, "id"> & { id?: number };

const BLANK: Draft = {
  quoteEn: "",
  quoteBn: "",
  name: "",
  roleEn: "",
  roleBn: "",
  sortOrder: 0,
};

export function TestimonialsPanel() {
  const { data, setData, state, reload } = useDbResource<TestimonialRow[]>(
    "/api/admin/testimonials",
    (json) => (json as { testimonials: TestimonialRow[] }).testimonials
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
      isNew ? "/api/admin/testimonials" : `/api/admin/testimonials/${editing.id}`,
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

  const remove = async (row: TestimonialRow) => {
    if (!confirm(`Delete testimonial from ${row.name}?`)) return;
    await fetch(`/api/admin/testimonials/${row.id}`, { method: "DELETE" });
    setData((prev) => (prev ?? []).filter((t) => t.id !== row.id));
  };

  if (state !== "ready") return <PanelState state={state} onRetry={reload} />;

  if (editing) {
    const set = (patch: Partial<Draft>) => setEditing({ ...editing, ...patch });
    return (
      <div className="flex flex-col gap-4 rounded-2xl border border-[#2c4823] bg-surface-dark/40 p-6">
        <h3 className="font-bold text-lg">{editing.id ? "Edit testimonial" : "New testimonial"}</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Labeled label="Quote (EN)">
            <textarea className={`${fieldClass} h-28 resize-none`} value={editing.quoteEn} onChange={(e) => set({ quoteEn: e.target.value })} />
          </Labeled>
          <Labeled label="Quote (BN)">
            <textarea className={`${fieldClass} h-28 resize-none`} value={editing.quoteBn} onChange={(e) => set({ quoteBn: e.target.value })} />
          </Labeled>
        </div>
        <Labeled label="Name">
          <input className={fieldClass} value={editing.name} onChange={(e) => set({ name: e.target.value })} />
        </Labeled>
        <div className="grid sm:grid-cols-2 gap-4">
          <Labeled label="Role (EN)">
            <input className={fieldClass} value={editing.roleEn} onChange={(e) => set({ roleEn: e.target.value })} />
          </Labeled>
          <Labeled label="Role (BN)">
            <input className={fieldClass} value={editing.roleBn} onChange={(e) => set({ roleBn: e.target.value })} />
          </Labeled>
        </div>
        <Labeled label="Sort order">
          <input type="number" className={`${fieldClass} max-w-[120px]`} value={editing.sortOrder} onChange={(e) => set({ sortOrder: Number(e.target.value) })} />
        </Labeled>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <div className="flex gap-3">
          <button onClick={save} disabled={saving} className="h-10 px-6 rounded-full bg-primary text-[#152211] font-bold hover:bg-[#3cd610] transition-colors disabled:opacity-60">
            {saving ? "Saving…" : "Save"}
          </button>
          <button onClick={() => { setEditing(null); setError(""); }} className="h-10 px-6 rounded-full border border-[#3f6732] font-semibold hover:border-primary transition-colors">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  const rows = data ?? [];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-400 text-sm">{rows.length} testimonials</p>
        <button
          onClick={() => setEditing({ ...BLANK })}
          className="flex items-center gap-1 h-9 px-4 rounded-full bg-primary text-[#152211] text-sm font-bold hover:bg-[#3cd610] transition-colors"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Add testimonial
        </button>
      </div>
      {rows.map((row) => (
        <div key={row.id} className="rounded-2xl border border-[#2c4823] bg-surface-dark/40 p-5">
          <p className="text-gray-200 italic">“{row.quoteEn}”</p>
          <div className="flex items-center justify-between mt-3">
            <div className="text-sm">
              <span className="font-bold">{row.name}</span>
              <span className="text-primary"> · {row.roleEn}</span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setEditing({ ...row })} className="text-sm font-semibold text-gray-300 hover:text-primary">Edit</button>
              <button onClick={() => remove(row)} className="text-sm font-semibold text-red-400 hover:text-red-300">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
