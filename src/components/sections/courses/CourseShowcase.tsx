import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Signal,
  Star,
} from "lucide-react";

import {
  useRef,
  useState,
  type MouseEvent,
} from "react";

import {
  courses,
  type Course,
} from "../../../data/courses";

/* =========================================================
   ACCENT CONFIG
========================================================= */

const accentStyles: Record<
  Course["accent"],
  {
    color: string;
    background: string;
    border: string;
  }
> = {
  navy: {
    color: "var(--course-navy)",
    background: "var(--course-navy-soft)",
    border: "var(--course-navy-border)",
  },

  green: {
    color: "var(--course-green)",
    background: "var(--course-green-soft)",
    border: "var(--course-green-border)",
  },

  red: {
    color: "var(--course-red)",
    background: "var(--course-red-soft)",
    border: "var(--course-red-border)",
  },
};

/* =========================================================
   COURSE CARD
========================================================= */

function CourseCard({
  course,
  featured = false,
}: {
  course: Course;
  featured?: boolean;
}) {
  const accent = accentStyles[course.accent];

  const [hovered, setHovered] =
    useState(false);

  /* -------------------------------------------------------
     3D TILT
  ------------------------------------------------------- */

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(
    rotateX,
    {
      stiffness: 180,
      damping: 22,
    },
  );

  const smoothRotateY = useSpring(
    rotateY,
    {
      stiffness: 180,
      damping: 22,
    },
  );

  /* -------------------------------------------------------
     CURSOR GLOW POSITION
  ------------------------------------------------------- */

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothMouseX = useSpring(
    mouseX,
    {
      stiffness: 180,
      damping: 25,
    },
  );

  const smoothMouseY = useSpring(
    mouseY,
    {
      stiffness: 180,
      damping: 25,
    },
  );

  const glowLeft = useTransform(
    smoothMouseX,
    (value) => `${value}%`,
  );

  const glowTop = useTransform(
    smoothMouseY,
    (value) => `${value}%`,
  );

  /* -------------------------------------------------------
     MOUSE MOVE
  ------------------------------------------------------- */

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) /
        rect.width) *
      100;

    const y =
      ((event.clientY - rect.top) /
        rect.height) *
      100;

    mouseX.set(x);
    mouseY.set(y);

    const normalizedX =
      (event.clientX - rect.left) /
        rect.width -
      0.5;

    const normalizedY =
      (event.clientY - rect.top) /
        rect.height -
      0.5;

    rotateY.set(normalizedX * 5);
    rotateX.set(-normalizedY * 5);
  };

  /* -------------------------------------------------------
     MOUSE LEAVE
  ------------------------------------------------------- */

  const handleMouseLeave = () => {
    setHovered(false);

    rotateX.set(0);
    rotateY.set(0);

    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.article
      data-course-card
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1000,

        borderColor: hovered
          ? accent.border
          : "var(--course-border)",

        boxShadow: hovered
          ? `0 22px 55px rgba(0, 0, 0, 0.16)`
          : "0 10px 30px rgba(0, 0, 0, 0.07)",
      }}
      whileTap={{
        scale: 0.985,
      }}
      className={[
        "group",
        "relative",
        "flex-none",
        "overflow-hidden",
        "rounded-[20px]",
        "border",
        "bg-[var(--course-card-bg)]",
        "snap-start",
        "transition-all",
        "duration-300",

        /*
          FEATURED:
          Desktop = small enough for 3 cards

          TOP:
          Mobile = 2 cards
        */

        featured
          ? "w-[calc(100vw-70px)] sm:w-[330px] lg:w-[calc((100vw-160px)/3)] lg:max-w-[380px]"
          : "w-[calc((100vw-60px)/2)] sm:w-[255px] lg:w-[285px]",
      ].join(" ")}
    >
      {/* ===================================================
          CURSOR GLOW
      =================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-20
          h-32
          w-32
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-3xl
        "
        style={{
          left: glowLeft,
          top: glowTop,
          backgroundColor: accent.color,
          opacity: hovered ? 0.1 : 0,
        }}
      />

      {/* ===================================================
          IMAGE
      =================================================== */}

      <div
        className={[
          "relative",
          "overflow-hidden",
          "bg-black/10",

          featured
            ? "h-[175px] sm:h-[195px] lg:h-[185px]"
            : "h-[125px] sm:h-[155px] lg:h-[165px]",
        ].join(" ")}
      >
        <motion.img
          src={course.image}
          alt={course.title}
          draggable={false}
          animate={{
            scale: hovered ? 1.05 : 1,
          }}
          transition={{
            duration: 0.55,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            h-full
            w-full
            select-none
            object-cover
          "
        />

        {/* Image overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/5
            to-transparent
          "
        />

        {/* Accent line */}

        <motion.div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
          "
          animate={{
            width: hovered
              ? "100%"
              : "0%",
          }}
          transition={{
            duration: 0.4,
          }}
          style={{
            backgroundColor:
              accent.color,
          }}
        />

        {/* =================================================
            RED BADGE
        ================================================= */}

        {course.badge && (
          <motion.div
            animate={{
              y: hovered ? -2 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              absolute
              left-3
              top-3
              rounded-md
              px-2.5
              py-1.5
              text-[8px]
              font-extrabold
              uppercase
              tracking-[0.1em]
              shadow-lg
            "
            style={{
              backgroundColor:
                "var(--course-badge-bg)",

              color:
                "var(--course-badge-text)",
            }}
          >
            {course.badge}
          </motion.div>
        )}

        {/* Category */}

        <div
          className="
            absolute
            bottom-3
            left-3
            max-w-[85%]
            truncate
            rounded-full
            border
            border-white/20
            bg-black/30
            px-2.5
            py-1
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.1em]
            text-white
            backdrop-blur-md
          "
        >
          {course.category}
        </div>
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          p-3
          sm:p-4
          lg:p-5
        "
      >
        {/* Category */}

        <p
          className="
            mb-1.5
            truncate
            text-[7px]
            font-bold
            uppercase
            tracking-[0.14em]
            sm:text-[8px]
          "
          style={{
            color: accent.color,
          }}
        >
          {course.category}
        </p>

        {/* Title */}

        <h3
          className={[
            "font-bold",
            "leading-tight",
            "tracking-[-0.025em]",
            "text-[var(--course-card-text)]",

            featured
              ? "text-base sm:text-lg lg:text-xl"
              : "text-xs sm:text-base lg:text-lg",
          ].join(" ")}
        >
          {course.title}
        </h3>

        {/* Instructor */}

        <p
          className="
            mt-1.5
            truncate
            text-[8px]
            text-[var(--course-card-muted)]
            sm:text-[10px]
          "
        >
          {course.instructor}
        </p>

        {/* =================================================
            RATING
        ================================================= */}

        <div
          className="
            mt-2.5
            flex
            items-center
            gap-1
            sm:gap-1.5
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              text-amber-500
              sm:text-xs
            "
          >
            {course.rating.toFixed(1)}
          </span>

          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(
              (star) => (
                <Star
                  key={star}
                  size={10}
                  fill="#f59e0b"
                  strokeWidth={0}
                  className="sm:h-3 sm:w-3"
                />
              ),
            )}
          </div>

          <span
            className="
              text-[7px]
              text-[var(--course-card-muted)]
              sm:text-[10px]
            "
          >
            (
            {course.reviews.toLocaleString()}
            )
          </span>
        </div>

        {/* =================================================
            META
        ================================================= */}

        <div
          className="
            mt-2.5
            flex
            flex-wrap
            gap-x-3
            gap-y-1.5
          "
        >
          <span
            className="
              flex
              items-center
              gap-1
              text-[7px]
              text-[var(--course-card-muted)]
              sm:text-[9px]
            "
          >
            <Clock3
              size={10}
            />

            {course.duration}
          </span>

          <span
            className="
              flex
              items-center
              gap-1
              text-[7px]
              text-[var(--course-card-muted)]
              sm:text-[9px]
            "
          >
            <Signal
              size={10}
            />

            {course.level}
          </span>
        </div>

        {/* =================================================
            PRICE + CTA
        ================================================= */}

        <div
          className="
            mt-3
            flex
            items-end
            justify-between
            gap-2
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[var(--course-card-muted)]
                sm:text-[7px]
              "
            >
              Course Fee
            </p>

            <p
              className={[
                "mt-0.5",
                "font-bold",
                "text-[var(--course-card-text)]",

                featured
                  ? "text-base sm:text-xl"
                  : "text-sm sm:text-lg",
              ].join(" ")}
            >
              {course.price}
            </p>
          </div>

          {/* CTA */}

          <motion.button
            type="button"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              px-2.5
              py-1.5
              text-[7px]
              font-bold
              transition-all
              sm:gap-1.5
              sm:px-3
              sm:py-2
              sm:text-[8px]
            "
            style={{
              borderColor:
                accent.border,

              backgroundColor:
                accent.background,

              color: accent.color,
            }}
          >
            View
            <ArrowRight
              size={10}
            />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
      }}
      className="mb-6 sm:mb-7"
    >
      <h2
        className="
          text-2xl
          font-bold
          leading-tight
          tracking-[-0.04em]
          text-[var(--course-card-text)]
          sm:text-3xl
          lg:text-[38px]
        "
      >
        {children}
      </h2>
    </motion.div>
  );
}

