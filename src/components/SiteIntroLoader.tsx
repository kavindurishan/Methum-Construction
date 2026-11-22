"use client";

import React, { useState, useEffect } from "react";

export default function SiteIntroLoader() {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);
  const [activeSubtext, setActiveSubtext] = useState<string>("CIVIL INFRASTRUCTURE & FLEET");

  // 1. Initial Page Load & Browser Refresh (F5) Trigger
  useEffect(() => {
    setMounted(true);
    setIsActive(true);
    setIsDismissing(false);
    setActiveSubtext("CIVIL INFRASTRUCTURE & FLEET");

    const dismissTimer = setTimeout(() => {
      setIsDismissing(true);
    }, 1400);

    const removeTimer = setTimeout(() => {
      setIsActive(false);
    }, 2000);

    return () => {
      clearTimeout(dismissTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // 2. Tab Navigation Trigger (Listens for header tab navigation events)
  useEffect(() => {
    let dismissT: NodeJS.Timeout;
    let removeT: NodeJS.Timeout;

    const handleTabTransition = (e: Event) => {
      const customEvent = e as CustomEvent<{ section?: string }>;
      const sectionName = customEvent.detail?.section || "OPERATIONS";

      setActiveSubtext(`NAVIGATING // ${sectionName.toUpperCase()}`);
      setIsActive(true);
      setIsDismissing(false);

      // Snappy, cinematic transition for tab navigation
      clearTimeout(dismissT);
      clearTimeout(removeT);

      dismissT = setTimeout(() => {
        setIsDismissing(true);
      }, 750);

      removeT = setTimeout(() => {
        setIsActive(false);
      }, 1250);
    };

    window.addEventListener("trigger-intro-transition", handleTabTransition);
    return () => {
      window.removeEventListener("trigger-intro-transition", handleTabTransition);
      clearTimeout(dismissT);
      clearTimeout(removeT);
    };
  }, []);

  if (!mounted || !isActive) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#070b14] text-white flex flex-col items-center justify-center p-6 select-none transition-all duration-500 ease-out ${
        isDismissing
          ? "opacity-0 blur-lg scale-105 pointer-events-none"
          : "opacity-100 blur-none scale-100 pointer-events-auto"
      }`}
    >
      {/* Background Cinematic Video Asset (Dark Vignette Overlay) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-banner.jpg"
          className="w-full h-full object-cover filter brightness-[0.24] contrast-125 scale-105 transition duration-700"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Multilayer Dark Vignette & Gradient for Pristine Logo Readability */}
        <div className="absolute inset-0 bg-[#070b14]/70 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070b14]/80 to-[#070b14]" />
      </div>

      {/* Background Ambient Neon Amber Glow (Wear Inhouse Style) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[600px] h-[480px] sm:h-[600px] bg-amber-500/18 rounded-full blur-[130px] pointer-events-none transition-all duration-700 ease-out z-0 ${
          isDismissing ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] z-0"
        aria-hidden="true"
      />

      {/* Center: The Signature Animated Methum Logo */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ease-out ${
          isDismissing
            ? "scale-110 blur-md opacity-0"
            : "scale-100 blur-none opacity-100"
        }`}
      >
        {/* Main Logo with Metallic Sheen */}
        <div className="relative overflow-hidden group">
          <img
            src="/logo-white.png"
            alt="Methum Construction"
            className="h-20 sm:h-28 md:h-32 w-auto object-contain filter drop-shadow-[0_0_35px_rgba(245,158,11,0.55)] transition duration-300"
          />
          {/* Metallic Sheen Glare Sweep */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none animate-logo-sheen" />
        </div>

        {/* Futuristic Laser Hairline with Sweep Animation */}
        <div className="w-56 sm:w-72 md:w-80 h-[2px] bg-slate-800 mt-4 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent animate-laser-sweep" />
        </div>

        {/* Dynamic Subtag Indicator (Switches dynamically per tab) */}
        <div className="flex items-center gap-2 mt-3.5 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/30 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-slate-300 uppercase shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="text-amber-400 font-bold tracking-widest">
            {activeSubtext}
          </span>
        </div>
      </div>
    </div>
  );
}
