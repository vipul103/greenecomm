'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InfinityLogo = () => {
  const { scrollYProgress } = useScroll();
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div style={{ position: 'relative', width: 200, height: 200 }}>
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Real infinity path from your SVG logo */}
        <path
          id="realInfinityPath"
          d="M40,100 
             C40,60 100,60 100,100 
             C100,140 160,140 160,100 
             C160,60 100,60 100,100 
             C100,140 40,140 40,100"
          stroke="#151CA0"
          strokeWidth="14"
          fill="none"
        />

        {/* Light that follows the path */}
        <motion.circle
          r="10"
          fill="url(#glow)"
        >
          <animateMotion dur="6s" repeatCount="indefinite">
            <mpath href="#realInfinityPath" />
          </animateMotion>
        </motion.circle>

        {/* Glow effect */}
        <defs>
          <radialGradient id="glow" r="1">
            <stop offset="0%" stopColor="#E45983" stopOpacity="1" />
            <stop offset="100%" stopColor="#E45983" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default InfinityLogo;
