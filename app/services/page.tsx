'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  Wind,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Package
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { STATIONARY_BRANDS, POC_BRANDS } from '@/lib/data/brands';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function ServicesHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#0A192F] text-white py-14 sm:py-18 border-b border-sky-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                <Wrench className="w-3.5 h-3.5" />
                <span>Biomedical Service & Repair Hub</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Service & Repair of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  Oxygen Concentrators
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialized biomedical laboratory servicing with 95%+ purity restoration, genuine molecular sieve zeolite repours, compressor rebuilding, and circuit board diagnostics across Mumbai, Pune, and Lucknow.
              </p>
            </div>
          </div>
        </section>

        {/* The 2 Dedicated Service Categories */}
        <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              Select Your Equipment Category
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Choose Your Machine Type for Specialized Repair
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select between heavy-duty home stationary concentrators and compact travel portable units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category 1: Home (Stationary) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-sky-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <span className="bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold px-3 py-1 rounded-full">
                    {STATIONARY_BRANDS.length} Brands Serviced
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition">
                  1. Home (Stationary) Concentrators
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mt-0.5">
                  5 LPM & 10 LPM High Flow Units
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Full sieve canister repours, rotary solenoid valve syncing, compressor piston cup replacement, and 95%+ certified ultrasonic purity calibration for heavy-duty stationary home units.
                </p>

                {/* Brands Preview */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Popular Supported Brands:
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {STATIONARY_BRANDS.slice(0, 9).map((b) => (
                      <span
                        key={b.id}
                        className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {b.name}
                      </span>
                    ))}
                    <span className="bg-sky-50 text-sky-700 font-bold px-2 py-1 rounded-md">
                      +{STATIONARY_BRANDS.length - 9} more
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <Link
                  href="/services/repair/stationary"
                  className="flex-1 bg-[#0284c7] hover:bg-[#0369a1] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center shadow-md transition flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>Explore Stationary Brands ({STATIONARY_BRANDS.length})</span>
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Category 2: Portable (POC) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-cyan-400 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Wind className="w-6 h-6" />
                  </div>
                  <span className="bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs font-bold px-3 py-1 rounded-full">
                    {POC_BRANDS.length} POC Brands Refilled
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition">
                  2. Portable Oxygen (POC) Column Refill
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 mt-0.5">
                  Sieve Bed Cartridges & Battery Units
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Specialized column (sieve bed) cartridge zeolite refills, Lithium Zeolite repacking, breath-sensitivity trigger calibration, O2 sensor zero resets, and battery circuit maintenance.
                </p>

                {/* Brands Preview */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Supported POC Brands:
                  </p>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {POC_BRANDS.map((b) => (
                      <span
                        key={b.id}
                        className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {b.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <Link
                  href="/services/repair/portable"
                  className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center shadow-md transition flex items-center justify-center gap-2 group-hover:gap-3"
                >
                  <span>Explore POC Column Refill Brands ({POC_BRANDS.length})</span>
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Also Looking for Machine Rentals? Banner */}
          <div className="mt-12 bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Need a Temporary Standby Unit?
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                Rental of Oxygen Concentrators (5L, 10L & POC)
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
                Get an immediate hospital-sanitized standby machine while your device is being serviced, or rent from ₹3,500/month.
              </p>
            </div>

            <Link
              href="/rent"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm transition shadow-md whitespace-nowrap flex items-center gap-2"
            >
              <Package className="w-4 h-4" />
              <span>Explore Rental Fleet</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
