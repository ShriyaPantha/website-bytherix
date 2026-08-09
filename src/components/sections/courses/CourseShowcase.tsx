import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Signal,
} from "lucide-react";
import { useEffect, useState } from "react";

import { courses } from "../../../data/courses";

const accentStyles = {
  navy: {
    color: "var(--accent-blue)",
    soft: "var(--brand-blue-soft)",
    border: "var(--brand-blue-border)",
  },
  green: {
    color: "var(--accent-green)",
    soft: "var(--brand-green-soft)",
    border: "var(--brand-green-border)",
  },
  red: {
    color: "var(--accent-red)",
    soft: "var(--brand-red-soft)",
    border: "var(--brand-red-border)",
  },
};

export default function CourseShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCourse = courses[activeIndex];
  const accent =
    accentStyles[activeCourse.accent] ?? accentStyles.navy;

  const Icon = activeCourse.icon;

  const nextCourse = () => {
    setActiveIndex((current) =>
      current === courses.length - 1 ? 0 : current + 1
    );
  };

  const previousCourse = () => {
    setActiveIndex((current) =>
      current === 0 ? courses.length - 1 : current - 1
    );
  };

  /*
   * Automatic course transition
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === courses.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="courses"
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--bg-primary)]
        py-20
        text-[var(--text-primary)]
        transition-colors
        duration-500

        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* Background glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[360px]
          w-[360px]
          rounded-full
          blur-[130px]
        "
        style={{
          backgroundColor: "var(--accent-blue)",
          opacity: 0.045,
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10
          h-[380px]
          w-[380px]
          rounded-full
          blur-[140px]
        "
        style={{
          backgroundColor: "var(--accent-green)",
          opacity: 0.04,
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5

          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            max-w-3xl

            sm:mb-12
            lg:mb-14
          "
        >
          <div className="mb-4 flex items-center gap-2.5">
            <motion.span
              className="
                h-1.5
                w-1.5
                rounded-full
              "
              style={{
                backgroundColor: "var(--accent-green)",
              }}
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[var(--accent-green)]

                sm:text-[10px]
              "
            >
              Learn With Bytherix
            </span>
          </div>

          <h2
            className="
              text-[36px]
              font-bold
              leading-[1.05]
              tracking-[-0.045em]

              sm:text-5xl
              lg:text-[54px]
              xl:text-[60px]
            "
          >
            Build skills.
            <br />

            <span
              style={{
                color: "var(--accent-blue)",
              }}
            >
              Build the future.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-[14px]
              leading-6
              text-[var(--text-secondary)]

              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            Learn practical, in-demand technology skills through
            hands-on courses designed for real-world development.
          </p>
        </motion.div>

        {/* =================================================
            SHOWCASE
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            bg-[var(--course-showcase-bg)]
            shadow-[var(--course-showcase-shadow)]

            sm:rounded-[32px]
            lg:min-h-[580px]
          "
        >
          {/* Grid */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.07]
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.15) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.15) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Accent glow */}

          <motion.div
            key={`glow-${activeCourse.id}`}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              blur-[110px]

              sm:h-[420px]
              sm:w-[420px]
            "
            style={{
              backgroundColor: accent.color,
              opacity: 0.13,
            }}
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 0.13,
            }}
            transition={{
              duration: 0.8,
            }}
          />

          <div
            className="
              relative
              z-10
              grid
              min-h-[560px]
              grid-cols-1

              lg:grid-cols-[0.85fr_1.15fr]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-7

                sm:p-10
                lg:p-14
                xl:p-16
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCourse.id}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 25,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Number */}

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                    "
                    style={{
                      color: accent.color,
                    }}
                  >
                    Course {String(activeIndex + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-4
                      max-w-xl
                      text-[36px]
                      font-bold
                      leading-[1.02]
                      tracking-[-0.045em]
                      text-white

                      sm:text-5xl
                      lg:text-[52px]
                      xl:text-[60px]
                    "
                  >
                    {activeCourse.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      max-w-lg
                      text-[13px]
                      leading-6
                      text-white/65

                      sm:text-sm
                      sm:leading-7
                      lg:text-base
                    "
                  >
                    {activeCourse.description}
                  </p>

                  {/* Meta */}

                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      gap-3
                    "
                  >
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-3.5
                        py-2
                        text-[10px]
                        font-medium
                        text-white/80
                      "
                      style={{
                        borderColor:
                          "rgba(255,255,255,0.12)",
                        backgroundColor:
                          "rgba(255,255,255,0.04)",
                      }}
                    >
                      <Clock3 size={13} />
                      {activeCourse.duration}
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        px-3.5
                        py-2
                        text-[10px]
                        font-medium
                        text-white/80
                      "
                      style={{
                        borderColor:
                          "rgba(255,255,255,0.12)",
                        backgroundColor:
                          "rgba(255,255,255,0.04)",
                      }}
                    >
                      <Signal size={13} />
                      {activeCourse.level}
                    </span>
                  </div>

                  {/* Price */}

                  <div className="mt-7">
                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-white/45
                      "
                    >
                      Course Fee
                    </span>

                    <div
                      className="
                        mt-1
                        text-2xl
                        font-bold
                        text-white
                      "
                    >
                      {activeCourse.price}
                    </div>
                  </div>

                  {/* CTA */}

                  <motion.button
                    type="button"
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      mt-7
                      inline-flex
                      w-fit
                      items-center
                      gap-2
                      rounded-full
                      px-5
                      py-3
                      text-[11px]
                      font-semibold
                    "
                    style={{
                      backgroundColor: accent.color,
                      color: "#ffffff",
                    }}
                  >
                    View Course
                    <ArrowUpRight size={15} />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[330px]
                items-center
                justify-center
                overflow-hidden
                px-5
                pb-10

                sm:min-h-[400px]
                sm:px-10

                lg:min-h-0
                lg:px-12
                lg:pb-0
              "
            >
              {/* Decorative circle */}

              <motion.div
                className="
                  absolute
                  h-[220px]
                  w-[220px]
                  rounded-full
                  border

                  sm:h-[300px]
                  sm:w-[300px]
                "
                style={{
                  borderColor: accent.border,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Outer ring */}

              <motion.div
                className="
                  absolute
                  h-[290px]
                  w-[290px]
                  rounded-full
                  border

                  sm:h-[390px]
                  sm:w-[390px]
                "
                style={{
                  borderColor:
                    "rgba(255,255,255,0.07)",
                }}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Course Card */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCourse.id}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: -7,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    rotate: 7,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    z-20
                    flex
                    h-[220px]
                    w-[250px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[28px]
                    border
                    backdrop-blur-xl

                    sm:h-[270px]
                    sm:w-[310px]
                  "
                  style={{
                    backgroundColor:
                      "rgba(255,255,255,0.07)",
                    borderColor:
                      "rgba(255,255,255,0.14)",
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.28)",
                  }}
                >
                  {/* Icon */}

                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-[22px]
                      border

                      sm:h-24
                      sm:w-24
                    "
                    style={{
                      backgroundColor: accent.soft,
                      borderColor: accent.border,
                    }}
                  >
                    <Icon
                      className="
                        h-10
                        w-10

                        sm:h-12
                        sm:w-12
                      "
                      strokeWidth={1.5}
                      style={{
                        color: accent.color,
                      }}
                    />
                  </motion.div>

                  {/* Category */}

                  <span
                    className="
                      mt-5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                    "
                    style={{
                      color: accent.color,
                    }}
                  >
                    {activeCourse.category}
                  </span>

                  {/* Title */}

                  <span
                    className="
                      mt-2
                      text-center
                      text-base
                      font-semibold
                      text-white

                      sm:text-lg
                    "
                  >
                    {activeCourse.title}
                  </span>

                  {/* Floating shapes */}

                  <motion.span
                    className="
                      absolute
                      -left-4
                      top-10
                      h-8
                      w-8
                      rounded-xl
                      border
                    "
                    style={{
                      borderColor: accent.border,
                      backgroundColor:
                        "rgba(255,255,255,0.06)",
                    }}
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.span
                    className="
                      absolute
                      -right-4
                      bottom-10
                      h-10
                      w-10
                      rounded-xl
                      border
                    "
                    style={{
                      borderColor: accent.border,
                      backgroundColor:
                        "rgba(255,255,255,0.06)",
                    }}
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div
            className="
              absolute
              bottom-5
              left-6
              right-6
              z-30
              flex
              items-center
              justify-between

              sm:bottom-7
              sm:left-8
              sm:right-8
            "
          >
            {/* Progress */}

            <div className="flex items-center gap-2">
              {courses.map((course, index) => (
                <button
                  key={course.id}
                  type="button"
                  aria-label={`Go to ${course.title}`}
                  onClick={() => setActiveIndex(index)}
                  className="
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                  "
                  style={{
                    width:
                      index === activeIndex
                        ? "28px"
                        : "7px",
                    backgroundColor:
                      index === activeIndex
                        ? accent.color
                        : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>

            {/* Controls */}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousCourse}
                aria-label="Previous course"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-white/70
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                "
                style={{
                  borderColor:
                    "rgba(255,255,255,0.14)",
                }}
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={nextCourse}
                aria-label="Next course"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-white/70
                  transition-all
                  hover:bg-white/10
                  hover:text-white
                "
                style={{
                  borderColor:
                    "rgba(255,255,255,0.14)",
                }}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}