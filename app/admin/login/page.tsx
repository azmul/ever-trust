"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "Login failed");
        setLoading(false);
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-surface-dark border border-[#2c4823] rounded-3xl p-8 flex flex-col gap-5"
      >
        <div className="flex items-center gap-2 text-white">
          <span className="material-symbols-outlined text-primary text-3xl">
            lock
          </span>
          <h1 className="text-xl font-bold">Admin Access</h1>
        </div>
        <p className="text-gray-400 text-sm">
          Enter the admin password to manage inquiries, products and testimonials.
        </p>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full h-12 rounded-lg bg-background-dark border border-[#3f6732] px-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading || !password}
          className="h-12 rounded-full bg-primary text-[#152211] font-bold hover:bg-[#3cd610] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
