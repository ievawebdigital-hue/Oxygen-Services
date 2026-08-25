'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

export default function BranchLocationsSection() {
  return (
    <section className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200/80" id="branches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100/80 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Diagnostic & Rental Hubs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 3 Service Workshops & Rental Centers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Visit our physical centers or schedule doorstep pickup and rental delivery across Mumbai, Pune, and Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Branch Header Banner */}
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-sky-50/50 to-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#0284c7] text-white">
                      {branch.type}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {branch.state}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    Serving {branch.city} & surrounding metropolitan areas
                  </p>
                </div>

                {/* Google Map Embed */}
                <div className="w-full h-40 bg-slate-100 relative border-b border-slate-100">
                  <iframe
                    title={`${branch.name} Map`}
                    src={branch.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>

                {/* Address & Contact Info */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5">Physical Workshop:</p>
                      <p className="leading-relaxed text-slate-600">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5">Operating Hours:</p>
                      <p className="text-slate-600">{branch.hours}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Key Areas Covered:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {branch.keyAreas.slice(0, 4).map((area, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:+91${branch.primaryPhone}`}
                    className="flex items-center justify-center gap-1.5 bg-[#0A192F] hover:bg-[#0284c7] text-white py-2.5 px-3 rounded-xl text-xs font-bold transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>Call Branch</span>
                  </a>

                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-3 rounded-xl text-xs font-bold transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-sky-600" />
                    <span>Directions</span>
                  </a>
                </div>

                <Link
                  href={`/locations/${branch.id}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-sky-600 hover:underline pt-1"
                >
                  <span>View {branch.city} Hub Details & Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
