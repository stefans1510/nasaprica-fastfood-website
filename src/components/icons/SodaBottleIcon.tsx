import React from 'react';

interface SodaBottleIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const SodaBottleIcon: React.FC<SodaBottleIconProps> = ({ 
  size = 24, 
  className = "", 
  color = "currentColor" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottle cap */}
      <rect x="200" y="40" width="112" height="40" rx="8" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round"
      />
      
      {/* Bottle neck */}
      <rect x="220" y="80" width="72" height="80" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round"
      />
      
      {/* Bottle body */}
      <path 
        d="M180 160 Q180 150 190 150 L322 150 Q332 150 332 160 L332 420 Q332 440 312 440 L200 440 Q180 440 180 420 L180 160"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Label area */}
      <rect x="200" y="200" width="112" height="120" rx="8" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round"
      />
      
      {/* Liquid level inside bottle */}
      <path 
        d="M200 350 Q200 360 210 360 L302 360 Q312 360 312 350 L312 200 L200 200 L200 350"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="round"
      />
      
      {/* Bubbles in the liquid */}
      <circle cx="230" cy="250" r="4" 
        fill="currentColor"
      />
      <circle cx="270" cy="280" r="3" 
        fill="currentColor"
      />
      <circle cx="250" cy="310" r="4" 
        fill="currentColor"
      />
      <circle cx="280" cy="240" r="3" 
        fill="currentColor"
      />
    </svg>
  );
};

export default SodaBottleIcon;