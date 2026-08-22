'use client';

import { addActivityLog } from './activityStore';

export type ServiceStatusStep =
  | 'Request Received'
  | 'Equipment Details Verified'
  | 'Technician Assigned'
  | 'Equipment Received / Visit Scheduled'
  | 'Diagnosis in Progress'
  | 'Estimate Prepared'
  | 'Customer Approval Pending'
  | 'Repair / Service in Progress'
  | 'Testing & Quality Check'
  | 'Ready for Delivery / Visit Completed'
  | 'Service Completed';

export const ALL_STEPS: ServiceStatusStep[] = [
  'Request Received',
  'Equipment Details Verified',
  'Technician Assigned',
  'Equipment Received / Visit Scheduled',
  'Diagnosis in Progress',
  'Estimate Prepared',
  'Customer Approval Pending',
  'Repair / Service in Progress',
  'Testing & Quality Check',
  'Ready for Delivery / Visit Completed',
  'Service Completed'
];

export interface StatusTimelineEntry {
  step: ServiceStatusStep;
  date: string;
  time: string;
  notes: string;
  completed: boolean;
}

export interface EstimateItem {
  id: string;
  description: string;
  type: 'Part' | 'Labor' | 'Diagnostic' | 'Filter';
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface ServiceTicket {
  serviceId: string;
  customerName: string;
  mobileNumber: string;
  whatsappNumber: string;
  email: string;
  city: 'Mumbai' | 'Pune' | 'Lucknow';
  branchId: 'mumbai' | 'pune' | 'lucknow';
  equipmentType: 'Oxygen Machine' | 'Oxygen Concentrator' | 'Portable Oxygen Concentrator' | 'Medical Oxygen Equipment';
  brand: string;
  modelNumber: string;
  problemSummary: string;
  serviceType: 'Bench Diagnostic' | 'Full Service' | 'Emergency Repair' | 'Filter Kit Replacement' | 'Preventive Maintenance';
  preferredDate?: string;
  fulfillmentType: 'Branch Drop-off' | 'Doorstep Pickup' | 'Technician Visit';
  address?: string;
  photoUrl?: string;
  additionalMessage?: string;
  createdAt: string;
  updatedAt: string;
  currentStepIndex: number;
  status: ServiceStatusStep;
  assignedTechnician?: {
    name: string;
    phone: string;
    branch: string;
  };
  diagnosticData?: {
    initialPurityPercent?: number;
    finalPurityPercent?: number;
    operatingPressurePsig?: number;
    runtimeHours?: number;
    diagnosedFaults?: string[];
    technicianNotes?: string;
  };
  estimate?: {
    items: EstimateItem[];
    subtotal: number;
    gstAmount: number;
    totalAmount: number;
    approvalStatus: 'Pending' | 'Approved' | 'Declined';
    approvedAt?: string;
  };
  payment?: {
    status: 'Pending' | 'Paid' | 'Waived';
    amountPaid?: number;
    paymentMethod?: string;
    transactionId?: string;
    paidAt?: string;
  };
  timeline: StatusTimelineEntry[];
}

const INITIAL_DEMO_TICKETS: ServiceTicket[] = [
  {
    serviceId: 'OS-2026-000108',
    customerName: 'Rajesh Sharma',
    mobileNumber: '9820370015',
    whatsappNumber: '9820370015',
    email: 'r.sharma@example.com',
    city: 'Mumbai',
    branchId: 'mumbai',
    equipmentType: 'Oxygen Concentrator',
    brand: 'Philips Respironics',
    modelNumber: 'EverFlo 5L (OPI Version)',
    problemSummary: 'Yellow indicator light on with continuous beep when flow is set above 3 LPM. Purity dropped.',
    serviceType: 'Full Service',
    fulfillmentType: 'Branch Drop-off',
    address: 'Andheri West, Mumbai, Maharashtra 400053',
    createdAt: '2026-08-18 10:30 AM',
    updatedAt: '2026-08-21 04:15 PM',
    currentStepIndex: 8, // Testing & Quality Check
    status: 'Testing & Quality Check',
    assignedTechnician: {
      name: 'Pravin Kadam (Sr. Biomedical Tech)',
      phone: '9820370015',
      branch: 'Mumbai Head Office'
    },
    diagnosticData: {
      initialPurityPercent: 74.8,
      finalPurityPercent: 94.2,
      operatingPressurePsig: 23.4,
      runtimeHours: 8420,
      diagnosedFaults: [
        'Molecular sieve bed zeolite contaminated with high ambient moisture',
        'Intake HEPA filter saturated with particulate matter (over 3000 hrs)',
        '4-way pilot cycle valve gasket minor wear'
      ],
      technicianNotes: 'Repacked dual zeolite molecular sieve columns with medical grade 13X zeolite. Replaced inlet HEPA & micro-disk bacteria filter. 24-hr stability test in progress.'
    },
    estimate: {
      items: [
        { id: '1', description: 'Medical Grade Molecular Sieve Zeolite Repack (Dual Canister)', type: 'Part', quantity: 1, unitPrice: 4200, total: 4200 },
        { id: '2', description: 'Intake HEPA Filter & Final Bacterial Filter Set', type: 'Filter', quantity: 1, unitPrice: 1200, total: 1200 },
        { id: '3', description: '4-Way Pilot Valve Servicing & Pressure Calibration', type: 'Part', quantity: 1, unitPrice: 850, total: 850 },
        { id: '4', description: 'Biomedical Bench Diagnostic & Ultrasonic Purity Testing Labor', type: 'Labor', quantity: 1, unitPrice: 1500, total: 1500 }
      ],
      subtotal: 7750,
      gstAmount: 1395,
      totalAmount: 9145,
      approvalStatus: 'Approved',
      approvedAt: '2026-08-19 02:20 PM'
    },
    payment: {
      status: 'Paid',
      amountPaid: 9145,
      paymentMethod: 'UPI / Online Gateway',
      transactionId: 'TXN-RZP-2026-992140',
      paidAt: '2026-08-20 11:45 AM'
    },
    timeline: [
      { step: 'Request Received', date: '18 Aug 2026', time: '10:30 AM', notes: 'Service request registered via website for EverFlo 5L.', completed: true },
      { step: 'Equipment Details Verified', date: '18 Aug 2026', time: '11:15 AM', notes: 'Model, serial number, and reported symptoms verified.', completed: true },
      { step: 'Technician Assigned', date: '18 Aug 2026', time: '11:45 AM', notes: 'Assigned to Sr. Biomedical Technician Pravin Kadam at Mumbai Head Office.', completed: true },
      { step: 'Equipment Received / Visit Scheduled', date: '18 Aug 2026', time: '02:00 PM', notes: 'Unit received at Mira Road diagnostic lab. Visual intake check completed.', completed: true },
      { step: 'Diagnosis in Progress', date: '19 Aug 2026', time: '11:00 AM', notes: 'Ultrasonic analyzer recorded 74.8% purity at 3 LPM. High pressure load test completed.', completed: true },
      { step: 'Estimate Prepared', date: '19 Aug 2026', time: '01:30 PM', notes: 'Estimate of ₹9,145 (incl. GST) generated for sieve repacking and filtration replacement.', completed: true },
      { step: 'Customer Approval Pending', date: '19 Aug 2026', time: '01:45 PM', notes: 'Customer approved estimate via online portal.', completed: true },
      { step: 'Repair / Service in Progress', date: '20 Aug 2026', time: '10:00 AM', notes: 'Sieve beds repacked and sealed. New HEPA installed.', completed: true },
      { step: 'Testing & Quality Check', date: '21 Aug 2026', time: '04:15 PM', notes: 'Current purity reading: 94.2% at 5 LPM. 24-hr burn-in run underway.', completed: true },
      { step: 'Ready for Delivery / Visit Completed', date: 'Pending', time: '', notes: 'Scheduled for dispatch/pickup after quality sign-off.', completed: false },
      { step: 'Service Completed', date: 'Pending', time: '', notes: 'Final signoff and service report issuance.', completed: false }
    ]
  },
  {
    serviceId: 'OS-2026-000114',
    customerName: 'Sunita Joshi',
    mobileNumber: '9819459421',
    whatsappNumber: '9819459421',
    email: 's.joshi@example.com',
    city: 'Pune',
    branchId: 'pune',
    equipmentType: 'Portable Oxygen Concentrator',
    brand: 'Inogen',
    modelNumber: 'Inogen One G5',
    problemSummary: 'Unit showing "Service Sieve Columns Soon" error and battery discharges within 40 minutes.',
    serviceType: 'Bench Diagnostic',
    fulfillmentType: 'Branch Drop-off',
    address: 'Kothrud, Pune, Maharashtra 411038',
    createdAt: '2026-08-19 02:00 PM',
    updatedAt: '2026-08-21 01:20 PM',
    currentStepIndex: 4, // Diagnosis in Progress
    status: 'Diagnosis in Progress',
    assignedTechnician: {
      name: 'Amol Deshmukh',
      phone: '9820370015',
      branch: 'Pune Branch (Mangalwar Peth)'
    },
    diagnosticData: {
      initialPurityPercent: 81.2,
      operatingPressurePsig: 14.8,
      runtimeHours: 3200,
      diagnosedFaults: [
        'Sieve column cartridge life expired (internal cycle limit)',
        'Battery cell 2 impedance high causing rapid voltage cutoff'
      ],
      technicianNotes: 'Column replacement required. Performing battery load cycle test on calibrated DC bench.'
    },
    estimate: {
      items: [
        { id: '1', description: 'Original Replacement Sieve Column Pair (Inogen G5 compatible)', type: 'Part', quantity: 1, unitPrice: 6500, total: 6500 },
        { id: '2', description: 'Pulse-Dose Breath Detection Sensor Calibration & Diagnostics', type: 'Labor', quantity: 1, unitPrice: 1200, total: 1200 }
      ],
      subtotal: 7700,
      gstAmount: 1386,
      totalAmount: 9086,
      approvalStatus: 'Pending'
    },
    payment: {
      status: 'Pending'
    },
    timeline: [
      { step: 'Request Received', date: '19 Aug 2026', time: '02:00 PM', notes: 'POC service request registered for Inogen One G5.', completed: true },
      { step: 'Equipment Details Verified', date: '19 Aug 2026', time: '03:15 PM', notes: 'Verified portable unit details and battery status.', completed: true },
      { step: 'Technician Assigned', date: '19 Aug 2026', time: '04:00 PM', notes: 'Assigned to Amol Deshmukh at Pune Mangalwar Peth branch.', completed: true },
      { step: 'Equipment Received / Visit Scheduled', date: '20 Aug 2026', time: '11:30 AM', notes: 'Unit dropped off at Pune branch.', completed: true },
      { step: 'Diagnosis in Progress', date: '21 Aug 2026', time: '01:20 PM', notes: 'Bench test in progress. Column replacement estimate prepared.', completed: true },
      { step: 'Estimate Prepared', date: 'Pending', time: '', notes: 'Ready for customer notification.', completed: false },
      { step: 'Customer Approval Pending', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Repair / Service in Progress', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Testing & Quality Check', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Ready for Delivery / Visit Completed', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Service Completed', date: 'Pending', time: '', notes: '', completed: false }
    ]
  },
  {
    serviceId: 'OS-2026-000119',
    customerName: 'Amitabh Verma',
    mobileNumber: '9820370015',
    whatsappNumber: '9820370015',
    email: 'a.verma@example.com',
    city: 'Lucknow',
    branchId: 'lucknow',
    equipmentType: 'Oxygen Machine',
    brand: 'DeVilbiss',
    modelNumber: '525DS 5-Liter Compact',
    problemSummary: 'Loud knocking vibration from compressor; machine shuts off automatically after 20 minutes.',
    serviceType: 'Emergency Repair',
    fulfillmentType: 'Doorstep Pickup',
    address: 'Gomti Nagar Extension, Lucknow, Uttar Pradesh 226010',
    createdAt: '2026-08-20 09:15 AM',
    updatedAt: '2026-08-21 03:00 PM',
    currentStepIndex: 2, // Technician Assigned
    status: 'Technician Assigned',
    assignedTechnician: {
      name: 'Vikas Srivastava',
      phone: '9820370015',
      branch: 'Lucknow Branch (Chinhat)'
    },
    diagnosticData: {
      technicianNotes: 'Assigned for doorstep pickup coordination in Gomti Nagar. Suspected compressor spring unseating or thermal switch fault.'
    },
    payment: {
      status: 'Pending'
    },
    timeline: [
      { step: 'Request Received', date: '20 Aug 2026', time: '09:15 AM', notes: 'Emergency repair request booked.', completed: true },
      { step: 'Equipment Details Verified', date: '20 Aug 2026', time: '10:00 AM', notes: 'Model 525DS confirmed.', completed: true },
      { step: 'Technician Assigned', date: '21 Aug 2026', time: '03:00 PM', notes: 'Assigned to Vikas Srivastava for Chinhat/Gomti Nagar zone.', completed: true },
      { step: 'Equipment Received / Visit Scheduled', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Diagnosis in Progress', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Estimate Prepared', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Customer Approval Pending', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Repair / Service in Progress', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Testing & Quality Check', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Ready for Delivery / Visit Completed', date: 'Pending', time: '', notes: '', completed: false },
      { step: 'Service Completed', date: 'Pending', time: '', notes: '', completed: false }
    ]
  }
];

const STORAGE_KEY = 'oxygen_services_tickets_v1';

export function getStoredTickets(): ServiceTicket[] {
  if (typeof window === 'undefined') {
    return INITIAL_DEMO_TICKETS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_TICKETS));
      return INITIAL_DEMO_TICKETS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_DEMO_TICKETS;
  }
}

