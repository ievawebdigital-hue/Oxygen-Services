'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function FinalCtaSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#0A192F] via-[#0B2545] to-[#0A192F] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>Biomedical Oxygen Specialists</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Repair or Rent an Oxygen Concentrator?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Specialist sieve repouring, compressor rebuilding, and same-day sanitized 5L, 10L & Portable rentals across Mumbai, Pune, and Lucknow.
        </p>

        {/* 3 City Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs font-medium">
          <span className="bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-xl text-slate-200 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            Mumbai (Mira Road)
          </span>
          <span className="bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-xl text-slate-200 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            Pune (Mangalwar Peth)
          </span>
          <span className="bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-xl text-slate-200 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            Lucknow (Chinhat)
          </span>
        </div>

        {/* Action Button Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            href="/request-service?mode=repair"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-xl shadow-sky-500/20 transition transform hover:-translate-y-0.5"
            id="final-cta-request-btn"
          >
            <Wrench className="w-4 h-4" />
            <span>Book Repair Service</span>
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md transition transform hover:-translate-y-0.5"
            id="final-cta-about-btn"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>About Our Standards</span>
          </Link>

          <a
            href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition"
            id="final-cta-call-btn"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call 9820370015</span>
          </a>
        </div>
      </div>
    </section>
  );
}
