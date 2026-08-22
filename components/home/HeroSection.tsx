'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  MessageSquare,
  Search,
  Phone,
  CheckCircle,
  MapPin,
  Activity,
  Wind,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#0B1F33] to-[#0D243D] text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Flow Grid Graphic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#19C6D9" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Messaging & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-[#19C6D9]/30 text-[#19C6D9] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#19C6D9] animate-pulse" />
              SPECIALIST MEDICAL OXYGEN EQUIPMENT SERVICE
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Oxygen Machine & Oxygen Concentrator Service{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19C6D9] via-[#1677FF] to-blue-400">
                You Can Rely On
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Professional servicing, repair, troubleshooting and maintenance support for oxygen machines, oxygen concentrators and portable oxygen equipment across <strong className="text-white font-semibold">Mumbai, Pune and Lucknow</strong>.
            </p>

            {/* Trust Pill Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#19C6D9]" />
                Mumbai • Pune • Lucknow
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Vendor-Independent Service
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                Calibrated Purity & Pressure Testing
              </span>
            </div>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <Link
                href="/request-service"
                className="inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition transform hover:-translate-y-0.5"
                id="hero-request-service-cta"
              >
                <Wrench className="w-5 h-5" />
                <span>Request a Service</span>
              </Link>

              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-bold px-6 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                id="hero-whatsapp-cta"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                href="/track-service"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-base font-semibold px-5 py-3.5 rounded-xl border border-slate-700 transition"
                id="hero-track-service-cta"
              >
                <Search className="w-4 h-4 text-[#19C6D9]" />
                <span>Track Service</span>
              </Link>
            </div>

            {/* Direct Calling Strip */}
            <div className="pt-2 flex items-center gap-3 text-sm text-slate-400">
              <span>Urgent Equipment Assistance:</span>
              <a
                href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                className="text-white font-bold text-[#19C6D9] hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-4 h-4 text-[#19C6D9]" />
                9820370015
              </a>
              <span>/</span>
              <a
                href={`tel:+91${COMPANY_CONTACT.secondaryPhone}`}
                className="text-slate-300 hover:text-white"
              >
                9819459421
              </a>
            </div>
          </div>

          {/* Right Column: Custom Visual Diagnostic Graphic (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 border border-slate-700/80 shadow-2xl backdrop-blur">
              {/* Top Card Header: Live Bench Diagnostic Status */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white">
                      Diagnostic Test Bench
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Ultrasonic Purity & Flow Analysis
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-900/50 text-[#19C6D9] border border-blue-700/40">
                  PSA Multi-Stage
                </span>
              </div>

              {/* Technical Schematic SVG: DEVICE -> TECHNICIAN -> SERVICE */}
              <div className="relative bg-slate-950/70 rounded-xl p-4 border border-slate-800 overflow-hidden">
                <svg
                  viewBox="0 0 400 240"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Grid Lines */}
                  <line x1="20" y1="60" x2="380" y2="60" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="20" y1="120" x2="380" y2="120" stroke="#1E293B" strokeDasharray="3 3" />
                  <line x1="20" y1="180" x2="380" y2="180" stroke="#1E293B" strokeDasharray="3 3" />

                  {/* Stage 1: Ambient Intake */}
                  <rect x="25" y="70" width="70" height="95" rx="8" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
                  <text x="60" y="95" fill="#94A3B8" fontSize="9" fontWeight="bold" textAnchor="middle">AIR INTAKE</text>
                  <text x="60" y="110" fill="#64748B" fontSize="8" textAnchor="middle">HEPA Pre-Filter</text>
                  <circle cx="60" cy="135" r="14" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1.5" />
                  <path d="M54 135 C57 131 63 139 66 135" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Flow Arrow 1 */}
                  <path d="M98 118 L130 118" stroke="#0284C7" strokeWidth="2.5" className="animate-flow" />
                  <polygon points="132,118 126,114 126,122" fill="#0284C7" />

                  {/* Stage 2: Dual Zeolite Sieve Columns */}
                  <rect x="135" y="45" width="120" height="145" rx="10" fill="#0B1F33" stroke="#1677FF" strokeWidth="1.5" />
                  <text x="195" y="65" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">MOLECULAR SIEVES</text>
                  <text x="195" y="78" fill="#94A3B8" fontSize="8" textAnchor="middle">Dual Zeolite PSA Bed</text>

                  {/* Sieve Column A & B */}
                  <rect x="148" y="90" width="40" height="75" rx="4" fill="#1E293B" stroke="#19C6D9" strokeWidth="1" />
                  <text x="168" y="105" fill="#E2E8F0" fontSize="8" fontWeight="bold" textAnchor="middle">Bed A</text>
                  <line x1="152" y1="115" x2="184" y2="115" stroke="#0284C7" strokeDasharray="2 2" />
                  <line x1="152" y1="125" x2="184" y2="125" stroke="#0284C7" strokeDasharray="2 2" />
                  <line x1="152" y1="135" x2="184" y2="135" stroke="#0284C7" strokeDasharray="2 2" />
                  <line x1="152" y1="145" x2="184" y2="145" stroke="#0284C7" strokeDasharray="2 2" />
                  <circle cx="168" cy="155" r="3" fill="#16A34A" />

                  <rect x="202" y="90" width="40" height="75" rx="4" fill="#1E293B" stroke="#19C6D9" strokeWidth="1" />
                  <text x="222" y="105" fill="#E2E8F0" fontSize="8" fontWeight="bold" textAnchor="middle">Bed B</text>
                  <line x1="206" y1="115" x2="238" y2="115" stroke="#0284C7" strokeDasharray="2 2" />
                  <line x1="206" y1="125" x2="238" y2="125" stroke="#0284C7" strokeDasharray="2 2" />
                  <line x1="206" y1="135" x2="238" y2="135" stroke="#0284C7" strokeDasharray="2 2" />
                  <line x1="206" y1="145" x2="238" y2="145" stroke="#0284C7" strokeDasharray="2 2" />
                  <circle cx="222" cy="155" r="3" fill="#1677FF" />

                  {/* Flow Arrow 2 */}
                  <path d="M258 118 L290 118" stroke="#10B981" strokeWidth="2.5" className="animate-flow" />
                  <polygon points="292,118 286,114 286,122" fill="#10B981" />

                  {/* Stage 3: Calibrated Oxygen Output */}
                  <rect x="295" y="70" width="80" height="95" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="335" y="92" fill="#A7F3D0" fontSize="9" fontWeight="bold" textAnchor="middle">O2 OUTPUT</text>
                  <text x="335" y="118" fill="#34D399" fontSize="16" fontWeight="bold" textAnchor="middle">94.2%</text>
                  <text x="335" y="132" fill="#6EE7B7" fontSize="8" textAnchor="middle">5.0 LPM Verified</text>
                  <path d="M320 148 L350 148" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Bottom Real-Time Diagnostic Telemetry Data */}
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Purity Target</p>
                  <p className="text-sm font-bold text-emerald-400">93% ± 3%</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Line Pressure</p>
                  <p className="text-sm font-bold text-blue-400">22.8 PSIG</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Burn-In Run</p>
                  <p className="text-sm font-bold text-[#19C6D9]">24h Stable</p>
                </div>
              </div>

              {/* Verified Quality Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700/60">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-[#19C6D9]" />
                  Medical Oxygen Standards
                </span>
                <Link
                  href="/track-service"
                  className="text-[#19C6D9] hover:underline font-semibold flex items-center gap-1"
                >
                  Track Sample Ticket →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
