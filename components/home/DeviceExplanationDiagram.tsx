'use client';

import React, { useState } from 'react';
import { Wind, Gauge, Filter, Zap, Activity, CheckCircle, Info } from 'lucide-react';

const STAGES = [
  {
    id: 1,
    title: '1. Ambient Air Intake & Filtration',
    subtitle: 'Dual-stage cabinet sponge & HEPA filtration',
    details: 'Ambient room air (21% Oxygen, 78% Nitrogen, 1% Argon) enters the rear grille. The coarse cabinet filter removes lint and pet dander, while the internal HEPA filter traps particles down to 0.3 microns to protect compressor cylinders.',
    component: 'Intake HEPA Filter & Felt Disc',
    serviceNote: 'Dirty filters cause high operating temperatures, compressor drag, and low flow errors.'
  },
  {
    id: 2,
    title: '2. Oil-Free Wobble Piston Compressor',
    subtitle: 'Pressurizes filtered air up to 20–30 PSIG',
    details: 'A medical-grade oil-less compressor compresses the filtered air. Balanced counterweights and heavy-duty suspension springs prevent casing vibration.',
    component: 'Dual-Wobble Piston Assembly & Teflon Cups',
    serviceNote: 'Worn piston cup seals cause pressure loss, loud rattling, and sudden thermal shutdown.'
  },
  {
    id: 3,
    title: '3. 4-Way Solenoid Pilot Cycle Valve',
    subtitle: 'Alternates air flow into dual sieve canisters',
    details: 'The high-speed pneumatic pilot valve directs pressurized air into Sieve Bed A while venting waste Nitrogen from Sieve Bed B, alternating every 4 to 8 seconds in the Pressure Swing Adsorption (PSA) cycle.',
    component: '4-Way Pilot Valve & Shuttle Spool',
    serviceNote: 'A sticking valve causes continuous hiss, low pressure alarms, and one-sided bed degradation.'
  },
  {
    id: 4,
    title: '4. Dual Zeolite Molecular Sieve Beds',
    subtitle: 'Separates Nitrogen via Pressure Swing Adsorption (PSA)',
    details: 'Each canister is packed with synthetic microscopic porous Zeolite (13X or Lithium-based). Under pressure, the zeolite selectively traps Nitrogen molecules while allowing Oxygen to pass through.',
    component: 'Dual Canister Zeolite Molecular Sieve',
    serviceNote: 'Moisture contamination ruins zeolite pores, causing purity to drop from 93% to 70–80% (yellow alarm).'
  },
  {
    id: 5,
    title: '5. Accumulation Tank & Ultrasonic Purity Sensor',
    subtitle: 'Delivers 93% ± 3% medical oxygen to patient',
    details: 'Purified medical-grade oxygen accumulates in a surge tank. An ultrasonic purity sensor measures real-time concentration before the flowmeter delivers calibrated LPM to the patient cannula.',
    component: 'Surge Tank, Purity Sensor & Flowmeter',
    serviceNote: 'Our test bench verifies ultrasonic purity readings against certified reference standards.'
  }
];

