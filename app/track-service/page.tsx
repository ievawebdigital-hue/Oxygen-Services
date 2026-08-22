'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Printer,
  CreditCard,
  Phone,
  MessageSquare,
  Wrench,
  ShieldCheck,
  UserCheck,
  MapPin,
  ChevronRight,
  Activity,
  Download,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import {
  findTicket,
  getStoredTickets,
  approveTicketEstimate,
  recordTicketPayment,
  ServiceTicket,
  ALL_STEPS
} from '@/lib/serviceStore';
import { COMPANY_CONTACT } from '@/lib/data/branches';

function TrackServiceContent() {
  const searchParams = useSearchParams();
  const urlId = searchParams.get('id') || '';
  const urlPhone = searchParams.get('phone') || '';

  const [serviceIdInput, setServiceIdInput] = useState(urlId || 'OS-2026-000108');
  const [mobileInput, setMobileInput] = useState(urlPhone || '9820370015');
  const [ticket, setTicket] = useState<ServiceTicket | null>(() => {
    if (typeof window !== 'undefined') {
      return findTicket(urlId || 'OS-2026-000108', urlPhone || '9820370015');
    }
    return null;
  });
  const [searchError, setSearchError] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleSearch = React.useCallback((idToSearch = serviceIdInput, phoneToSearch = mobileInput) => {
    setSearchError('');
    if (!idToSearch.trim()) {
      setSearchError('Please enter a valid Service ID (e.g. OS-2026-000108).');
      return;
    }
    const found = findTicket(idToSearch, phoneToSearch);
    if (found) {
      setTicket(found);
      setServiceIdInput(found.serviceId);
      setMobileInput(found.mobileNumber);
    } else {
      setTicket(null);
      setSearchError(`No service ticket found matching ID "${idToSearch}". Please check the Service ID or mobile number.`);
    }
  }, [mobileInput, serviceIdInput]);

  const handleApproveEstimate = () => {
    if (!ticket) return;
    const updated = approveTicketEstimate(ticket.serviceId);
    if (updated) {
      setTicket(updated);
    }
  };

  const handleSimulatePayment = () => {
    if (!ticket || !ticket.estimate) return;
    const amountToPay = ticket.estimate.totalAmount;
    const ticketId = ticket.serviceId;
    setIsProcessingPayment(true);
    setTimeout(() => {
      const updated = recordTicketPayment(ticketId, amountToPay);
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      if (updated) {
        setTicket(updated);
      }
      setTimeout(() => {
        setShowPaymentModal(false);
        setPaymentSuccess(false);
      }, 2000);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 print:hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#1677FF] text-xs font-bold uppercase tracking-wider mb-2">
              <Search className="w-3.5 h-3.5" />
              Live Equipment Status
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F33] tracking-tight">
              Track Your Service Ticket
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              Enter your unique Service ID and registered mobile number to view diagnostic progress, estimates, test results, and invoices.
            </p>
          </div>

          {/* Search Box Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md mb-8 print:hidden">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end"
            >
              <div className="sm:col-span-5">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Service Ticket ID: *
                </label>
                <input
                  type="text"
                  placeholder="e.g. OS-2026-000108"
                  value={serviceIdInput}
                  onChange={(e) => setServiceIdInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900"
                  required
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Registered Mobile Number:
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile"
                  value={mobileInput}
                  onChange={(e) => setMobileInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900"
                />
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  className="w-full bg-[#1677FF] hover:bg-[#0958D9] text-white py-3 px-4 rounded-xl text-sm font-bold shadow transition flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Ticket</span>
                </button>
              </div>
            </form>

            {/* Quick Demo Pre-fill Pills */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold">Test Sample Records:</span>
              <button
                type="button"
                onClick={() => {
                  setServiceIdInput('OS-2026-000108');
                  setMobileInput('9820370015');
                  handleSearch('OS-2026-000108', '9820370015');
                }}
                className="px-2.5 py-1 rounded bg-blue-50 text-[#1677FF] hover:bg-blue-100 font-mono font-medium border border-blue-200"
              >
                OS-2026-000108 (Mumbai EverFlo 5L)
              </button>

              <button
                type="button"
                onClick={() => {
                  setServiceIdInput('OS-2026-000114');
                  setMobileInput('9819459421');
                  handleSearch('OS-2026-000114', '9819459421');
                }}
                className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 hover:bg-amber-100 font-mono font-medium border border-amber-200"
              >
                OS-2026-000114 (Pune Inogen G5)
              </button>

              <button
                type="button"
                onClick={() => {
                  setServiceIdInput('OS-2026-000119');
                  setMobileInput('9820370015');
                  handleSearch('OS-2026-000119', '9820370015');
                }}
                className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 font-mono font-medium border border-slate-200"
              >
                OS-2026-000119 (Lucknow DeVilbiss)
              </button>
            </div>

            {searchError && (
              <div className="mt-4 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{searchError}</span>
              </div>
            )}
          </div>

          {/* Ticket Live Details & Logistics Progress */}
          {ticket ? (
            <div className="space-y-6">
              {/* Main Ticket Banner */}
              <div className="bg-[#0B1F33] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#1677FF]/30 text-[#19C6D9] border border-[#19C6D9]/30">
                        {ticket.serviceId}
                      </span>
                      <span className="text-xs text-slate-400">
                        Registered on {ticket.createdAt}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {ticket.brand} {ticket.modelNumber}
                    </h2>
                    <p className="text-xs text-[#19C6D9] mt-0.5">
                      {ticket.equipmentType} • {ticket.serviceType}
                    </p>
                  </div>

                  {/* Status Pill & Print Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Current Status
                      </span>
                      <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        {ticket.status}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 transition print:hidden"
                      title="Print Service Report"
                    >
                      <Printer className="w-4 h-4 text-[#19C6D9]" />
                      <span>Print / PDF</span>
                    </button>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Customer:</span>
                    <p className="font-bold text-slate-100">{ticket.customerName}</p>
                    <p className="text-slate-400">{ticket.mobileNumber}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Branch Center:</span>
                    <p className="font-bold text-slate-100">{ticket.city} Facility</p>
                    <p className="text-slate-400">{ticket.fulfillmentType}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Assigned Tech:</span>
                    <p className="font-bold text-slate-100">
                      {ticket.assignedTechnician?.name || 'Diagnostic Specialist'}
                    </p>
                    <p className="text-slate-400">{ticket.assignedTechnician?.branch || ticket.city}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Payment Status:</span>
                    <p className={`font-bold ${ticket.payment?.status === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {ticket.payment?.status || 'Pending'}
                    </p>
                    {ticket.estimate && (
                      <p className="text-slate-300 font-mono">₹{ticket.estimate.totalAmount.toLocaleString('en-IN')}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* 11-Stage Chronological Logistics Timeline */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Service Milestones & Progress Log
                    </h3>
                    <p className="text-xs text-slate-500">
                      Stage {ticket.currentStepIndex + 1} of 11 in technical verification
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1677FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {Math.round(((ticket.currentStepIndex + 1) / ALL_STEPS.length) * 100)}% Completed
                  </span>
                </div>

                {/* Timeline Step Items */}
                <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                  {ticket.timeline.map((step, idx) => {
                    const isPassed = idx <= ticket.currentStepIndex;
                    const isCurrent = idx === ticket.currentStepIndex;

                    return (
                      <div key={idx} className="relative flex items-start gap-4 text-xs">
                        {/* Status Dot */}
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold z-10 flex-shrink-0 transition ${
                            isCurrent
                              ? 'bg-[#1677FF] text-white ring-4 ring-blue-100 shadow'
                              : isPassed
                              ? 'bg-emerald-500 text-white'
                              : 'bg-slate-100 text-slate-400 border border-slate-300'
                          }`}
                        >
                          {isPassed ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                        </div>

                        {/* Step Details */}
                        <div
                          className={`flex-grow p-4 rounded-xl border transition ${
                            isCurrent
                              ? 'bg-blue-50/70 border-blue-200'
                              : isPassed
                              ? 'bg-slate-50 border-slate-200'
                              : 'bg-white border-slate-100 opacity-60'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className={`font-bold ${isCurrent ? 'text-[#1677FF] text-sm' : 'text-slate-900'}`}>
                              {step.step}
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">
                              {step.date} {step.time && `• ${step.time}`}
                            </span>
                          </div>
                          {step.notes && (
                            <p className="text-slate-600 mt-1 leading-relaxed">
                              {step.notes}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Diagnostic Bench Findings & Telemetry */}
              {ticket.diagnosticData && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Activity className="w-5 h-5 text-[#1677FF]" />
                    <h3 className="text-lg font-bold text-slate-900">
                      Diagnostic Inspection & Bench Telemetry
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {ticket.diagnosticData.initialPurityPercent !== undefined && (
                      <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                          Intake O2 Purity
                        </span>
                        <p className="text-xl font-extrabold text-amber-900 mt-1">
                          {ticket.diagnosticData.initialPurityPercent}%
                        </p>
                        <span className="text-[10px] text-amber-700">Sub-optimal</span>
                      </div>
                    )}

                    {ticket.diagnosticData.finalPurityPercent !== undefined ? (
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                          Tested Output Purity
                        </span>
                        <p className="text-xl font-extrabold text-emerald-900 mt-1">
                          {ticket.diagnosticData.finalPurityPercent}%
                        </p>
                        <span className="text-[10px] text-emerald-700">Medical Standard</span>
                      </div>
                    ) : (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Target Purity
                        </span>
                        <p className="text-xl font-extrabold text-slate-700 mt-1">93% ± 3%</p>
                        <span className="text-[10px] text-slate-500">Post-repairs</span>
                      </div>
                    )}

                    {ticket.diagnosticData.operatingPressurePsig !== undefined && (
                      <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                          Line Pressure
                        </span>
                        <p className="text-xl font-extrabold text-blue-900 mt-1">
                          {ticket.diagnosticData.operatingPressurePsig} PSIG
                        </p>
                        <span className="text-[10px] text-blue-700">Normal Range</span>
                      </div>
                    )}

                    {ticket.diagnosticData.runtimeHours !== undefined && (
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Hour Meter Run
                        </span>
                        <p className="text-xl font-extrabold text-slate-800 mt-1">
                          {ticket.diagnosticData.runtimeHours.toLocaleString()} hrs
                        </p>
                        <span className="text-[10px] text-slate-500">Total Run Time</span>
                      </div>
                    )}
                  </div>

                  {ticket.diagnosticData.diagnosedFaults && ticket.diagnosticData.diagnosedFaults.length > 0 && (
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                      <p className="font-bold text-slate-900 mb-2">Identified Technical Faults:</p>
                      <ul className="space-y-1.5 text-slate-700">
                        {ticket.diagnosticData.diagnosedFaults.map((fault, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span>{fault}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {ticket.diagnosticData.technicianNotes && (
                    <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-200 text-xs text-slate-700">
                      <p className="font-bold text-[#1677FF] mb-1">Technician Diagnostic Notes:</p>
                      <p className="leading-relaxed">{ticket.diagnosticData.technicianNotes}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Itemized Estimate & Approval Box */}
              {ticket.estimate && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Itemized Service Estimate & Parts Quotation
                      </h3>
                      <p className="text-xs text-slate-500">
                        Approval Status: <strong className={ticket.estimate.approvalStatus === 'Approved' ? 'text-emerald-600' : 'text-amber-600'}>{ticket.estimate.approvalStatus}</strong>
                      </p>
                    </div>

                    {ticket.estimate.approvalStatus === 'Pending' ? (
                      <button
                        type="button"
                        onClick={handleApproveEstimate}
                        className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow transition"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Approve Estimate Online</span>
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-xl font-bold text-xs border border-emerald-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Approved by Customer {ticket.estimate.approvedAt ? `on ${ticket.estimate.approvedAt}` : ''}
                      </span>
                    )}
                  </div>

                  {/* Items Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-y border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3">Item Description</th>
                          <th className="py-2.5 px-3">Type</th>
                          <th className="py-2.5 px-3 text-center">Qty</th>
                          <th className="py-2.5 px-3 text-right">Unit Price</th>
                          <th className="py-2.5 px-3 text-right">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {ticket.estimate.items.map((item) => (
                          <tr key={item.id}>
                            <td className="py-3 px-3 font-semibold text-slate-900">{item.description}</td>
                            <td className="py-3 px-3">
                              <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                                {item.type}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center">{item.quantity}</td>
                            <td className="py-3 px-3 text-right font-mono">₹{item.unitPrice.toLocaleString('en-IN')}</td>
                            <td className="py-3 px-3 text-right font-mono font-bold">₹{item.total.toLocaleString('en-IN')}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="border-t-2 border-slate-200 text-slate-800">
                        <tr>
                          <td colSpan={4} className="py-2 px-3 text-right font-semibold">Subtotal:</td>
                          <td className="py-2 px-3 text-right font-mono font-semibold">₹{ticket.estimate.subtotal.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr>
                          <td colSpan={4} className="py-2 px-3 text-right font-semibold">GST (18%):</td>
                          <td className="py-2 px-3 text-right font-mono font-semibold">₹{ticket.estimate.gstAmount.toLocaleString('en-IN')}</td>
                        </tr>
                        <tr className="text-sm font-bold text-[#0B1F33] bg-blue-50/50">
                          <td colSpan={4} className="py-3 px-3 text-right">Total Payable Amount:</td>
                          <td className="py-3 px-3 text-right font-mono text-[#1677FF]">₹{ticket.estimate.totalAmount.toLocaleString('en-IN')}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* Payment Action */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Payment Status: {ticket.payment?.status === 'Paid' ? (
                          <span className="text-emerald-600 font-bold">Paid in Full ({ticket.payment.transactionId})</span>
                        ) : (
                          <span className="text-amber-600 font-bold">Pending Payment</span>
                        )}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Secure checkout via Razorpay gateway / UPI / NetBanking / Branch Counter.
                      </p>
                    </div>

                    {ticket.payment?.status !== 'Paid' ? (
                      <button
                        type="button"
                        onClick={() => setShowPaymentModal(true)}
                        className="inline-flex items-center gap-2 bg-[#1677FF] hover:bg-[#0958D9] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow transition whitespace-nowrap"
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Pay Online (₹{ticket.estimate.totalAmount.toLocaleString('en-IN')})</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                          ✓ Payment Received
                        </span>
                        <button
                          type="button"
                          onClick={handlePrint}
                          className="text-xs font-bold text-[#1677FF] hover:underline"
                        >
                          Download Receipt
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Need Assistance Hotline */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
                <div>
                  <p className="font-bold text-white text-sm">Need technician assistance with ticket {ticket.serviceId}?</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Our {ticket.city} branch team is on standby to assist you.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:+91${COMPANY_CONTACT.primaryPhone}`}
                    className="inline-flex items-center gap-1.5 bg-[#1677FF] hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 9820370015</span>
                  </a>
                  <a
                    href={`https://wa.me/91${COMPANY_CONTACT.whatsapp}?text=Hello%20Oxygen%20Services%2C%20I%20have%20an%20inquiry%20regarding%20ticket%20${ticket.serviceId}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white px-4 py-2 rounded-xl text-xs font-bold transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>

      {/* Simulated Razorpay Payment Modal */}
      {showPaymentModal && ticket && ticket.estimate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                  ₹
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Secure Payment Gateway</p>
                  <p className="text-[10px] text-slate-500">Oxygen Services Service Fee</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-500">{ticket.serviceId}</span>
            </div>

            {paymentSuccess ? (
              <div className="py-8 text-center space-y-2 animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Payment Completed!</h4>
                <p className="text-xs text-slate-500">
                  Amount ₹{ticket.estimate.totalAmount.toLocaleString('en-IN')} paid successfully. Generating digital receipt...
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Customer Name:</span>
                    <span className="font-bold text-slate-900">{ticket.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Equipment:</span>
                    <span className="font-semibold text-slate-800">{ticket.brand} {ticket.modelNumber}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-2 text-sm font-bold text-slate-900">
                    <span>Total Amount:</span>
                    <span className="text-[#1677FF] font-mono">₹{ticket.estimate.totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-slate-800">Select Simulated Payment Method:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="p-3 rounded-xl border border-blue-500 bg-blue-50 text-blue-700 font-semibold text-center text-xs"
                    >
                      UPI / QR Code
                    </button>
                    <button
                      type="button"
                      className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50 font-semibold text-center text-xs"
                    >
                      Debit / Credit Card
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowPaymentModal(false)}
                    disabled={isProcessingPayment}
                    className="px-4 py-2 font-semibold text-slate-500 hover:text-slate-900"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSimulatePayment}
                    disabled={isProcessingPayment}
                    className="bg-[#16A34A] hover:bg-[#15803D] text-white px-6 py-2.5 rounded-xl font-bold transition disabled:opacity-50 flex items-center gap-2"
                  >
                    {isProcessingPayment ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        <span>Pay ₹{ticket.estimate.totalAmount.toLocaleString('en-IN')}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <MobileStickyBar />
    </div>
  );
}

export default function TrackServicePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Tracker...</div>}>
      <TrackServiceContent />
    </Suspense>
  );
}
