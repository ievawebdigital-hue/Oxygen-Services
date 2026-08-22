'use client';

import { addActivityLog } from './activityStore';

const ADMIN_STORAGE_KEY = 'oxygen_services_admin_session';

export interface AdminUser {
  username: string;
  loginTime: string;
  role: string;
}

export function getAdminSession(): AdminUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(ADMIN_STORAGE_KEY) || localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AdminUser;
  } catch {
    return null;
  }
}

export function setAdminSession(user: AdminUser, rememberMe = true): void {
  if (typeof window === 'undefined') return;
  const serialized = JSON.stringify(user);
  if (rememberMe) {
    localStorage.setItem(ADMIN_STORAGE_KEY, serialized);
  }
  sessionStorage.setItem(ADMIN_STORAGE_KEY, serialized);

  addActivityLog({
    type: 'login',
    title: 'Admin User Authenticated',
    description: `User "${user.username}" logged in (${user.role}). Operations dashboard session initialized.`,
    actor: user.username,
    branch: 'Central'
  });
}

export function clearAdminSession(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(ADMIN_STORAGE_KEY);
  localStorage.removeItem(ADMIN_STORAGE_KEY);

  addActivityLog({
    type: 'logout',
    title: 'Admin Signed Out',
    description: 'Admin console session closed safely.',
    actor: 'Admin',
    branch: 'Central'
  });
}

export function validateAdminCredentials(username: string, password: string): boolean {
  const trimmedUser = username.trim();
  const trimmedPass = password.trim();
  return trimmedUser === 'Admin' && trimmedPass === 'Oxygen@123';
}