export function saveTickets(tickets: ServiceTicket[]) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
    } catch {
      // ignore
    }
  }
}

export function findTicket(serviceId: string, mobileOrPhone?: string): ServiceTicket | null {
  const cleanId = serviceId.trim().toUpperCase();
  const cleanPhone = mobileOrPhone ? mobileOrPhone.replace(/\D/g, '').slice(-10) : '';
  const tickets = getStoredTickets();

  const found = tickets.find((t) => {
    const matchId = t.serviceId.toUpperCase() === cleanId;
    if (!cleanPhone) return matchId;
    const tPhone = t.mobileNumber.replace(/\D/g, '').slice(-10);
    const tWhatsApp = t.whatsappNumber.replace(/\D/g, '').slice(-10);
    return matchId && (tPhone.includes(cleanPhone) || tWhatsApp.includes(cleanPhone));
  });

  return found || null;
}

export function createServiceTicket(
  data: Omit<ServiceTicket, 'serviceId' | 'createdAt' | 'updatedAt' | 'currentStepIndex' | 'status' | 'timeline'>
): ServiceTicket {
  const tickets = getStoredTickets();
  const nextNum = 120 + tickets.length;
  const serviceId = `OS-2026-${String(nextNum).padStart(6, '0')}`;
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const timeline: StatusTimelineEntry[] = ALL_STEPS.map((step, idx) => ({
    step,
    date: idx === 0 ? dateStr : 'Pending',
    time: idx === 0 ? timeStr : '',
    notes: idx === 0 ? `Service request registered for ${data.brand} ${data.modelNumber || data.equipmentType}.` : '',
    completed: idx === 0
  }));

  const newTicket: ServiceTicket = {
    ...data,
    serviceId,
    createdAt: `${dateStr} ${timeStr}`,
    updatedAt: `${dateStr} ${timeStr}`,
    currentStepIndex: 0,
    status: 'Request Received',
    timeline
  };

  const updated = [newTicket, ...tickets];
  saveTickets(updated);

  addActivityLog({
    type: 'ticket_created',
    title: `New Ticket Created (${serviceId})`,
    description: `Service booked for ${data.customerName} (${data.brand} ${data.modelNumber || data.equipmentType}) in ${data.city}.`,
    serviceId,
    customerName: data.customerName,
    actor: 'Customer / Desk',
    branch: data.city
  });

  return newTicket;
}

