/**
 * Minimal session auth for the hidden /admin panel.
 *
 * The session cookie stores an opaque token = HMAC-SHA256(secret, password).
 * It can't be forged without ADMIN_SESSION_SECRET, and verification is a
 * constant string comparison — no per-session server state required.
 *
 * Uses Web Crypto so it runs in both edge middleware and Node route handlers.
 */
export const ADMIN_COOKIE = "et_admin_session";

function bufToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** The token a valid session cookie must contain. Empty string if unconfigured. */
export async function expectedToken(): Promise<string> {
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!password || !secret) return "";

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(password));
  return bufToHex(sig);
}

/** True when the provided plaintext matches ADMIN_PASSWORD (constant-time-ish). */
export function passwordMatches(input: string): boolean {
  const password = process.env.ADMIN_PASSWORD ?? "";
  if (!password || input.length !== password.length) return false;
  let diff = 0;
  for (let i = 0; i < password.length; i++) {
    diff |= input.charCodeAt(i) ^ password.charCodeAt(i);
  }
  return diff === 0;
}

/** Validate a cookie value against the expected token. */
export async function isValidSession(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  const expected = await expectedToken();
  return expected !== "" && cookieValue === expected;
}
