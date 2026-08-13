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
      {/* Smooth linear space-sky gradient */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#050b1d] via-[#091638] to-[#142856]" />

      {/* Atmospheric depth wash */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,58,138,0.25) 0%, rgba(3,7,18,0) 50%, rgba(29,78,216,0.2) 100%)",
        }}
      />

      {/* Main soft glowing nebula – kept on the right, behind the robot */}
      <div className="absolute right-[10%] top-[20%] h-[55%] w-[45%] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-[25%] top-[8%] h-[30%] w-[25%] rounded-full bg-sky-400/15 blur-[90px]" />

      {/* Soft nebula clouds – lower / mid only, never near logo */}
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

      {/* Planet 2 – Bottom Right (original) */}
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

      {/* Planet 3 – Bottom Center-Right (original) */}
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

      {/* Planet 5 – Tiny distant planet, still low left */}
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

      {/* Very subtle streaks – mid/lower only */}
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
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-[#050b1d] to-transparent" />
    </div>
  );
};

export default HeroBackground;