export function updateTicketStatus(
  serviceId: string,
  newStepIndex: number,
  notes?: string
): ServiceTicket | null {
  const tickets = getStoredTickets();
  const index = tickets.findIndex((t) => t.serviceId.toUpperCase() === serviceId.toUpperCase());
  if (index === -1) return null;

  const ticket = { ...tickets[index] };
  const prevStatus = ticket.status;
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  ticket.currentStepIndex = newStepIndex;
  ticket.status = ALL_STEPS[newStepIndex];
  ticket.updatedAt = `${dateStr} ${timeStr}`;

  ticket.timeline = ticket.timeline.map((entry, idx) => {
    if (idx <= newStepIndex) {
      return {
        ...entry,
        completed: true,
        date: entry.date === 'Pending' ? dateStr : entry.date,
        time: entry.time === '' ? timeStr : entry.time,
        notes: idx === newStepIndex && notes ? notes : (entry.notes || 'Stage updated.')
      };
    } else {
      return {
        ...entry,
        completed: false,
        date: 'Pending',
        time: '',
        notes: ''
      };
    }
  });

  tickets[index] = ticket;
  saveTickets(tickets);

  addActivityLog({
    type: 'status_change',
    title: `Stage ${newStepIndex + 1}: ${ticket.status}`,
    description: `${ticket.brand} ${ticket.modelNumber} (${ticket.serviceId}) updated. ${notes ? `Note: "${notes}"` : ''}`,
    serviceId: ticket.serviceId,
    customerName: ticket.customerName,
    actor: ticket.assignedTechnician?.name ? `Admin (${ticket.assignedTechnician.name.split(' ')[0]})` : 'Admin',
    branch: ticket.city,
    details: {
      fromStep: prevStatus,
      toStep: ticket.status
    }
  });

  return ticket;
}

