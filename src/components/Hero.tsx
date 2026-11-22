"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

interface HeroVideoClip {
  id: string;
  src: string;
  label: string;
  tag: string;
  title: string;
  desc: string;
}

const HERO_PLAYLIST: HeroVideoClip[] = [
  {
    id: "clip-excavator",
    src: "/hero-video-1.mp4",
    label: "Excavator Earthworks",
    tag: "EARTHWORKS & TRENCHING",
    title: "Heavy Excavator Precision Digging",
    desc: "Site preparation, foundation excavation & slope stabilization",
  },
  {
    id: "clip-infrastructure",
    src: "/hero-video-2.mp4",
    label: "Civil Operations",
    tag: "CIVIL INFRASTRUCTURE",
    title: "Civil Engineering Site Operations",
    desc: "Commercial roadway subgrade & plant mobilization",
  },
  {
    id: "clip-paving",
    src: "/hero-video-3.mp4",
    label: "Highway Paving",
    tag: "BITUMEN & ASPHALT",
    title: "Highway Asphalt Metalling & Compaction",
    desc: "Single & second-coat tarring with heavy vibratory compaction",
  },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Advance to next video when the currently playing video ends
  const handleVideoEnded = (endedIdx: number) => {
    if (endedIdx === currentIdx) {
      setCurrentIdx((prev) => (prev + 1) % HERO_PLAYLIST.length);
    }
  };

  // Seamless crossfade and autoplay transition
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIdx];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled gracefully if browser policy blocks instant autoplay
        });
      }
    }

    // Pause inactive videos after crossfade completes (1000ms) to conserve GPU/CPU
    const pauseTimer = setTimeout(() => {
      videoRefs.current.forEach((vid, idx) => {
        if (idx !== currentIdx && vid) {
          vid.pause();
        }
      });
    }, 1000);

    return () => clearTimeout(pauseTimer);
  }, [currentIdx]);

  return (
    <section className="relative min-h-[660px] lg:min-h-[740px] flex items-center border-b border-slate-800 overflow-hidden">
      {/* Pattern 1: Hero Cinematic Multi-Video Sequential Playlist */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_PLAYLIST.map((clip, index) => {
          const isActive = currentIdx === index;
          return (
            <video
              key={clip.id}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              autoPlay={index === 0}
              muted
              playsInline
              poster="/hero-banner.jpg"
              preload="auto"
              onEnded={() => handleVideoEnded(index)}
              className={`absolute inset-0 w-full h-full object-cover object-right sm:object-[75%_center] lg:object-[82%_center] filter brightness-[0.72] contrast-[1.12] saturate-[1.15] transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
              }`}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
          );
        })}

        {/* Fallback Static Image if Video Cannot Load */}
        <img
          src="/hero-banner.jpg"
          alt="Methum Construction Hero Infrastructure"
          className="w-full h-full object-cover object-right filter brightness-[0.4] contrast-125 -z-20 pointer-events-none absolute inset-0"
        />

        {/* Multilayer Gradients: Left-side dark mask guarantees 100% text readability, right side stays vivid and unobstructed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 via-35% md:via-42% to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent pointer-events-none z-[1]" />
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070b14]/85 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* Ambient Site Scan Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent h-12 w-full animate-pulse pointer-events-none z-[1]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24 w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="max-w-2xl xl:max-w-3xl space-y-6">
          
          {/* Trust Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>{siteConfig.company.cidaGrading} • {siteConfig.company.businessRegistration}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-lg">
            Engineering Nation's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              Vital Infrastructure
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed drop-shadow-md">
            Specializing in roadway metalling, second-coat bitumen tarring, rigid concrete pavements, institutional facilities, and reliable heavy plant machinery rental and sales.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href="/#projects"
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-xl shadow-amber-500/25 transition flex items-center gap-2 group"
            >
              <span>Explore Projects & Scope</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>

            <Link
              href="/#machinery"
              className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700/80 backdrop-blur transition flex items-center gap-2"
            >
              <span>🚜 Machinery Fleet (Rent / Buy)</span>
            </Link>
          </div>

          {/* High-End Stats Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80 backdrop-blur-sm bg-slate-950/40 rounded-2xl p-4 mt-6">
            {siteConfig.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-amber-500/40 pl-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile / Tablet Video Selector */}
          <div className="flex lg:hidden items-center justify-between gap-2 pt-2 px-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-amber-400 font-bold">{HERO_PLAYLIST[currentIdx].label}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {HERO_PLAYLIST.map((clip, idx) => (
                <button
                  key={clip.id}
                  onClick={() => setCurrentIdx(idx)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all ${
                    currentIdx === idx
                      ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30"
                      : "bg-slate-900/80 text-slate-400 border border-slate-800"
                  }`}
                  aria-label={`Jump to ${clip.label}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right-Side Cinematic Video Reel HUD Controller (Desktop) */}
        <div className="hidden lg:flex flex-col items-end gap-3 self-end pb-4">
          {/* Active Live Tag */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-amber-500/40 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-200 uppercase">
              {HERO_PLAYLIST[currentIdx].tag}
            </span>
            <span className="text-[10px] font-mono text-amber-400 font-bold ml-1">
              • 0{currentIdx + 1} / 0{HERO_PLAYLIST.length}
            </span>
          </div>

          {/* Interactive Playlist Switcher */}
          <div className="p-2.5 rounded-2xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md shadow-2xl space-y-1.5 w-64">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 pt-1 flex justify-between items-center">
              <span>HEAVY FLEET REEL</span>
              <span className="text-amber-400/90 font-bold">HD VIDEO</span>
            </div>

            <div className="space-y-1 pt-1">
              {HERO_PLAYLIST.map((clip, idx) => {
                const isSelected = currentIdx === idx;
                return (
                  <button
                    key={clip.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between group ${
                      isSelected
                        ? "bg-amber-500/15 border border-amber-500/50 text-white font-bold shadow-sm"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          isSelected ? "text-amber-400" : "text-slate-500 group-hover:text-slate-300"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="text-xs truncate">{clip.label}</span>
                    </div>
                    {isSelected ? (
                      <span className="flex h-2 w-2 relative shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-600 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition shrink-0">
                        ▶
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active clip mini description */}
            <div className="px-2 pt-1 border-t border-slate-800/70 text-[10px] text-slate-400 truncate">
              {HERO_PLAYLIST[currentIdx].desc}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
