'use client';

import React, { useState } from 'react';
import {
  Wrench,
  Package,
  CheckCircle2,
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
  Send,
  Sparkles,
  ShieldCheck,
  Clock,
  Check,
  RotateCcw
} from 'lucide-react';
import { createServiceTicket, ServiceTicket } from '@/lib/serviceStore';
import { COMPANY_CONTACT } from '@/lib/data/branches';

interface Props {
  defaultCity?: 'Mumbai' | 'Pune' | 'Lucknow';
}

export default function ServiceRentalEnquiryForm({ defaultCity = 'Mumbai' }: Props) {
  const [enquiryType, setEnquiryType] = useState<'repair' | 'rent'>('repair');

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    whatsappNumber: '',
    city: defaultCity,
    equipmentType: 'Oxygen Concentrator (5 LPM Stationary)',
    brandModel: '',
    problemOrRequirement: '',
    rentalDuration: '1 Month',
    preferredDate: '',
    fulfillmentType: 'Doorstep Pickup / Delivery' as 'Doorstep Pickup / Delivery' | 'Self Visit to Service Center',
    address: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<ServiceTicket | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const cityBranchMap: Record<'Mumbai' | 'Pune' | 'Lucknow', 'mumbai' | 'pune' | 'lucknow'> = {
    Mumbai: 'mumbai',
    Pune: 'pune',
    Lucknow: 'lucknow'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const summaryText = enquiryType === 'rent'
        ? `Rental Enquiry: ${formData.equipmentType} for ${formData.rentalDuration}. Requirement: ${formData.problemOrRequirement || 'Standard Rental'}`
        : `Service Enquiry: ${formData.equipmentType} (${formData.brandModel || 'General'}). Issue: ${formData.problemOrRequirement || 'Inspection & Repair'}`;

      const newTicket = createServiceTicket({
        customerName: formData.fullName,
        mobileNumber: formData.mobileNumber,
        whatsappNumber: formData.whatsappNumber || formData.mobileNumber,
        email: '',
        city: formData.city,
        branchId: cityBranchMap[formData.city],
        equipmentType: formData.equipmentType.includes('Portable')
          ? 'Portable Oxygen Concentrator'
          : formData.equipmentType.includes('10 LPM')
          ? 'Oxygen Machine'
          : 'Oxygen Concentrator',
        brand: formData.brandModel || 'Generic / Other',
        modelNumber: '',
        problemSummary: summaryText,
        serviceType: 'Bench Diagnostic',
        preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
        fulfillmentType: formData.fulfillmentType === 'Doorstep Pickup / Delivery' ? 'Doorstep Pickup' : 'Branch Drop-off',
        address: formData.address || `${formData.city} Area`,
        additionalMessage: formData.notes
      });

      setSubmittedTicket(newTicket);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit enquiry. Please try again or call our direct helpline.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFormData({
      fullName: '',
      mobileNumber: '',
      whatsappNumber: '',
      city: defaultCity,
      equipmentType: 'Oxygen Concentrator (5 LPM Stationary)',
      brandModel: '',
      problemOrRequirement: '',
      rentalDuration: '1 Month',
      preferredDate: '',
      fulfillmentType: 'Doorstep Pickup / Delivery',
      address: '',
      notes: ''
    });
  };

  if (submittedTicket) {
    return (
      <div className="bg-white rounded-3xl border border-emerald-200 shadow-xl p-8 sm:p-12 text-center max-w-2xl mx-auto animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider mb-2 border border-emerald-200">
          Enquiry Successfully Submitted
        </span>

        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
          Thank You, {submittedTicket.customerName}!
        </h2>

        <p className="text-slate-600 text-sm mt-2 max-w-lg mx-auto">
          Your {enquiryType === 'rent' ? 'rental requirement' : 'service request'} has been assigned to our{' '}
          <strong className="text-slate-900">{submittedTicket.city} Branch Technical Team</strong>. A biomedical coordinator will contact you shortly.
        </p>

        <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tracking Reference ID</p>
            <p className="text-xl font-black text-sky-700 font-mono">#{submittedTicket.serviceId}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Assigned Hub</p>
            <p className="text-sm font-black text-slate-800">Oxy Breath Services ({submittedTicket.city})</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition"
          >
            <Phone className="w-4 h-4 text-sky-400" />
            <span>Call Helpline Now</span>
          </a>

          <a
            href={`${COMPANY_CONTACT.whatsappUrl}?text=${encodeURIComponent(
              `Hello Oxy Breath Services, I submitted an enquiry for ${enquiryType === 'rent' ? 'Equipment Rental' : 'Equipment Repair'} (Ticket ID: ${submittedTicket.serviceId}). Please assist.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-bold transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Form Mode Selector */}
      <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50">
        <button
          type="button"
          onClick={() => setEnquiryType('repair')}
          className={`py-4 px-6 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition border-b-2 ${
            enquiryType === 'repair'
              ? 'border-sky-600 bg-white text-sky-700 shadow-xs'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
          id="enquiry-tab-repair"
        >
          <Wrench className={`w-5 h-5 ${enquiryType === 'repair' ? 'text-sky-600' : 'text-slate-400'}`} />
          <span>Oxygen Concentrator Service & Repair</span>
        </button>

        <button
          type="button"
          onClick={() => setEnquiryType('rent')}
          className={`py-4 px-6 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition border-b-2 ${
            enquiryType === 'rent'
              ? 'border-emerald-600 bg-white text-emerald-700 shadow-xs'
              : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
          id="enquiry-tab-rental"
        >
          <Package className={`w-5 h-5 ${enquiryType === 'rent' ? 'text-emerald-600' : 'text-slate-400'}`} />
          <span>Oxygen Equipment Rental Enquiry</span>
        </button>
      </div>

      <div className="p-6 sm:p-10">
        {/* Value badge banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-sky-50/70 border border-sky-100 mb-8">
          <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
            <span>
              <strong>{enquiryType === 'repair' ? 'Service Priority' : 'Rental Fleet'}</strong>:{' '}
              {enquiryType === 'repair'
                ? 'Certified 93%+ purity calibration, genuine molecular sieve & compressor rebuilds.'
                : 'Medical grade sterilized 5L, 10L, and portable POCs available with doorstep installation.'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-600">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              Certified Engineers
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              Prompt Turnaround
            </span>
          </div>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
            <span>⚠️ {errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: City Selection & Service Type */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                Select Your City / Hub <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value as any })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                  required
                >
                  <option value="Mumbai">Mumbai (Head Office / Hub)</option>
                  <option value="Pune">Pune (Branch Hub)</option>
                  <option value="Lucknow">Lucknow (Branch Hub)</option>
                </select>
                <MapPin className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                Equipment Category <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.equipmentType}
                onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                required
              >
                <option value="Oxygen Concentrator (5 LPM Stationary)">Stationary Oxygen Concentrator (5 LPM - Philips, Yuwell, Evox, DeVilbiss)</option>
                <option value="Oxygen Concentrator (10 LPM High Flow)">High Flow Oxygen Concentrator (10 LPM - Nidek, AirSep, Yuwell)</option>
                <option value="Portable Oxygen Concentrator (POC)">Portable Oxygen Concentrator POC (Inogen, SimplyGo, Kingon, Oxymed)</option>
                <option value="BiPAP / CPAP Machine">BiPAP / CPAP Machine & Humidifier</option>
                <option value="Other Medical Oxygen Device">Other Medical Respiratory Equipment</option>
              </select>
            </div>
          </div>

          {/* Row 2: Customer Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rajesh Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                Mobile Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  maxLength={10}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                  required
                />
                <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Conditional Fields based on Repair vs Rent */}
          {enquiryType === 'repair' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                  Brand & Model Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Philips EverFlo, DeVilbiss 525, Yuwell 8F-5AW"
                  value={formData.brandModel}
                  onChange={(e) => setFormData({ ...formData, brandModel: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                  Reported Issue / Fault Description
                </label>
                <input
                  type="text"
                  placeholder="e.g. Low O2 alarm beeping, no flow, compressor noise, sieve service"
                  value={formData.problemOrRequirement}
                  onChange={(e) => setFormData({ ...formData, problemOrRequirement: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                  Expected Rental Duration <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.rentalDuration}
                  onChange={(e) => setFormData({ ...formData, rentalDuration: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                  required
                >
                  <option value="15 Days (Short Term)">15 Days (Short Term)</option>
                  <option value="1 Month (Standard)">1 Month (Standard)</option>
                  <option value="2-3 Months (Medium Term)">2-3 Months (Medium Term)</option>
                  <option value="6+ Months (Long Term)">6+ Months (Long Term)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                  Patient Requirement / Flow Setting
                </label>
                <input
                  type="text"
                  placeholder="e.g. Required 2-4 LPM continuous flow or battery travel POC"
                  value={formData.problemOrRequirement}
                  onChange={(e) => setFormData({ ...formData, problemOrRequirement: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                />
              </div>
            </div>
          )}

          {/* Row 4: Fulfillment Mode & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                Service Fulfillment Mode <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fulfillmentType: 'Doorstep Pickup / Delivery' })}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    formData.fulfillmentType === 'Doorstep Pickup / Delivery'
                      ? 'bg-sky-50 border-sky-600 text-sky-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Check className={`w-3.5 h-3.5 ${formData.fulfillmentType === 'Doorstep Pickup / Delivery' ? 'opacity-100' : 'opacity-0'}`} />
                  <span>Doorstep Pickup / Delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fulfillmentType: 'Self Visit to Service Center' })}
                  className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    formData.fulfillmentType === 'Self Visit to Service Center'
                      ? 'bg-sky-50 border-sky-600 text-sky-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Check className={`w-3.5 h-3.5 ${formData.fulfillmentType === 'Self Visit to Service Center' ? 'opacity-100' : 'opacity-0'}`} />
                  <span>Drop at Service Center</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
                Preferred Date / Urgency
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
                />
                <Calendar className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 5: Address / Area Location */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-700 mb-1.5">
              Pickup / Delivery Address & Landmark
            </label>
            <input
              type="text"
              placeholder="e.g. Flat 302, Green Meadows, near Metro Station, Borivali / Kothrud / Gomti Nagar"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition outline-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-500 flex-shrink-0" />
              <span>Direct technical coordinator assignment across Mumbai, Pune & Lucknow.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm text-white shadow-lg transition flex items-center justify-center gap-2 ${
                enquiryType === 'repair'
                  ? 'bg-[#0284c7] hover:bg-[#0369a1] shadow-sky-500/25'
                  : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/25'
              } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
              id="submit-enquiry-btn"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Enquiry...' : `Submit ${enquiryType === 'repair' ? 'Service' : 'Rental'} Enquiry`}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
