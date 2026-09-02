'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  Send,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  PhoneCall,
  CheckCheck,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANCHES, COMPANY_CONTACT } from '@/lib/data/branches';

interface QuickPrompt {
  id: string;
  label: string;
  message: string;
}

const QUICK_PROMPTS: QuickPrompt[] = [
  {
    id: 'purity-issue',
    label: '🚨 Low O₂ Purity / Alarm',
    message: 'Hello, my oxygen concentrator is showing low oxygen purity alarm. I need urgent diagnostic support.'
  },
  {
    id: 'sieve-service',
    label: '🔧 Sieve Bed / Service Cost',
    message: 'Hi, I would like to get an estimate for molecular sieve repacking and general servicing for my oxygen machine.'
  },
  {
    id: 'doorstep-pickup',
    label: '📦 Doorstep Pickup',
    message: 'Hello, I want to arrange doorstep pickup for oxygen equipment repair in my area.'
  },
  {
    id: 'workshop-visit',
    label: '📍 Workshop Address & Timing',
    message: 'Hi, please share the nearest workshop address and technician availability for drop-off.'
  }
];

export default function WhatsAppLiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranchId, setSelectedBranchId] = useState<'all' | 'mumbai' | 'pune' | 'lucknow'>('all');
  const [customMessage, setCustomMessage] = useState('');
  const [hasUnreadNotification, setHasUnreadNotification] = useState(true);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggleOpen = (openState?: boolean) => {
    const nextState = openState !== undefined ? openState : !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      setShowWelcomeBubble(false);
      setHasUnreadNotification(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  };

  // Show a welcome tooltip bubble after 3.5 seconds if user hasn't opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeBubble((prev) => (!isOpen ? true : prev));
    }, 3500);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Determine targeted WhatsApp Number based on selected branch
  const getTargetedContact = () => {
    if (selectedBranchId === 'pune') {
      const puneBranch = BRANCHES.find((b) => b.id === 'pune');
      return {
        number: puneBranch?.whatsapp || '8149324456',
        city: 'Pune (OXY BREATH SERVICES)',
        phone: puneBranch?.primaryPhone || '8149324456'
      };
    }
    if (selectedBranchId === 'lucknow') {
      const lkoBranch = BRANCHES.find((b) => b.id === 'lucknow');
      return {
        number: lkoBranch?.whatsapp || '9820370015',
        city: 'Lucknow (OXY BREATH SERVICES)',
        phone: lkoBranch?.primaryPhone || '9820370015'
      };
    }
    if (selectedBranchId === 'mumbai') {
      const mumBranch = BRANCHES.find((b) => b.id === 'mumbai');
      return {
        number: mumBranch?.whatsapp || '9820370015',
        city: 'Mumbai (OXY BREATH SERVICES)',
        phone: mumBranch?.primaryPhone || '9820370015'
      };
    }
    return {
      number: COMPANY_CONTACT.whatsapp,
      city: 'Central Support (Mumbai • Pune • Lucknow)',
      phone: COMPANY_CONTACT.primaryPhone
    };
  };

  const targetedContact = getTargetedContact();

  const handleSendMessage = (msgToSend?: string) => {
    const text = msgToSend || customMessage || 'Hello Oxy Breath Services, I need assistance with my oxygen equipment.';
    const branchPrefix = selectedBranchId !== 'all' ? `[${selectedBranchId.toUpperCase()} INQUIRY] ` : '';
    const fullText = `${branchPrefix}${text}`;
    const url = `https://wa.me/91${targetedContact.number}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMessage('');
  };

  const handleQuickPromptClick = (promptMessage: string) => {
    handleSendMessage(promptMessage);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Welcome Callout Bubble (Auto-shows when closed) */}
      <AnimatePresence>
        {showWelcomeBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden md:block mb-3 bg-white text-slate-800 p-3.5 rounded-2xl shadow-xl border border-slate-200/90 max-w-xs relative cursor-pointer group hover:border-emerald-400 transition"
            onClick={() => handleToggleOpen(true)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowWelcomeBubble(false);
              }}
              className="absolute -top-2 -left-2 w-5 h-5 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center text-xs shadow-xs cursor-pointer"
              aria-label="Dismiss message"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1">
                Biomedical Support Online
              </p>
            </div>
            <p className="text-xs text-slate-600 leading-snug">
              Need urgent help with oxygen purity, error alarms, or service pickup? Chat with our engineers now!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="whatsapp-chat-modal"
            className="w-[92vw] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden mb-3.5 flex flex-col max-h-[85vh] sm:max-h-[580px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0B1F33] via-[#153252] to-[#0B1F33] p-4 text-white relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#25D366] to-emerald-400 text-white flex items-center justify-center shadow-md">
                      <MessageCircle className="w-6 h-6 fill-white text-emerald-800" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0B1F33]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm leading-tight text-white">
                        Oxygen Support Live
                      </h3>
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-emerald-300 font-medium flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online • Mumbai • Pune • Lucknow</span>
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  id="close-whatsapp-chat"
                  onClick={() => handleToggleOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition cursor-pointer"
                  aria-label="Close WhatsApp chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Branch Selector Chips in Header */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wider flex-shrink-0 mr-1">
                  Branch:
                </span>
                {(
                  [
                    { id: 'all', label: 'All Branches' },
                    { id: 'mumbai', label: 'Mumbai' },
                    { id: 'pune', label: 'Pune' },
                    { id: 'lucknow', label: 'Lucknow' }
                  ] as const
                ).map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranchId(b.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition cursor-pointer ${
                      selectedBranchId === b.id
                        ? 'bg-[#25D366] text-white shadow-xs'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-slate-50 flex-1 overflow-y-auto space-y-3.5">
              {/* Bot Greeting Bubble */}
              <div className="flex items-start gap-2 max-w-[90%]">
                <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-xs font-bold text-slate-700">
                  OS
                </div>
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200/80 text-xs text-slate-700 space-y-1.5">
                  <p className="font-semibold text-slate-900">
                    Welcome to Oxygen Equipment Services! 👋
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Connecting to <strong>{targetedContact.city}</strong>. How can our biomedical engineers assist your machine today?
                  </p>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-1">
                    <span>Just now</span>
                    <CheckCheck className="w-3 h-3 text-blue-500" />
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Options */}
              <div className="space-y-1.5 pl-9">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Choose quick topic:</span>
                </p>
                <div className="space-y-1.5">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt.id}
                      type="button"
                      onClick={() => handleQuickPromptClick(prompt.message)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200/90 hover:border-emerald-300 text-xs font-medium text-slate-700 hover:text-emerald-900 transition flex items-center justify-between group shadow-xs cursor-pointer"
                    >
                      <span className="line-clamp-1">{prompt.label}</span>
                      <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Call Fallback Bar */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-[#1677FF]" />
                  <span className="text-slate-700 font-medium">Direct Hotline:</span>
                </div>
                <a
                  href={`tel:+91${targetedContact.phone}`}
                  className="font-bold text-[#1677FF] hover:underline"
                >
                  +91 {targetedContact.phone}
                </a>
              </div>
            </div>

            {/* Interactive Message Input Box */}
            <div className="p-3 bg-white border-t border-slate-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  id="whatsapp-custom-message-input"
                  placeholder="Type your equipment issue or brand..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="flex-1 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
                />
                <button
                  type="submit"
                  id="submit-whatsapp-chat"
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white p-2.5 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 hover:shadow-lg transition cursor-pointer flex-shrink-0 active:scale-95"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Chat</span>
                </button>
              </form>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
                <span>Direct WhatsApp encryption</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Direct Engineer Response
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent WhatsApp Floating Action Button */}
      <motion.button
        type="button"
        id="whatsapp-live-chat-button"
        onClick={() => handleToggleOpen()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-2.5 p-3.5 md:px-4 md:py-3.5 rounded-full shadow-2xl transition-all duration-300 cursor-pointer select-none ${
          isOpen
            ? 'bg-slate-900 text-white ring-4 ring-slate-800/30'
            : 'bg-[#25D366] hover:bg-[#20bd5a] text-white ring-4 ring-emerald-400/30 shadow-emerald-600/30'
        }`}
        aria-label="Toggle Live WhatsApp Chat Support"
      >
        {/* Unread Alert Dot */}
        {hasUnreadNotification && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>
        )}

        <div className="relative">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          )}
        </div>

        <span className="hidden md:inline-flex font-bold text-xs sm:text-sm tracking-wide items-center gap-1.5 pr-0.5">
          {isOpen ? 'Close Chat' : 'WhatsApp Support'}
        </span>
      </motion.button>
    </div>
  );
}
