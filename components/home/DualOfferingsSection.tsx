'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Package,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Wind,
  Layers,
  Sparkles
} from 'lucide-react';

export default function DualOfferingsSection() {
  return (
    <section className="py-14 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60">
            Our Two Primary Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How Can We Assist Your Oxygen Needs?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Whether your own oxygen concentrator needs specialist sieve repouring and servicing, or you need to rent a sanitized machine immediately, we have you covered.
          </p>
        </div>

        {/* 2-Column High-Impact Dual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* COLUMN 1: REPAIR & SERVICE */}
          <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-slate-900 to-[#0B2545] text-white flex flex-col justify-between border border-sky-900/40 shadow-xl relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Wrench className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Biomedical Lab Repair
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                Oxygen Concentrator Repair
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Complete mechanical and electronic overhauls for all 5L, 10L, and portable POC machines. We restore low purity back to 95%+ medical grade standards.
              </p>

              {/* Scope Checklist */}
              <div className="space-y-3 mb-8 bg-slate-950/40 p-4 rounded-2xl border border-slate-800">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Molecular Sieve Bed Repours:</strong> High-grade lithium/sodium zeolite replacement for low purity alarms.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Compressor Rebuilds:</strong> Piston cups, cylinder sleeves, quiet motor run & thermal management.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span><strong>PCB & Electronic Circuit Repairs:</strong> Sensor calibration, valve drivers & power boards.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Ultrasonic Purity QC Report:</strong> Calibrated 24-hr test certificate signed by technician.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/request-service?mode=repair"
                className="w-full sm:w-auto flex-1 bg-[#0284c7] hover:bg-[#0369a1] text-white py-3 px-5 rounded-xl font-bold text-sm text-center shadow-md transition flex items-center justify-center gap-2 group/btn"
                id="dual-repair-cta"
              >
                <span>Book Machine Repair</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/oxygen-concentrator-service"
                className="w-full sm:w-auto text-xs font-bold text-sky-300 hover:text-white px-4 py-3 text-center transition"
              >
                View Repair Specs →
              </Link>
            </div>
          </div>

          {/* COLUMN 2: RENTALS */}
          <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#F0F9FF] to-white text-slate-900 flex flex-col justify-between border border-sky-200 shadow-xl relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 border border-sky-300/60 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                  <Package className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/60">
                  Same-Day Delivery
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Oxygen Machine on Rent
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Rent top international brands (Philips, DeVilbiss, Inogen) with guaranteed 95%+ purity, sanitized accessories, and free doorstep setup across Mumbai, Pune, and Lucknow.
              </p>

              {/* Scope Checklist */}
              <div className="space-y-3 mb-8 bg-sky-50/70 p-4 rounded-2xl border border-sky-100">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>5 LPM Stationary (from ₹3,500/mo):</strong> Philips EverFlo / DeVilbiss for continuous home oxygen.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>10 LPM High-Flow (from ₹6,500/mo):</strong> Dual-flow heavy duty machines for critical care.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Portable POC (from ₹8,500/mo):</strong> Inogen One / SimplyGo Mini approved for air & outdoor travel.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Complete Accessories Included:</strong> Brand new humidifier bottle + 2x Cannulas + 24x7 Tech Support.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-100 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/rent"
                className="w-full sm:w-auto flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-5 rounded-xl font-bold text-sm text-center shadow-md transition flex items-center justify-center gap-2 group/btn"
                id="dual-rent-cta"
              >
                <span>View Rental Machines & Rates</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/request-service?mode=rent"
                className="w-full sm:w-auto text-xs font-bold text-slate-700 hover:text-sky-600 px-4 py-3 text-center transition"
              >
                Instant Rent Booking →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
