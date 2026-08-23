import { Fragment, useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { Quote } from "lucide-react";

import Wavebackground from "./Wavebackground";
import TestimonialCard from "./TestimonialCard";
import TestimonialControls from "./TestimonialControls";

import { testimonials } from "../../../data/testimonials";

const highlightBrand = (message: string) => {
  const parts = message.split(/(Bytherix)/g);

  return parts.map((part, index) =>
    part === "Bytherix" ? (
      <span
        key={index}
        className="font-bold text-[var(--color-navy)]"
      >
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  const previousIndex =
    (activeIndex - 1 + testimonials.length) %
    testimonials.length;

  const nextIndex =
    (activeIndex + 1) % testimonials.length;

  const goNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1
        ? 0
        : current + 1,
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0
        ? testimonials.length - 1
        : current - 1,
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
        current === testimonials.length - 1
          ? 0
          : current + 1,
      );
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const pauseSlider = () => setIsPaused(true);
  const resumeSlider = () => setIsPaused(false);

  return (
    <section
      id="testimonials"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f6f8f7]
        px-4
        py-8
        text-[#111827]
        transition-colors
        duration-300
        dark:bg-[#071426]
        dark:text-white
        sm:px-6
        sm:py-10
        md:px-8
        md:py-12
        lg:px-0
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
        {/* Main Card */}

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
          {/* Wave Background */}

          <div className="pointer-events-none absolute inset-0 block">
            <Wavebackground
              paused={Boolean(prefersReducedMotion)}
            />
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
            />

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
              <span className="dark:font-bold dark:text-[var(--color-navy)]">
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
              {/* Mobile Slider */}

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
                onMouseEnter={pauseSlider}
                onMouseLeave={resumeSlider}
                onFocus={pauseSlider}
                onBlur={resumeSlider}
              >
                {/* Mobile Previous */}

                <TestimonialCard
                  testimonial={testimonials[previousIndex]}
                  variant="preview"
                  direction="previous"
                  prefersReducedMotion={Boolean(
                    prefersReducedMotion,
                  )}
                  onClick={() =>
                    setActiveIndex(previousIndex)
                  }
                />

                {/* Mobile Active */}

                <AnimatePresence mode="wait">
                  <motion.button
                    key={activeTestimonial.id}
                    type="button"
                    onClick={goNext}
                    initial={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: 18,
                            scale: 0.96,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 0,
                            y: -18,
                            scale: 0.96,
                          }
                    }
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
                        bg-[var(--color-navy)]
                        dark:bg-gradient-to-b
                        dark:from-[#00f0ff]
                        dark:to-[var(--color-navy)]
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

                    <span
                      className="
                        hidden
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#00f0ff]/10
                        text-[#00f0ff]
                        dark:flex
                      "
                    >
                      <Quote size={10} strokeWidth={2} />
                    </span>
                  </motion.button>
                </AnimatePresence>

                {/* Mobile Next */}

                <TestimonialCard
                  testimonial={testimonials[nextIndex]}
                  variant="preview"
                  direction="next"
                  prefersReducedMotion={Boolean(
                    prefersReducedMotion,
                  )}
                  onClick={() => setActiveIndex(nextIndex)}
                />

                {/* Indicators */}

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
                            ? "w-6 bg-[var(--color-navy)] dark:bg-[#00f0ff]"
                            : "w-1.5 bg-[#0d604f]/20 dark:bg-[#49a994]/25"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Previous */}

              <TestimonialCard
                testimonial={testimonials[previousIndex]}
                variant="preview"
                direction="previous"
                prefersReducedMotion={Boolean(
                  prefersReducedMotion,
                )}
                onClick={() =>
                  setActiveIndex(previousIndex)
                }
              />

              {/* Desktop Active */}

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
                  <TestimonialCard
                    key={activeTestimonial.id}
                    testimonial={activeTestimonial}
                    prefersReducedMotion={Boolean(
                      prefersReducedMotion,
                    )}
                    onClick={goNext}
                  />
                </AnimatePresence>
              </div>

              {/* Desktop Next */}

              <TestimonialCard
                testimonial={testimonials[nextIndex]}
                variant="preview"
                direction="next"
                prefersReducedMotion={Boolean(
                  prefersReducedMotion,
                )}
                onClick={() => setActiveIndex(nextIndex)}
              />
            </div>

            {/* Testimonial Content */}

            <div
              className="
                relative
                w-full
                min-w-0
                xl:pl-1
              "
              onMouseEnter={pauseSlider}
              onMouseLeave={resumeSlider}
              onFocus={pauseSlider}
              onBlur={resumeSlider}
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
                    initial={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 0,
                            x: 20,
                          }
                    }
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={
                      prefersReducedMotion
                        ? undefined
                        : {
                            opacity: 0,
                            x: -20,
                          }
                    }
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
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }}
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
                          text-[var(--color-navy)]/25
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
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
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

              <TestimonialControls
                onPrevious={goPrevious}
                onNext={goNext}
                activeIndex={activeIndex}
                total={testimonials.length}
                prefersReducedMotion={Boolean(
                  prefersReducedMotion,
                )}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;