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
        w-full
        overflow-hidden

        min-h-[100svh]
        py-8

        sm:py-10

        md:min-h-[calc(100svh-4rem)]
        md:py-12

        lg:flex
        lg:min-h-[640px]
        lg:h-[calc(100vh-6rem)]
        lg:items-center
        lg:py-0
      "
    >
      <HeroBackground />

      {/* ============================================================
          HERO CANVAS
      ============================================================ */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col

          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
          2xl:px-0
        "
      >
        {/* ==========================================================
            MAIN HERO
        ========================================================== */}

        <div
          className="
            relative
            grid
            w-full
            items-center

            grid-cols-1

            md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]
            md:gap-4

            lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]
            lg:gap-0

            xl:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]
          "
        >
          {/* --------------------------------------------------------
              LEFT — CONTENT
          -------------------------------------------------------- */}

          <div
            className="
              relative
              z-30
              flex
              w-full
              justify-center

              md:justify-start
              lg:justify-start
            "
          >
            <div
              className="
                w-full
                max-w-[680px]

                md:max-w-[620px]
                lg:max-w-[680px]
                xl:max-w-[720px]
              "
            >
              <HeroContent docked={docked} />
            </div>
          </div>

          {/* --------------------------------------------------------
              RIGHT — ROBOT
          -------------------------------------------------------- */}

          <div
            className="
              relative
              z-20
              flex
              w-full
              items-center
              justify-center

              mt-8
              sm:mt-10

              md:mt-0
              md:min-w-0

              lg:justify-end
              lg:translate-x-[2%]
              lg:translate-y-8

              xl:translate-x-[3%]
              xl:translate-y-10
            "
          >
            <div
              className="
                relative
                flex
                w-full
                items-center
                justify-center

                max-w-[360px]

                sm:max-w-[440px]

                md:max-w-[480px]

                lg:max-w-[600px]
                lg:scale-[1.05]

                xl:max-w-[740px]
                xl:scale-[1.1]

                2xl:scale-[1.12]

                origin-center
              "
            >
              <RobotLaptopHero />
            </div>
          </div>
        </div>

        {/* ==========================================================
            STATS
        ========================================================== */}

        <div
          className="
            relative
            z-40
            w-full

            mt-8

            sm:mt-10

            md:mt-8

            lg:mt-5

            xl:mt-3

            pb-2
            sm:pb-4
            lg:pb-4
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-xl
              sm:rounded-2xl

              border
              border-white/[0.10]

              bg-black/[0.20]

              backdrop-blur-xl

              shadow-[0_20px_50px_rgba(0,0,0,0.35)]

              px-3
              py-3

              sm:px-4
              sm:py-4

              md:px-5
              md:py-4

              lg:px-6
              lg:py-4

              before:pointer-events-none
              before:absolute
              before:inset-0
              before:bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.045),transparent)]
            "
          >
            <div
              className="
                grid
                grid-cols-2
                items-stretch

                sm:grid-cols-4

                gap-y-0

                divide-x
                divide-white/[0.07]
              "
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    group
                    relative
                    min-w-0

                    flex
                    flex-col
                    justify-center

                    px-3
                    py-2

                    sm:px-3
                    sm:py-1

                    md:px-4

                    lg:px-6

                    transition-colors
                    duration-300
                  "
                >
                  {/* Hover accent */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-2
                      bottom-0
                      h-px
                      origin-center
                      scale-x-0

                      bg-gradient-to-r
                      from-cyan-400/50
                      via-cyan-400/20
                      to-transparent

                      transition-transform
                      duration-500

                      group-hover:scale-x-100

                      sm:origin-left
                    "
                  />

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-2.5

                      sm:gap-3

                      md:gap-3.5
                    "
                  >
                    {/* Icon */}
                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center

                        rounded-lg
                        border
                        border-white/[0.09]

                        ${stat.bg}

                        text-white/90
                        shadow-inner

                        sm:h-8
                        sm:w-8

                        md:h-9
                        md:w-9
                      `}
                    >
                      {stat.icon}
                    </span>

                    {/* Text */}
                    <div
                      className="
                        min-w-0
                        flex
                        flex-1
                        flex-col
                      "
                    >
                      {/* Value */}
                      <p
                        className="
                          truncate

                          text-lg
                          font-bold
                          leading-none
                          tracking-[-0.025em]
                          text-white

                          sm:text-xl

                          md:text-2xl

                          lg:text-[1.5rem]
                        "
                      >
                        {stat.value}
                      </p>

                      {/* Label */}
                      <p
                        className="
                          mt-1
                          truncate

                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                          text-white/60

                          sm:text-[9px]

                          md:text-[10px]

                          lg:text-xs
                          lg:tracking-[0.1em]
                        "
                      >
                        {stat.label}
                      </p>

                      {/* Description */}
                      <p
                        className="
                          mt-1
                          hidden

                          text-[10px]
                          leading-relaxed
                          text-white/35

                          md:block

                          lg:text-[11px]
                        "
                      >
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top glow */}
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