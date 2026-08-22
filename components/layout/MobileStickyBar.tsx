'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Wrench } from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#0B1F33] text-white rounded-xl text-[11px] font-bold shadow transition active:scale-95"
          id="mobile-sticky-call"
        >
          <Phone className="w-4 h-4 text-[#19C6D9] mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={COMPANY_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#16A34A] text-white rounded-xl text-[11px] font-bold shadow transition active:scale-95"
          id="mobile-sticky-whatsapp"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Request Service */}
        <Link
          href="/request-service"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#1677FF] text-white rounded-xl text-[11px] font-bold shadow transition active:scale-95"
          id="mobile-sticky-request"
        >
          <Wrench className="w-4 h-4 text-white mb-0.5" />
          <span>Book Service</span>
        </Link>
      </div>
    </div>
  );
}
