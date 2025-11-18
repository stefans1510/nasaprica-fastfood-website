import React from "react";

interface CrepeIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const CrepeIcon: React.FC<CrepeIconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      stroke={color}
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer crepe cone */}
      <path d="M64 120 L256 480 L448 120" />

      {/* Top rounded filling curve */}
      <path d="M64 120 Q256 40 448 120" />

      {/* Topping bumps */}
      <path d="M120 120 Q160 60 200 120" />
      <path d="M200 120 Q240 60 280 120" />
      <path d="M280 120 Q320 60 360 120" />
      <path d="M360 120 Q400 60 432 120" />

      {/* ⭐ Centered drizzle with bottom spacing */}
      <path
        d="
          M256 240
          Q300 255 256 285
          Q300 315 256 345
          Q300 370 256 390
        "
      />
    </svg>
  );
};

export default CrepeIcon;
