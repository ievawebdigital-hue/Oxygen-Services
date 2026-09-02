export interface Article {
  slug: string;
  title: string;
  category: 'Troubleshooting' | 'Maintenance' | 'Guides' | 'Local Service';
  readTime: string;
  publishedDate: string;
  summary: string;
  metaDescription: string;
  keywords: string[];
  keyTakeaways: string[];
  content: {
    heading: string;
    text: string;
    points?: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'oxygen-concentrator-not-working',
    title: 'Oxygen Concentrator Not Working? Step-by-Step Diagnostic & What To Check',
    category: 'Troubleshooting',
    readTime: '5 min read',
    publishedDate: '2026-04-10',
    summary: 'A clear guide on what to inspect when your medical oxygen concentrator stops running, beeps continuously, or delivers low oxygen purity.',
    metaDescription: 'Is your oxygen concentrator not working, beeping, or failing to deliver oxygen? Follow our specialist diagnostic guide before considering replacement.',
    keywords: ['oxygen concentrator not working', 'oxygen machine repair', 'oxygen concentrator troubleshooting', 'oxygen machine service'],
    keyTakeaways: [
      'Always switch patient to backup medical cylinder before troubleshooting.',
      'Check power supply, reset button, and external air intake filter.',
      'Continuous alarms often indicate low oxygen purity (<82%) or internal pressure faults.',
      'Professional service is required for sieve bed degradation and compressor issues.'
    ],
    content: [
      {
        heading: '1. Immediate Patient Safety Protocol',
        text: 'If a patient is dependent on medical oxygen, the first step is always to switch them immediately to an emergency backup oxygen cylinder or secondary source. Never delay therapy while diagnosing an electrical machine.'
      },
      {
        heading: '2. Check Basic Electrical Connections and Circuit Breakers',
        text: 'Examine the power outlet using another small device. Many stationary oxygen concentrators have a black push-to-reset circuit breaker button near the power cord inlet on the back or bottom of the chassis. If an electrical surge occurred, this button pops out. Press it firmly back in.'
      },
      {
        heading: '3. Inspect the External Cabinet Filter',
        text: 'A choked cabinet pre-filter starves the internal compressor of air, causing high operating temperatures and low flow alarms. Remove the washable sponge filter, rinse it under lukewarm water, dry it thoroughly with a towel, and reinstall it.'
      },
      {
        heading: '4. Understanding Audible Alarms & Warning Lights',
        text: 'Oxygen concentrators use standard color codes: Green indicates normal operation (>85% purity), Yellow/Orange signals low oxygen purity (typically 73% to 84%), and Red or continuous beeping signifies critical failure (purity <73%, pressure anomaly, or power loss). If yellow or red persists after 10 minutes of warmup, internal servicing is required.',
        points: [
          'Solid Red Light + Continuous Tone: System failure or pressure lock.',
          'Flashing Yellow Light: Sieve bed degradation or filter blockage.',
          'Intermittent Beeping: Power loss or loose power cable connection.'
        ]
      },
      {
        heading: '5. When to Seek Professional Technician Service',
        text: 'If the machine runs but purity remains low, or if the compressor makes grinding noises, the internal molecular sieve beds or compressor piston seals need technical service. Oxygen Services provides bench diagnostic testing across Mumbai, Pune, and Lucknow.'
      }
    ],
    faq: [
      {
        question: 'Can I open the oxygen concentrator to fix it myself?',
        answer: 'No. Opening the chassis exposes high-voltage capacitors (220V–400V) and compressed oxygen plumbing. Tampering with sieve canisters without cleanroom moisture protection can permanently ruin the zeolite material.'
      },
      {
        question: 'Why does my machine beep immediately when turned on?',
        answer: 'A brief 1–2 second beep at startup is normal self-test behavior. Continuous beeping indicates power failure, motor stall, or low system pressure.'
      }
    ]
  },
  {
    slug: 'why-is-oxygen-concentrator-making-noise',
    title: 'Why Is My Oxygen Concentrator Making Loud Noise or Vibrating?',
    category: 'Troubleshooting',
    readTime: '4 min read',
    publishedDate: '2026-05-15',
    summary: 'Learn what causes excessive noise, rattling, metallic grinding, or loud exhaust hissing in oxygen machines and how technicians fix it.',
    metaDescription: 'Discover why your oxygen concentrator is making loud rattling or vibrating noises. Learn about compressor suspension, exhaust mufflers, and servicing.',
    keywords: ['oxygen concentrator making noise', 'oxygen machine rattling', 'oxygen machine vibration', 'concentrator compressor repair'],
    keyTakeaways: [
      'Normal operating sound is 40–50 dBA (similar to a quiet refrigerator).',
      'Sudden metallic knocking indicates compressor rod bearing or spring issues.',
      'Loud rhythmic hissing is typically normal exhaust valve blowoff (PSA purge cycle).',
      'Placing machines on hard floors away from walls significantly reduces resonance.'
    ],
    content: [
      {
        heading: '1. What Is Normal vs. Abnormal Sound?',
        text: 'A properly functioning stationary oxygen concentrator emits a steady hum from the electric motor and a periodic gentle "whoosh" every 4 to 8 seconds. This whooshing is the 4-way valve releasing nitrogen gas into the room during the PSA cycle.'
      },
      {
        heading: '2. Common Causes of Abnormal Noise',
        text: 'Abnormal noises indicate mechanical wear or displaced acoustic components inside the housing.',
        points: [
          'Vibration Dampening Springs: The compressor sits on 4 heavy-duty coil springs. If one spring unseats during transport, the motor vibrates directly against the plastic casing.',
          'Compressor Cup Seal Wear: As Teflon piston cups wear thin, metal components can make contact, producing a knocking or grinding sound.',
          'Damaged Exhaust Muffler: The internal exhaust silencer can crack or detach, turning the normal gentle whoosh into a sharp, loud pop.',
          'Cooling Fan Obstruction: Wires or internal debris touching the spinning fan blades produce a rapid clicking or buzzing.'
        ]
      },
      {
        heading: '3. Simple Home Checks Before Calling a Technician',
        text: 'Ensure the unit is standing on all 4 caster wheels on a flat, solid floor. Never place an oxygen concentrator on a mattress, sofa, or thick carpet, as this blocks bottom cooling vents and amplifies vibration.'
      }
    ],
    faq: [
      {
        question: 'Can noisy operation damage the machine?',
        answer: 'Yes. If the noise is caused by a failing compressor bearing or loose spring, continued operation can cause catastrophic motor seizure or internal tubing puncture.'
      },
      {
        question: 'How do technicians reduce machine noise?',
        answer: 'Technicians inspect compressor mounts, replace worn piston cup seals, install new intake silencers/mufflers, and balance the motor assembly.'
      }
    ]
  },
  {
    slug: 'oxygen-machine-maintenance-guide',
    title: 'Complete Medical Oxygen Machine Maintenance Guide for Families & Clinics',
    category: 'Maintenance',
    readTime: '6 min read',
    publishedDate: '2026-06-02',
    summary: 'A preventative maintenance schedule covering cabinet filters, intake HEPA filters, humidifier bottle hygiene, and routine purity calibration.',
    metaDescription: 'Essential maintenance protocols for stationary and portable oxygen concentrators to maximize machine lifespan and ensure patient oxygen purity.',
    keywords: ['oxygen machine maintenance', 'oxygen concentrator filter cleaning', 'oxygen equipment care', 'preventive service'],
    keyTakeaways: [
      'Clean external cabinet filters weekly with mild soap and water.',
      'Replace internal HEPA and bacterial filters every 12 months or 2,500 hours.',
      'Keep machine in an open area with at least 12 inches of clearance.',
      'Have oxygen purity verified by a certified technician at least once a year.'
    ],
    content: [
      {
        heading: '1. Weekly Maintenance: Cabinet Pre-Filters',
        text: 'The external black foam filter traps large dust particles and hair. Wash it weekly in warm water with mild detergent. Crucial: Let it air-dry 100% before putting it back. Never run the machine with a wet filter or with no filter installed.'
      },
      {
        heading: '2. Daily Hygiene: Humidifier Bottle and Cannula',
        text: 'Empty and rinse the humidifier bottle daily. Always use distilled or RO water (never tap water or mineral water, which creates calcium scaling that clogs internal diffuser holes). Replace nasal cannulas every 2–4 weeks.'
      },
      {
        heading: '3. Annual / 2,500-Hour Professional Service',
        text: 'Inside every oxygen concentrator is an intake HEPA filter and a final bacterial filter. Over time, microscopic dust penetrates these filters, reducing airflow and degrading the molecular sieve beds. A professional service includes HEPA replacement, ultrasonic purity measurement, and leak testing.'
      }
    ],
    faq: [
      {
        question: 'Why should I only use distilled water in humidifier bottles?',
        answer: 'Tap water contains dissolved minerals (calcium, magnesium) that form white hard scale. This scale clogs the fine diffuser pores and can cause high backpressure alarms.'
      },
      {
        question: 'How often should molecular sieve beds be serviced?',
        answer: 'In typical Indian climates with high ambient humidity, sieve beds last between 8,000 and 15,000 operating hours depending on usage and filter maintenance.'
      }
    ]
  },
  {
    slug: 'oxygen-concentrator-repair-vs-replacement',
    title: 'Oxygen Concentrator Repair vs Replacement: When Is It Worth Fixing?',
    category: 'Guides',
    readTime: '5 min read',
    publishedDate: '2026-07-18',
    summary: 'How to make an informed financial and technical decision between servicing your existing oxygen machine or purchasing a new one.',
    metaDescription: 'Should you repair or replace your oxygen concentrator? Compare repair costs, sieve repacking, compressor rebuilds, and machine lifecycle economics.',
    keywords: ['oxygen concentrator repair vs replacement', 'oxygen machine cost', 'sieve bed replacement cost', 'concentrator life expectancy'],
    keyTakeaways: [
      'Most faults (filters, valves, sieve repacking, capacitors) cost a fraction of a new machine.',
      'Reputable 5L and 10L units have lifespans of 20,000+ hours with timely servicing.',
      'Get a transparent bench diagnosis before spending on a new unit.'
    ],
    content: [
      {
        heading: '1. The Economics of Oxygen Equipment Service',
        text: 'A high-grade 5L or 10L medical oxygen concentrator represents a significant investment. In 85% of cases where machines trigger alarms or drop purity, the issue is isolated to consumable components: degraded molecular sieve zeolite, a worn compressor cup seal, or a faulty cycle valve. Servicing these components restores 93% purity at a fraction of the replacement cost.'
      },
      {
        heading: '2. When Repair Is the Clear Choice',
        text: 'If your machine is from a reputable manufacturer and the chassis/electronics are intact, component-level repair is highly economical.',
        points: [
          'Sieve bed degradation (purity dropped from 93% to 80%)',
          'Intake filter choking or exhaust muffler blowout',
          'Solenoid pilot valve sticking',
          'Power switch or thermal fuse failure'
        ]
      },
      {
        heading: '3. When Replacement May Be Necessary',
        text: 'Replacement should only be considered if the compressor motor windings are completely burnt out, the main microprocessor board is physically damaged and obsolete, and the cost of parts approaches 60–70% of a brand-new unit with full warranty.'
      }
    ],
    faq: [
      {
        question: 'Can Oxygen Services provide an estimate before starting repair work?',
        answer: 'Yes. Every device receives a thorough diagnostic assessment, after which an itemized estimate is provided for customer approval before any repairs begin.'
      }
    ]
  },
  {
    slug: 'oxygen-concentrator-service-mumbai',
    title: 'Specialist Oxygen Concentrator & Machine Service in Mumbai & MMR',
    category: 'Local Service',
    readTime: '4 min read',
    publishedDate: '2026-08-01',
    summary: 'Comprehensive oxygen equipment repair, calibration, and technician support across Mumbai (Thane, Mira-Bhayandar, Vasai-Virar, and Kalyan - Bhiwandi).',
    metaDescription: 'Looking for oxygen concentrator repair in Mumbai? Oxygen Services provides specialist diagnosis, sieve repacking, and maintenance covering Thane, Mira-Bhayandar, Vasai-Virar, and Kalyan - Bhiwandi.',
    keywords: ['oxygen concentrator repair Mumbai', 'oxygen machine service Mumbai', 'Thane oxygen concentrator repair', 'Mira Bhayandar oxygen service', 'Vasai Virar oxygen machine repair', 'Kalyan Bhiwandi oxygen concentrator'],
    keyTakeaways: [
      'Head office diagnostic center located in Mira Road East (Mira-Bhayandar).',
      'Dedicated service coverage across Thane, Mira-Bhayandar, Vasai-Virar, and Kalyan - Bhiwandi.',
      'Equipped with digital ultrasonic analyzers and compressor test benches.'
    ],
    content: [
      {
        heading: 'Mumbai Head Office Technical Facilities',
        text: 'Located at Shop No. 11 Park, Gokul Village, Mira Road East, our Mumbai Head Office functions as the primary diagnostic workshop for high-precision repairs. We handle stationary 5L/10L concentrators and portable units with advanced test benches.'
      },
      {
        heading: 'Areas Covered Across Mumbai',
        text: 'In Mumbai, we provide comprehensive doorstep pickup, on-site diagnostics, and rental deliveries across 4 major regions: 1) Thane, 2) Mira-Bhayandar, 3) Vasai-Virar, and 4) Kalyan - Bhiwandi.'
      }
    ],
    faq: [
      {
        question: 'What is the contact number for Oxygen Services Mumbai?',
        answer: 'You can call our Mumbai Head Office at 9820370015 or 9819459421, or message on WhatsApp at 9820370015.'
      }
    ]
  },
  {
    slug: 'oxygen-concentrator-service-pune',
    title: 'Expert Medical Oxygen Machine & Concentrator Service in Pune',
    category: 'Local Service',
    readTime: '4 min read',
    publishedDate: '2026-08-05',
    summary: 'Professional diagnostic inspection, filter replacement, and molecular sieve repair for oxygen concentrators in Pune and PCMC.',
    metaDescription: 'Specialist oxygen concentrator service in Pune. Visit our Mangalwar Peth branch or request technician assessment for home and clinic oxygen equipment.',
    keywords: ['oxygen concentrator service Pune', 'oxygen machine repair Pune', 'oxygen technician Pune', 'Mangalwar Peth oxygen repair'],
    keyTakeaways: [
      'Centrally located branch in Mangalwar Peth, Pune.',
      'Prompt service for Kothrud, Shivaji Nagar, Hadapsar, and PCMC areas.',
      'Vendor-independent technical service for all major oxygen concentrator brands.'
    ],
    content: [
      {
        heading: 'Pune Branch Location and Facilities',
        text: 'Our Pune branch is conveniently situated at Ganesh Complex, 445, New Mangalwar Peth, 15 August Chowk. We offer complete testing, filter servicing, and component repairs for home oxygen units.'
      },
      {
        heading: 'Fast Diagnostic Support for Pune & PCMC',
        text: 'We support families and clinics across Shivaji Nagar, Kothrud, Hadapsar, Viman Nagar, Baner, Aundh, Kalyani Nagar, and Pimpri-Chinchwad.'
      }
    ],
    faq: [
      {
        question: 'How do I submit an equipment repair request in Pune?',
        answer: 'You can submit a request on our website, visit our Mangalwar Peth branch, or call our Pune team at 9820370015.'
      }
    ]
  },
  {
    slug: 'oxygen-concentrator-service-lucknow',
    title: 'Reliable Oxygen Concentrator & Machine Repair Service in Lucknow',
    category: 'Local Service',
    readTime: '4 min read',
    publishedDate: '2026-08-10',
    summary: 'Dedicated oxygen equipment technical repair, alarm troubleshooting, and maintenance support in Lucknow and surrounding UP districts.',
    metaDescription: 'Professional oxygen concentrator repair and maintenance in Lucknow. Located in Chinhat, serving Gomti Nagar, Indira Nagar, Alambagh and beyond.',
    keywords: ['oxygen concentrator repair Lucknow', 'oxygen machine service Lucknow', 'oxygen equipment technician Lucknow', 'Chinhat oxygen service'],
    keyTakeaways: [
      'Branch facility located in Chinhat, Tiwari Ganj, Lucknow.',
      'Serving Gomti Nagar, Indira Nagar, Hazratganj, Alambagh, and Faizabad Road.',
      'Precision oxygen purity checking and sieve column replacement.'
    ],
    content: [
      {
        heading: 'Lucknow Technical Service Hub',
        text: 'Our Lucknow branch at Tiwari Ganj, Plot No: B-4, opposite Prime Rose Villa, Chinhat, provides expert diagnostic testing and repair for stationary and portable oxygen concentrators.'
      },
      {
        heading: 'Serving Greater Lucknow Region',
        text: 'We provide prompt technical support for Gomti Nagar, Gomti Nagar Extension, Indira Nagar, Hazratganj, Alambagh, Mahanagar, Vikas Nagar, and nearby healthcare setups.'
      }
    ],
    faq: [
      {
        question: 'Where is the Oxy Breath Services Lucknow branch located?',
        answer: 'Our branch is at Tiwari Ganj, Plot No: B-4, opposite Prime Rose Villa, Chinhat, Uttardhauna, Lucknow, Uttar Pradesh 226028.'
      }
    ]
  }
];

export const KNOWLEDGE_ARTICLES = ARTICLES;
