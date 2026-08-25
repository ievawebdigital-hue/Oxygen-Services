import React from 'react';
import type { Metadata } from 'next';
import {
  FileText,
  Phone,
  MessageSquare
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import ServiceRentalEnquiryForm from '@/components/locations/ServiceRentalEnquiryForm';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Service & Rental Enquiry | Oxy Breath Services (Mumbai, Pune, Lucknow)',
  description: 'Book certified medical oxygen equipment repair, maintenance, and rental services in Mumbai, Pune, and Lucknow with doorstep pickup and delivery.',
  keywords: [
    'Oxy Breath Services enquiry',
    'oxygen concentrator service form',
    'oxygen machine rental enquiry',
    'oxygen equipment repair Mumbai',
    'oxygen equipment rental Pune',
    'oxygen machine service Lucknow'
  ]
};

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-black uppercase tracking-wider mb-3 border border-sky-200">
              <FileText className="w-3.5 h-3.5" />
              Service & Rental Enquiry
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Book Service or Inquire About Rentals
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Fill in your requirements below for rapid doorstep pickup, diagnostic assessment, or rental dispatch across our hubs in Mumbai, Pune, and Lucknow.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
              <a
                href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                className="inline-flex items-center gap-1.5 text-slate-800 hover:text-sky-600 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>Call Helpline: +91 {COMPANY_CONTACT.primaryPhone}</span>
              </a>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Service & Rental Enquiry Form */}
          <div className="mb-12">
            <ServiceRentalEnquiryForm />
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

