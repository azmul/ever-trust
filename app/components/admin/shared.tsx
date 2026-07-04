"use client";

import { useCallback, useEffect, useState } from "react";

export type LoadState = "loading" | "ready" | "nodb" | "error";

/** Fetches a JSON list resource from an admin API route with load states. */
export function useDbResource<T>(url: string, pick: (json: unknown) => T) {
  const [data, setData] = useState<T | null>(null);
  const [state, setState] = useState<LoadState>("loading");

  const reload = useCallback(async () => {
    setState("loading");
    try {
      const res = await fetch(url);
      if (res.status === 503) return setState("nodb");
      if (!res.ok) return setState("error");
      const json = await res.json();
      setData(pick(json) as T);
      setState("ready");
    } catch {
      setState("error");
    }
    // pick is stable enough for our use; intentionally not a dep.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    reload();
  }, [reload]);

  return { data, setData, state, reload };
}

export function PanelState({
  state,
  onRetry,
}: {
  state: LoadState;
  onRetry: () => void;
}) {
  if (state === "loading") return <p className="text-gray-400">Loading…</p>;

  if (state === "nodb")
    return (
      <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6 text-sm">
        <p className="font-bold text-yellow-300 mb-1">Database not connected</p>
        <p className="text-gray-300">
          Set <code className="text-primary">DATABASE_URL</code> in{" "}
          <code className="text-primary">.env.local</code>, then run{" "}
          <code className="text-primary">pnpm db:push</code> and{" "}
          <code className="text-primary">pnpm db:seed</code>. Until then the public
          site shows the built-in default content.
        </p>
      </div>
    );

  return (
    <div className="flex items-center gap-3 text-sm">
      <p className="text-red-400">Something went wrong.</p>
      <button onClick={onRetry} className="text-primary font-semibold hover:underline">
        Retry
      </button>
    </div>
  );
}

/* ---- Small shared form primitives ---- */

export const fieldClass =
  "w-full rounded-lg bg-background-dark border border-[#3f6732] px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm";

export function Labeled({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-gray-400 text-xs font-semibold">{label}</span>
      {children}
    </label>
  );
}
