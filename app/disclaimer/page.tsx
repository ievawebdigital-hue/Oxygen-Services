import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, AlertTriangle, ArrowLeft, Phone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export const metadata: Metadata = {
  title: 'Medical Safety Disclaimer & Emergency Notice | Oxygen Services',
  description: 'Important biomedical equipment safety disclaimer, non-emergency service guidelines, and clinical backup advisories for Oxygen Services.',
  keywords: ['medical equipment disclaimer', 'oxygen concentrator safety notice']
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Critical Safety Information
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F33]">
                  Medical Disclaimer & Equipment Notice
                </h1>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="p-6 bg-red-50 border-2 border-red-300 rounded-2xl space-y-2 text-red-950 text-xs sm:text-sm">
              <p className="font-extrabold text-red-700 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                Emergency Medical Notice:
              </p>
              <p className="leading-relaxed">
                Oxygen Services provides technical maintenance, diagnostic benchmarking, and component repair for medical oxygen hardware. We are an equipment engineering service provider and do <strong>NOT</strong> provide emergency healthcare, medical diagnosis, clinical prescriptions, or emergency oxygen supply.
              </p>
              <p className="font-bold text-red-900 pt-1">
                If a patient experiences severe acute hypoxemia, respiratory distress, or sudden equipment failure, please immediately switch to an emergency backup medical oxygen cylinder or contact local emergency ambulance services (108 / 112) without delay.
              </p>
            </div>

            {/* Technical Sections */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">
                  1. Clinical Prescription & Flow Rate Setting
                </h2>
                <p>
                  Oxygen is a regulated therapeutic drug. Flow rates (LPM) and delivery titration must strictly adhere to instructions provided by the patient&apos;s consulting pulmonologist or medical practitioner. Our technicians test hardware to ensure physical flow delivery and ultrasonic purity conform to manufacturer specifications, but do not prescribe flow settings.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">
                  2. Secondary Backup Requirement
                </h2>
                <p>
                  All patients dependent on supplemental medical oxygen therapy must maintain a secondary, fully charged backup oxygen cylinder and regulator at home or facility. Electromechanical equipment may stop operating due to power grid outages, compressor thermal overload, or valve fatigue.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">
                  3. Independent Service Provider Status
                </h2>
                <p>
                  Oxygen Services is a vendor-independent biomedical technical service organization. All third-party trademarks, brand names, and model references (including Philips Respironics, DeVilbiss, Inogen, Nidek, BMC, Oxymed, Evox, Yuwell, Invacare, AirSep) are the properties of their respective trademark holders and are utilized strictly for equipment identification and compatibility purposes.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-bold text-slate-900">
                  4. Post-Service Calibration & Purity Certificate
                </h2>
                <p>
                  Every serviced unit undergoes bench calibration using ultrasonic oxygen purity sensors before discharge. Purity readings reflect test conditions at the time of release. Regular user maintenance (such as weekly gross cabinet filter washing) is essential to preserve sieve bed longevity and prevent premature particulate saturation.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link href="/" className="inline-flex items-center gap-1 text-xs font-bold text-[#1677FF] hover:underline">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Home</span>
              </Link>

              <Link href="/request-service" className="bg-[#1677FF] hover:bg-[#0958D9] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow transition">
                Book Technical Service
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
