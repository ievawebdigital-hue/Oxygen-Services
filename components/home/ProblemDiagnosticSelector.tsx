'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  Percent,
  PowerOff,
  Volume2,
  Flame,
  Wind,
  Battery,
  Clock,
  ArrowRight,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  X
} from 'lucide-react';
import { COMMON_PROBLEMS, ProblemItem } from '@/lib/data/problems';

const ICON_MAP: Record<string, React.ElementType> = {
  Percent,
  AlertTriangle,
  PowerOff,
  Volume2,
  Flame,
  Wind,
  Battery,
  Clock
};

export default function ProblemDiagnosticSelector() {
  const [selectedProblem, setSelectedProblem] = useState<ProblemItem | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden" id="troubleshooting">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            Troubleshooting & Fault Identification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Machine Not Working? Don&apos;t Replace It Before Getting It Checked.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            In most cases, low oxygen concentration, continuous alarms, or compressor noises are caused by consumable filters or molecular sieve degradation that can be serviced at a fraction of replacement cost.
          </p>
        </div>

        {/* 8 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMMON_PROBLEMS.map((prob) => {
            const Icon = ICON_MAP[prob.icon] || AlertTriangle;
            return (
              <div
                key={prob.id}
                onClick={() => setSelectedProblem(prob)}
                className="bg-slate-800/80 hover:bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-[#1677FF] transition-all cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-[#19C6D9] group-hover:bg-[#1677FF] group-hover:text-white flex items-center justify-center transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                      {prob.urgency} Urgency
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#19C6D9] transition">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {prob.symptom}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-[#1677FF] group-hover:text-[#19C6D9] transition">
                  <span>Diagnose Symptom</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/40 via-slate-800 to-blue-900/40 rounded-2xl p-6 border border-blue-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-base font-bold text-white">
              Experiencing a different error code or unlisted symptom?
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Our technicians have specialized diagnostic benches for all major medical oxygen equipment models.
            </p>
          </div>
          <Link
            href="/request-service"
            className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow whitespace-nowrap transition"
          >
            <Wrench className="w-4 h-4" />
            <span>Tell Us What&apos;s Wrong</span>
          </Link>
        </div>
      </div>

      {/* Modal Dialog for Problem Diagnosis */}
      {selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-xl w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedProblem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#1677FF]/20 text-[#19C6D9] flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#19C6D9]">
                  Diagnostic Advisory
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedProblem.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <p className="font-bold text-white mb-1">Reported Symptom:</p>
                <p className="text-slate-300">{selectedProblem.symptom}</p>
              </div>

              <div>
                <p className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1.5">
                  Probable Technical Causes:
                </p>
                <ul className="space-y-1.5">
                  {selectedProblem.probableCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <span className="text-[#19C6D9] font-bold">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-950/40 border border-amber-900/60 rounded-xl text-amber-200">
                <p className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Immediate Safe Actions at Home:
                </p>
                <ul className="space-y-1">
                  {selectedProblem.immediateSteps.map((step, idx) => (
                    <li key={idx} className="text-slate-300 flex items-start gap-1.5">
                      <span>✓</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-blue-950/40 border border-blue-800/40 rounded-xl">
                <p className="font-bold text-[#19C6D9] mb-0.5">Recommended Professional Solution:</p>
                <p className="text-slate-300">{selectedProblem.recommendedAction}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <Link
                href={`/request-service?problem=${encodeURIComponent(selectedProblem.title)}`}
                className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow transition"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Service For This Problem</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
