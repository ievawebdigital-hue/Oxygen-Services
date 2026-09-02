import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'light' | 'dark';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'responsive';
}

export default function OxyBreathLogo({
  className = '',
  variant = 'color',
  showSubtitle = true,
  size = 'responsive'
}: LogoProps) {
  const isLightMode = variant === 'light'; // on dark backgrounds (like footer)

  // Typography sizing configurations
  const sizeConfig = {
    sm: {
      heading: 'text-base sm:text-lg font-black tracking-tight whitespace-nowrap',
      subheading: 'text-[9px] sm:text-[10px] font-semibold tracking-normal whitespace-nowrap'
    },
    md: {
      heading: 'text-lg sm:text-xl font-black tracking-tight whitespace-nowrap',
      subheading: 'text-[10px] sm:text-xs font-semibold tracking-normal whitespace-nowrap'
    },
    lg: {
      heading: 'text-xl sm:text-2xl lg:text-3xl font-black tracking-tight whitespace-nowrap',
      subheading: 'text-xs sm:text-sm font-semibold tracking-normal whitespace-nowrap'
    },
    responsive: {
      heading: 'text-base sm:text-xl lg:text-2xl font-black tracking-tight whitespace-nowrap',
      subheading: 'text-[9px] sm:text-xs font-semibold tracking-normal whitespace-nowrap'
    }
  }[size];

  return (
    <div className={`inline-flex flex-col select-none leading-tight ${className}`} role="banner">
      {/* Main Heading: Oxy Breath Services */}
      <div className={`${sizeConfig.heading} flex items-center gap-1.5 whitespace-nowrap`}>
        {isLightMode ? (
          <span className="text-white whitespace-nowrap">
            Oxy Breath <span className="text-sky-400">Services</span>
          </span>
        ) : (
          <span className="text-slate-900 whitespace-nowrap">
            Oxy Breath <span className="text-sky-600">Services</span>
          </span>
        )}
      </div>

      {/* Sub-heading: Home Care oxygen concentrator */}
      {showSubtitle && (
        <span
          className={`mt-0.5 ${sizeConfig.subheading} ${
            isLightMode ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Home Care oxygen concentrator
        </span>
      )}
    </div>
  );
}

