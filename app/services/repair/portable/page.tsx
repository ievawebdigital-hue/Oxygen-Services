'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wind,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  Search,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Activity,
  Battery,
  Sparkles,
  RefreshCw,
  Wrench
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { POC_BRANDS } from '@/lib/data/brands';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function PortableRepairPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPocBrands = POC_BRANDS.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.popularModels.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner for Portable POC Column / Sieve Bed Refill */}
        <section className="relative bg-[#0A192F] text-white py-14 sm:py-18 overflow-hidden border-b border-sky-950">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-sky-950/60 z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-400/30">
                <Wind className="w-3.5 h-3.5" />
                <span>Portable Oxygen (POC) Sieve Column Refill & Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Portable Oxygen (POC) Column{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-200">
                  (Sieve Bed) Refill & Repair
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialized molecular sieve column cartridge repours, Lithium Zeolite repacking, breath-sensor trigger calibration, battery diagnostics, and micro-compressor servicing for all 8 leading POC brands.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <RefreshCw className="w-4 h-4 text-cyan-400" />
                  <span>Column Refill: 24-48 Hours</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>95% Purity Restoration</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Battery className="w-4 h-4 text-amber-400" />
                  <span>Battery & Board Diagnostics</span>
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-service?mode=repair&type=poc"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/25 transition inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Book POC Column Refill / Pickup</span>
                </Link>
                <a
                  href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                  className="bg-slate-900/90 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-sm border border-slate-700 transition inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Helpline: 9820370015</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POC Column Refill Technical Overview Box */}
        <section className="relative z-30 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Why Refill POC Columns?</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Save 60-70% compared to buying imported replacement cartridges by repacking with fresh, high-density Lithium Zeolite.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">O2 Sensor Reset & Burn-In</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Clears &quot;O2 Service Soon&quot;, &quot;Low Oxygen&quot;, or &quot;Column Expired&quot; warnings and performs full ultrasonic verification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Doorstep & Courier Service</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Hand-deliver to our Mumbai, Pune, or Lucknow workshops, or send your POC/cartridge via courier from anywhere in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Portable POC Brands Catalog */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Select Your Portable (POC) Brand ({POC_BRANDS.length} Brands Supported)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Select your portable oxygen concentrator model for column sieve refill, sensor calibration, or battery repairs.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search POC brand (e.g. Inogen, SimplyGo)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium"
                />
              </div>
            </div>

            {filteredPocBrands.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-600 font-bold">No POC brands found matching &quot;{searchQuery}&quot;.</p>
                <Link
                  href="/request-service?mode=repair&type=poc"
                  className="mt-4 inline-flex items-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  <span>Book Custom POC Column Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredPocBrands.map((brand, index) => (
                  <div
                    key={brand.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
                    id={`poc-brand-${brand.id}`}
                  >
                    <div>
                      {/* Image Preview */}
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                        <Image
                          src={brand.imageUrl}
                          alt={`${brand.name} Portable Oxygen Concentrator POC`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                        <div className="absolute top-3 left-3 bg-cyan-950/85 backdrop-blur-md text-cyan-200 text-[11px] font-bold px-2.5 py-1 rounded-md border border-cyan-400/30">
                          #{index + 1} {brand.name}
                        </div>

                        <div className="absolute bottom-3 left-3 text-white">
                          <span className="text-xs font-bold block">{brand.flowType}</span>
                          <span className="text-[10px] text-cyan-300">Portable Battery POC</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-cyan-600 transition">
                          {brand.name} POC Column Refill
                        </h3>

                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {brand.description}
                        </p>

                        {/* Supported Models */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Supported Models:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {brand.popularModels.map((model, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] bg-slate-100 font-semibold text-slate-700 px-1.5 py-0.5 rounded border border-slate-200"
                              >
                                {model}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Column Sieve Cartridge Type */}
                        <div className="bg-cyan-50/80 rounded-xl p-2 border border-cyan-100 text-[11px] space-y-1">
                          <div className="font-bold text-cyan-900 flex items-center gap-1">
                            <RefreshCw className="w-3 h-3 text-cyan-600" />
                            <span>{brand.columnType}</span>
                          </div>
                          <p className="text-slate-500 text-[10px]">
                            Turnaround: <strong className="text-cyan-800">{brand.columnRefillTime}</strong>
                          </p>
                        </div>

                        {/* Key Features List */}
                        <ul className="text-[11px] space-y-1 text-slate-600">
                          {brand.keyFeatures.slice(0, 2).map((feat, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                              <span className="line-clamp-1">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action CTA */}
                    <div className="p-4 pt-0 mt-2 flex items-center gap-2">
                      <Link
                        href={`/request-service?mode=repair&type=poc&brand=${encodeURIComponent(brand.name)}`}
                        className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-3 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Wrench className="w-3.5 h-3.5" />
                        <span>Book Refill</span>
                      </Link>
                      <a
                        href={COMPANY_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-xl transition flex items-center justify-center"
                        title="WhatsApp Inquiry"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Step-by-Step POC Sieve Bed Repour Technical Process */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                POC Biomedical Protocol
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Our 4-Step POC Column Refill Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                How we restore high medical oxygen concentration in portable travel devices.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
                <span className="text-2xl font-black text-slate-300 block mb-1">01</span>
                <h3 className="font-bold text-slate-900 text-sm">Disassembly & Zeolite Purge</h3>
                <p className="text-xs text-slate-600 mt-1">
                  We open the sealed column cartridges, safely extract degraded zeolite, and ultrasonic-clean the micro-mesh filters.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
                <span className="text-2xl font-black text-slate-300 block mb-1">02</span>
                <h3 className="font-bold text-slate-900 text-sm">Lithium Zeolite Repacking</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Columns are refilled with premium medical Lithium Zeolite under controlled humidity conditions and hermetically resealed.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
                <span className="text-2xl font-black text-slate-300 block mb-1">03</span>
                <h3 className="font-bold text-slate-900 text-sm">Sensor Calibration & Error Reset</h3>
                <p className="text-xs text-slate-600 mt-1">
                  We connect diagnostic software to reset column expiration counters and recalibrate pulse-dose breath trigger sensors.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 relative">
                <span className="text-2xl font-black text-slate-300 block mb-1">04</span>
                <h3 className="font-bold text-slate-900 text-sm">Ultrasonic Purity QC Certificate</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Each POC is tested on all pulse flow settings with an acoustic gas analyzer to ensure guaranteed 95% ± 3% purity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
