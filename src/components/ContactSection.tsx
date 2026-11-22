"use client";

import React from "react";
import ContactForm from "@/app/contact/ContactForm";
import { siteConfig } from "@/data/siteData";

export default function ContactSection() {
  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10 overflow-hidden">
      {/* Pattern 4: Ambient Civil Sparks & Glowing Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="civil-spark animate-spark-1" style={{ bottom: "10%", left: "15%", width: 5, height: 5 }} />
        <div className="civil-spark animate-spark-2" style={{ bottom: "20%", left: "40%", width: 6, height: 6 }} />
        <div className="civil-spark animate-spark-3" style={{ bottom: "5%", left: "75%", width: 4, height: 4 }} />
        <div className="civil-spark animate-spark-4" style={{ bottom: "28%", left: "88%", width: 5, height: 5 }} />
        <div className="civil-spark animate-spark-5" style={{ bottom: "15%", left: "55%", width: 6, height: 6 }} />
      </div>

      <div className="relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            Tender Desk & Operations Depot
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Get in Touch with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              Methum Construction
            </span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Whether you are preparing a government tender, require heavy civil road &
            building contracting, or need immediate machinery mobilization, our engineering
            directors are at your service.
          </p>
        </div>
      </div>

      {/* 4 Primary Contact Channel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Head Office */}
        <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
            🏢
          </div>
          <h4 className="font-bold text-white text-sm">Corporate Head Office</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {siteConfig.contacts.headOffice.address}
          </p>
          <div className="pt-2 text-[11px] text-amber-400 font-semibold">
            Monday - Saturday: 8:00 AM - 6:00 PM
          </div>
        </div>

        {/* Card 2: Plant & Machinery Yard */}
        <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
            🚜
          </div>
          <h4 className="font-bold text-white text-sm">Central Plant & Yard</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {siteConfig.contacts.machineryYard.address}
          </p>
          <div className="pt-2 text-[11px] text-emerald-400 font-semibold">
            Machinery Inspections Welcome
          </div>
        </div>

        {/* Card 3: Hotlines & Dispatch */}
        <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
            📞
          </div>
          <h4 className="font-bold text-white text-sm">Direct Phone Hotlines</h4>
          <div className="text-xs space-y-1">
            <div>
              <span className="text-slate-400">Head Desk: </span>
              <a
                href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                className="text-amber-400 font-semibold hover:underline"
              >
                {siteConfig.contacts.hotlines[0]}
              </a>
            </div>
            <div>
              <span className="text-slate-400">Yard Mobile: </span>
              <a
                href={`tel:${siteConfig.contacts.hotlines[1].replace(/\s+/g, "")}`}
                className="text-amber-400 font-semibold hover:underline"
              >
                {siteConfig.contacts.hotlines[1]}
              </a>
            </div>
          </div>
          <div className="pt-1 text-[11px] text-slate-500">
            24/7 Breakdown & Mobilization
          </div>
        </div>

        {/* Card 4: Tender & Official Email */}
        <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
            ✉️
          </div>
          <h4 className="font-bold text-white text-sm">Tender Desk & Email</h4>
          <div className="text-xs space-y-1">
            <div>
              <span className="text-slate-400">Tenders: </span>
              <a
                href={`mailto:${siteConfig.contacts.tendersEmail}`}
                className="text-amber-400 font-semibold hover:underline"
              >
                {siteConfig.contacts.tendersEmail}
              </a>
            </div>
            <div>
              <span className="text-slate-400">General: </span>
              <a
                href={`mailto:${siteConfig.contacts.email}`}
                className="text-amber-400 font-semibold hover:underline"
              >
                {siteConfig.contacts.email}
              </a>
            </div>
          </div>
          <div className="pt-1 text-[11px] text-slate-500">
            Response within 24 business hours
          </div>
        </div>
      </div>

      {/* Interactive Contact & Quotation Form */}
      <div>
        <ContactForm />
      </div>
      </div>
    </section>
  );
}
