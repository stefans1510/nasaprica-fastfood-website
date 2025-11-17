import React from 'react';

interface SaladIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const SaladIcon: React.FC<SaladIconProps> = ({ 
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
      {/* Salad bowl - made larger but within viewBox */}
      <path 
        d="M30 320 Q30 440 120 485 Q190 510 256 510 Q322 510 392 485 Q482 440 482 320 L30 320"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Bowl rim - made even larger */}
      <ellipse cx="256" cy="320" rx="226" ry="45" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24"
      />
      
      {/* Lettuce leaves - made larger and positioned higher */}
      <path 
        d="M120 270 Q85 235 70 185 Q85 135 120 150 Q155 165 170 200 Q185 235 150 260"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      <path 
        d="M185 285 Q150 250 135 200 Q150 150 185 165 Q220 180 235 215 Q250 250 215 280"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      <path 
        d="M335 285 Q300 250 285 200 Q300 150 335 165 Q370 180 385 215 Q400 250 365 280"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      <path 
        d="M400 270 Q365 235 350 185 Q365 135 400 150 Q435 165 450 200 Q465 235 430 260"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      {/* Cherry tomatoes - made larger */}
      <circle cx="170" cy="295" r="22" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="18"
      />
      
      <circle cx="256" cy="305" r="22" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="18"
      />
      
      <circle cx="350" cy="295" r="22" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="18"
      />
    </svg>
  );
};

export default SaladIcon;