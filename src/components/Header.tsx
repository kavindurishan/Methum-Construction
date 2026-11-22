"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const isClickingRef = useRef(false);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Logical, sequential order matching the actual flow of the website
  const navItems = [
    { name: "Home", href: "/", id: "" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#sectors", id: "sectors" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Machinery", href: "/#machinery", id: "machinery" },
    { name: "Quality & Safety", href: "/#quality", id: "quality" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  // Robust Route & Scroll-Spy Active Tab Detection (BoundingClientRect + Hash + Click Lock)
  useEffect(() => {
    if (pathname === "/contact") {
      setActiveTab("Contact");
      return;
    }

    const updateActiveFromHash = () => {
      if (typeof window === "undefined") return false;
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const matched = navItems.find((item) => item.id === hash);
        if (matched) {
          setActiveTab(matched.name);
          return true;
        }
      }
      return false;
    };

    // Check hash on initial load
    updateActiveFromHash();

    // Section list from bottom to top for accurate threshold detection
    const sectionOrder = [
      { id: "about", name: "About" },
      { id: "sectors", name: "Services" },
      { id: "projects", name: "Projects" },
      { id: "machinery", name: "Machinery" },
      { id: "quality", name: "Quality & Safety" },
      { id: "contact", name: "Contact" },
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // If user recently clicked a nav tab, let the click handler control activeTab during scroll animation
      if (isClickingRef.current) return;

      // 1. Top of page
      if (window.scrollY < 200) {
        setActiveTab("Home");
        return;
      }

      // 2. Bottom of page (User scrolled to footer or bottom contact)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveTab("Contact");
        return;
      }

      // 3. Section in viewport check (top-down from bottom of page)
      const headerThreshold = 180;
      let detectedSection = "";

      for (let i = sectionOrder.length - 1; i >= 0; i--) {
        const section = sectionOrder[i];
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerThreshold) {
            detectedSection = section.name;
            break;
          }
        }
      }

      if (detectedSection) {
        setActiveTab(detectedSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", updateActiveFromHash);

    // Initial check in case user refreshed mid-page
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateActiveFromHash);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    };
  }, [pathname]);

  // Handle Navigation Click with Instant Tab Activation & Cinematic Transition
  const handleNavClick = (itemName: string) => {
    setActiveTab(itemName);
    setMobileMenuOpen(false);

    // Lock scroll-spy for 1000ms while browser executes smooth scroll to section
    isClickingRef.current = true;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      isClickingRef.current = false;
    }, 1000);

    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("trigger-intro-transition", {
          detail: { section: itemName },
        })
      );
    }
  };

  return (
    <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
      {/* Modern Floating Island Capsule Container */}
      <div
        className={`w-full transition-all duration-300 rounded-2xl sm:rounded-full border px-4 sm:px-6 h-16 sm:h-[68px] flex items-center justify-between gap-4 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-2xl shadow-slate-950/15"
            : "bg-white/90 backdrop-blur-lg border-slate-200/80 shadow-lg shadow-slate-950/5"
        }`}
      >
        {/* CLEAN LOGO ON THE FAR LEFT */}
        <Link
          href="/"
          onClick={() => handleNavClick("Home")}
          className="flex flex-col items-start shrink-0 group py-1 relative"
        >
          <div className="relative overflow-visible transition-all duration-300 ease-out group-hover:scale-[1.03]">
            {/* Ambient Gold Glow Aura on Hover */}
            <div className="absolute -inset-1.5 bg-amber-500/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

            <div className="relative overflow-hidden rounded-md">
              <img
                src="/logo.png"
                alt="Methum Construction"
                className="h-9 sm:h-11 w-auto object-contain transition duration-200 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              />
              {/* Metallic Sheen Glare Animation */}
              <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-logo-sheen"></div>
            </div>

            {/* Pulsing Status Indicator Dot */}
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          </div>

          {/* Futuristic Laser Hairline with Sweep Animation */}
          <div className="w-full h-[1.5px] bg-gray-200 mt-1 relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-laser-sweep" />
          </div>
        </Link>

        {/* LOGICAL, STREAMLINED NAVIGATION (CENTERED PILLS) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`text-[13px] xl:text-[14px] transition-all duration-200 px-3.5 py-1.5 rounded-full font-medium ${
                  isActive
                    ? "font-bold text-slate-950 bg-amber-500/20 border border-amber-500/60 shadow-sm"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 border border-transparent"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE ACTION BUTTONS */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider transition shadow-sm hover:shadow-md"
          >
            <span>Get a Quote</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-950 border border-gray-300 rounded-xl bg-gray-50/80 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Modern Floating Mobile Dropdown Capsule */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-2xl px-4 py-3.5 space-y-1.5 shadow-2xl transition-all duration-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`block px-3 py-2 rounded-xl font-medium text-sm transition ${
                  isActive
                    ? "bg-amber-500/15 text-slate-950 font-bold border-l-4 border-amber-500"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-gray-100">
            <a
              href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-amber-500 text-gray-950 rounded-xl font-bold text-xs block uppercase tracking-wider"
            >
              WhatsApp Dispatch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
