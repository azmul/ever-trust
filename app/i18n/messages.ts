export type Locale = "en" | "bn";

export type Messages = {
  navbar: {
    brand: string;
    products: string;
    process: string;
    about: string;
    contact: string;
    cta: string;
    switchLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  products: {
    heading: string;
    description: string;
    electronicsTitle: string;
    electronicsDescription: string;
    rawMaterialsTitle: string;
    rawMaterialsDescription: string;
    constructionTitle: string;
    constructionDescription: string;
    garmentsTitle: string;
    garmentsDescription: string;
  };
  why: {
    heading: string;
    subheading: string;
    verifiedTitle: string;
    verifiedDescription: string;
    inspectionTitle: string;
    inspectionDescription: string;
    pricingTitle: string;
    pricingDescription: string;
    deliveryTitle: string;
    deliveryDescription: string;
    docsTitle: string;
    docsDescription: string;
    supportTitle: string;
    supportDescription: string;
  };
  process: {
    heading: string;
    subheading: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    step4Title: string;
    step4Description: string;
    step5Title: string;
    step5Description: string;
  };
  global: {
    heading: string;
    description: string;
    countryChina: string;
    countryTurkey: string;
    countryIndia: string;
    countryVietnam: string;
  };
  compliance: {
    heading: string;
    subtitle: string;
    badgeTradeLicense: string;
    badgeImportReg: string;
    badgeVatBin: string;
    badgeChamber: string;
    whoHeading: string;
    whoText: string;
    whoHighlight: string;
  };
  about: {
    heading: string;
    body: string;
    quote: string;
  };
  contact: {
    heading: string;
    subtitle: string;
    phoneLabel: string;
    phoneCaption: string;
    emailLabel: string;
    officeLabel: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formPhoneLabel: string;
    formPhonePlaceholder: string;
    formProductLabel: string;
    formProductPlaceholder: string;
    formQuantityLabel: string;
    formQuantityPlaceholder: string;
    formDetailsLabel: string;
    formDetailsPlaceholder: string;
    formButton: string;
  };
  footer: {
    brand: string;
    copyright: string;
  };
};

const en: Messages = {
  navbar: {
    brand: "Ever Trust",
    products: "Products",
    process: "Process",
    about: "About",
    contact: "Contact",
    cta: "Request Quote",
    switchLabel: "বাংলা",
  },
  hero: {
    badge: "Global Sourcing Partner",
    title: "Trusted Importer of Quality Products",
    subtitle:
      "We source, inspect, and deliver high-quality goods for wholesalers and retailers. Your gateway to global markets without the risk.",
    primaryCta: "Request a Quote",
    secondaryCta: "How It Works",
  },
  products: {
    heading: "What We Import",
    description:
      "We specialize in B2B sourcing across major categories. MOQ available for all items.",
    electronicsTitle: "Electronics",
    electronicsDescription: "Accessories, gadgets & components",
    rawMaterialsTitle: "Raw Materials",
    rawMaterialsDescription: "Cosmetics ingredients & industrial chemicals",
    constructionTitle: "Construction",
    constructionDescription: "High-grade steel, cement & fittings",
    garmentsTitle: "Garments",
    garmentsDescription: "Fabrics, textiles & ready-made wear",
  },
  why: {
    heading: "Why Choose Us",
    subheading:
      "Importing is risky. We eliminate the headaches with our comprehensive service.",
    verifiedTitle: "Verified Suppliers",
    verifiedDescription:
      "We personally vet every factory and source to ensure legitimacy.",
    inspectionTitle: "Quality Inspection",
    inspectionDescription:
      "On-site checks before shipment to prevent defectives.",
    pricingTitle: "Competitive Pricing",
    pricingDescription: "We negotiate the best market rates for bulk orders.",
    deliveryTitle: "On-time Delivery",
    deliveryDescription:
      "Reliable logistics partners ensuring strict timelines.",
    docsTitle: "Transparent Docs",
    docsDescription:
      "No hidden fees. All documentation is clear and upfront.",
    supportTitle: "Local Support",
    supportDescription: "Our local team is always available to assist you.",
  },
  process: {
    heading: "How Our Import Process Works",
    subheading: "From your idea to delivery in 5 simple steps.",
    step1Title: "1. Requirements",
    step1Description: "Discussion on product specs & quantity",
    step2Title: "2. Sourcing",
    step2Description: "Supplier search & quotation",
    step3Title: "3. Inspection",
    step3Description: "Sample approval & quality check",
    step4Title: "4. Shipping",
    step4Description: "Logistics & customs clearance",
    step5Title: "5. Delivery",
    step5Description: "Doorstep delivery to your location",
  },
  global: {
    heading: "Global Sourcing Network",
    description:
      "We have established strong partnerships with factories and logistics hubs in key manufacturing nations.",
    countryChina: "China",
    countryTurkey: "Turkey",
    countryIndia: "India",
    countryVietnam: "Vietnam",
  },
  compliance: {
    heading: "Fully Licensed & Compliant",
    subtitle: "Operating legally in Bangladesh since 2015.",
    badgeTradeLicense: "Trade License",
    badgeImportReg: "Import Reg. Cert",
    badgeVatBin: "VAT/BIN",
    badgeChamber: "Chamber Member",
    whoHeading: "Who We Work With",
    whoText:
      "We partner exclusively with Wholesalers, Retailers, Distributors, Factories, and Corporate Buyers.",
    whoHighlight: "We do not serve individual retail customers.",
  },
  about: {
    heading: "About Ever Trust",
    body:
      "Ever Trust was founded to bridge the gap between quality global manufacturers and local businesses. We noticed that many wholesalers struggled with the complexities of customs, quality control, and logistics.\n\nOur mission is simple: To provide a transparent, risk-free import channel so you can focus on selling, while we handle the sourcing.",
    quote:
      '"Ever Trust transformed our electronics business. We used to lose money on bad batches from Alibaba, but their inspection team ensures we only get top quality. Highly recommended!"',
  },
  contact: {
    heading: "Ready to Import?",
    subtitle: "Fill out the form to get a detailed quotation within 24 hours.",
    phoneLabel: "Phone / WhatsApp",
    phoneCaption: "+880 1712 345 678",
    emailLabel: "Email Us",
    officeLabel: "Office Location",
    formNameLabel: "Your Name",
    formNamePlaceholder: "John Doe",
    formPhoneLabel: "Phone Number",
    formPhonePlaceholder: "+880...",
    formProductLabel: "Product Name",
    formProductPlaceholder: "e.g. Headphones",
    formQuantityLabel: "Quantity",
    formQuantityPlaceholder: "e.g. 500 pcs",
    formDetailsLabel: "Additional Details",
    formDetailsPlaceholder: "Specific requirements, target price, etc.",
    formButton: "Get Import Quotation",
  },
  footer: {
    brand: "Ever Trust",
    copyright: "© 2025 Ever Trust. All rights reserved. Dhaka, Bangladesh.",
  },
};

const bn: Messages = {
  navbar: {
    brand: "এভার ট্রাস্ট",
    products: "প্রোডাক্টস",
    process: "প্রক্রিয়া",
    about: "আমাদের সম্পর্কে",
    contact: "যোগাযোগ",
    cta: "কোটেশন নিন",
    switchLabel: "EN",
  },
  hero: {
    badge: "গ্লোবাল সোর্সিং পার্টনার",
    title: "বিশ্বস্ত মানসম্পন্ন পণ্যের আমদানিকারক",
    subtitle:
      "আমরা হোলসেলার এবং রিটেইলারদের জন্য উচ্চমানের পণ্য সংগ্রহ, পরিদর্শন এবং সরবরাহ করি। ঝুঁকি ছাড়াই আপনার গ্লোবাল মার্কেটে যাওয়ার গেটওয়ে।",
    primaryCta: "কোটেশন চাই",
    secondaryCta: "কীভাবে কাজ করে",
  },
  products: {
    heading: "আমরা কী আমদানি করি",
    description:
      "আমরা বিভিন্ন ক্যাটাগরির বি২বি সোর্সিং-এ বিশেষজ্ঞ। সব পণ্যের জন্য এমওকিউ (MOQ) সুবিধা আছে।",
    electronicsTitle: "ইলেকট্রনিক্স",
    electronicsDescription: "অ্যাক্সেসরিজ, গ্যাজেট ও কম্পোনেন্টস",
    rawMaterialsTitle: "কাঁচামাল",
    rawMaterialsDescription:
      "কসমেটিকস উপাদান ও ইন্ডাস্ট্রিয়াল কেমিক্যালস",
    constructionTitle: "নির্মাণ সামগ্রী",
    constructionDescription: "উচ্চমানের স্টিল, সিমেন্ট ও ফিটিংস",
    garmentsTitle: "গার্মেন্টস",
    garmentsDescription: "ফ্যাব্রিক, টেক্সটাইল ও রেডিমেড পোশাক",
  },
  why: {
    heading: "কেন আমাদের বেছে নেবেন",
    subheading:
      "আমদানি ঝুঁকিপূর্ণ। আমাদের সম্পূর্ণ সেবার মাধ্যমে আমরা সেই ঝুঁকি ও ঝামেলা আপনার জন্য কমিয়ে দিই।",
    verifiedTitle: "ভেরিফাইড সাপ্লায়ার",
    verifiedDescription:
      "প্রতিটি ফ্যাক্টরি ও সোর্স আমরা ব্যক্তিগতভাবে যাচাই করি।",
    inspectionTitle: "কোয়ালিটি ইন্সপেকশন",
    inspectionDescription:
      "শিপমেন্টের আগে অন-সাইট চেক করে ডিফেক্টিভ পণ্য রোধ করি।",
    pricingTitle: "প্রতিযোগিতামূলক মূল্য",
    pricingDescription:
      "বাল্ক অর্ডারের জন্য আমরা সেরা বাজারদর নিয়ে আলোচনা করি।",
    deliveryTitle: "সময়মতো ডেলিভারি",
    deliveryDescription:
      "নির্ভরযোগ্য লজিস্টিকস পার্টনার দিয়ে সময়মতো পণ্য পৌঁছে দিই।",
    docsTitle: "স্বচ্ছ ডকুমেন্টেশন",
    docsDescription:
      "কোনো লুকানো চার্জ নেই। সব ডকুমেন্ট পরিষ্কার ও বোধগম্য।",
    supportTitle: "লোকাল সাপোর্ট",
    supportDescription:
      "আমাদের লোকাল টিম সবসময় আপনাকে সহায়তা করতে প্রস্তুত।",
  },
  process: {
    heading: "আমাদের ইমপোর্ট প্রসেস কীভাবে কাজ করে",
    subheading: "আপনার আইডিয়া থেকে ডেলিভারি – মাত্র ৫টি সহজ ধাপে।",
    step1Title: "১. রিকোয়ারমেন্ট",
    step1Description: "প্রোডাক্ট স্পেসিফিকেশন ও পরিমাণ নিয়ে আলোচনা",
    step2Title: "২. সোর্সিং",
    step2Description: "সাপ্লায়ার খোঁজা ও কোটেশন",
    step3Title: "৩. ইন্সপেকশন",
    step3Description: "স্যাম্পল এপ্রুভাল ও কোয়ালিটি চেক",
    step4Title: "৪. শিপিং",
    step4Description: "লজিস্টিকস ও কাস্টমস ক্লিয়ারেন্স",
    step5Title: "৫. ডেলিভারি",
    step5Description: "আপনার লোকেশনে ডোরস্টেপ ডেলিভারি",
  },
  global: {
    heading: "গ্লোবাল সোর্সিং নেটওয়ার্ক",
    description:
      "বিশ্বের গুরুত্বপূর্ণ উৎপাদনকারী দেশগুলোতে আমাদের রয়েছে শক্তিশালী ফ্যাক্টরি ও লজিস্টিকস পার্টনারশিপ।",
    countryChina: "China",
    countryTurkey: "Turkey",
    countryIndia: "India",
    countryVietnam: "Vietnam",
  },
  compliance: {
    heading: "সম্পূর্ণ লাইসেন্সপ্রাপ্ত ও কমপ্লায়েন্ট",
    subtitle: "২০১৫ সাল থেকে বাংলাদেশে আইনগতভাবে কার্যক্রম পরিচালনা করছি।",
    badgeTradeLicense: "Trade License",
    badgeImportReg: "Import Reg. Cert",
    badgeVatBin: "VAT/BIN",
    badgeChamber: "Chamber Member",
    whoHeading: "আমরা যাদের সাথে কাজ করি",
    whoText:
      "আমরা শুধুমাত্র হোলসেলার, রিটেইলার, ডিস্ট্রিবিউটর, ফ্যাক্টরি ও কর্পোরেট বায়ারদের সাথে কাজ করি।",
    whoHighlight:
      "আমরা কোনো ব্যক্তিগত/রিটেইল কাস্টমারকে সেবা দেই না।",
  },
  about: {
    heading: "এভার ট্রাস্ট সম্পর্কে",
    body:
      "এভার ট্রাস্ট প্রতিষ্ঠিত হয়েছে মানসম্মত গ্লোবাল ম্যানুফ্যাকচারার এবং লোকাল ব্যবসায়ীদের মধ্যে দূরত্ব কমাতে। অনেক হোলসেলার কাস্টমস, কোয়ালিটি কন্ট্রোল এবং লজিস্টিকসের জটিলতার কারণে সমস্যায় পড়েন – আমরা সেই সমস্যা সমাধানে কাজ করি।\n\nআমাদের লক্ষ্য খুব সহজ: একটি স্বচ্ছ ও ঝুঁকিমুক্ত ইমপোর্ট চ্যানেল তৈরি করা, যাতে আপনি বিক্রিতে ফোকাস করতে পারেন এবং সোর্সিংয়ের দায়িত্ব আমরা নেই।",
    quote:
      '"এভার ট্রাস্ট আমাদের ইলেকট্রনিক্স ব্যবসাকে বদলে দিয়েছে। আগে আমরা আলিবাবা থেকে খারাপ ব্যাচ পেয়ে ক্ষতিগ্রস্ত হতাম, এখন তাদের ইন্সপেকশন টিম নিশ্চিত করে যে আমরা শুধু মানসম্মত পণ্যই পাই। দারুণভাবে রেকমেন্ডেড!"',
  },
  contact: {
    heading: "ইমপোর্ট করতে প্রস্তুত?",
    subtitle:
      "ফর্মটি পূরণ করুন, ২৪ ঘণ্টার মধ্যে আমরা বিস্তারিত কোটেশন পাঠাবো।",
    phoneLabel: "ফোন / হোয়াটসঅ্যাপ",
    phoneCaption: "+880 1712 345 678",
    emailLabel: "ইমেইল করুন",
    officeLabel: "অফিস ঠিকানা",
    formNameLabel: "আপনার নাম",
    formNamePlaceholder: "জন ডো",
    formPhoneLabel: "ফোন নম্বর",
    formPhonePlaceholder: "+880...",
    formProductLabel: "প্রোডাক্টের নাম",
    formProductPlaceholder: "যেমন: হেডফোন",
    formQuantityLabel: "পরিমাণ",
    formQuantityPlaceholder: "যেমন: ৫০০ পিস",
    formDetailsLabel: "অতিরিক্ত তথ্য",
    formDetailsPlaceholder:
      "নির্দিষ্ট রিকোয়ারমেন্ট, টার্গেট প্রাইস ইত্যাদি...",
    formButton: "ইমপোর্ট কোটেশন নিন",
  },
  footer: {
    brand: "এভার ট্রাস্ট",
    copyright:
      "© ২০২৫ এভার ট্রাস্ট। সর্বস্বত্ব সংরক্ষিত। ঢাকা, বাংলাদেশ।",
  },
};

export const translations: Record<Locale, Messages> = { en, bn };


