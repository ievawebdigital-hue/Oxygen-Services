'use client';

import React from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  Truck,
  Activity,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Book Online or Call',
    subtitle: 'Takes 30 Seconds',
    description: 'Select your machine issue or choose a rental package. Instantly receive your digital Service Ticket ID.',
    icon: FileCheck2
  },
  {
    step: '02',
    title: 'Doorstep Pickup / Delivery',
    subtitle: 'Same-Day Dispatch',
    description: 'Our logistics agent collects your repair machine safely or delivers a sanitized rental unit to your home/clinic.',
    icon: Truck
  },
  {
    step: '03',
    title: 'Biomedical Testing & Repair',
    subtitle: '95%+ Purity QC',
    description: 'Technicians repack sieve columns, service compressors, and conduct multi-hour calibrated purity burn-in testing.',
    icon: Activity
  },
  {
    step: '04',
    title: 'Return with Test Report',
    subtitle: 'Warranty Included',
    description: 'Your machine is sanitized, packed, and returned with an itemized digital test certificate and warranty on parts.',
    icon: ShieldCheck
  }
];

export default function ServiceProcessTimeline() {
  return (
    <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200/60 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 4-Step Process</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
            How Oxy Breath Services Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
            Fast, transparent, and hassle-free service for repairs and rentals across Mumbai, Pune, and Lucknow.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-sky-600 group-hover:text-slate-900 transition">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-[#0284c7] group-hover:text-white transition shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold text-sky-600 mb-2.5">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Real-Time Tracked</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/request-service"
            className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
          >
            <span>Book Repair or Rent Machine</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
