import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteData";
import SiteIntroLoader from "@/components/SiteIntroLoader";

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | Civil Engineering, Infrastructure & Heavy Equipment`,
  description: `${siteConfig.company.tagline}. High-capacity highways, commercial high-rise buildings, and heavy machinery fleet rental and sales across Sri Lanka.`,
  keywords: [
    "Methum Construction",
    "Construction Company Sri Lanka",
    "Road Construction Sri Lanka",
    "Asphalt Paving Colombo",
    "Building Contractors",
    "Heavy Machinery Rental Sri Lanka",
    "Excavator Rent Sri Lanka",
    "JCB Hire",
    "Road Roller Rental",
  ],
  authors: [{ name: siteConfig.company.name }],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="bg-[#070b14] text-slate-100 min-h-screen antialiased selection:bg-amber-500 selection:text-slate-950">
        <SiteIntroLoader />
        {children}
      </body>
    </html>
  );
}
