import React from "react";
import { siteConfig } from "@/data/siteData";

export default function LeadershipAbout() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12 overflow-hidden">
      {/* Pattern 3: Topographic Elevation Contours & Road Grading Survey Map */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg
          className="w-[125%] h-[125%] text-amber-500/15 animate-topo-contours"
          viewBox="0 0 800 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M50 120 Q 220 30 430 110 T 780 90" />
          <path d="M30 180 Q 240 80 450 170 T 800 150" />
          <path d="M40 240 Q 260 140 470 230 T 790 220" />
          <path d="M20 310 Q 250 200 490 290 T 810 290" />
          <path d="M60 390 Q 280 280 520 360 T 780 380" />
          <circle cx="470" cy="230" r="45" strokeDasharray="3,3" />
          <circle cx="470" cy="230" r="80" strokeDasharray="4,4" />
        </svg>
        <div className="absolute inset-0 bg-radial from-transparent via-[#070b14]/70 to-[#070b14]" />
        <div className="absolute bottom-6 left-10 text-[9px] font-mono text-amber-500/25 tracking-widest hidden md:block">
          SURVEY DATUM: MSL • CONTOUR ELEV: +184.25m
        </div>
      </div>

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

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-base">
                    {siteConfig.leadership.directorName}
                  </h4>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    {siteConfig.leadership.title}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {siteConfig.company.name} • Badalkumbura
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-xl">
                  MC
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
