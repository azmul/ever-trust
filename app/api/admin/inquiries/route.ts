import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { getDb } from "../../../db";
import { inquiries } from "../../../db/schema";

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json(
      { ok: false, error: "Database not configured" },
      { status: 503 }
    );
  }
  const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
  return NextResponse.json({ ok: true, inquiries: rows });
}
