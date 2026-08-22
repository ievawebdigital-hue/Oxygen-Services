'use client';

export type ActivityType =
  | 'status_change'
  | 'ticket_edit'
  | 'diagnostic_update'
  | 'login'
  | 'logout'
  | 'ticket_created'
  | 'estimate_approved'
  | 'payment_recorded'
  | 'data_reset';

export interface ActivityLogItem {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  serviceId?: string;
  customerName?: string;
  actor: string;
  branch?: 'Mumbai' | 'Pune' | 'Lucknow' | 'Central' | string;
  timestamp: string; // ISO date string or formatted date
  details?: {
    fromStep?: string;
    toStep?: string;
    purity?: number;
    amount?: number;
    ipOrDevice?: string;
  };
}

const ACTIVITY_STORAGE_KEY = 'oxygen_services_admin_activity_v1';

const INITIAL_ACTIVITIES: ActivityLogItem[] = [
  {
    id: 'act-2026-001',
    type: 'login',
    title: 'Admin Session Authenticated',
    description: 'Biomedical Operations Lead logged in from Mumbai Operations Desk.',
    actor: 'Admin (Lead Engineer)',
    branch: 'Central',
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString()
  },
  {
    id: 'act-2026-002',
    type: 'status_change',
    title: 'Milestone Advanced to Stage 9 (Testing & QC)',
    description: 'Philips EverFlo 5L (OS-2026-000108) moved to 24-hr stability burn-in run.',
    serviceId: 'OS-2026-000108',
    customerName: 'Rajesh Sharma',
    actor: 'Admin',
    branch: 'Mumbai',
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    details: {
      fromStep: 'Repair / Service in Progress',
      toStep: 'Testing & Quality Check',
      purity: 94.2
    }
  },
  {
    id: 'act-2026-003',
    type: 'diagnostic_update',
    title: 'Ultrasonic Purity Reading Logged (94.2%)',
    description: 'Dual molecular zeolite sieve columns repacked and post-service purity validated.',
    serviceId: 'OS-2026-000108',
    customerName: 'Rajesh Sharma',
    actor: 'Admin (Pravin Kadam)',
    branch: 'Mumbai',
    timestamp: new Date(Date.now() - 85 * 60 * 1000).toISOString(),
    details: {
      purity: 94.2
    }
  },
  {
    id: 'act-2026-004',
    type: 'payment_recorded',
    title: 'Payment Received: ₹9,145',
    description: 'Online UPI transaction TXN-RZP-2026-992140 verified for repair and sieve kit.',
    serviceId: 'OS-2026-000108',
    customerName: 'Rajesh Sharma',
    actor: 'System / Gateway',
    branch: 'Mumbai',
    timestamp: new Date(Date.now() - 3 * 3600 * 1000).toISOString(),
    details: {
      amount: 9145
    }
  },
  {
    id: 'act-2026-005',
    type: 'status_change',
    title: 'Milestone Updated to Diagnosis in Progress',
    description: 'Inogen One G5 (OS-2026-000114) bench testing started for column life expiry.',
    serviceId: 'OS-2026-000114',
    customerName: 'Sunita Joshi',
    actor: 'Admin (Amol Deshmukh)',
    branch: 'Pune',
    timestamp: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
    details: {
      fromStep: 'Equipment Received / Visit Scheduled',
      toStep: 'Diagnosis in Progress',
      purity: 81.2
    }
  },
  {
    id: 'act-2026-006',
    type: 'ticket_created',
    title: 'New Emergency Service Ticket Registered',
    description: 'DeVilbiss 525DS (OS-2026-000119) booked for compressor knocking & doorstep pickup.',
    serviceId: 'OS-2026-000119',
    customerName: 'Amitabh Verma',
    actor: 'Customer Portal',
    branch: 'Lucknow',
    timestamp: new Date(Date.now() - 14 * 3600 * 1000).toISOString()
  }
];

export function getStoredActivities(): ActivityLogItem[] {
  if (typeof window === 'undefined') {
    return INITIAL_ACTIVITIES;
  }
  try {
    const raw = localStorage.getItem(ACTIVITY_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(INITIAL_ACTIVITIES));
      return INITIAL_ACTIVITIES;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(INITIAL_ACTIVITIES));
      return INITIAL_ACTIVITIES;
    }
    return parsed;
  } catch {
    return INITIAL_ACTIVITIES;
  }
}

export function saveActivities(activities: ActivityLogItem[]): void {
  if (typeof window === 'undefined') return;
  try {
    // Keep max 100 most recent activities
    const trimmed = activities.slice(0, 100);
    localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // ignore
  }
}

export function addActivityLog(
  entry: Omit<ActivityLogItem, 'id' | 'timestamp'> & { timestamp?: string }
): ActivityLogItem {
  const current = getStoredActivities();
  const now = new Date();
  const newActivity: ActivityLogItem = {
    ...entry,
    id: `act-${now.getTime()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: entry.timestamp || now.toISOString()
  };

  const updated = [newActivity, ...current];
  saveActivities(updated);

  // Dispatch custom window event so open panels can reactively update
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('oxygen_activity_logged', { detail: newActivity }));
  }

  return newActivity;
}

export function clearActivityLogs(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify([]));
    window.dispatchEvent(new CustomEvent('oxygen_activity_logged'));
  } catch {
    // ignore
  }
}

export function resetActivityLogs(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ACTIVITY_STORAGE_KEY, JSON.stringify(INITIAL_ACTIVITIES));
    window.dispatchEvent(new CustomEvent('oxygen_activity_logged'));
  } catch {
    // ignore
  }
}

export function formatTimeAgo(timestampStr: string): string {
  try {
    const time = new Date(timestampStr).getTime();
    if (isNaN(time)) return timestampStr;
    const now = Date.now();
    const diffSec = Math.floor((now - time) / 1000);

    if (diffSec < 45) return 'Just now';
    if (diffSec < 90) return '1 min ago';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} mins ago`;
    if (diffSec < 7200) return '1 hour ago';
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hours ago`;
    if (diffSec < 172800) return 'Yesterday';
    return `${Math.floor(diffSec / 86400)} days ago`;
  } catch {
    return timestampStr;
  }
}

export function formatFullTimestamp(timestampStr: string): string {
  try {
    const d = new Date(timestampStr);
    if (isNaN(d.getTime())) return timestampStr;
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  } catch {
    return timestampStr;
  }
}
