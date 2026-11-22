"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function QuickEstimator() {
  const [service, setService] = useState("Road Construction (Asphalt / Concrete)");
  const [equipmentOrScale, setEquipmentOrScale] = useState("Heavy Machinery Fleet Required");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("1 - 4 Weeks");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `*New Inquiry - Methum Construction Website*
----------------------------------
*Name:* ${clientName || "Not provided"}
*Phone:* ${clientPhone || "Not provided"}
*Service Required:* ${service}
*Specific Machine/Scale:* ${equipmentOrScale}
*Project Location:* ${location || "Sri Lanka"}
*Duration:* ${duration}
----------------------------------
Please provide an estimated quote and availability.`;

    const url = `https://wa.me/${siteConfig.contacts.whatsapp.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
  };

  const handleFormalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-12 overflow-hidden">
      {/* Ambient Construction Sparks (Section Background Field) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="civil-spark animate-spark-1" style={{ bottom: "5%", left: "8%", width: 6, height: 6 }} />
        <div className="civil-spark animate-spark-2" style={{ bottom: "18%", left: "25%", width: 5, height: 5 }} />
        <div className="civil-spark animate-spark-3" style={{ bottom: "12%", left: "55%", width: 7, height: 7 }} />
        <div className="civil-spark animate-spark-4" style={{ bottom: "8%", left: "78%", width: 4, height: 4 }} />
        <div className="civil-spark animate-spark-5" style={{ bottom: "25%", left: "92%", width: 6, height: 6 }} />
      </div>

      {/* Rapid Estimator Card */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#070b14] border border-amber-500/40 p-8 md:p-12 shadow-2xl relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Ambient Construction Sparks (Inside Estimator Card) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="civil-spark animate-spark-1" style={{ bottom: "8%", left: "12%", width: 5, height: 5 }} />
          <div className="civil-spark animate-spark-2" style={{ bottom: "14%", left: "34%", width: 6, height: 6 }} />
          <div className="civil-spark animate-spark-3" style={{ bottom: "6%", left: "68%", width: 4, height: 4 }} />
          <div className="civil-spark animate-spark-4" style={{ bottom: "22%", left: "82%", width: 5, height: 5 }} />
          <div className="civil-spark animate-spark-5" style={{ bottom: "10%", left: "50%", width: 7, height: 7 }} />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              Tender & Quotation Desk
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Rapid Project Estimation & Equipment Mobilization
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Need a fast Bill of Quantities (BOQ), tender quote, or instant machinery dispatch? Complete the quick fields, and our engineering desk will respond immediately.
            </p>

            <div className="pt-4 space-y-3 text-xs text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">⚡ Instant:</span>
                <span>Immediate WhatsApp Dispatch confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">📋 Formal BOQ:</span>
                <span>Tenders responded within 24 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">📞 Direct Hotline:</span>
                <span>{siteConfig.contacts.hotlines[0]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#070b14]/90 p-6 md:p-8 rounded-2xl border border-slate-800">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-3xl mx-auto border border-emerald-500/30">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received Successfully!</h4>
                <p className="text-slate-300 text-xs">
                  Thank you, <strong className="text-amber-400">{clientName || "Valued Client"}</strong>. Our chief estimating engineer has received your specifications and will reach out via phone/email shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSend} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Required Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                    >
                      <option>Road Construction (Asphalt / Concrete)</option>
                      <option>Building Construction (Turnkey Commercial/Residential)</option>
                      <option>Heavy Equipment Rental (Daily / Monthly)</option>
                      <option>Machinery Purchase</option>
                      <option>Bridge, Drainage & Infrastructure Tenders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Machine / Project Scope
                    </label>
                    <select
                      value={equipmentOrScale}
                      onChange={(e) => setEquipmentOrScale(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                    >
                      <option>Caterpillar 320D (20T Excavator)</option>
                      <option>Sakai 10T Vibratory Road Roller</option>
                      <option>JCB 3DX Super Backhoe</option>
                      <option>Isuzu Giga 10-Wheeler Tipper Fleet</option>
                      <option>Full Asphalt Carpet Overlay Scope</option>
                      <option>Turnkey Multi-Story Commercial Building</option>
                      <option>Other Specialized Heavy Plant</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Project Location / District
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Monaragala, Badalkumbura, Colombo..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Estimated Duration
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                    >
                      <option>1 - 7 Days (Short Term Hire)</option>
                      <option>1 - 4 Weeks</option>
                      <option>1 - 6 Months (Medium Project)</option>
                      <option>6+ Months / Full Turnkey Tender</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kasun Bandara"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 077 123 4567"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#0a0f1d] border border-slate-700 rounded-lg p-2.5 text-slate-200 focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition shadow-lg shadow-emerald-950/50 group"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-white flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span>Direct WhatsApp Quote</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleFormalSubmit}
                    className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl transition"
                  >
                    Submit Formal RFP / BOQ
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
            Client Information
          </span>
          <h3 className="text-2xl font-bold text-white">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-slate-400">
            Everything you need to know about partnering with Methum Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteConfig.faqs.map((faq, fIdx) => (
            <div
              key={fIdx}
              className="bg-[#0a0f1d] border border-slate-800 p-5 rounded-2xl space-y-2"
            >
              <h5 className="font-bold text-white text-sm flex items-center gap-2">
                <span className="text-amber-400">Q:</span> {faq.q}
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
