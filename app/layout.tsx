import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";
import { WhatsAppFab } from "./components/WhatsAppFab";
import { site } from "./data/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800"],
});

const description =
  "Ever Trust sources, inspects, and delivers high-quality goods for wholesalers and retailers in Bangladesh. Your gateway to global markets without the risk.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Trusted Global Sourcing & Import Partner`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "import Bangladesh",
    "global sourcing",
    "B2B importer",
    "wholesale import",
    "electronics import",
    "construction materials import",
    "Jessore importer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Trusted Global Sourcing & Import Partner`,
    description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Trusted Global Sourcing`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description,
  url: site.url,
  email: site.email,
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: "BD",
  },
  areaServed: ["China", "India", "Turkey", "Vietnam", "Bangladesh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${manrope.variable} font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
          <WhatsAppFab />
        </LanguageProvider>
      </body>
    </html>
  );
}
