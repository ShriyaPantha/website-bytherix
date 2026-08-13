import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RobotLaptopHero from "./RobotLaptopHero";

interface HeroProps {
  docked: boolean;
}

const ROTATING_WORDS = [
  "Web Applications",
  "AI Solutions",
  "Cybersecurity",
  "IoT Systems",
  "Robotics",
  "PCB Design",
  "Mobile Apps",
  "Smart Tools",
];

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    value: "10+",
    label: "Years of Experience",
    desc: "A decade of delivering innovative solutions.",
    bg: "bg-blue-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-4a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    value: "500+",
    label: "Happy Clients",
    desc: "Businesses trust us to bring their ideas to life.",
    bg: "bg-emerald-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16M6 8l-4 4 4 4M18 8l4 4-4 4" />
      </svg>
    ),
    value: "1000+",
    label: "Projects Delivered",
    desc: "Successful projects across diverse industries.",
    bg: "bg-purple-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "99%",
    label: "Client Satisfaction",
    desc: "Our commitment to quality drives client success.",
    bg: "bg-orange-500",
  },
];

const AVATARS = [
  { initials: "JD", ring: "ring-red-400/60", bg: "bg-red-500/20", text: "text-red-300" },
  { initials: "AK", ring: "ring-blue-400/60", bg: "bg-blue-500/20", text: "text-blue-300" },
  { initials: "SN", ring: "ring-purple-400/60", bg: "bg-purple-500/20", text: "text-purple-300" },
];

const DOTS = [
  // Upper & mid section stars (strictly confined away from top-left)
  { startX: 35, startY: 15, endX: 38, endY: 55, size: 2, duration: 18, delay: 0 },
  { startX: 45, startY: 8, endX: 42, endY: 45, size: 1, duration: 24, delay: 1.2 },
  { startX: 52, startY: 25, endX: 48, endY: 65, size: 1, duration: 22, delay: 2 },
  { startX: 62, startY: 12, endX: 65, endY: 50, size: 2, duration: 20, delay: 0.8 },
  { startX: 72, startY: 18, endX: 69, endY: 60, size: 1, duration: 26, delay: 3.1 },
  { startX: 80, startY: 8, endX: 77, endY: 48, size: 2, duration: 19, delay: 1.5 },
  { startX: 88, startY: 22, endX: 85, endY: 62, size: 1, duration: 23, delay: 2.4 },
  { startX: 95, startY: 12, endX: 92, endY: 52, size: 2, duration: 21, delay: 0.3 },

  // Lower & side section stars
  { startX: 15, startY: 40, endX: 18, endY: 80, size: 2, duration: 17, delay: 1.9 },
  { startX: 28, startY: 65, endX: 25, endY: 25, size: 1, duration: 21, delay: 4.2 },
  { startX: 55, startY: 60, endX: 60, endY: 20, size: 1, duration: 25, delay: 4 },
  { startX: 68, startY: 35, endX: 64, endY: 75, size: 2, duration: 19, delay: 3 },
  { startX: 82, startY: 50, endX: 78, endY: 12, size: 1, duration: 23, delay: 0.5 },
  { startX: 48, startY: 82, endX: 44, endY: 35, size: 1, duration: 17, delay: 2.5 },
  { startX: 90, startY: 45, endX: 85, endY: 85, size: 2, duration: 24, delay: 1.5 },
  { startX: 62, startY: 40, endX: 58, endY: 5, size: 2, duration: 22, delay: 3.5 },
  { startX: 75, startY: 68, endX: 70, endY: 22, size: 1, duration: 19, delay: 1 },
  { startX: 35, startY: 75, endX: 39, endY: 30, size: 2, duration: 20, delay: 2.8 },

  // Extra mid-sky & left-side stars (kept away from logo)
  { startX: 22, startY: 28, endX: 26, endY: 58, size: 1, duration: 27, delay: 0.6 },
  { startX: 38, startY: 42, endX: 33, endY: 72, size: 2, duration: 21, delay: 1.8 },
  { startX: 58, startY: 12, endX: 61, endY: 42, size: 1, duration: 25, delay: 3.8 },
  { startX: 70, startY: 48, endX: 74, endY: 78, size: 1, duration: 18, delay: 2.1 },
  { startX: 12, startY: 55, endX: 16, endY: 88, size: 2, duration: 23, delay: 0.9 },
  { startX: 85, startY: 70, endX: 80, endY: 35, size: 1, duration: 20, delay: 4.5 },
  { startX: 42, startY: 55, endX: 46, endY: 22, size: 2, duration: 26, delay: 1.4 },
];

