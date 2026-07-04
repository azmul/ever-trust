import { NextResponse } from "next/server";
import { asc } from "drizzle-orm";
import { getDb } from "../../../db";
import { products } from "../../../db/schema";
import { productFromBody } from "../_helpers";

export async function GET() {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const rows = await db.select().from(products).orderBy(asc(products.sortOrder));
  return NextResponse.json({ ok: true, products: rows });
}

export async function POST(request: Request) {
  const db = getDb();
  if (!db) return NextResponse.json({ ok: false, error: "Database not configured" }, { status: 503 });

  const body = await request.json().catch(() => null);
  const values = productFromBody(body);
  if (!values || !values.slug || !values.titleEn) {
    return NextResponse.json(
      { ok: false, error: "slug and English title are required" },
      { status: 422 }
    );
  }

  try {
    const [row] = await db.insert(products).values(values).returning();
    return NextResponse.json({ ok: true, product: row });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not create product (is the slug unique?)" },
      { status: 409 }
    );
  }
}
