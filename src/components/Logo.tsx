/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showSublabel?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showSublabel = true,
  showSubtitle,
  className = ''
}) => {
  const displaySublabel = showSubtitle !== undefined ? showSubtitle : showSublabel;
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Exact rounded teal icon with white interlocking chain loops as in screenshots */}
      <div
        className={`w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 ${
          isLight ? 'bg-white/10 text-white' : 'bg-[#1A4B54] text-white'
        }`}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-serif text-[15px] font-bold tracking-[0.14em] uppercase leading-none ${
            isLight ? 'text-white' : 'text-[#1A4B54]'
          }`}
        >
          BROKEN CHAINS
        </span>
        {displaySublabel && (
          <span
            className={`text-[9px] tracking-[0.18em] uppercase font-sans mt-1 font-semibold leading-none ${
              isLight ? 'text-white/70' : 'text-[#64748B]'
            }`}
          >
            PRISON EDUCATION · BCA PARTNER
          </span>
        )}
      </div>
    </div>
  );
};
