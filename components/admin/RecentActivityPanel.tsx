'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Activity,
  Clock,
  X,
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  CreditCard,
  RefreshCw,
  PlusCircle,
  FileCheck,
  ExternalLink,
  ChevronRight,
  Trash2,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  Layers,
  MapPin,
  User,
  SlidersHorizontal
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ActivityLogItem,
  ActivityType,
  getStoredActivities,
  clearActivityLogs,
  resetActivityLogs,
  formatTimeAgo,
  formatFullTimestamp
} from '@/lib/activityStore';
import { ServiceTicket } from '@/lib/serviceStore';

interface RecentActivityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTicket?: (serviceId: string) => void;
  tickets?: ServiceTicket[];
  isDocked?: boolean;
  onToggleDock?: () => void;
}

type FilterType = 'all' | 'status' | 'diagnostics' | 'auth' | 'billing';

export default function RecentActivityPanel({
  isOpen,
  onClose,
  onSelectTicket,
  tickets = [],
  isDocked = false,
  onToggleDock
}: RecentActivityPanelProps) {
  const [activities, setActivities] = useState<ActivityLogItem[]>(() => {
    if (typeof window !== 'undefined') {
      return getStoredActivities();
    }
    return [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<FilterType>('all');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const loadActivities = React.useCallback(() => {
    setActivities(getStoredActivities());
  }, []);

  useEffect(() => {
    const handleCustomLog = () => {
      loadActivities();
    };

    window.addEventListener('oxygen_activity_logged', handleCustomLog);
    window.addEventListener('storage', handleCustomLog);

    return () => {
      window.removeEventListener('oxygen_activity_logged', handleCustomLog);
      window.removeEventListener('storage', handleCustomLog);
    };
  }, [loadActivities]);

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(id);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const filteredActivities = activities.filter((act) => {
    // Type match
    let matchType = true;
    if (selectedTypeFilter === 'status') {
      matchType = act.type === 'status_change' || act.type === 'ticket_created';
    } else if (selectedTypeFilter === 'diagnostics') {
      matchType = act.type === 'diagnostic_update' || act.type === 'ticket_edit';
    } else if (selectedTypeFilter === 'auth') {
      matchType = act.type === 'login' || act.type === 'logout';
    } else if (selectedTypeFilter === 'billing') {
      matchType = act.type === 'payment_recorded' || act.type === 'estimate_approved';
    }

    // Branch match
    const matchBranch =
      selectedBranchFilter === 'all' ||
      (act.branch && act.branch.toLowerCase().includes(selectedBranchFilter.toLowerCase()));

    // Search query match
    const query = searchTerm.toLowerCase().trim();
    const matchSearch =
      !query ||
      act.title.toLowerCase().includes(query) ||
      act.description.toLowerCase().includes(query) ||
      (act.serviceId && act.serviceId.toLowerCase().includes(query)) ||
      (act.customerName && act.customerName.toLowerCase().includes(query)) ||
      act.actor.toLowerCase().includes(query);

    return matchType && matchBranch && matchSearch;
  });

  const getActivityIcon = (type: ActivityType) => {
    switch (type) {
      case 'status_change':
        return <RefreshCw className="w-4 h-4 text-blue-500" />;
      case 'diagnostic_update':
      case 'ticket_edit':
        return <Activity className="w-4 h-4 text-[#19C6D9]" />;
      case 'ticket_created':
        return <PlusCircle className="w-4 h-4 text-indigo-500" />;
      case 'estimate_approved':
        return <FileCheck className="w-4 h-4 text-emerald-500" />;
      case 'payment_recorded':
        return <CreditCard className="w-4 h-4 text-green-600" />;
      case 'login':
        return <ShieldCheck className="w-4 h-4 text-amber-500" />;
      case 'logout':
        return <ShieldCheck className="w-4 h-4 text-slate-400" />;
      case 'data_reset':
        return <AlertTriangle className="w-4 h-4 text-rose-500" />;
      default:
        return <Clock className="w-4 h-4 text-slate-400" />;
    }
  };

  const getActivityBadgeColor = (type: ActivityType) => {
    switch (type) {
      case 'status_change':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'diagnostic_update':
        return 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case 'ticket_created':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'estimate_approved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'payment_recorded':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'login':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'logout':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      case 'data_reset':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getBranchBadge = (branch?: string) => {
    if (!branch) return null;
    const bLower = branch.toLowerCase();
    let color = 'bg-slate-100 text-slate-700 border-slate-200';
    if (bLower.includes('mumbai')) color = 'bg-blue-50 text-blue-700 border-blue-200';
    if (bLower.includes('pune')) color = 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (bLower.includes('lucknow')) color = 'bg-amber-50 text-amber-800 border-amber-200';
    if (bLower.includes('central')) color = 'bg-purple-50 text-purple-700 border-purple-200';

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${color}`}>
        <MapPin className="w-2.5 h-2.5 opacity-70" />
        <span>{branch}</span>
      </span>
    );
  };

  const content = (
    <div className="flex flex-col h-full bg-white text-slate-800 selection:bg-blue-500 selection:text-white">
      {/* Panel Top Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0B1F33] via-[#153252] to-[#0B1F33] text-white border-b border-slate-800 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-[#19C6D9] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                  Recent Operations Feed
                </h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Live audit trail of status changes, diagnostics & auth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {onToggleDock && (
              <button
                type="button"
                onClick={onToggleDock}
                title={isDocked ? 'Undock to drawer' : 'Dock to side column'}
                className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition text-xs cursor-pointer"
                aria-label="Toggle Dock Mode"
              >
                <Layers className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close activity panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mini stats summary */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10 text-center">
          <div className="bg-white/5 rounded-lg p-1.5">
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Total Events</span>
            <span className="text-sm font-extrabold font-mono text-[#19C6D9]">{activities.length}</span>
          </div>
          <div className="bg-white/5 rounded-lg p-1.5">
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Showing</span>
            <span className="text-sm font-extrabold font-mono text-white">{filteredActivities.length}</span>
          </div>
          <div className="bg-white/5 rounded-lg p-1.5">
            <span className="block text-[10px] text-slate-400 font-semibold uppercase">Branch Coverage</span>
            <span className="text-sm font-extrabold font-mono text-emerald-400">3 Hubs</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-3 bg-slate-50 border-b border-slate-200/90 space-y-2 flex-shrink-0">
        {/* Search input */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter by Ticket ID, Customer, Tech, or Action..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl pl-8.5 pr-3 py-1.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          {(
            [
              { id: 'all', label: 'All' },
              { id: 'status', label: 'Stages & Tickets' },
              { id: 'diagnostics', label: 'Diagnostics' },
              { id: 'billing', label: 'Estimates & Pay' },
              { id: 'auth', label: 'Auth Logs' }
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedTypeFilter(cat.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition cursor-pointer ${
                selectedTypeFilter === cat.id
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Branch Filter dropdown */}
        <div className="flex items-center justify-between gap-2 text-xs pt-1">
          <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px]">
            <Filter className="w-3 h-3 text-slate-400" />
            <span>Branch:</span>
          </div>
          <select
            value={selectedBranchFilter}
            onChange={(e) => setSelectedBranchFilter(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] font-semibold text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">All Hubs (Mumbai, Pune, Lucknow, Central)</option>
            <option value="mumbai">Mumbai Hub</option>
            <option value="pune">Pune Hub</option>
            <option value="lucknow">Lucknow Hub</option>
            <option value="central">Central / System</option>
          </select>
        </div>
      </div>

      {/* Activity Timeline List */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 bg-slate-50/60">
        {filteredActivities.length === 0 ? (
          <div className="py-12 text-center text-slate-500 space-y-2">
            <Clock className="w-8 h-8 text-slate-300 mx-auto" />
            <p className="font-semibold text-xs text-slate-700">No activity matches your filters</p>
            <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
              Try adjusting your search query or switching category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedTypeFilter('all');
                setSelectedBranchFilter('all');
              }}
              className="text-xs text-[#1677FF] font-bold hover:underline inline-block mt-2 cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filteredActivities.map((act) => {
            const hasTicketLink = Boolean(act.serviceId);

            return (
              <div
                key={act.id}
                onClick={() => {
                  if (act.serviceId && onSelectTicket) {
                    onSelectTicket(act.serviceId);
                  }
                }}
                className={`bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md transition group relative ${
                  hasTicketLink ? 'cursor-pointer hover:border-blue-300' : ''
                }`}
              >
                {/* Top Row: Icon + Type Badge + Time Ago */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                      {getActivityIcon(act.type)}
                    </div>
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border ${getActivityBadgeColor(
                        act.type
                      )}`}
                    >
                      {act.type.replace('_', ' ')}
                    </span>
                    {getBranchBadge(act.branch)}
                  </div>

                  <span
                    className="text-[11px] text-slate-400 font-medium whitespace-nowrap flex items-center gap-1"
                    title={formatFullTimestamp(act.timestamp)}
                  >
                    <Clock className="w-3 h-3 text-slate-300" />
                    {formatTimeAgo(act.timestamp)}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xs font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-600 transition">
                  {act.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">{act.description}</p>

                {/* Optional Telemetry Details Chips */}
                {act.details && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                    {act.details.purity !== undefined && (
                      <span className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 border border-cyan-200 font-bold">
                        O₂ Purity: {act.details.purity}%
                      </span>
                    )}
                    {act.details.amount !== undefined && (
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                        ₹{act.details.amount.toLocaleString('en-IN')}
                      </span>
                    )}
                    {act.details.fromStep && act.details.toStep && (
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                        {act.details.fromStep} → {act.details.toStep}
                      </span>
                    )}
                  </div>
                )}

                {/* Bottom Metadata: Actor + Action Trigger */}
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <User className="w-3 h-3 text-slate-400" />
                    <span className="font-medium">{act.actor}</span>
                  </div>

                  {act.serviceId && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => handleCopyId(e, act.serviceId!)}
                        className="text-[10px] font-mono font-bold text-[#1677FF] hover:underline"
                        title="Click to copy Ticket ID"
                      >
                        {copiedId === act.serviceId ? '✓ Copied' : act.serviceId}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Panel Bottom Footer Tools */}
      <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs flex-shrink-0">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              if (confirm('Clear activity logs history?')) {
                clearActivityLogs();
                loadActivities();
              }
            }}
            className="text-slate-400 hover:text-red-600 text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear Logs</span>
          </button>

          <span className="text-slate-200">|</span>

          <button
            type="button"
            onClick={() => {
              resetActivityLogs();
              loadActivities();
            }}
            className="text-slate-400 hover:text-slate-700 text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo Logs</span>
          </button>
        </div>

        <button
          type="button"
          onClick={loadActivities}
          className="text-[#1677FF] hover:text-blue-700 text-[11px] font-bold flex items-center gap-1 transition cursor-pointer"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Sync</span>
        </button>
      </div>
    </div>
  );

  // If docked alongside the main table on desktop
  if (isDocked) {
    return (
      <div className="w-full lg:w-[380px] xl:w-[420px] bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col h-[780px] flex-shrink-0">
        {content}
      </div>
    );
  }

  // Otherwise, render as slide-out floating drawer modal
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 transition-opacity"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[440px] md:w-[480px] z-50 bg-white shadow-2xl flex flex-col"
          >
            {content}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
