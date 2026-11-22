import React from "react";
import { siteConfig } from "@/data/siteData";

export default function LeadershipAbout() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Corporate Legacy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Our Heritage & Vision
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            A Decade of Building Sri Lanka's Foundations
          </h2>

          <p className="text-slate-300 text-sm leading-relaxed">
            Founded with a vision to deliver world-class infrastructure and heavy civil solutions, Methum Constructions has grown into a versatile, high-capability contractor. Combining heavy mechanical plant assets with seasoned chartered civil engineers, we take pride in executing landmark road corridors, structural complexes, and turnkey projects.
          </p>

          <p className="text-amber-400 font-sinhala text-xs leading-relaxed font-medium">
            වසර 10කට අධික කාලයක් පුරා මෙරට මහාමාර්ග හා ගොඩනැගිලි ක්ෂේත්‍රයේ ඉහළම ප්‍රමිතියෙන් වැඩ නිමකරමින්, නවීන බර යන්ත්‍රෝපකරණ ඇණියක් සමඟින් දේශීය ආර්ථිකයට ශක්තියක් වීම අපගේ අභිමානයයි.
          </p>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Precision</div>
              <p className="text-[11px] text-slate-400">Strict laboratory testing & tolerances.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Reliability</div>
              <p className="text-[11px] text-slate-400">On-time project delivery milestones.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Self-Reliance</div>
              <p className="text-[11px] text-slate-400">In-house 50+ heavy machinery fleet.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Managing Director's Message */}
        <div className="lg:col-span-6">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#0a0f1d] to-[#070b14] border border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-2xl relative">
            <div className="text-6xl text-amber-500/20 font-serif leading-none absolute top-6 right-8">
              “
            </div>

            <div className="space-y-4 relative z-10">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Message from Managing Director
              </div>

              <blockquote className="text-slate-200 text-sm md:text-base leading-relaxed italic">
                "{siteConfig.leadership.message}"
              </blockquote>

              <blockquote className="text-amber-400/90 font-sinhala text-xs leading-relaxed font-medium">
                "{siteConfig.leadership.sinhalaMessage}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-white text-base">
                    {siteConfig.leadership.directorName}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {siteConfig.leadership.title}
                  </p>
                  <p className="text-[11px] text-amber-500/90 font-sinhala">
                    {siteConfig.leadership.sinhalaTitle}
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
