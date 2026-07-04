import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { products } from "../../../../db/schema";
import { productFromBody } from "../../_helpers";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  const values = productFromBody(await request.json().catch(() => null));
  if (!values || !values.slug || !values.titleEn) {
    return NextResponse.json(
      { ok: false, error: "slug and English title are required" },
      { status: 422 }
    );
  }

  try {
    const [row] = await db
      .update(products)
      .set(values)
      .where(eq(products.id, Number(id)))
      .returning();
    return NextResponse.json({ ok: true, product: row });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not update product (is the slug unique?)" },
      { status: 409 }
    );
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const { id } = await params;
  await db.delete(products).where(eq(products.id, Number(id)));
  return NextResponse.json({ ok: true });
}
