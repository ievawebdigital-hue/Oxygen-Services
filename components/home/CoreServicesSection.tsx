'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Wind,
  Activity,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Gauge
} from 'lucide-react';

const REPAIR_SERVICES = [
  {
    id: 'sieve-repour',
    title: 'Sieve Bed Repours & Refilling',
    badge: 'Purity Restored to 95%+',
    description: 'When oxygen purity drops below 85% or low-oxygen alarm sounds, we repack molecular sieve columns with fresh, medical-grade lithium/sodium zeolite.',
    highlights: [
      'Removal of moisture-contaminated zeolite',
      'Precision density repacking with high-grade zeolite',
      '24-hr multi-stage ultrasonic burn-in test'
    ],
    slug: 'oxygen-concentrator-service'
  },
  {
    id: 'compressor-rebuild',
    title: 'Compressor Overhaul & Rebuild',
    badge: 'Pressure & Quiet Run',
    description: 'Fixes loud rattling, knocking, thermal shutdowns, and low line pressure. We replace worn piston cups, cylinder sleeves, bearings, and head gaskets.',
    highlights: [
      'Oil-less wobble piston cup replacement',
      'Thermal overload sensor inspection',
      'Operating pressure calibration (20–30 PSIG)'
    ],
    slug: 'oxygen-machine-service'
  },
  {
    id: 'pcb-diagnostics',
    title: 'PCB & Circuit-Level Repair',
    badge: 'Motherboard & Sensors',
    description: 'Component-level motherboard repair for power supply failures, error codes (E01/E02), 4-way valve pilot timing, and ultrasonic oxygen sensor calibration.',
    highlights: [
      'Microcontroller & relay circuit diagnostics',
      'Rotary/solenoid valve timing correction',
      'Electrical safety & grounding test'
    ],
    slug: 'oxygen-machine-service'
  },
  {
    id: 'portable-poc-service',
    title: 'Portable POC Diagnostic Service',
    badge: 'Inogen / SimplyGo Mini',
    description: 'Specialist service for battery-operated travel concentrators. Sieve column replacement, breath pulse sensor sensitivity tuning, and battery health inspection.',
    highlights: [
      'Pulse-dose breath trigger sensor calibration',
      'Compact sieve canister replacement',
      'Battery charge cycle & power management check'
    ],
    slug: 'portable-oxygen-concentrator-service'
  }
];

export default function CoreServicesSection() {
  return (
    <section id="services" className="py-14 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-4 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200/60 inline-flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>Biomedical Technical Workshop</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
              Specialist Repair Procedures
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              We fix what others declare unrepairable. Component-level repair with genuine spares and laboratory purity verification.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/request-service?mode=repair"
              className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition whitespace-nowrap"
            >
              <span>Book Machine Repair</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4-Card Repair Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REPAIR_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200 hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold group-hover:bg-sky-600 group-hover:text-white transition">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {srv.description}
                </p>

                <div className="space-y-1.5 mb-6 bg-white/80 rounded-xl p-3 border border-slate-100">
                  {srv.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <Link
                  href={`/${srv.slug}`}
                  className="text-xs font-bold text-sky-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Technical Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href={`/request-service?mode=repair&issue=${encodeURIComponent(srv.title)}`}
                  className="text-xs font-bold bg-slate-900 text-white hover:bg-sky-600 px-3 py-1.5 rounded-lg transition"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
