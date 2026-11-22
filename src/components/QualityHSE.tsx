import React from "react";
import { siteConfig } from "@/data/siteData";

export default function QualityHSE() {
  const pillars = [
    {
      badge: "ISO 9001:2015",
      title: "Quality Assurance & Material Integrity",
      icon: "🛡️",
      desc: "Every cubic meter of asphalt, reinforced concrete, and aggregate subbase is laboratory tested. We maintain certified slump tests, cube compressive strength evaluations (25-40 MPa), and bitumen core density checks exceeding RDA standards.",
    },
    {
      badge: "ISO 45001:2018",
      title: "Zero Harm & Jobsite Safety (HSE)",
      icon: "🦺",
      desc: "Comprehensive safety management across all highway and building sites. Mandatory PPE compliance, daily pre-shift toolbox meetings, crane rigging protocols, and trench shoring ensure zero loss-time injuries.",
    },
    {
      badge: "CIDA Standards",
      title: "National Civil Compliance",
      icon: "📜",
      desc: "Adhering to the Construction Industry Development Authority (CIDA) guidelines. Fully certified to undertake public sector highways, bridge rehabilitation, and commercial structures.",
    },
  ];

  return (
    <section id="quality" className="scroll-mt-28 max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
          Governance & Compliance
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Quality, Health, Safety & Environment (HSE)
        </h2>
        <p className="text-slate-400 text-sm">
          Engineering excellence built on unyielding safety protocols and standardized quality control adhering to ISO and CIDA standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-[#0a0f1d] border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition group shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wide">
                  {pillar.badge}
                </span>
                <span className="text-3xl">{pillar.icon}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {pillar.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
              <span>Audited Annually</span>
              <span className="text-emerald-400 font-bold">100% Verified</span>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Stakeholders Ticker */}
      <div className="bg-[#0b1120] border border-slate-800 rounded-2xl p-6 space-y-3">
        <div className="text-[11px] text-slate-400 uppercase font-bold text-center tracking-wider">
          Trusted in Collaboration with Leading Institutions & Authorities
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs font-semibold text-slate-300">
          {siteConfig.partners.map((partner, pIdx) => (
            <div
              key={pIdx}
              className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800/80 hover:text-amber-400 hover:border-slate-700 transition"
            >
              🏛️ {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
