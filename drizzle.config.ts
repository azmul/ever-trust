import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Load DATABASE_URL from .env.local (Next.js convention).
config({ path: ".env.local" });

export default defineConfig({
  schema: "./app/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
});
