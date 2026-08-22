import React from 'react';
import {
  Wrench,
  MapPin,
  ShieldCheck,
  Search,
  Activity,
  Cpu
} from 'lucide-react';

const TRUST_CARDS = [
  {
    icon: Wrench,
    title: 'Specialist Technical Service',
    description: 'Focused exclusively on medical oxygen equipment servicing, molecular sieve repacking, and compressor rebuilds.'
  },
  {
    icon: MapPin,
    title: 'Multi-City Support',
    description: 'Physical diagnostic facilities in Mumbai Head Office, Pune Branch, and Lucknow Branch.'
  },
  {
    icon: ShieldCheck,
    title: 'Vendor-Independent Service',
    description: 'Expert technical service for compatible stationary and portable equipment regardless of original retailer.'
  },
  {
    icon: Search,
    title: 'Transparent Service Tracking',
    description: 'Track your equipment diagnostic status, view itemized estimates, and download service reports online.'
  },
  {
    icon: Activity,
    title: 'Calibrated Bench Diagnosis',
    description: 'Accurate oxygen purity (% O2), flowmeter rate (LPM), and line pressure testing using medical-grade analyzers.'
  },
  {
    icon: Cpu,
    title: 'Component-Level Repair',
    description: 'Deep mechanical and electronic PCB troubleshooting to restore factory performance without unnecessary replacement.'
  }
];

export default function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF]">
            Why Choose Oxygen Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33] mt-1">
            Engineered For Precision & Reliability
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            When medical oxygen equipment experiences a drop in purity or an electrical alarm, our technical team provides thorough diagnosis and component-level repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-[#1677FF] group-hover:bg-[#1677FF] group-hover:text-white flex items-center justify-center mb-4 transition">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#1677FF] transition">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
