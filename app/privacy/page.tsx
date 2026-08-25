import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Privacy Policy | Oxy Breath Services',
  description: 'How Oxy Breath Services collects, handles, and protects customer contact and equipment service records.'
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <ShieldCheck className="w-8 h-8 text-[#1677FF]" />
              <div>
                <h1 className="text-2xl font-extrabold text-[#0B1F33]">Privacy Policy</h1>
                <p className="text-xs text-slate-500">Oxy Breath Services • Privacy & Data Security</p>
              </div>
            </div>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Information We Collect</h2>
              <p>
                When submitting a service ticket, we collect contact information (Name, Mobile Phone Number, WhatsApp Number, City, Address) and equipment telemetry (Equipment Model, Serial Number, Fault Description, and Intake Photos).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">How We Use Your Data</h2>
              <p>
                Customer data is used exclusively to facilitate equipment diagnosis, send milestone tracking updates, coordinate doorstep pickup/drop-off, and generate GST invoices. We never sell, lease, or distribute customer details to third-party marketing entities.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">Payment Data Security</h2>
              <p>
                Online payment simulations and real gateway transactions are processed through encrypted PCI-DSS compliant channels. Oxy Breath Services does not store customer card numbers or banking passwords on internal servers.
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
