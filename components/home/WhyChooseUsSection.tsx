'use client';

import React from 'react';
import {
  UserCheck,
  Cpu,
  HeartHandshake,
  Clock,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const REASONS = [
  {
    icon: UserCheck,
    titlePrefix: 'Experienced ',
    titleHighlight: 'Professionals',
    description:
      'We pride ourselves on being a specialized biomedical oxygen concentrator repair facility staffed by certified technicians.',
  },
  {
    icon: Cpu,
    titlePrefix: 'Expert Technical ',
    titleHighlight: 'Skills',
    description:
      'Our biomedical experts deliver honest, reliable, and component-level repairs with advanced molecular sieve packing tools.',
  },
  {
    icon: HeartHandshake,
    titlePrefix: 'Trustworthy ',
    titleHighlight: 'See Reviews',
    description:
      'Our reputation has been built on clinical trust, patient safety, and hundreds of verified 5-star customer ratings.',
  },
  {
    icon: Clock,
    titlePrefix: 'Friendly ',
    titleHighlight: 'Service',
    description:
      'Fast doorstep pickup, clear communication, and express repairs completed within hours, with same-day return in most cases.',
  },
  {
    icon: Sparkles,
    titlePrefix: 'Excellent ',
    titleHighlight: 'Reputation',
    description:
      'Every machine receives a 95%+ purity certification report and undergoes a rigorous burn-in test before handover.',
  },
  {
    icon: Stethoscope,
    titlePrefix: 'Affordable ',
    titleHighlight: 'Diagnosis',
    description:
      'We diagnose your machine issues with precision, provide an itemized quote with no hidden fees, and offer transparent pricing.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-sky-600 underline decoration-sky-300 decoration-wavy decoration-2 underline-offset-8">Us</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
            There are many valid reasons why you should choose us to take care of your valuable medical device.
          </p>
        </div>

        {/* 6-Card Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-sky-50/50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-sky-300 transition-all duration-200 flex flex-col items-center text-center group shadow-2xs"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-slate-700 group-hover:text-sky-600 group-hover:scale-110 flex items-center justify-center mb-5 shadow-xs border border-slate-200 transition-transform">
                  <Icon className="w-8 h-8 stroke-[1.75]" />
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2.5">
                  <span>{item.titlePrefix}</span>
                  <span className="text-sky-600">{item.titleHighlight}</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
