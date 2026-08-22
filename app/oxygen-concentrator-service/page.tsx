import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wind,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Activity,
  ArrowRight,
  ShieldAlert,
  MapPin,
  HelpCircle,
  Clock,
  Cpu
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import DeviceExplanationDiagram from '@/components/home/DeviceExplanationDiagram';
import { SERVICES } from '@/lib/data/services';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Oxygen Concentrator Service & Repair | Oxygen Services',
  description: 'Specialist oxygen concentrator service, molecular sieve bed repacking, compressor overhaul, and calibrated ultrasonic purity testing in Mumbai, Pune, and Lucknow.',
  keywords: [
    'oxygen concentrator service',
    'oxygen concentrator repair',
    'oxygen concentrator servicing',
    'oxygen concentrator maintenance',
    'oxygen concentrator technician',
    'molecular sieve repacking',
    'oxygen concentrator repair near me'
  ]
};

export default function OxygenConcentratorServicePage() {
  const service = SERVICES.find((s) => s.id === 'oxygen-concentrator-service') || SERVICES[1];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow">
        {/* Service Hero */}
        <section className="bg-gradient-to-b from-slate-900 via-[#0B1F33] to-[#0D243D] text-white py-14 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-[#19C6D9]/40 text-[#19C6D9] text-xs font-bold uppercase tracking-wider">
                <Wind className="w-4 h-4" />
                Specialist Biomedical Service
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Oxygen Concentrator Service & Repair
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialist molecular sieve bed repacking, compressor rebuilding, and calibrated ultrasonic purity testing for 5 LPM and 10 LPM stationary oxygen concentrators across Mumbai, Pune, and Lucknow.
              </p>

              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                  Dual Molecular Sieve Repack
                </span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                  Oil-Free Compressor Rebuild
                </span>
                <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700 text-slate-300">
                  93% ± 3% Output Calibration
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <Link
                  href="/request-service?equipment=Oxygen%20Concentrator"
                  className="inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Concentrator Service</span>
                </Link>

                <a
                  href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0B1F33] px-6 py-3.5 rounded-xl font-bold text-sm shadow transition"
                >
                  <span>Call 9820370015</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technical Scope & Diagnostic Inspection */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Scope Description (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
                    Technical Scope
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] mt-1">
                    What Is Included In Concentrator Servicing?
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Oxygen concentrators operate via Pressure Swing Adsorption (PSA) cycles. When purity drops or warning alarms trigger, our technicians inspect and restore factory performance parameters.
                  </p>
                </div>

                <div className="space-y-3">
                  {service.detailedScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Service Availability Notice: </span>
                    <span>{service.disclaimer}</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Components Assessed & Diagnostic Bench (5 cols) */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Components Tested on Bench
                  </h3>
                  <p className="text-xs text-slate-400">
                    Precision hardware elements evaluated during technical intake:
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  {service.componentsAssessed.map((comp, idx) => (
                    <li key={idx} className="flex items-center gap-2 pb-2 border-b border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#19C6D9]" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#19C6D9] mb-2">
                    Common Concentrator Symptoms:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {service.commonFaults.map((fault, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{fault}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/request-service?equipment=Oxygen%20Concentrator"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white py-3 rounded-xl font-bold text-xs shadow transition"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Request Concentrator Assessment</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Airflow Diagram */}
        <DeviceExplanationDiagram />

        {/* 3 Physical Branches Strip */}
        <section className="py-14 bg-[#F7FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
                Branch Facilities
              </span>
              <h2 className="text-2xl font-bold text-[#0B1F33] mt-1">
                Where Can You Get Your Concentrator Serviced?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BRANCHES.map((b) => (
                <div key={b.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#1677FF]">
                      {b.city} Center
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2 mb-1">{b.name}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{b.address}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                    <a href={`tel:+91${b.primaryPhone}`} className="font-bold text-[#0B1F33] hover:underline">
                      Call {b.primaryPhone}
                    </a>
                    <Link href={`/locations/${b.id}`} className="text-[#1677FF] font-semibold hover:underline">
                      Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
