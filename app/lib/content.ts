import "server-only";
import { asc } from "drizzle-orm";
import { getDb } from "../db";
import { products, testimonials } from "../db/schema";
import {
  seedProducts,
  seedTestimonials,
  type SeedProduct,
  type SeedTestimonial,
} from "../db/seed-data";

export type ProductContent = SeedProduct & { id?: number };
export type TestimonialContent = SeedTestimonial & { id?: number };

/** All products, ordered. Falls back to seed data if the DB is unavailable. */
export async function getProducts(): Promise<ProductContent[]> {
  const db = getDb();
  if (!db) return seedProducts;
  try {
    const rows = await db.select().from(products).orderBy(asc(products.sortOrder));
    return rows.length ? rows : seedProducts;
  } catch (err) {
    console.error("getProducts: falling back to seed data —", err);
    return seedProducts;
  }
}

export async function getProductBySlug(
  slug: string
): Promise<ProductContent | null> {
  const all = await getProducts();
  return all.find((p) => p.slug === slug) ?? null;
}

/** All testimonials, ordered. Falls back to seed data if the DB is unavailable. */
export async function getTestimonials(): Promise<TestimonialContent[]> {
  const db = getDb();
  if (!db) return seedTestimonials;
  try {
    const rows = await db
      .select()
      .from(testimonials)
      .orderBy(asc(testimonials.sortOrder));
    return rows.length ? rows : seedTestimonials;
  } catch (err) {
    console.error("getTestimonials: falling back to seed data —", err);
    return seedTestimonials;
  }
}
