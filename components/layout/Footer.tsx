'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BRANCHES } from '@/lib/data/branches';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-14 pb-20 md:pb-12 border-t border-sky-950" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Physical Branches Grid */}
        <div className="border-b border-slate-800/80 pb-10 mb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Service Workshops & Rental Hubs
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                3 Physical Workshop Locations in India
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition"
            >
              <span>View All Contact Details & Maps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-sky-500/50 transition"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                    {branch.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {branch.city}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  {branch.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                  {branch.address}
                </p>
                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <a
                    href={`tel:+91${branch.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 text-slate-200 hover:text-sky-400 font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{branch.primaryPhone}</span>
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-bold"
                  >
                    Map Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & NAP */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oxy Breath Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-400">
            <span>Mumbai • Pune • Lucknow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