/* =========================================================
   CAROUSEL
========================================================= */

function CourseCarousel({
  coursesToShow,
  featured = false,
}: {
  coursesToShow: Course[];
  featured?: boolean;
}) {
  const carouselRef =
    useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] =
    useState(false);

  const [dragStartX, setDragStartX] =
    useState<number | null>(null);

  const [initialScrollLeft, setInitialScrollLeft] =
    useState(0);

  /* -------------------------------------------------------
     GET CARD SCROLL WIDTH
  ------------------------------------------------------- */

  const getScrollAmount = () => {
    const container =
      carouselRef.current;

    if (!container) return 0;

    const firstCard =
      container.querySelector<HTMLElement>(
        "[data-course-card]",
      );

    if (!firstCard) return 0;

    /*
      Card width + gap
    */

    const styles =
      window.getComputedStyle(
        container,
      );

    const gap =
      parseFloat(styles.columnGap) ||
      20;

    return (
      firstCard.offsetWidth + gap
    );
  };

  /* -------------------------------------------------------
     NEXT / PREVIOUS
  ------------------------------------------------------- */

  const scroll = (
    direction: "left" | "right",
  ) => {
    const container =
      carouselRef.current;

    if (!container) return;

    const amount =
      getScrollAmount();

    container.scrollBy({
      left:
        direction === "left"
          ? -amount
          : amount,

      behavior: "smooth",
    });
  };

  /* -------------------------------------------------------
     DRAG START
  ------------------------------------------------------- */

  const handleMouseDown = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (!carouselRef.current)
      return;

    /*
      Don't start drag from buttons.
    */

    const target =
      event.target as HTMLElement;

    if (
      target.closest("button")
    ) {
      return;
    }

    setIsDragging(true);

    setDragStartX(
      event.clientX,
    );

    setInitialScrollLeft(
      carouselRef.current.scrollLeft,
    );
  };

  /* -------------------------------------------------------
     DRAG MOVE
  ------------------------------------------------------- */

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (
      !isDragging ||
      dragStartX === null ||
      !carouselRef.current
    ) {
      return;
    }

    event.preventDefault();

    const distance =
      event.clientX -
      dragStartX;

    carouselRef.current.scrollLeft =
      initialScrollLeft -
      distance;
  };

  /* -------------------------------------------------------
     DRAG END
  ------------------------------------------------------- */

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartX(null);
  };

  return (
    <div className="relative">
      {/* =================================================
          LEFT ARROW
      ================================================= */}

      <motion.button
        type="button"
        aria-label="Previous courses"
        onClick={() =>
          scroll("left")
        }
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          absolute
          left-1
          top-1/2
          z-40
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          shadow-lg
          backdrop-blur-md

          sm:left-3
          sm:h-10
          sm:w-10

          lg:-left-5
          lg:h-11
          lg:w-11
        "
        style={{
          backgroundColor:
            "var(--course-arrow-bg)",

          color:
            "var(--course-arrow-text)",

          borderColor:
            "var(--course-arrow-border)",
        }}
      >
        <ArrowLeft
          size={13}
          strokeWidth={2.5}
        />
      </motion.button>

      {/* =================================================
          CARDS
      ================================================= */}

      <div
        ref={carouselRef}
        onMouseDown={
          handleMouseDown
        }
        onMouseMove={
          handleMouseMove
        }
        onMouseUp={
          handleMouseUp
        }
        onMouseLeave={
          handleMouseUp
        }
        className={[
          "flex",
          "gap-5",
          "overflow-x-auto",
          "pb-5",
          "snap-x",
          "snap-mandatory",
          "scrollbar-hide",
          "select-none",
          "px-5",
          "sm:px-2",
          "lg:px-0",

          isDragging
            ? "cursor-grabbing"
            : "cursor-grab",
        ].join(" ")}
        style={{
          WebkitOverflowScrolling:
            "touch",

          scrollBehavior:
            "smooth",

          /*
            Prevent browser from
            interpreting horizontal
            swipe badly on mobile.
          */

          touchAction:
            "pan-x",
        }}
      >
        {coursesToShow.map(
          (course, index) => (
            <motion.div
              key={course.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: Math.min(
                  index * 0.05,
                  0.25,
                ),
              }}
            >
              <CourseCard
                course={course}
                featured={featured}
              />
            </motion.div>
          ),
        )}
      </div>

      {/* =================================================
          RIGHT ARROW
      ================================================= */}

      <motion.button
        type="button"
        aria-label="Next courses"
        onClick={() =>
          scroll("right")
        }
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          absolute
          right-1
          top-1/2
          z-40
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          shadow-lg
          backdrop-blur-md

          sm:right-3
          sm:h-10
          sm:w-10

          lg:-right-5
          lg:h-11
          lg:w-11
        "
        style={{
          backgroundColor:
            "var(--course-arrow-bg)",

          color:
            "var(--course-arrow-text)",

          borderColor:
            "var(--course-arrow-border)",
        }}
      >
        <ArrowRight
          size={13}
          strokeWidth={2.5}
        />
      </motion.button>
    </div>
  );
}

