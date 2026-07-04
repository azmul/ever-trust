import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";
import { getDb } from "../../../db";
import { testimonials } from "../../../db/schema";
import { testimonialFromBody } from "../_helpers";

export async function GET() {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const rows = await db.select().from(testimonials).orderBy(asc(testimonials.sortOrder));
  return NextResponse.json({ ok: true, testimonials: rows });
}

export async function POST(request: Request) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const values = testimonialFromBody(await request.json().catch(() => null));
  if (!values || !values.quoteEn || !values.name) {
    return NextResponse.json(
      { ok: false, error: "English quote and name are required" },
      { status: 422 }
    );
  }

  const [row] = await db.insert(testimonials).values(values).returning();
  return NextResponse.json({ ok: true, testimonial: row });
}
