import React from "react";
import { siteConfig } from "@/data/siteData";

export default function LeadershipAbout() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12 overflow-hidden">
      {/* Subtle Ambient Radial Glow (Static) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Corporate Legacy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Our Experience & Vision
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Over a Decade of Solid Civil & Infrastructure Experience
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            Registered officially as Methum Construction, our operations represent more than 10 years of active field experience in civil road contracting, municipal drainage systems, and government building construction across Monaragala and the Uva province.
          </p>

          <p className="text-slate-400 text-xs leading-relaxed">
            From executing provincial road metalling and second-coat bitumen tarring to upgrading District Secretariat facilities and maintaining an active heavy plant machinery fleet, we deliver high-reliability civil infrastructure conforming to national standards.
          </p>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Workmanship</div>
              <p className="text-[11px] text-slate-400">Strict adherence to RDA & CIDA civil specs.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Reliability</div>
              <p className="text-[11px] text-slate-400">Proven track record of 100% on-time delivery.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Equipment</div>
              <p className="text-[11px] text-slate-400">In-house plant fleet ready for deployment.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Founder's Message */}
        <div className="lg:col-span-6">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#0a0f1d] to-[#070b14] border border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <div className="text-6xl text-amber-500/20 font-serif leading-none absolute top-6 right-8">
              “
            </div>

            <div className="space-y-4 relative z-10">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Message from the Founder
              </div>

              <blockquote className="text-slate-200 text-sm md:text-base leading-relaxed italic">
                "{siteConfig.leadership.message}"
              </blockquote>

              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-white text-base sm:text-lg">
                    {siteConfig.leadership.directorName}
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-400 font-bold mt-0.5">
                    {siteConfig.leadership.title}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {siteConfig.company.name} • Badalkumbura
                  </p>
                </div>

                {/* Owner Executive Portrait */}
                <div className="relative shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-xl shadow-amber-500/20 bg-slate-900 ring-4 ring-amber-500/10">
                    <img
                      src={siteConfig.leadership.image}
                      alt={`${siteConfig.leadership.directorName} - Founder & Proprietor`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-amber-500 text-slate-950 font-black text-[9px] uppercase tracking-wider shadow border border-slate-900">
                    FOUNDER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
