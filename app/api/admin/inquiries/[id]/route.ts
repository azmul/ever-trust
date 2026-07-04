import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { inquiries } from "../../../../db/schema";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const status = body.status === "read" ? "read" : "new";

  await db.update(inquiries).set({ status }).where(eq(inquiries.id, Number(id)));
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: Params) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  await db.delete(inquiries).where(eq(inquiries.id, Number(id)));
  return NextResponse.json({ ok: true });
}
