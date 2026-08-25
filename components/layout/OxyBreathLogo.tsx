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
  // Color tokens
  const isLightMode = variant === 'light'; // on dark backgrounds (like footer)

  const navyColor = isLightMode ? '#FFFFFF' : '#0A2540';
  const tealColor = '#0097B2';
  const dividerColor = isLightMode ? 'rgba(255, 255, 255, 0.25)' : '#94A3B8';
  const subtitleColor = isLightMode ? '#94A3B8' : '#0A2540';
  const o2Color = isLightMode ? '#E0F2FE' : '#0A2540';

  // Height mappings based on size
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    responsive: 'h-9 sm:h-11 lg:h-12'
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto ${heightClasses} transition-all`}
        role="img"
        aria-label="Oxy Breath Services - Medical Oxygen Equipment Service & Repair"
      >
        <defs>
          {/* Gradient for O ring */}
          <linearGradient id="oRingGrad" x1="15" y1="20" x2="145" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A3C4" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#004C82" />
          </linearGradient>

          {/* Gradient for wave ribbon 1 */}
          <linearGradient id="waveGrad1" x1="20" y1="120" x2="160" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00C7E6" />
            <stop offset="50%" stopColor="#0097B2" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Gradient for wave ribbon 2 */}
          <linearGradient id="waveGrad2" x1="10" y1="110" x2="140" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0097B2" />
          </linearGradient>
        </defs>

        {/* ======================================================== */}
        {/* MONOGRAM (OB ICON WITH O2 AND RESPIRATORY WAVES)         */}
        {/* ======================================================== */}
        <g id="monogram-group">
          {/* Main 'O' Circle Ring */}
          <path
            d="M 82 22 
               C 42 22, 14 50, 14 84 
               C 14 118, 42 144, 82 144 
               C 114 144, 138 126, 146 98 
               L 124 93 
               C 118 113, 102 126, 82 126 
               C 53 126, 33 105, 33 84 
               C 33 63, 53 40, 82 40 
               C 104 40, 122 55, 126 77 
               L 148 72 
               C 142 42, 116 22, 82 22 Z"
            fill="url(#oRingGrad)"
          />

          {/* 'B' Shape in Dark Navy */}
          <path
            d="M 98 24 
               H 142 
               C 160 24, 172 34, 172 48 
               C 172 60, 163 68, 150 72 
               C 166 76, 177 86, 177 102 
               C 177 118, 164 130, 142 130 
               H 98 
               V 24 Z 
               M 120 42 
               V 66 
               H 139 
               C 147 66, 152 61, 152 54 
               C 152 47, 147 42, 139 42 
               H 120 Z 
               M 120 84 
               V 112 
               H 141 
               C 150 112, 156 106, 156 98 
               C 156 90, 150 84, 141 84 
               H 120 Z"
            fill={isLightMode ? '#FFFFFF' : '#0A2540'}
          />

          {/* Central O2 Chemistry Text */}
          <text
            x="76"
            y="92"
            fill={o2Color}
            fontFamily="Arial, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="26"
            textAnchor="middle"
          >
            O
          </text>
          <text
            x="91"
            y="98"
            fill={o2Color}
            fontFamily="Arial, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="18"
          >
            2
          </text>

          {/* Flowing Respiratory Cyan Waves passing through OB */}
          {/* Wave 1: Lower Cyan Wave */}
          <path
            d="M 12 90 
               C 34 116, 68 126, 96 112 
               C 126 98, 152 74, 182 72 
               C 162 76, 132 102, 102 114 
               C 74 124, 42 114, 18 94 
               Z"
            fill="url(#waveGrad1)"
          />

          {/* Wave 2: Upper Aqua Ribbon */}
          <path
            d="M 22 104 
               C 42 124, 76 122, 104 106 
               C 134 88, 158 72, 184 72 
               C 158 76, 132 94, 106 108 
               C 76 124, 46 122, 26 108 
               Z"
            fill="#FFFFFF"
            opacity={isLightMode ? 0.9 : 0.85}
          />
          <path
            d="M 24 108 
               C 46 128, 80 124, 108 108 
               C 138 90, 162 74, 186 74 
               C 160 78, 136 96, 110 110 
               C 80 126, 48 126, 28 112 
               Z"
            fill="url(#waveGrad2)"
          />
        </g>

        {/* Vertical Divider Bar */}
        <line
          x1="202"
          y1="22"
          x2="202"
          y2="132"
          stroke={dividerColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* ======================================================== */}
        {/* BRAND TYPOGRAPHY: Oxy Breath SERVICES                    */}
        {/* ======================================================== */}
        {/* "Oxy" in Bold Navy */}
        <text
          x="218"
          y="78"
          fill={navyColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="54"
          letterSpacing="-1.5"
        >
          Oxy
        </text>

        {/* "Breath" in Vibrant Cyan/Teal */}
        <text
          x="328"
          y="78"
          fill={tealColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="54"
          letterSpacing="-1.5"
        >
          Breath
        </text>

        {/* Horizontal Divider 1 (Left of SERVICES) */}
        <line
          x1="218"
          y1="102"
          x2="276"
          y2="102"
          stroke={dividerColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* "S E R V I C E S" */}
        <text
          x="376"
          y="108"
          fill={navyColor}
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="21"
          letterSpacing="7"
          textAnchor="middle"
        >
          SERVICES
        </text>

        {/* Horizontal Divider 2 (Right of SERVICES) */}
        <line
          x1="476"
          y1="102"
          x2="534"
          y2="102"
          stroke={dividerColor}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Subtitle: MEDICAL OXYGEN EQUIPMENT SERVICE & REPAIR */}
        {showSubtitle && (
          <text
            x="218"
            y="132"
            fill={subtitleColor}
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
            fontWeight="700"
            fontSize="12.5"
            letterSpacing="2.8"
          >
            MEDICAL OXYGEN EQUIPMENT SERVICE &amp; REPAIR
          </text>
        )}
      </svg>
    </div>
  );
}
