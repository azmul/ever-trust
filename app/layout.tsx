import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./LanguageProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ever Trust - Trusted Global Sourcing",
  description:
    "We source, inspect, and deliver high-quality goods for wholesalers and retailers. Your gateway to global markets without the risk.",
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
      </head>
      <body
        className={`${manrope.variable} font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased overflow-x-hidden`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
