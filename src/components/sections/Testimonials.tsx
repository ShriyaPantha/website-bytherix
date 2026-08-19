import { Fragment, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import Wavebackground from "./Wavebackground";
 
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}
 
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marvin McKinney",
    role: "President of Sales",
    image: "/client_image/client-2.avif",
    message:
      "Working with Bytherix was an excellent experience. Their team understood our requirements quickly and delivered a solution that was both modern and reliable.",
  },
  {
    id: 2,
    name: "Jerome Bell",
    role: "Nursing Assistant",
    image: "/client_image/client-1.avif",
    message:
      "I highly recommend Bytherix. They are knowledgeable, responsive, and genuinely care about their clients. Every question I had was answered promptly and thoroughly.",
  },
  {
    id: 3,
    name: "Courtney Henry",
    role: "Marketing Coordinator",
    image: "/images/client-3.jpg",
    message:
      "The Bytherix team turned our ideas into a clean and effective digital experience. Their communication, creativity, and attention to detail were impressive.",
  },
  {
    id: 4,
    name: "Cameron Williamson",
    role: "Project Manager",
    image: "/images/client-4.jpg",
    message:
      "From the first discussion to the final delivery, the entire process felt smooth and professional. Bytherix truly understands how to combine technology with business needs.",
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    role: "Operations Manager",
    image: "/images/client-5.jpg",
    message:
      "The team was incredibly supportive throughout the project. We received a solution that was easy to use, scalable, and aligned perfectly with our goals.",
  },
];
 
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
 
const contentVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -20,
  },
};
 
/**
 * Splits a testimonial message and wraps every "Bytherix" occurrence in the
 * electric-cyan brand styling requested for the design.
 */
