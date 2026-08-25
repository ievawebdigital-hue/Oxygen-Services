'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

interface ReviewItem {
  id: number;
  author: string;
  avatarLetter: string;
  timeAgo: string;
  rating: number;
  content: string;
  verifiedService: string;
  ownerResponse?: string;
}

const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: 'Himadris Deshmukh',
    avatarLetter: 'H',
    timeAgo: '2 weeks ago',
    rating: 5,
    content: 'Super Service & Nice behavior. They came to my home within 2 hours of calling, diagnosed my Philips EverFlo low oxygen issue, and repaired the sieve beds in their workshop with genuine zeolite. Purity is back to 95%. Highly recommended!',
    verifiedService: 'Philips EverFlo Sieve Bed Repour',
    ownerResponse: 'Thank you so much for your trust in Oxy Breath Services!',
  },
  {
    id: 2,
    author: 'Goutham Gohan',
    avatarLetter: 'G',
    timeAgo: '1 month ago',
    rating: 5,
    content: 'The technician was very much user friendly, guided me with complete knowledge about oxygen concentrator from 0 to 100. Replaced our Nidek Nuvo compressor rings same day. Very reasonable pricing compared to official dealer quotes.',
    verifiedService: 'Nidek Nuvo 5 Compressor Rebuild',
    ownerResponse: 'Glad we could assist you and your family promptly!',
  },
  {
    id: 3,
    author: 'Dr. Rajeshwari Kulkarni',
    avatarLetter: 'R',
    timeAgo: '2 months ago',
    rating: 5,
    content: 'We rent 5L and 10L oxygen concentrators for our clinic in Pune. Always hospital-sanitized machines, delivered on time with sterile tubing, humidifier bottle, and digital purity report. Flawless service.',
    verifiedService: '10L Dual Flow Machine Rental',
    ownerResponse: 'Thank you Doctor for relying on our rental fleet.',
  },
  {
    id: 4,
    author: 'Anand Srivastava',
    avatarLetter: 'A',
    timeAgo: '3 months ago',
    rating: 5,
    content: 'Our portable Inogen One G3 showed column expired alarm right before travel. The team repoured the sieve columns and reset the sensors within 24 hours. Saved our trip!',
    verifiedService: 'Inogen One G3 POC Column Refill',
    ownerResponse: 'Safe travels Anand ji, happy to help anytime!',
  },
];

export default function GoogleReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GOOGLE_REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GOOGLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews-section" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            What our client <span className="text-sky-600">says</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Google 5.0 Rating Badge */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-2 shadow-xs">
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 leading-snug">
                    Oxygen Concentrator Machine Repair And Service
                  </h3>
                  <p className="text-[11px] text-slate-500">Verified Customer Reviews</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900">5.0</span>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-5">
                Based on <strong>270+ reviews</strong> across Mumbai, Pune & Lucknow.
              </p>

              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs py-3 px-4 rounded-xl border border-slate-300 transition flex items-center justify-center gap-2 shadow-2xs"
                id="btn-review-google"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Share Feedback on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reviews Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-slate-500 font-medium">
                Review {currentIndex + 1} of {GOOGLE_REVIEWS.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Current Active Review Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-sky-600 text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                    {GOOGLE_REVIEWS[currentIndex].avatarLetter}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {GOOGLE_REVIEWS[currentIndex].author}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {GOOGLE_REVIEWS[currentIndex].timeAgo}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-amber-400">
                  {[...Array(GOOGLE_REVIEWS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                &ldquo;{GOOGLE_REVIEWS[currentIndex].content}&rdquo;
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold mb-4">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Service: {GOOGLE_REVIEWS[currentIndex].verifiedService}</span>
              </div>

              {GOOGLE_REVIEWS[currentIndex].ownerResponse && (
                <div className="bg-white rounded-xl p-3.5 border border-slate-200 text-xs text-slate-600">
                  <strong className="text-slate-900 block mb-0.5">Response from the owner:</strong>
                  {GOOGLE_REVIEWS[currentIndex].ownerResponse}
                </div>
              )}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {GOOGLE_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-6 bg-sky-600' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
