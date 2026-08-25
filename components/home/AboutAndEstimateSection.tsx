'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  Phone,
  Clock,
  Wrench,
  AlertCircle
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

const CHECKLIST_ITEMS = [
  'Repoured / Refill Sieve Beds (Medical-Grade Zeolite)',
  'Complete Oil-Less Compressor Rebuild & Piston Rings',
  'Replace Anti-Vibration Rubber Motor Mounts',
  'Rebuild Valve Assembly & Solenoid Manifolds',
  'Replace HEPA & Intake Bacteria Filters',
  'Clean & Replace Gross Particle Filters',
  'Test Capacitors (Start & Run - Replace if degraded)',
  'Thoroughly clean Interior & Exterior chassis',
  'Test electric cooling fan & thermal overload sensors',
  'Run unit for quality testing burn-in with Ultrasonic Purity Meter prior to delivery',
];

export default function AboutAndEstimateSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="about-and-estimate" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: About Us & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                About <span className="text-sky-600">Us</span>
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                Your Local Oxygen Concentrator Service Specialist
              </p>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                <strong className="text-slate-900">Oxy Breath Services</strong> is dedicated to providing the highest standard of biomedical service and concentrator repair. When your oxygen concentrator needs attention, you shouldn&apos;t have to wait for long. Our technicians are skilled in servicing all home and portable oxygen-concentrator machines, whether you need residential doorstep care or clinic equipment servicing.
              </p>
            </div>

            {/* Checklist Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Our 10-Point Rebuild & Inspection Standard</span>
              </h3>

              <div className="space-y-2.5">
                {CHECKLIST_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 border border-sky-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              We are committed to delivering top-notch customer service and specialized concentrator repairs to meet your medical needs. Our team is well-versed in handling all types of stationary and portable oxygen machines. For questions, please check our{' '}
              <Link href="/contact" className="text-sky-600 font-bold hover:underline">
                contact details here
              </Link>
              .
            </p>
          </div>

          {/* Right Column: Free Estimate Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative sticky top-24">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Free <span className="text-sky-600">Estimate</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Get your concentrator diagnosed & fixed today!
                </p>
              </div>

              {status === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">Estimate Request Received!</h4>
                  <p className="text-xs text-emerald-700 mt-1 leading-relaxed">
                    Our biomedical engineer will review your request and call you back within 15–30 minutes with transparent pricing.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-xl transition cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="est-name" className="block text-xs font-bold text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="est-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
                      />
                    </div>

                    <div>
                      <label htmlFor="est-phone" className="block text-xs font-bold text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="est-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="est-email" className="block text-xs font-bold text-slate-700 mb-1">
                      Email or City / Area
                    </label>
                    <input
                      type="text"
                      id="est-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., Mumbai / Pune / Lucknow"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="est-message" className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Machine Model & Problem
                    </label>
                    <textarea
                      id="est-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention machine brand (Philips, Yuwell, Inogen etc.) and issue (low purity, alarm beep, loud noise, rent inquiry)..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-300 text-white font-extrabold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                    id="btn-get-quote-estimate"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>GET A QUOTE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 Zero spam guarantee. We only contact you regarding your repair estimate.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
