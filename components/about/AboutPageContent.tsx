'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Wrench,
  CheckCircle2,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Activity,
  HeartHandshake,
  Cpu,
  Flame,
  FileText,
  Building2,
  Users,
  ArrowRight,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import OxyBreathLogo from '@/components/layout/OxyBreathLogo';

export default function AboutPageContent() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">
      {/* Top Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A192F] via-[#0D2447] to-[#0A192F] text-white py-16 sm:py-24 border-b border-sky-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Biomedical Engineering & Technical Excellence</span>
            </div>

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

      {/* Key Metric Highlights Strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
              <div className="text-2xl sm:text-3xl font-black text-sky-700">12,500+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Concentrators Serviced</div>
            </div>
            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
              <div className="text-2xl sm:text-3xl font-black text-sky-700">3 Hubs</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Mumbai, Pune & Lucknow</div>
            </div>
            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
              <div className="text-2xl sm:text-3xl font-black text-sky-700">93% - 96%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Guaranteed O2 Purity</div>
            </div>
            <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
              <div className="text-2xl sm:text-3xl font-black text-sky-700">90 Days</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Service & Zeolite Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story & Purpose Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm inline-block">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Certified Biomedical Engineers</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Specialized training across stationary and portable pulse-dose POC architectures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Digital Purity Certificate</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Every unit is tested with calibrated Fluke / Maxtec ultrasonic analyzers and certified.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0A192F] to-[#1E3A8A] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>Our Engineering Standards</span>
              </h3>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <span><strong>100% Genuine Molecular Zeolite:</strong> Fresh, moisture-free sieve repouring to guarantee 93%–96% O2 concentration.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <span><strong>Ultrasonic Purity Benchmarking:</strong> Calibrated testing at maximum rated flow rates (5 LPM, 10 LPM, pulse steps).</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <span><strong>Compressor Cup & Seal Rebuilding:</strong> Replacing worn PTFE piston cups, reed valves, and sleeve seals.</span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    4
                  </div>
                  <span><strong>Doorstep Pickup & Live Tracking:</strong> Seamless logistics across Mumbai, Pune, and Lucknow with real-time status updates.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-sky-300 font-semibold">Need urgent assistance?</p>
                  <p className="text-sm font-bold text-white">Direct Engineer Helpline</p>
                </div>
                <a
                  href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition"
                >
                  9820370015
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Step Quality Assurance & Rebuild Protocol */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Protocolized Biomedical Workflow
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              The 10-Step Quality Rebuild Standard
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Every oxygen machine entering our workshops passes through our comprehensive 10-point inspection and restoration protocol before returning to service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Intake Inspection', desc: 'Visual inspection, cabinet disinfection, hour-meter recording, and symptom verification.' },
              { step: '02', title: 'Purity Baseline Test', desc: 'Ultrasonic analyzer measurement to record initial oxygen purity percentage.' },
              { step: '03', title: 'Pneumatic Pressure Check', desc: 'Testing high/low pressure regulator outputs, solenoid cycle valve operation, and leaks.' },
              { step: '04', title: 'Compressor Diagnostics', desc: 'Measuring operating amperage, thermal rise, vibration isolation, and piston cup wear.' },
              { step: '05', title: 'Sieve Bed Repour', desc: 'Purging expired media, replacing internal micro-mesh filters, and refilling with fresh zeolite.' },
              { step: '06', title: 'Intake & HEPA Filter Swap', desc: 'Installing brand-new gross particle filters, foam filters, and certified final HEPA/bacterial filters.' },
              { step: '07', title: 'Circuit & Alarm Validation', desc: 'Verifying power-failure beepers, low-O2 alarm triggers, pressure sensors, and PCB circuits.' },
              { step: '08', title: '4-Hour Burn-In Stress Test', desc: 'Continuous operation test under simulated room conditions to verify sustained 93-96% purity.' },
              { step: '09', title: 'Digital Certificate Issuance', desc: 'Generating detailed technical service report with serial number, purity data, and warranty card.' },
              { step: '10', title: 'Sterilization & Delivery', desc: 'Medical-grade outer disinfection, sealed protective wrapping, and doorstep handover.' },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-sky-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black text-sky-600 bg-sky-100 px-2 py-0.5 rounded">
                    Step {item.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-3">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Dedicated Workshop Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Physical Presence & Coverage
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Our 3 Diagnostic Workshops in India
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Visit our state-of-the-art service centers or request doorstep technician pickup in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 text-sky-800">
                    {branch.type}
                  </span>
                  <span className="text-xs font-extrabold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    {branch.city}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {branch.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {branch.address}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Working Hours:</span>
                    <strong className="text-slate-900">8:00 AM – 9:00 PM (Daily)</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Doorstep Pickup:</span>
                    <strong className="text-emerald-700 font-bold">Same-Day Available</strong>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`tel:+91${branch.primaryPhone}`}
                  className="flex-1 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold py-2.5 px-3 rounded-xl text-xs text-center border border-sky-200 transition"
                >
                  Call {branch.primaryPhone}
                </a>

                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-3 rounded-xl text-xs text-center transition"
                >
                  Map Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Supported Equipment & Brands */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Multi-Brand Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Supported Concentrator Makes & Technologies
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Our technicians service all major global and domestic respiratory brands with genuine components and manufacturer-grade calibration tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              'Philips Respironics',
              'DeVilbiss Healthcare',
              'Inogen (POC)',
              'Nidek Medical',
              'Yuwell',
              'BPL Medical',
              'Oxymed',
              'Evox',
              'AirSep / Caire',
              'Invacare',
              'BMC Medical',
              'ResMed (POC)'
            ].map((brand) => (
              <div
                key={brand}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 text-center font-bold text-xs text-slate-200 hover:border-sky-400 hover:text-white transition"
              >
                {brand}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            * All third-party brand names and trademarks belong to their respective manufacturers and are referenced strictly for compatibility identification.
          </div>
        </div>
      </section>

      {/* Call to Action Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
