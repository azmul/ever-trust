/**
 * Seeds the database with the initial product & testimonial content.
 *
 * Usage:
 *   1. Set DATABASE_URL in .env.local
 *   2. pnpm db:push   (create tables)
 *   3. pnpm db:seed   (insert this content)
 *
 * Safe to re-run: products are upserted by slug; testimonials are only
 * inserted when the table is empty.
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { products, testimonials } from "../app/db/schema";
import { seedProducts, seedTestimonials } from "../app/db/seed-data";

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error("DATABASE_URL is not set. Add it to .env.local first.");
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: url,
    ssl: url.includes("localhost") ? false : { rejectUnauthorized: false },
  });
  const db = drizzle(pool);

  console.log("Seeding products…");
  for (const p of seedProducts) {
    await db
      .insert(products)
      .values(p)
      .onConflictDoUpdate({
        target: products.slug,
        set: { ...p },
      });
  }

  const existing = await db.select({ id: testimonials.id }).from(testimonials);
  if (existing.length === 0) {
    console.log("Seeding testimonials…");
    await db.insert(testimonials).values(seedTestimonials);
  } else {
    console.log("Testimonials already present — skipping.");
  }

  console.log(`Done. ${seedProducts.length} products, testimonials ready.`);
  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
