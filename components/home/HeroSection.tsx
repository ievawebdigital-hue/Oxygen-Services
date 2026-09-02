'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Phone,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

// Import generated hero slider images
import heroRepairLab from '@/src/assets/images/hero_repair_lab_1787421415668.jpg';
import heroRentalFleet from '@/src/assets/images/hero_rental_fleet_1787421429568.jpg';
import heroDoorstepService from '@/src/assets/images/hero_doorstep_service_1787421458147.jpg';

interface HeroSlide {
  id: number;
  tag: string;
  headline: string;
  highlightedText: string;
  subhead?: string;
  image: any;
  alt: string;
  primaryCta: { label: string; href: string; icon: any };
  secondaryCta: { label: string; href: string; icon: any; isCall?: boolean; isWhatsApp?: boolean };
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: 'Biomedical Repair Laboratory',
    headline: 'Oxygen Concentrator Repair & ',
    highlightedText: 'Services',
    image: heroRepairLab,
    alt: 'Biomedical laboratory technician repairing medical oxygen concentrator',
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
    tag: 'Rentals',
    headline: 'Rent 5 liters , 10 liters & portable oxygen concentrators | ',
    highlightedText: '3000 Per month',
    image: heroRentalFleet,
    alt: 'Fleet of sanitized 5L, 10L, and portable oxygen concentrators ready for rent',
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
    tag: 'Mumbai • Pune • Lucknow Hubs',
    headline: 'Fast Doorstep Pickup & Delivery ',
    highlightedText: 'Across 3 Major Regions',
    image: heroDoorstepService,
    alt: 'Biomedical service delivery engineer delivering oxygen concentrator',
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
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-play timer logic
  useEffect(() => {
    if (isHovered) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTO_PLAY_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered, totalSlides]);

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
              {activeSlide.subhead && (
                <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal drop-shadow">
                  {activeSlide.subhead}
                </p>
              )}

              {/* Call to Action Buttons */}
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
    </section>
  );
}
