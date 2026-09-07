import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  activeIndex: number;
  total: number;
  prefersReducedMotion: boolean;
}

const TestimonialControls = ({
  onPrevious,
  onNext,
  activeIndex,
  total,
  prefersReducedMotion,
}: TestimonialControlsProps) => {
  return (
    <div
      className="
        mt-6
        flex
        items-center
        gap-2.5
        sm:mt-7
        xl:mt-8
      "
    >
      <motion.button
        type="button"
        onClick={onPrevious}
        whileHover={
          prefersReducedMotion
            ? undefined
            : { scale: 1.08 }
        }
        whileTap={
          prefersReducedMotion
            ? undefined
            : { scale: 0.94 }
        }
        transition={{ duration: 0.12 }}
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          border-[#0d604f]/15
          bg-white/80
          text-[#0d604f]/60
          shadow-sm
          transition-all
          duration-300
          hover:border-[#0d604f]/30
          hover:text-[var(--color-navy)]
          dark:border-[#00f0ff]/20
          dark:bg-[#09182a]
          dark:text-[#49a994]/70
          dark:hover:border-[#00f0ff]/40
          dark:hover:text-[#00f0ff]
          sm:h-9
          sm:w-9
        "
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={16} />
      </motion.button>

      <motion.button
        type="button"
        onClick={onNext}
        whileHover={
          prefersReducedMotion
            ? undefined
            : { scale: 1.08 }
        }
        whileTap={
          prefersReducedMotion
            ? undefined
            : { scale: 0.94 }
        }
        transition={{ duration: 0.12 }}
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-[var(--color-navy)]
          text-white
          shadow-[0_7px_18px_rgba(13,96,79,0.20)]
          transition-all
          duration-300
          hover:opacity-90
          dark:bg-[var(--color-navy)]
          dark:text-white
          dark:shadow-[0_7px_18px_rgba(0,0,0,0.25)]
          sm:h-9
          sm:w-9
        "
        aria-label="Next testimonial"
      >
        <ChevronRight size={16} />
      </motion.button>

      <div
        className="
          ml-1
          text-[9px]
          font-medium
          tracking-[0.18em]
          text-black/30
          transition-colors
          duration-300
          dark:text-white/30
          sm:text-[10px]
        "
      >
        {String(activeIndex + 1).padStart(2, "0")}
        <span className="mx-1.5">/</span>
        {String(total).padStart(2, "0")}
      </div>
    </div>
  );
};

export default TestimonialControls;