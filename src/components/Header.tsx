"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteData";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/", id: "" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#sectors", id: "sectors" },
    { name: "Machinery", href: "/#machinery", id: "machinery" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Quality & Safety", href: "/#quality", id: "quality" },
    { name: "Contact", href: "/contact", id: "contact" },
  ];

  // Dynamic Route & Scroll-Spy Active Tab Detection
  useEffect(() => {
    if (pathname === "/contact") {
      setActiveTab("Contact");
      return;
    }

    if (pathname === "/") {
      // Check current hash on initial load
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const matched = navItems.find((item) => item.id === hash);
        if (matched) setActiveTab(matched.name);
      } else if (window.scrollY < 200) {
        setActiveTab("Home");
      }

      // Smooth scroll spy on homepage sections
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 160;

        if (window.scrollY < 250) {
          setActiveTab("Home");
          return;
        }

        // Check sections from bottom to top
        const sections = [
          { id: "about", name: "About" },
          { id: "quality", name: "Quality & Safety" },
          { id: "machinery", name: "Machinery" },
          { id: "projects", name: "Projects" },
          { id: "sectors", name: "Services" },
        ];

        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveTab(section.name);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between gap-4">
        
        {/* CLEAN LOGO ON THE FAR LEFT (WEAR INHOUSE ANIMATION STYLE) */}
        <Link href="/" className="flex flex-col items-start shrink-0 group py-1 relative">
          <div className="relative overflow-visible transition-all duration-300 ease-out group-hover:scale-[1.03]">
            {/* Ambient Gold Glow Aura on Hover (Wear Inhouse Style) */}
            <div className="absolute -inset-1.5 bg-amber-500/25 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

            <div className="relative overflow-hidden rounded-md">
              <img
                src="/logo.png"
                alt="Methum Constructions"
                className="h-10 sm:h-12 w-auto object-contain transition duration-200 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              />
              {/* Metallic Sheen Glare Animation */}
              <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-logo-sheen"></div>
            </div>

            {/* Wear Inhouse Pulsing Status Indicator Dot */}
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
          </div>

          {/* Futuristic Laser Hairline with Sweep Animation (Wear Inhouse Style) */}
          <div className="w-full h-[1.5px] bg-gray-200 mt-1 relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent animate-laser-sweep" />
          </div>
        </Link>

        {/* CLEAN MINIMALIST NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`text-[14px] transition duration-200 py-1 border-b-2 font-medium ${
                  isActive
                    ? "font-bold text-gray-950 border-amber-500"
                    : "text-gray-600 hover:text-gray-950 border-transparent hover:border-amber-500"
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
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 text-xs font-bold uppercase tracking-wider transition shadow-sm"
          >
            <span>Get a Quote</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-950 border border-gray-300 rounded-lg bg-gray-50"
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

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-1.5 shadow-lg">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md font-medium text-sm transition ${
                  isActive
                    ? "bg-amber-500/10 text-amber-600 font-bold border-l-4 border-amber-500"
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
              className="w-full text-center py-2.5 bg-amber-500 text-gray-950 rounded-lg font-bold text-xs block uppercase tracking-wider"
            >
              WhatsApp Dispatch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
