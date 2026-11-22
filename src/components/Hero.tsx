import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[660px] lg:min-h-[720px] flex items-center border-b border-slate-800 overflow-hidden">
      {/* Background Hero Asset */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="Methum Constructions Hero Infrastructure"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125"
        />
        {/* Multilayer Gradients for clean text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Trust Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>{siteConfig.company.cidaGrading} • {siteConfig.company.businessRegistration}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Engineering Nation's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              Vital Infrastructure
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed drop-shadow-md">
            Specializing in roadway metalling, second-coat bitumen tarring, rigid concrete pavements, institutional facilities, and reliable heavy plant machinery rental and sales.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="/#projects"
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-xl shadow-amber-500/25 transition flex items-center gap-2 group"
            >
              <span>Explore Projects & Scope</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>

            <Link
              href="/#machinery"
              className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700/80 backdrop-blur transition flex items-center gap-2"
            >
              <span>🚜 Machinery Fleet (Rent / Buy)</span>
            </Link>
          </div>

          {/* High-End Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 backdrop-blur-sm bg-slate-950/40 rounded-2xl p-4 mt-6">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-amber-500/40 pl-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
