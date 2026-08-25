'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import sieveRepourImg from '@/src/assets/images/sieve_bed_repour_1787548472442.jpg';
import compressorRebuildImg from '@/src/assets/images/compressor_rebuild_1787548488276.jpg';
import valvePcbRebuildImg from '@/src/assets/images/valve_pcb_rebuild_1787548503306.jpg';

interface CoreService {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  alt: string;
  link: string;
  btnLabel: string;
}

const THREE_CORE_SERVICES: CoreService[] = [
  {
    id: 'sieve-bed-repour',
    title: 'Sieve Bed Repours / Refill.',
    badge: '95%+ Purity Restored',
    description:
      'A cost-effective solution to replacing expensive contaminated sieve beds. Our concentrator sieve bed repours and refills are done with brand new medical-grade lithium and sodium molecular sieve material.',
    highlights: ['Moisture-purged canister repacking', 'Ultrasonic purity verification', 'Rapid 24-48 hr turnaround'],
    image: sieveRepourImg,
    alt: 'Biomedical technician repouring molecular sieve zeolite beds for oxygen concentrator',
    link: '/services/repair/stationary',
    btnLabel: 'Read more',
  },
  {
    id: 'compressor-rebuilds',
    title: 'Compressor Rebuilds',
    badge: 'Pressure & Quiet Operation',
    description:
      'We rebuild oil-less wobble piston compressors. Most compressors only need a "top end" rebuild (piston cups, sleeves, gaskets) while others receive a complete mechanical overhaul with precision new bearings.',
    highlights: ['New wobble cup seals & sleeves', 'Noise & vibration dampener tune', 'Factory PSIG pressure restored'],
    image: compressorRebuildImg,
    alt: 'Technician servicing and rebuilding oxygen concentrator oil-less wobble compressor',
    link: '/services/repair/stationary',
    btnLabel: 'Read more',
  },
  {
    id: 'valve-pcb-rebuilds',
    title: 'Valve Rebuilds & Electronics',
    badge: 'Manifold & Micro-controllers',
    description:
      'We rebuild 4-way rotary valves, AirSep NewLife valve stems, solenoid manifolds, and Respironics valve bodies (all styles), along with component-level motherboard PCB diagnosis and ultrasonic sensor resets.',
    highlights: ['Solenoid pilot timing calibration', 'Motherboard error code clearing', 'Ultrasonic O2 sensor recalibration'],
    image: valvePcbRebuildImg,
    alt: 'Biomedical circuit board PCB and solenoid valve manifold diagnostics',
    link: '/services/repair/portable',
    btnLabel: 'Read more',
  },
];

export default function ServicesThreeCardSection() {
  return (
    <section id="services-three-card" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">
            SERVICES
          </span>
          <p className="text-xs sm:text-sm font-semibold text-sky-600 mb-2">
            Hundreds of satisfied customers
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Oxygen Concentrator Repair
          </h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  {service.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={service.link}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition text-center inline-flex items-center justify-center gap-1.5 shadow-xs"
                    id={`btn-service-${service.id}`}
                  >
                    <span>{service.btnLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
