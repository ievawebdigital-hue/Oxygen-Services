export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  detailedScope: string[];
  componentsAssessed: string[];
  commonFaults: string[];
  diagnosticProcess: string[];
  iconName: string;
  disclaimer: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'oxygen-machine-service',
    slug: 'oxygen-machine-service',
    title: 'Oxygen Machine Service & Repair',
    shortTitle: 'Oxygen Machine Service',
    subtitle: 'Comprehensive inspection, electronic fault troubleshooting, and mechanical servicing for home and clinical oxygen machines.',
    description: 'Expert technical servicing for stationary oxygen machines. We perform deep diagnostics on compressors, pressure relief mechanisms, filtration assemblies, and motor drivers to restore factory operating tolerances.',
    detailedScope: [
      'Comprehensive external & internal diagnostic inspection',
      'Operating pressure & relief valve threshold verification',
      'Electronic PCB board and relay circuitry diagnostics',
      'Thermal cutout and compressor temperature management checking',
      'Acoustic dampening and mechanical vibration assessment',
      'Electrical safety, earth continuity, and leakage testing'
    ],
    componentsAssessed: [
      'Dual-head oil-less compressor pistons and bearings',
      'Main control printed circuit board (PCB)',
      'Intake HEPA and pre-filtration felt elements',
      'Pressure regulating solenoid switches',
      'Internal cooling fans and heat sink ducting',
      'Power transformer and high-capacity capacitors'
    ],
    commonFaults: [
      'Machine fails to power on or trips home MCB circuit breaker',
      'Continuous beeping alert with red warning indicator',
      'Heavy rattling or grinding vibration from motor housing',
      'Automatic thermal shutdown after 15–30 minutes of runtime',
      'Excessive heat buildup around casing exhausts'
    ],
    diagnosticProcess: [
      'Initial bench intake & electrical safety check',
      'Disassembly and internal particulate inspection',
      'Digital pressure transducer load test',
      'Oscilloscope waveform check on control board signals',
      'Thermal imaging of compressor head and transformer'
    ],
    iconName: 'Activity',
    disclaimer: 'Service availability depends on equipment model, fault type, and availability of compatible components. We provide vendor-independent technical repair.'
  },
  {
    id: 'oxygen-concentrator-service',
    slug: 'oxygen-concentrator-service',
    title: 'Oxygen Concentrator Service & Repair',
    shortTitle: 'Oxygen Concentrator Service',
    subtitle: 'Specialist molecular sieve bed repacking, compressor rebuilding, and calibrated ultrasonic purity testing for 5L & 10L units.',
    description: 'Oxygen concentrators require precise Pressure Swing Adsorption (PSA) cycles. When purity drops below 85% or alarms trigger, our technicians inspect sieve columns, rotary 4-way valves, and pressure regulators using medical-grade oxygen analyzers.',
    detailedScope: [
      'Calibrated ultrasonic oxygen purity (%) analysis across all LPM flow settings',
      'Molecular sieve bed nitrogen-adsorption efficiency check',
      '4-Way pilot solenoid and rotary cycle valve timing inspection',
      'Compressor piston cup wear, cylinder sleeve, and gasket overhaul',
      'Multi-stage filtration replacement (Gross particle, HEPA, Bacteria filter)',
      'Low oxygen concentration alarm sensor calibration'
    ],
    componentsAssessed: [
      'Dual Zeolite Molecular Sieve canisters',
      'Oil-free wobble piston air compressor',
      '4-way cycling pilot valve and shuttle assembly',
      'Ultrasonic / Galvanic oxygen purity sensor cell',
      'Product storage accumulation surge tank',
      'High/Low pressure safety relief valves and flowmeter tube'
    ],
    commonFaults: [
      'Low O2 purity alarm (<82%) due to saturated/degraded sieve beds',
      'Audible internal air leak or hissing pressure drop',
      'Purity drops sharply when dial is turned to 5 LPM or 10 LPM',
      '4-way valve stuck causing constant single-cylinder exhaust blowoff',
      'Yellow/Orange "Service Required" warning light illuminated'
    ],
    diagnosticProcess: [
      'Dynamic purity reading using calibrated medical O2 analyzer',
      'Dual-gauge pressure cycle measurement (PSIG peak and dump cycles)',
      'Flowmeter precision calibration against digital mass flow standard',
      'Filter particulate saturation and bacterial filter resistance check',
      '48-hour continuous runtime burn-in stress test after overhaul'
    ],
    iconName: 'Wind',
    disclaimer: 'Service availability depends on equipment model, fault type, and availability of compatible components. Purity outcomes depend on sieve material and compressor health.'
  },
  {
    id: 'portable-oxygen-concentrator-service',
    slug: 'portable-oxygen-concentrator-service',
    title: 'Portable Oxygen Concentrator (POC) Service',
    shortTitle: 'Portable Oxygen (POC) Service',
    subtitle: 'Precision micro-compressor repair, sieve column replacement, pulse-dose breath-trigger sensor calibration, and battery diagnostic testing.',
    description: 'Portable units feature compact micro-compressors, sensitive breath-detecting differential pressure sensors, and swappable sieve column cartridges. We provide technical service for both pulse-dose and continuous portable units.',
    detailedScope: [
      'Micro-compressor RPM, output pressure, and thermal profile checking',
      'Breath-detection trigger sensitivity (cannula suction threshold) tuning',
      'Modular sieve column cartridge resistance and purity evaluation',
      'Lithium-ion battery capacity, charge controller, and DC input diagnostics',
      'Compact cooling blower and intake filtration maintenance',
      'Firmware error code interrogation and runtime counter readout'
    ],
    componentsAssessed: [
      'Miniature brushless DC oil-free micro-compressor',
      'Differential pressure breath-detection sensor diaphragm',
      'Miniature dual sieve column cartridges',
      'Mainboard micro-controller and battery management system (BMS)',
      'Internal DC-DC power regulation converters',
      'OLED / LCD status display and tactile keypad matrix'
    ],
    commonFaults: [
      '"Sieve Columns Expired" or "Replace Columns Soon" alert codes',
      'Unit fails to detect patient inhalation in Pulse Mode',
      'Battery discharges rapidly or fails to charge on AC/DC adapter',
      'High temperature alarm with excessive fan noise',
      'Sudden shutoff during transport or pulse-dose delivery'
    ],
    diagnosticProcess: [
      'Simulated inhalation breath-trigger test bench evaluation',
      'Battery discharge load analyzer cycle test',
      'Micro-PSA pressure wave inspection',
      'Electronic power rail voltage ripple measurement',
      'Ultrasonic purity verification at pulse settings 1 through 6'
    ],
    iconName: 'BatteryCharging',
    disclaimer: 'Service availability depends on equipment model, fault type, and availability of compatible replacement cartridges or parts.'
  },
  {
    id: 'medical-oxygen-equipment-service',
    slug: 'medical-oxygen-equipment-service',
    title: 'Medical Oxygen Equipment Service & Support',
    shortTitle: 'Medical Oxygen Equipment Service',
    subtitle: 'Specialist maintenance and testing for compatible oxygen flowmeters, regulators, humidifiers, and auxiliary oxygen accessories.',
    description: 'We provide technical inspection and servicing for oxygen-related auxiliary equipment, regulators, flowmeters, and manifold accessories used in homecare and clinic setups.',
    detailedScope: [
      'High-pressure and low-pressure oxygen regulator seal inspection',
      'Rotameter and digital flowmeter rate verification',
      'Humidifier bottle diffuser and pressure-relief whistle testing',
      'Oxygen delivery tubing, manifold adaptors, and connection fittings',
      'O-ring replacement, oxygen-safe degreasing, and leak detection',
      'Preventive maintenance inspections for clinics and nursing homes'
    ],
    componentsAssessed: [
      'Diaphragm pressure regulators and brass fittings',
      'Thorpe tube calibrated flowmeters',
      'Back-pressure compensated needle valves',
      'Reusable bubble humidifier safety cap valves',
      'Oxygen gas-compatible elastomers and high-pressure seals',
      'Quick-connect DISS/NIST medical gas adaptors'
    ],
    commonFaults: [
      'Audible gas leak around regulator connection stem or gauge',
      'Flowmeter needle sticking or inaccurate LPM delivery',
      'Humidifier bottle whistling or popping under standard flow',
      'Worn O-rings causing slow pressure loss'
    ],
    diagnosticProcess: [
      'Bubble-leak immersion and acoustic ultrasonic gas leak detection',
      'Comparative flow calibration against certified reference meter',
      'Static seal pressure hold test',
      'Cleanliness and oxygen-safe lubricant inspection'
    ],
    iconName: 'ShieldCheck',
    disclaimer: 'Service availability depends on equipment model, fault type, and availability of compatible components. Always consult clinical professionals for patient prescription settings.'
  }
];
