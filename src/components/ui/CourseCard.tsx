import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Signal,
} from "lucide-react";

import type { Course } from "../../data/courses";

interface CourseCardProps {
  course: Course;
  index: number;
}

interface AccentStyle {
  color: string;
  soft: string;
  border: string;
}

const accentStyles: Record<string, AccentStyle> = {
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

export default function CourseCard({
  course,
  index,
}: CourseCardProps) {
  const Icon = course.icon;

  const accent: AccentStyle =
    accentStyles[course.accent] ?? accentStyles.navy;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-[var(--border-primary)]
        bg-[var(--surface-primary)]
        shadow-[var(--shadow-card)]
        transition-shadow
        duration-500
        hover:shadow-[var(--shadow-card-hover)]
      "
    >
      {/* ===================================================
          TOP ACCENT
      =================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0
          z-30
          h-[3px]
          w-full
          origin-left
        "
        style={{
          backgroundColor: accent.color,
        }}
        initial={{
          scaleX: 0.25,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* ===================================================
          VISUAL AREA
      =================================================== */}

      <div
        className="
          relative
          h-[190px]
          shrink-0
          overflow-hidden
          transition-colors
          duration-500

          sm:h-[200px]
          lg:h-[195px]
          xl:h-[205px]
        "
        style={{
          backgroundColor: accent.soft,
        }}
      >
        {/* Main glow */}

        <motion.div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-32
            w-32
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[1px]
          "
          style={{
            backgroundColor: accent.color,
            opacity: 0.065,
          }}
          whileHover={{
            scale: 1.25,
            opacity: 0.11,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Rotating ring */}

        <motion.div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-24
            w-24
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
          "
          style={{
            borderColor: accent.border,
            opacity: 0.55,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Decorative dots */}

        <span
          aria-hidden="true"
          className="
            absolute
            left-7
            top-7
            h-1.5
            w-1.5
            rounded-full
          "
          style={{
            backgroundColor: accent.color,
          }}
        />

        <span
          aria-hidden="true"
          className="
            absolute
            right-10
            top-8
            h-2
            w-2
            rounded-full
            bg-slate-300
            dark:bg-slate-500
          "
        />

        <span
          aria-hidden="true"
          className="
            absolute
            bottom-7
            left-10
            h-1.5
            w-1.5
            rounded-full
          "
          style={{
            backgroundColor: accent.color,
          }}
        />

        {/* =================================================
            COURSE VISUAL
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
          whileHover={{
            scale: 1.045,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="
              relative
              flex
              h-[104px]
              w-[132px]
              items-center
              justify-center
              rounded-[20px]
              border
              backdrop-blur-md
              shadow-sm
              transition-all
              duration-500

              sm:h-[112px]
              sm:w-[142px]

              dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
            "
            style={{
              backgroundColor:
                "var(--course-visual-card)",
              borderColor:
                "var(--course-visual-border)",
            }}
          >
            {/* Icon */}

            <motion.div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                border
                transition-all
                duration-500

                sm:h-[68px]
                sm:w-[68px]
              "
              style={{
                backgroundColor: accent.soft,
                borderColor: accent.border,
              }}
              whileHover={{
                rotate: -4,
                scale: 1.08,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Icon
                className="
                  h-9
                  w-9

                  sm:h-10
                  sm:w-10
                "
                strokeWidth={1.6}
                style={{
                  color: accent.color,
                }}
              />
            </motion.div>

            {/* Floating block — left */}

            <motion.span
              aria-hidden="true"
              className="
                absolute
                -left-3
                top-5
                h-6
                w-6
                rounded-lg
                border
                bg-[var(--surface-elevated)]
                shadow-sm

                sm:-left-4
                sm:h-7
                sm:w-7
              "
              style={{
                borderColor: accent.border,
              }}
              whileHover={{
                x: -4,
                y: -4,
              }}
              transition={{
                duration: 0.3,
              }}
            />

            {/* Floating block — right */}

            <motion.span
              aria-hidden="true"
              className="
                absolute
                -right-3
                bottom-5
                h-7
                w-7
                rounded-lg
                border
                bg-[var(--surface-elevated)]
                shadow-sm

                sm:-right-4
                sm:h-8
                sm:w-8
              "
              style={{
                borderColor: accent.border,
              }}
              whileHover={{
                x: 4,
                y: 4,
              }}
              transition={{
                duration: 0.3,
              }}
            />

            {/* Floating dot */}

            <motion.span
              aria-hidden="true"
              className="
                absolute
                -right-1
                -top-2
                h-3
                w-3
                rounded-full

                sm:-right-2
                sm:-top-3
              "
              style={{
                backgroundColor: accent.color,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* =================================================
            CATEGORY
        ================================================= */}

        <div
          className="
            absolute
            bottom-4
            left-4
            right-4

            sm:left-5
            sm:right-auto
          "
        >
          <span
            className="
              inline-flex
              max-w-full
              items-center
              rounded-full
              border
              bg-[var(--surface-elevated)]
              px-3
              py-1
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.1em]
              backdrop-blur-md
              transition-all
              duration-500

              sm:text-[10px]
              sm:tracking-[0.12em]
            "
            style={{
              color: accent.color,
              borderColor: accent.border,
            }}
          >
            <span className="truncate">
              {course.category}
            </span>
          </span>
        </div>
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5

          sm:p-6
        "
      >
        {/* Title */}

        <h3
          className="
            text-[17px]
            font-bold
            leading-[1.2]
            tracking-[-0.02em]
            text-[var(--text-primary)]
            transition-colors
            duration-500

            sm:text-[18px]
          "
        >
          {course.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-3
            min-h-[66px]
            text-[12.5px]
            leading-[1.75]
            text-[var(--text-secondary)]
            transition-colors
            duration-500

            sm:text-[13px]
            sm:leading-6
          "
        >
          {course.description}
        </p>

        {/* =================================================
            META
        ================================================= */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            gap-x-4
            gap-y-2
            border-t
            border-[var(--border-secondary)]
            pt-4
            transition-colors
            duration-500
          "
        >
          <div
            className="
              flex
              items-center
              gap-1.5
              text-[10.5px]
              font-medium
              text-[var(--text-secondary)]

              sm:text-[11px]
            "
          >
            <Clock3
              size={14}
              strokeWidth={1.8}
            />

            <span>{course.duration}</span>
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5
              text-[10.5px]
              font-medium
              text-[var(--text-secondary)]

              sm:text-[11px]
            "
          >
            <Signal
              size={14}
              strokeWidth={1.8}
            />

            <span>{course.level}</span>
          </div>
        </div>

        {/* =================================================
            PRICE + CTA
        ================================================= */}

        <div
          className="
            mt-5
            flex
            items-end
            justify-between
            gap-3
          "
        >
          {/* Price */}

          <div className="min-w-0">
            <span
              className="
                block
                text-[9px]
                font-medium
                uppercase
                tracking-[0.13em]
                text-[var(--text-muted)]

                sm:text-[10px]
                sm:tracking-[0.14em]
              "
            >
              Course Fee
            </span>

            <span
              className="
                mt-1
                block
                text-[15px]
                font-bold
                text-[var(--text-primary)]

                sm:text-[16px]
              "
            >
              {course.price}
            </span>
          </div>

          {/* CTA */}

          <motion.button
            type="button"
            className="
              group/cta
              relative
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-1.5
              overflow-hidden
              rounded-full
              border
              px-3.5
              py-2
              text-[10px]
              font-semibold
              transition-all
              duration-300

              sm:px-4
              sm:py-2
              sm:text-xs
            "
            style={{
              borderColor: accent.border,
              color: accent.color,
            }}
            whileHover={{
              scale: 1.035,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            {/* CTA hover background */}

            <motion.span
              aria-hidden="true"
              className="
                absolute
                inset-0
                origin-left
                scale-x-0
                rounded-full
              "
              style={{
                backgroundColor: accent.soft,
              }}
              whileHover={{
                scaleX: 1,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <span className="relative z-10">
              View Course
            </span>

            <motion.span
              className="
                relative
                z-10
                flex
              "
              initial={{
                x: -2,
                opacity: 0.7,
              }}
              whileHover={{
                x: 2,
                opacity: 1,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* ===================================================
          BOTTOM ACCENT
      =================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full
          origin-left
        "
        style={{
          backgroundColor: accent.color,
        }}
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileHover={{
          scaleX: 1,
          opacity: 0.85,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.article>
  );
}