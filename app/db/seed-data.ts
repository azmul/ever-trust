/**
 * Canonical starting content for products & testimonials.
 *
 * Used in two ways:
 *  1. `pnpm db:seed` inserts these rows into Postgres.
 *  2. The public site falls back to these when DATABASE_URL is not configured.
 *
 * Shapes match the DB columns in ./schema so they map 1:1.
 */

export type SeedProduct = {
  slug: string;
  icon: string;
  image: string;
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  overviewEn: string;
  overviewBn: string;
  featuresEn: string[];
  featuresBn: string[];
  moqEn: string;
  moqBn: string;
  leadTimeEn: string;
  leadTimeBn: string;
  origins: string[];
  sortOrder: number;
};

export type SeedTestimonial = {
  quoteEn: string;
  quoteBn: string;
  name: string;
  roleEn: string;
  roleBn: string;
  sortOrder: number;
};

export const seedProducts: SeedProduct[] = [
  {
    slug: "electronics",
    icon: "devices",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=80",
    titleEn: "Electronics",
    titleBn: "ইলেকট্রনিক্স",
    descEn: "Accessories, gadgets & components",
    descBn: "অ্যাক্সেসরিজ, গ্যাজেট ও কম্পোনেন্টস",
    overviewEn:
      "We source consumer and component-level electronics from vetted factories — from accessories and gadgets to internal parts. Every batch is inspected before shipment so you avoid the dead-stock and defect risk of ordering blind.",
    overviewBn:
      "আমরা যাচাইকৃত ফ্যাক্টরি থেকে কনজিউমার ও কম্পোনেন্ট-লেভেল ইলেকট্রনিক্স সংগ্রহ করি — অ্যাক্সেসরিজ ও গ্যাজেট থেকে শুরু করে যন্ত্রাংশ পর্যন্ত। প্রতিটি ব্যাচ শিপমেন্টের আগে পরিদর্শন করা হয়।",
    featuresEn: [
      "Phone & laptop accessories",
      "Gadgets and smart devices",
      "Components & spare parts",
      "Charging and cabling hardware",
    ],
    featuresBn: [
      "ফোন ও ল্যাপটপ অ্যাক্সেসরিজ",
      "গ্যাজেট ও স্মার্ট ডিভাইস",
      "কম্পোনেন্ট ও স্পেয়ার পার্টস",
      "চার্জিং ও ক্যাবলিং হার্ডওয়্যার",
    ],
    moqEn: "100+ pcs (varies by item)",
    moqBn: "১০০+ পিস (আইটেম ভেদে)",
    leadTimeEn: "15–30 days",
    leadTimeBn: "১৫–৩০ দিন",
    origins: ["China", "Vietnam", "India"],
    sortOrder: 1,
  },
  {
    slug: "raw-materials",
    icon: "science",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1200&q=80",
    titleEn: "Raw Materials",
    titleBn: "কাঁচামাল",
    descEn: "Cosmetics ingredients & industrial chemicals",
    descBn: "কসমেটিকস উপাদান ও ইন্ডাস্ট্রিয়াল কেমিক্যালস",
    overviewEn:
      "Industrial and cosmetic raw materials sourced to spec, with documentation and quality certificates. We help you secure consistent grades at bulk pricing.",
    overviewBn:
      "ইন্ডাস্ট্রিয়াল ও কসমেটিক কাঁচামাল স্পেসিফিকেশন অনুযায়ী সংগ্রহ করা হয়, সাথে ডকুমেন্টেশন ও কোয়ালিটি সার্টিফিকেট।",
    featuresEn: [
      "Cosmetic ingredients",
      "Industrial chemicals",
      "Packaging-grade materials",
      "Spec & MSDS documentation",
    ],
    featuresBn: [
      "কসমেটিক উপাদান",
      "ইন্ডাস্ট্রিয়াল কেমিক্যালস",
      "প্যাকেজিং-গ্রেড ম্যাটেরিয়াল",
      "স্পেক ও MSDS ডকুমেন্টেশন",
    ],
    moqEn: "By container / negotiable",
    moqBn: "কন্টেইনার / আলোচনাসাপেক্ষ",
    leadTimeEn: "20–40 days",
    leadTimeBn: "২০–৪০ দিন",
    origins: ["China", "India", "Turkey"],
    sortOrder: 2,
  },
  {
    slug: "construction",
    icon: "construction",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    titleEn: "Construction",
    titleBn: "নির্মাণ সামগ্রী",
    descEn: "High-grade steel, cement & fittings",
    descBn: "উচ্চমানের স্টিল, সিমেন্ট ও ফিটিংস",
    overviewEn:
      "High-grade construction inputs — steel, cement and fittings — from established mills, with mill certificates and pre-shipment inspection.",
    overviewBn:
      "উচ্চমানের নির্মাণ সামগ্রী — স্টিল, সিমেন্ট ও ফিটিংস — প্রতিষ্ঠিত মিল থেকে, মিল সার্টিফিকেট ও প্রি-শিপমেন্ট ইন্সপেকশনসহ।",
    featuresEn: [
      "High-grade steel & rebar",
      "Cement & binding materials",
      "Pipes, valves & fittings",
      "Mill test certificates",
    ],
    featuresBn: [
      "উচ্চমানের স্টিল ও রড",
      "সিমেন্ট ও বাইন্ডিং ম্যাটেরিয়াল",
      "পাইপ, ভাল্ভ ও ফিটিংস",
      "মিল টেস্ট সার্টিফিকেট",
    ],
    moqEn: "By container",
    moqBn: "কন্টেইনার অনুযায়ী",
    leadTimeEn: "25–45 days",
    leadTimeBn: "২৫–৪৫ দিন",
    origins: ["China", "Turkey", "India"],
    sortOrder: 3,
  },
  {
    slug: "garments",
    icon: "apparel",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    titleEn: "Garments",
    titleBn: "গার্মেন্টস",
    descEn: "Fabrics, textiles & ready-made wear",
    descBn: "ফ্যাব্রিক, টেক্সটাইল ও রেডিমেড পোশাক",
    overviewEn:
      "Fabrics, textiles and ready-made wear from reliable mills and factories. We manage sampling, quality grading and bulk negotiation.",
    overviewBn:
      "নির্ভরযোগ্য মিল ও ফ্যাক্টরি থেকে ফ্যাব্রিক, টেক্সটাইল ও রেডিমেড পোশাক। স্যাম্পলিং, কোয়ালিটি গ্রেডিং ও বাল্ক নেগোসিয়েশন আমরা সামলাই।",
    featuresEn: [
      "Woven & knit fabrics",
      "Ready-made garments",
      "Accessories & trims",
      "Sample approval workflow",
    ],
    featuresBn: [
      "ওভেন ও নিট ফ্যাব্রিক",
      "রেডিমেড গার্মেন্টস",
      "অ্যাক্সেসরিজ ও ট্রিমস",
      "স্যাম্পল এপ্রুভাল প্রক্রিয়া",
    ],
    moqEn: "500+ pcs / by roll",
    moqBn: "৫০০+ পিস / রোল অনুযায়ী",
    leadTimeEn: "20–40 days",
    leadTimeBn: "২০–৪০ দিন",
    origins: ["China", "India", "Vietnam"],
    sortOrder: 4,
  },
  {
    slug: "food-products",
    icon: "restaurant",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    titleEn: "Food Products",
    titleBn: "খাদ্য পণ্য",
    descEn: "Rice, onion, cumin, spices & other food items",
    descBn: "চাল, পেঁয়াজ, জিরা, মসলা ও অন্যান্য খাদ্য সামগ্রী",
    overviewEn:
      "Staple and specialty food products — rice, onion, cumin, spices and more — sourced with attention to origin, grade and compliance.",
    overviewBn:
      "স্টেপল ও স্পেশালটি খাদ্যপণ্য — চাল, পেঁয়াজ, জিরা, মসলা ইত্যাদি — উৎস, গ্রেড ও কমপ্লায়েন্সের দিকে খেয়াল রেখে সংগ্রহ করা হয়।",
    featuresEn: [
      "Rice & grains",
      "Onion & fresh produce",
      "Cumin, spices & seasonings",
      "Origin & quality compliance",
    ],
    featuresBn: [
      "চাল ও শস্য",
      "পেঁয়াজ ও তাজা পণ্য",
      "জিরা, মসলা ও সিজনিং",
      "উৎস ও কোয়ালিটি কমপ্লায়েন্স",
    ],
    moqEn: "By ton / container",
    moqBn: "টন / কন্টেইনার অনুযায়ী",
    leadTimeEn: "15–35 days",
    leadTimeBn: "১৫–৩৫ দিন",
    origins: ["India", "Turkey", "Vietnam"],
    sortOrder: 5,
  },
];

