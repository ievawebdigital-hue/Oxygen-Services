'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Wrench, ArrowRight, MessageSquare, Clock } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

interface HelplineUrgentBannerProps {
  id?: string;
}

export default function HelplineUrgentBanner({ id = 'urgent-helpline-top' }: HelplineUrgentBannerProps) {
  return (
    <section id={id} className="py-8 sm:py-10 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-20 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Emergency Repair & Rental Response</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get Your Oxygen-Concentrator Fixed <span className="text-sky-600">NOW!</span>
          </h2>

          <div className="my-4 sm:my-5">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="inline-flex items-center gap-3 text-2xl sm:text-4xl md:text-5xl font-black text-sky-600 hover:text-sky-700 tracking-tight transition group"
              id="top-helpline-phone-btn"
            >
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              <span>{COMPANY_CONTACT.primaryPhone.slice(0, 4)} - {COMPANY_CONTACT.primaryPhone.slice(4, 7)} - {COMPANY_CONTACT.primaryPhone.slice(7)}</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Connect directly with one of our professional biomedical oxygen concentrator repair technicians for immediate diagnosis, doorstep pickup, or rental assistance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/request-service?mode=repair"
              className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
              id="btn-get-repair-urgent"
            >
              <Wrench className="w-4 h-4" />
              <span>Get Repair</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2"
              id="btn-contact-urgent"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2"
              id="btn-whatsapp-urgent"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Tech</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
