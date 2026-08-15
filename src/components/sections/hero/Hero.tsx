import RobotLaptopHero from "./RobotLaptopHero";
import HeroBackground from "./components/HeroBackground";
import HeroContent from "./components/HeroContent";
import { STATS } from "./constants/heroData";

interface HeroProps {
  docked: boolean;
}

const Hero = ({ docked }: HeroProps) => {
  return (
    <section
      className="
        relative
        isolate
        z-10
        flex
        flex-col
        min-h-screen
        overflow-hidden
        py-8

        lg:h-[calc(100vh-6rem)]
        lg:min-h-[640px]
        lg:py-0
        lg:justify-center
      "
    >
      <HeroBackground />

      <div className="mx-auto w-full flex flex-col justify-center items-center">
        <div
          className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          flex-1
          px-4
          sm:px-6
          lg:px-8

          flex
          flex-col
          justify-center
          items-center

          lg:grid
          lg:grid-cols-[1fr_0.85fr]
          lg:items-center
          lg:gap-4
        "
        >
          <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <HeroContent docked={docked} />
          </div>

          {/* ----------------------------------------------------------
            RIGHT — ROBOT
            ---------------------------------------------------------- */}

          <div
            className="
            relative
            z-10

            mt-8
            flex
            w-full
            justify-center

            sm:mt-10

            lg:mt-0
            lg:flex
            lg:justify-end

            lg:translate-y-2
          "
          >
            <div
              className="
              relative
              mt-29

              w-full
              max-w-[400px]

              sm:max-w-[500px]

              md:max-w-[430px]

              lg:max-w-[440px]
              xl:max-w-[730px]

              lg:scale-[1.08]
              lg:origin-center
            "
            >
              <RobotLaptopHero />
            </div>
          </div>
        </div>

        <div
          className="
          relative
          z-30
          mx-auto
          w-full
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8

          -mt-6
          sm:-mt-8
          lg:-mt-5
          pb-6

          lg:pb-7
        "
        >
          <div
            className="
            relative
            overflow-hidden
            rounded-2xl

            border
            border-white/[0.12]

            bg-black/[0.25]

            backdrop-blur-xl
            shadow-[0_20px_50px_rgba(0,0,0,0.5)]

            py-5
            sm:py-6
            lg:py-5
            px-4
            sm:px-6

            before:pointer-events-none
            before:absolute
            before:inset-0
            before:bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.06),transparent)]
          "
          >
            <div
              className="
              grid
              grid-cols-2
              sm:grid-cols-4

              gap-y-6
              sm:gap-y-0
              divide-y
              sm:divide-y-0
              sm:divide-x
              divide-white/[0.08]

              items-center
              justify-center
            "
            >
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  className="
                  group
                  relative
                  min-w-0

                  flex
                  flex-col
                  items-center
                  text-center
                  sm:items-start
                  sm:text-left

                  px-2
                  sm:px-4
                  lg:px-6

                  py-2
                  sm:py-0

                  transition-colors
                  duration-300
                "
                >
                  {/* Subtle hover accent */}
                  <div
                    className="
                    pointer-events-none
                    absolute
                    inset-x-4
                    bottom-0
                    h-px
                    origin-center
                    sm:origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-cyan-400/50
                    to-transparent
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                  />

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full">
                    {/* Minimal icon */}
                    <span
                      className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.1]
                      ${stat.bg}
                      text-white/90
                      shadow-inner

                      sm:h-8
                      sm:w-8
                    `}
                    >
                      {stat.icon}
                    </span>

                    <div className="min-w-0 flex flex-col items-center sm:items-start">
                      {/* Value */}
                      <p
                        className="
                        text-xl
                        sm:text-2xl
                        lg:text-[1.5rem]

                        font-bold
                        leading-none
                        tracking-[-0.025em]

                        text-white
                      "
                      >
                        {stat.value}
                      </p>

                      {/* Label */}
                      <p
                        className="
                        mt-1.5
                        truncate

                        text-[11px]
                        sm:text-[11px]
                        lg:text-xs

                        font-semibold
                        uppercase
                        tracking-[0.1em]

                        text-white/60
                      "
                      >
                        {stat.label}
                      </p>

                      {/* Description */}
                      <p
                        className="
                        mt-1
                        hidden
                        sm:block

                        text-[10px]
                        lg:text-[11px]

                        leading-relaxed

                        text-white/35
                      "
                      >
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-400/30
              to-transparent
            "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
