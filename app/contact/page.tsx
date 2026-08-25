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

          {/* Centralized Contact Quick Bar */}
          <div className="bg-[#0B1F33] text-white rounded-3xl p-6 sm:p-8 mb-12 border border-slate-800 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-[#19C6D9] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Primary Helpline</p>
                <a href={`tel:+91${COMPANY_CONTACT.primaryPhone}`} className="text-base sm:text-lg font-bold text-white hover:text-[#19C6D9]">
                  +91 {COMPANY_CONTACT.primaryPhone}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">WhatsApp Quick Chat</p>
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-bold text-emerald-400 hover:underline"
                >
                  +91 {COMPANY_CONTACT.whatsapp}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Email Support</p>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-sm font-bold text-slate-200 hover:text-white">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
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
