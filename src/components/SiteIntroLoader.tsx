"use client";

import React, { useState, useEffect } from "react";

export default function SiteIntroLoader() {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial site load intro: display for 1.6s then smooth blur-dissolve (Wear Inhouse standard)
    const dismissTimer = setTimeout(() => {
      setIsDismissing(true);
    }, 1600);

    const removeTimer = setTimeout(() => {
      setIsActive(false);
    }, 2300);

    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted || !isActive) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#070b14] text-white flex flex-col items-center justify-center p-6 select-none transition-all duration-700 ease-out ${
        isDismissing
          ? "opacity-0 blur-lg scale-105 pointer-events-none"
          : "opacity-100 blur-none scale-100 pointer-events-auto"
      }`}
    >
      {/* Background Ambient Neon Amber Glow (Wear Inhouse Style) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none transition-all duration-700 ease-out ${
          isDismissing ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Center: The Signature Animated Methum Logo */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center px-4 transition-all duration-700 ease-out ${
          isDismissing
            ? "scale-110 blur-md opacity-0"
            : "scale-100 blur-none opacity-100"
        }`}
      >
        {/* Main Logo with Metallic Sheen */}
        <div className="relative overflow-hidden group">
          <img
            src="/logo-white.png"
            alt="Methum Constructions"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain filter drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] transition duration-300"
          />
          {/* Metallic Sheen Glare Sweep */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-logo-sheen" />
        </div>

        {/* Futuristic Laser Hairline with Sweep Animation (Wear Inhouse Style) */}
        <div className="w-56 sm:w-72 md:w-80 h-[2px] bg-slate-800 mt-4 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-laser-sweep" />
        </div>

        {/* Live Subtag Indicator (Wear Inhouse Club Series Style) */}
        <div className="flex items-center gap-2 mt-3.5 text-[10px] sm:text-xs font-mono tracking-[0.25em] text-slate-400 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="text-amber-400 font-bold tracking-widest">
            CIVIL INFRASTRUCTURE & FLEET
          </span>
        </div>
      </div>
    </div>
  );
}
