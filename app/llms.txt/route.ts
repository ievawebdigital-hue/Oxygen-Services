import { NextResponse } from 'next/server';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import { SERVICES } from '@/lib/data/services';

export async function GET() {
  const content = `# Oxy Breath Services — Technical Service & Repair for Medical Oxygen Equipment

## Overview
Oxy Breath Services is a specialist, vendor-independent medical oxygen equipment service and repair provider in India. The company diagnoses, services, repacks, and overhauls stationary oxygen machines, oxygen concentrators, and portable oxygen concentrators (POCs).

## Core Capabilities
- Calibrated Ultrasonic Oxygen Purity (% O2) Testing & Bench Diagnostics
- Pressure Swing Adsorption (PSA) Dual Molecular Sieve Bed Repacking & Replacement
- Oil-free Wobble Piston Compressor Overhauls & Piston Cup Replacement
- 4-Way Solenoid Pilot Cycle Valve Servicing & Pressure Calibration
- Multi-Stage HEPA, Felt, and Bacteria Filtration Servicing
- Portable Oxygen Concentrator (POC) Sieve Column Cartridge Replacement & Pulse-Dose Sensor Tuning

## Physical Branch Locations (India)
1. Mumbai Head Office:
   Shop No. 11 Park, Gokul Village, Mira Road East, Mira Bhayandar, Maharashtra 401107
   Phone: +91 9820370015 / +91 9819459421
   WhatsApp: +91 9820370015

2. Pune Branch:
   Ganesh Complex, 445, New Mangalwar Peth, 15 August Chowk, Pune - 411011
   Phone: +91 9820370015 / +91 9819459421
   WhatsApp: +91 9820370015

3. Lucknow Branch:
   Tiwari Ganj, Plot No: B-4, opposite Prime Rose Villa, Chinhat, Uttardhauna, Lucknow, Uttar Pradesh 226028
   Phone: +91 9820370015 / +91 9819459421
   WhatsApp: +91 9820370015

## Service Tracking & Customer Workflow
1. Request Submitted (Online, Phone, or WhatsApp) -> Unique Service ID generated (e.g. OBS-2026-000123)
2. Diagnostic Assessment on calibrated test benches
3. Itemized estimate presented to customer for approval
4. Component repair & repacking
5. 24-hour continuous runtime purity burn-in test
6. Ready for dispatch / delivery with technical service report

## Medical Disclaimer
Oxy Breath Services repairs and services medical equipment; it does not diagnose or treat patients. Always maintain backup oxygen cylinders during equipment service.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}
