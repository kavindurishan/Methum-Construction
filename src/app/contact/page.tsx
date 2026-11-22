import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/siteData";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.company.name} - Tender Desk & Heavy Fleet`,
  description: `Contact Methum Constructions head office, central plant yard, tender desk, and 24/7 machinery dispatch hotlines across Sri Lanka.`,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-100">
      <Header />

      <main className="flex-grow">
        
        {/* Contact Hero Banner */}
        <section className="bg-gradient-to-b from-[#0b1220] to-[#070b14] border-b border-slate-800 pt-28 pb-14 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-4 text-center sm:text-left">
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-slate-400">
              <Link href="/" className="hover:text-amber-400 transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-amber-400 font-semibold">Contact Us</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get in Touch with <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                Methum Constructions
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Whether you are preparing a government tender, require heavy civil road & building contracting, or need immediate machinery mobilization, our engineering directors are at your service.
            </p>
          </div>
        </section>

        {/* 4 Primary Contact Channel Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Head Office */}
            <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
                🏢
              </div>
              <h4 className="font-bold text-white text-sm">Corporate Head Office</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {siteConfig.contacts.headOffice.address}
              </p>
              <div className="pt-2 text-[11px] text-amber-400 font-semibold">
                Monday - Saturday: 8:00 AM - 6:00 PM
              </div>
            </div>

            {/* Card 2: Plant & Machinery Yard */}
            <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
                🚜
              </div>
              <h4 className="font-bold text-white text-sm">Central Plant & Yard</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {siteConfig.contacts.machineryYard.address}
              </p>
              <div className="pt-2 text-[11px] text-emerald-400 font-semibold">
                Machinery Inspections Welcome
              </div>
            </div>

            {/* Card 3: Hotlines & Dispatch */}
            <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
                📞
              </div>
              <h4 className="font-bold text-white text-sm">Direct Phone Hotlines</h4>
              <div className="text-xs space-y-1">
                <div>
                  <span className="text-slate-400">Head Desk: </span>
                  <a
                    href={`tel:${siteConfig.contacts.hotlines[0].replace(/\s+/g, "")}`}
                    className="text-amber-400 font-semibold hover:underline"
                  >
                    {siteConfig.contacts.hotlines[0]}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">Yard Mobile: </span>
                  <a
                    href={`tel:${siteConfig.contacts.hotlines[1].replace(/\s+/g, "")}`}
                    className="text-amber-400 font-semibold hover:underline"
                  >
                    {siteConfig.contacts.hotlines[1]}
                  </a>
                </div>
              </div>
              <div className="pt-1 text-[11px] text-slate-500">
                24/7 Breakdown & Mobilization
              </div>
            </div>

            {/* Card 4: Tender & Official Email */}
            <div className="bg-[#0c1322] border border-slate-800 p-5 rounded-2xl shadow-xl space-y-2 hover:border-amber-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center text-xl">
                ✉️
              </div>
              <h4 className="font-bold text-white text-sm">Tender Desk & Email</h4>
              <div className="text-xs space-y-1">
                <div>
                  <span className="text-slate-400">Tenders: </span>
                  <a
                    href={`mailto:${siteConfig.contacts.tendersEmail}`}
                    className="text-amber-400 font-semibold hover:underline"
                  >
                    {siteConfig.contacts.tendersEmail}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">General: </span>
                  <a
                    href={`mailto:${siteConfig.contacts.email}`}
                    className="text-amber-400 font-semibold hover:underline"
                  >
                    {siteConfig.contacts.email}
                  </a>
                </div>
              </div>
              <div className="pt-1 text-[11px] text-slate-500">
                Response within 24 business hours
              </div>
            </div>

          </div>
        </section>

        {/* Interactive Contact Form & Location Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ContactForm />
        </section>

      </main>

      <Footer />
    </div>
  );
}
