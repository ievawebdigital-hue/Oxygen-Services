'use client';

import React from 'react';
import Link from 'next/link';
import {
  Package,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Volume2,
  Battery,
  Gauge,
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { RENTAL_EQUIPMENT, RENTAL_BENEFITS } from '@/lib/data/rentals';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function RentalFleetSection() {
  return (
    <section id="rentals" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-4 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full border border-sky-200/60 inline-flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5" />
              <span>Rental Equipment Fleet</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
              Oxygen Concentrators Available on Rent
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed">
              Fully sanitized, clinically certified machines delivered same-day to your doorstep in Mumbai, Pune, and Lucknow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Same-Day Delivery</span>
            </a>
          </div>
        </div>

        {/* 3-Card Grid of Rental Machines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {RENTAL_EQUIPMENT.map((item) => (
            <div
              key={item.id}
              id={`rental-card-${item.id}`}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  In Stock & Ready
                </span>
              </div>

              {/* Title & Short Description */}
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {item.shortDescription}
                </p>

                {/* Pricing Box */}
                <div className="bg-gradient-to-r from-sky-50 to-blue-50/60 rounded-2xl p-4 border border-sky-100 mb-5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                        ₹{item.monthlyRate.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium"> / month</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-600 block">
                        ₹{item.weeklyRate.toLocaleString('en-IN')} / wk
                      </span>
                      <span className="text-[10px] text-slate-400">
                        ₹{item.dailyRate}/day
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-sky-200/50 flex items-center justify-between text-[11px] text-slate-600">
                    <span>Refundable Deposit:</span>
                    <span className="font-bold text-slate-800">₹{item.securityDeposit.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-2 mb-5 text-xs text-slate-700">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-sky-600" />
                      Flow Output:
                    </span>
                    <span className="font-semibold text-slate-800">{item.flowRate.split('(')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Purity:
                    </span>
                    <span className="font-bold text-emerald-700">{item.purity}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                      Sound Level:
                    </span>
                    <span className="font-semibold text-slate-800">{item.soundLevel}</span>
                  </div>
                </div>

                {/* Included Accessories */}
                <div className="mb-6 bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-sky-600" />
                    <span>Included With Every Rental:</span>
                  </p>
                  <ul className="space-y-1 text-[11px] text-slate-600">
                    {item.includedAccessories.slice(0, 3).map((acc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2 mt-auto">
                <Link
                  href={`/request-service?mode=rent&equipment=${encodeURIComponent(item.name)}`}
                  className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white py-3 rounded-xl font-bold text-xs sm:text-sm text-center shadow-md shadow-sky-500/20 transition flex items-center justify-center gap-2 group/btn"
                  id={`btn-rent-${item.id}`}
                >
                  <Package className="w-4 h-4" />
                  <span>Book This Machine</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/919820370015?text=Hello%20Oxygen%20Services%2C%20I%20want%20to%20rent%20the%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 py-2 rounded-xl font-bold text-xs text-center transition"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rental Benefits 4-Pillar Strip */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-center text-base sm:text-lg font-bold text-slate-900 mb-6">
            Oxy Breath Services Rental Guarantee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RENTAL_BENEFITS.map((benefit, idx) => (
              <div key={idx} className="space-y-1.5 text-center sm:text-left">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm mx-auto sm:mx-0">
                  0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{benefit.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
