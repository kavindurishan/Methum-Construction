import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="border-t border-slate-800/80 bg-[#070b14] pt-16 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img
                  src="/logo.png"
                  alt="Methum Construction"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="text-base font-extrabold text-white">
                METHUM <span className="text-amber-500">CONSTRUCTIONS</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              Premier civil engineering contractor in Sri Lanka specializing in high-speed highways, commercial high-rise buildings, and heavy equipment plant fleet mobilization.
            </p>

            <div className="text-amber-400 font-sinhala text-[11px] font-medium">
              විශ්වසනීය, උසස් ප්‍රමිතියේ ඉදිකිරීම් සහකාරයා.
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Registration: {siteConfig.company.cidaGrading}
            </div>
          </div>

          {/* Col 2: Divisions */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Core Operational Sectors
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="#sectors" className="hover:text-amber-400 transition">
                  Highways & Asphalt Road Construction
                </Link>
              </li>
              <li>
                <Link href="#sectors" className="hover:text-amber-400 transition">
                  Commercial & Residential Buildings
                </Link>
              </li>
              <li>
                <Link href="#sectors" className="hover:text-amber-400 transition">
                  Bridge, Culvert & Stormwater Drainage
                </Link>
              </li>
              <li>
                <Link href="#machinery" className="hover:text-amber-400 transition">
                  Heavy Machinery Rental Fleet
                </Link>
              </li>
              <li>
                <Link href="#machinery" className="hover:text-amber-400 transition">
                  Certified Pre-Owned Machinery Sales
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Quick Links */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Governance & Quality
            </h5>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="#quality" className="hover:text-amber-400 transition">
                  CIDA / ICTAD Certification
                </Link>
              </li>
              <li>
                <Link href="#quality" className="hover:text-amber-400 transition">
                  ISO 9001:2015 Quality Management
                </Link>
              </li>
              <li>
                <Link href="#quality" className="hover:text-amber-400 transition">
                  ISO 45001:2018 Health & Safety (HSE)
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition">
                  Leadership & Corporate Vision
                </Link>
              </li>
              <li>
                <Link href="#estimator" className="hover:text-amber-400 transition">
                  Tender Desk & Quotation Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <h5 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Operational Contacts
            </h5>
            <div className="space-y-2 text-[11px]">
              <p>
                <strong className="text-slate-200">Head Office:</strong>
                <br />
                {siteConfig.contacts.headOffice.address}
              </p>
              <p>
                <strong className="text-slate-200">Plant Yard:</strong>
                <br />
                {siteConfig.contacts.machineryYard.address}
              </p>
              <p>
                <strong className="text-slate-200">Hotlines:</strong>{" "}
                <a
                  href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                  className="text-amber-400 hover:underline"
                >
                  {siteConfig.contacts.hotlines[0]}
                </a>{" "}
                / {siteConfig.contacts.hotlines[1]}
              </p>
              <p>
                <strong className="text-slate-200">Tenders:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.contacts.tendersEmail}`}
                  className="text-amber-400 hover:underline"
                >
                  {siteConfig.contacts.tendersEmail}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 py-6 px-4 text-center text-slate-500 text-[11px]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              © {new Date().getFullYear()} {siteConfig.company.legalName}. All Rights Reserved.
            </div>
            <div className="text-slate-600">
              Engineered with Next.js 14 & Tailwind CSS • Production Grade
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating WhatsApp Dispatch Button */}
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