export function approveTicketEstimate(serviceId: string): ServiceTicket | null {
  const tickets = getStoredTickets();
  const index = tickets.findIndex((t) => t.serviceId.toUpperCase() === serviceId.toUpperCase());
  if (index === -1) return null;

  const ticket = { ...tickets[index] };
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  if (ticket.estimate) {
    ticket.estimate.approvalStatus = 'Approved';
    ticket.estimate.approvedAt = `${dateStr} ${timeStr}`;
  }

  // If in customer approval pending, advance to repair in progress
  if (ticket.currentStepIndex <= 6) {
    ticket.currentStepIndex = 7;
    ticket.status = 'Repair / Service in Progress';
    ticket.timeline[6].completed = true;
    ticket.timeline[6].date = dateStr;
    ticket.timeline[6].time = timeStr;
    ticket.timeline[6].notes = 'Customer approved estimate online.';
    ticket.timeline[7].completed = true;
    ticket.timeline[7].date = dateStr;
    ticket.timeline[7].time = timeStr;
    ticket.timeline[7].notes = 'Components allocated. Service work commenced.';
  }

  ticket.updatedAt = `${dateStr} ${timeStr}`;
  tickets[index] = ticket;
  saveTickets(tickets);

  addActivityLog({
    type: 'estimate_approved',
    title: `Estimate Approved: ₹${ticket.estimate?.totalAmount.toLocaleString('en-IN') || '0'}`,
    description: `Customer ${ticket.customerName} approved service estimate for ${ticket.serviceId}. Advanced to repair stage.`,
    serviceId: ticket.serviceId,
    customerName: ticket.customerName,
    actor: 'Customer (Online)',
    branch: ticket.city,
    details: {
      amount: ticket.estimate?.totalAmount
    }
  });

  return ticket;
}

