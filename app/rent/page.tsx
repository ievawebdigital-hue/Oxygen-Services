'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package,
  Phone,
  MessageSquare,
  MapPin
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { RENTAL_EQUIPMENT } from '@/lib/data/rentals';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function RentalCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Rental of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-300">
                  Oxygen Concentrators
                </span>
              </h1>

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

              <div className="w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-xl w-max sm:w-auto">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-3 sm:px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap min-h-[38px] flex items-center justify-center ${
                      selectedCategory === 'all'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All Machines ({RENTAL_EQUIPMENT.length})
                  </button>
                  <button
                    onClick={() => setSelectedCategory('5L Stationary')}
                    className={`px-3 sm:px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap min-h-[38px] flex items-center justify-center ${
                      selectedCategory === '5L Stationary'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    5L Stationary
                  </button>
                  <button
                    onClick={() => setSelectedCategory('10L High Flow')}
                    className={`px-3 sm:px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap min-h-[38px] flex items-center justify-center ${
                      selectedCategory === '10L High Flow'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    10L High Flow
                  </button>
                  <button
                    onClick={() => setSelectedCategory('Portable (POC)')}
                    className={`px-3 sm:px-3.5 py-1.5 text-xs font-extrabold rounded-lg transition whitespace-nowrap min-h-[38px] flex items-center justify-center ${
                      selectedCategory === 'Portable (POC)'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Portable (POC)
                  </button>
                </div>
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
                    <div className="p-6 bg-slate-50/70">
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
