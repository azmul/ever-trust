import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

/** Contact-form submissions captured from the public site. */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  product: text("product").notNull(),
  quantity: text("quantity").default("").notNull(),
  details: text("details").default("").notNull(),
  /** "new" | "read" */
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

/** Product categories shown on the catalog + detail pages (bilingual). */
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  icon: text("icon").notNull(),
  image: text("image").notNull(),
  titleEn: text("title_en").notNull(),
  titleBn: text("title_bn").notNull(),
  descEn: text("desc_en").notNull(),
  descBn: text("desc_bn").notNull(),
  overviewEn: text("overview_en").default("").notNull(),
  overviewBn: text("overview_bn").default("").notNull(),
  featuresEn: text("features_en").array().default([]).notNull(),
  featuresBn: text("features_bn").array().default([]).notNull(),
  moqEn: text("moq_en").default("").notNull(),
  moqBn: text("moq_bn").default("").notNull(),
  leadTimeEn: text("lead_time_en").default("").notNull(),
  leadTimeBn: text("lead_time_bn").default("").notNull(),
  origins: text("origins").array().default([]).notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
});

/** Testimonials carousel content (bilingual). */
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  quoteEn: text("quote_en").notNull(),
  quoteBn: text("quote_bn").notNull(),
  name: text("name").notNull(),
  roleEn: text("role_en").notNull(),
  roleBn: text("role_bn").notNull(),
  sortOrder: integer("sort_order").default(0).notNull(),
});

export type InquiryRow = typeof inquiries.$inferSelect;
export type ProductRow = typeof products.$inferSelect;
export type TestimonialRow = typeof testimonials.$inferSelect;
