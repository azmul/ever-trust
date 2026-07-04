import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { testimonials } from "../../../../db/schema";
import { testimonialFromBody } from "../../_helpers";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  const values = testimonialFromBody(await request.json().catch(() => null));
  if (!values || !values.quoteEn || !values.name) {
    return NextResponse.json(
      { ok: false, error: "English quote and name are required" },
      { status: 422 }
    );
  }

  const [row] = await db
    .update(testimonials)
    .set(values)
    .where(eq(testimonials.id, Number(id)))
    .returning();
  return NextResponse.json({ ok: true, testimonial: row });
}

export async function DELETE(_request: Request, { params }: Params) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  await db.delete(testimonials).where(eq(testimonials.id, Number(id)));
  return NextResponse.json({ ok: true });
}
