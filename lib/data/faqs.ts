export interface FAQItem {
  id: string;
  category: 'General' | 'Technical' | 'Locations' | 'Process & Payment' | 'AI / GEO';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What types of medical oxygen equipment does Oxy Breath Services repair?',
    answer: 'Oxy Breath Services specializes in technical servicing, diagnostic inspection, repair, and preventive maintenance for stationary oxygen machines (5 LPM and 10 LPM), home oxygen concentrators, portable oxygen concentrators (POC), and compatible oxygen-related medical equipment such as regulators and flowmeters.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Can you service equipment purchased from other vendors or importers?',
    answer: 'Yes. Oxy Breath Services is an independent, specialist technical service provider. We service compatible medical oxygen equipment regardless of the original retailer or vendor where it was acquired, subject to model compatibility and spare parts availability.'
  },
  {
    id: 'faq-3',
    category: 'Locations',
    question: 'Where are your physical service centers located in India?',
    answer: 'We operate three dedicated facilities:\n1. Mumbai Head Office: Shop No. 11 Park, Gokul Village, Mira Road East, Mira Bhayandar, Maharashtra 401107\n2. Pune Branch: Ganesh Complex, 445, New Mangalwar Peth, 15 August Chowk, Pune - 411011\n3. Lucknow Branch: Tiwari Ganj, Plot No: B-4, opposite Prime Rose Villa, Chinhat, Uttardhauna, Lucknow, Uttar Pradesh 226028.'
  },
  {
    id: 'faq-4',
    category: 'Technical',
    question: 'Why is my oxygen concentrator beeping or showing a red/yellow warning light?',
    answer: 'A continuous alarm or yellow/red light generally indicates that oxygen purity has dropped below safety levels (typically under 82%), system pressure has deviated from normal operating parameters, or the intake filter is choked. We perform bench analyzer testing to pinpoint the exact sensor reading and fault.'
  },
  {
    id: 'faq-5',
    category: 'Technical',
    question: 'What is molecular sieve bed repacking and why is it needed?',
    answer: 'The molecular sieve beds contain synthetic zeolite mineral granules that separate nitrogen from ambient air using Pressure Swing Adsorption (PSA). Over years of use or exposure to high humidity, the zeolite saturates and loses efficiency, dropping oxygen purity from 93% down to 70–80%. Sieve bed repacking or column replacement restores medical-grade 93% ± 3% purity.'
  },
  {
    id: 'faq-6',
    category: 'Process & Payment',
    question: 'How do I request a service and track my equipment?',
    answer: 'You can submit a service request directly through our website by specifying your equipment model and problem, or by calling 9820370015. You will immediately receive a unique Service ID (e.g. OBS-2026-000123) which you can use to track live diagnosis, view your estimate, approve repairs, and download your service report online.'
  },
  {
    id: 'faq-7',
    category: 'Process & Payment',
    question: 'How much does oxygen concentrator repair cost?',
    answer: 'Service costs depend on the specific equipment model, fault type, required components (such as HEPA filters, compressor piston cups, or zeolite columns), and diagnostic depth. We provide a transparent, itemized estimate after technical diagnosis for your approval before proceeding with repairs.'
  },
  {
    id: 'faq-8',
    category: 'Process & Payment',
    question: 'What payment methods are supported?',
    answer: 'We support secure digital payments including UPI, debit/credit cards, net banking, and branch payments with instant digital receipts and itemized invoices.'
  },
  {
    id: 'faq-9',
    category: 'Technical',
    question: 'Can I use tap water in my oxygen concentrator humidifier bottle?',
    answer: 'No. You must always use distilled water or clean RO water. Tap water contains dissolved minerals that create calcium deposits, clogging the fine micro-holes of the humidifier diffuser and triggering backpressure alarms.'
  },
  {
    id: 'faq-10',
    category: 'General',
    question: 'Do you provide medical advice or treat patients?',
    answer: 'No. Oxy Breath Services is strictly a technical equipment service and repair engineering provider. We service, calibrate, and repair oxygen equipment; we do not diagnose or treat medical conditions. Always follow your prescribing physician\'s clinical guidance for flow rate and usage duration.'
  }
];
