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
    foodProductsTitle: string;
    foodProductsDescription: string;
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
    whatsappButton: string;
    sending: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
    validationName: string;
    validationPhone: string;
    validationProduct: string;
  };
  catalog: {
    viewDetails: string;
    detailEyebrow: string;
    requestQuote: string;
    backToProducts: string;
    overviewHeading: string;
    featuresHeading: string;
    originHeading: string;
    moqLabel: string;
    leadTimeLabel: string;
    items: Record<
      string,
      {
        overview: string;
        features: string[];
        moq: string;
        leadTime: string;
      }
    >;
  };
  stats: {
    shipments: string;
    countries: string;
    clients: string;
    categories: string;
  };
  testimonials: {
    heading: string;
    subheading: string;
    items: { quote: string; name: string; role: string }[];
  };
  partners: {
    heading: string;
  };
  whatsapp: {
    fabLabel: string;
    greeting: string;
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
    foodProductsTitle: "Food Products",
    foodProductsDescription: "Rice, onion, cumin, spices & other food items",
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
      "We have established strong partnerships with logistics hubs in key manufacturing nations.",
    countryChina: "China",
    countryTurkey: "Turkey",
    countryIndia: "India",
    countryVietnam: "Vietnam",
  },
  compliance: {
    heading: "Fully Licensed & Compliant",
    subtitle: "Operating legally in Bangladesh since 2025.",
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
    phoneCaption: "+880 1721 20 37 90",
    emailLabel: "Email Us",
    officeLabel: "Office Location",
    formNameLabel: "Your Name",
    formNamePlaceholder: "Your Name",
    formPhoneLabel: "Phone Number",
    formPhonePlaceholder: "+880...",
    formProductLabel: "Product Name",
    formProductPlaceholder: "e.g. Headphones",
    formQuantityLabel: "Quantity",
    formQuantityPlaceholder: "e.g. 500 pcs",
    formDetailsLabel: "Additional Details",
    formDetailsPlaceholder: "Specific requirements, target price, etc.",
    formButton: "Get Import Quotation",
    whatsappButton: "Send via WhatsApp",
    sending: "Sending…",
    successTitle: "Inquiry sent!",
    successBody:
      "Thanks — we've received your request and will reply with a quotation within 24 hours.",
    errorBody:
      "Something went wrong while sending. Please try again or reach us on WhatsApp.",
    validationName: "Please enter your name.",
    validationPhone: "Please enter a valid phone number.",
    validationProduct: "Please tell us which product you need.",
  },
  catalog: {
    viewDetails: "View details",
    detailEyebrow: "Product Category",
    requestQuote: "Request a Quote",
    backToProducts: "Back to all products",
    overviewHeading: "Overview",
    featuresHeading: "What we cover",
    originHeading: "Common Sourcing Origins",
    moqLabel: "Minimum Order",
    leadTimeLabel: "Typical Lead Time",
    items: {
      electronics: {
        overview:
          "We source consumer and component-level electronics from vetted factories — from accessories and gadgets to internal parts. Every batch is inspected before shipment so you avoid the dead-stock and defect risk of ordering blind.",
        features: [
          "Phone & laptop accessories",
          "Gadgets and smart devices",
          "Components & spare parts",
          "Charging and cabling hardware",
        ],
        moq: "100+ pcs (varies by item)",
        leadTime: "15–30 days",
      },
      "raw-materials": {
        overview:
          "Industrial and cosmetic raw materials sourced to spec, with documentation and quality certificates. We help you secure consistent grades at bulk pricing.",
        features: [
          "Cosmetic ingredients",
          "Industrial chemicals",
          "Packaging-grade materials",
          "Spec & MSDS documentation",
        ],
        moq: "By container / negotiable",
        leadTime: "20–40 days",
      },
      construction: {
        overview:
          "High-grade construction inputs — steel, cement and fittings — from established mills, with mill certificates and pre-shipment inspection.",
        features: [
          "High-grade steel & rebar",
          "Cement & binding materials",
          "Pipes, valves & fittings",
          "Mill test certificates",
        ],
        moq: "By container",
        leadTime: "25–45 days",
      },
      garments: {
        overview:
          "Fabrics, textiles and ready-made wear from reliable mills and factories. We manage sampling, quality grading and bulk negotiation.",
        features: [
          "Woven & knit fabrics",
          "Ready-made garments",
          "Accessories & trims",
          "Sample approval workflow",
        ],
        moq: "500+ pcs / by roll",
        leadTime: "20–40 days",
      },
      "food-products": {
        overview:
          "Staple and specialty food products — rice, onion, cumin, spices and more — sourced with attention to origin, grade and compliance.",
        features: [
          "Rice & grains",
          "Onion & fresh produce",
          "Cumin, spices & seasonings",
          "Origin & quality compliance",
        ],
        moq: "By ton / container",
        leadTime: "15–35 days",
      },
    },
  },
  stats: {
    shipments: "Shipments Delivered",
    countries: "Sourcing Countries",
    clients: "B2B Clients Served",
    categories: "Product Categories",
  },
  testimonials: {
    heading: "Trusted by Businesses",
    subheading: "What our wholesale and retail partners say about working with us.",
    items: [
      {
        quote:
          "Ever Trust transformed our electronics business. We used to lose money on bad batches from Alibaba, but their inspection team ensures we only get top quality. Highly recommended!",
        name: "Faisal Ahmed",
        role: "Electronics Wholesaler, Dhaka",
      },
      {
        quote:
          "Their team handled customs and logistics end-to-end. Our construction materials arrived on time with every document in order. No surprises, no hidden fees.",
        name: "Rezaul Karim",
        role: "Construction Supplier, Khulna",
      },
      {
        quote:
          "We import spices and food staples in bulk. The quality grading and origin compliance gave us confidence to scale. A reliable partner for B2B sourcing.",
        name: "Nasrin Sultana",
        role: "Food Distributor, Jessore",
      },
    ],
  },
  partners: {
    heading: "Sourcing from trusted manufacturing hubs",
  },
  whatsapp: {
    fabLabel: "Chat with us on WhatsApp",
    greeting:
      "Hello Ever Trust, I'd like to inquire about importing a product.",
  },
  footer: {
    brand: "Ever Trust",
    copyright: "© 2025 Ever Trust. All rights reserved. Jessore, Bangladesh.",
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
    foodProductsTitle: "খাদ্য পণ্য",
    foodProductsDescription: "চাল, পেঁয়াজ, জিরা, মসলা ও অন্যান্য খাদ্য সামগ্রী",
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
      "বিশ্বের গুরুত্বপূর্ণ উৎপাদনকারী দেশগুলোতে আমাদের রয়েছে শক্তিশালী লজিস্টিকস পার্টনারশিপ।",
    countryChina: "China",
    countryTurkey: "Turkey",
    countryIndia: "India",
    countryVietnam: "Vietnam",
  },
  compliance: {
    heading: "সম্পূর্ণ লাইসেন্সপ্রাপ্ত ও কমপ্লায়েন্ট",
    subtitle: "২০২৫ সাল থেকে বাংলাদেশে আইনগতভাবে কার্যক্রম পরিচালনা করছি।",
    badgeTradeLicense: "Trade License",
    badgeImportReg: "Import Reg. Cert",
    badgeVatBin: "VAT/BIN",
    badgeChamber: "Chamber Member",
    whoHeading: "আমরা যাদের সাথে কাজ করি",
    whoText:
      "আমরা হোলসেলার, রিটেইলার, ডিস্ট্রিবিউটর, ফ্যাক্টরি ও কর্পোরেট বায়ারদের সাথে কাজ করি।",
    whoHighlight:
      "আমরা ব্যক্তিগত/রিটেইল কাস্টমারকে সেবা দিই না।",
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
    phoneCaption: "+880 1721 20 37 90",
    emailLabel: "ইমেইল করুন",
    officeLabel: "অফিস ঠিকানা",
    formNameLabel: "আপনার নাম",
    formNamePlaceholder: "আপনার নাম",
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
    whatsappButton: "হোয়াটসঅ্যাপে পাঠান",
    sending: "পাঠানো হচ্ছে…",
    successTitle: "ইনকোয়ারি পাঠানো হয়েছে!",
    successBody:
      "ধন্যবাদ — আমরা আপনার অনুরোধ পেয়েছি এবং ২৪ ঘণ্টার মধ্যে কোটেশন সহ উত্তর দেবো।",
    errorBody:
      "পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন অথবা হোয়াটসঅ্যাপে যোগাযোগ করুন।",
    validationName: "অনুগ্রহ করে আপনার নাম লিখুন।",
    validationPhone: "অনুগ্রহ করে একটি সঠিক ফোন নম্বর দিন।",
    validationProduct: "কোন প্রোডাক্ট প্রয়োজন তা জানান।",
  },
  catalog: {
    viewDetails: "বিস্তারিত দেখুন",
    detailEyebrow: "প্রোডাক্ট ক্যাটাগরি",
    requestQuote: "কোটেশন নিন",
    backToProducts: "সব প্রোডাক্টে ফিরে যান",
    overviewHeading: "সংক্ষিপ্ত বিবরণ",
    featuresHeading: "যা যা অন্তর্ভুক্ত",
    originHeading: "সাধারণ সোর্সিং দেশসমূহ",
    moqLabel: "ন্যূনতম অর্ডার",
    leadTimeLabel: "সাধারণ লিড টাইম",
    items: {
      electronics: {
        overview:
          "আমরা যাচাইকৃত ফ্যাক্টরি থেকে কনজিউমার ও কম্পোনেন্ট-লেভেল ইলেকট্রনিক্স সংগ্রহ করি — অ্যাক্সেসরিজ ও গ্যাজেট থেকে শুরু করে যন্ত্রাংশ পর্যন্ত। প্রতিটি ব্যাচ শিপমেন্টের আগে পরিদর্শন করা হয়।",
        features: [
          "ফোন ও ল্যাপটপ অ্যাক্সেসরিজ",
          "গ্যাজেট ও স্মার্ট ডিভাইস",
          "কম্পোনেন্ট ও স্পেয়ার পার্টস",
          "চার্জিং ও ক্যাবলিং হার্ডওয়্যার",
        ],
        moq: "১০০+ পিস (আইটেম ভেদে)",
        leadTime: "১৫–৩০ দিন",
      },
      "raw-materials": {
        overview:
          "ইন্ডাস্ট্রিয়াল ও কসমেটিক কাঁচামাল স্পেসিফিকেশন অনুযায়ী সংগ্রহ করা হয়, সাথে ডকুমেন্টেশন ও কোয়ালিটি সার্টিফিকেট।",
        features: [
          "কসমেটিক উপাদান",
          "ইন্ডাস্ট্রিয়াল কেমিক্যালস",
          "প্যাকেজিং-গ্রেড ম্যাটেরিয়াল",
          "স্পেক ও MSDS ডকুমেন্টেশন",
        ],
        moq: "কন্টেইনার / আলোচনাসাপেক্ষ",
        leadTime: "২০–৪০ দিন",
      },
      construction: {
        overview:
          "উচ্চমানের নির্মাণ সামগ্রী — স্টিল, সিমেন্ট ও ফিটিংস — প্রতিষ্ঠিত মিল থেকে, মিল সার্টিফিকেট ও প্রি-শিপমেন্ট ইন্সপেকশনসহ।",
        features: [
          "উচ্চমানের স্টিল ও রড",
          "সিমেন্ট ও বাইন্ডিং ম্যাটেরিয়াল",
          "পাইপ, ভাল্ভ ও ফিটিংস",
          "মিল টেস্ট সার্টিফিকেট",
        ],
        moq: "কন্টেইনার অনুযায়ী",
        leadTime: "২৫–৪৫ দিন",
      },
      garments: {
        overview:
          "নির্ভরযোগ্য মিল ও ফ্যাক্টরি থেকে ফ্যাব্রিক, টেক্সটাইল ও রেডিমেড পোশাক। স্যাম্পলিং, কোয়ালিটি গ্রেডিং ও বাল্ক নেগোসিয়েশন আমরা সামলাই।",
        features: [
          "ওভেন ও নিট ফ্যাব্রিক",
          "রেডিমেড গার্মেন্টস",
          "অ্যাক্সেসরিজ ও ট্রিমস",
          "স্যাম্পল এপ্রুভাল প্রক্রিয়া",
        ],
        moq: "৫০০+ পিস / রোল অনুযায়ী",
        leadTime: "২০–৪০ দিন",
      },
      "food-products": {
        overview:
          "স্টেপল ও স্পেশালটি খাদ্যপণ্য — চাল, পেঁয়াজ, জিরা, মসলা ইত্যাদি — উৎস, গ্রেড ও কমপ্লায়েন্সের দিকে খেয়াল রেখে সংগ্রহ করা হয়।",
        features: [
          "চাল ও শস্য",
          "পেঁয়াজ ও তাজা পণ্য",
          "জিরা, মসলা ও সিজনিং",
          "উৎস ও কোয়ালিটি কমপ্লায়েন্স",
        ],
        moq: "টন / কন্টেইনার অনুযায়ী",
        leadTime: "১৫–৩৫ দিন",
      },
    },
  },
  stats: {
    shipments: "শিপমেন্ট ডেলিভারি",
    countries: "সোর্সিং দেশ",
    clients: "বি২বি ক্লায়েন্ট",
    categories: "প্রোডাক্ট ক্যাটাগরি",
  },
  testimonials: {
    heading: "ব্যবসায়ীদের আস্থা",
    subheading: "আমাদের সাথে কাজ করা হোলসেল ও রিটেইল পার্টনাররা যা বলেন।",
    items: [
      {
        quote:
          "এভার ট্রাস্ট আমাদের ইলেকট্রনিক্স ব্যবসাকে বদলে দিয়েছে। আগে আলিবাবা থেকে খারাপ ব্যাচ পেয়ে ক্ষতিগ্রস্ত হতাম, এখন তাদের ইন্সপেকশন টিম নিশ্চিত করে আমরা শুধু মানসম্মত পণ্যই পাই। দারুণ রেকমেন্ডেড!",
        name: "ফয়সাল আহমেদ",
        role: "ইলেকট্রনিক্স হোলসেলার, ঢাকা",
      },
      {
        quote:
          "তাদের টিম কাস্টমস ও লজিস্টিকস পুরোটা সামলেছে। আমাদের নির্মাণ সামগ্রী সময়মতো এসেছে, সব ডকুমেন্ট ঠিকঠাক। কোনো লুকানো চার্জ নেই।",
        name: "রেজাউল করিম",
        role: "নির্মাণ সামগ্রী সরবরাহকারী, খুলনা",
      },
      {
        quote:
          "আমরা বাল্কে মসলা ও খাদ্যপণ্য আমদানি করি। কোয়ালিটি গ্রেডিং ও অরিজিন কমপ্লায়েন্স আমাদের ব্যবসা বাড়ানোর আত্মবিশ্বাস দিয়েছে। বি২বি সোর্সিংয়ের জন্য নির্ভরযোগ্য পার্টনার।",
        name: "নাসরিন সুলতানা",
        role: "খাদ্য ডিস্ট্রিবিউটর, যশোর",
      },
    ],
  },
  partners: {
    heading: "বিশ্বস্ত ম্যানুফ্যাকচারিং হাব থেকে সোর্সিং",
  },
  whatsapp: {
    fabLabel: "হোয়াটসঅ্যাপে আমাদের সাথে চ্যাট করুন",
    greeting: "হ্যালো এভার ট্রাস্ট, আমি একটি প্রোডাক্ট ইমপোর্ট সম্পর্কে জানতে চাই।",
  },
  footer: {
    brand: "এভার ট্রাস্ট",
    copyright:
      "© ২০২৫ এভার ট্রাস্ট। সর্বস্বত্ব সংরক্ষিত। যশোর, বাংলাদেশ।",
  },
};

export const translations: Record<Locale, Messages> = { en, bn };


