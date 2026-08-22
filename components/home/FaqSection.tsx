'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from 'lucide-react';
import { FAQS } from '@/lib/data/faqs';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function FaqSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const categories = ['All', 'General', 'Technical', 'Locations', 'Process & Payment'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Find immediate answers regarding equipment compatibility, diagnostic procedures, branch locations, and service tracking.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. sieve repacking, alarm, Mumbai branch, cost)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeCategory === cat
                    ? 'bg-[#0B1F33] text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-sm font-semibold text-slate-600">
                No matching questions found for &quot;{searchTerm}&quot;.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Reach out to our technicians directly on WhatsApp.
              </p>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Ask on WhatsApp
              </a>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-slate-50/80 rounded-2xl border border-slate-200/90 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#1677FF] transition"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#1677FF] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-slate-900">
              Have a specific technical question about your device model?
            </p>
            <p className="text-xs text-slate-600">
              Our technicians are available on phone and WhatsApp across Mumbai, Pune, and Lucknow.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
              className="bg-[#0B1F33] hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition"
            >
              Call 9820370015
            </a>
            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold px-4 py-2 rounded-lg transition inline-flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
