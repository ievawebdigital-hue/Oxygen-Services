import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Activity,
  ArrowRight,
  ShieldAlert,
  Gauge
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { SERVICES } from '@/lib/data/services';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Medical Oxygen Equipment Service & Repair | Oxy Breath Services',
  description: 'Specialist medical oxygen equipment service, regulator inspection, flowmeter calibration, and auxiliary testing across Mumbai, Pune, and Lucknow.',
  keywords: [
    'Oxy Breath Services',
    'medical oxygen equipment service',
    'medical oxygen equipment repair',
    'oxygen regulator repair',
    'oxygen flowmeter calibration',
    'oxygen technician India'
  ]
};

export default function MedicalOxygenEquipmentServicePage() {
  const service = SERVICES.find((s) => s.id === 'medical-oxygen-equipment-service') || SERVICES[3];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-slate-900 via-[#0B1F33] to-[#0D243D] text-white py-14 lg:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Auxiliary & Flow Systems Support
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Medical Oxygen Equipment Service & Support
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Specialist technical maintenance, high-pressure regulator seal inspection, Thorpe tube flowmeter calibration, and manifold accessory testing across Mumbai, Pune, and Lucknow.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <Link
                  href="/request-service?equipment=Medical%20Oxygen%20Equipment"
                  className="inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Request Equipment Check</span>
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

        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
                    Technical Offerings
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] mt-1">
                    Flowmeter, Regulator & Auxiliary Support
                  </h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Oxygen auxiliary systems require precise pressure step-down regulators and leak-free elastomer seals. We inspect brass and anodized fittings to prevent pressure drops.
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
                    <span className="font-bold">Important Notice: </span>
                    <span>{service.disclaimer}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-xl">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Components Tested on Bench
                  </h3>
                  <p className="text-xs text-slate-400">
                    High-pressure fittings and delivery controls assessed:
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  {service.componentsAssessed.map((comp, idx) => (
                    <li key={idx} className="flex items-center gap-2 pb-2 border-b border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                    Diagnostic Bench Procedures:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {service.diagnosticProcess.map((proc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/request-service?equipment=Medical%20Oxygen%20Equipment"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white py-3 rounded-xl font-bold text-xs shadow transition"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Check Equipment Compatibility</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
