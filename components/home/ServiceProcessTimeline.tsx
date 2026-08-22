import React from 'react';
import Link from 'next/link';
import {
  FileCheck2,
  Cpu,
  Calculator,
  Wrench,
  Activity,
  ArrowRight
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Service Request',
    subtitle: 'Online, WhatsApp, or Phone',
    description: 'Provide your equipment brand, model, and reported fault. Instantly receive your unique Service ID (e.g. OS-2026-000123).',
    icon: FileCheck2
  },
  {
    step: '02',
    title: 'Equipment & Problem Assessment',
    subtitle: 'Drop-off, Pickup, or Visit',
    description: 'Our biomedical technicians conduct initial electrical safety and internal particulate intake verification at our branch.',
    icon: Cpu
  },
  {
    step: '03',
    title: 'Diagnosis & Itemized Estimate',
    subtitle: 'Ultrasonic & Pressure Analysis',
    description: 'We test oxygen purity (%), compressor PSIG, and valve timing, then generate a transparent estimate for your online approval.',
    icon: Calculator
  },
  {
    step: '04',
    title: 'Component Repair / Maintenance',
    subtitle: 'Sieve Repack & Overhaul',
    description: 'Upon approval, technicians repack molecular sieve canisters, replace HEPA/bacterial filters, or service compressor cups.',
    icon: Wrench
  },
  {
    step: '05',
    title: 'Testing & Service Completion',
    subtitle: '24-Hour Continuous Burn-In',
    description: 'The unit undergoes a 24-hour continuous runtime purity stability test. Delivered with a signed technical service report.',
    icon: Activity
  }
];

export default function ServiceProcessTimeline() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
            Transparent 5-Stage Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] mt-1">
            How Our Service & Repair Process Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Every oxygen concentrator and oxygen machine entrusted to us follows a rigorous technical workflow with live digital status tracking.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/90 flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-extrabold font-mono text-[#1677FF] group-hover:text-[#0B1F33] transition">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-[#1677FF] flex items-center justify-center group-hover:bg-[#1677FF] group-hover:text-white transition">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#1677FF] mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Digitally Logged</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Timeline Action */}
        <div className="mt-12 text-center">
          <Link
            href="/request-service"
            className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
          >
            <span>Start a Service Request</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
