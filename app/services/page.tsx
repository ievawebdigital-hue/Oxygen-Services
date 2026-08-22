import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wrench,
  Wind,
  Activity,
  BatteryCharging,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Search
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { SERVICES } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Medical Oxygen Equipment Services Directory | Oxygen Services',
  description: 'Specialist service offerings for stationary oxygen machines, oxygen concentrators, and portable oxygen concentrators across Mumbai, Pune, and Lucknow.',
  keywords: [
    'oxygen concentrator services',
    'oxygen machine repair services',
    'medical oxygen equipment maintenance',
    'oxygen technician services India'
  ]
};

export default function ServicesDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5" />
              Technical Capabilities
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Medical Oxygen Equipment Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Explore our core technical services covering diagnostic inspection, molecular sieve repacking, compressor rebuilds, and calibrated purity verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-blue-50 text-[#1677FF] border border-blue-200">
                    Vendor-Independent
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-2">
                    {s.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Detailed Technical Scope:
                    </p>
                    <ul className="space-y-2">
                      {s.detailedScope.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/${s.slug}`}
                    className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Full Service Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/request-service?equipment=${encodeURIComponent(s.shortTitle)}`}
                    className="inline-flex items-center gap-1.5 bg-[#0B1F33] hover:bg-[#1677FF] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
                  >
                    <Wrench className="w-3.5 h-3.5 text-[#19C6D9]" />
                    <span>Book Service</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">
              Already have an active service request?
            </h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              You can check live bench test results, view diagnostic notes, approve your estimate, or download your service report.
            </p>
            <Link
              href="/track-service"
              className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
            >
              <Search className="w-4 h-4" />
              <span>Track Service Ticket</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
