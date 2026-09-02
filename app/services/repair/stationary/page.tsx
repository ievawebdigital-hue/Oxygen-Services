'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  Phone,
  MessageSquare,
  Search,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { STATIONARY_BRANDS } from '@/lib/data/brands';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function StationaryRepairPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filteredBrands = STATIONARY_BRANDS.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.popularModels.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner for Stationary Concentrator Repairs */}
        <section className="relative bg-[#0A192F] text-white py-14 sm:py-18 overflow-hidden border-b border-sky-950">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/90 to-sky-950/60 z-10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Oxygen Concentrator{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  Service & Repair
                </span>
              </h1>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-service?mode=repair"
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-sky-500/25 transition inline-flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Repair</span>
                </Link>
                <a
                  href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                  className="bg-slate-900/90 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-sm border border-slate-700 transition inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call: 9820370015</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Search and Filter Header */}
        <section className="py-8 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Select Your Machine Brand ({STATIONARY_BRANDS.length} Brands Serviced)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Click on any brand below to view repair procedures, supported models, and book doorstep pickup.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search brand (e.g. Philips, Yuwell, BPL)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 18 Stationary Brands Grid with Real Machine Photos */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredBrands.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-600 font-bold">No brands found matching &quot;{searchQuery}&quot;.</p>
                <p className="text-xs text-slate-500 mt-1">Our biomedical lab handles all commercial and unlisted brands.</p>
                <Link
                  href="/request-service?mode=repair"
                  className="mt-4 inline-flex items-center gap-2 bg-[#0284c7] text-white px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  <span>Book Custom Machine Repair</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBrands.map((brand, index) => (
                  <div
                    key={brand.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all overflow-hidden flex flex-col justify-between group"
                    id={`stationary-brand-${brand.id}`}
                  >
                    <div>
                      {/* Machine Image Preview */}
                      <div className="relative h-44 w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                        <Image
                          src={brand.imageUrl}
                          alt={`${brand.name} Oxygen Concentrator Machine`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        
                        {/* Brand Index Badge & Capacity */}
                        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                          #{index + 1} {brand.name}
                        </div>

                        <div className="absolute bottom-3 left-3 text-white">
                          <span className="text-xs font-bold block">{brand.capacity}</span>
                          <span className="text-[10px] text-sky-300">Stationary Home Unit</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition">
                            {brand.name} Oxygen Concentrator
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="p-5 pt-0 mt-2 flex items-center gap-2">
                      <Link
                        href={`/request-service?mode=repair&brand=${encodeURIComponent(brand.name)}`}
                        className="flex-1 bg-[#0284c7] hover:bg-[#0369a1] text-white py-2.5 px-3 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <Wrench className="w-3.5 h-3.5" />
                        <span>Book Repair</span>
                      </Link>
                      <a
                        href={COMPANY_CONTACT.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-xl transition flex items-center justify-center"
                        title="Inquire on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
