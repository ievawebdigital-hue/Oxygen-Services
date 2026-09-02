'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Phone,
  MessageSquare,
  HeartHandshake
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';
import OxyBreathLogo from '@/components/layout/OxyBreathLogo';

export default function AboutPageContent() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      {/* Top Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0D2447] to-[#0A192F] text-white py-16 sm:py-24 border-b border-sky-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              About <span className="text-sky-400">Oxy Breath Services</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
              India&apos;s specialist technical diagnostic, repair, and rebuilding center for medical oxygen concentrators, portable POC devices, and respiratory therapy hardware. Operating dedicated precision workshops in Mumbai, Pune, and Lucknow.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/request-service?mode=repair"
                className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/25 text-sm flex items-center gap-2 transition"
                id="about-hero-cta"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Service & Inspection</span>
              </Link>

              <a
                href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-5 py-3.5 rounded-xl text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Helpline: 9820370015</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Purpose Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm inline-block">
              <OxyBreathLogo size="md" variant="color" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-sky-600" />
            <span>Our Mission & Foundation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Dedicated to Restoring Pure, Life-Sustaining Oxygen Output
          </h2>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Founded by a dedicated team of biomedical service engineers and respiratory equipment specialists, <strong>Oxy Breath Services</strong> was created with a single uncompromising mission: to provide families, clinics, and healthcare providers with rapid, scientifically verified, and cost-effective maintenance for medical oxygen concentrators.
            </p>
            <p>
              When a home oxygen machine or portable POC suffers from degraded molecular sieves, low oxygen purity alarm codes, or compressor motor failures, patients and caregivers cannot afford days of uncertainty. We built physical workshop hubs equipped with calibrated ultrasonic oxygen analyzers, oil-free compressor test benches, and controlled humidity sieve-repacking stations to deliver prompt turnaround and guaranteed results.
            </p>
            <p>
              Unlike generic electronics repair shops, we adhere strictly to biomedical standards—utilizing imported high-capacity synthetic zeolite (Lithium-X and Sodium-X grades), multi-stage particulate and HEPA filtration, and rigorous 4-hour continuous burn-in stress tests before releasing any machine.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Service Your Oxygen Concentrator?
            </h2>
            <p className="text-sm text-sky-100 leading-relaxed">
              Book doorstep pickup across Mumbai, Pune, and Lucknow. Our technicians will inspect your machine, provide an itemized diagnostic estimate, and restore maximum oxygen output.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/request-service?mode=repair"
              className="bg-white hover:bg-slate-100 text-sky-900 font-extrabold px-6 py-3.5 rounded-xl text-center text-sm shadow-md transition"
              id="about-bottom-cta"
            >
              Book Doorstep Pickup
            </Link>

            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-6 py-3.5 rounded-xl text-center text-sm shadow-md transition flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
