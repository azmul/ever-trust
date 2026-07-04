import type { MetadataRoute } from "next";
import { getProducts } from "./lib/content";
import { site } from "./data/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const productRoutes = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: site.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productRoutes,
  ];
}
