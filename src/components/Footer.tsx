import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-gradient-to-br from-[#0c1322] via-[#090e1a] to-[#050811] text-slate-300 pt-16 pb-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 4-Column Grid (SpotOn Modern Structure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Column 1: Brand & Mission */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="bg-white px-3 py-1.5 rounded-lg inline-flex items-center shadow-md">
                  <img
                    src="/logo.png"
                    alt="Methum construction"
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </Link>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                Premier civil engineering and heavy infrastructure contractor in Sri Lanka. Committed to delivering high-durability road networks, turnkey commercial buildings, and comprehensive heavy machinery solutions.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span>CIDA C1 / CS2 Qualified</span>
              </div>
            </div>

            {/* Column 2: Quick Links (with hover slide animation) */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-bold tracking-wide uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sectors"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Services & Sectors</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#machinery"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Machinery Fleet (Rent & Sale)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Landmark Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#quality"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Quality & HSE Safety</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Civil Sectors & Services */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-bold tracking-wide uppercase">
                Core Sectors
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/#sectors"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Highways & Road Metalling</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sectors"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Asphalt Tarring & Paving</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sectors"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Commercial & High-Rise Buildings</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sectors"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Retaining Walls & Drainage</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#machinery"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Excavators & Rollers Hire</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#estimator"
                    className="text-slate-400 hover:text-amber-400 hover:translate-x-1.5 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span className="text-amber-500 text-xs">▸</span>
                    <span>Tender Desk & BOQ Estimates</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info (SpotOn Contact Style) */}
            <div className="space-y-4">
              <h4 className="text-white text-base font-bold tracking-wide uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-amber-400 text-base mt-0.5">✉️</span>
                  <div>
                    <span className="text-xs text-slate-500 block">Email Us</span>
                    <a
                      href={`mailto:${siteConfig.contacts.email}`}
                      className="text-slate-300 hover:text-amber-400 transition font-medium"
                    >
                      {siteConfig.contacts.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-amber-400 text-base mt-0.5">📞</span>
                  <div>
                    <span className="text-xs text-slate-500 block">Tender & Hotlines</span>
                    <a
                      href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                      className="text-slate-300 hover:text-amber-400 transition font-medium"
                    >
                      {siteConfig.contacts.hotlines[0]}
                    </a>
                    <span className="text-slate-600 mx-1.5">/</span>
                    <a
                      href={`tel:${siteConfig.contacts.hotlines[1].replace(/\s+/g, "")}`}
                      className="text-slate-300 hover:text-amber-400 transition font-medium"
                    >
                      {siteConfig.contacts.hotlines[1]}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-amber-400 text-base mt-0.5">📍</span>
                  <div>
                    <span className="text-xs text-slate-500 block">Head Office</span>
                    <span className="text-slate-300 font-medium">
                      {siteConfig.contacts.headOffice.address}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-400">
                  <span className="text-amber-400 text-base mt-0.5">🚜</span>
                  <div>
                    <span className="text-xs text-slate-500 block">Central Plant Yard</span>
                    <span className="text-slate-300 font-medium">
                      {siteConfig.contacts.machineryYard.address}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Footer Bottom (SpotOn Bottom Style) */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} {siteConfig.company.legalName}. All rights reserved.
            </p>

            {/* Circular Social Links (Matching SpotOn style) */}
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-500 hover:-translate-y-1 transition duration-200"
                aria-label="WhatsApp"
                title="WhatsApp Hotline"
              >
                <span className="text-sm">💬</span>
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 hover:-translate-y-1 transition duration-200 font-bold text-xs"
                aria-label="Facebook"
                title="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 hover:-translate-y-1 transition duration-200 font-bold text-xs"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                in
              </a>

              <a
                href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                className="w-9 h-9 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 hover:-translate-y-1 transition duration-200 text-sm"
                aria-label="Call Us"
                title="Call Direct"
              >
                📞
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
          "Hello Methum Constructions, I would like to inquire about road/building construction and machinery rental."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-xs shadow-2xl shadow-emerald-950/80 hover:scale-105 transition duration-300 border border-emerald-400/40"
        aria-label="WhatsApp Dispatch"
      >
        <span className="text-lg">💬</span>
        <span className="hidden sm:inline">WhatsApp Dispatch</span>
      </a>
    </>
  );
}
