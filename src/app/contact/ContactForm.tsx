"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    division: "Heavy Machinery Rental",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Contact Request - Methum Construction*
---------------------------------------
*Name:* ${formData.name || "Client"}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Company:* ${formData.company || "Individual"}
*Division:* ${formData.division}
*Message:* ${formData.message || "Requesting quotation/availability."}
---------------------------------------`;

    const url = `https://wa.me/${siteConfig.contacts.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      
      {/* Left Form Container */}
      <div className="lg:col-span-7 bg-[#0c1322] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
            Send an Inquiry
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Submit Your Project or Machinery Request
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Fill in the details below. Our chief civil engineers and dispatch desk will respond promptly.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 bg-slate-900/60 rounded-2xl border border-emerald-500/30">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto border border-emerald-500/40">
              ✓
            </div>
            <h4 className="text-xl font-bold text-white">Thank You, {formData.name || "Valued Client"}!</h4>
            <p className="text-slate-300 text-xs max-w-md mx-auto leading-relaxed">
              Your inquiry has been submitted directly to the Methum Construction estimation desk. We will reach out via phone or email within 24 business hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  company: "",
                  division: "Heavy Machinery Rental",
                  message: "",
                });
              }}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kasun Bandara"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Contact Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 077 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-400 transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. client@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Private / Corporate / Authority"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Primary Division / Requirement *
              </label>
              <select
                value={formData.division}
                onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-400 transition"
              >
                <option>Heavy Machinery Rental (Daily / Monthly)</option>
                <option>Machinery Purchase & Inspection</option>
                <option>Road Construction (Asphalt Paving / Concrete / Metalling)</option>
                <option>Building Construction (Commercial / Residential)</option>
                <option>Retaining Walls, Drainage & Bridges</option>
                <option>Tender BOQ & Subcontracting Inquiries</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Project Scope / Message *
              </label>
              <textarea
                rows={4}
                placeholder="Describe your location, project timeline, required machine specs or tender requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#070b14] border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:border-amber-400 transition"
                required
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition shadow-lg shadow-emerald-950/40 group"
              >
                <WhatsAppIcon className="w-5 h-5 text-white flex-shrink-0 transition-transform group-hover:scale-110" />
                <span>Direct WhatsApp Message</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition uppercase tracking-wider"
              >
                Submit Official Inquiry
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Operational Facilities & Trust Info */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Office & Plant Locations Box */}
        <div className="bg-[#0c1322] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <span>📍</span> Operational Yards & Logistics
          </h4>

          <div className="space-y-4 text-xs">
            <div className="bg-[#070b14] p-4 rounded-xl border border-slate-800">
              <div className="text-amber-400 font-bold text-sm">Head Office (Badalkumbura)</div>
              <p className="text-slate-300 mt-1">
                {siteConfig.contacts.headOffice.address}
              </p>
              <span className="text-[10px] text-slate-500 mt-1 block">
                Executive & Corporate Tender Management
              </span>
            </div>

            <div className="bg-[#070b14] p-4 rounded-xl border border-slate-800">
              <div className="text-amber-400 font-bold text-sm">Plant & Heavy Machinery Yard</div>
              <p className="text-slate-300 mt-1">
                {siteConfig.contacts.machineryYard.address}
              </p>
              <span className="text-[10px] text-emerald-400 mt-1 block font-semibold">
                Available for Live Machinery Inspections & Dispatch
              </span>
            </div>
          </div>
        </div>

        {/* 24/7 Breakdown & Mobilization Box */}
        <div className="bg-gradient-to-br from-amber-500/10 via-[#0c1322] to-[#070b14] border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xl">
            ⚡
          </div>
          <h4 className="text-base font-bold text-white">
            Need Immediate Heavy Equipment on Site?
          </h4>
          <p className="text-slate-300 text-xs leading-relaxed">
            Our heavy low-bed transporters can mobilize excavators, rollers, and graders to your project site across all 9 provinces within hours.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.contacts.hotlines[1].replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition uppercase tracking-wider"
            >
              <span>Call Dispatch: {siteConfig.contacts.hotlines[1]}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
