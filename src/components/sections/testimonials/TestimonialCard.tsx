import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import type { Testimonial } from "../../../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "active" | "preview";
  prefersReducedMotion: boolean;
  onClick?: () => void;
  direction?: "previous" | "next";
}

const cardVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.96,
  },
};

const TestimonialCard = ({
  testimonial,
  variant = "active",
  prefersReducedMotion,
  onClick,
  direction,
}: TestimonialCardProps) => {
  const isActive = variant === "active";

  if (isActive) {
    return (
      <motion.button
        key={testimonial.id}
        type="button"
        onClick={onClick}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : {
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }
        }
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: 1.02,
                x: 4,
              }
        }
        whileTap={
          prefersReducedMotion
            ? undefined
            : {
                scale: 0.98,
              }
        }
        className="
          relative
          z-20
          flex
          h-[78px]
          w-[330px]
          items-center
          gap-3.5
          rounded-md
          border
          border-black/[0.055]
          bg-white
          px-4
          py-3
          text-left
          shadow-[0_18px_45px_rgba(16,60,50,0.09)]
          transition-colors
          duration-300
          dark:border-[#00f0ff]/40
          dark:bg-[#09182a]
          dark:shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_18px_45px_rgba(0,0,0,0.4)]
        "
      >
        <span
          className="
            absolute
            -left-[3px]
            top-1/2
            h-8
            w-[3px]
            -translate-y-1/2
            rounded-full
            bg-[var(--color-navy)]
            dark:bg-gradient-to-b
            dark:from-[#00f0ff]
            dark:to-[var(--color-navy)]
          "
        />

        <div className="relative shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="
              h-11
              w-11
              rounded-sm
              object-cover
            "
          />

          <span
            className="
              absolute
              -right-1
              -top-1
              h-2.5
              w-2.5
              rounded-full
              border-2
              border-white
              bg-[var(--color-navy)]
              dark:border-[#09182a]
              dark:bg-[#00f0ff]
            "
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="
              truncate
              text-[12px]
              font-semibold
              text-[#151b1a]
              dark:text-white
            "
          >
            {testimonial.name}
          </p>

          <p
            className="
              mt-1
              truncate
              text-[10px]
              leading-4
              text-black/45
              dark:text-white/45
            "
          >
            {testimonial.role}
          </p>
        </div>

        <span
          className="
            hidden
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#00f0ff]/10
            text-[#00f0ff]
            dark:flex
          "
        >
          <Quote size={12} strokeWidth={2} />
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              x: 6,
              scale: 1.015,
            }
      }
      whileTap={
        prefersReducedMotion
          ? undefined
          : {
              scale: 0.98,
            }
      }
      transition={{ duration: 0.14 }}
      className={`
        absolute
        ${
          direction === "previous"
            ? "left-20 top-0"
            : "bottom-0 left-20"
        }
        hidden
        h-[78px]
        w-[330px]
        items-center
        gap-3.5
        rounded-md
        border
        border-[#0d604f]/18
        bg-white/85
        px-4
        py-3
        text-left
        opacity-80
        shadow-[0_10px_30px_rgba(13,96,79,0.07)]
        backdrop-blur-sm
        transition-all
        duration-300
        dark:border-teal-500/20
        dark:bg-[#09182a]/92
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.20)]
        xl:flex
      `}
      aria-label={`View ${testimonial.name}'s testimonial`}
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="
          h-11
          w-11
          shrink-0
          rounded-sm
          object-cover
          grayscale
          opacity-75
        "
      />

      <div className="min-w-0">
        <p
          className="
            truncate
            text-[12px]
            font-semibold
            text-black/60
            dark:text-white/65
          "
        >
          {testimonial.name}
        </p>

        <p
          className="
            mt-1
            truncate
            text-[10px]
            text-black/45
            dark:text-white/45
          "
        >
          {testimonial.role}
        </p>
      </div>
    </motion.button>
  );
};

export default TestimonialCard;