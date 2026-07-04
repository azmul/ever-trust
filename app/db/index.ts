import "server-only";
import { Pool } from "pg";
import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

/**
 * Lazily-created singleton DB connection.
 *
 * Returns null when DATABASE_URL is not set so the public site can fall back
 * to static content instead of crashing before a database is connected.
 */
let cached: NodePgDatabase<typeof schema> | null | undefined;

declare global {
  // eslint-disable-next-line no-var
  var __etPool: Pool | undefined;
}

export function getDb(): NodePgDatabase<typeof schema> | null {
  if (cached !== undefined) return cached;

  const url = process.env.DATABASE_URL;
  if (!url) {
    cached = null;
    return null;
  }

  // Reuse the pool across hot reloads in dev.
  const pool =
    global.__etPool ??
    new Pool({
      connectionString: url,
      // Most hosted providers (Neon, Supabase) require TLS.
      ssl: url.includes("localhost") ? false : { rejectUnauthorized: false },
      max: 5,
    });
  if (process.env.NODE_ENV !== "production") global.__etPool = pool;

  cached = drizzle(pool, { schema });
  return cached;
}

export { schema };
