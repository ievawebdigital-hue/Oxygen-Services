'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ShieldCheck,
  Search,
  Filter,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Plus,
  RefreshCw,
  Edit,
  Eye,
  FileText,
  CreditCard,
  UserCheck,
  Activity,
  ArrowRight,
  LogOut,
  User
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/layout/MobileStickyBar';
import RecentActivityPanel from '@/components/admin/RecentActivityPanel';
import {
  getStoredTickets,
  updateTicketStatus,
  updateTicketDiagnosticData,
  recordTicketPayment,
  ServiceTicket,
  ALL_STEPS
} from '@/lib/serviceStore';
import { BRANCHES } from '@/lib/data/branches';
import { getAdminSession, clearAdminSession, AdminUser } from '@/lib/adminAuth';
import { getStoredActivities } from '@/lib/activityStore';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() => {
    if (typeof window !== 'undefined') {
      return getAdminSession();
    }
    return null;
  });
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !getAdminSession();
    }
    return true;
  });

  const [tickets, setTickets] = useState<ServiceTicket[]>(() => {
    if (typeof window !== 'undefined') {
      return getStoredTickets();
    }
    return [];
  });
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState<ServiceTicket | null>(null);

  // Side-panel activity states
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isActivityDocked, setIsActivityDocked] = useState(false);
  const [activityCount, setActivityCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return getStoredActivities().length;
    }
    return 6;
  });

  // Keep activity count updated
  useEffect(() => {
    const updateCount = () => {
      setActivityCount(getStoredActivities().length);
    };
    window.addEventListener('oxygen_activity_logged', updateCount);
    window.addEventListener('storage', updateCount);
    return () => {
      window.removeEventListener('oxygen_activity_logged', updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  // Check admin session on mount and redirect if missing
  useEffect(() => {
    const session = getAdminSession();
    if (!session) {
      router.replace('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    clearAdminSession();
    setCurrentUser(null);
    router.push('/admin/login');
  };

  // Edit Modal States
  const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
  const [editStatusIndex, setEditStatusIndex] = useState<number>(0);
  const [editStepNotes, setEditStepNotes] = useState('');
  const [editInitialPurity, setEditInitialPurity] = useState<number | ''>('');
  const [editFinalPurity, setEditFinalPurity] = useState<number | ''>('');
  const [editPressure, setEditPressure] = useState<number | ''>('');
  const [editTechNotes, setEditTechNotes] = useState('');

  const loadTickets = React.useCallback(() => {
    const list = getStoredTickets();
    setTickets(list);
    setSelectedTicket((current) => {
      if (!current) return null;
      return list.find((t) => t.serviceId === current.serviceId) || null;
    });
  }, []);

  const handleSelectTicketFromActivity = (serviceId: string) => {
    const target = tickets.find((t) => t.serviceId.toUpperCase() === serviceId.toUpperCase());
    if (target) {
      handleOpenEditModal(target);
    }
  };

  const filteredTickets = tickets.filter((t) => {
    const matchBranch = selectedBranch === 'all' || t.branchId === selectedBranch;
    const matchStatus = selectedStatus === 'all' || t.status === selectedStatus;
    const matchSearch =
      t.serviceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.mobileNumber.includes(searchTerm) ||
      t.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchBranch && matchStatus && matchSearch;
  });

  const handleOpenEditModal = (t: ServiceTicket) => {
    setSelectedTicket(t);
    setEditStatusIndex(t.currentStepIndex);
    setEditStepNotes(t.timeline[t.currentStepIndex]?.notes || '');
    setEditInitialPurity(t.diagnosticData?.initialPurityPercent ?? '');
    setEditFinalPurity(t.diagnosticData?.finalPurityPercent ?? '');
    setEditPressure(t.diagnosticData?.operatingPressurePsig ?? '');
    setEditTechNotes(t.diagnosticData?.technicianNotes ?? '');
    setIsEditingModalOpen(true);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket) return;

    // Update status & timeline
    updateTicketStatus(
      selectedTicket.serviceId,
      editStatusIndex,
      editStepNotes || undefined
    );

    // Update diagnostic data if provided
    updateTicketDiagnosticData(selectedTicket.serviceId, {
      initialPurityPercent: editInitialPurity !== '' ? Number(editInitialPurity) : undefined,
      finalPurityPercent: editFinalPurity !== '' ? Number(editFinalPurity) : undefined,
      operatingPressurePsig: editPressure !== '' ? Number(editPressure) : undefined,
      technicianNotes: editTechNotes || undefined
    });

    loadTickets();
    setIsEditingModalOpen(false);
  };

  const handleResetData = () => {
    if (confirm('Reset tickets to factory test records?')) {
      localStorage.removeItem('oxygen_services_tickets_v1');
      loadTickets();
      import('@/lib/activityStore').then((mod) => {
        mod.resetActivityLogs();
      });
    }
  };

  if (isAuthChecking) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center space-y-3">
            <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-semibold text-slate-600">Verifying Admin Authentication...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />

      <main className="flex-grow py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#0B1F33] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-md">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-[#19C6D9] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Technician & Branch Admin Console
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Service Order Management System
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Manage logistics stages, ultrasonic oxygen purity benchmarks, diagnostic notes, and customer approvals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Authenticated Admin Badge */}
              <div className="bg-slate-800/90 border border-slate-700 px-3 py-2 rounded-xl text-xs flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center text-[10px] font-extrabold">
                  A
                </div>
                <div>
                  <div className="font-bold text-white leading-none">Admin</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Logged in</div>
                </div>
              </div>

              {/* Activity Log Side-Panel Toggle Button */}
              <button
                type="button"
                id="admin-activity-toggle-btn"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
                    setIsActivityDocked((prev) => !prev);
                  } else {
                    setIsActivityOpen(true);
                  }
                }}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold border transition flex items-center gap-2 cursor-pointer ${
                  isActivityDocked
                    ? 'bg-blue-600 hover:bg-blue-500 text-white border-blue-400 shadow-md shadow-blue-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
                title="Open Recent Activity Side Panel"
              >
                <div className="relative">
                  <Activity className="w-3.5 h-3.5 text-[#19C6D9]" />
                  <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                </div>
                <span>Activity Feed</span>
                <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-mono text-white font-extrabold">
                  {activityCount}
                </span>
              </button>

              <button
                type="button"
                onClick={loadTickets}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-slate-700 flex items-center gap-1.5 transition cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#19C6D9]" />
                <span>Refresh</span>
              </button>

              <button
                type="button"
                onClick={handleResetData}
                className="bg-slate-800 hover:bg-red-900/50 text-slate-300 hover:text-red-300 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-slate-700 transition cursor-pointer"
              >
                Reset Demo Data
              </button>

              <button
                type="button"
                id="admin-logout-btn"
                onClick={handleLogout}
                className="bg-red-500/20 hover:bg-red-600 text-red-200 hover:text-white border border-red-500/40 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
            <div className="sm:col-span-4 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Ticket ID, Customer, Phone, Brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-4 flex items-center gap-2">
              <span className="text-slate-500 font-bold">Branch:</span>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 font-semibold"
              >
                <option value="all">All Branches (Mumbai, Pune, Lucknow)</option>
                <option value="mumbai">Mumbai Head Office</option>
                <option value="pune">Pune Service Center</option>
                <option value="lucknow">Lucknow Service Center</option>
              </select>
            </div>

            <div className="sm:col-span-4 flex items-center gap-2">
              <span className="text-slate-500 font-bold">Stage:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 font-semibold"
              >
                <option value="all">All Statuses</option>
                {ALL_STEPS.map((s, idx) => (
                  <option key={idx} value={s}>{idx + 1}. {s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Main Dashboard Layout (Table + Optional Docked Side-Panel) */}
          <div className="flex flex-col lg:flex-row items-start gap-6">
            {/* Tickets Table Column */}
            <div className="flex-1 min-w-0 w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Active Service Tickets ({filteredTickets.length})
                  </h2>
                  <p className="text-xs text-slate-500">
                    Click on any ticket to update its lifecycle milestone or diagnostic report.
                  </p>
                </div>

                {!isActivityDocked && (
                  <button
                    type="button"
                    onClick={() => setIsActivityOpen(true)}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer"
                  >
                    <Activity className="w-3.5 h-3.5 text-blue-600" />
                    <span>View Activity Logs</span>
                  </button>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Ticket ID</th>
                      <th className="py-3 px-4">Customer</th>
                      <th className="py-3 px-4">Branch</th>
                      <th className="py-3 px-4">Equipment & Model</th>
                      <th className="py-3 px-4">Current Milestone</th>
                      <th className="py-3 px-4">Purity Test</th>
                      <th className="py-3 px-4">Estimate</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredTickets.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-8 text-center text-slate-500">
                          No service tickets match your filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredTickets.map((t) => (
                        <tr key={t.serviceId} className="hover:bg-blue-50/40 transition">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#1677FF]">
                            {t.serviceId}
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-bold text-slate-900">{t.customerName}</p>
                            <p className="text-[11px] text-slate-400">{t.mobileNumber}</p>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold uppercase text-[10px]">
                              {t.city}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-semibold text-slate-900">{t.brand} {t.modelNumber}</p>
                            <p className="text-[10px] text-slate-500">{t.equipmentType}</p>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-[#1677FF]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF]" />
                              {t.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            {t.diagnosticData?.finalPurityPercent ? (
                              <span className="text-emerald-600 font-bold font-mono">
                                {t.diagnosticData.finalPurityPercent}% (Pass)
                              </span>
                            ) : t.diagnosticData?.initialPurityPercent ? (
                              <span className="text-amber-600 font-bold font-mono">
                                {t.diagnosticData.initialPurityPercent}% (Intake)
                              </span>
                            ) : (
                              <span className="text-slate-400">Pending</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            {t.estimate ? (
                              <div>
                                <p className="font-mono font-bold text-slate-900">
                                  ₹{t.estimate.totalAmount.toLocaleString('en-IN')}
                                </p>
                                <span className={`text-[10px] font-semibold ${t.estimate.approvalStatus === 'Approved' ? 'text-emerald-600' : 'text-amber-600'}`}>
                                  {t.estimate.approvalStatus}
                                </span>
                              </div>
                            ) : (
                              <span className="text-slate-400">Not quoted</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <button
                              type="button"
                              onClick={() => handleOpenEditModal(t)}
                              className="bg-[#1677FF] hover:bg-[#0958D9] text-white px-3 py-1.5 rounded-lg text-xs font-bold transition inline-flex items-center gap-1 cursor-pointer"
                            >
                              <Edit className="w-3 h-3" />
                              <span>View & Update</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Docked Activity Side-Panel on Desktop */}
            {isActivityDocked && (
              <RecentActivityPanel
                isOpen={true}
                isDocked={true}
                onClose={() => setIsActivityDocked(false)}
                onToggleDock={() => setIsActivityDocked(false)}
                onSelectTicket={handleSelectTicketFromActivity}
                tickets={tickets}
              />
            )}
          </div>
        </div>
      </main>

      {/* Floating Drawer Activity Side-Panel (for Mobile/Tablet or Undocked View) */}
      {!isActivityDocked && (
        <RecentActivityPanel
          isOpen={isActivityOpen}
          isDocked={false}
          onClose={() => setIsActivityOpen(false)}
          onToggleDock={() => {
            setIsActivityOpen(false);
            setIsActivityDocked(true);
          }}
          onSelectTicket={(id) => {
            setIsActivityOpen(false);
            handleSelectTicketFromActivity(id);
          }}
          tickets={tickets}
        />
      )}

      {/* Technician Update Modal */}
      {isEditingModalOpen && selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#1677FF]">{selectedTicket.serviceId}</span>
                <h3 className="text-lg font-bold text-slate-900">
                  Update Ticket: {selectedTicket.customerName} ({selectedTicket.brand} {selectedTicket.modelNumber})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsEditingModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-4 text-xs">
              {/* Milestone Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Progress Milestone (11-Stage Technical Lifecycle):
                </label>
                <select
                  value={editStatusIndex}
                  onChange={(e) => setEditStatusIndex(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                >
                  {ALL_STEPS.map((step, idx) => (
                    <option key={idx} value={idx}>
                      Stage {idx + 1}: {step}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Milestone Note / Activity Description:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sieve repacking completed; burning-in unit at 5 LPM..."
                  value={editStepNotes}
                  onChange={(e) => setEditStepNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-800"
                />
              </div>

              {/* Diagnostic Bench Findings */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Bench Test & Calibration Telemetry:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Intake Purity (%):
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 72"
                      value={editInitialPurity}
                      onChange={(e) => setEditInitialPurity(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Final Output Purity (%):
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 94"
                      value={editFinalPurity}
                      onChange={(e) => setEditFinalPurity(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">
                      Operating Pressure (PSIG):
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 21"
                      value={editPressure}
                      onChange={(e) => setEditPressure(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full bg-white border border-slate-200 rounded-xl p-2 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">
                    Technician Diagnostic Remarks:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter observations regarding valve sealing, filter saturation, motor temperature..."
                    value={editTechNotes}
                    onChange={(e) => setEditTechNotes(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl p-2"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsEditingModalOpen(false)}
                  className="px-4 py-2 font-semibold text-slate-500 hover:text-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-[#1677FF] hover:bg-[#0958D9] text-white px-6 py-2.5 rounded-xl font-bold transition"
                >
                  Save & Update Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
