export interface RentalEquipment {
  id: string;
  name: string;
  category: '5L Stationary' | '10L High Flow' | 'Portable (POC)';
  shortDescription: string;
  flowRate: string;
  purity: string;
  weight: string;
  powerConsumption: string;
  soundLevel: string;
  dailyRate: number;
  weeklyRate: number;
  monthlyRate: number;
  securityDeposit: number;
  bestFor: string;
  popularBrands: string[];
  features: string[];
  includedAccessories: string[];
  inStock: boolean;
  featured?: boolean;
}

export const RENTAL_EQUIPMENT: RentalEquipment[] = [
  {
    id: 'rent-5l-stationary',
    name: '5 LPM Stationary Oxygen Concentrator',
    category: '5L Stationary',
    shortDescription: 'The gold standard for continuous home oxygen therapy. Compact, whisper-quiet, and energy-efficient.',
    flowRate: '0.5 – 5.0 Liters/min (Continuous Flow)',
    purity: '93% ± 3% at all flow levels',
    weight: '14.1 kg (with smooth caster wheels)',
    powerConsumption: 'approx. 290W – 350W',
    soundLevel: '< 43 dBA (Ultra-quiet home use)',
    dailyRate: 350,
    weeklyRate: 1800,
    monthlyRate: 3500,
    securityDeposit: 3000,
    bestFor: 'Home COPD patients, post-surgery recovery, elderly care, chronic respiratory support.',
    popularBrands: ['Philips Respironics EverFlo', 'DeVilbiss 525DS', 'Yuwell 8F-5AW', 'Evox 5L'],
    features: [
      'Continuous 24/7 run capability with low power usage',
      'Integrated OPI (Oxygen Percentage Indicator) ultrasonic purity sensor',
      'Recessed flow meter preventing accidental knock-offs',
      'Molded handle and rugged caster wheels for easy room movement'
    ],
    includedAccessories: [
      'Pre-installed clean bacterial & HEPA intake filters',
      'Brand new sealed bubble humidifier bottle',
      '2x High-flow sterile adult nasal cannulas (2m & 4m)',
      'Digital Purity Test Certificate signed by Biomedical Tech'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'rent-10l-high-flow',
    name: '10 LPM High-Flow Oxygen Concentrator',
    category: '10L High Flow',
    shortDescription: 'High-output dual flow machine delivering up to 10 LPM at elevated outlet pressure for critical respiratory care.',
    flowRate: '1.0 – 10.0 Liters/min (High Pressure Continuous)',
    purity: '93% ± 3% at full 10 LPM output',
    weight: '19.5 – 24 kg',
    powerConsumption: 'approx. 590W – 650W',
    soundLevel: '< 48 dBA',
    dailyRate: 650,
    weeklyRate: 3200,
    monthlyRate: 6500,
    securityDeposit: 5000,
    bestFor: 'Severe pulmonary fibrosis, dual-patient splitting, tracheostomy patients, ICU discharge care.',
    popularBrands: ['DeVilbiss 1025DS', 'Yuwell 7F-10W', 'OxyMed 10L', 'Philips Respironics'],
    features: [
      'High outlet pressure (20 PSIG) compatible with long tubing & dual splitters',
      'Dual flowmeter option (can provide 5L + 5L to two patients)',
      'Heavy-duty dual piston compressor for uninterrupted medical support',
      'Smart alarms: Low Purity, High/Low Pressure, Power Outage'
    ],
    includedAccessories: [
      'Dual heavy-duty humidifier bottles',
      'High-pressure dual oxygen tubing',
      '4x Sterile soft-touch nasal cannulas & face masks',
      'Biomedical laboratory calibration test report'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'rent-portable-poc',
    name: 'Portable Oxygen Concentrator (POC)',
    category: 'Portable (POC)',
    shortDescription: 'Ultra-lightweight battery operated unit approved for air travel, outdoor mobility, and hospital visits.',
    flowRate: 'Pulse Dose Settings 1 to 6 (Intelligent Breath Sensing)',
    purity: '90% – 96% Medical Oxygen',
    weight: '2.2 kg (with battery)',
    powerConsumption: 'Rechargeable Li-Ion (up to 8 hrs run with double battery)',
    soundLevel: '< 38 dBA (Discreet and silent)',
    dailyRate: 900,
    weeklyRate: 4500,
    monthlyRate: 8500,
    securityDeposit: 10000,
    bestFor: 'Active patients, airline travel (FAA approved), outstation travel, active outdoor routine.',
    popularBrands: ['Inogen One G5 / G3', 'Philips SimplyGo Mini', 'Caire FreeStyle Comfort'],
    features: [
      'FAA-Approved for commercial airline and train travel',
      'Ultra-sensitive trigger sensitivity detecting shallow breathing during sleep',
      'AC wall charger + DC 12V car lighter charger included',
      'Custom travel carry bag with padded shoulder strap'
    ],
    includedAccessories: [
      '2x High-capacity rechargeable lithium-ion battery packs',
      'AC power supply adapter (100–240V worldwide)',
      'DC vehicle charging cable',
      'Protective carry bag + 2x Ultra-soft cannula'
    ],
    inStock: true,
    featured: true
  }
];

export const RENTAL_BENEFITS = [
  {
    title: 'Zero Maintenance Cost',
    description: 'We handle all filter changes, sieve maintenance, and technical servicing free of charge during the rental tenure.'
  },
  {
    title: 'Same-Day Fast Delivery',
    description: 'Guaranteed prompt doorstep dispatch across Mumbai, Pune, and Lucknow with complete patient setup & demonstration.'
  },
  {
    title: '100% Sanitized & Hospital-Grade',
    description: 'Every rental machine undergoes rigorous 6-point clinical disinfection and a 4-hour ultrasonic purity burn-in test before delivery.'
  },
  {
    title: 'Free Emergency Backup Swaps',
    description: 'In the rare event of power fluctuation or machine fault, our technician provides an instant doorstep machine replacement.'
  }
];
