'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wind,
  Activity,
  BatteryCharging,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Sparkles,
  ChevronRight,
  Gauge,
  Cpu,
  Layers
} from 'lucide-react';
import { SERVICES } from '@/lib/data/services';

const ICON_MAP: Record<string, React.ElementType> = {
  Wind,
  Activity,
  BatteryCharging,
  ShieldCheck
};

export default function CoreServicesSection() {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  return (
    <section
      id="services"
      className="py-14 lg:py-18 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC] border-y border-slate-200/80 relative overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact, clean section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 pb-4 border-b border-slate-200/70">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2.5 border border-blue-200/60 shadow-xs">
              <Wrench className="w-3.5 h-3.5" />
              <span>Biomedical Service Offerings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Specialist Oxygen Equipment Servicing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 leading-relaxed">
              Component-level diagnostics, molecular sieve repacking, compressor rebuilds, and calibrated purity verification across Mumbai, Pune, and Lucknow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/request-service"
              id="cta-book-service-core-top"
              className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 whitespace-nowrap self-start md:self-auto group cursor-pointer"
            >
              <span>Book Equipment Service</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Compact Interactive 4-Column Card Grid with Rich Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.iconName] || Wrench;
            const isHovered = activeTab === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setActiveTab(service.id)}
                className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between relative group cursor-pointer border ${
                  isHovered
                    ? 'bg-white border-blue-400 shadow-xl shadow-blue-500/10 -translate-y-1.5 ring-1 ring-blue-500/30'
                    : 'bg-white/90 hover:bg-white border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-0.5'
                }`}
              >
                {/* Glowing Top Active Accent Bar */}
                <div
                  className={`absolute top-0 left-5 right-5 h-1 rounded-b transition-all duration-300 ${
                    isHovered
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-100'
                      : 'bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-blue-400/60'
                  }`}
                />

                <div>
                  {/* Card Header: Icon + Testing Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#1677FF] text-white shadow-md shadow-blue-500/30 scale-105'
                          : 'bg-blue-50 text-[#1677FF] border border-blue-200/60 group-hover:bg-blue-100/80'
                      }`}
                    >
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110 duration-200" />
                    </div>

                    <span className="text-[10px] font-mono font-bold tracking-tight px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-700 border border-slate-200/80 group-hover:border-blue-200 transition-colors">
                      Ultrasonic Tested
                    </span>
                  </div>

                  {/* Title & Short Tagline */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1677FF] transition-colors leading-snug mb-2">
                    {service.shortTitle || service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Highlights list (Compact) */}
                  <div className="space-y-1.5 mb-4 py-2 border-y border-slate-100/90 bg-slate-50/60 rounded-xl px-2.5">
                    {service.detailedScope.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Component Chips */}
                  <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                      <Cpu className="w-3 h-3 text-slate-400" />
                      <span>Components Serviced:</span>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {service.componentsAssessed.slice(0, 3).map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded-md border border-slate-200/90 group-hover:border-blue-200 transition-colors"
                        >
                          {comp.split(' ')[0]} {comp.split(' ')[1] || ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-auto">
                  <Link
                    href={`/${service.slug}`}
                    id={`view-service-${service.id}`}
                    className="w-full text-center py-2 rounded-xl text-xs font-bold text-[#1677FF] bg-blue-50/80 hover:bg-blue-100 transition inline-flex items-center justify-center gap-1 group/btn"
                  >
                    <span>Technical Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    href={`/request-service?equipment=${encodeURIComponent(service.shortTitle)}`}
                    id={`book-service-${service.id}`}
                    className={`w-full text-center py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      isHovered
                        ? 'bg-[#0B1F33] hover:bg-[#1677FF] text-white shadow-sm'
                        : 'bg-slate-900 text-white hover:bg-[#1677FF]'
                    }`}
                  >
                    <Wrench className="w-3 h-3 text-[#19C6D9]" />
                    <span>Request Diagnosis</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Diagnostic Notice Bar */}
        <div className="mt-8 bg-white border border-slate-200/90 rounded-2xl p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 shadow-xs">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 animate-ping" />
            <span>
              <strong className="text-slate-900 font-bold">Need Emergency Assessment?</strong> Direct workshop drop-offs and courier intakes available across <strong>Mira Road (Mumbai)</strong>, <strong>Mangalwar Peth (Pune)</strong>, and <strong>Chinhat (Lucknow)</strong>.
            </span>
          </div>

          <Link
            href="/contact"
            className="text-xs font-bold text-[#1677FF] hover:underline inline-flex items-center gap-1 whitespace-nowrap flex-shrink-0"
          >
            <span>View Workshop Addresses</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
