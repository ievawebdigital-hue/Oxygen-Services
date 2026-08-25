'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Mail, ShieldAlert, CheckCircle2, ArrowRight, Package, Wrench } from 'lucide-react';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import { SERVICES } from '@/lib/data/services';
import OxyBreathLogo from '@/components/layout/OxyBreathLogo';

export default function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-14 pb-20 md:pb-12 border-t border-sky-950" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Physical Branches Grid */}
        <div className="border-b border-slate-800/80 pb-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Service Workshops & Rental Hubs
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                3 Physical Workshop Locations in India
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition"
            >
              <span>View All Contact Details & Maps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-sky-500/50 transition"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300">
                    {branch.type}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {branch.city}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5">
                  {branch.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                  {branch.address}
                </p>
                <div className="pt-2.5 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <a
                    href={`tel:+91${branch.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 text-slate-200 hover:text-sky-400 font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{branch.primaryPhone}</span>
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline font-bold"
                  >
                    Map Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block py-1">
              <OxyBreathLogo size="responsive" variant="light" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Specialist oxygen concentrator repair and machine rental provider. We specialize in molecular sieve bed repouring, compressor rebuilds, and same-day sanitized rentals across Mumbai, Pune, and Lucknow.
            </p>

            <div className="space-y-2 pt-1 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Helpline: <strong>9820370015</strong> / 9819459421</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-emerald-500 font-bold"
                >
                  WhatsApp: 9820370015
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Company & Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3.5">
              About & Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about" className="text-sky-300 font-bold hover:text-white transition">
                  About Oxy Breath Services
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition">
                  Equipment Maintenance Guides
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition">
                  Medical Safety Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Technical Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3.5">
              Repair & Service
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/oxygen-concentrator-service" className="hover:text-white transition">
                  Sieve Bed Repours & Zeolite Refills
                </Link>
              </li>
              <li>
                <Link href="/oxygen-machine-service" className="hover:text-white transition">
                  Compressor & PCB Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/portable-oxygen-concentrator-service" className="hover:text-white transition">
                  Portable (POC) Pulse Sensor Service
                </Link>
              </li>
              <li>
                <Link href="/request-service?mode=repair" className="text-sky-400 font-bold hover:underline">
                  Book Doorstep Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Branch Service Zones */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3.5">
              Service Locations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/locations/mumbai" className="hover:text-white transition">
                  Mumbai (Mira Road / MMR)
                </Link>
              </li>
              <li>
                <Link href="/locations/pune" className="hover:text-white transition">
                  Pune (Mangalwar Peth / PCMC)
                </Link>
              </li>
              <li>
                <Link href="/locations/lucknow" className="hover:text-white transition">
                  Lucknow (Chinhat / Awadh)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Workshop Locations & Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-slate-300">
                  Technician Admin Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Safety Disclaimer Strip */}
        <div className="py-5 border-b border-slate-800/80">
          <div className="flex items-start gap-3 bg-slate-900/90 rounded-2xl p-4 border border-slate-800 text-xs text-slate-300">
            <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300">Medical Safety Notice: </span>
              Oxy Breath Services provides technical biomedical diagnostic, repair, and rental services for medical oxygen equipment. We do not prescribe medical oxygen therapy. Patients dependent on continuous oxygen therapy must retain a backup cylinder while their machine is being serviced.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & NAP */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oxy Breath Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-400">
            <span>Specialist Repair & Sanitized Rentals</span>
            <span>•</span>
            <span>Mumbai • Pune • Lucknow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
