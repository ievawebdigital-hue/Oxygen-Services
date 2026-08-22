import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import CoreServicesSection from '@/components/home/CoreServicesSection';
import DeviceExplanationDiagram from '@/components/home/DeviceExplanationDiagram';
import ProblemDiagnosticSelector from '@/components/home/ProblemDiagnosticSelector';
import ServiceProcessTimeline from '@/components/home/ServiceProcessTimeline';
import BranchLocationsSection from '@/components/home/BranchLocationsSection';
import CustomerTestimonialsSection from '@/components/home/CustomerTestimonialsSection';
import FaqSection from '@/components/home/FaqSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';
import { getOrganizationSchema, getFaqSchema } from '@/lib/seo';
import { FAQS } from '@/lib/data/faqs';

export const metadata: Metadata = {
  title: 'Oxygen Services | Specialist Oxygen Concentrator & Machine Service in Mumbai, Pune, Lucknow',
  description: 'Specialist, vendor-independent medical oxygen equipment service and repair. Molecular sieve bed repacking, compressor rebuilds, and calibrated ultrasonic purity testing in Mumbai, Pune, and Lucknow. Call 9820370015.',
  keywords: [
    'oxygen concentrator service',
    'oxygen machine service',
    'oxygen equipment service',
    'oxygen concentrator repair near me',
    'oxygen machine repair near me',
    'oxygen concentrator servicing',
    'oxygen concentrator maintenance',
    'molecular sieve repacking',
    'oxygen concentrator service Mumbai',
    'oxygen machine service Pune',
    'oxygen equipment service Lucknow'
  ],
  alternates: {
    canonical: 'https://oxygenservices.in'
  }
};

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const faqSchema = getFaqSchema(FAQS.slice(0, 10));

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* Value Proposition Trust Bar */}
        <TrustBar />

        {/* 4 Core Service Offerings */}
        <CoreServicesSection />

        {/* Interactive Device Explanation & Airflow Visualizer */}
        <DeviceExplanationDiagram />

        {/* 8 Common Problems Diagnostic Selector */}
        <ProblemDiagnosticSelector />

        {/* 5-Stage Transparent Workflow */}
        <ServiceProcessTimeline />

        {/* 3 Physical Branch Locations with Maps */}
        <BranchLocationsSection />

        {/* Customer Testimonials for Mumbai, Pune, and Lucknow */}
        <CustomerTestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* High-Impact Final Call to Action */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Context-Aware Mobile Bottom Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
