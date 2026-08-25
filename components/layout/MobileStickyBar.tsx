'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Wrench, Package } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-4 gap-1.5">
        {/* Call Button */}
        <a
          href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#0A192F] text-white rounded-xl text-[10px] font-bold shadow-xs transition active:scale-95"
          id="mobile-sticky-call"
        >
          <Phone className="w-4 h-4 text-sky-400 mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 text-white rounded-xl text-[10px] font-bold shadow-xs transition active:scale-95"
          id="mobile-sticky-whatsapp"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Rent Machine */}
        <Link
          href="/rent"
          className="flex flex-col items-center justify-center py-2 px-1 bg-slate-800 text-white rounded-xl text-[10px] font-bold shadow-xs transition active:scale-95"
          id="mobile-sticky-rent"
        >
          <Package className="w-4 h-4 text-sky-400 mb-0.5" />
          <span>Rent</span>
        </Link>

        {/* Book Repair */}
        <Link
          href="/request-service?mode=repair"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#0284c7] text-white rounded-xl text-[10px] font-bold shadow-xs transition active:scale-95"
          id="mobile-sticky-repair"
        >
          <Wrench className="w-4 h-4 text-white mb-0.5" />
          <span>Repair</span>
        </Link>
      </div>
    </div>
  );
}
