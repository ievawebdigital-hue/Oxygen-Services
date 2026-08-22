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
    <section className="py-16 lg:py-24 bg-[#F7FAFC]" id="branches">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Physical Facilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
            Our 3 Service Centers & Diagnostic Hubs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Visit our branch diagnostic workshops or arrange convenient equipment drop-off and pickup across Mumbai, Pune, and Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Branch Header Banner */}
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-blue-50/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#1677FF] text-white">
                      {branch.type}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {branch.state}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F33]">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    Serving {branch.city} & surrounding metropolitan areas
                  </p>
                </div>

                {/* Google Map Embed */}
                <div className="w-full h-44 bg-slate-200 relative border-b border-slate-100">
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
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-[#1677FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5">Physical Address:</p>
                      <p className="leading-relaxed text-slate-600">
                        {branch.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5">Operating Hours:</p>
                      <p className="text-slate-600">{branch.hours}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Key Areas Covered:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {branch.keyAreas.slice(0, 5).map((area, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Action Buttons */}
              <div className="p-6 pt-0 space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:+91${branch.primaryPhone}`}
                    className="flex items-center justify-center gap-1.5 bg-[#0B1F33] hover:bg-[#1677FF] text-white py-2.5 px-3 rounded-xl text-xs font-bold transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#19C6D9]" />
                    <span>Call Branch</span>
                  </a>

                  <a
                    href={branch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-3 rounded-xl text-xs font-bold transition"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#1677FF]" />
                    <span>Get Directions</span>
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
    </section>
  );
}
