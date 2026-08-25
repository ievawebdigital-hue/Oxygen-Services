'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Package,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Gauge,
  Activity,
  Zap,
  Sparkles,
  Truck,
  HeartHandshake,
  Check,
  ChevronRight,
  Filter
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { RENTAL_EQUIPMENT, RENTAL_BENEFITS, RentalEquipment } from '@/lib/data/rentals';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function RentalCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEquipment, setSelectedEquipment] = useState<RentalEquipment | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? RENTAL_EQUIPMENT
    : RENTAL_EQUIPMENT.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#0A192F] text-white py-14 sm:py-18 overflow-hidden border-b border-sky-950">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-sky-950/60 z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-400/30">
                <Package className="w-3.5 h-3.5" />
                <span>Medical Equipment Rentals • Mumbai • Pune • Lucknow</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Rental of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">
                  Oxygen Concentrators
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Hospital-grade sanitized 5 LPM Stationary, 10 LPM High-Flow, and lightweight Portable (POC) oxygen machines on transparent weekly and monthly rental plans. Includes free sterile accessories and doorstep technician setup.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-slate-200">
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Truck className="w-4 h-4 text-emerald-400" />
                  <span>Same-Day Doorstep Dispatch</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>95%±3% Certified Medical Purity</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <HeartHandshake className="w-4 h-4 text-amber-400" />
                  <span>Free Immediate Backup Swap</span>
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-service?mode=rent"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-600/25 transition inline-flex items-center gap-2"
                  id="btn-rent-hero-book"
                >
                  <Package className="w-4 h-4" />
                  <span>Reserve a Rental Machine</span>
                </Link>
                <a
                  href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                  className="bg-slate-900/90 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-sm border border-slate-700 transition inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Helpline: 9820370015</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rental Benefits Strip */}
        <section className="bg-white border-b border-slate-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RENTAL_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-black text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-sm text-slate-900">{benefit.title}</h2>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Filter & Catalog Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter Tabs */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Available Oxygen Rental Fleet
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  All machines calibrated with biomedical purity analyzers prior to patient dispatch.
                </p>
              </div>

              <div className="flex items-center bg-slate-200/80 p-1 rounded-xl">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition ${
                    selectedCategory === 'all'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Machines ({RENTAL_EQUIPMENT.length})
                </button>
                <button
                  onClick={() => setSelectedCategory('5L Stationary')}
                  className={`px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition ${
                    selectedCategory === '5L Stationary'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  5L Stationary
                </button>
                <button
                  onClick={() => setSelectedCategory('10L High Flow')}
                  className={`px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition ${
                    selectedCategory === '10L High Flow'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  10L High Flow
                </button>
                <button
                  onClick={() => setSelectedCategory('Portable (POC)')}
                  className={`px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition ${
                    selectedCategory === 'Portable (POC)'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Portable (POC)
                </button>
              </div>
            </div>

            {/* Rental Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition overflow-hidden flex flex-col justify-between group"
                  id={`rental-card-${item.id}`}
                >
                  <div>
                    {/* Card Top Header */}
                    <div className="p-6 border-b border-slate-100 bg-slate-50/70">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {item.category}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Ready for Dispatch
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* Pricing Box */}
                    <div className="p-6 bg-emerald-50/40 border-b border-emerald-100/60">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Monthly Plan</p>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-black text-slate-950">₹{item.monthlyRate.toLocaleString('en-IN')}</span>
                            <span className="text-xs font-bold text-slate-500">/ month</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Weekly Plan</p>
                          <div className="text-sm font-extrabold text-slate-700 mt-0.5">
                            ₹{item.weeklyRate.toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-500">/ wk</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-emerald-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                        <span>Refundable Deposit: <strong className="text-slate-900">₹{item.securityDeposit.toLocaleString('en-IN')}</strong></span>
                        <span className="text-emerald-700 font-bold">Zero Maintenance Cost</span>
                      </div>
                    </div>

                    {/* Key Specifications Grid */}
                    <div className="p-6 border-b border-slate-100 space-y-3">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Technical Specifications</p>
                      
                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <p className="text-[10px] text-slate-500 font-medium">Flow Rate</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{item.flowRate}</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <p className="text-[10px] text-slate-500 font-medium">Oxygen Purity</p>
                          <p className="font-extrabold text-emerald-700 mt-0.5">{item.purity}</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <p className="text-[10px] text-slate-500 font-medium">Machine Weight</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{item.weight}</p>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <p className="text-[10px] text-slate-500 font-medium">Sound Level</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{item.soundLevel}</p>
                        </div>
                      </div>

                      {/* Included Free Accessories */}
                      <div className="pt-3">
                        <p className="text-[11px] font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Included Free with Rental Kit:</span>
                        </p>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {item.includedAccessories.map((acc, accIdx) => (
                            <li key={accIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{acc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Booking CTA Footer */}
                  <div className="p-6 bg-slate-50/50 space-y-2">
                    <Link
                      href={`/request-service?mode=rent&equipment=${encodeURIComponent(item.name)}`}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
                      id={`btn-rent-book-${item.id}`}
                    >
                      <Package className="w-4 h-4" />
                      <span>Reserve This Machine Now</span>
                    </Link>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                        className="flex items-center justify-center gap-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 py-2 rounded-xl font-bold text-xs transition"
                      >
                        <Phone className="w-3.5 h-3.5 text-sky-600" />
                        <span>Call Helpline</span>
                      </a>

                      <a
                        href={`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent(
                          `Hello Oxy Breath Services, I would like to inquire about renting the ${item.name} (${item.category}). Please share availability and delivery timing.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 py-2 rounded-xl font-bold text-xs transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Rental Process Section */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Simple 4-Step Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                How Our Oxygen Concentrator Rental Works
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Zero hassle medical support with doorstep technician setup and digital billing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-4 shadow-md shadow-emerald-600/25">
                  1
                </div>
                <h3 className="font-extrabold text-base text-slate-900">Select & Reserve</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Choose between 5L, 10L, or Portable POC based on your doctor&apos;s prescription flow requirement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-4 shadow-md shadow-emerald-600/25">
                  2
                </div>
                <h3 className="font-extrabold text-base text-slate-900">Sanitization & QC</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  The unit undergoes rigorous 4-hour ultrasonic purity burn-in and clinical disinfection at our hub.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-4 shadow-md shadow-emerald-600/25">
                  3
                </div>
                <h3 className="font-extrabold text-base text-slate-900">Doorstep Setup</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Our trained biomedical field engineer delivers the machine, installs accessories, and demonstrates operation to the patient.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-base flex items-center justify-center mb-4 shadow-md shadow-emerald-600/25">
                  4
                </div>
                <h3 className="font-extrabold text-base text-slate-900">24/7 Ongoing Support</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Continuous backup assurance. If you ever need assistance or an extension, we are just a quick phone call away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hub Locations Footnote */}
        <section className="py-10 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Instant Rental Dispatch Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto">
              Same-day delivery fleet available across Mumbai (Mira Road / MMR), Pune (Mangalwar Peth / PCMC), and Lucknow (Chinhat).
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
              <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Mumbai Hub: +91 9820370015</span>
              </span>
              <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Pune Hub: +91 9820370015</span>
              </span>
              <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Lucknow Hub: +91 9820370015</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
