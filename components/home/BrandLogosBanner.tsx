'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const BRAND_LOGOS = [
  { name: 'AirSep', color: 'from-blue-600 to-blue-800', note: 'VisionAire & NewLife' },
  { name: 'Philips Respironics', color: 'from-sky-600 to-blue-700', note: 'EverFlo 5L & SimplyGo' },
  { name: 'ResMed', color: 'from-red-500 to-rose-700', note: 'AirCurve & Astral' },
  { name: 'O2 Concepts', color: 'from-teal-500 to-cyan-700', note: 'Oxlife Independence' },
  { name: 'Inogen', color: 'from-indigo-600 to-purple-800', note: 'One G3, G4, G5, Rove 6' },
  { name: 'Invacare', color: 'from-blue-700 to-indigo-900', note: 'Platinum 5 & 10' },
  { name: 'Nidek Medical', color: 'from-emerald-600 to-teal-800', note: 'Nuvo Lite 5 & 10' },
  { name: 'Yuwell', color: 'from-amber-600 to-orange-700', note: '8F-5AW & 7F-10' },
  { name: 'Oxymed', color: 'from-sky-700 to-blue-900', note: 'Mini, Pro & P2 POC' },
  { name: 'BPL Medical', color: 'from-slate-700 to-slate-900', note: 'Oxy 5 Neo & 10L' },
];

export default function BrandLogosBanner() {
  return (
    <section className="py-12 bg-white border-b border-slate-200" id="brands-equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Repairing All Leading <span className="text-sky-600">Medical Equipment</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
            We are experienced in servicing, sieve bed repours, and maintenance for all types of oxygen-concentrators from leading manufacturers.
          </p>
        </div>

        {/* Brand Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {BRAND_LOGOS.map((brand) => (
            <Link
              key={brand.name}
              href="/services/repair/stationary"
              className="bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 rounded-2xl p-4 text-center transition-all duration-200 flex flex-col items-center justify-center min-h-[90px] group shadow-2xs"
            >
              <span className="font-black text-sm sm:text-base text-slate-800 group-hover:text-sky-700 tracking-tight transition line-clamp-1">
                {brand.name}
              </span>
              <span className="text-[11px] text-slate-500 group-hover:text-slate-600 mt-1 truncate max-w-full">
                {brand.note}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Fast Link to View Catalogs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            18 Home (Stationary) Brands & 8 Portable (POC) Brands Supported
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <Link
            href="/services/repair/stationary"
            className="text-sky-600 hover:text-sky-700 font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>View Full Brand Models List</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
