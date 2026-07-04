/** Central business + contact details, reused by the form, WhatsApp links, footer and SEO. */
export const site = {
  name: "Ever Trust",
  url: "https://evertrust.com.bd",
  email: "evertrust04@gmail.com",
  phoneDisplay: "+880 1721 20 37 90",
  /** Digits only, country code included — for tel: and wa.me links. */
  phoneRaw: "8801721203790",
  address: {
    street: "Salua Bazar, Chowgacha",
    city: "Jessore",
    country: "Bangladesh",
  },
} as const;

/** Build a wa.me deep link with a pre-filled, URL-encoded message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(message)}`;
}
