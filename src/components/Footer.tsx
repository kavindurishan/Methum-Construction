"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Shield,
  X,
  MessageSquare,
  HardHat,
  Truck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

/**
 * Authentic Official Social Media Brand Vector Icons (Matching Yathra Bus System)
 */
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const policyContents: Record<
    string,
    { title: string; subtitle: string; content: React.ReactNode }
  > = {
    "Terms of Contracting": {
      title: "Terms of Civil Contracting",
      subtitle: "CIDA & ICTAD Standard Conditions of Contract",
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            Welcome to Methum Constructions. All civil infrastructure contracts,
            road metalling, and turnkey building projects conform to standard
            national conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>
              Civil engineering works adhere strictly to Construction Industry
              Development Authority (CIDA) guidelines and Provincial Road
              Development Authority (PRDA) technical specifications.
            </li>
            <li>
              Material testing (concrete slump test, cube strength evaluation,
              and bitumen core density tests) are conducted under qualified
              consultant supervision.
            </li>
            <li>
              Interim stage payments and final accounts are governed by agreed
              Bill of Quantities (BOQ) measurements and approved engineering
              certifications.
            </li>
          </ul>
        </div>
      ),
    },
    "Machinery Hire Policy": {
      title: "Machinery Hire & Mobilization Policy",
      subtitle: "Heavy Equipment Terms & Certified Operators",
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            Transparent commercial equipment hire terms for excavators, road
            rollers, backhoes, and motor graders:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>
              All rental units are dispatched with safety-certified, experienced
              heavy plant operators and daily operational logs.
            </li>
            <li>
              Mobilization transport via low-bed heavy carriers is arranged
              directly from our Badalkumbura plant yard to your project site.
            </li>
            <li>
              Fuel arrangement (wet rate with diesel included, or dry rate with
              client-provided diesel) is documented prior to machine departure.
            </li>
            <li>
              Breakdown replacement: Immediate mechanical support or unit
              exchange provided in the event of jobsite mechanical failure.
            </li>
          </ul>
        </div>
      ),
    },
    "Quality & Safety (HSE) Policy": {
      title: "Quality, Health, Safety & Environment (HSE)",
      subtitle: "ISO 9001:2015 & ISO 45001:2018 Certified Protocols",
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            Safety and structural durability remain the cornerstone of every
            Methum Constructions site:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>
              <strong>Mandatory Personal Protective Equipment (PPE):</strong>{" "}
              High-visibility vests, hard hats, and steel-toe safety footwear
              enforced for all workers and visitors.
            </li>
            <li>
              <strong>Daily Toolbox Briefings:</strong> Pre-shift hazard
              assessments before commencing road paving, heavy trenching, or
              structural scaffolding.
            </li>
            <li>
              <strong>Zero Harm Commitment:</strong> Continuous site inspection
              ensuring accident-free operations and public safety around
              excavation zones.
            </li>
          </ul>
        </div>
      ),
    },
    "Privacy Policy": {
      title: "Corporate Privacy & Data Policy",
      subtitle: "Client Confidentiality & Commercial Security",
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            Methum Constructions respects the privacy of all commercial partners,
            tendering authorities, and private clients:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>
              Contact information, RFPs, and architectural drawings submitted
              via our website are used exclusively for quotation and contract
              execution.
            </li>
            <li>
              Commercial BOQ pricing, tender bids, and project specifications are
              treated under strict non-disclosure terms.
            </li>
            <li>
              We never share, sell, or disclose client project details to
              unauthorized third parties.
            </li>
          </ul>
        </div>
      ),
    },
    "Tender Guidelines": {
      title: "Tender Desk & BOQ Submission Guidelines",
      subtitle: "Government & Private Sector Tender Protocols",
      content: (
        <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
          <p>
            Guidelines for inviting Methum Constructions to tender or requesting
            subcontract bids:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li>
              Tender documents and digital BOQs can be submitted to{" "}
              <strong>methumconstruction@gmail.com</strong>.
            </li>
            <li>
              Our engineering estimating desk provides formal technical and
              financial proposals within 24 to 48 business hours.
            </li>
            <li>
              Company profiles, CIDA C7 registration certificates, tax clearances,
              and equipment fleet ownership documents provided on request.
            </li>
          </ul>
        </div>
      ),
    },
  };

  const policyLinks = [
    "Terms of Contracting",
    "Machinery Hire Policy",
    "Quality & Safety (HSE) Policy",
    "Privacy Policy",
    "Tender Guidelines",
  ];

  return (
    <>
      <footer className="relative w-full no-print bg-[#060b17] text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans">
        {/* Subtle Civil Grid & Ambient Glow Pattern (Exact Yathra Bus System Style) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          {/* ========================================================== */}
          {/* 5-COLUMN BALANCED CONTENT GRID (YATHRA BUS SYSTEM ARCHITECTURE) */}
          {/* ========================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 pb-10 border-b border-slate-800/80">
            {/* Column 1: Brand Logo & Verified CIDA Badges (Wear Inhouse Animated Focus) */}
            <div className="space-y-4">
              <div className="pl-1 sm:pl-3">
                <Link
                  href="/"
                  className="inline-flex flex-col items-start group select-none relative cursor-pointer"
                >
                  {/* Ambient Golden Glow Aura (Wear Inhouse Style) */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/25 via-amber-400/30 to-yellow-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

                  {/* Main Logo Image (Enlarged & Prominently Focused) */}
                  <div className="relative overflow-hidden rounded-xl p-1.5 bg-slate-950/60 border border-amber-500/30 shadow-xl shadow-amber-950/40 transition-all duration-300 group-hover:scale-[1.04] group-hover:border-amber-400">
                    <img
                      src="/logo-white.png"
                      alt="Methum Constructions"
                      className="h-16 sm:h-20 w-auto object-contain transition duration-300 animate-logo-glow"
                    />
                    {/* Metallic Sheen Glare Animation */}
                    <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none animate-logo-sheen" />
                  </div>

                  {/* Futuristic Laser Hairline with Sweep Animation (Wear Inhouse Style) */}
                  <div className="w-full h-[2px] bg-slate-800/90 mt-2 relative overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-laser-sweep" />
                  </div>

                  {/* Live Status Subtag Indicator */}
                  <div className="flex items-center gap-1.5 mt-1.5 text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
                    </span>
                    <span className="text-amber-400/90 font-bold">CIVIL INFRASTRUCTURE</span>
                  </div>
                </Link>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed pl-1 sm:pl-3">
                Premier civil engineering and heavy infrastructure contractor in
                Sri Lanka. Delivering high-durability road networks, turnkey
                commercial buildings, and heavy machinery fleet hire.
              </p>

              {/* Accreditation Badge */}
              <div className="pt-1 pl-1 sm:pl-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{siteConfig.company.cidaGrading}</span>
                </div>
                <span className="text-[10px] text-slate-500 block mt-1">
                  BR: {siteConfig.company.businessRegistration} • Est. {siteConfig.company.establishedYear}
                </span>
              </div>
            </div>

            {/* Column 2: Landmark Civil Projects */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                Landmark Projects
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Pilisarana Road Concrete Paving
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Karanda - Medagama Tarring
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Buddama Road Metalling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Mariarawa Retaining Wall
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    District Secretariat Cladding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Kataragama Pilgrims Rest
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Navigation & Client Links */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                Quick Navigation
              </span>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link
                    href="/"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Home Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Corporate Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sectors"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Civil Divisions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#machinery"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Machinery Fleet (Rent & Sale)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#quality"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Quality & HSE Standards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-amber-300 transition-colors inline-block py-0.5"
                  >
                    Contact & Tender Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect With Us (Social Networks in same row) */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                Connect With Us
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Follow Methum Constructions on official networks for live site
                telemetry, machinery fleet additions & tender notices.
              </p>

              {/* Official Social Media Brand Vector Icons (Exact Yathra Style) */}
              <div className="flex items-center space-x-2 pt-1 flex-wrap gap-y-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-[#1877F2]/20 border border-slate-800 hover:border-[#1877F2]/60 text-slate-400 hover:text-[#1877F2] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-[#25D366]/20 border border-slate-800 hover:border-[#25D366]/60 text-slate-400 hover:text-[#25D366] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-[#0A66C2]/20 border border-slate-800 hover:border-[#0A66C2]/60 text-slate-400 hover:text-[#0A66C2] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-[#E1306C]/20 border border-slate-800 hover:border-[#E1306C]/60 text-slate-400 hover:text-[#E1306C] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-[#FF0000]/20 border border-slate-800 hover:border-[#FF0000]/60 text-slate-400 hover:text-[#FF0000] flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 5: 24/7 Civil Operations Desk & All Contacts */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                24/7 Operations Desk
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Assisting government tenders, civil site consultants & heavy plant dispatch islandwide.
              </p>

              <div className="space-y-2 pt-1 text-xs">
                {/* General Hotline */}
                <a
                  href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                  className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-950 border border-amber-800/60 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">
                      General Hotline
                    </span>
                    <span className="font-mono font-bold text-xs text-amber-400 group-hover:text-amber-300">
                      {siteConfig.contacts.hotlines[0]}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Dispatch */}
                <a
                  href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">
                      WhatsApp Dispatch Desk
                    </span>
                    <span className="font-mono font-bold text-xs text-emerald-400 group-hover:text-emerald-300">
                      {siteConfig.contacts.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Email Support */}
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-7 h-7 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">
                      Tender & Corporate Email
                    </span>
                    <span className="font-mono text-xs text-slate-300 group-hover:text-sky-300 truncate block max-w-[155px]">
                      {siteConfig.contacts.email}
                    </span>
                  </div>
                </a>

                {/* Plant Yard / Head Office */}
                <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold text-slate-500 block">
                      Head Office & Plant Yard
                    </span>
                    <span className="text-[11px] text-slate-300 leading-tight block">
                      {siteConfig.contacts.headOffice.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* POLICY LINKS (Exact Yathra Bus System Interactive Drawer Bar) */}
          {/* ========================================================== */}
          <div className="py-5 flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-2 border-b border-slate-800/80">
            {policyLinks.map((policy) => (
              <button
                key={policy}
                type="button"
                onClick={() => setActivePolicy(policy)}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors cursor-pointer text-left"
              >
                {policy}
              </button>
            ))}
          </div>

          {/* ========================================================== */}
          {/* BOTTOM COPYRIGHT & CREDITS (Exact Yathra Bus System Style) */}
          {/* ========================================================== */}
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <p className="text-slate-400 font-normal">
                &copy; {currentYear} {siteConfig.company.legalName}. All Rights
                Reserved.
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wide">
                A Technical Division of KRM Group
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-normal">
                {siteConfig.company.cidaGrading} • Business Reg:{" "}
                {siteConfig.company.businessRegistration}
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-slate-300 font-normal flex items-center flex-wrap gap-1">
                <span>Designed &amp; Developed with</span>
                <span className="text-rose-500 font-bold inline-block mx-0.5">
                  ♡
                </span>
                <span>by</span>
                <a
                  href="#krm"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="text-amber-400 hover:text-amber-300 font-semibold hover:underline"
                >
                  KRM Technologies
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* INTERACTIVE POLICY DRAWER MODAL (Exact Yathra Bus System)   */}
        {/* ========================================================== */}
        {activePolicy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
            <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4 text-white relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span>{policyContents[activePolicy]?.title}</span>
                  </h3>
                  <span className="text-[10px] text-slate-400">
                    {policyContents[activePolicy]?.subtitle}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePolicy(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-72 overflow-y-auto pr-1">
                {policyContents[activePolicy]?.content}
              </div>

              <div className="pt-2 flex justify-end border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setActivePolicy(null)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </footer>

      {/* Floating 24/7 WhatsApp Action Button */}
      <a
        href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
          "Hello Methum Constructions, I would like to inquire about road/building construction and machinery rental."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-xs shadow-2xl shadow-emerald-950/80 hover:scale-105 transition duration-300 border border-emerald-400/40"
        aria-label="WhatsApp Dispatch"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Dispatch</span>
      </a>
    </>
  );
}
