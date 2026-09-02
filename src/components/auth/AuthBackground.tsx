import { motion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Cpu,
  Network,
  Rocket,
  Sparkles,
} from "lucide-react";

const particles = [
  { left: "8%", top: "18%", size: 3, delay: 0 },
  { left: "17%", top: "42%", size: 2, delay: 1.2 },
  { left: "25%", top: "72%", size: 3, delay: 0.6 },
  { left: "35%", top: "16%", size: 2, delay: 1.8 },
  { left: "43%", top: "82%", size: 2, delay: 0.9 },
  { left: "54%", top: "25%", size: 3, delay: 1.5 },
  { left: "63%", top: "74%", size: 2, delay: 0.3 },
  { left: "72%", top: "16%", size: 3, delay: 1.1 },
  { left: "81%", top: "47%", size: 2, delay: 2 },
  { left: "91%", top: "27%", size: 3, delay: 0.7 },
  { left: "86%", top: "82%", size: 2, delay: 1.7 },
  { left: "12%", top: "86%", size: 2, delay: 2.2 },
];

const nodes = [
  {
    icon: BrainCircuit,
    label: "AI",
    left: "9%",
    top: "27%",
  },
  {
    icon: Code2,
    label: "CODE",
    left: "78%",
    top: "23%",
  },
  {
    icon: Cpu,
    label: "TECH",
    left: "84%",
    top: "67%",
  },
  {
    icon: Network,
    label: "NETWORK",
    left: "8%",
    top: "72%",
  },
  {
    icon: Rocket,
    label: "BUILD",
    left: "48%",
    top: "10%",
  },
];

// Pulsing circuit-joint dots — sit at implied intersections
// of the PCB trace layer, distinct from the floating tech
// label chips. Kept sparse to avoid visual clutter.
const circuitJoints = [
  { left: "6%", top: "34%", color: "cyan", delay: 0 },
  { left: "22%", top: "61%", color: "green", delay: 0.8 },
  { left: "68%", top: "38%", color: "cyan", delay: 1.6 },
  { left: "89%", top: "58%", color: "green", delay: 0.4 },
  { left: "38%", top: "12%", color: "cyan", delay: 2.1 },
];

const AuthBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* =========================================================
          BASE
      ========================================================== */}
      <div className="absolute inset-0 bg-[#03050b]" />

      {/* =========================================================
          PCB CIRCUIT-TRACE LAYER
          Etched right-angle traces + via-dots, tiled.
          This is the primary texture that reads as
          "circuit board", distinct from the soft aurora glows.
      ========================================================== */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern
            id="circuitTrace"
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 30 H45 V70 H100 V0"
              fill="none"
              stroke="var(--color-logo-cyan)"
              strokeWidth="1"
            />
            <path
              d="M140 95 H95 V55 H30 V140"
              fill="none"
              stroke="var(--color-logo-blue)"
              strokeWidth="1"
            />
            <path
              d="M60 0 V25 H140"
              fill="none"
              stroke="var(--color-logo-cyan)"
              strokeWidth="0.75"
            />

            <circle cx="45" cy="30" r="2" fill="var(--color-logo-cyan)" />
            <circle cx="100" cy="70" r="2" fill="var(--color-logo-blue)" />
            <circle cx="95" cy="95" r="1.6" fill="var(--color-logo-blue)" />
            <circle cx="30" cy="55" r="1.6" fill="var(--color-logo-cyan)" />
            <circle cx="60" cy="25" r="1.4" fill="var(--color-logo-cyan)" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#circuitTrace)" />
      </svg>

      {/* =========================================================
          SOFT AURORA GLOWS
          Retuned to brand tokens (blue / green / cyan).
          Red intentionally withheld from the ambient background —
          it stays reserved for the logo badge in AuthCard.
      ========================================================== */}

      {/* Top-left blue glow */}
      <motion.div
        className="absolute -left-[18%] -top-[20%] h-[620px] w-[620px] rounded-full bg-logo-blue/[0.14] blur-[130px]"
        animate={{
          x: [0, 45, 0],
          y: [0, 25, 0],
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom-right green glow */}
      <motion.div
        className="absolute -bottom-[24%] -right-[18%] h-[680px] w-[680px] rounded-full bg-logo-green/[0.10] blur-[145px]"
        animate={{
          x: [0, -35, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center cyan atmospheric glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-logo-cyan/[0.05] blur-[110px] sm:h-[560px] sm:w-[560px]"
        animate={{
          scale: [0.95, 1.08, 0.95],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small cyan glow */}
      <motion.div
        className="absolute left-[45%] top-[5%] h-[230px] w-[230px] rounded-full bg-logo-cyan/[0.035] blur-[100px]"
        animate={{
          x: [0, 60, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          SUBTLE GRID
      ========================================================== */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(148,163,184,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148,163,184,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* =========================================================
          RADIAL VIGNETTE
      ========================================================== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 15%, rgba(3,5,11,0.18) 48%, rgba(3,5,11,0.82) 100%)",
        }}
      />

      {/* =========================================================
          DESKTOP CENTERPIECE
          Large faint rotating hexagon outline + a soft diagonal
          light streak — echoes the reference's glass polyhedron
          and lightning slash without competing with the card.
          Desktop only; omitted on mobile for a clean composition.
      ========================================================== */}
      <div className="absolute right-[8%] top-[10%] hidden h-[360px] w-[360px] lg:block">
        <motion.svg
          viewBox="0 0 200 200"
          className="h-full w-full opacity-[0.09]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="100,6 176,50 176,150 100,194 24,150 24,50"
            fill="none"
            stroke="var(--color-logo-cyan)"
            strokeWidth="1"
          />
          <polygon
            points="100,34 152,64 152,136 100,166 48,136 48,64"
            fill="none"
            stroke="var(--color-logo-blue)"
            strokeWidth="0.6"
          />
        </motion.svg>
      </div>

      {/* Diagonal energy streak */}
      <div
        className="absolute -left-[10%] top-0 hidden h-full w-[3px] rotate-[18deg] opacity-[0.06] lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 45%, transparent 80%)",
          filter: "blur(1px)",
        }}
      />

      {/* =========================================================
          FLOATING PARTICLES
      ========================================================== */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className={`absolute rounded-full ${
            index % 3 === 0 ? "bg-logo-green" : "bg-logo-cyan"
          }`}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow:
              index % 3 === 0
                ? "0 0 12px rgba(23,182,167,0.75)"
                : "0 0 12px rgba(56,189,248,0.75)",
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.12, 0.65, 0.12],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + (index % 4),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =========================================================
          PULSING CIRCUIT JOINTS
          Small glowing intersections that breathe — reads as
          "live" circuitry. Sparse by design.
      ========================================================== */}
      {circuitJoints.map((joint, index) => (
        <motion.span
          key={`joint-${index}`}
          className="absolute hidden rounded-full sm:block"
          style={{
            left: joint.left,
            top: joint.top,
            width: 4,
            height: 4,
            backgroundColor:
              joint.color === "cyan"
                ? "var(--color-logo-cyan)"
                : "var(--color-logo-green)",
            boxShadow:
              joint.color === "cyan"
                ? "0 0 10px rgba(56,189,248,0.8)"
                : "0 0 10px rgba(23,182,167,0.8)",
          }}
          animate={{
            opacity: [0.15, 0.85, 0.15],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 3.2,
            delay: joint.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =========================================================
          LARGE FLOATING GLASS ORBS
      ========================================================== */}

      {/* Orb 1 — blue */}
      <motion.div
        className="absolute left-[12%] top-[17%] hidden h-28 w-28 rounded-full border border-logo-cyan/[0.09] bg-logo-blue/[0.03] blur-[0.2px] backdrop-blur-sm sm:block"
        animate={{
          y: [0, -18, 0],
          x: [0, 8, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-5 rounded-full border border-white/[0.04]" />

        <div className="absolute left-7 top-6 h-2 w-2 rounded-full bg-logo-cyan/40 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
      </motion.div>

      {/* Orb 2 — green */}
      <motion.div
        className="absolute bottom-[14%] right-[13%] hidden h-36 w-36 rounded-full border border-logo-green/[0.09] bg-logo-green/[0.025] backdrop-blur-sm sm:block"
        animate={{
          y: [0, 20, 0],
          x: [0, -12, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-7 rounded-full border border-white/[0.04]" />

        <div className="absolute bottom-8 right-8 h-2 w-2 rounded-full bg-logo-green/40 shadow-[0_0_18px_rgba(23,182,167,0.8)]" />
      </motion.div>

      {/* Tiny orb — cyan */}
      <motion.div
        className="absolute right-[28%] top-[13%] h-10 w-10 rounded-full border border-logo-cyan/[0.12] bg-logo-cyan/[0.025]"
        animate={{
          y: [0, -12, 0],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          NEURAL / CIRCUIT CONNECTION LINES
          Includes one traveling energy pulse along the first path.
      ========================================================== */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineBrand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-logo-cyan)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-logo-cyan)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--color-logo-green)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          id="pulsePath"
          d="M80 210 C280 110, 360 320, 550 190 S880 90, 1080 210 S1270 290, 1390 150"
          fill="none"
          stroke="url(#lineBrand)"
          strokeWidth="1"
          strokeDasharray="5 13"
          animate={{
            strokeDashoffset: [0, -180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M30 720 C240 610, 350 760, 540 650 S850 560, 1030 700 S1240 790, 1420 620"
          fill="none"
          stroke="url(#lineBrand)"
          strokeWidth="1"
          strokeDasharray="4 16"
          animate={{
            strokeDashoffset: [0, 220],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M180 470 C360 380, 450 520, 650 430 S930 360, 1210 480"
          fill="none"
          stroke="url(#lineBrand)"
          strokeWidth="0.7"
          strokeDasharray="3 18"
          animate={{
            strokeDashoffset: [0, -200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

               {/* Traveling energy pulse along the first path */}
        <circle
          r="3.5"
          fill="var(--color-logo-cyan)"
          style={{ filter: "drop-shadow(0 0 6px rgba(56,189,248,0.9))" }}
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M80 210 C280 110, 360 320, 550 190 S880 90, 1080 210 S1270 290, 1390 150"
          />
        </circle>
      </svg>

      {/* =========================================================
          FLOATING TECH LABELS
          Kept VERY subtle
      ========================================================== */}
      {nodes.map((node, index) => {
        const Icon = node.icon;
        const isGreen = index % 2 === 1;

        return (
          <motion.div
            key={node.label}
            className="absolute hidden sm:block"
            style={{
              left: node.left,
              top: node.top,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.16, 0.38, 0.16],
            }}
            transition={{
              duration: 5 + index,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.018] px-3 py-2 backdrop-blur-md">
              <Icon
                className={`h-3.5 w-3.5 ${
                  isGreen ? "text-logo-green/60" : "text-logo-cyan/60"
                }`}
              />

              <span className="text-[8px] font-medium tracking-[0.22em] text-white/25">
                {node.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* =========================================================
          CENTRAL AURA RING
          Very subtle — does NOT dominate the card
      ========================================================== */}
      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 sm:h-[480px] sm:w-[480px] lg:h-[650px] lg:w-[650px]">
        <motion.div
          className="absolute inset-0 rounded-full border border-logo-cyan/[0.04]"
          animate={{
            scale: [1, 1.04, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        <motion.div
          className="absolute inset-[13%] rounded-full border border-logo-green/[0.025]"
          animate={{
            scale: [1, 0.96, 1],
            rotate: [360, 0],
          }}
          transition={{
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />

        {/* Central light */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-logo-blue/[0.04] blur-3xl sm:h-40 sm:w-40"
          animate={{
            scale: [0.8, 1.25, 0.8],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* =========================================================
          AMBIENT HUD STATUS CHIP
          Restrained echo of the reference's side widgets.
          Desktop only, single element, non-interactive.
      ========================================================== */}
      <motion.div
        className="absolute bottom-10 right-8 hidden flex-col gap-1 rounded-lg border border-logo-green/[0.15] bg-white/[0.015] px-3 py-2 backdrop-blur-md xl:flex"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-logo-green shadow-[0_0_8px_rgba(23,182,167,0.9)]" />
          <span className="text-[8px] font-semibold tracking-[0.18em] text-logo-green/80">
            SYSTEM ONLINE
          </span>
        </div>

        <span className="text-[7px] tracking-[0.16em] text-white/25">
          SECURITY ENHANCED
        </span>
      </motion.div>

      {/* =========================================================
          BRANDING DETAIL
      ========================================================== */}
      <div className="absolute bottom-7 left-7 hidden items-center gap-3 lg:flex">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025]">
          <Sparkles className="h-3.5 w-3.5 text-logo-cyan/40" />
        </div>

        <div>
          <div className="text-[8px] font-semibold tracking-[0.3em] text-white/20">
            BYTHERIX
          </div>

          <div className="mt-0.5 text-[7px] tracking-[0.2em] text-white/10">
            DIGITAL NEXUS
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE EXTRA GLOW
          Makes the phone frame pop without clutter
      ========================================================== */}
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-logo-blue/[0.03] blur-[90px] md:hidden" />
    </div>
  );
};

export default AuthBackground;