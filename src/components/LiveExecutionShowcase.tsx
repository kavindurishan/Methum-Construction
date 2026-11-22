"use client";

import React from "react";

interface JobsitePhoto {
  title: string;
  category: string;
  location: string;
  image: string;
  aspect?: string;
}

export default function LiveExecutionShowcase() {
  // Column 1: Roadway Paving & Heavy Excavation
  const col1: JobsitePhoto[] = [
    {
      title: "Second-Coat Bituminous Tarring",
      category: "Roads & Highways",
      location: "Karanda - Medagama Road",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "CAT 320D Deep Trenching & Excavation",
      category: "Plant Operations",
      location: "Badalkumbura Plant Depot",
      image: "https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Drainage Canal Reinforced Concreting",
      category: "Stormwater Drainage",
      location: "Pilisarana Road, Monaragala",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Heavy Highway Asphalt Overlay",
      category: "Provincial Road Works",
      location: "PRDA Uva Corridor",
      image: "/hero-banner.jpg",
    },
  ];

  // Column 2: Structural Civil & Field Supervision
  const col2: JobsitePhoto[] = [
    {
      title: "Retaining Wall & Landslide Stabilization",
      category: "Structural Civil",
      location: "Mariarawa - Ritigahawatta",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Civil Site Survey & Optical Leveling",
      category: "Engineering QA",
      location: "9th Mile Post Buddama",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "10-Wheeler Tipper Aggregate Haulage",
      category: "Fleet Logistics",
      location: "Badalkumbura Quarry Link",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Highway Embankment Metalling",
      category: "Road Foundation",
      location: "Buddama - Baduluwela",
      image: "/showcase.jpg",
    },
  ];

  // Column 3: Institutional Buildings & Heavy Foundations
  const col3: JobsitePhoto[] = [
    {
      title: "District Secretariat Staircase & Cladding",
      category: "Commercial Buildings",
      location: "Monaragala Administrative Complex",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Heavy Piling Rig & Substructure Boring",
      category: "Foundation Works",
      location: "Monaragala District Works",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Hot Asphalt Carpet Paver Crew",
      category: "Highway Surfacing",
      location: "PRDA Provincial Link",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Kataragama Pilgrims Rest Complex Restoration",
      category: "Public Heritage",
      location: "Kataragama Sacred City",
      image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=700&q=80",
    },
  ];

  // Column 4: Soil Compaction & Plant Fleet
  const col4: JobsitePhoto[] = [
    {
      title: "Sakai 10T Vibratory Roller Compaction",
      category: "Machinery Fleet",
      location: "Monaragala Road Project",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Subbase Precision Metalling & Rolling",
      category: "Road Construction",
      location: "Buddama Sector",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Nila Piyasa Sewerage & Manhole Network",
      category: "Underground Infrastructure",
      location: "Monaragala Housing",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Telescopic Mobile Crane Heavy Rigging",
      category: "Specialized Lifting",
      location: "Commercial Site Dispatch",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=700&q=80",
    },
  ];

  // Column 5: Rural & Mountain Express Corridors
  const col5: JobsitePhoto[] = [
    {
      title: "Scenic Uva Mountain Roadway Completion",
      category: "All-Weather Highways",
      location: "Badalkumbura Corridor",
      image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Culvert Headwall Masonry & Drainage",
      category: "Civil Infrastructure",
      location: "Mariarawa Sector",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "CAT Grader Road Leveling & Shaping",
      category: "Heavy Earthworks",
      location: "PRDA Tender Contract",
      image: "/showcase.jpg",
    },
    {
      title: "Quality Control Slump & Cube Strength Testing",
      category: "ISO 9001 Compliance",
      location: "Government Building Site",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
    },
  ];

  // Helper renderer for a single photo card
  const renderCard = (photo: JobsitePhoto, idx: number) => (
    <div
      key={idx}
      className="relative rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 group shadow-lg shrink-0 cursor-pointer"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        <img
          src={photo.image}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108 group-hover:brightness-105"
          loading="lazy"
        />
        {/* Dark subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b17] via-[#060b17]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Top Category Badge */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#070b14]/85 text-amber-400 border border-amber-500/30 uppercase tracking-wider backdrop-blur-md">
            {photo.category}
          </span>
        </div>

        {/* Bottom Title & Location */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5">
          <h4 className="text-white text-xs sm:text-sm font-bold leading-tight group-hover:text-amber-300 transition-colors drop-shadow-md">
            {photo.title}
          </h4>
          <p className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1 font-medium drop-shadow">
            <span className="text-amber-400">📍</span>
            <span>{photo.location}</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-8 overflow-hidden">
      
      {/* Top Header Section (Matching Nawaloka High-Impact Corporate Framing) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            Live Ground Execution
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
            Where our machines and crews <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              do their best work.
            </span>
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Rigs, rollers, expressways, and municipal foundations: the active job
            sites across Monaragala and the Uva province where our civil
            engineers, machine operators, and site supervisors build with
            unyielding precision.
          </p>
          <div className="mt-3 flex items-center gap-3 text-[11px] font-bold text-amber-400">
            <span>✓ CIDA Grade C7</span>
            <span>•</span>
            <span>✓ 100% Verified Ground Work</span>
            <span>•</span>
            <span>✓ PRDA & RDA Specifications</span>
          </div>
        </div>
      </div>

      {/* Infinite Vertical Scrolling Masonry Columns (Nawaloka Floating Effect) */}
      <div className="relative rounded-3xl border border-slate-800/90 bg-[#060b17] overflow-hidden shadow-2xl h-[560px] sm:h-[640px] lg:h-[720px]">
        
        {/* Top Gradient Fade Mask */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#060b17] via-[#060b17]/85 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Bottom Gradient Fade Mask */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#060b17] via-[#060b17]/85 to-transparent z-20"
          aria-hidden="true"
        />

        {/* Ambient Glow Aura in center */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* 5 Vertical Marquee Columns */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 p-3 sm:p-4 h-full marquee-group">
          
          {/* Column 1: Continuous UP */}
          <div className="overflow-hidden h-full">
            <div className="animate-marquee-up-1 flex flex-col gap-3 sm:gap-4">
              {col1.map((photo, i) => renderCard(photo, i))}
              {/* Duplicate for seamless infinite loop */}
              {col1.map((photo, i) => renderCard(photo, i + col1.length))}
            </div>
          </div>

          {/* Column 2: Continuous DOWN */}
          <div className="overflow-hidden h-full">
            <div className="animate-marquee-down-1 flex flex-col gap-3 sm:gap-4">
              {col2.map((photo, i) => renderCard(photo, i))}
              {/* Duplicate for seamless infinite loop */}
              {col2.map((photo, i) => renderCard(photo, i + col2.length))}
            </div>
          </div>

          {/* Column 3: Continuous UP */}
          <div className="overflow-hidden h-full hidden sm:block">
            <div className="animate-marquee-up-2 flex flex-col gap-3 sm:gap-4">
              {col3.map((photo, i) => renderCard(photo, i))}
              {/* Duplicate for seamless infinite loop */}
              {col3.map((photo, i) => renderCard(photo, i + col3.length))}
            </div>
          </div>

          {/* Column 4: Continuous DOWN */}
          <div className="overflow-hidden h-full hidden lg:block">
            <div className="animate-marquee-down-2 flex flex-col gap-3 sm:gap-4">
              {col4.map((photo, i) => renderCard(photo, i))}
              {/* Duplicate for seamless infinite loop */}
              {col4.map((photo, i) => renderCard(photo, i + col4.length))}
            </div>
          </div>

          {/* Column 5: Continuous UP */}
          <div className="overflow-hidden h-full hidden xl:block">
            <div className="animate-marquee-up-3 flex flex-col gap-3 sm:gap-4">
              {col5.map((photo, i) => renderCard(photo, i))}
              {/* Duplicate for seamless infinite loop */}
              {col5.map((photo, i) => renderCard(photo, i + col5.length))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
