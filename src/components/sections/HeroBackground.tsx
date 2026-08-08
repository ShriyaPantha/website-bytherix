const DOTS = [
  { startX: 8, startY: 20, endX: 12, endY: 60, size: 3, duration: 18, delay: 0 },
  { startX: 22, startY: 55, endX: 28, endY: 10, size: 2, duration: 22, delay: 2 },
  { startX: 38, startY: 15, endX: 34, endY: 70, size: 3, duration: 20, delay: 1 },
  { startX: 55, startY: 60, endX: 60, endY: 20, size: 2, duration: 25, delay: 4 },
  { startX: 68, startY: 25, endX: 64, endY: 75, size: 3, duration: 19, delay: 3 },
  { startX: 82, startY: 50, endX: 78, endY: 12, size: 2, duration: 23, delay: 0.5 },
  { startX: 15, startY: 78, endX: 20, endY: 30, size: 2, duration: 21, delay: 5 },
  { startX: 48, startY: 82, endX: 44, endY: 35, size: 3, duration: 17, delay: 2.5 },
  { startX: 90, startY: 18, endX: 85, endY: 65, size: 2, duration: 24, delay: 1.5 },
  { startX: 30, startY: 35, endX: 36, endY: 85, size: 3, duration: 20, delay: 4.5 },
  { startX: 62, startY: 40, endX: 58, endY: 5, size: 2, duration: 22, delay: 3.5 },
  { startX: 75, startY: 68, endX: 70, endY: 22, size: 2, duration: 19, delay: 1 },
];

const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base gradient — lighter charcoal, not flat black */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-neutral-800" />

      {/* Visible color wash gradient, blue -> green -> red, diagonal */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-emerald-900/20 to-red-900/25" />

      {/* Soft glow accents on top for extra depth */}
      <div className="absolute -right-1/4 -top-1/4 h-[60%] w-[60%] rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[50%] w-[50%] rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="absolute right-1/4 bottom-1/4 h-[40%] w-[40%] rounded-full bg-red-500/18 blur-[100px]" />

      {/* Floating dots with real linear travel + fade in/out */}
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
              boxShadow: "0 0 6px 1px rgba(255,255,255,0.6)",
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
              "--tx": `${dot.endX - dot.startX}vw`,
              "--ty": `${dot.endY - dot.startY}vh`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Lighter bottom fade so text stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900 to-transparent" />
    </div>
  );
};

export default HeroBackground;