const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Standard, balanced blue space-sky gradient */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#0b1329] via-[#101e42] to-[#1d3566]" />

      {/* Atmospheric depth wash */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(3,7,18,0) 50%, rgba(59,130,246,0.18) 100%)",
        }}
      />

      {/* Main soft glowing nebula – kept on the right, behind the robot */}
      <div className="absolute right-[10%] top-[20%] h-[55%] w-[45%] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-[25%] top-[8%] h-[30%] w-[25%] rounded-full bg-sky-400/15 blur-[90px]" />

      {/* Soft nebula clouds – lower / mid only */}
      <div className="absolute left-[5%] top-[45%] h-[35%] w-[30%] rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="absolute left-[35%] top-[55%] h-[25%] w-[35%] rounded-full bg-cyan-500/8 blur-[90px]" />

      {/* Galactic dust – right side only */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse at 70% -20%, rgba(59,130,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)",
        }}
      />

      {/* ===== PLANETS – ALL STRICTLY IN LOWER HERO (bottom 40%) ===== */}

      {/* Planet 1 – Bottom Left */}
      <div className="absolute bottom-[14%] left-[4%] overflow-visible pointer-events-none">
        <div
          className="rounded-full opacity-80"
          style={{
            width: "48px",
            height: "48px",
            background:
              "radial-gradient(circle at 38% 32%, rgba(196,181,253,0.95) 0%, rgba(124,58,237,0.55) 55%, rgba(67,20,167,0.15) 100%)",
            boxShadow: "0 0 22px 4px rgba(139,92,246,0.35)",
          }}
        />
      </div>

      {/* Planet 2 – Bottom Right */}
      <div className="absolute bottom-[10%] right-[5%] overflow-visible pointer-events-none">
        <div
          className="rounded-full opacity-75"
          style={{
            width: "64px",
            height: "64px",
            background:
              "radial-gradient(circle at 35% 30%, rgba(147,197,253,0.9) 0%, rgba(59,130,246,0.55) 55%, rgba(30,58,138,0.2) 100%)",
            boxShadow: "0 0 26px 4px rgba(59,130,246,0.3)",
          }}
        />
      </div>

      {/* Planet 3 – Bottom Center-Right */}
      <div className="absolute bottom-[3%] right-[28%] overflow-visible pointer-events-none">
        <div
          className="rounded-full opacity-65"
          style={{
            width: "34px",
            height: "34px",
            background:
              "radial-gradient(circle at 35% 30%, rgba(165,243,252,0.85) 0%, rgba(14,165,233,0.45) 55%, rgba(7,89,133,0.1) 100%)",
            boxShadow: "0 0 14px 2px rgba(14,165,233,0.25)",
          }}
        />
      </div>

      {/* Planet 4 – Bottom Left-Center (warm) */}
      <div className="absolute bottom-[6%] left-[18%] overflow-visible pointer-events-none">
        <div
          className="rounded-full opacity-70"
          style={{
            width: "26px",
            height: "26px",
            background:
              "radial-gradient(circle at 40% 28%, rgba(253,186,116,0.9) 0%, rgba(234,88,12,0.5) 50%, rgba(124,45,18,0.15) 100%)",
            boxShadow: "0 0 12px 2px rgba(249,115,22,0.3)",
          }}
        />
      </div>

      {/* Planet 5 – Tiny distant planet */}
      <div className="absolute bottom-[22%] left-[11%] overflow-visible pointer-events-none">
        <div
          className="rounded-full opacity-55"
          style={{
            width: "14px",
            height: "14px",
            background:
              "radial-gradient(circle at 35% 30%, rgba(186,230,253,0.9) 0%, rgba(56,189,248,0.4) 60%, rgba(7,89,133,0.1) 100%)",
            boxShadow: "0 0 8px 1px rgba(56,189,248,0.25)",
          }}
        />
      </div>

      {/* Floating star-dots */}
      {DOTS.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-float"
          style={
            {
              left: `${dot.startX}%`,
              top: `${dot.startY}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              boxShadow: "0 0 6px 2px rgba(255,255,255,0.7)",
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
              "--tx": `${dot.endX - dot.startX}vw`,
              "--ty": `${dot.endY - dot.startY}vh`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Very subtle streaks */}
      <div
        className="absolute opacity-30"
        style={{
          top: "48%",
          left: "55%",
          width: "70px",
          height: "1.5px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
          transform: "rotate(-20deg)",
          filter: "blur(0.5px)",
        }}
      />

      {/* Seamless bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#0b1329] to-transparent" />
    </div>
  );
};

const Hero = ({ docked }: HeroProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const displayWord = ROTATING_WORDS[index];

  return (
    <section
      className="
        relative isolate z-10 flex flex-col justify-center
        h-auto min-h-fit overflow-visible
        py-8
        lg:h-[calc(100vh-6rem)] lg:min-h-640px lg:overflow-hidden lg:py-0
      "
    >
      {/* ===== Background — untouched ===== */}
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center">
        {/* ===== LEFT SIDE — text column ===== */}
        <div
          className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left transition-all duration-700 ease-out"
          style={{
            opacity: docked ? 1 : 0,
            transform: docked ? "translateY(0)" : "translateY(16px)",
            transitionDelay: docked ? "0.3s" : "0s",
          }}
        >
          {/* WE BUILD + rotating text */}
          {/* WE BUILD + rotating text */}
<div className="mt-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
    We Build
  </h1>

  <div className="overflow-hidden py-1 flex justify-center lg:justify-start lg:pl-[7.8em]">
    <AnimatePresence mode="wait">
      <motion.h2
        key={displayWord}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="
          whitespace-nowrap
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-extrabold
          leading-[1.05]
          tracking-tight
          bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent
        "
      >
        {displayWord}
      </motion.h2>
    </AnimatePresence>
  </div>
</div>

          <p className="mt-3 max-w-md mx-auto lg:mx-0 text-white/60 leading-relaxed text-sm px-2 sm:px-0">
            A full-spectrum technology partner delivering web and mobile
            applications, AI-driven solutions, IoT systems, robotics, and PCB
            design — engineered with enterprise-grade cybersecurity at every
            layer, from architecture to deployment.
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-[#0a0f1e] bg-white hover:bg-white/90 transition-all duration-200 text-sm shadow-lg shadow-black/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Explore Services
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a href="#video" className="inline-flex items-center gap-3 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 group-hover:bg-blue-500/30 transition-colors shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-left">
                <span className="block text-sm font-medium text-white">Watch Our Video</span>
                <span className="block text-xs text-white/40">See how we work</span>
              </span>
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2 shrink-0">
              {AVATARS.map((a) => (
                <span
                  key={a.initials}
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${a.bg} ring-2 ${a.ring} ${a.text} text-[10px] font-bold`}
                >
                  {a.initials}
                </span>
              ))}
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 ring-2 ring-blue-400/60 text-white text-[9px] font-bold">
                2.4K+
              </span>
            </div>
            <div className="text-xs text-left">
              <p className="text-white/70 font-medium">Trusted by 1K+ Clients</p>
              <div className="flex items-center gap-1 mt-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="#facc15" className="w-3.5 h-3.5">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <span className="text-white/40 ml-1">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== RIGHT SIDE — Robot + laptop — desktop only, untouched component ===== */}
      <div className="hidden lg:flex absolute right-[4%] top-[52%] -translate-y-1/2 items-center justify-end w-[40%] max-w-720px z-10 pointer-events-none">
        <div className="pointer-events-auto w-full">
          <RobotLaptopHero />
        </div>
      </div>

      {/* Mobile/tablet fallback */}
      <div className="relative z-10 flex lg:hidden justify-center px-4 pt-8">
        <div className="relative isolate w-full max-w-220px sm:max-w-xs aspect-square overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center scale-90 sm:scale-100 origin-center">
            <RobotLaptopHero />
          </div>
        </div>
      </div>

      {/* ===== Bottom stats bar ===== */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 lg:mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/0.04 backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-4 sm:py-5">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 sm:gap-2">
              <span className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full ${s.bg} text-white`}>
                {s.icon}
              </span>
              <p className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">{s.value}</p>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white/90">{s.label}</p>
                <p className="text-[11px] sm:text-xs text-white/40 mt-0.5 leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;