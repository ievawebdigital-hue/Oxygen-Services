'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, MessageSquare, Headphones } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function MiddleHelpBanner() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200" id="middle-helpline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Headphones className="w-3.5 h-3.5" />
            <span>Direct Biomedical Assistance</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Getting <span className="text-sky-600">Help</span> is Easy
          </h2>

          <div className="my-4 sm:my-5">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="inline-flex items-center gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-5xl font-black text-sky-600 hover:text-sky-700 tracking-tight transition group"
              id="middle-helpline-phone"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 group-hover:scale-110 transition-transform" />
              <span>{COMPANY_CONTACT.primaryPhone.slice(0, 4)} - {COMPANY_CONTACT.primaryPhone.slice(4, 7)} - {COMPANY_CONTACT.primaryPhone.slice(7)}</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-6">
            Have a question about your machine, purity alarm, or rental options? Give us a call or stop by for a free quote. It&apos;s that easy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
              id="btn-middle-ask-us"
            >
              <Phone className="w-4 h-4" />
              <span>Call Technician</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2"
              id="btn-middle-contact"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
