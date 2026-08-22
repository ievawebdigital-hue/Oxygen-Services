import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Navigation,
  Wrench,
  Building,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Contact Us & Branch Locations | Oxygen Services',
  description: 'Direct telephone, WhatsApp, physical addresses, and Google Map directions for Oxygen Services in Mumbai, Pune, and Lucknow.',
  keywords: [
    'oxygen concentrator service contact',
    'oxygen equipment helpline',
    'oxygen service Mumbai address',
    'oxygen service Pune address',
    'oxygen service Lucknow address'
  ]
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <Phone className="w-3.5 h-3.5" />
              Direct Communication
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Contact Oxygen Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Reach our biomedical engineering team across our 3 branch locations or contact our centralized helpline.
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

          {/* 3 Physical Branches Detailed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BRANCHES.map((branch) => (
              <div
                key={branch.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="p-6 bg-slate-50 border-b border-slate-100">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#1677FF] text-white">
                      {branch.city} Facility
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 mt-2">
                      {branch.name}
                    </h2>
                  </div>

                  <div className="h-44 w-full bg-slate-200">
                    <iframe
                      title={`${branch.name} Map`}
                      src={branch.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-6 space-y-3 text-xs">
                    <div>
                      <p className="font-bold text-slate-900 mb-1">Address:</p>
                      <p className="text-slate-600 leading-relaxed">{branch.address}</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900 mb-1">Phone:</p>
                      <a href={`tel:+91${branch.primaryPhone}`} className="text-[#1677FF] font-bold">
                        +91 {branch.primaryPhone}
                      </a>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900 mb-1">Operating Hours:</p>
                      <p className="text-slate-600">{branch.hours}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+91${branch.primaryPhone}`}
                      className="flex items-center justify-center gap-1.5 bg-[#0B1F33] hover:bg-[#1677FF] text-white py-2.5 rounded-xl font-bold text-xs transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>

                    <a
                      href={branch.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl font-bold text-xs transition"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>
                  </div>

                  <Link
                    href={`/locations/${branch.id}`}
                    className="w-full inline-flex items-center justify-center gap-1 text-xs font-bold text-[#1677FF] hover:underline pt-2"
                  >
                    <span>View {branch.city} Location Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
