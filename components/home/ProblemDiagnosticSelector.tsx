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
    <section className="py-14 lg:py-20 bg-[#0A192F] text-white relative overflow-hidden" id="troubleshooting">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Common Machine Issues</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Machine Alarming or Low Purity? We Can Fix It.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Don&apos;t spend ₹40,000+ on a new machine. Most problems are resolved with molecular sieve repours or compressor servicing.
          </p>
        </div>

        {/* 6 Clean Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMON_PROBLEMS.slice(0, 6).map((prob) => {
            const Icon = ICON_MAP[prob.icon] || AlertTriangle;
            return (
              <div
                key={prob.id}
                onClick={() => setSelectedProblem(prob)}
                className="bg-slate-900/80 hover:bg-slate-800/90 rounded-2xl p-5 border border-slate-800 hover:border-sky-400 transition-all cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-sky-500/10 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 group-hover:bg-[#0284c7] group-hover:text-white flex items-center justify-center transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                      {prob.urgency} Urgency
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition">
                    {prob.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {prob.symptom}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition">
                  <span>Diagnose Symptom</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-10 bg-gradient-to-r from-sky-950/60 via-slate-900 to-sky-950/60 rounded-2xl p-5 sm:p-6 border border-sky-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm sm:text-base font-bold text-white">
              Need immediate technical diagnosis for your concentrator?
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Doorstep pickup across Mumbai, Pune, and Lucknow. Same-day rental backups available.
            </p>
          </div>
          <Link
            href="/request-service?mode=repair"
            className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow whitespace-nowrap transition"
          >
            <Wrench className="w-4 h-4" />
            <span>Book Repair Service</span>
          </Link>
        </div>
      </div>

      {/* Modal Dialog for Problem Diagnosis */}
      {selectedProblem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedProblem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-xl bg-slate-800 cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Diagnostic Advisory
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {selectedProblem.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <p className="font-bold text-white mb-0.5">Reported Symptom:</p>
                <p className="text-slate-300">{selectedProblem.symptom}</p>
              </div>

              <div>
                <p className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-1.5">
                  Probable Technical Causes:
                </p>
                <ul className="space-y-1.5">
                  {selectedProblem.probableCauses.slice(0, 3).map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <span className="text-sky-400 font-bold">•</span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-sky-950/60 border border-sky-800/40 rounded-xl">
                <p className="font-bold text-sky-300 mb-0.5">Recommended Professional Solution:</p>
                <p className="text-slate-300">{selectedProblem.recommendedAction}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedProblem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <Link
                href={`/request-service?mode=repair&issue=${encodeURIComponent(selectedProblem.title)}`}
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow transition"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Service For This Issue</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
