

import React from 'react';

const KebabDrinkLogo = ({ size = 28, color = "#000000", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spreads event handlers like onClick
      style={{ cursor: props.onClick ? 'pointer' : 'default', ...props.style }}
    >
      {/* Left Side: The Skewer */}
      <g id="skewer">
        {/* Main Vertical Stick */}
        <rect x="50" y="20" width="12" height="160" fill={color} />
        {/* Top Horizontal Piece (Rounded) */}
        <rect x="15" y="45" width="82" height="40" rx="20" fill={color} />
        {/* Bottom Horizontal Piece (Rounded) */}
        <rect x="15" y="95" width="82" height="40" rx="20" fill={color} />
      </g>

      {/* Right Side: The Glass */}
      <g id="glass">
        {/* Top Cup Section */}
        <path
          d="M125 20H190V95C190 115 175 130 157.5 130C140 130 125 115 125 95V20Z"
          fill={color}
        />
        {/* Stem */}
        <rect x="151.5" y="130" width="12" height="40" fill={color} />
        {/* Base */}
        <rect x="130" y="170" width="55" height="10" fill={color} />
      </g>
    </svg>
  );
};

export default KebabDrinkLogo;