"use client";

import React, { useState } from "react";
import { siteConfig, MachineryItem } from "@/data/siteData";

export default function MachineryFleet() {
  const [filterType, setFilterType] = useState<"all" | "rent" | "sale">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");

  const categories = ["All", "Excavator", "Roller", "Backhoe", "Truck", "Specialized"];

  const filteredFleet = siteConfig.machinery.filter((item) => {
    // Filter by rent/sale
    const matchesType =
      filterType === "all" ||
      item.type === filterType ||
      item.type === "both";

    // Filter by category
    const matchesCategory =
      categoryFilter === "All" || item.category === categoryFilter;

    return matchesType && matchesCategory;
  });

  return (
    <section id="machinery" className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-500">
            Plant & Machinery Division
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Certified Equipment Fleet (Rent & Sale)
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Browse our commercial inventory ready for immediate mobilization across the Uva province and nationwide with safety-certified, experienced operators.
          </p>
        </div>

        {/* Rent vs Sale Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#0b1120] rounded-xl border border-slate-800 text-xs font-semibold self-start md:self-end">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-lg transition font-bold ${
              filterType === "all"
                ? "bg-amber-500 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            All Fleet
          </button>
          <button
            onClick={() => setFilterType("rent")}
            className={`px-4 py-2 rounded-lg transition font-bold ${
              filterType === "rent"
                ? "bg-amber-500 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            For Rent
          </button>
          <button
            onClick={() => setFilterType("sale")}
            className={`px-4 py-2 rounded-lg transition font-bold ${
              filterType === "sale"
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:text-white"
            }`}
          >
            For Sale
          </button>
        </div>
      </div>

      {/* Category Sub-Filters */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-500 font-medium mr-2">Filter by Category:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition ${
              categoryFilter === cat
                ? "bg-slate-800 border-amber-500 text-amber-400"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Machinery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFleet.map((machine) => {
          const isSale = machine.type === "sale";
          const isBoth = machine.type === "both";

          return (
            <div
              key={machine.id}
              className={`bg-[#0a0f1d] rounded-2xl p-5 flex flex-col justify-between space-y-4 transition group shadow-xl border ${
                isSale
                  ? "border-blue-900/40 hover:border-blue-500/60"
                  : "border-slate-800 hover:border-amber-500/50"
              }`}
            >
              <div>
                {/* Visual Icon Container */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900/90 aspect-video flex items-center justify-center text-5xl border border-slate-800 group-hover:scale-102 transition duration-300">
                  <span>{machine.icon}</span>

                  {/* Availability Badge */}
                  <span
                    className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold border ${
                      machine.availability === "Available"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                    }`}
                  >
                    {machine.availability}
                  </span>

                  {/* Rent / Sale Tag */}
                  <span
                    className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded text-[10px] font-black uppercase ${
                      isSale
                        ? "bg-blue-600 text-white"
                        : isBoth
                        ? "bg-gradient-to-r from-amber-500 to-blue-600 text-white"
                        : "bg-amber-500 text-slate-950"
                    }`}
                  >
                    {isSale ? "FOR SALE" : isBoth ? "RENT / SALE" : "FOR RENT"}
                  </span>
                </div>

                {/* Details */}
                <div className="mt-4">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                    {machine.category} • {machine.badge}
                  </span>
                  <h4 className="font-bold text-white text-base mt-0.5 group-hover:text-amber-400 transition">
                    {machine.name}
                  </h4>
                </div>

                {/* Tech Specs Table */}
                <div className="mt-3 space-y-1.5 text-[11px] text-slate-400 bg-slate-900/70 p-3 rounded-xl border border-slate-800/80">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Capacity/Weight:</span>
                    <span className="text-white font-semibold">{machine.specs.weightOrCap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Engine/Power:</span>
                    <span className="text-white font-semibold">{machine.specs.engine}</span>
                  </div>
                  {machine.specs.modelYear && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Model Year:</span>
                      <span className="text-amber-400 font-semibold">{machine.specs.modelYear}</span>
                    </div>
                  )}
                  {machine.specs.hoursUsed && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Hours Meter:</span>
                      <span className="text-white font-semibold">{machine.specs.hoursUsed}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Operator:</span>
                    <span className="text-emerald-400 font-semibold">{machine.specs.operator}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2">
                <div>
                  <span className="text-[10px] text-slate-500">Terms</span>
                  <p className="font-bold text-amber-400 text-xs">
                    {machine.rateOrPrice}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `Hello Methum Constructions, I am inquiring about the ${machine.name} for ${
                      isSale ? "purchase" : "rental"
                    }. Please share rates and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3.5 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5 shadow ${
                    isSale
                      ? "bg-blue-600 hover:bg-blue-500 text-white"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white"
                  }`}
                >
                  <span>💬</span>
                  <span>{isSale ? "Inquire" : "Dispatch"}</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fleet Yard Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-[#0b1120] border border-slate-800 p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-2xl font-bold shrink-0">
            📍
          </div>
          <div>
            <div className="text-white font-bold text-sm">Machinery Yard & Operations Depot</div>
            <p className="text-slate-400 mt-0.5">
              Address: <strong className="text-slate-200">{siteConfig.contacts.machineryYard.address}</strong>
            </p>
            <p className="text-slate-500 text-[11px] mt-0.5">
              Available for live equipment inspection, trial runs, and transport mobilization.
            </p>
          </div>
        </div>

        <a
          href={`tel:${siteConfig.contacts.hotlines[1].replace(/\s+/g, "")}`}
          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition whitespace-nowrap"
        >
          Call Dispatch: {siteConfig.contacts.hotlines[1]}
        </a>
      </div>
    </section>
  );
}
