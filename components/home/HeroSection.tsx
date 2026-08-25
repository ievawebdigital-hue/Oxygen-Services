'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Package,
  Phone,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

// Import generated hero slider images
import heroRepairLab from '@/src/assets/images/hero_repair_lab_1787421415668.jpg';
import heroRentalFleet from '@/src/assets/images/hero_rental_fleet_1787421429568.jpg';
import heroPurityTest from '@/src/assets/images/hero_purity_test_1787421441811.jpg';
import heroDoorstepService from '@/src/assets/images/hero_doorstep_service_1787421458147.jpg';

interface HeroSlide {
  id: number;
  tag: string;
  headline: string;
  highlightedText: string;
  subhead: string;
  image: any;
  alt: string;
  highlights: string[];
  primaryCta: { label: string; href: string; icon: any };
  secondaryCta: { label: string; href: string; icon: any; isCall?: boolean; isWhatsApp?: boolean };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'Biomedical Repair Laboratory',
    headline: 'Oxygen Concentrator Repair & ',
    highlightedText: 'Sieve Bed Repours',
    subhead: 'Specialist molecular sieve zeolite repours, compressor rebuilding, and circuit board servicing. Restoring 95%+ medical oxygen purity for Philips, DeVilbiss, Inogen, and Yuwell.',
    image: heroRepairLab,
    alt: 'Biomedical laboratory technician repairing medical oxygen concentrator',
    highlights: ['95%±3% Purity Calibration', 'Genuine Zeolite Repours', '24-48 Hr Turnaround'],
    primaryCta: {
      label: 'Book Repair Service',
      href: '/request-service?mode=repair',
      icon: Wrench,
    },
    secondaryCta: {
      label: 'Call: 9820370015',
      href: `tel:+91${COMPANY_CONTACT.primaryPhone}`,
      icon: Phone,
      isCall: true,
    },
  },
  {
    id: 2,
    tag: 'Sanitized Rental Fleet',
    headline: 'Rent 5L, 10L & Portable POC ',
    highlightedText: 'From ₹3,500/Month',
    subhead: 'Pristine, 100% sanitized medical oxygen concentrators delivered same-day to your residence in Mumbai, Pune, and Lucknow with complete sterile accessories.',
    image: heroRentalFleet,
    alt: 'Fleet of sanitized 5L, 10L, and portable oxygen concentrators ready for rent',
    highlights: ['5L & 10L High Flow Units', 'Portable Battery POCs', 'Free Cannula & Bottle'],
    primaryCta: {
      label: 'Book Concentrator Service',
      href: '/request-service?mode=repair',
      icon: Wrench,
    },
    secondaryCta: {
      label: 'WhatsApp for Rates',
      href: COMPANY_CONTACT.whatsappUrl,
      icon: MessageSquare,
      isWhatsApp: true,
    },
  },
  {
    id: 3,
    tag: 'Clinical Quality Assurance',
    headline: 'Guaranteed 95%±3% Purity With ',
    highlightedText: 'Ultrasonic Calibration',
    subhead: 'Every repaired machine undergoes continuous 2-hour burn-in testing and digital acoustic analyzer verification with a signed QC test report.',
    image: heroPurityTest,
    alt: 'Biomedical ultrasonic oxygen analyzer displaying verified purity level',
    highlights: ['Digital Acoustic Testing', 'Signed QC Purity Certificate', 'Immediate Swap Warranty'],
    primaryCta: {
      label: 'About Our Quality Protocols',
      href: '/about',
      icon: CheckCircle2,
    },
    secondaryCta: {
      label: 'Chat on WhatsApp',
      href: COMPANY_CONTACT.whatsappUrl,
      icon: MessageSquare,
      isWhatsApp: true,
    },
  },
  {
    id: 4,
    tag: 'Mumbai • Pune • Lucknow Hubs',
    headline: 'Fast Doorstep Pickup & Delivery ',
    highlightedText: 'Across 3 Major Regions',
    subhead: 'Our dedicated biomedical field engineers provide rapid doorstep machine pickup, hospital room delivery, and on-site demonstrations in Mumbai MMR, Pune PCMC, and Lucknow.',
    image: heroDoorstepService,
    alt: 'Biomedical service delivery engineer delivering oxygen concentrator',
    highlights: ['Mumbai Hub (Mira Road)', 'Pune Hub (Mangalwar Peth)', 'Lucknow Hub (Chinhat)'],
    primaryCta: {
      label: 'View Workshop Hubs',
      href: '/contact',
      icon: ArrowRight,
    },
    secondaryCta: {
      label: 'Call Helpline: 9820370015',
      href: `tel:+91${COMPANY_CONTACT.primaryPhone}`,
      icon: Phone,
      isCall: true,
    },
  },
];

