/** Shared body sanitizers for the admin write routes. */

function str(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function strArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string");
  // Accept newline- or comma-separated text from textareas.
  if (typeof v === "string") {
    return v
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function int(v: unknown, fallback = 0): number {
  const n = Number(v);
  return Number.isFinite(n) ? Math.trunc(n) : fallback;
}

export function productFromBody(body: unknown) {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  return {
    slug: str(b.slug).trim(),
    icon: str(b.icon, "category"),
    image: str(b.image),
    titleEn: str(b.titleEn).trim(),
    titleBn: str(b.titleBn).trim(),
    descEn: str(b.descEn),
    descBn: str(b.descBn),
    overviewEn: str(b.overviewEn),
    overviewBn: str(b.overviewBn),
    featuresEn: strArray(b.featuresEn),
    featuresBn: strArray(b.featuresBn),
    moqEn: str(b.moqEn),
    moqBn: str(b.moqBn),
    leadTimeEn: str(b.leadTimeEn),
    leadTimeBn: str(b.leadTimeBn),
    origins: strArray(b.origins),
    sortOrder: int(b.sortOrder),
  };
}

export function testimonialFromBody(body: unknown) {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  return {
    quoteEn: str(b.quoteEn).trim(),
    quoteBn: str(b.quoteBn).trim(),
    name: str(b.name).trim(),
    roleEn: str(b.roleEn),
    roleBn: str(b.roleBn),
    sortOrder: int(b.sortOrder),
  };
}
