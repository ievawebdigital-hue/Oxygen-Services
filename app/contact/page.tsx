import React from 'react';
import type { Metadata } from 'next';
import {
  Phone,
  MessageSquare,
  Mail,
  FileText
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import ServiceRentalEnquiryForm from '@/components/locations/ServiceRentalEnquiryForm';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Contact Us & Service / Rental Enquiry | Oxy Breath Services',
  description: 'Direct telephone, WhatsApp, email, and instant service and rental enquiry form for Oxy Breath Services across Mumbai, Pune, and Lucknow.',
  keywords: [
    'Oxy Breath Services contact',
    'oxygen concentrator service enquiry',
    'oxygen machine rental enquiry',
    'oxygen equipment helpline',
    'oxygen service Mumbai contact',
    'oxygen service Pune contact',
    'oxygen service Lucknow contact'
  ]
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-black uppercase tracking-wider mb-3 border border-sky-200">
              <Phone className="w-3.5 h-3.5" />
              Direct Support & Enquiries
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Contact Oxy Breath Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Get in touch with our biomedical coordinators or submit your equipment repair and rental requirements below.
            </p>
          </div>

          {/* Service & Rental Enquiry Form */}
          <div className="mb-12">
            <ServiceRentalEnquiryForm hideExtraDetails={true} />
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
