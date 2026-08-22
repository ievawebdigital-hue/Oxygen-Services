'use client';

import React, { useState, useEffect } from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Activity,
  ChevronRight,
  ChevronLeft,
  Quote,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { TESTIMONIALS, Testimonial } from '@/lib/data/testimonials';

export default function CustomerTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // All verified testimonials across Mumbai, Pune, and Lucknow
  const testimonialsList = TESTIMONIALS;

  // Maximum items visible per view on desktop is 3
  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonialsList.length - itemsPerView);

  // Auto-play carousel with smooth transition
  useEffect(() => {
    if (isPaused || testimonialsList.length <= itemsPerView) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, testimonialsList.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials-section"
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-200 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Customer Reviews</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Patients, Clinics & Hospitals Across Mumbai, Pune & Lucknow
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from families and pulmonology clinics whose oxygen concentrators and respiratory equipment were restored to certified biomedical accuracy.
          </p>
        </div>

        {/* Carousel Container with 3 Reviews In 1 Row On Desktop */}
        <div className="relative mt-6">
          {/* Navigation Controls on Header Bar */}
          <div className="flex items-center justify-between mb-5 px-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Showing verified customer reports across all regional workshop branches</span>
            </div>

            {/* Prev / Next Carousel Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                id="carousel-prev-button"
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#1677FF] shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                id="carousel-next-button"
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#1677FF] shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-40"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Smooth Sliding Carousel Viewport */}
          <div className="overflow-hidden rounded-3xl p-1 -m-1">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonialsList.map((t: Testimonial) => (
                <div
                  key={t.id}
                  id={`testimonial-card-${t.id}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 py-2"
                >
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 relative group shadow-sm">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Rating & Verified Tag in 1 clean row */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="flex items-center gap-1 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-200/60">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-xs font-extrabold text-amber-900 ml-1">5.0</span>
                        </div>

                        {t.verified && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Verified Customer
                          </span>
                        )}
                      </div>

                      {/* Review Quote Body */}
                      <div className="relative mb-5 min-h-[96px]">
                        <Quote className="w-7 h-7 text-blue-200/50 absolute -top-2 -left-1 -z-0 pointer-events-none" />
                        <p className="text-slate-700 text-sm leading-relaxed relative z-10 font-normal italic line-clamp-4">
                          &ldquo;{t.feedback}&rdquo;
                        </p>
                      </div>

                      {/* Purity Level Recovery Diagnostic Pill */}
                      {t.purityBefore && t.purityAfter && (
                        <div className="mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                            <Activity className="w-3.5 h-3.5 text-red-500" />
                            <span>Before:</span>
                            <strong className="text-red-600 font-bold">{t.purityBefore}</strong>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                          <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Restored:</span>
                            <strong className="text-emerald-700 font-bold">{t.purityAfter} O₂</strong>
                          </div>
                        </div>
                      )}

                      {/* Device Model & Service Specification */}
                      <div className="mb-5 space-y-1 bg-blue-50/60 rounded-xl p-3 border border-blue-100/80">
                        <div className="flex items-center gap-1.5 text-xs text-[#0B1F33] font-bold truncate">
                          <Wrench className="w-3.5 h-3.5 text-[#1677FF] flex-shrink-0" />
                          <span className="truncate">{t.machineModel}</span>
                        </div>
                        <div className="text-[11px] text-blue-700 font-medium pl-5 truncate">
                          {t.serviceType}
                        </div>
                      </div>
                    </div>

                    {/* Review Author & Branch Footnote */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white font-extrabold text-xs flex items-center justify-center shadow-sm">
                          {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{t.name}</h4>
                          <p className="text-[11px] text-slate-500 leading-tight">{t.role} • {t.location.split(',')[0]}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-block text-[10px] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md max-w-[130px] truncate" title={t.branchName}>
                          {t.branchCity}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-0.5">{t.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                id={`carousel-dot-${idx}`}
                onClick={() => {
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-[#1677FF]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Interactive Trust Metric Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0B1F33] via-slate-900 to-[#0B1F33] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="text-amber-400 font-black">4.9 / 5.0 Rating</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Trusted by 1,800+ families and respiratory clinics across Mumbai, Pune, and Lucknow for ultrasonic calibration, sieve bed repacking, and compressor rebuilds.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/request-service"
              id="cta-book-service-testimonials"
              className="px-6 py-3 bg-[#1677FF] hover:bg-[#0958D9] text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Machine Service</span>
            </Link>
            <Link
              href="/track-service"
              id="cta-track-service-testimonials"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition flex items-center gap-2"
            >
              <span>Track Active Repair</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
