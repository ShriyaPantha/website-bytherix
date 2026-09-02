"use client";

import { motion } from "framer-motion";

export default function BlogBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Very subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.03]" />

      {/* =========================================================
          BURGUNDY/WINE CIRCLE - TOP RIGHT AREA
          Movement: Right side, top → down curve, then fades
      ========================================================= */}

      <motion.div
        className="absolute right-[15%] top-[5%]"
        animate={{
          x: [0, 15, 35, 50, 40],
          y: [0, 35, 80, 120, 160],
          scale: [1, 1.05, 1.08, 0.9, 0.4],
          opacity: [0.8, 0.8, 0.7, 0.5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[280px]
            w-[280px]
            rounded-full
            bg-red-900/[0.25]
            blur-[1px]
          "
        />
      </motion.div>

      {/* =========================================================
          PURPLE CIRCLE - TOP CENTER TO BOTTOM LEFT
          Movement: Top center → left-center → bottom left
      ========================================================= */}

      <motion.div
        className="absolute left-[50%] top-[8%]"
        animate={{
          x: [-50, -80, -120, -90, -40, 20, -50],
          y: [0, 50, 100, 180, 240, 280, 0],
          scale: [0.6, 0.8, 1.1, 1.05, 0.8, 0.7, 0.6],
          opacity: [0.3, 0.5, 0.7, 0.6, 0.5, 0.4, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[240px]
            w-[240px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.28]
            blur-[1px]
          "
        />
      </motion.div>

      {/* =========================================================
          PINK/MAUVE CIRCLE - BOTTOM RIGHT AREA
          Movement: Bottom right region with smooth transitions
      ========================================================= */}

      <motion.div
        className="absolute right-[12%] bottom-[15%]"
        animate={{
          x: [0, -20, -50, -80, -60, 0],
          y: [0, 40, 80, 100, 140, 0],
          scale: [1, 1.04, 1.08, 1.02, 0.95, 1],
          opacity: [0.4, 0.5, 0.6, 0.55, 0.45, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[250px]
            w-[250px]
            rounded-full
            bg-pink-800/[0.22]
            blur-[1px]
          "
        />
      </motion.div>

      {/* =========================================================
          BLUE CIRCLE - BOTTOM LEFT TO CENTER
          Movement: Bottom left, moves right and up
      ========================================================= */}

      <motion.div
        className="absolute left-[8%] bottom-[12%]"
        animate={{
          x: [0, 40, 80, 100, 60, 0],
          y: [0, -40, -80, -100, -120, 0],
          scale: [0.8, 0.9, 1.05, 1.08, 1, 0.8],
          opacity: [0.35, 0.45, 0.6, 0.65, 0.5, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[260px]
            w-[260px]
            rounded-full
            bg-blue-600/[0.24]
            blur-[1px]
          "
        />
      </motion.div>

      {/* =========================================================
          SECONDARY INDIGO CIRCLE - TOP LEFT AREA
          Movement: Upper left region with subtle motion
      ========================================================= */}

      <motion.div
        className="absolute left-[18%] top-[12%]"
        animate={{
          x: [0, 35, 60, 70, 40, 0],
          y: [0, 30, 60, 90, 110, 0],
          scale: [0.7, 0.8, 0.95, 1.05, 0.9, 0.7],
          opacity: [0.2, 0.3, 0.45, 0.5, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[200px]
            w-[200px]
            rounded-full
            bg-indigo-600/[0.2]
            blur-[1px]
          "
        />
      </motion.div>

      {/* =========================================================
          CYAN CIRCLE - CENTER AREA
          Movement: Central region with circular path
      ========================================================= */}

      <motion.div
        className="absolute left-1/2 top-1/2"
        animate={{
          x: [-40, 20, 60, 40, -20, -40],
          y: [-50, -20, 10, 50, 70, -50],
          scale: [0.75, 0.85, 0.95, 1.05, 1, 0.75],
          opacity: [0.25, 0.35, 0.5, 0.55, 0.4, 0.25],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[220px]
            w-[220px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.18]
            blur-[1px]
          "
        />
      </motion.div>

      {/* =========================================================
          VERY SOFT LARGE BACKGROUND ORB - Center
      ========================================================= */}

      <motion.div
        className="absolute left-1/2 top-1/2"
        animate={{
          scale: [1, 1.1, 1.05, 1, 1.08, 1],
          opacity: [0.4, 0.5, 0.45, 0.4, 0.48, 0.4],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="
            h-[400px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-400/[0.08]
            blur-[60px]
          "
        />
      </motion.div>

      {/* =========================================================
          SOFT LARGE BACKGROUND ORB - Upper
      ========================================================= */}

      <motion.div
        className="absolute left-1/2 top-[25%]"
        animate={{
          scale: [1, 1.12, 1.08, 1.02, 1.1, 1],
          opacity: [0.35, 0.45, 0.4, 0.35, 0.42, 0.35],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="
            h-[380px]
            w-[380px]
            -translate-x-1/2
            rounded-full
            bg-indigo-500/[0.06]
            blur-[75px]
          "
        />
      </motion.div>

      {/* =========================================================
          SMALL ACCENT PARTICLES
      ========================================================= */}

      <motion.span
        className="absolute left-[35%] top-[25%] h-2.5 w-2.5 rounded-full bg-blue-400/40"
        animate={{
          x: [0, 25, 40, 20, 0],
          y: [0, -15, 10, 25, 0],
          scale: [1, 1.2, 1, 1.1, 1],
          opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute right-[30%] top-[40%] h-2 w-2 rounded-full bg-purple-400/35"
        animate={{
          x: [0, -20, 10, 15, 0],
          y: [0, 20, -15, 10, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
          opacity: [0.25, 0.55, 0.3, 0.45, 0.25],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute left-[28%] bottom-[25%] h-2.5 w-2.5 rounded-full bg-cyan-400/30"
        animate={{
          x: [0, 30, 50, 30, 0],
          y: [0, -25, -10, 20, 0],
          scale: [1, 1.1, 1.2, 1.05, 1],
          opacity: [0.2, 0.5, 0.6, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute right-[22%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-pink-400/25"
        animate={{
          x: [0, -15, 20, 10, 0],
          y: [0, 15, -20, 5, 0],
          opacity: [0.15, 0.45, 0.25, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}