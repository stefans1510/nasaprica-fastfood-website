import React from 'react';

interface CrepeIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const CrepeIcon: React.FC<CrepeIconProps> = ({ 
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
      {/* Crepe triangular cone shape */}
      <path 
        d="M256 480 L50 120 Q50 100 70 90 L442 90 Q462 100 462 120 L256 480 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Decorative scalloped top edge */}
      <path 
        d="M70 90 Q80 70 100 70 Q120 80 120 70 Q140 80 160 70 Q180 80 200 70 Q220 80 240 70 Q260 80 280 70 Q300 80 320 70 Q340 80 360 70 Q380 80 400 70 Q420 80 442 90" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      {/* Simple spiral cream drizzle across the middle */}
      <path 
        d="M150 200 Q200 180 250 200 Q300 220 350 200 Q300 240 250 220 Q200 240 150 220 Q200 260 250 240 Q300 260 350 240"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="16" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CrepeIcon;