/* =========================================================
   MAIN COURSE SHOWCASE
========================================================= */

export default function CourseShowcase() {
  const featuredCourses =
    courses.filter(
      (course) =>
        course.featured === true,
    );

  return (
    <section
      id="courses"
      className="
        relative
        isolate
        overflow-hidden
        bg-[var(--bg-primary)]
        py-16
        transition-colors
        duration-500

        sm:py-20
        lg:py-24
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[350px]
          w-[350px]
          rounded-full
          blur-[140px]
        "
        animate={{
          scale: [
            1,
            1.08,
            1,
          ],

          opacity: [
            0.02,
            0.045,
            0.02,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor:
            "var(--course-navy)",
        }}
      />

      <motion.div
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
        animate={{
          scale: [
            1,
            1.08,
            1,
          ],

          opacity: [
            0.015,
            0.035,
            0.015,
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor:
            "var(--course-green)",
        }}
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5

          sm:px-8
          lg:px-10
        "
      >
        {/* =================================================
            INTRO
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
          }}
          className="
            mb-12
            max-w-3xl

            sm:mb-14
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-3
              flex
              items-center
              gap-2
            "
          >
            <motion.span
              animate={{
                scale: [
                  1,
                  1.3,
                  1,
                ],

                opacity: [
                  0.5,
                  1,
                  0.5,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
              "
              style={{
                backgroundColor:
                  "var(--course-green)",
              }}
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
              "
              style={{
                color:
                  "var(--course-green)",
              }}
            >
              Learn With Bytherix
            </span>
          </div>

          {/* Main heading */}

          <h1
            className="
              text-4xl
              font-bold
              leading-[1.03]
              tracking-[-0.05em]
              text-[var(--course-card-text)]

              sm:text-5xl
              lg:text-6xl
            "
          >
            Build skills.
            <br />

            <span
              style={{
                color:
                  "var(--course-navy)",
              }}
            >
              Build the future.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-[var(--course-card-muted)]

              sm:text-base
              sm:leading-7
            "
          >
            Learn practical,
            in-demand technology
            skills through
            hands-on courses
            designed for
            real-world development.
          </p>
        </motion.div>

        {/* =================================================
            FEATURED COURSES
        ================================================= */}

        <div className="mb-16 sm:mb-20">
          <SectionHeading>
            Featured Courses
          </SectionHeading>

          <CourseCarousel
            coursesToShow={
              featuredCourses
            }
            featured
          />
        </div>

        {/* =================================================
            TOP COURSES
        ================================================= */}

        <div>
          <SectionHeading>
            Top Courses in{" "}
            <span
              style={{
                color:
                  "var(--course-navy)",
              }}
            >
              IT & Software
            </span>
          </SectionHeading>

          <CourseCarousel
            coursesToShow={courses}
          />
        </div>
      </div>
    </section>
  );
}