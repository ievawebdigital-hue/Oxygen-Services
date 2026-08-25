import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Terms of Service & Equipment Repair Agreement | Oxy Breath Services',
  description: 'Terms and conditions governing diagnostics, equipment intake, estimate authorization, repair warranties, and storage policies by Oxy Breath Services.'
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <FileText className="w-8 h-8 text-[#1677FF]" />
              <div>
                <h1 className="text-2xl font-extrabold text-[#0B1F33]">Terms of Service</h1>
                <p className="text-xs text-slate-500">Effective Date: January 1, 2026 • Oxy Breath Services</p>
              </div>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Service Scope & Intake Diagnostics</h2>
              <p>
                Upon equipment intake at our Mumbai, Pune, or Lucknow facilities, an initial inspection is conducted to record physical housing condition, hour-meter reading, and baseline oxygen concentration. A diagnostic fee may apply if repairs are declined after diagnosis is completed.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Customer Estimate Authorization</h2>
              <p>
                No billable component replacements (such as molecular sieve canisters, compressor wobble cups, or circuit boards) are initiated without express customer authorization via digital tracker approval, email, or WhatsApp message.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Repair Service Limited Warranty</h2>
              <p>
                Repaired components, including repacked molecular sieve beds and rebuilt compressor assemblies, carry a 90-day limited warranty against workmanship and material defects from the date of handover. The warranty does not cover liquid damage, external voltage surges, dropped equipment, or physical dust saturation due to unwashed gross filters.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Equipment Collection & Storage</h2>
              <p>
                Customers are requested to collect serviced units within 30 days of receiving the completion notification. Units uncollected after 60 days may incur daily storage fees.
              </p>
            </section>

            <div className="pt-4 border-t border-slate-100">
              <Link href="/" className="inline-flex items-center gap-1 text-xs font-bold text-[#1677FF] hover:underline">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