export default function DeviceExplanationDiagram() {
  const [activeStage, setActiveStage] = useState(3);

  const selected = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Info className="w-3.5 h-3.5" />
            Educational Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
            How An Oxygen Concentrator Works & Where Faults Occur
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Simplified technical overview of the 5-stage Pressure Swing Adsorption (PSA) cycle. Click any stage to inspect the internal components checked during service.
          </p>
        </div>

        {/* 5 Stages Interactive Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveStage(s.id)}
              className={`p-3.5 rounded-xl text-left border transition-all ${
                activeStage === s.id
                  ? 'bg-[#0B1F33] text-white border-[#0B1F33] shadow-lg shadow-blue-900/20 scale-[1.02]'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${activeStage === s.id ? 'text-[#19C6D9]' : 'text-slate-400'}`}>
                Stage 0{s.id}
              </span>
              <p className="text-xs font-bold leading-tight line-clamp-2">
                {s.title.replace(/^\d+\.\s*/, '')}
              </p>
            </button>
          ))}
        </div>

        {/* Interactive Schematic & Inspector Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800">
          {/* Left Visual Diagram (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#19C6D9] uppercase tracking-wider">
                  PSA System Cycle Flow
                </span>
                <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
                  Active Focus: Stage {activeStage} of 5
                </span>
              </div>

              {/* Dynamic SVG Diagram */}
              <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 relative overflow-hidden">
                <svg viewBox="0 0 540 220" className="w-full h-auto" fill="none">
                  {/* Step 1: Intake Filter */}
                  <g className="cursor-pointer" onClick={() => setActiveStage(1)}>
                    <rect
                      x="10"
                      y="70"
                      width="80"
                      height="80"
                      rx="8"
                      fill={activeStage === 1 ? '#1677FF' : '#1E293B'}
                      stroke={activeStage === 1 ? '#38BDF8' : '#475569'}
                      strokeWidth={activeStage === 1 ? 2.5 : 1}
                    />
                    <text x="50" y="105" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">1. Intake</text>
                    <text x="50" y="120" fill="#94A3B8" fontSize="8" textAnchor="middle">HEPA Filter</text>
                  </g>

                  {/* Flow Arrow 1 */}
                  <path d="M92 110 L120 110" stroke="#38BDF8" strokeWidth="2.5" className="animate-flow" />

                  {/* Step 2: Compressor */}
                  <g className="cursor-pointer" onClick={() => setActiveStage(2)}>
                    <circle
                      cx="155"
                      cy="110"
                      r="35"
                      fill={activeStage === 2 ? '#1677FF' : '#1E293B'}
                      stroke={activeStage === 2 ? '#38BDF8' : '#475569'}
                      strokeWidth={activeStage === 2 ? 2.5 : 1}
                    />
                    <text x="155" y="106" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">2. Compressor</text>
                    <text x="155" y="122" fill="#94A3B8" fontSize="8" textAnchor="middle">20-30 PSIG</text>
                  </g>

                  {/* Flow Arrow 2 */}
                  <path d="M192 110 L220 110" stroke="#38BDF8" strokeWidth="2.5" className="animate-flow" />

                  {/* Step 3: 4-Way Pilot Valve */}
                  <g className="cursor-pointer" onClick={() => setActiveStage(3)}>
                    <rect
                      x="222"
                      y="80"
                      width="60"
                      height="60"
                      rx="6"
                      fill={activeStage === 3 ? '#1677FF' : '#1E293B'}
                      stroke={activeStage === 3 ? '#38BDF8' : '#475569'}
                      strokeWidth={activeStage === 3 ? 2.5 : 1}
                    />
                    <text x="252" y="108" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">3. 4-Way</text>
                    <text x="252" y="122" fill="#94A3B8" fontSize="8" textAnchor="middle">Cycle Valve</text>
                  </g>

                  {/* Flow to Sieves */}
                  <path d="M284 100 L308 65" stroke="#38BDF8" strokeWidth="2" />
                  <path d="M284 120 L308 155" stroke="#38BDF8" strokeWidth="2" />

                  {/* Step 4: Dual Sieve Beds */}
                  <g className="cursor-pointer" onClick={() => setActiveStage(4)}>
                    {/* Bed A */}
                    <rect
                      x="310"
                      y="30"
                      width="95"
                      height="65"
                      rx="6"
                      fill={activeStage === 4 ? '#0B1F33' : '#1E293B'}
                      stroke={activeStage === 4 ? '#19C6D9' : '#475569'}
                      strokeWidth={activeStage === 4 ? 2.5 : 1}
                    />
                    <text x="357" y="58" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">4. Sieve Bed A</text>
                    <text x="357" y="74" fill="#94A3B8" fontSize="8" textAnchor="middle">Zeolite Adsorption</text>

                    {/* Bed B */}
                    <rect
                      x="310"
                      y="125"
                      width="95"
                      height="65"
                      rx="6"
                      fill={activeStage === 4 ? '#0B1F33' : '#1E293B'}
                      stroke={activeStage === 4 ? '#19C6D9' : '#475569'}
                      strokeWidth={activeStage === 4 ? 2.5 : 1}
                    />
                    <text x="357" y="153" fill="#38BDF8" fontSize="9" fontWeight="bold" textAnchor="middle">4. Sieve Bed B</text>
                    <text x="357" y="169" fill="#94A3B8" fontSize="8" textAnchor="middle">Purge / Regeneration</text>
                  </g>

                  {/* Output to Tank */}
                  <path d="M407 65 L430 95" stroke="#10B981" strokeWidth="2.5" />
                  <path d="M407 155 L430 125" stroke="#10B981" strokeWidth="2.5" />

                  {/* Step 5: Output & Sensor */}
                  <g className="cursor-pointer" onClick={() => setActiveStage(5)}>
                    <rect
                      x="435"
                      y="70"
                      width="95"
                      height="80"
                      rx="8"
                      fill={activeStage === 5 ? '#064E3B' : '#065F46'}
                      stroke={activeStage === 5 ? '#34D399' : '#059669'}
                      strokeWidth={activeStage === 5 ? 2.5 : 1}
                    />
                    <text x="482" y="100" fill="#A7F3D0" fontSize="10" fontWeight="bold" textAnchor="middle">5. O2 Output</text>
                    <text x="482" y="118" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">93% ± 3%</text>
                    <text x="482" y="134" fill="#6EE7B7" fontSize="8" textAnchor="middle">Calibrated Flow</text>
                  </g>
                </svg>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-4 italic">
              *Educational illustration demonstrating the working mechanism of standard Pressure Swing Adsorption oxygen concentrators.
            </p>
          </div>

          {/* Right Inspector Box (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#1677FF] text-white text-xs font-bold flex items-center justify-center">
                  {selected.id}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selected.title}
                </h3>
              </div>
              <p className="text-xs text-[#19C6D9] font-medium mb-4">
                {selected.subtitle}
              </p>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>{selected.details}</p>

                <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/80">
                  <span className="font-bold text-slate-200 block mb-1">
                    Component Checked:
                  </span>
                  <span className="text-[#19C6D9] font-mono">
                    {selected.component}
                  </span>
                </div>

                <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-800/40 text-amber-200">
                  <span className="font-bold text-amber-300 block mb-1">
                    Common Technical Fault & Diagnostic Check:
                  </span>
                  <span>{selected.serviceNote}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/request-service"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white py-3 rounded-xl font-bold text-xs transition shadow"
              >
                <span>Request Diagnostic Check for This Fault</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