export function recordTicketPayment(
  serviceId: string,
  amount: number,
  paymentMethod = 'Online Checkout (Simulated)'
): ServiceTicket | null {
  const tickets = getStoredTickets();
  const index = tickets.findIndex((t) => t.serviceId.toUpperCase() === serviceId.toUpperCase());
  if (index === -1) return null;

  const ticket = { ...tickets[index] };
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const randomTxn = `TXN-RZP-${now.getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

  ticket.payment = {
    status: 'Paid',
    amountPaid: amount,
    paymentMethod,
    transactionId: randomTxn,
    paidAt: `${dateStr} ${timeStr}`
  };
  ticket.updatedAt = `${dateStr} ${timeStr}`;

  tickets[index] = ticket;
  saveTickets(tickets);

  addActivityLog({
    type: 'payment_recorded',
    title: `Payment Received: ₹${amount.toLocaleString('en-IN')}`,
    description: `Payment recorded via ${paymentMethod} (Txn ID: ${randomTxn}) for ${ticket.serviceId}.`,
    serviceId: ticket.serviceId,
    customerName: ticket.customerName,
    actor: 'Payment Gateway',
    branch: ticket.city,
    details: {
      amount
    }
  });

  return ticket;
}

export function updateTicketDiagnosticData(
  serviceId: string,
  diagnosticUpdate: Partial<NonNullable<ServiceTicket['diagnosticData']>>
): ServiceTicket | null {
  const tickets = getStoredTickets();
  const index = tickets.findIndex((t) => t.serviceId.toUpperCase() === serviceId.toUpperCase());
  if (index === -1) return null;

  const ticket = { ...tickets[index] };
  ticket.diagnosticData = {
    ...(ticket.diagnosticData || {}),
    ...diagnosticUpdate
  };
  const now = new Date();
  ticket.updatedAt = `${now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} ${now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`;

  tickets[index] = ticket;
  saveTickets(tickets);

  const purityVal = diagnosticUpdate.finalPurityPercent || diagnosticUpdate.initialPurityPercent;
  addActivityLog({
    type: 'diagnostic_update',
    title: `Diagnostics Updated for ${ticket.serviceId}`,
    description: `${ticket.brand} ${ticket.modelNumber}: ${purityVal ? `Purity ${purityVal}% O₂` : ''} ${diagnosticUpdate.operatingPressurePsig ? `Pressure: ${diagnosticUpdate.operatingPressurePsig} PSIG.` : ''} ${diagnosticUpdate.technicianNotes ? `"${diagnosticUpdate.technicianNotes.slice(0, 70)}..."` : ''}`.trim(),
    serviceId: ticket.serviceId,
    customerName: ticket.customerName,
    actor: 'Admin (Biomedical Tech)',
    branch: ticket.city,
    details: {
      purity: purityVal
    }
  });

  return ticket;
}
