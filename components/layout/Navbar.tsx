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
  Activity,
  Wind,
  BatteryCharging,
  ShieldCheck,
  MapPin,
  Clock,
  Wrench,
  FileText
} from 'lucide-react';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Trust & Announcement Bar */}
      <div className="bg-[#0B1F33] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1677FF]/20 text-[#19C6D9] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#19C6D9] animate-ping" />
              Specialist Service
            </span>
            <span className="hidden md:inline text-slate-300">
              Mumbai • Pune • Lucknow
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-slate-300">
              Service • Repair • Maintenance • Technical Support
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#19C6D9] transition font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#19C6D9]" />
              <span>9820370015</span>
            </a>
            <span className="text-slate-500">/</span>
            <a
              href={`tel:+91${COMPANY_CONTACT.secondaryPhone}`}
              className="hidden sm:inline-flex items-center text-slate-300 hover:text-white transition"
            >
              <span>9819459421</span>
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-[#16A34A] hover:bg-[#15803D] text-white px-2.5 py-0.5 rounded font-medium transition"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B1F33] to-[#1677FF] p-2 flex items-center justify-center shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 36 36" fill="none" className="w-full h-full text-white">
                {/* Oxygen Molecule & Flow Icon */}
                <circle cx="18" cy="18" r="14" stroke="#19C6D9" strokeWidth="2.5" strokeDasharray="6 3" />
                <circle cx="18" cy="18" r="6.5" fill="#1677FF" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M12 18C12 15 15 12 18 12C21 12 24 15 24 18" stroke="#19C6D9" strokeWidth="2" strokeLinecap="round" />
                <circle cx="18" cy="18" r="2" fill="#FFFFFF" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#0B1F33]">
                  OXYGEN
                </span>
                <span className="font-bold text-xl tracking-tight text-[#1677FF]">
                  SERVICES
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 -mt-0.5">
                Medical Oxygen Equipment Service
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                pathname === '/'
                  ? 'text-[#1677FF] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-100/70'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition ${
                  pathname.includes('service')
                    ? 'text-[#1677FF] bg-blue-50/80'
                    : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-100/70'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Technical Services
                    </p>
                  </div>
                  <Link
                    href="/oxygen-concentrator-service"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/60 transition group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-[#1677FF] group-hover:bg-[#1677FF] group-hover:text-white transition">
                      <Wind className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-[#1677FF]">
                        Oxygen Concentrator Service
                      </p>
                      <p className="text-xs text-slate-500">
                        Sieve repacking, purity check, compressor repair
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/oxygen-machine-service"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/60 transition group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-emerald-700">
                        Oxygen Machine Service
                      </p>
                      <p className="text-xs text-slate-500">
                        Diagnostics, PCB repair & motor maintenance
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/portable-oxygen-concentrator-service"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/60 transition group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition">
                      <BatteryCharging className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-amber-700">
                        Portable Concentrator (POC)
                      </p>
                      <p className="text-xs text-slate-500">
                        Columns, pulse breath sensors & battery test
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/medical-oxygen-equipment-service"
                    className="flex items-start gap-3 px-4 py-2.5 hover:bg-blue-50/60 transition group"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-cyan-100 text-cyan-800 group-hover:bg-cyan-700 group-hover:text-white transition">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-cyan-800">
                        Medical Oxygen Equipment
                      </p>
                      <p className="text-xs text-slate-500">
                        Flowmeters, regulators & auxiliary testing
                      </p>
                    </div>
                  </Link>

                  <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-[#1677FF] hover:underline"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      View All Service Specifications →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition ${
                  pathname.includes('location')
                    ? 'text-[#1677FF] bg-blue-50/80'
                    : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-100/70'
                }`}
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Our 3 Physical Branches
                    </p>
                  </div>
                  {BRANCHES.map((b) => (
                    <Link
                      key={b.id}
                      href={`/locations/${b.id}`}
                      className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 transition group"
                      onClick={() => setLocationsDropdownOpen(false)}
                    >
                      <MapPin className="w-4 h-4 text-[#1677FF] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-slate-800 group-hover:text-[#1677FF]">
                          {b.name}
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {b.city}, {b.state}
                        </p>
                      </div>
                    </Link>
                  ))}
                  <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
                    <Link
                      href="/locations"
                      className="text-xs font-bold text-[#1677FF] hover:underline"
                      onClick={() => setLocationsDropdownOpen(false)}
                    >
                      View All Branch Details & Maps →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition ${
                pathname.includes('resources')
                  ? 'text-[#1677FF] bg-blue-50/80'
                  : 'text-slate-700 hover:text-[#0B1F33] hover:bg-slate-100/70'
              }`}
            >
              Troubleshooting & Guides
            </Link>

            <Link
              href="/track-service"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-bold rounded-lg transition ${
                pathname === '/track-service'
                  ? 'text-[#1677FF] bg-blue-50'
                  : 'text-slate-700 hover:text-[#1677FF] hover:bg-slate-100/70'
              }`}
            >
              <Search className="w-4 h-4 text-[#1677FF]" />
              <span>Track Service</span>
            </Link>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition transform hover:-translate-y-0.5"
              id="nav-request-service-btn"
            >
              <Wrench className="w-4 h-4" />
              <span>Request a Service</span>
            </Link>

            <Link
              href="/admin"
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
              title="Technician / Branch Admin Portal"
            >
              Admin Portal
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/track-service"
              className="p-2 text-slate-600 hover:text-[#1677FF] rounded-lg"
              title="Track Service"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B1F33] rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            <Link
              href="/request-service"
              className="flex items-center justify-center gap-1.5 bg-[#1677FF] text-white py-2.5 px-3 rounded-lg text-sm font-bold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Wrench className="w-4 h-4" />
              <span>Request Service</span>
            </Link>
            <Link
              href="/track-service"
              className="flex items-center justify-center gap-1.5 bg-slate-100 text-slate-800 py-2.5 px-3 rounded-lg text-sm font-bold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Search className="w-4 h-4 text-[#1677FF]" />
              <span>Track Ticket</span>
            </Link>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              Services
            </p>
            <Link
              href="/oxygen-concentrator-service"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oxygen Concentrator Service & Repair
            </Link>
            <Link
              href="/oxygen-machine-service"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oxygen Machine Service & Diagnostics
            </Link>
            <Link
              href="/portable-oxygen-concentrator-service"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portable Oxygen Concentrator (POC) Service
            </Link>
            <Link
              href="/medical-oxygen-equipment-service"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-blue-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Medical Oxygen Equipment & Accessories
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              Branches
            </p>
            <Link
              href="/locations/mumbai"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mumbai Head Office (Mira Road)
            </Link>
            <Link
              href="/locations/pune"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pune Branch (Mangalwar Peth)
            </Link>
            <Link
              href="/locations/lucknow"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Lucknow Branch (Chinhat)
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <Link
              href="/resources"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Troubleshooting Guides & Articles
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Nearest Branch
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technician / Admin Login
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0B1F33] text-white py-2.5 rounded-lg text-sm font-bold"
            >
              <Phone className="w-4 h-4 text-[#19C6D9]" />
              <span>Call 9820370015</span>
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#16A34A] text-white py-2.5 rounded-lg text-sm font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
