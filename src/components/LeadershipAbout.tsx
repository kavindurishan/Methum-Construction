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

              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <span>★</span>
                    <span>Executive Leadership</span>
                  </div>
                  <h4 className="font-extrabold text-white text-lg sm:text-xl tracking-tight">
                    {siteConfig.leadership.directorName}
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-400 font-bold">
                    {siteConfig.leadership.title}
                  </p>
                  <p className="text-xs text-slate-400">
                    {siteConfig.company.name} • Badalkumbura, Monaragala
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {siteConfig.company.cidaGrading} • {siteConfig.company.businessRegistration}
                  </p>
                </div>

                {/* Owner Executive Portrait - Enlarged with Face Focus */}
                <div className="relative shrink-0 self-start sm:self-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-amber-500/70 shadow-2xl shadow-amber-500/25 bg-slate-900 ring-4 ring-amber-500/15 group">
                    <img
                      src={siteConfig.leadership.image}
                      alt={`${siteConfig.leadership.directorName} - Founder & Proprietor`}
                      className="w-full h-full object-cover group-hover:scale-[1.45] transition duration-500"
                      style={{ transform: "scale(1.36)", transformOrigin: "50% 20%" }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-lg border border-slate-900 flex items-center gap-1">
                    <span>✓</span>
                    <span>FOUNDER</span>
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
