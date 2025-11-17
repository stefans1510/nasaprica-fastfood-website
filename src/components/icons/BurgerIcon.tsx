import React from 'react';

interface BurgerIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({ 
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
      {/* Top bun */}
      <path 
        d="M60 220 Q60 140 150 90 Q200 60 256 60 Q312 60 362 90 Q452 140 452 220 L60 220"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Sesame seeds on top bun */}
      <circle cx="170" cy="155" r="8" 
        fill="currentColor"
      />
      <circle cx="220" cy="130" r="8" 
        fill="currentColor"
      />
      <circle cx="290" cy="140" r="8" 
        fill="currentColor"
      />
      <circle cx="340" cy="165" r="8" 
        fill="currentColor"
      />
      
      {/* Lettuce layer */}
      <path 
        d="M50 240 Q70 220 110 230 Q150 225 190 235 Q230 225 270 230 Q310 225 350 235 Q390 225 430 230 Q470 240 472 260 L50 260 Q50 250 50 240"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      {/* Meat patty */}
      <ellipse cx="256" cy="300" rx="200" ry="30" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24"
      />
      
      {/* Cheese layer */}
      <path 
        d="M70 330 L70 360 Q70 370 80 370 L432 370 Q442 370 442 360 L442 330"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="20" 
        strokeLinecap="round"
      />
      
      {/* Bottom bun */}
      <path 
        d="M60 380 Q60 420 90 440 Q150 460 256 460 Q362 460 422 440 Q452 420 452 380 L60 380"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BurgerIcon;