import React from "react";
import { siteConfig } from "@/data/siteData";

export default function CidaTrustBar() {
  return (
    <section className="bg-gradient-to-r from-[#0a0f1d] via-[#111c35] to-[#0a0f1d] border-b border-amber-500/30 py-5 px-4 sm:px-8 relative shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left: Prominent CIDA Qualification Badge */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shadow-amber-500/20 shrink-0">
            🏛️
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-base sm:text-lg font-black text-white tracking-wide uppercase">
                {siteConfig.company.cidaGrading}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 uppercase tracking-wider">
                Officially Registered
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-0.5">
              Construction Industry Development Authority (CIDA / Formerly ICTAD) • Sri Lanka
            </p>
            <p className="text-[11px] text-amber-400 font-sinhala mt-0.5">
              ශ්‍රී ලංකා ඉදිකිරීම් කර්මාන්ත සංවර්ධන අධිකාරියේ (CIDA/ICTAD) ලියාපදිංචි ප්‍රමුඛ පෙළේ කොන්ත්‍රාත්කරු.
            </p>
          </div>
        </div>

        {/* Right: Verified Accreditations */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-semibold border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-800 w-full lg:w-auto justify-start lg:justify-end">
          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold">✓</span>
            <span>ISO 9001:2015 Quality Certified</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold">✓</span>
            <span>ISO 45001:2018 HSE Safety</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-2 rounded-lg border border-slate-800">
            <span className="text-amber-400 font-bold">✓</span>
            <span>RDA Civil Standards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
