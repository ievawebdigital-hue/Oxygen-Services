'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Wrench,
  Package,
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data/branches';

export default function QuickEstimatorSection() {
  const [bookingMode, setBookingMode] = useState<'repair' | 'rent'>('repair');
  const [repairBrand, setRepairBrand] = useState('Philips Respironics');
  const [repairIssue, setRepairIssue] = useState('Low Purity Alarm (<85%)');
  const [repairCity, setRepairCity] = useState('Mumbai');

  const [rentType, setRentType] = useState('5L Stationary Concentrator');
  const [rentDuration, setRentDuration] = useState('1 Month');
  const [rentCity, setRentCity] = useState('Mumbai');

  const getEstimatedRentPrice = () => {
    if (rentType.includes('5L')) {
      if (rentDuration === '7 Days') return '₹1,800';
      if (rentDuration === '15 Days') return '₹2,500';
      return '₹3,500 / month';
    } else if (rentType.includes('10L')) {
      if (rentDuration === '7 Days') return '₹3,200';
      if (rentDuration === '15 Days') return '₹4,500';
      return '₹6,500 / month';
    } else {
      if (rentDuration === '7 Days') return '₹4,500';
      if (rentDuration === '15 Days') return '₹6,500';
      return '₹8,500 / month';
    }
  };

  return (
    <section className="relative z-30 -mt-8 sm:-mt-10 max-w-5xl mx-auto px-4 sm:px-6 mb-12">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200/90">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
              Quick Doorstep Service & Booking
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Instant Service Cost & Machine Availability
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setBookingMode('repair')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                bookingMode === 'repair'
                  ? 'bg-[#0284c7] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id="quick-tab-repair"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Repair</span>
            </button>
            <button
              type="button"
              onClick={() => setBookingMode('rent')}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                bookingMode === 'rent'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              id="quick-tab-rent"
            >
              <Package className="w-4 h-4" />
              <span>Rent Machine</span>
            </button>
          </div>
        </div>

        {/* Repair Form Row */}
        {bookingMode === 'repair' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Machine Brand
              </label>
              <select
                value={repairBrand}
                onChange={(e) => setRepairBrand(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Philips Respironics">Philips (EverFlo / SimplyGo)</option>
                <option value="DeVilbiss Healthcare">DeVilbiss (525DS / 1025DS)</option>
                <option value="Inogen (POC)">Inogen (One G3 / G4 / G5)</option>
                <option value="Yuwell">Yuwell (8F-5AW / 7F-10W)</option>
                <option value="Evox / BMC / OxyMed">Evox / BMC / OxyMed</option>
                <option value="Other Brand">Other Brand</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Symptom / Issue
              </label>
              <select
                value={repairIssue}
                onChange={(e) => setRepairIssue(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Low Purity Alarm (<85%)">Low Purity Alarm (&lt;85%)</option>
                <option value="Sieve Bed Repour Needed">Sieve Bed Repour Needed</option>
                <option value="Compressor Noise / Heat">Compressor Noise / Heat</option>
                <option value="Machine Not Starting">Machine Not Starting / PCB</option>
                <option value="General Preventive Service">General Preventive Service</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Service Hub / City
              </label>
              <select
                value={repairCity}
                onChange={(e) => setRepairCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Mumbai">Mumbai (MMR Region)</option>
                <option value="Pune">Pune (PCMC Region)</option>
                <option value="Lucknow">Lucknow (Awadh Region)</option>
                <option value="Other">Pan-India (By Courier)</option>
              </select>
            </div>

            <div>
              <Link
                href={`/request-service?mode=repair&brand=${encodeURIComponent(repairBrand)}&issue=${encodeURIComponent(repairIssue)}&city=${encodeURIComponent(repairCity)}`}
                className="w-full bg-[#0284c7] hover:bg-[#0369a1] text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center shadow-md transition flex items-center justify-center gap-2"
                id="quick-submit-repair"
              >
                <span>Book Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Rent Form Row */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-end">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Concentrator Capacity
              </label>
              <select
                value={rentType}
                onChange={(e) => setRentType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="5L Stationary Concentrator">5L Stationary (Philips/DeVilbiss)</option>
                <option value="10L High Flow Concentrator">10L High Flow Machine</option>
                <option value="Portable (POC) Battery Machine">Portable Battery Unit (POC)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Duration & Rate
              </label>
              <select
                value={rentDuration}
                onChange={(e) => setRentDuration(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="7 Days">7 Days (Short Term)</option>
                <option value="15 Days">15 Days (Bi-Weekly)</option>
                <option value="1 Month">1 Month (Best Value)</option>
                <option value="Long Term">Long Term</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">
                Delivery City
              </label>
              <select
                value={rentCity}
                onChange={(e) => setRentCity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Lucknow">Lucknow</option>
              </select>
            </div>

            <div>
              <Link
                href={`/request-service?mode=rent&equipment=${encodeURIComponent(rentType)}&duration=${encodeURIComponent(rentDuration)}&city=${encodeURIComponent(rentCity)}`}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center shadow-md transition flex items-center justify-center gap-2"
                id="quick-submit-rent"
              >
                <span>Rent: {getEstimatedRentPrice()}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Reassurance Bar */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>95%±3% Purity Calibration</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Same-Day Home Delivery</span>
            </span>
          </div>

          <a
            href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
            className="text-slate-800 font-bold hover:text-sky-600 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Need Help? Call 9820370015</span>
          </a>
        </div>
      </div>
    </section>
  );
}
