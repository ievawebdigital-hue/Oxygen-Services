import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Phone,
  MessageSquare,
  Search,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function FinalCtaSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0B1F33] via-[#0D2642] to-slate-900 text-white relative overflow-hidden">
      {/* Decorative SVG lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90%" cy="20%" r="300" stroke="#19C6D9" strokeWidth="2" fill="none" strokeDasharray="8 6" />
          <circle cx="10%" cy="80%" r="200" stroke="#1677FF" strokeWidth="2" fill="none" strokeDasharray="8 6" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-[#19C6D9]/40 text-[#19C6D9] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Specialist Biomedical Equipment Support
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Oxygen Equipment Not Working?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
          Get professional service support from <strong className="text-white font-semibold">Oxygen Services</strong>. Specialist diagnosis, molecular sieve repacking, and preventive maintenance across Mumbai, Pune, and Lucknow.
        </p>

        {/* 3 City Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-medium">
          <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#19C6D9]" />
            Mumbai Head Office
          </span>
          <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#19C6D9]" />
            Pune Branch
          </span>
          <span className="bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#19C6D9]" />
            Lucknow Branch
          </span>
        </div>

        {/* Action Button Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <Link
            href="/request-service"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            id="final-cta-request-btn"
          >
            <Wrench className="w-5 h-5" />
            <span>Request a Service</span>
          </Link>

          <a
            href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#0B1F33] px-7 py-4 rounded-xl font-bold text-base shadow-md transition transform hover:-translate-y-0.5"
            id="final-cta-call-btn"
          >
            <Phone className="w-5 h-5 text-[#1677FF]" />
            <span>Call 9820370015</span>
          </a>

          <a
            href={COMPANY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-7 py-4 rounded-xl font-bold text-base shadow-md transition transform hover:-translate-y-0.5"
            id="final-cta-whatsapp-btn"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Search className="w-3.5 h-3.5 text-[#19C6D9]" />
          <span>Already submitted a device?</span>
          <Link href="/track-service" className="text-[#19C6D9] underline font-semibold hover:text-white">
            Track your service ticket here
          </Link>
        </div>
      </div>
    </section>
  );
}
