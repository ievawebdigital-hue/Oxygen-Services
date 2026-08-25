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
  ArrowRight,
  Package
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { TESTIMONIALS, Testimonial } from '@/lib/data/testimonials';

export default function CustomerTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonialsList = TESTIMONIALS;
  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonialsList.length - itemsPerView);

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
      className="py-14 lg:py-20 bg-white border-b border-slate-200/80 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Verified Customer Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Trusted by Families, Clinics & Hospitals
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Real feedback from patients and clinics across Mumbai, Pune & Lucknow for machine repairs and rental services.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-6">
          {/* Controls */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-semibold text-slate-500">
              Showing verified feedback across Mumbai, Pune & Lucknow branches
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="carousel-prev-button"
                onClick={handlePrev}
                aria-label="Previous testimonials"
                className="w-9 h-9 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 shadow-xs flex items-center justify-center transition cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                id="carousel-next-button"
                onClick={handleNext}
                aria-label="Next testimonials"
                className="w-9 h-9 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 shadow-xs flex items-center justify-center transition cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Sliding Viewport */}
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
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2.5 py-2"
                >
                  <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 h-full flex flex-col justify-between hover:shadow-lg hover:border-sky-300 hover:bg-white transition-all duration-300 relative group">
                    <div>
                      {/* Rating & Verified Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-xs font-extrabold text-amber-900 ml-0.5">5.0</span>
                        </div>

                        {t.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Verified
                          </span>
                        )}
                      </div>

                      {/* Review Quote Body */}
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 italic line-clamp-3">
                        &ldquo;{t.feedback}&rdquo;
                      </p>

                      {/* Purity Level Recovery Diagnostic Pill */}
                      {t.purityBefore && t.purityAfter && (
                        <div className="mb-3 p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1 text-slate-500">
                            <span>Before:</span>
                            <strong className="text-red-600 font-bold">{t.purityBefore}</strong>
                          </div>
                          <ChevronRight className="w-3 h-3 text-slate-400" />
                          <div className="flex items-center gap-1 text-slate-500">
                            <span>Restored:</span>
                            <strong className="text-emerald-700 font-bold">{t.purityAfter}</strong>
                          </div>
                        </div>
                      )}

                      {/* Device Model & Service Specification */}
                      <div className="mb-4 bg-white rounded-xl p-2.5 border border-slate-200/80">
                        <div className="flex items-center gap-1.5 text-xs text-slate-900 font-bold truncate">
                          <Wrench className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                          <span className="truncate">{t.machineModel}</span>
                        </div>
                        <div className="text-[11px] text-sky-700 font-semibold pl-5 truncate">
                          {t.serviceType}
                        </div>
                      </div>
                    </div>

                    {/* Review Author & Branch Footnote */}
                    <div className="pt-3 border-t border-slate-200 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center">
                          {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                          <p className="text-[10px] text-slate-500">{t.location.split(',')[0]}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                          {t.branchCity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
