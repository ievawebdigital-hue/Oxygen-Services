import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageSquare,
  Navigation,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Service Centers & Locations | Oxygen Services (Mumbai, Pune, Lucknow)',
  description: 'Physical service centers and diagnostic workshops in Mumbai (Mira Road), Pune (Mangalwar Peth), and Lucknow (Chinhat). Specialist medical oxygen equipment repair.',
  keywords: [
    'oxygen concentrator service Mumbai',
    'oxygen machine service Pune',
    'oxygen equipment repair Lucknow',
    'oxygen concentrator repair near me',
    'medical oxygen equipment locations'
  ]
};

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Physical Centers
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Our 3 Physical Branch Locations
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Oxygen Services operates dedicated diagnostic workshops and service centers across Maharashtra and Uttar Pradesh with bench testing, sieve repacking, and compressor rebuilding facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="p-6 border-b border-slate-100 bg-slate-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#1677FF] text-white">
                        {branch.type}
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase">
                        {branch.state}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      {branch.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {branch.description}
                    </p>
                  </div>

                  {/* Map Embed */}
                  <div className="h-48 w-full bg-slate-200 relative border-b border-slate-100">
                    <iframe
                      title={`${branch.name} Google Map`}
                      src={branch.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-6 space-y-4 text-xs">
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Exact Address:</p>
                      <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
                        {branch.address}
                      </p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900 mb-1">Operating Hours:</p>
                      <p className="text-slate-600">{branch.hours}</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900 mb-1.5">Services Available at Branch:</p>
                      <ul className="space-y-1 text-slate-600">
                        {branch.servicesAvailable.slice(0, 4).map((srv, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+91${branch.primaryPhone}`}
                      className="flex items-center justify-center gap-1.5 bg-[#0B1F33] hover:bg-[#1677FF] text-white py-2.5 rounded-xl font-bold text-xs transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#19C6D9]" />
                      <span>Call Branch</span>
                    </a>

                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl font-bold text-xs transition"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#1677FF]" />
                      <span>Directions</span>
                    </a>
                  </div>

                  <Link
                    href={`/locations/${branch.id}`}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1677FF] hover:underline pt-2"
                  >
                    <span>View Dedicated {branch.city} Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
