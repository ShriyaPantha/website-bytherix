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
        bg-[#020305]
      "
    >
      <div
        className="absolute inset-0 z-0 h-full w-full"
        style={{
          background: `
            radial-gradient(
              ellipse 72% 78% at 50% 48%,
              color-mix(in srgb, var(--color-blue) 7%, transparent) 0%,
              color-mix(in srgb, var(--color-blue) 2%, transparent) 40%,
              transparent 72%
            ),

            radial-gradient(
              ellipse 55% 45% at 8% 82%,
              color-mix(in srgb, var(--color-green) 1.5%, transparent),
              transparent 72%
            ),

            linear-gradient(
              135deg,
              #020305 0%,
              #05070b 36%,
              #080b11 64%,
              #030508 100%
            )
          `,
        }}
      />


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
          opacity-40
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-blue) 4%, transparent)",
        }}
      />

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
          opacity-35
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-blue) 3%, transparent)",
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
          opacity-45
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-green) 1.5%, transparent)",
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
          opacity-40
        "
        style={{
          background:
            "color-mix(in srgb, var(--color-red) 1.5%, transparent)",
        }}
      />

      {/* Top atmospheric light */}
      <div
        className="absolute inset-0 z-[1] h-full w-full"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 42% at 50% 0%,
              color-mix(in srgb, var(--color-blue) 3%, transparent),
              transparent 70%
            )
          `,
        }}
      />

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
          opacity-70
        "
        style={{
          background: `
            radial-gradient(
              ellipse,
              color-mix(in srgb, var(--color-blue) 3.5%, transparent),
              transparent 70%
            )
          `,
        }}
      />


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
              ellipse 72% 70% at center,
              black 0%,
              black 55%,
              rgba(0,0,0,0.55) 72%,
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 72% 70% at center,
              black 0%,
              black 55%,
              rgba(0,0,0,0.55) 72%,
              transparent 100%
            )
          `,
        }}
      >
        <HeroTwister />
      </div>

      <div
        className="
          absolute
          inset-y-0
          left-0
          z-[15]
          h-full
          w-[42%]
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              rgba(2,3,6,0.58) 0%,
              rgba(2,3,6,0.34) 42%,
              rgba(2,3,6,0.10) 76%,
              transparent 100%
            )
          `,
        }}
      />

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
              rgba(2,3,6,0.08),
              transparent
            )
          `,
        }}
      />


      <div
        className="
          absolute
          inset-0
          z-[30]
          h-full
          w-full
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 35%,
              rgba(0,0,0,0.025) 68%,
              rgba(0,0,0,0.14) 100%
            )
          `,
        }}
      />


      <div
        className="
          absolute
          inset-x-0
          bottom-0
          z-[31]
          h-[18%]
        "
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(2,3,5,0.88) 0%,
              rgba(2,3,5,0.42) 30%,
              rgba(2,3,5,0.10) 68%,
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