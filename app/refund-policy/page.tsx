import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CreditCard, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Oxy Breath Services',
  description: 'Cancellation and refund policies for diagnostic charges, parts replacement, and preventive maintenance packages by Oxy Breath Services.'
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <CreditCard className="w-8 h-8 text-[#1677FF]" />
              <div>
                <h1 className="text-2xl font-extrabold text-[#0B1F33]">Refund & Cancellation Policy</h1>
                <p className="text-xs text-slate-500">Oxy Breath Services</p>
              </div>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Service Cancellation Before Work Inception</h2>
              <p>
                If you cancel a service request prior to technician dispatch or bench disassembly, you are entitled to a 100% refund of any prepaid booking deposit.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Diagnostic Bench Fees</h2>
              <p>
                Once an initial bench inspection has been performed and ultrasonic purity measurements recorded, the diagnostic fee covers technician bench time and is non-refundable. If you choose to proceed with the recommended repair, the diagnostic fee is credited against the total invoice.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Replaced Consumables</h2>
              <p>
                HEPA filters, bacterial filters, and repacked molecular sieve zeolite materials once installed cannot be returned or refunded after completion testing due to medical hygiene protocols.
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
