"use client";

import { useState } from "react";
import type { InquiryRow } from "../../db/schema";
import { PanelState, useDbResource } from "./shared";

export function InquiriesPanel() {
  const { data, setData, state, reload } = useDbResource<InquiryRow[]>(
    "/api/admin/inquiries",
    (json) => (json as { inquiries: InquiryRow[] }).inquiries
  );

  const [busy, setBusy] = useState<number | null>(null);

  const toggleRead = async (row: InquiryRow) => {
    setBusy(row.id);
    const next = row.status === "read" ? "new" : "read";
    await fetch(`/api/admin/inquiries/${row.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    setData((prev) =>
      (prev ?? []).map((r) => (r.id === row.id ? { ...r, status: next } : r))
    );
    setBusy(null);
  };

  const remove = async (row: InquiryRow) => {
    if (!confirm(`Delete inquiry from ${row.name}?`)) return;
    setBusy(row.id);
    await fetch(`/api/admin/inquiries/${row.id}`, { method: "DELETE" });
    setData((prev) => (prev ?? []).filter((r) => r.id !== row.id));
    setBusy(null);
  };

  if (state !== "ready") return <PanelState state={state} onRetry={reload} />;

  const rows = data ?? [];
  if (rows.length === 0)
    return <p className="text-gray-400">No inquiries yet. They’ll appear here as the form is used.</p>;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-400 text-sm">{rows.length} total</p>
      {rows.map((row) => (
        <div
          key={row.id}
          className={`rounded-2xl border p-5 ${
            row.status === "new" ? "border-primary/40 bg-surface-dark" : "border-[#2c4823] bg-surface-dark/40"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg">{row.name}</h3>
                {row.status === "new" && (
                  <span className="text-[10px] font-bold uppercase bg-primary text-[#152211] px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </div>
              <a href={`tel:${row.phone}`} className="text-primary text-sm">{row.phone}</a>
            </div>
            <div className="text-gray-500 text-xs whitespace-nowrap">
              {new Date(row.createdAt).toLocaleString()}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 mt-3 text-sm">
            <div><span className="text-gray-500">Product: </span>{row.product}</div>
            <div><span className="text-gray-500">Quantity: </span>{row.quantity || "—"}</div>
          </div>
          {row.details && (
            <p className="text-gray-300 text-sm mt-2 whitespace-pre-line border-t border-[#2c4823] pt-2">
              {row.details}
            </p>
          )}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => toggleRead(row)}
              disabled={busy === row.id}
              className="text-sm font-semibold text-gray-300 hover:text-primary transition-colors"
            >
              Mark as {row.status === "read" ? "new" : "read"}
            </button>
            <button
              onClick={() => remove(row)}
              disabled={busy === row.id}
              className="text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
