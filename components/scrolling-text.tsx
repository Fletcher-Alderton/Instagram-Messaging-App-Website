import React from "react";

interface ScrollingTextProps {
  children: React.ReactNode;
  duration?: number; // Duration in seconds for one full scroll cycle
}

const ScrollingText: React.FC<ScrollingTextProps> = ({
  children,
  duration = 20, // Default duration: 20 seconds
}) => {
  const animationStyle = {
    animation: `scroll ${duration}s linear infinite`,
  };

  return (
    <div className="overflow-hidden whitespace-nowrap text-[#c7b3b4] font-bold">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(-50%); } /* Start shifted left */
            100% { transform: translateX(0%); }   /* End at original position */
          }
        `}
      </style>
      <div
        className="inline-block text-4xl md:text-6xl lg:text-8xl tracking-tight whitespace-nowrap"
        style={animationStyle}
      >
        {/* Repeat children to create seamless loop effect */}
        <span className="inline-block mr-8">{children}</span>
        <span className="inline-block mr-8">{children}</span>
        <span className="inline-block mr-8">{children}</span>
        <span className="inline-block mr-8">{children}</span>
      </div>
    </div>
  );
};

export default ScrollingText; 