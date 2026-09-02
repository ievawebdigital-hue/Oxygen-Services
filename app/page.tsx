import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import HeroSection from '@/components/home/HeroSection';
import HelplineUrgentBanner from '@/components/home/HelplineUrgentBanner';
import BrandLogosBanner from '@/components/home/BrandLogosBanner';
import MiddleHelpBanner from '@/components/home/MiddleHelpBanner';
import { getOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Oxy Breath Services | Oxygen Concentrator Repair & Machine Rentals in Mumbai, Pune, Lucknow',
  description: 'Specialist oxygen concentrator repair, molecular sieve repours, compressor rebuilding, and sanitized 5L, 10L & Portable POC machine rentals across Mumbai, Pune, and Lucknow. Call 9820370015.',
  keywords: [
    'Oxy Breath Services',
    'oxygen concentrator repair',
    'oxygen concentrator on rent',
    'oxygen machine rent Mumbai',
    'oxygen concentrator service Pune',
    'oxygen machine repair Lucknow',
    'portable oxygen concentrator rental',
    'sieve bed repour',
    '5L oxygen concentrator rent',
    '10L oxygen concentrator rent'
  ],
  alternates: {
    canonical: 'https://oxybreathservices.in'
  }
};

export default function HomePage() {
  const orgSchema = getOrganizationSchema();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Carousel */}
        <HeroSection />

        {/* 2. Urgent Helpline Action Banner ("Get Your Oxygen-Concentrator Fixed NOW!") */}
        <HelplineUrgentBanner />

        {/* 3. Leading Equipment Brands Strip */}
        <BrandLogosBanner />

        {/* 3. Middle Helpline Callout ("Getting Help is Easy") */}
        <MiddleHelpBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Context-Aware Mobile Bottom Action Bar */}
      <MobileStickyBar />
    </div>
  );
}

