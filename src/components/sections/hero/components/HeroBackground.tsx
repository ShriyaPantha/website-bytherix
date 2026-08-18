import Planet from "./Planet";
import HeroTwister from "./SpiralTwister";

const HeroBackground = () => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        h-full
        w-full
        overflow-hidden
        bg-[#05080d]
      "
    >
      {/* Base atmosphere */}
      <div
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          background: `
            radial-gradient(
              ellipse 75% 82% at 50% 48%,
              color-mix(in srgb, var(--color-blue) 9%, transparent) 0%,
              color-mix(in srgb, var(--color-blue) 3%, transparent) 42%,
              transparent 78%
            ),

            radial-gradient(
              ellipse 55% 45% at 8% 82%,
              color-mix(in srgb, var(--color-green) 2.5%, transparent),
              transparent 72%
            ),

            linear-gradient(
              135deg,
              #05080d 0%,
              #080c13 38%,
              #0a0f17 65%,
              #060a10 100%
            )
          `,
        }}
      />

      {/* Main blue atmosphere */}
      <div
        className="
          absolute
          left-[25%]
          top-[4%]
          z-[1]
          h-[76%]
          w-[55%]
          rounded-full
          blur-[160px]
          opacity-50
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-blue) 5%, transparent)",
        }}
      />

      {/* Center blue glow */}
      <div
        className="
          absolute
          left-[36%]
          top-[20%]
          z-[1]
          h-[34%]
          w-[28%]
          rounded-full
          blur-[120px]
          opacity-40
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-blue) 4%, transparent)",
        }}
      />

      {/* Lower-left subtle green atmosphere */}
      <div
        className="
          absolute
          -left-[4%]
          bottom-[8%]
          z-[1]
          h-[26%]
          w-[22%]
          rounded-full
          blur-[150px]
          opacity-50
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-green) 2%, transparent)",
        }}
      />

      {/* Lower-right subtle red atmosphere */}
      <div
        className="
          absolute
          right-[2%]
          bottom-[12%]
          z-[1]
          h-[18%]
          w-[14%]
          rounded-full
          blur-[140px]
          opacity-45
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-red) 2%, transparent)",
        }}
      />

      {/* Top atmospheric light */}
      <div
        className="absolute inset-0 z-[1] h-full w-full"
        style={{
          background: `
            radial-gradient(
              ellipse 65% 45% at 50% 0%,
              color-mix(in srgb, var(--color-blue) 5%, transparent),
              transparent 72%
            )
          `,
        }}
      />

      {/* Center blue glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-[4]
          h-[72%]
          w-[58%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[120px]
          opacity-80
        "
        style={{
          background: `
            radial-gradient(
              ellipse,
              color-mix(in srgb, var(--color-blue) 4%, transparent),
              transparent 72%
            )
          `,
        }}
      />

      {/* Main Twister */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-[10]
          h-[112%]
          w-[62%]
          -translate-x-1/2
          -translate-y-1/2
          overflow-visible
          opacity-[0.58]
        "
        style={{
          maskImage: `
            radial-gradient(
              ellipse 78% 76% at center,
              black 0%,
              black 62%,
              rgba(0,0,0,0.35) 78%,
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 78% 76% at center,
              black 0%,
              black 62%,
              rgba(0,0,0,0.35) 78%,
              transparent 100%
            )
          `,
        }}
      >
        <HeroTwister />
      </div>

      {/* Soft left-side readability overlay */}
      <div
        className="
          absolute
          inset-y-0
          left-0
          z-[15]
          h-full
          w-[38%]
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(3,6,10,0.28) 0%,
              rgba(3,6,10,0.16) 42%,
              rgba(3,6,10,0.04) 76%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Very subtle center-left transition */}
      <div
        className="
          absolute
          inset-y-0
          left-[34%]
          z-[16]
          h-full
          w-[18%]
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(3,6,10,0.04),
              transparent
            )
          `,
        }}
      />

      {/* Soft bottom atmosphere */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-[31]
          h-[12%]
        "
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(3,6,10,0.38) 0%,
              rgba(3,6,10,0.16) 35%,
              rgba(3,6,10,0.04) 70%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Main green planet */}
      <Planet
        className="
          right-[3%]
          bottom-[11%]
          sm:right-[5%]
          sm:bottom-[13%]
          lg:right-[8%]
          lg:bottom-[16%]
        "
        size="clamp(42px, 4vw, 66px)"
        color="green"
        zIndex={50}
        floatY={16}
        floatX={-5}
        duration={7.5}
        delay={1.2}
      />

      {/* Small green planet */}
      <Planet
        className="
          right-[24%]
          bottom-[4%]
          sm:right-[27%]
          lg:right-[30%]
          lg:bottom-[8%]
        "
        size="clamp(22px, 2vw, 34px)"
        color="green"
        zIndex={49}
        floatY={9}
        floatX={3}
        duration={5.8}
        delay={2.4}
      />

      {/* Red planet */}
      <Planet
        className="
          left-[17%]
          bottom-[7%]
          sm:left-[19%]
          lg:left-[21%]
          lg:bottom-[12%]
        "
        size="clamp(18px, 1.6vw, 26px)"
        color="var(--color-red)"
        zIndex={48}
        floatY={7}
        floatX={-3}
        duration={5.2}
        delay={0.8}
      />

      {/* Orange planet */}
      <Planet
        className="
          left-[3%]
          bottom-[15%]
          sm:left-[5%]
          lg:left-[4%]
        "
        size="clamp(30px, 3vw, 46px)"
        color="orange"
        zIndex={47}
        floatY={12}
        floatX={4}
        duration={6.5}
      />

      {/* Tiny blue planet */}
      <Planet
        className="
          left-[10%]
          bottom-[24%]
          sm:left-[11%]
          lg:left-[13%]
          lg:bottom-[27%]
        "
        size="clamp(10px, 1vw, 15px)"
        color="var(--color-blue)"
        zIndex={46}
        floatY={5}
        floatX={2}
        duration={4.8}
        delay={1.8}
      />

      {/* Subtle horizontal blue light */}
      <div
        className="
          absolute
          left-1/2
          top-[52%]
          z-[42]
          h-px
          w-[18%]
          -translate-x-1/2
          opacity-[0.04]
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              transparent,
              color-mix(in srgb, var(--color-blue) 70%, white),
              transparent
            )
          `,
        }}
      />
    </div>
  );
};

export default HeroBackground;