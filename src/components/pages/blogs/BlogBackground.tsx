"use client";

import { motion } from "framer-motion";

export default function BlogBackground() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        z-40
        overflow-hidden
      "
    >
      {/* =====================================================
          BASE AMBIENT BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-blue-500/[0.02]
          via-transparent
          to-purple-500/[0.03]
          dark:from-blue-500/[0.04]
          dark:via-transparent
          dark:to-cyan-500/[0.025]
        "
      />

      {/* =====================================================
          LARGE SOFT ORB — BLUE
      ====================================================== */}

      <motion.div
        className="absolute left-[8%] top-[18%]"
        animate={{
          x: [0, 25, 45, 20, 0],
          y: [0, 15, 30, 15, 0],
          scale: [0.85, 0.95, 1.05, 0.95, 0.85],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[230px] w-[230px]
            rounded-full
            bg-blue-600/[0.15]
            dark:bg-blue-400/[0.14]
            dark:shadow-[0_0_100px_rgba(59,130,246,0.28)]
          "
        />
      </motion.div>

      {/* =====================================================
          LARGE SOFT ORB — PURPLE
      ====================================================== */}

      <motion.div
        className="absolute left-[38%] top-[17%]"
        animate={{
          x: [-20, -40, -15, 15, -20],
          y: [0, 20, 38, 18, 0],
          scale: [0.8, 0.95, 1.05, 0.95, 0.8],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[250px] w-[250px]
            -translate-x-1/2
            rounded-full
            bg-purple-600/[0.17]
            dark:bg-purple-400/[0.14]
            dark:shadow-[0_0_110px_rgba(168,85,247,0.30)]
          "
        />
      </motion.div>

      {/* =====================================================
          LARGE SOFT ORB — RED
      ====================================================== */}

      <motion.div
        className="absolute right-[9%] top-[8%]"
        animate={{
          x: [0, 18, 32, 18, 0],
          y: [0, 18, 35, 18, 0],
          scale: [1, 1.04, 1.08, 1.04, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[280px] w-[280px]
            rounded-full
            bg-red-900/[0.17]
            dark:bg-red-400/[0.11]
            dark:shadow-[0_0_100px_rgba(248,113,113,0.24)]
          "
        />
      </motion.div>

      {/* =====================================================
          CYAN ORB — HEADING AREA
      ====================================================== */}

      <motion.div
        className="absolute left-[58%] top-[27%]"
        animate={{
          x: [-25, 0, 25, 8, -25],
          y: [-10, 10, 25, 8, -10],
          scale: [0.8, 0.95, 1.05, 0.95, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[210px] w-[210px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.13]
            dark:bg-cyan-300/[0.12]
            dark:shadow-[0_0_100px_rgba(34,211,238,0.30)]
          "
        />
      </motion.div>

      {/* =====================================================
          FOREGROUND FLOATING BLOB — BLUE/CYAN
          These intentionally stay ABOVE THE BLOG CARDS.
      ====================================================== */}

      <motion.div
        className="absolute left-[18%] top-[43%]"
        animate={{
          x: [0, 28, 55, 25, 0],
          y: [0, -20, 8, 22, 0],
          scale: [0.8, 1, 1.08, 0.95, 0.8],
          opacity: [0.7, 0.95, 0.75, 0.9, 0.7],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[68px] w-[68px]
            rounded-full
            bg-blue-400/25
            dark:bg-cyan-300/25
            dark:shadow-[0_0_28px_rgba(34,211,238,0.55)]
          "
        />
      </motion.div>

      {/* =====================================================
          FOREGROUND FLOATING BLOB — PURPLE
      ====================================================== */}

      <motion.div
        className="absolute left-[47%] top-[46%]"
        animate={{
          x: [0, -22, 18, 35, 0],
          y: [0, 18, -10, 15, 0],
          scale: [0.75, 0.95, 1.08, 0.9, 0.75],
          opacity: [0.65, 0.9, 0.75, 0.9, 0.65],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[58px] w-[58px]
            rounded-full
            bg-purple-400/25
            dark:bg-purple-300/24
            dark:shadow-[0_0_28px_rgba(192,132,252,0.55)]
          "
        />
      </motion.div>

      {/* =====================================================
          FOREGROUND FLOATING BLOB — CYAN
      ====================================================== */}

      <motion.div
        className="absolute right-[24%] top-[41%]"
        animate={{
          x: [0, -18, -35, -12, 0],
          y: [0, 20, -8, 16, 0],
          scale: [0.8, 1, 1.08, 0.95, 0.8],
          opacity: [0.7, 0.95, 0.75, 0.9, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[64px] w-[64px]
            rounded-full
            bg-cyan-400/25
            dark:bg-cyan-300/25
            dark:shadow-[0_0_32px_rgba(34,211,238,0.58)]
          "
        />
      </motion.div>

      {/* =====================================================
          FOREGROUND FLOATING BLOB — RED ACCENT
      ====================================================== */}

      <motion.div
        className="absolute right-[8%] top-[50%]"
        animate={{
          x: [0, -15, 10, -20, 0],
          y: [0, -15, 15, 5, 0],
          scale: [0.75, 0.95, 1, 0.9, 0.75],
          opacity: [0.55, 0.8, 0.65, 0.8, 0.55],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            h-[46px] w-[46px]
            rounded-full
            bg-red-400/20
            dark:bg-red-300/20
            dark:shadow-[0_0_25px_rgba(248,113,113,0.45)]
          "
        />
      </motion.div>

      {/* =====================================================
          SMALL NEON PARTICLES
      ====================================================== */}

      <motion.span
        className="
          absolute left-[27%] top-[42%]
          h-2 w-2 rounded-full
          bg-blue-400
          dark:bg-cyan-200
          dark:shadow-[0_0_14px_rgba(103,232,249,0.95)]
        "
        animate={{
          x: [0, 20, -10, 15, 0],
          y: [0, -15, 12, 20, 0],
          scale: [1, 1.5, 0.7, 1.3, 1],
          opacity: [0.4, 1, 0.5, 0.9, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="
          absolute left-[55%] top-[46%]
          h-1.5 w-1.5 rounded-full
          bg-purple-400
          dark:bg-purple-200
          dark:shadow-[0_0_13px_rgba(216,180,254,0.95)]
        "
        animate={{
          x: [0, -15, 20, 5, 0],
          y: [0, 15, -10, 20, 0],
          scale: [1, 1.6, 0.8, 1.4, 1],
          opacity: [0.3, 1, 0.4, 0.9, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="
          absolute right-[30%] top-[50%]
          h-2 w-2 rounded-full
          bg-cyan-400
          dark:bg-cyan-200
          dark:shadow-[0_0_15px_rgba(165,243,252,1)]
        "
        animate={{
          x: [0, 18, -8, 15, 0],
          y: [0, -12, 15, 5, 0],
          scale: [1, 1.5, 0.8, 1.3, 1],
          opacity: [0.3, 1, 0.4, 0.9, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          SOFT CENTRAL GLOW
      ====================================================== */}

      <motion.div
        className="absolute left-1/2 top-[30%]"
        animate={{
          scale: [1, 1.08, 1.02, 1.08, 1],
          opacity: [0.2, 0.35, 0.25, 0.35, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="
            h-[420px] w-[420px]
            -translate-x-1/2
            rounded-full
            bg-blue-400/[0.05]
            blur-[80px]
            dark:bg-cyan-400/[0.045]
          "
        />
      </motion.div>
    </div>
  );
}