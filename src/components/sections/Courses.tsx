import { motion } from "framer-motion";

import CourseCard from "../ui/CourseCard";
import { courses } from "../../data/courses";

import {
  coursesContainerVariants,
  courseHeadingVariants,
  courseSubtitleVariants,
} from "../../utils/motionVariants";

export default function Courses() {
  return (
    <section
      id="courses"
      className="
        relative
        overflow-hidden

        bg-[var(--bg-primary)]
        text-[var(--text-primary)]

        py-20
        transition-colors
        duration-500

        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION

          Very subtle Bytherix brand atmosphere.
          These remain visible in both themes.
      ===================================================== */}

      {/* Navy / Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-[8%]
          h-[420px]
          w-[420px]
          rounded-full
          blur-[120px]
          transition-opacity
          duration-700
        "
        style={{
          backgroundColor: "var(--accent-blue)",
          opacity: 0.035,
        }}
      />

      {/* Green glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-[35%]
          h-[420px]
          w-[420px]
          rounded-full
          blur-[120px]
          transition-opacity
          duration-700
        "
        style={{
          backgroundColor: "var(--accent-green)",
          opacity: 0.045,
        }}
      />

      {/* Red glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[35%]
          h-[350px]
          w-[350px]
          rounded-full
          blur-[120px]
          transition-opacity
          duration-700
        "
        style={{
          backgroundColor: "var(--accent-red)",
          opacity: 0.035,
        }}
      />

      {/* =====================================================
          VERY SUBTLE GRID

          Gives the section a more premium technical feel
          without making the background look AI-generated.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          dark:opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              var(--text-primary) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              var(--text-primary) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          CONTENT CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <div className="mb-12 max-w-3xl lg:mb-14">
          {/* Eyebrow */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={courseHeadingVariants}
          >
            <div className="mb-4 flex items-center gap-2.5">
              {/* Brand dot */}

              <motion.span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                "
                style={{
                  backgroundColor:
                    "var(--accent-green)",
                }}
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]

                  text-[var(--accent-green)]

                  transition-colors
                  duration-500
                "
              >
                Learn With Bytherix
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              className="
                max-w-3xl

                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.045em]

                text-[var(--text-primary)]

                transition-colors
                duration-500

                sm:text-5xl
                lg:text-[52px]
              "
            >
              Explore Our Courses
            </h2>
          </motion.div>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={courseSubtitleVariants}
            className="
              mt-4
              max-w-2xl

              text-base
              leading-7

              text-[var(--text-secondary)]

              transition-colors
              duration-500

              sm:text-lg
            "
          >
            Learn in-demand skills with hands-on
            projects and industry-relevant content.
          </motion.p>
        </div>

        {/* =====================================================
            COURSE GRID
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={coursesContainerVariants}
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2
            lg:grid-cols-4
          "
          style={{
            perspective: "1200px",
          }}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
            />
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM SECTION DETAIL

            Small brand line below the cards.
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-12
            flex
            items-center
            gap-3

            sm:mt-14
          "
        >
          {/* Brand line */}

          <span
            className="
              h-px
              w-10
              sm:w-14
            "
            style={{
              backgroundColor:
                "var(--accent-blue)",
              opacity: 0.35,
            }}
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]

              text-[var(--text-muted)]

              transition-colors
              duration-500
            "
          >
            Build skills. Build the future.
          </span>

          <span
            className="
              h-px
              w-10
              sm:w-14
            "
            style={{
              backgroundColor:
                "var(--accent-red)",
              opacity: 0.35,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}