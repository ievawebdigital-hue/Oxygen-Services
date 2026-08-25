export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  branchCity: 'Mumbai' | 'Pune' | 'Lucknow';
  branchName: string;
  rating: number;
  date: string;
  machineModel: string;
  serviceType: string;
  feedback: string;
  purityBefore?: string;
  purityAfter?: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-mum-1',
    name: 'Rajesh Shah',
    role: 'Home Caregiver',
    location: 'Borivali West, Mumbai',
    branchCity: 'Mumbai',
    branchName: 'OXY BREATH SERVICES (Mira Road)',
    rating: 5,
    date: 'August 2026',
    machineModel: 'Philips Respironics EverFlo (5 LPM)',
    serviceType: 'Molecular Sieve Bed Repacking & Diagnostic',
    feedback: 'Our EverFlo had dropped to 74% purity and the yellow alarm was continuously beeping. The team at Oxy Breath Services in Mira Road did a bench diagnostic, repacked the sieve beds with fresh medical zeolite, and brought purity back to 94.8%. The detailed calibration report gave our pulmonologist complete peace of mind.',
    purityBefore: '74%',
    purityAfter: '94.8%',
    verified: true
  },
  {
    id: 'test-pune-1',
    name: 'Dr. Anand Kulkarni',
    role: 'Senior Chest Physician / Clinic Director',
    location: 'Kothrud, Pune',
    branchCity: 'Pune',
    branchName: 'OXY BREATH SERVICES (Mangalwar Peth)',
    rating: 5,
    date: 'July 2026',
    machineModel: 'DeVilbiss 525DS & Nidek Nuvo 10',
    serviceType: 'Annual Preventive Maintenance & Filter Kits',
    feedback: 'We regularly send clinic concentrators to Oxy Breath Services at 15 August Chowk, Pune. Their ultrasonic analyzer readings match our hospital calibrated sensors precisely. Honest estimates, genuine intake and bacterial filters, and speedy turnaround.',
    purityBefore: '82%',
    purityAfter: '95.2%',
    verified: true
  },
  {
    id: 'test-lko-1',
    name: 'Virendra Pratap Singh',
    role: 'Patient Family Member',
    location: 'Gomti Nagar, Lucknow',
    branchCity: 'Lucknow',
    branchName: 'OXY BREATH SERVICES (Chinhat)',
    rating: 5,
    date: 'August 2026',
    machineModel: 'Evox 10 LPM Dual Flow',
    serviceType: 'Compressor Wobble Cup Overhaul',
    feedback: 'The machine was vibrating loudly with low pressure output. Oxy Breath Services at Tiwari Ganj / Chinhat picked it up, replaced the piston PTFE seal cups and vibration dampeners. Now it runs whisper quiet with stable 10 LPM delivery. Highly recommend their prompt service.',
    purityBefore: '78%',
    purityAfter: '93.5%',
    verified: true
  },
  {
    id: 'test-mum-2',
    name: 'Meena Merchant',
    role: 'Home Oxygen Therapy User',
    location: 'Andheri West, Mumbai',
    branchCity: 'Mumbai',
    branchName: 'OXY BREATH SERVICES (Mira Road)',
    rating: 5,
    date: 'June 2026',
    machineModel: 'Inogen One G5 (Portable POC)',
    serviceType: 'Column Sieve Module Replacement & Diagnostic',
    feedback: 'My portable concentrator showed "Replace Columns" right before travel. Oxy Breath Services handled the column replacement, ultrasonic test, and battery calibration within 24 hours. Excellent technical transparency and courteous team.',
    purityBefore: '80%',
    purityAfter: '94.0%',
    verified: true
  },
  {
    id: 'test-pune-2',
    name: 'Suhas Deshmukh',
    role: 'Caregiver',
    location: 'Hadapsar, Pune',
    branchCity: 'Pune',
    branchName: 'OXY BREATH SERVICES (Mangalwar Peth)',
    rating: 5,
    date: 'May 2026',
    machineModel: 'Oxymed Mini 5L',
    serviceType: 'Solenoid Valve Assembly & Sieve Refurbishment',
    feedback: 'The team at Oxy Breath Services diagnosed a stuck 4-way valve causing pressure imbalance. They sent a clear WhatsApp photo of the findings and an itemized quote before proceeding. Repaired and delivered back with zero fuss.',
    purityBefore: '69%',
    purityAfter: '94.5%',
    verified: true
  },
  {
    id: 'test-lko-2',
    name: 'Alka Srivastava',
    role: 'Daughter of COPD Patient',
    location: 'Indira Nagar, Lucknow',
    branchCity: 'Lucknow',
    branchName: 'OXY BREATH SERVICES (Chinhat)',
    rating: 5,
    date: 'July 2026',
    machineModel: 'Yuwell 8F-5AW',
    serviceType: 'General Servicing, Filter Kit & Ultrasonic Calibration',
    feedback: 'Fast, reliable, and genuine. Oxy Breath Services provided complete pickup from Indira Nagar, serviced our Yuwell machine, replaced HEPA and intake filters, and returned it certified above 93% purity. Wonderful support for elderly patients.',
    purityBefore: '83%',
    purityAfter: '94.1%',
    verified: true
  },
  {
    id: 'test-mum-3',
    name: 'Ketan Parekh',
    role: 'Biomedical Facility Supervisor',
    location: 'Thane West, Mumbai',
    branchCity: 'Mumbai',
    branchName: 'OXY BREATH SERVICES (Mira Road)',
    rating: 5,
    date: 'May 2026',
    machineModel: 'AirSep NewLife Intensity 10',
    serviceType: 'Main PCB Micro-controller Repair & Pressure Relief Calibration',
    feedback: 'Oxy Breath Services is our primary go-to for complex heavy-duty oxygen concentrators. They repaired a high-pressure manifold fault on our 10L unit in record time with full flow stability tests.',
    purityBefore: '76%',
    purityAfter: '95.0%',
    verified: true
  },
  {
    id: 'test-pune-3',
    name: 'Sunita Joshi',
    role: 'Home Care Patient',
    location: 'Shivaji Nagar, Pune',
    branchCity: 'Pune',
    branchName: 'OXY BREATH SERVICES (Mangalwar Peth)',
    rating: 5,
    date: 'June 2026',
    machineModel: 'Philips Respironics SimplyGo',
    serviceType: 'Compressor Cup Seal Replacement & Flow Calibration',
    feedback: 'Oxy Breath Services provided outstanding doorstep pickup and rapid turn-around. The portable unit was calibrated to peak performance and runs smoothly without heating.',
    purityBefore: '79%',
    purityAfter: '93.8%',
    verified: true
  },
  {
    id: 'test-lko-3',
    name: 'Dr. Mohd. Tariq',
    role: 'Nursing Home Administrator',
    location: 'Alambagh, Lucknow',
    branchCity: 'Lucknow',
    branchName: 'OXY BREATH SERVICES (Chinhat)',
    rating: 5,
    date: 'August 2026',
    machineModel: 'BMC O2 Concentrator 5L & Bipap Combo',
    serviceType: 'Comprehensive Annual Servicing & Bacterial Filtration',
    feedback: 'Oxy Breath Services tested all 4 of our nursing home concentrators with digital oxygen analyzers and provided laminated calibration certificates. Highly professional biomedical team.',
    purityBefore: '81%',
    purityAfter: '95.4%',
    verified: true
  }
];
