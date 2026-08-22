import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  Calendar,
  Wrench,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { ARTICLES } from '@/lib/data/knowledge';
import { getArticleSchema } from '@/lib/seo';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} | Oxygen Services Guide`,
    description: article.metaDescription,
    keywords: article.keywords
  };
}

export default async function ArticleDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const articleJsonLd = getArticleSchema({
    title: article.title,
    summary: article.summary,
    slug: article.slug,
    publishedDate: article.publishedDate
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Guides */}
          <div className="mb-6">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1677FF] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all guides & troubleshooting articles</span>
            </Link>
          </div>

          {/* Article Header */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#1677FF] border border-blue-200">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Published {article.publishedDate}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F33] tracking-tight leading-tight">
                {article.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                {article.summary}
              </p>
            </div>

            {/* Author Byline */}
            <div className="flex items-center justify-between border-y border-slate-100 py-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#0B1F33] text-[#19C6D9] flex items-center justify-center font-bold text-[10px]">
                  OS
                </div>
                <span>Technical Advisory Team • Oxygen Services</span>
              </div>
              <span>Reviewed by Biomedical Engineers</span>
            </div>

            {/* Key Takeaways Box */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF]" />
                  Key Takeaways
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#1677FF] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-8 text-sm text-slate-700 leading-relaxed pt-2">
              {article.content.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B1F33] border-b border-slate-100 pb-2">
                    {sec.heading}
                  </h2>
                  <p className="leading-relaxed">{sec.text}</p>
                  {sec.points && (
                    <ul className="space-y-2 pl-4 list-disc text-slate-700">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Article Specific FAQs */}
            {article.faq && article.faq.length > 0 && (
              <div className="pt-8 border-t border-slate-100 space-y-4">
                <h3 className="text-base font-bold text-[#0B1F33]">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {article.faq.map((item, fIdx) => (
                    <div key={fIdx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70">
                      <p className="font-bold text-xs sm:text-sm text-slate-900 mb-1">{item.question}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400">Tags:</span>
              {article.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-lg"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Technical CTA */}
          <div className="mt-8 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-white text-base">
                Experiencing this issue with your oxygen concentrator?
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Our technicians can inspect, calibrate, or repack sieve beds at our Mumbai, Pune, or Lucknow workshops.
              </p>
            </div>
            <Link
              href="/request-service"
              className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition whitespace-nowrap"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Technical Service</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
