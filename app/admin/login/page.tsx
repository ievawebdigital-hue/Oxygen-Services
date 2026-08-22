'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Activity,
  Wrench,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  getAdminSession,
  setAdminSession,
  validateAdminCredentials
} from '@/lib/adminAuth';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // If already logged in, redirect directly to /admin
  useEffect(() => {
    const session = getAdminSession();
    if (session) {
      router.replace('/admin');
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      const isValid = validateAdminCredentials(username, password);

      if (isValid) {
        setAdminSession(
          {
            username: 'Admin',
            loginTime: new Date().toISOString(),
            role: 'Biomedical Operations Lead'
          },
          rememberMe
        );
        setLoginSuccess(true);
        setTimeout(() => {
          router.push('/admin');
        }, 600);
      } else {
        setIsLoading(false);
        setErrorMsg('Invalid username or password. Please verify your credentials.');
      }
    }, 400);
  };

  const handleFillDemo = () => {
    setUsername('Admin');
    setPassword('Oxygen@123');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative">
            {/* Top Badge */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                <ShieldCheck className="w-7 h-7" />
              </div>
            </div>

            <div className="text-center mb-6">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#19C6D9] bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60 inline-flex items-center gap-1.5 mb-2">
                <Activity className="w-3.5 h-3.5 text-[#19C6D9]" />
                <span>Internal Operations Portal</span>
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Admin Authentication
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5">
                Sign in to manage service tickets, diagnostic reports, and repair workflows across Mumbai, Pune & Lucknow.
              </p>
            </div>

            {/* Error Message banner */}
            {errorMsg && (
              <div className="mb-5 p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-start gap-2.5 animate-shake">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1 font-medium leading-relaxed">{errorMsg}</div>
              </div>
            )}

            {/* Success banner */}
            {loginSuccess && (
              <div className="mb-5 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-medium">Authentication verified. Redirecting to dashboard...</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="admin-username-input"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username (e.g. Admin)"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="admin-password-input"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-10 pr-11 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition cursor-pointer"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer"
                  />
                  <span>Remember session on this device</span>
                </label>
              </div>

              <button
                type="submit"
                id="admin-login-submit-btn"
                disabled={isLoading || loginSuccess}
                className="w-full bg-[#1677FF] hover:bg-blue-600 active:bg-blue-700 text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition duration-150 disabled:opacity-50 cursor-pointer mt-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Demo Credentials Box */}
            <div className="mt-6 pt-5 border-t border-slate-700/80">
              <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-700/70 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-400 font-semibold flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                    Portal Credentials:
                  </span>
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="text-xs font-bold text-[#19C6D9] hover:underline cursor-pointer"
                  >
                    Auto-Fill
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono text-[11px]">
                  <div className="bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                    <span className="text-slate-500 block text-[9px] uppercase font-sans">User:</span>
                    Admin
                  </div>
                  <div className="bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                    <span className="text-slate-500 block text-[9px] uppercase font-sans">Pass:</span>
                    Oxygen@123
                  </div>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-4 text-center">
              <Link
                href="/"
                className="text-xs text-slate-400 hover:text-white transition inline-flex items-center gap-1"
              >
                <span>← Back to Public Website</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
