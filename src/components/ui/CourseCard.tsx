import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Signal,
} from "lucide-react";

import type { Course } from "../../data/courses";

/* =========================================================
   TYPES
========================================================= */

interface CourseCardProps {
  course: Course;
  index: number;
}

/* =========================================================
   ACCENT SYSTEM

   Light mode:
   blue  = navy
   green = Bytherix green
   red   = Bytherix red

   Dark mode:
   blue  = bright blue
   green = bright teal
   red   = bright red

   The actual values come from variables.css.
========================================================= */

const accentStyles = {
  navy: {
    color: "var(--accent-blue)",
    soft: "var(--brand-blue-soft)",
    border: "var(--brand-blue-border)",
  },

  blue: {
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

  const accent =
    accentStyles[
      course.accent as keyof typeof accentStyles
    ] ?? accentStyles.navy;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[22px]

        border
        border-[var(--border-primary)]

        bg-[var(--surface-primary)]

        shadow-[var(--shadow-card)]

        transition-all
        duration-500

        hover:shadow-[var(--shadow-card-hover)]
      "
    >
      {/* =====================================================
          TOP ACCENT LINE
      ===================================================== */}

      <motion.div
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
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =====================================================
          VISUAL AREA
      ===================================================== */}

      <div
        className="
          relative
          h-[205px]
          overflow-hidden
          transition-colors
          duration-500
        "
        style={{
          backgroundColor: accent.soft,
        }}
      >
        {/* ===================================================
            LARGE SOFT BRAND ORB
        =================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-36
            w-36
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[1px]
          "
          style={{
            backgroundColor: accent.color,
            opacity: 0.06,
          }}
          whileHover={{
            scale: 1.2,
            opacity: 0.10,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* ===================================================
            DECORATIVE DOTS
        =================================================== */}

        <span
          className="
            absolute
            left-8
            top-8
            h-1.5
            w-1.5
            rounded-full
          "
          style={{
            backgroundColor: accent.color,
          }}
        />

        <span
          className="
            absolute
            right-12
            top-10
            h-2
            w-2
            rounded-full
            bg-slate-300
            dark:bg-slate-500
          "
        />

        <span
          className="
            absolute
            bottom-8
            left-12
            h-1.5
            w-1.5
            rounded-full
          "
          style={{
            backgroundColor: accent.color,
          }}
        />

        {/* ===================================================
            MAIN ILLUSTRATION
        =================================================== */}

        <motion.div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
          whileHover={{
            scale: 1.055,
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
              h-28
              w-36
              items-center
              justify-center
              rounded-2xl
              border

              backdrop-blur-md

              shadow-sm

              transition-all
              duration-500

              dark:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
            "
            style={{
              backgroundColor:
                "var(--course-visual-card)",

              borderColor:
                "var(--course-visual-border)",
            }}
          >
            {/* =============================================
                ICON CONTAINER
            ============================================= */}

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
              "
              style={{
                backgroundColor: accent.soft,
                borderColor: accent.border,
              }}
              whileHover={{
                rotate: -3,
                scale: 1.06,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <Icon
                size={42}
                strokeWidth={1.6}
                style={{
                  color: accent.color,
                }}
              />
            </motion.div>

            {/* =============================================
                FLOATING LEFT BLOCK
            ============================================= */}

            <motion.span
              className="
                absolute
                -left-4
                top-5
                h-6
                w-6
                rounded-lg
                border
                bg-[var(--surface-elevated)]
                shadow-sm
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

            {/* =============================================
                FLOATING RIGHT BLOCK
            ============================================= */}

            <motion.span
              className="
                absolute
                -right-4
                bottom-5
                h-7
                w-7
                rounded-lg
                border
                bg-[var(--surface-elevated)]
                shadow-sm
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

            {/* =============================================
                FLOATING DOT
            ============================================= */}

            <motion.span
              className="
                absolute
                -right-2
                -top-3
                h-3
                w-3
                rounded-full
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

        {/* ===================================================
            CATEGORY
        =================================================== */}

        <div
          className="
            absolute
            bottom-4
            left-5
          "
        >
          <span
            className="
              rounded-full
              border
              bg-[var(--surface-elevated)]
              px-3
              py-1

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]

              backdrop-blur-md

              transition-all
              duration-500
            "
            style={{
              color: accent.color,
              borderColor: accent.border,
            }}
          >
            {course.category}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT AREA
      ===================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-6
        "
      >
        {/* ===================================================
            TITLE
        =================================================== */}

        <h3
          className="
            text-[17px]
            font-bold
            leading-tight
            tracking-[-0.02em]

            text-[var(--text-primary)]

            transition-colors
            duration-500
          "
        >
          {course.title}
        </h3>

        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p
          className="
            mt-3
            min-h-[48px]

            text-[13px]
            leading-6

            text-[var(--text-secondary)]

            transition-colors
            duration-500
          "
        >
          {course.description}
        </p>

        {/* ===================================================
            META
        =================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            gap-4

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
              text-[11px]
              font-medium
              text-[var(--text-secondary)]
            "
          >
            <Clock3 size={14} />
            {course.duration}
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5
              text-[11px]
              font-medium
              text-[var(--text-secondary)]
            "
          >
            <Signal size={14} />
            {course.level}
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
          "
        >
          {/* Fee */}

          <div>
            <span
              className="
                block
                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]

                text-[var(--text-muted)]
              "
            >
              Course Fee
            </span>

            <span
              className="
                mt-1
                block
                text-[16px]
                font-bold
                text-[var(--text-primary)]
              "
            >
              {course.price}
            </span>
          </div>

          {/* =================================================
              VIEW COURSE BUTTON
          ================================================= */}

          <motion.button
            type="button"
            className="
              relative
              flex
              items-center
              gap-2
              overflow-hidden
              rounded-full

              border

              px-4
              py-2

              text-xs
              font-semibold

              transition-all
              duration-300
            "
            style={{
              borderColor: accent.border,
              color: accent.color,
            }}
            whileHover={{
              scale: 1.035,
              paddingRight: "17px",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <span>
              View Course
            </span>

            <motion.span
              initial={{
                x: -3,
                opacity: 0.7,
              }}
              whileHover={{
                x: 3,
                opacity: 1,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <ArrowUpRight size={15} />
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ===================================================== */}

      <motion.div
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