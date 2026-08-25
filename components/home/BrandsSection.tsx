'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Wrench, Wind } from 'lucide-react';
import { STATIONARY_BRANDS, POC_BRANDS } from '@/lib/data/brands';

export default function BrandsSection() {
  return (
    <section className="py-14 bg-white border-b border-slate-200/80" id="brands-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
            Multi-Brand Biomedical Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            18 Stationary Brands & 8 Portable (POC) Brands Serviced
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Genuine molecular sieve zeolite repours, compressor rebuilding, and 95%+ purity calibration across all leading manufacturers.
          </p>
        </div>

        {/* Section 1: 18 Stationary Brands */}
        <div className="mb-10 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Home (Stationary) Oxygen Concentrators (18 Brands)
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                5 LPM & 10 LPM High Flow stationary hospital & home units
              </p>
            </div>

            <Link
              href="/services/repair/stationary"
              className="text-xs font-bold text-sky-600 hover:text-sky-700 bg-white px-4 py-2 rounded-xl border border-slate-200 hover:border-sky-300 transition inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>View All 18 Stationary Brands</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {STATIONARY_BRANDS.map((brand, idx) => (
              <Link
                key={brand.id}
                href="/services/repair/stationary"
                className="bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 rounded-xl p-3 text-center transition group shadow-2xs"
              >
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-0.5">
                  #{idx + 1}
                </span>
                <p className="font-extrabold text-xs text-slate-900 group-hover:text-sky-700 transition line-clamp-1">
                  {brand.name}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                  {brand.popularModels[0]}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 2: 8 Portable (POC) Column Refill Brands */}
        <div className="bg-gradient-to-br from-cyan-50/50 to-sky-50/30 rounded-3xl p-6 sm:p-8 border border-cyan-200/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-cyan-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Portable Oxygen (POC) Column (Sieve Bed) Refill (8 Brands)
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Cartridge Lithium Zeolite repour, O2 sensor zero resets & pulse calibration
              </p>
            </div>

            <Link
              href="/services/repair/portable"
              className="text-xs font-bold text-cyan-800 hover:text-cyan-900 bg-white px-4 py-2 rounded-xl border border-cyan-200 hover:border-cyan-400 transition inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>View All 8 POC Refill Brands</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {POC_BRANDS.map((brand, idx) => (
              <Link
                key={brand.id}
                href="/services/repair/portable"
                className="bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 rounded-xl p-3.5 text-center transition group shadow-2xs"
              >
                <span className="text-[10px] font-mono font-bold text-cyan-600 block mb-0.5">
                  POC #{idx + 1}
                </span>
                <p className="font-extrabold text-xs text-slate-900 group-hover:text-cyan-800 transition line-clamp-1">
                  {brand.name}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                  {brand.columnType}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          <span>Need custom assistance for your machine? </span>
          <Link href="/request-service?mode=repair" className="text-sky-600 font-bold hover:underline">
            Book Doorstep Pickup or Consult Our Biomedical Engineers →
          </Link>
        </div>
      </div>
    </section>
  );
}
