import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "../../components/ProductDetail";
import { getProducts, getProductBySlug } from "../../lib/content";
import { site } from "../../data/site";

// Allow products added via the admin (new slugs) to render on demand.
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.titleEn,
    description: product.overviewEn || product.descEn,
    alternates: { canonical: `${site.url}/products/${slug}` },
    openGraph: {
      title: `${product.titleEn} — ${site.name}`,
      description: product.overviewEn || product.descEn,
      url: `${site.url}/products/${slug}`,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