export const seedTestimonials: SeedTestimonial[] = [
  {
    quoteEn:
      "Ever Trust transformed our electronics business. We used to lose money on bad batches from Alibaba, but their inspection team ensures we only get top quality. Highly recommended!",
    quoteBn:
      "এভার ট্রাস্ট আমাদের ইলেকট্রনিক্স ব্যবসাকে বদলে দিয়েছে। আগে আলিবাবা থেকে খারাপ ব্যাচ পেয়ে ক্ষতিগ্রস্ত হতাম, এখন তাদের ইন্সপেকশন টিম নিশ্চিত করে আমরা শুধু মানসম্মত পণ্যই পাই। দারুণ রেকমেন্ডেড!",
    name: "Faisal Ahmed",
    roleEn: "Electronics Wholesaler, Dhaka",
    roleBn: "ইলেকট্রনিক্স হোলসেলার, ঢাকা",
    sortOrder: 1,
  },
  {
    quoteEn:
      "Their team handled customs and logistics end-to-end. Our construction materials arrived on time with every document in order. No surprises, no hidden fees.",
    quoteBn:
      "তাদের টিম কাস্টমস ও লজিস্টিকস পুরোটা সামলেছে। আমাদের নির্মাণ সামগ্রী সময়মতো এসেছে, সব ডকুমেন্ট ঠিকঠাক। কোনো লুকানো চার্জ নেই।",
    name: "Rezaul Karim",
    roleEn: "Construction Supplier, Khulna",
    roleBn: "নির্মাণ সামগ্রী সরবরাহকারী, খুলনা",
    sortOrder: 2,
  },
  {
    quoteEn:
      "We import spices and food staples in bulk. The quality grading and origin compliance gave us confidence to scale. A reliable partner for B2B sourcing.",
    quoteBn:
      "আমরা বাল্কে মসলা ও খাদ্যপণ্য আমদানি করি। কোয়ালিটি গ্রেডিং ও অরিজিন কমপ্লায়েন্স আমাদের ব্যবসা বাড়ানোর আত্মবিশ্বাস দিয়েছে। বি২বি সোর্সিংয়ের জন্য নির্ভরযোগ্য পার্টনার।",
    name: "Nasrin Sultana",
    roleEn: "Food Distributor, Jessore",
    roleBn: "খাদ্য ডিস্ট্রিবিউটর, যশোর",
    sortOrder: 3,
  },
];
