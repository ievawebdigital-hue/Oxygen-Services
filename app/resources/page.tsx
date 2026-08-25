import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Tag,
  ArrowRight,
  Search,
  ShieldCheck,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { ARTICLES } from '@/lib/data/knowledge';

export const metadata: Metadata = {
  title: 'Oxygen Equipment Guides & Troubleshooting Hub | Oxy Breath Services',
  description: 'Technical maintenance guides, alarm troubleshooting, molecular sieve life cycle explanations, and preventive care for medical oxygen equipment by Oxy Breath Services in Mumbai, Pune, and Lucknow.',
  keywords: [
    'Oxy Breath Services guides',
    'oxygen concentrator troubleshooting',
    'oxygen concentrator error code',
    'sieve bed repacking guide',
    'oxygen concentrator maintenance'
  ]
};

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              Technical Articles & Guides
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Oxygen Equipment Knowledge Base
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Learn how Pressure Swing Adsorption (PSA) works, how to decipher audible alarms, and when molecular sieve beds require repacking.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1677FF] border border-blue-200">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#1677FF] transition line-clamp-2 mb-2">
                    <Link href={`/resources/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {article.keywords.slice(0, 3).map((kw, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <Link
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:underline"
                  >
                    <span>Read Technical Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Need Diagnostic Assistance Banner */}
          <div className="bg-[#0B1F33] text-white rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Have an unresolved fault with your equipment?
              </h3>
              <p className="text-xs text-slate-400">
                Book a bench diagnostic assessment at our Mumbai, Pune, or Lucknow facilities.
              </p>
            </div>
            <Link
              href="/request-service"
              className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition whitespace-nowrap"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Diagnostic Check</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
