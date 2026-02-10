'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SashikoDividerProps {
  className?: string;
  variant?: 'light' | 'dark'; // Light for dark bg, Dark for light bg
}

export function SashikoPatternDivider({
  className,
  variant = 'dark'
}: SashikoDividerProps) {
  const strokeColor = variant === 'dark' ? '#1B263B' : '#FDFCF0'; // Indigo or Cream

  // Simple Sashiko-inspired pattern (a wave/stitch)
  // Using a simpler path for smooth animation than the complex grid
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className={cn("w-full h-12 overflow-hidden flex items-center justify-center opacity-100", className)}>
      <motion.svg
        width="100%"
        height="40"
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Horizontal dashed line simulating running stitch */}
        <motion.path
          d="M0 20 H1200"
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray="10 10" // Initial dash
          variants={pathVariants}
        />

        {/* Decorative cross stitches at intervals */}
        {[100, 300, 500, 700, 900, 1100].map((x, i) => (
          <motion.g key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: i * 0.1 + 0.5, duration: 0.5 }
            }}
          >
            <path d={`M${x - 5} 15 L${x + 5} 25 M${x + 5} 15 L${x - 5} 25`} stroke={strokeColor} strokeWidth="2" />
          </motion.g>
        ))}
      </motion.svg>
    </div>
  );
}
