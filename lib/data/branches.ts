export interface Branch {
  id: 'mumbai' | 'pune' | 'lucknow';
  name: string;
  type: 'Head Office' | 'Branch';
  city: string;
  state: string;
  pincode: string;
  address: string;
  primaryPhone: string;
  secondaryPhone: string;
  whatsapp: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  keyAreas: string[];
  description: string;
  servicesAvailable: string[];
}

export const BRANCHES: Branch[] = [
  {
    id: 'mumbai',
    name: 'V CARE SURGICAL',
    type: 'Head Office',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '401107',
    address: 'Shop No, 11 Park, Gokul village, Mira Road East, Mira Bhayandar, Maharashtra 401107',
    primaryPhone: '9820370015',
    secondaryPhone: '9819459421',
    whatsapp: '9820370015',
    email: 'mumbai@oxygenservices.in',
    hours: 'Monday – Saturday: 9:00 AM – 8:00 PM | Sunday: Emergency On-Call Support',
    mapEmbedUrl: 'https://maps.google.com/maps?q=V+CARE+SURGICAL,+Shop+No+11+Park,+Gokul+village,+Mira+Road+East,+Mira+Bhayandar,+Maharashtra+401107&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=V+CARE+SURGICAL+Shop+No+11+Park+Gokul+village+Mira+Road+East+Mira+Bhayandar+Maharashtra+401107',
    keyAreas: ['Mira Road', 'Bhayandar', 'Borivali', 'Kandivali', 'Andheri', 'Bandra', 'Thane', 'Navi Mumbai', 'Vasai-Virar'],
    description: 'Our central diagnostic lab and primary technical workshop for major compressor overhauls, molecular sieve replacements, and component-level circuit board repairs.',
    servicesAvailable: [
      'Stationary Oxygen Concentrator Service',
      'Portable Oxygen Concentrator (POC) Repair',
      'Molecular Sieve Column Repacking & Calibration',
      'Compressor Overhaul & Pressure Testing',
      'Digital Oxygen Purity & Flow Rate Verification',
      'Emergency Same-Day Diagnostic Evaluation'
    ]
  },
  {
    id: 'pune',
    name: 'Ojasvi Medical Equipment',
    type: 'Branch',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411011',
    address: 'Ganesh Complex, 445, New Mangalwar Peth, 15 August Chowk, Pune - 411 011',
    primaryPhone: '8149324456',
    secondaryPhone: '8892012012',
    whatsapp: '8149324456',
    email: 'ojasviequipment@gmail.com',
    hours: 'Monday – Saturday: 9:30 AM – 7:30 PM | Sunday: On-Call Support',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Ojasvi+Medical+Equipment,+Ganesh+Complex,+445,+New+Mangalwar+Peth,+15+August+Chowk,+Pune+-+411011&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Ojasvi+Medical+Equipment+Ganesh+Complex+445+New+Mangalwar+Peth+15+August+Chowk+Pune+411011',
    keyAreas: ['Mangalwar Peth', 'Shivaji Nagar', 'Kothrud', 'Hadapsar', 'Viman Nagar', 'Baner', 'Aundh', 'Pimpri-Chinchwad', 'Kalyani Nagar'],
    description: 'Serving Pune and the Pimpri-Chinchwad metropolitan area with dedicated technician bench testing, filter replacement, valve troubleshooting, and drop-off service.',
    servicesAvailable: [
      'Oxygen Concentrator Servicing & Maintenance',
      'Oxygen Output Purity Testing',
      'Filter Replacement & Sanitization',
      'PCB Fault Troubleshooting',
      'Valve & Seal Leakage Testing',
      'Preventive Maintenance Checkups'
    ]
  },
  {
    id: 'lucknow',
    name: 'Health Hub Services',
    type: 'Branch',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226028',
    address: 'Tiwari Ganj, Plot No: B-4, opposite Prime Rose Villa, Chinhat, Uattardhona, Lucknow, Uttar Pradesh 226028',
    primaryPhone: '9820370015',
    secondaryPhone: '9819459421',
    whatsapp: '9820370015',
    email: 'lucknow@oxygenservices.in',
    hours: 'Monday – Saturday: 9:30 AM – 7:30 PM | Sunday: On-Call Support',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Health+Hub+Services,+Tiwari+Ganj,+Plot+No:+B-4,+opposite+Prime+Rose+Villa,+Chinhat,+Uattardhona,+Lucknow,+Uttar+Pradesh+226028&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Health+Hub+Services+Tiwari+Ganj+Plot+No+B-4+opposite+Prime+Rose+Villa+Chinhat+Uattardhona+Lucknow+Uttar+Pradesh+226028',
    keyAreas: ['Chinhat', 'Gomti Nagar', 'Gomti Nagar Extension', 'Indira Nagar', 'Alambagh', 'Hazratganj', 'Mahanagar', 'Vikas Nagar', 'Faizabad Road'],
    description: 'Providing specialist medical oxygen equipment service and technical repair support for patients, clinics, and equipment owners across Lucknow and Uttar Pradesh.',
    servicesAvailable: [
      'Home Oxygen Concentrator Repair',
      'Portable Oxygen Device Diagnostics',
      'Ultrasonic Purity Level Inspection',
      'Cooling Fan & Overheating Repairs',
      'Audio & Visual Alarm Troubleshooting',
      'Branch Drop-Off & Technician Assessment'
    ]
  }
];

export const COMPANY_CONTACT = {
  name: 'Oxygen Services',
  tagline: 'Specialists in Medical Oxygen Equipment Service & Repair',
  primaryPhone: '9820370015',
  secondaryPhone: '9819459421',
  whatsapp: '9820370015',
  whatsappUrl: 'https://wa.me/919820370015?text=Hello%20Oxygen%20Services%2C%20I%20need%20assistance%20with%20my%20medical%20oxygen%20equipment.',
  supportEmail: 'support@oxygenservices.in',
  email: 'support@oxygenservices.in',
  cities: ['Mumbai', 'Pune', 'Lucknow']
};
