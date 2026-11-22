"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#sectors" },
    { name: "Machinery", href: "/#machinery" },
    { name: "Projects", href: "/#projects" },
    { name: "Quality & Safety", href: "/#quality" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        
        {/* CLEAN LOGO ON THE FAR LEFT (NO EMPTY PADDING, SHARP & CRISP) */}
        <Link href="/" className="flex items-center shrink-0 group py-1">
          <div className="relative overflow-hidden transition-all duration-300 ease-out group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Methum construction"
              className="h-11 sm:h-13 w-auto object-contain transition duration-200"
            />
            {/* Metallic Sheen Glare Animation */}
            <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none animate-logo-sheen"></div>
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
