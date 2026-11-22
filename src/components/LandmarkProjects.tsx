"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function LandmarkProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Roads & Highways", "Commercial Buildings", "Infrastructure"];

  const filteredProjects =
    activeCategory === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-28 max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12">
      
      {/* Featured Civil Engineering Showcase Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Container */}
          <div className="relative min-h-[360px] lg:min-h-[480px]">
            <img
              src="/showcase.jpg"
              alt="Methum Construction Civil Infrastructure"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-[#0f172a]/60 to-[#0f172a]"></div>
          </div>

          {/* Content Box */}
          <div className="p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                Proven Track Record
              </div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                High-Durability Highways, Public Infrastructure & Commercial Facilities
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                From high-specification road metalling, asphalt second-coat tarring, and concrete pavements to institutional complexes, structural cladding, and deep drainage works, Methum Construction delivers civil engineering excellence across the Uva and national corridors.
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <div className="text-slate-400">Road Engineering</div>
                  <div className="font-bold text-white mt-0.5">Metalling, Tarring & Concrete</div>
                </div>
                <div>
                  <div className="text-slate-400">Quality Standard</div>
                  <div className="font-bold text-white mt-0.5">RDA / CIDA Compliant</div>
                </div>
                <div>
                  <div className="text-slate-400">Institutional Projects</div>
                  <div className="font-bold text-white mt-0.5">District Secretariats & Sacred Cities</div>
                </div>
                <div>
                  <div className="text-slate-400">Project Delivery</div>
                  <div className="font-bold text-emerald-400 mt-0.5">100% On-Time Completion</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#estimator"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition uppercase tracking-wider"
              >
                Request Project Quotation
              </Link>
              <a
                href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
              >
                Call Project Engineering Desk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Gallery Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Contract Portfolio
            </div>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Featured Landmark Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Explore our completed government tenders, provincial road contracts, and institutional building developments.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0b1120] rounded-xl border border-slate-800 text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-lg transition font-bold ${
                  activeCategory === cat
                    ? "bg-amber-500 text-slate-950"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a0f1d] border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      project.status === "Completed"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }`}
                  >
                    {project.status} ({project.year})
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition leading-snug">
                    {project.title}
                  </h4>
                </div>

                <div className="text-xs text-slate-400 space-y-1 bg-slate-900/50 p-3 rounded-xl border border-slate-800/60">
                  <div>
                    <strong className="text-slate-300">Client:</strong> {project.client}
                  </div>
                  <div>
                    <strong className="text-slate-300">Location:</strong> {project.location}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.scope}
                </p>

                {/* Highlights */}
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 space-y-1 text-[11px] text-slate-300">
                  {project.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold">✓</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">
                  Verified Civil Contract
                </span>
                <Link
                  href="#estimator"
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1"
                >
                  Inquire Scope →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
