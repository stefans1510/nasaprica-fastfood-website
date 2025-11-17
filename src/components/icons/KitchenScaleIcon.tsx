import React from 'react';

interface KitchenScaleIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const KitchenScaleIcon: React.FC<KitchenScaleIconProps> = ({ 
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
      {/* Scale bowl/tray on top */}
      <ellipse cx="256" cy="80" rx="180" ry="30" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24"
      />
      <path 
        d="M76 80 Q76 100 96 110 L416 110 Q436 100 436 80"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round"
      />
      
      {/* Scale support/neck */}
      <rect x="220" y="110" width="72" height="60" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round"
      />
      
      {/* Scale body */}
      <path 
        d="M140 170 Q130 170 130 180 L130 380 Q130 420 160 420 L352 420 Q382 420 382 380 L382 180 Q382 170 372 170 L140 170"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Clock/dial face */}
      <circle cx="256" cy="290" r="80" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20"
      />
      
      {/* Clock markers */}
      <line x1="256" y1="220" x2="256" y2="235" 
        stroke="currentColor" 
        strokeWidth="12" 
        strokeLinecap="round"
      />
      <line x1="326" y1="290" x2="311" y2="290" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      <line x1="256" y1="360" x2="256" y2="345" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      <line x1="186" y1="290" x2="201" y2="290" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="round"
      />
      <line x1="306" y1="240" x2="296" y2="250" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <line x1="306" y1="340" x2="296" y2="330" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <line x1="206" y1="240" x2="216" y2="250" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <line x1="206" y1="340" x2="216" y2="330" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      
      {/* Clock hands pointing to weight */}
      <line x1="256" y1="290" x2="290" y2="260" 
        stroke="currentColor" 
        strokeWidth="14" 
        strokeLinecap="round"
      />
      <circle cx="256" cy="290" r="8" 
        fill="currentColor"
      />
      
      {/* Scale base */}
      <ellipse cx="256" cy="460" rx="200" ry="30" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24"
      />
    </svg>
  );
};

export default KitchenScaleIcon;