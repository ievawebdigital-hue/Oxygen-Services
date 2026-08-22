'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import {
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Upload,
  Phone,
  MessageSquare,
  Search,
  MapPin,
  Calendar,
  ShieldAlert,
  ArrowRight,
  ArrowLeft,
  FileText
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import { createServiceTicket, ServiceTicket } from '@/lib/serviceStore';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';
import { COMMON_PROBLEMS } from '@/lib/data/problems';

function ServiceRequestForm() {
  const searchParams = useSearchParams();
  const prefilledEquipment = searchParams.get('equipment') || 'Oxygen Concentrator';
  const prefilledProblem = searchParams.get('problem') || '';
  const prefilledBranch = searchParams.get('branch') || 'mumbai';

  // Form State
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    city: 'Mumbai' as 'Mumbai' | 'Pune' | 'Lucknow',
    branchId: 'mumbai' as 'mumbai' | 'pune' | 'lucknow',
    equipmentType: (prefilledEquipment.includes('Portable')
      ? 'Portable Oxygen Concentrator'
      : prefilledEquipment.includes('Machine')
      ? 'Oxygen Machine'
      : 'Oxygen Concentrator') as ServiceTicket['equipmentType'],
    brand: '',
    modelNumber: '',
    problemSummary: prefilledProblem,
    serviceType: 'Bench Diagnostic' as ServiceTicket['serviceType'],
    preferredDate: '',
    fulfillmentType: 'Branch Drop-off' as ServiceTicket['fulfillmentType'],
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
    if (!formData.problemSummary.trim()) {
      setErrorMsg('Please select or specify the equipment issue.');
      return;
    }

    setIsSubmitting(true);
    try {
      const ticket = createServiceTicket({
        customerName: formData.customerName,
        mobileNumber: formData.mobileNumber,
        whatsappNumber: formData.whatsappNumber || formData.mobileNumber,
        email: formData.email || '',
        city: formData.city,
        branchId: formData.branchId,
        equipmentType: formData.equipmentType,
        brand: formData.brand || 'Oxygen Equipment',
        modelNumber: formData.modelNumber || 'Standard Unit',
        problemSummary: formData.problemSummary,
        serviceType: formData.serviceType,
        preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
        fulfillmentType: formData.fulfillmentType,
        address: formData.address || '',
        photoUrl: formData.photoUrl || undefined,
        additionalMessage: formData.additionalMessage || ''
      });

      setCreatedTicket(ticket);
    } catch (err) {
      setErrorMsg('Failed to register service ticket. Please call 9820370015 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const popularBrands = [
    'Philips Respironics',
    'DeVilbiss',
    'Inogen',
    'Nidek Medical',
    'BMC Medical',
    'Oxymed',
    'Evox',
    'Yuwell',
    'Invacare',
    'AirSep',
    'Other / Unlisted'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-10 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <Wrench className="w-3.5 h-3.5" />
              Online Service Booking
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Request Equipment Service
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              Submit your medical oxygen machine or concentrator details. You will receive an instant Service ID to track diagnosis, estimates, and testing in real-time.
            </p>
          </div>

          {/* Success Screen if Created */}
          {createdTicket ? (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Service Request Successfully Received
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Ticket Generated: <span className="text-[#1677FF] font-mono">{createdTicket.serviceId}</span>
                </h2>
                <p className="text-xs text-slate-500">
                  A confirmation summary has been registered for {createdTicket.customerName}.
                </p>
              </div>

              {/* Ticket Details Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-slate-400 font-medium">Service ID:</span>
                    <p className="font-bold font-mono text-slate-900 text-sm">{createdTicket.serviceId}</p>
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
                    <span className="text-slate-400 font-medium">Branch:</span>
                    <p className="font-bold text-[#1677FF]">{createdTicket.city} ({createdTicket.branchId})</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-slate-400 font-medium">Equipment & Model:</span>
                    <p className="font-bold text-slate-800">{createdTicket.brand} {createdTicket.modelNumber} ({createdTicket.equipmentType})</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Reported Problem:</span>
                    <p className="font-bold text-slate-800">{createdTicket.problemSummary}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 font-medium">Current Status:</span>
                  <span className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-100 text-[#1677FF] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-ping" />
                    {createdTicket.status}
                  </span>
                </div>
              </div>

              {/* Next Steps Guidance */}
              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-2 text-xs text-slate-700">
                <p className="font-bold text-slate-900 text-sm">Next Steps:</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-600">
                  <li>Our technician at the <strong>{createdTicket.city}</strong> facility will verify equipment intake details.</li>
                  <li>You can drop off the unit or coordinate pickup via the phone numbers below.</li>
                  <li>Track live diagnostic progress and approve your itemized estimate using your Service ID.</li>
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <Link
                  href={`/track-service?id=${createdTicket.serviceId}&phone=${createdTicket.mobileNumber}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
                >
                  <Search className="w-4 h-4" />
                  <span>Open Live Service Tracker</span>
                </Link>

                <a
                  href={`https://wa.me/91${COMPANY_CONTACT.whatsapp}?text=Hello%20Oxygen%20Services%2C%20I%20have%20submitted%20service%20ticket%20${createdTicket.serviceId}%20for%20my%20${encodeURIComponent(createdTicket.brand)}%20${encodeURIComponent(createdTicket.modelNumber)}%20in%20${createdTicket.city}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-3 rounded-xl font-bold text-xs shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Ticket to WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setCreatedTicket(null);
                    setFormData({
                      customerName: '',
                      mobileNumber: '',
                      whatsappNumber: '',
                      email: '',
                      city: 'Mumbai',
                      branchId: 'mumbai',
                      equipmentType: 'Oxygen Concentrator',
                      brand: '',
                      modelNumber: '',
                      problemSummary: '',
                      serviceType: 'Bench Diagnostic',
                      preferredDate: '',
                      fulfillmentType: 'Branch Drop-off',
                      address: '',
                      photoUrl: '',
                      additionalMessage: ''
                    });
                    setSelectedProblems([]);
                    setPhotoPreview(null);
                  }}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-900 underline"
                >
                  Book Another Device
                </button>
              </div>
            </div>
          ) : (
            /* Multi-Step Interactive Form */
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Equipment & Fault Specification */}
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677FF]">
                    Step 1 of 3
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    What equipment needs service?
                  </h2>
                </div>

                {/* Equipment Type Selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'Oxygen Concentrator', label: 'Oxygen Concentrator (5L/10L)' },
                    { id: 'Oxygen Machine', label: 'Oxygen Machine' },
                    { id: 'Portable Oxygen Concentrator', label: 'Portable POC' },
                    { id: 'Medical Oxygen Equipment', label: 'Other O2 Equipment' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, equipmentType: item.id as any })}
                      className={`p-3.5 rounded-xl border text-xs font-bold text-left transition ${
                        formData.equipmentType === item.id
                          ? 'bg-[#0B1F33] text-white border-[#0B1F33] shadow'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Brand & Model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Equipment Brand / Manufacturer:
                    </label>
                    <select
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      <option value="">Select Brand...</option>
                      {popularBrands.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Model Number / Capacity (Optional):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. EverFlo 5L, 525DS, Inogen G5..."
                      value={formData.modelNumber}
                      onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Visual Problem Symptoms Selector */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    What is the observed problem / fault? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {COMMON_PROBLEMS.map((prob) => {
                      const isSelected = selectedProblems.includes(prob.title);
                      return (
                        <button
                          key={prob.id}
                          type="button"
                          onClick={() => toggleProblemSelection(prob.title)}
                          className={`p-2.5 rounded-xl border text-[11px] font-semibold text-left transition ${
                            isSelected
                              ? 'bg-blue-50 text-[#1677FF] border-[#1677FF] ring-1 ring-[#1677FF]'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          <span className="block truncate">{prob.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Problem Summary Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Problem Summary / Description: *
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe specific symptoms, alarm sounds, or error codes..."
                    value={formData.problemSummary}
                    onChange={(e) => setFormData({ ...formData, problemSummary: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Section 2: Branch & Fulfillment Preference */}
              <div className="space-y-4 pt-2">
                <div className="border-b border-slate-100 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677FF]">
                    Step 2 of 3
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Service Location & Branch
                  </h2>
                </div>

                {/* City Tabs */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Select Nearest Branch City: *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Mumbai', 'Pune', 'Lucknow'] as const).map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => handleCityChange(city)}
                        className={`p-3 rounded-xl border text-xs font-bold text-center transition ${
                          formData.city === city
                            ? 'bg-[#0B1F33] text-white border-[#0B1F33] shadow'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 mx-auto mb-1 text-[#19C6D9]" />
                        <span>{city}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fulfillment Method */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {[
                    { id: 'Branch Drop-off', desc: 'Bring unit directly to workshop' },
                    { id: 'Doorstep Pickup', desc: 'Coordinate pickup courier / rider' },
                    { id: 'Technician Visit', desc: 'On-site clinical / clinic check' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, fulfillmentType: mode.id as any })}
                      className={`p-3 rounded-xl border text-left transition ${
                        formData.fulfillmentType === mode.id
                          ? 'bg-blue-50 text-[#1677FF] border-[#1677FF]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      <p className="text-xs font-bold">{mode.id}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{mode.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Section 3: Customer Contact Information */}
              <div className="space-y-4 pt-2">
                <div className="border-b border-slate-100 pb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1677FF]">
                    Step 3 of 3
                  </span>
                  <h2 className="text-lg font-bold text-slate-900">
                    Contact & Pickup Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name: *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp Number:
                    </label>
                    <input
                      type="tel"
                      placeholder="Optional if same as mobile"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. user@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Address / Area Landmark (for pickup or visit):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Flat 302, Green Heights, Andheri West / Kothrud / Chinhat..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Photo Upload */}
                <div className="pt-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Upload Equipment / Error Display Photo (Optional):
                  </label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center hover:border-blue-400 transition bg-slate-50/50">
                    {photoPreview ? (
                      <div className="space-y-2">
                        <div className="relative w-40 h-32 mx-auto">
                          <Image
                            src={photoPreview}
                            alt="Equipment preview"
                            fill
                            unoptimized
                            className="rounded-lg object-contain border border-slate-200"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setPhotoPreview(null);
                            setFormData((prev) => ({ ...prev, photoUrl: '' }));
                          }}
                          className="text-xs text-red-600 font-bold hover:underline"
                        >
                          Remove Photo
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer block">
                        <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                        <span className="text-xs font-bold text-[#1677FF]">Click to upload photo</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">PNG, JPG, WEBP up to 5MB</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to technical diagnostic assessment by Oxygen Services.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 transition disabled:opacity-50"
                  id="submit-service-request-btn"
                >
                  <Wrench className="w-4 h-4" />
                  <span>{isSubmitting ? 'Generating Ticket...' : 'Submit Service Request'}</span>
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
