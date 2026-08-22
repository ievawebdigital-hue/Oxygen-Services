import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Mail, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import { SERVICES } from '@/lib/data/services';

export default function Footer() {
  return (
    <footer className="bg-[#0B1F33] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 3 Physical Branches Grid */}
        <div className="border-b border-slate-800/80 pb-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#19C6D9]">
                Our Service Centers & Diagnostic Hubs
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                3 Physical Branch Locations in India
              </h2>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1677FF] hover:text-[#19C6D9] transition"
            >
              <span>Explore All Branch Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#1677FF]/20 text-[#19C6D9]">
                    {branch.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {branch.city}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {branch.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {branch.address}
                </p>
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                  <a
                    href={`tel:+91${branch.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#19C6D9]" />
                    <span>{branch.primaryPhone}</span>
                  </a>
                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1677FF] hover:underline font-semibold"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1677FF] to-[#19C6D9] p-2 flex items-center justify-center">
                <svg viewBox="0 0 36 36" fill="none" className="w-full h-full text-white">
                  <circle cx="18" cy="18" r="14" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 3" />
                  <circle cx="18" cy="18" r="6.5" fill="#0B1F33" stroke="#FFFFFF" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  OXYGEN{' '}
                </span>
                <span className="font-bold text-xl tracking-tight text-[#19C6D9]">
                  SERVICES
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              Specialist, vendor-independent medical oxygen equipment service and repair provider. We service, calibrate, and troubleshoot stationary oxygen machines, oxygen concentrators, and portable oxygen concentrators across Mumbai, Pune, and Lucknow.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-[#19C6D9] flex-shrink-0" />
                <span>Primary: <strong>9820370015</strong> / Secondary: 9819459421</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MessageSquare className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline decoration-emerald-500"
                >
                  WhatsApp Support: 9820370015
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-[#1677FF] flex-shrink-0" />
                <span>mumbai@oxygenservices.in</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Technical Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${s.slug}`}
                    className="hover:text-white hover:underline transition"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Locations & Local SEO */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Branch Service Zones
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/locations/mumbai"
                  className="hover:text-white hover:underline transition"
                >
                  Oxygen Concentrator Repair Mumbai
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/pune"
                  className="hover:text-white hover:underline transition"
                >
                  Oxygen Concentrator Service Pune
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/lucknow"
                  className="hover:text-white hover:underline transition"
                >
                  Oxygen Machine Repair Lucknow
                </Link>
              </li>
              <li>
                <Link
                  href="/track-service"
                  className="text-[#19C6D9] hover:underline font-semibold"
                >
                  Track Live Service Ticket
                </Link>
              </li>
              <li>
                <Link
                  href="/request-service"
                  className="text-[#1677FF] hover:underline font-semibold"
                >
                  Submit Service Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Guides & Company */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Knowledge & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/resources" className="hover:text-white transition">
                  Troubleshooting Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact & Branches
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition">
                  Medical & Safety Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition">
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Safety Disclaimer Strip */}
        <div className="py-6 border-b border-slate-800/80">
          <div className="flex items-start gap-3 bg-slate-900/90 rounded-xl p-4 border border-amber-900/40 text-xs text-slate-300">
            <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300">Medical Safety Notice: </span>
              Oxygen Services provides technical diagnostic, repair, and maintenance services for medical oxygen equipment only. We do not diagnose medical conditions, provide medical advice, or prescribe oxygen therapy. Patients dependent on continuous oxygen therapy must always retain an emergency backup oxygen cylinder or secondary source while equipment is being serviced.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & NAP */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oxygen Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Specialist Technical Service for Medical Oxygen Equipment</span>
            <span>•</span>
            <span>Mumbai • Pune • Lucknow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