const highlightBrand = (message: string) => {
  const parts = message.split(/(Bytherix)/g);
  return parts.map((part, index) =>
    part === "Bytherix" ? (
      <span key={index} className="text-[#00f0ff] font-bold">
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
};
 
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
 
  const prefersReducedMotion = useReducedMotion();
 
  const activeTestimonial = testimonials[activeIndex];
 
  const previousIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
 
  const nextIndex = (activeIndex + 1) % testimonials.length;
 
  const goNext = (): void => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };
 
  const goPrevious = (): void => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };
 
  useEffect(() => {
    testimonials.forEach((testimonial) => {
      const image = new Image();
      image.src = testimonial.image;
    });
  }, []);
 
  useEffect(() => {
    if (isPaused) return;
 
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 2800);
 
    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);
 
  return (
    <section
      id="testimonials"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f6f8f7]
        text-[#111827]
        transition-colors
        duration-300
        dark:bg-[#071426]
        dark:text-white
        px-4 sm:px-6 md:px-8 lg:px-0 py-8 sm:py-10 md:py-12
      "
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-64
          w-64
          rounded-full
          bg-[#0d604f]/[0.035]
          blur-3xl
          transition-colors
          duration-300
          dark:bg-[#1b806d]/[0.08]
          sm:h-80
          sm:w-80
        "
      />
 
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-64
          w-64
          rounded-full
          bg-[#0d604f]/[0.04]
          blur-3xl
          transition-colors
          duration-300
          dark:bg-[#1b806d]/[0.07]
          sm:h-80
          sm:w-80
        "
      />
 
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/60
          blur-3xl
          transition-colors
          duration-300
          dark:bg-[#0d604f]/[0.06]
        "
      />
 
      {/* Main Section */}
      <motion.div
        initial={
          prefersReducedMotion
            ? undefined
            : {
                opacity: 0,
                y: 20,
              }
        }
        whileInView={
          prefersReducedMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-[1400px]
          xl:-translate-x-1
        "
      >
        {/* ONE BIG BOX */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-xl
            border
            border-black/[0.06]
            bg-white/70
            px-5
            py-6
            shadow-[0_18px_55px_rgba(16,60,50,0.07)]
            backdrop-blur-sm
            transition-colors
            duration-300
            dark:border-teal-500/20
            dark:bg-[#050e1a]/95
            dark:shadow-[0_18px_55px_rgba(0,0,0,0.35)]
            sm:px-7
            sm:py-7
            md:px-9
            md:py-8
            lg:px-10
            lg:py-9
            xl:px-12
            xl:py-10
          "
        >
          {/* Animated silk-ribbon wave field, dark-mode only, fades in from the right */}
          <div className="pointer-events-none absolute inset-0 block">
            <Wavebackground paused={Boolean(prefersReducedMotion)} />
          </div>
 
          {/* Heading */}
          <motion.div
            initial={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            whileInView={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              mb-8
              sm:mb-9
              md:mb-10
              xl:mb-12
            "
          >
            <motion.p
              initial={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 6,
                    }
              }
              whileInView={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              transition={{
                duration: 0.25,
                delay: 0.03,
              }}
              viewport={{ once: true }}
              className="
                mb-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#0d604f]/65
                dark:text-[#58b7a4]/80
                sm:text-[11px]
              "
            >
             
            </motion.p>
 
            <h2
              className="
                max-w-[700px]
                font-inter
                text-[28px]
                font-semibold
                leading-tight
                tracking-tight
                text-[#111827]
                transition-colors
                duration-300
                dark:text-white
                sm:text-[34px]
                md:text-[38px]
                xl:text-[42px]
              "
            >
              What Our Clients Say{" "}
              <span className="dark:text-[#00f0ff] dark:font-bold">
                About Us
              </span>
            </h2>
          </motion.div>
 
          {/* Main Content */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              items-center
              gap-8
              sm:gap-9
              md:gap-10
              xl:grid-cols-[390px_minmax(0,1fr)]
              xl:gap-16
            "
          >
            {/* Client Area */}
            <div
              className="
                relative
                flex
                w-full
                flex-col
                items-center
                xl:h-[320px]
                xl:items-start
                xl:justify-center
              "
            >
              {/* MOBILE 3 CARD VERTICAL SLIDER */}
              <div
                className="
                  relative
                  flex
                  w-full
                  flex-col
                  items-center
                  gap-1.5
                  sm:gap-2
                  xl:hidden
                "
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => setIsPaused(true)}
                onBlur={() => setIsPaused(false)}
              >
                {/* Mobile Previous */}
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(previousIndex)}
                  whileTap={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  transition={{ duration: 0.12 }}
                  className="
                    relative
                    flex
                    translate-x-5
                    w-[calc(100%-32px)]
                    max-w-[300px]
                    items-center
                    gap-2.5
                    rounded-md
                    border
                    border-[#0d604f]/20
                    bg-white/80
                    px-3
                    py-2
                    text-left
                    opacity-75
                    shadow-[0_8px_24px_rgba(13,96,79,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    dark:border-teal-500/20
                    dark:bg-[#09182a]/90
                    dark:shadow-[0_8px_24px_rgba(0,0,0,0.20)]
                    sm:translate-x-6
                    sm:w-[calc(100%-16px)]
                    sm:max-w-[360px]
                    sm:gap-3
                    sm:px-3.5
                    sm:py-2.5
                  "
                  aria-label={`View ${testimonials[previousIndex].name}'s testimonial`}
                >
                  <img
                    src={testimonials[previousIndex].image}
                    alt={testimonials[previousIndex].name}
                    className="
                      h-9
                      w-9
                      shrink-0
                      rounded-sm
                      object-cover
                      grayscale
                      opacity-75
                      sm:h-10
                      sm:w-10
                    "
                  />
 
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[10px]
                        font-semibold
                        text-black/60
                        dark:text-white/65
                        sm:text-[11px]
                      "
                    >
                      {testimonials[previousIndex].name}
                    </p>
 
                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[8px]
                        text-black/45
                        dark:text-white/45
                        sm:text-[9px]
                      "
                    >
                      {testimonials[previousIndex].role}
                    </p>
                  </div>
                </motion.button>
 
                {/* Mobile Active */}
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeTestimonial.id}
                    type="button"
                    onClick={goNext}
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
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : { scale: 0.985 }
                    }
                    className="
                      relative
                      z-20
                      flex
                      w-full
                      max-w-[330px]
                      items-center
                      gap-2.5
                      rounded-md
                      border
                      border-black/[0.055]
                      bg-white
                      px-3
                      py-3
                      text-left
                      shadow-[0_15px_38px_rgba(16,60,50,0.09)]
                      transition-colors
                      duration-300
                      dark:border-[#00f0ff]/40
                      dark:bg-[#09182a]
                      dark:shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_15px_38px_rgba(0,0,0,0.35)]
                      sm:max-w-[376px]
                      sm:gap-3
                      sm:px-3.5
                      sm:py-3.5
                    "
                  >
                    <span
                      className="
                        absolute
                        -left-[3px]
                        top-1/2
                        h-7
                        w-[3px]
                        -translate-y-1/2
                        rounded-full
                        bg-[#0d604f]
                        dark:bg-gradient-to-b
                        dark:from-[#00f0ff]
                        dark:to-[#0d604f]
                        sm:h-8
                      "
                    />
 
                    <div className="relative shrink-0">
                      <img
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        className="
                          h-11
                          w-11
                          rounded-sm
                          object-cover
                          sm:h-12
                          sm:w-12
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
                          bg-[#0d604f]
                          dark:border-[#09182a]
                          dark:bg-[#00f0ff]
                        "
                      />
                    </div>
 
                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          truncate
                          text-[11px]
                          font-semibold
                          text-[#151b1a]
                          dark:text-white
                          sm:text-[13px]
                        "
                      >
                        {activeTestimonial.name}
                      </p>
 
                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[8px]
                          leading-4
                          text-black/45
                          dark:text-white/45
                          sm:text-[10px]
                        "
                      >
                        {activeTestimonial.role}
                      </p>
                    </div>
 
                    {/* Quote accent badge */}
                    <span
                      className="
                        hidden
                        dark:flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#00f0ff]/10
                        text-[#00f0ff]
                      "
                    >
                      <Quote size={10} strokeWidth={2} />
                    </span>
                  </motion.button>
                </AnimatePresence>
 
                {/* Mobile Next */}
                <motion.button
                  type="button"
                  onClick={() => setActiveIndex(nextIndex)}
                  whileTap={
                    prefersReducedMotion
                      ? undefined
                      : { scale: 0.98 }
                  }
                  transition={{ duration: 0.12 }}
                  className="
                    relative
                    flex
                    translate-x-5
                    w-[calc(100%-32px)]
                    max-w-[300px]
                    items-center
                    gap-2.5
                    rounded-md
                    border
                    border-[#0d604f]/20
                    bg-white/80
                    px-3
                    py-2
                    text-left
                    opacity-75
                    shadow-[0_8px_24px_rgba(13,96,79,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    dark:border-teal-500/20
                    dark:bg-[#09182a]/90
                    dark:shadow-[0_8px_24px_rgba(0,0,0,0.20)]
                    sm:translate-x-6
                    sm:w-[calc(100%-16px)]
                    sm:max-w-[360px]
                    sm:gap-3
                    sm:px-3.5
                    sm:py-2.5
                  "
                  aria-label={`View ${testimonials[nextIndex].name}'s testimonial`}
                >
                  <img
                    src={testimonials[nextIndex].image}
                    alt={testimonials[nextIndex].name}
                    className="
                      h-9
                      w-9
                      shrink-0
                      rounded-sm
                      object-cover
                      grayscale
                      opacity-75
                      sm:h-10
                      sm:w-10
                    "
                  />
 
                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[10px]
                        font-semibold
                        text-black/60
                        dark:text-white/65
                        sm:text-[11px]
                      "
                    >
                      {testimonials[nextIndex].name}
                    </p>
 
                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[8px]
                        text-black/45
                        dark:text-white/45
                        sm:text-[9px]
                      "
                    >
                      {testimonials[nextIndex].role}
                    </p>
                  </div>
                </motion.button>
              </div>
 
              {/* DESKTOP PREVIOUS */}
              <motion.button
                type="button"
                onClick={() => setActiveIndex(previousIndex)}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { x: 6, scale: 1.015 }
                }
                whileTap={
                  prefersReducedMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                transition={{ duration: 0.14 }}
                className="
                  absolute
                  left-20
                  top-0
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
                "
                aria-label={`View ${testimonials[previousIndex].name}'s testimonial`}
              >
                <img
                  src={testimonials[previousIndex].image}
                  alt={testimonials[previousIndex].name}
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
                    {testimonials[previousIndex].name}
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
                    {testimonials[previousIndex].role}
                  </p>
                </div>
              </motion.button>
 
              {/* DESKTOP ACTIVE */}
              <div
                className="
                  relative
                  hidden
                  h-[78px]
                  w-full
                  max-w-[330px]
                  items-center
                  justify-center
                  xl:flex
                  xl:justify-start
                "
              >
                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeTestimonial.id}
                    type="button"
                    onClick={goNext}
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
                        : { scale: 1.02, x: 4 }
                    }
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : { scale: 0.98 }
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
                        bg-[#0d604f]
                        dark:bg-gradient-to-b
                        dark:from-[#00f0ff]
                        dark:to-[#0d604f]
                      "
                    />
 
                    <div className="relative shrink-0">
                      <img
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
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
                          bg-[#0d604f]
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
                        {activeTestimonial.name}
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
                        {activeTestimonial.role}
                      </p>
                    </div>
 
                    {/* Quote accent badge on the right edge */}
                    <span
                      className="
                        hidden
                        dark:flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#00f0ff]/10
                        text-[#00f0ff]
                      "
                    >
                      <Quote size={12} strokeWidth={2} />
                    </span>
                  </motion.button>
                </AnimatePresence>
              </div>
 
              {/* DESKTOP NEXT */}
              <motion.button
                type="button"
                onClick={() => setActiveIndex(nextIndex)}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { x: 6, scale: 1.015 }
                }
                whileTap={
                  prefersReducedMotion
                    ? undefined
                    : { scale: 0.98 }
                }
                transition={{ duration: 0.14 }}
                className="
                  absolute
                  bottom-0
                  left-20
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
                "
                aria-label={`View ${testimonials[nextIndex].name}'s testimonial`}
              >
                <img
                  src={testimonials[nextIndex].image}
                  alt={testimonials[nextIndex].name}
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
                    {testimonials[nextIndex].name}
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
                    {testimonials[nextIndex].role}
                  </p>
                </div>
              </motion.button>
 
              {/* Mobile Indicators */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  xl:hidden
                "
              >
                {testimonials.map((testimonial, index) => (
                  <motion.button
                    key={testimonial.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    whileTap={
                      prefersReducedMotion
                        ? undefined
                        : { scale: 0.85 }
                    }
                    aria-label={`Show ${testimonial.name}'s testimonial`}
                    className={`
                      h-1.5
                      rounded-full
                      transition-all
                      duration-200
                      ${
                        index === activeIndex
                          ? "w-6 bg-[#0d604f] dark:bg-[#00f0ff]"
                          : "w-1.5 bg-[#0d604f]/20 dark:bg-[#49a994]/25"
                      }
                    `}
                  />
                ))}
              </div>
            </div>
 
            {/* Testimonial Content */}
            <div
              className="
                relative
                w-full
                min-w-0
                xl:pl-1
              "
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  xl:min-h-[245px]
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    variants={contentVariants}
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
                    className="w-full min-w-0"
                  >
                    {/* Quote */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: 0,
                              scale: 0.75,
                              rotate: -6,
                            }
                      }
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: 1,
                              scale: 1,
                              rotate: 0,
                            }
                      }
                      transition={{
                        delay: 0.03,
                        duration: 0.2,
                      }}
                      className="
                        mb-4
                        sm:mb-5
                        xl:mb-7
                      "
                    >
                      <Quote
                        size={28}
                        strokeWidth={1.3}
                        className="
                          text-[#0d604f]/25
                          transition-colors
                          duration-300
                          dark:text-[#00f0ff]/45
                          sm:h-8
                          sm:w-8
                        "
                      />
                    </motion.div>
 
                    {/* Message */}
                    <p
                      className="
                        max-w-[720px]
                        text-[14px]
                        font-medium
                        leading-6
                        text-[#1b2421]
                        transition-colors
                        duration-300
                        dark:text-white/80
                        sm:text-[15px]
                        sm:leading-7
                        md:text-[16px]
                        md:leading-7
                        xl:text-[17px]
                        xl:leading-8
                      "
                    >
                      {highlightBrand(activeTestimonial.message)}
                    </p>
 
                    {/* Client Information */}
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: 0,
                              y: 8,
                            }
                      }
                      animate={
                        prefersReducedMotion
                          ? undefined
                          : {
                              opacity: 1,
                              y: 0,
                            }
                      }
                      transition={{
                        delay: 0.08,
                        duration: 0.2,
                      }}
                      className="
                        mt-5
                        sm:mt-6
                        xl:mt-7
                      "
                    >
                      <p
                        className="
                          text-[12px]
                          font-semibold
                          text-[#111817]
                          transition-colors
                          duration-300
                          dark:text-white
                          sm:text-[13px]
                        "
                      >
                        {activeTestimonial.name}
                      </p>
 
                      <p
                        className="
                          mt-0.5
                          text-[10px]
                          text-black/40
                          transition-colors
                          duration-300
                          dark:text-white/40
                          sm:text-[11px]
                        "
                      >
                        {activeTestimonial.role}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
 
              {/* Controls */}
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
                  onClick={goPrevious}
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
                    transition-colors
                    duration-300
                    hover:border-[#0d604f]/30
                    hover:text-[#0d604f]
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
                  onClick={goNext}
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
                    bg-[#0d604f]
                    text-white
                    shadow-[0_7px_18px_rgba(13,96,79,0.20)]
                    transition-colors
                    duration-300
                    dark:bg-[#00f0ff]
                    dark:text-[#071426]
                    dark:shadow-[0_7px_18px_rgba(0,240,255,0.25)]
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
                  {String(testimonials.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
 
export default Testimonials;