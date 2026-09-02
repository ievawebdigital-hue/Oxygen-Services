'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  Wrench,
  Package,
  CheckCircle2,
  AlertTriangle,
  Upload,
  Phone,
  MessageSquare,
  Home,
  MapPin,
  Calendar,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  FileText,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { createServiceTicket, ServiceTicket } from '@/lib/serviceStore';
import { addActivityLog } from '@/lib/activityStore';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import { COMMON_PROBLEMS } from '@/lib/data/problems';
import { RENTAL_EQUIPMENT } from '@/lib/data/rentals';

function ServiceRequestForm() {
  const searchParams = useSearchParams();
  const initialMode = (searchParams.get('mode') === 'rent' ? 'rent' : 'repair') as 'repair' | 'rent';
  const prefilledBrand = searchParams.get('brand') || '';
  const prefilledEquipment = searchParams.get('equipment') || '';
  const prefilledProblem = searchParams.get('issue') || searchParams.get('problem') || '';
  const prefilledCity = (searchParams.get('city') as any) || 'Mumbai';

  const [bookingMode, setBookingMode] = useState<'repair' | 'rent'>(initialMode);

  // Form State
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    city: (['Mumbai', 'Pune', 'Lucknow'].includes(prefilledCity) ? prefilledCity : 'Mumbai') as 'Mumbai' | 'Pune' | 'Lucknow',
    branchId: (prefilledCity.toLowerCase() === 'pune' ? 'pune' : prefilledCity.toLowerCase() === 'lucknow' ? 'lucknow' : 'mumbai') as 'mumbai' | 'pune' | 'lucknow',
    equipmentType: (prefilledEquipment.includes('Portable')
      ? 'Portable Oxygen Concentrator'
      : prefilledEquipment.includes('10L')
      ? 'Oxygen Machine'
      : 'Oxygen Concentrator') as ServiceTicket['equipmentType'],
    brand: prefilledBrand || '',
    modelNumber: '',
    problemSummary: prefilledProblem,
    rentalDuration: '1 Month',
    rentalEquipment: prefilledEquipment || '5L Stationary Concentrator (Philips EverFlo)',
    serviceType: 'Bench Diagnostic' as ServiceTicket['serviceType'],
    preferredDate: '',
    fulfillmentType: 'Doorstep Pickup' as ServiceTicket['fulfillmentType'],
    address: '',
    photoUrl: '',
    additionalMessage: ''
  });

  const [selectedProblems, setSelectedProblems] = useState<string[]>(
    prefilledProblem ? [prefilledProblem] : []
  );

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [createdTicket, setCreatedTicket] = useState<ServiceTicket | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync city & branch
  const handleCityChange = (city: 'Mumbai' | 'Pune' | 'Lucknow') => {
    const branchMap = { Mumbai: 'mumbai', Pune: 'pune', Lucknow: 'lucknow' } as const;
    setFormData((prev) => ({
      ...prev,
      city,
      branchId: branchMap[city]
    }));
  };

  const toggleProblemSelection = (title: string) => {
    setSelectedProblems((prev) => {
      const exists = prev.includes(title);
      const next = exists ? prev.filter((p) => p !== title) : [...prev, title];
      setFormData((f) => ({
        ...f,
        problemSummary: next.join(', ')
      }));
      return next;
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Image size must be less than 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPhotoPreview(result);
        setFormData((prev) => ({ ...prev, photoUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (bookingMode === 'repair' && !formData.problemSummary.trim()) {
      setErrorMsg('Please select or specify the equipment problem.');
      return;
    }

    setIsSubmitting(true);
    try {
      const summaryText = bookingMode === 'rent'
        ? `[RENTAL RESERVATION] Machine: ${formData.rentalEquipment} | Duration: ${formData.rentalDuration} | City: ${formData.city}`
        : formData.problemSummary;

      const brandText = bookingMode === 'rent' ? 'Rental Fleet Unit' : (formData.brand || 'Oxygen Equipment');
      const modelText = bookingMode === 'rent' ? formData.rentalEquipment : (formData.modelNumber || 'Standard Unit');

      const ticket = createServiceTicket({
        customerName: formData.customerName,
        mobileNumber: formData.mobileNumber,
        whatsappNumber: formData.whatsappNumber || formData.mobileNumber,
        email: formData.email || '',
        city: formData.city,
        branchId: formData.branchId,
        equipmentType: formData.equipmentType,
        brand: brandText,
        modelNumber: modelText,
        problemSummary: summaryText,
        serviceType: bookingMode === 'rent' ? 'Preventive Maintenance' : formData.serviceType,
        preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
        fulfillmentType: formData.fulfillmentType,
        address: formData.address || '',
        photoUrl: formData.photoUrl || undefined,
        additionalMessage: formData.additionalMessage || ''
      });

      // Log activity
      addActivityLog({
        type: 'ticket_created',
        title: bookingMode === 'rent' ? 'New Machine Rental Reservation' : 'New Repair Ticket Registered',
        description: `Registered for ${ticket.customerName} in ${ticket.city} (${ticket.equipmentType})`,
        serviceId: ticket.serviceId,
        customerName: ticket.customerName,
        actor: 'Customer Booking Portal',
        branch: ticket.city
      });

      setCreatedTicket(ticket);

      // Build formatted WhatsApp message with all form fields
      const waLines = [
        `*NEW ${bookingMode === 'rent' ? 'EQUIPMENT RENTAL RESERVATION' : 'DOORSTEP SERVICE & REPAIR BOOKING'}*`,
        `*Ticket ID:* #${ticket.serviceId}`,
        ``,
        `*Customer Details:*`,
        `• *Name:* ${formData.customerName}`,
        `• *Mobile:* ${formData.mobileNumber}`,
        formData.whatsappNumber ? `• *WhatsApp:* ${formData.whatsappNumber}` : null,
        formData.email ? `• *Email:* ${formData.email}` : null,
        `• *City / Branch Hub:* ${formData.city}`,
        ``,
        `*Equipment & Service Details:*`,
        `• *Equipment Category:* ${formData.equipmentType}`,
        formData.brand ? `• *Brand:* ${formData.brand}` : null,
        formData.modelNumber ? `• *Model / Unit:* ${formData.modelNumber}` : null,
        bookingMode === 'rent' ? `• *Rental Machine:* ${formData.rentalEquipment}` : null,
        bookingMode === 'rent' ? `• *Rental Duration:* ${formData.rentalDuration}` : null,
        `• *Problem / Requirements:* ${summaryText}`,
        `• *Service Option:* ${bookingMode === 'rent' ? 'Sanitized Rental Fleet Dispatch' : formData.serviceType}`,
        `• *Fulfillment Mode:* ${formData.fulfillmentType}`,
        formData.preferredDate ? `• *Preferred Date:* ${formData.preferredDate}` : null,
        formData.address ? `• *Address / Landmark:* ${formData.address}` : null,
        formData.additionalMessage ? `• *Special Instructions:* ${formData.additionalMessage}` : null
      ].filter(Boolean).join('\n');

      const waUrl = `https://wa.me/91${COMPANY_CONTACT.whatsapp}?text=${encodeURIComponent(waLines)}`;

      // Auto open WhatsApp with all form data
      if (typeof window !== 'undefined') {
        window.open(waUrl, '_blank');
      }
    } catch (err) {
      setErrorMsg('Failed to register request. Please call 9820370015 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const popularBrands = [
    'Philips Respironics',
    'DeVilbiss Healthcare',
    'Inogen One',
    'Yuwell',
    'Evox',
    'BMC Medical',
    'Oxymed',
    'Nidek Medical',
    'Invacare',
    'AirSep',
    'Other / Unlisted'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-grow py-10 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              {bookingMode === 'repair' ? 'Biomedical Workshop Service' : 'Sanitized Machine Rental Dispatch'}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
              {bookingMode === 'repair' ? 'Book Oxygen Concentrator Repair' : 'Reserve an Oxygen Machine on Rent'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Fast doorstep service across Mumbai, Pune, and Lucknow. You will receive an instant Service Ticket ID.
            </p>
          </div>

          {/* Mode Switcher Banner */}
          {!createdTicket && (
            <div className="flex items-center p-1 bg-slate-200/80 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => setBookingMode('repair')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                  bookingMode === 'repair'
                    ? 'bg-[#0284c7] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                id="btn-mode-repair"
              >
                <Wrench className="w-4 h-4" />
                <span>🛠️ Repair My Machine</span>
              </button>

              <button
                type="button"
                onClick={() => setBookingMode('rent')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                  bookingMode === 'rent'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
                id="btn-mode-rent"
              >
                <Package className="w-4 h-4" />
                <span>📦 Rent a Machine</span>
              </button>
            </div>
          )}

          {/* Success Screen if Created */}
          {createdTicket ? (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-2.5">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {bookingMode === 'rent' ? 'Rental Request Received' : 'Repair Request Received'}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Ticket ID: <span className="text-sky-600 font-mono">{createdTicket.serviceId}</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Registered for <strong>{createdTicket.customerName}</strong> in <strong>{createdTicket.city}</strong>.
                </p>
              </div>

              {/* Ticket Details Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-400 font-medium">Service ID:</span>
                    <p className="font-bold font-mono text-slate-900">{createdTicket.serviceId}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Customer:</span>
                    <p className="font-bold text-slate-900">{createdTicket.customerName}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Mobile:</span>
                    <p className="font-bold text-slate-900">{createdTicket.mobileNumber}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Branch Hub:</span>
                    <p className="font-bold text-sky-600">{createdTicket.city}</p>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-slate-400 font-medium">Summary:</span>
                  <p className="font-bold text-slate-800 mt-0.5">{createdTicket.problemSummary}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
                >
                  <Home className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Link>

                <a
                  href={`https://wa.me/91${COMPANY_CONTACT.whatsapp}?text=${encodeURIComponent(
                    [
                      `*NEW ${bookingMode === 'rent' ? 'EQUIPMENT RENTAL RESERVATION' : 'DOORSTEP SERVICE & REPAIR BOOKING'}*`,
                      `*Ticket ID:* #${createdTicket.serviceId}`,
                      ``,
                      `*Customer Details:*`,
                      `• *Name:* ${createdTicket.customerName}`,
                      `• *Mobile:* ${createdTicket.mobileNumber}`,
                      createdTicket.whatsappNumber ? `• *WhatsApp:* ${createdTicket.whatsappNumber}` : null,
                      createdTicket.email ? `• *Email:* ${createdTicket.email}` : null,
                      `• *City / Branch Hub:* ${createdTicket.city}`,
                      ``,
                      `*Equipment & Service Details:*`,
                      `• *Equipment Category:* ${createdTicket.equipmentType}`,
                      createdTicket.brand ? `• *Brand:* ${createdTicket.brand}` : null,
                      createdTicket.modelNumber ? `• *Model / Unit:* ${createdTicket.modelNumber}` : null,
                      `• *Problem / Requirements:* ${createdTicket.problemSummary}`,
                      `• *Fulfillment Mode:* ${createdTicket.fulfillmentType}`,
                      createdTicket.preferredDate ? `• *Preferred Date:* ${createdTicket.preferredDate}` : null,
                      createdTicket.address ? `• *Address:* ${createdTicket.address}` : null,
                      createdTicket.additionalMessage ? `• *Special Instructions:* ${createdTicket.additionalMessage}` : null
                    ].filter(Boolean).join('\n')
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat / Confirm on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
              {errorMsg && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* RENTAL-SPECIFIC FIELDS */}
              {bookingMode === 'rent' && (
                <div className="space-y-4 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-200/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Step 1: Rental Equipment & Duration
                  </span>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Concentrator Machine on Rent:
                    </label>
                    <select
                      value={formData.rentalEquipment}
                      onChange={(e) => setFormData({ ...formData, rentalEquipment: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option value="5L Stationary Concentrator (Philips EverFlo) - ₹3,500/mo">
                        5 LPM Stationary (Philips EverFlo / DeVilbiss) - ₹3,500/mo
                      </option>
                      <option value="10L High Flow Machine (Heavy Duty) - ₹6,500/mo">
                        10 LPM High Flow Machine (Dual Patient / High Flow) - ₹6,500/mo
                      </option>
                      <option value="Portable Oxygen Concentrator POC (Inogen One) - ₹8,500/mo">
                        Portable Oxygen Concentrator POC (Inogen One G3/G5) - ₹8,500/mo
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Rental Duration:
                      </label>
                      <select
                        value={formData.rentalDuration}
                        onChange={(e) => setFormData({ ...formData, rentalDuration: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      >
                        <option value="7 Days">7 Days (Short Term)</option>
                        <option value="15 Days">15 Days</option>
                        <option value="1 Month">1 Month (Most Popular)</option>
                        <option value="Long Term">2+ Months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Required Delivery Date:
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* REPAIR-SPECIFIC FIELDS */}
              {bookingMode === 'repair' && (
                <div className="space-y-4 bg-sky-50/50 p-5 rounded-2xl border border-sky-200/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                    Step 1: Your Equipment & Problem
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Equipment Brand:
                      </label>
                      <select
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="">Select Brand...</option>
                        {popularBrands.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Model / Capacity:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. EverFlo 5L, 525DS, Inogen G5..."
                        value={formData.modelNumber}
                        onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Observed Issues:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {COMMON_PROBLEMS.slice(0, 6).map((prob) => {
                        const isSelected = selectedProblems.includes(prob.title);
                        return (
                          <button
                            key={prob.id}
                            type="button"
                            onClick={() => toggleProblemSelection(prob.title)}
                            className={`p-2 rounded-xl border text-[11px] font-semibold text-left transition cursor-pointer ${
                              isSelected
                                ? 'bg-sky-100 text-sky-800 border-sky-400 font-bold'
                                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                            }`}
                          >
                            <span className="block truncate">{prob.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Problem Details / Error Code: *
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe symptoms, purity alarm color, or beeping..."
                      value={formData.problemSummary}
                      onChange={(e) => setFormData({ ...formData, problemSummary: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* LOCATION & FULFILLMENT */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step 2: Service Location
                </span>

                <div className="grid grid-cols-3 gap-3">
                  {(['Mumbai', 'Pune', 'Lucknow'] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => handleCityChange(c)}
                      className={`p-3 rounded-2xl border text-xs font-bold text-center transition cursor-pointer ${
                        formData.city === c
                          ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <MapPin className="w-4 h-4 mx-auto mb-1 text-sky-400" />
                      <span>{c}</span>
                    </button>
                  ))}
                </div>

                {formData.city === 'Mumbai' && (
                  <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold text-[#0B1F33] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-sky-600" />
                        Mumbai Service Coverage Areas:
                      </span>
                      <span className="text-[10px] text-sky-700 font-semibold">Tap to add</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                      {[
                        { num: '1', name: 'Thane' },
                        { num: '2', name: 'Mira-Bhayandar' },
                        { num: '3', name: 'Vasai-Virar' },
                        { num: '4', name: 'Kalyan - Bhiwandi' }
                      ].map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => {
                            const current = formData.address;
                            if (!current.includes(item.name)) {
                              setFormData({
                                ...formData,
                                address: current ? `${current}, ${item.name}` : item.name
                              });
                            }
                          }}
                          className="flex items-center gap-1.5 bg-white hover:bg-sky-100 border border-sky-200 text-[#0B1F33] px-2 py-1.5 rounded-xl text-[11px] font-bold transition shadow-2xs cursor-pointer text-left"
                        >
                          <span className="w-3.5 h-3.5 rounded-full bg-sky-600 text-white flex items-center justify-center text-[9px] font-extrabold flex-shrink-0">
                            {item.num}
                          </span>
                          <span className="truncate">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Doorstep Delivery / Pickup Address:
                  </label>
                  <input
                    type="text"
                    placeholder={
                      formData.city === 'Mumbai'
                        ? 'Building name, Flat no, in Thane / Mira-Bhayandar / Vasai-Virar / Kalyan - Bhiwandi...'
                        : 'Building name, Flat no, Landmark / Area...'
                    }
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Step 3: Contact Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name: *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number: *
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  {bookingMode === 'rent' ? 'No advance payment needed until delivery.' : 'Free inspection estimate provided before repair.'}
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg transition cursor-pointer disabled:opacity-50 ${
                    bookingMode === 'rent'
                      ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
                      : 'bg-[#0284c7] hover:bg-[#0369a1] shadow-sky-500/20'
                  }`}
                  id="btn-submit-form"
                >
                  {bookingMode === 'rent' ? <Package className="w-4 h-4" /> : <Wrench className="w-4 h-4" />}
                  <span>
                    {isSubmitting
                      ? 'Registering Ticket...'
                      : bookingMode === 'rent'
                      ? 'Confirm Rental Reservation'
                      : 'Submit Repair Request'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default function RequestServicePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Service Form...</div>}>
      <ServiceRequestForm />
    </Suspense>
  );
}
