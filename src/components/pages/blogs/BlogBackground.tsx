"use client";

import { motion } from "framer-motion";

const circles = [
  {
    className:
      "absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl",
    animate: {
      x: [0, 80, 20, 0],
      y: [0, 40, -20, 0],
      scale: [1, 1.15, 0.95, 1],
    },
    duration: 12,
  },
  {
    className:
      "absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-purple-300/40 blur-3xl",
    animate: {
      x: [0, -70, -20, 0],
      y: [0, 60, -30, 0],
      scale: [1, 0.9, 1.12, 1],
    },
    duration: 14,
  },
  {
    className:
      "absolute bottom-[-100px] left-[35%] h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl",
    animate: {
      x: [0, -50, 50, 0],
      y: [0, -40, 20, 0],
      scale: [1, 1.1, 0.92, 1],
    },
    duration: 16,
  },
  {
    className:
      "absolute right-[25%] top-[35%] h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl",
    animate: {
      x: [0, 60, -40, 0],
      y: [0, -30, 40, 0],
    },
    duration: 11,
  },
];

export default function BlogBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={circle.className}
          animate={circle.animate}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-white/45" />
    </div>
  );
}