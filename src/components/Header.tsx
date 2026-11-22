"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#sectors" },
    { name: "Machinery", href: "#machinery" },
    { name: "Projects", href: "#projects" },
    { name: "Quality & Safety", href: "#quality" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 sm:h-26 flex items-center justify-between gap-6">
        
        {/* ENLARGED LOGO WITH METALLIC SHEEN ANIMATION */}
        <Link href="/" className="flex items-center shrink-0 group py-1">
          <div className="relative overflow-hidden rounded-xl p-1 transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-md">
            
            {/* The Logo Image - Sized prominently so 'Methum construction' text is crisp & clear */}
            <img
              src="/logo.png"
              alt="Methum construction"
              className="h-16 sm:h-20 lg:h-22 w-auto object-contain transition duration-300"
            />

            {/* Continuous Metallic Light Glare / Sheen Sweep Animation */}
            <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none animate-logo-sheen"></div>
            
            {/* Subtle Amber Glow on Hover */}
            <div className="absolute inset-0 rounded-xl bg-amber-500/0 group-hover:bg-amber-500/5 transition duration-300 pointer-events-none"></div>
          </div>
        </Link>

        {/* CLEAN MINIMALIST NAVIGATION (NAWALOKA EXACT STYLE) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveTab(item.name)}
                className={`text-[15px] transition duration-200 py-1 border-b-2 font-medium ${
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

        {/* RIGHT SIDE CONTACT QUICK LINK & MOBILE HAMBURGER */}
        <div className="flex items-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.contacts.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 text-xs font-black uppercase tracking-wider transition shadow-sm hover:shadow-md"
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
              className="w-6 h-6"
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

      {/* Clean Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveTab(item.name);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-gray-50 rounded-md font-medium text-sm"
            >
              {item.name}
            </Link>
          ))}
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
