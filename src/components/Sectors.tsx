import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Sectors() {
  return (
    <section id="sectors" className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-10 overflow-hidden">
      {/* Pattern 2: Dynamic CAD Blueprint Grid & Engineering Crosshairs */}
      <div className="absolute inset-0 z-0 bg-cad-grid animate-grid-drift opacity-70 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b14] via-transparent to-[#070b14]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070b14]/80 to-[#070b14]" />
        {/* Subtle Engineering HUD Watermarks */}
        <div className="absolute top-4 right-8 text-[9px] font-mono text-amber-500/30 tracking-wider select-none hidden md:block">
          CAD SPEC: RDA/CIDA-C7 • GRID REF 081.2294° E
        </div>
      </div>

      <div className="relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-500">
            Engineering Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Core Operational Sectors
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl leading-relaxed">
            From regional road metalling and tarring contracts to institutional building infrastructure and heavy plant machinery hire, Methum Construction delivers end-to-end execution.
          </p>
        </div>

        <Link
          href="/#estimator"
          className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition self-start md:self-end"
        >
          <span>Request Technical Scope & BOQ</span>
          <span>→</span>
        </Link>
      </div>

      {/* 3 Core Divisions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {siteConfig.divisions.map((division) => {
          const isMachinery = division.id === "machinery";

          return (
            <div
              key={division.id}
              className={`rounded-2xl p-6 transition duration-300 flex flex-col justify-between group shadow-xl ${
                isMachinery
                  ? "bg-gradient-to-b from-[#111c35] via-[#0f172a] to-[#0a0f1d] border-2 border-amber-500/50 hover:border-amber-400 shadow-amber-500/10 relative"
                  : "bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] border border-slate-800 hover:border-amber-500/40"
              }`}
            >
              {isMachinery && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow">
                  Commercial Fleet Division
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                    {isMachinery ? "Plant & Equipment" : "Civil Works"}
                  </span>
                  <span className="text-3xl">{division.icon}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                    {division.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {division.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 font-medium">
                  {division.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                {isMachinery ? (
                  <Link
                    href="/#machinery"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black text-center transition block shadow-lg shadow-amber-500/20"
                  >
                    Access Machinery Fleet (Rent / Sale) →
                  </Link>
                ) : (
                  <Link
                    href="/#projects"
                    className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700/80 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 text-slate-200 text-xs font-bold text-center transition block"
                  >
                    View Project Case Studies →
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
