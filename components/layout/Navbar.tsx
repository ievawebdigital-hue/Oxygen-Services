'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MessageSquare,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Wrench,
  Package,
  Wind,
  Home,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACT, BRANCHES } from '@/lib/data/branches';
import { STATIONARY_BRANDS, POC_BRANDS } from '@/lib/data/brands';
import OxyBreathLogo from '@/components/layout/OxyBreathLogo';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [repairSubmenuOpen, setRepairSubmenuOpen] = useState(false);
  const [mobileRepairOpen, setMobileRepairOpen] = useState(true);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
      {/* Top Catchy Marquee Announcement & Emergency Bar */}
      <div
        className="bg-gradient-to-r from-[#071324] via-[#0A192F] to-[#071324] text-slate-200 text-xs py-2 border-b border-sky-950/60 overflow-hidden relative"
        id="top-marquee-bar"
      >
        <div className="w-full px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Marquee Infinite Scrolling Ticker */}
          <div className="w-full overflow-hidden relative">
            <div className="animate-marquee whitespace-nowrap text-xs font-medium text-slate-300 flex items-center gap-8 py-0.5 select-none">
              {/* Items Set 1 */}
              <span className="inline-flex items-center gap-2 text-sky-200">
                <span className="text-amber-400 font-bold">⚡ Same-Day Doorstep Pickup</span>
                <span className="text-slate-400">•</span>
                <span>Mumbai (Mira Rd) • Pune (Mangalwar Peth) • Lucknow (Chinhat)</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold">
                <span>🔬 Guaranteed 93%–96% O2 Purity Restoration with Ultrasonic QC Report</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-sky-300">
                <span>💎 100% Genuine Molecular Sieve Zeolite Repouring (Lithium-X & Sodium-X)</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
                <span>🛡️ 90-Day Full Service & Zeolite Warranty</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <span>🏥 Multi-Brand Repairs: Philips, Nidek, Yuwell, Inogen, Evox, Oxymed, BMC, BPL & 20+ Brands</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-rose-300 font-bold">
                <span>🚨 Emergency Helpline: +91 9820370015 / 9819459421</span>
              </span>

              <span className="text-slate-600">✦</span>

              {/* Items Set 2 (Duplicate for continuous loop) */}
              <span className="inline-flex items-center gap-2 text-sky-200">
                <span className="text-amber-400 font-bold">⚡ Same-Day Doorstep Pickup</span>
                <span className="text-slate-400">•</span>
                <span>Mumbai (Mira Rd) • Pune (Mangalwar Peth) • Lucknow (Chinhat)</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold">
                <span>🔬 Guaranteed 93%–96% O2 Purity Restoration with Ultrasonic QC Report</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-sky-300">
                <span>💎 100% Genuine Molecular Sieve Zeolite Repouring (Lithium-X & Sodium-X)</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
                <span>🛡️ 90-Day Full Service & Zeolite Warranty</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-slate-200">
                <span>🏥 Multi-Brand Repairs: Philips, Nidek, Yuwell, Inogen, Evox, Oxymed, BMC, BPL & 20+ Brands</span>
              </span>

              <span className="text-slate-600">✦</span>

              <span className="inline-flex items-center gap-1.5 text-rose-300 font-bold">
                <span>🚨 Emergency Helpline: +91 9820370015 / 9819459421</span>
              </span>

              <span className="text-slate-600">✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group py-1" id="nav-brand-logo">
            <OxyBreathLogo size="responsive" variant="color" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-bold rounded-xl transition ${
                pathname === '/'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN - EXACT 2 OPTIONS */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => {
                setServicesDropdownOpen(false);
                setRepairSubmenuOpen(false);
              }}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold rounded-xl transition cursor-pointer ${
                  pathname.includes('/services') || pathname.includes('/rent')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                id="nav-services-menu-btn"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
              </button>

              {/* Main Services Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-[440px] bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-1.5 border-b border-slate-100 mb-2">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Medical Oxygen Solutions (2 Core Offerings)
                    </p>
                  </div>

                  <div className="px-2 space-y-2">
                    {/* OPTION 1: Service and Repair of Oxygen Concentrator */}
                    <div className="p-2.5 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-1.5">
                      <div className="flex items-center gap-2 px-2 py-1 text-xs font-black text-sky-950 uppercase tracking-wider">
                        <Wrench className="w-4 h-4 text-sky-600" />
                        <span>1. Service & Repair of Oxygen Concentrator</span>
                      </div>

                      {/* Sub-item 1.1: Home (Stationary) */}
                      <Link
                        href="/services/repair/stationary"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white bg-white/70 border border-slate-200/70 hover:border-sky-300 hover:shadow-sm transition group"
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          setRepairSubmenuOpen(false);
                        }}
                        id="nav-sub-stationary"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition mt-0.5">
                          <Home className="w-4 h-4" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-extrabold text-slate-900 group-hover:text-sky-700">
                              Home (Stationary)
                            </p>
                            <span className="text-[10px] bg-sky-100 text-sky-800 font-bold px-1.5 py-0.5 rounded">
                              18 Brands
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                            Philips, Nidek, Yuwell, BPL, Oxymed, Evox & 13 more
                          </p>
                        </div>
                      </Link>

                      {/* Sub-item 1.2: Portable Oxygen (POC) */}
                      <Link
                        href="/services/repair/portable"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white bg-white/70 border border-slate-200/70 hover:border-cyan-300 hover:shadow-sm transition group"
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          setRepairSubmenuOpen(false);
                        }}
                        id="nav-sub-poc"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition mt-0.5">
                          <Wind className="w-4 h-4" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-extrabold text-slate-900 group-hover:text-cyan-700">
                              Portable Oxygen (POC)
                            </p>
                            <span className="text-[10px] bg-cyan-100 text-cyan-800 font-bold px-1.5 py-0.5 rounded">
                              8 POC Brands
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                            Column sieve refill for Inogen, SimplyGo, Oxymed, AirSep
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* OPTION 2: Rental of Oxygen Concentrator */}
                    <Link
                      href="/rent"
                      className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50 hover:border-emerald-300 transition group"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        setRepairSubmenuOpen(false);
                      }}
                      id="nav-sub-rentals"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition">
                        <Package className="w-4 h-4" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-black text-slate-900 group-hover:text-emerald-700 uppercase tracking-wide">
                            2. Rental of Oxygen Concentrator
                          </p>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                            5L • 10L • POC
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Hospital-sanitized rental fleet from ₹3,500/mo with free sterile accessories & same-day delivery
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-bold rounded-xl transition flex items-center gap-1.5 ${
                pathname === '/about' || pathname === '/about-us'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
              id="nav-about-us-link"
            >
              <span>About Us</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-bold rounded-xl transition ${
                pathname === '/contact'
                  ? 'text-sky-600 bg-sky-50'
                  : 'text-slate-700 hover:text-sky-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action: Prominent Big Phone Number */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Big Prominent Helpline Number */}
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-sky-50/90 border border-sky-200 hover:bg-sky-100 hover:border-sky-300 transition group shadow-xs"
              id="nav-btn-book-service"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white flex items-center justify-center group-hover:scale-105 transition shadow-sm shadow-sky-500/25 flex-shrink-0">
                <Phone className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-extrabold text-sky-800 tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>Call Helpline</span>
                </div>
                <div className="text-xl font-black tracking-tight text-slate-950 group-hover:text-sky-700 leading-none mt-0.5">
                  9820370015
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button with Bigger Number */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs shadow-xs"
              aria-label="Call Helpline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-sm font-black">9820370015</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
              id="nav-mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            Home
          </Link>

          {/* SERVICES HEADER ACCORDION - EXACT 2 OPTIONS */}
          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 space-y-3">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500 px-1">
              Services (2 Core Options)
            </p>

            {/* Option 1: Service and Repair of Oxygen Concentrator */}
            <div className="space-y-1.5 bg-white p-2.5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-black text-sky-950 uppercase tracking-wider px-1">
                <Wrench className="w-3.5 h-3.5 text-sky-600" />
                <span>1. Service & Repair</span>
              </div>

              <div className="space-y-1 pt-1">
                <Link
                  href="/services/repair/stationary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-bold text-slate-800 bg-sky-50/50 hover:bg-sky-50 border border-sky-100"
                >
                  <span className="flex items-center gap-2">
                    <Home className="w-3.5 h-3.5 text-sky-600" />
                    <span>Home (Stationary)</span>
                  </span>
                  <span className="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded font-bold">
                    18 Brands
                  </span>
                </Link>

                <Link
                  href="/services/repair/portable"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-bold text-slate-800 bg-cyan-50/50 hover:bg-cyan-50 border border-cyan-100"
                >
                  <span className="flex items-center gap-2">
                    <Wind className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Portable Oxygen (POC)</span>
                  </span>
                  <span className="text-[10px] bg-cyan-100 text-cyan-800 px-1.5 py-0.5 rounded font-bold">
                    8 POC Brands
                  </span>
                </Link>
              </div>
            </div>

            {/* Option 2: Rental of Oxygen Concentrator */}
            <Link
              href="/rent"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-xs font-black text-emerald-950 bg-emerald-50/70 border border-emerald-200 hover:bg-emerald-100"
            >
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4 text-emerald-600" />
                <span>2. Rental of Oxygen Concentrator</span>
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold">
                5L • 10L • POC
              </span>
            </Link>
          </div>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            About Us & Quality Standards
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            Contact & Workshop Hubs
          </Link>

          <div className="pt-2">
            <Link
              href="/request-service?mode=repair"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#0284c7] text-white py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Doorstep Pickup</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