const AUTO_PLAY_INTERVAL = 5500; // 5.5 seconds per slide

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer logic with smooth progress bar
  useEffect(() => {
    if (!isPlaying || isHovered) {
      return;
    }

    const stepMs = 50;
    const totalSteps = AUTO_PLAY_INTERVAL / stepMs;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      const pct = Math.min(100, (currentStep / totalSteps) * 100);
      setProgress(pct);

      if (currentStep >= totalSteps) {
        currentStep = 0;
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, stepMs);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, isHovered, totalSlides, currentSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="hero-slider-section"
      className="relative overflow-hidden bg-slate-950 text-white min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Oxy Breath Services Hero Slider"
    >
      {/* Full-Bleed Clear Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.alt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Lightweight, Transparent Gradient Overlay to keep image clear while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 z-10" />
      </div>

      {/* Floating Prev / Next Navigation Arrows on the Sides */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-[#0284c7] text-white border border-white/20 backdrop-blur-md items-center justify-center transition shadow-lg cursor-pointer"
        id="hero-slider-left-arrow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/60 hover:bg-[#0284c7] text-white border border-white/20 backdrop-blur-md items-center justify-center transition shadow-lg cursor-pointer"
        id="hero-slider-right-arrow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Content Overlay */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 sm:py-16 lg:py-20 w-full flex-grow flex items-center">
        <div className="max-w-2xl sm:max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>{activeSlide.tag}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-md">
                {activeSlide.headline}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-200">
                  {activeSlide.highlightedText}
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow">
                {activeSlide.subhead}
              </p>

              {/* Clean 3-Key Highlights Checklist */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-1 text-xs sm:text-sm font-semibold text-slate-100">
                {activeSlide.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Clean Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  href={activeSlide.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/30 transition transform hover:-translate-y-0.5"
                  id={`hero-primary-cta-${activeSlide.id}`}
                >
                  <activeSlide.primaryCta.icon className="w-4 h-4" />
                  <span>{activeSlide.primaryCta.label}</span>
                </Link>

                {activeSlide.secondaryCta.isCall ? (
                  <a
                    href={activeSlide.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white text-sm sm:text-base font-bold px-5 py-3.5 rounded-xl border border-slate-700 backdrop-blur-md transition transform hover:-translate-y-0.5"
                    id={`hero-call-cta-${activeSlide.id}`}
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>{activeSlide.secondaryCta.label}</span>
                  </a>
                ) : (
                  <a
                    href={activeSlide.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold px-5 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    id={`hero-whatsapp-cta-${activeSlide.id}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{activeSlide.secondaryCta.label}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Clean Bottom Navigation Bar & Progress Indicator */}
      <div className="relative z-20 bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Controls: Play/Pause & Slide Count */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
              className="w-8 h-8 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 flex items-center justify-center transition cursor-pointer"
              id="hero-slider-play-pause-btn"
              title={isPlaying ? 'Pause auto-play' : 'Resume auto-play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 rounded-md">
              0{currentSlide + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Minimalist Slide Indicator Pills */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`text-left px-3 py-1.5 rounded-xl border text-xs transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-sky-600/40 border-sky-400 text-white font-bold shadow-xs'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                  id={`hero-slide-tab-${slide.id}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                  <span className="whitespace-nowrap truncate max-w-[130px] sm:max-w-[180px]">
                    {slide.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Auto-Play Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
}
