"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
} from "react";
import { motion, type MotionValue } from "framer-motion";

import type { BuilderSlide } from "./constants/about.data";

interface AboutCardProps {
  displayedSlide: number;
  slides: BuilderSlide[];
  isFlipping: boolean;
  imagesReady: boolean;
  reducedMotion: boolean | null;
  browserY: MotionValue<number>;
  browserScale: MotionValue<number>;
  onImageClick: () => void;
  onFlipComplete: () => void;
}

export default function AboutCard({
  displayedSlide,
  slides,
  isFlipping,
  imagesReady,
  reducedMotion,
  browserY,
  browserScale,
  onImageClick,
  onFlipComplete,
}: AboutCardProps) {
  const currentSlide = slides[displayedSlide];

  /*
   * IMPORTANT:
   *
   * backSlideIndex is intentionally independent from displayedSlide.
   *
   * During a flip:
   *   FRONT = current image
   *   BACK  = locked next image
   *
   * When flip finishes:
   *   displayedSlide changes to the next image
   *   backSlideIndex STILL points to that same image
   *
   * This makes both faces identical for the instant
   * the card resets from 180deg -> 0deg.
   *
   * Only AFTER the reset do we prepare the following image.
   */
  const [backSlideIndex, setBackSlideIndex] = useState<number>(
    (displayedSlide + 1) % slides.length,
  );

  /*
   * Prepare the next back image only when the card is NOT flipping.
   *
   * requestAnimationFrame is intentional:
   * the new front image gets rendered first,
   * then the hidden back face is updated.
   *
   * This prevents a one-frame image flash during the
   * 180deg -> 0deg reset.
   */
  useEffect(() => {
    if (isFlipping) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setBackSlideIndex(
        (displayedSlide + 1) % slides.length,
      );
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [displayedSlide, isFlipping, slides.length]);

  const backSlide = slides[backSlideIndex];

  const rotation = isFlipping ? 180 : 0;

  return (
    <motion.div
      style={{
        y: browserY,
        scale: browserScale,
      }}
      initial={
        reducedMotion
          ? false
          : {
              opacity: 0,
              y: 30,
            }
      }
      whileInView={
        reducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-20
        flex
        w-full
        min-w-0
        justify-center
        overflow-visible
        lg:-translate-y-3
        xl:-translate-y-12
      "
    >
      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-4
          -z-10
          mx-auto
          w-[78%]
          rounded-3xl
          bg-[#3157d5]/10
          blur-2xl
          dark:bg-[#3157d5]/7
          sm:-inset-5
          sm:w-[80%]
          lg:-inset-6
          lg:w-[82%]
        "
      />

      {/* CARD WRAPPER */}
      <div
        className="
          relative
          mx-auto
          w-full
          min-w-0
          max-w-full
          overflow-visible
          px-0
          sm:px-1
          md:px-2
          lg:px-3
        "
        style={{
          perspective: "1600px",
        }}
      >
        <div
          className="
            relative
            mx-auto
            aspect-video
            w-full
            max-w-full
          "
        >
          {/* =====================================================
              FLIP CARD
              ===================================================== */}

          <motion.div
            className="
              absolute
              inset-0
              h-full
              w-full
              cursor-pointer
              rounded-2xl
              border
              border-[#3157d5]/25
              bg-white
              shadow-2xl
              dark:border-white/14
              dark:bg-[#07101d]
              dark:shadow-black/50
              transform-gpu
              will-change-transform
              [transform-style:preserve-3d]
            "
            style={{
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
            }}
            animate={{
              rotateY: rotation,
            }}
            transition={{
              duration:
                isFlipping && !reducedMotion
                  ? 0.8
                  : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={() => {
              /*
               * Only the 0 -> 180 animation should trigger
               * the parent state update.
               *
               * The 180 -> 0 reset has duration 0 and
               * must NOT trigger another flip completion.
               */
              if (isFlipping) {
                onFlipComplete();
              }
            }}
            onClick={
              imagesReady && !isFlipping
                ? onImageClick
                : undefined
            }
          >
            {/* ===================================================
                FRONT
                =================================================== */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-2xl
                bg-white
                dark:bg-[#07101d]
              "
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(0deg) translateZ(1px)",
                WebkitTransform:
                  "rotateY(0deg) translateZ(1px)",
              }}
            >
              {/* TOP LINE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  z-30
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-[#3157d5]/80
                  to-[#fd3b30]/70
                "
              />

              {/* IMAGE */}
              <img
                src={currentSlide.image}
                alt={`Bytherix experience ${
                  displayedSlide + 1
                }`}
                draggable={false}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                  select-none
                  object-contain
                  object-center
                  scale-[0.97]
                  sm:scale-[0.965]
                  md:scale-[0.96]
                  lg:scale-[0.95]
                  xl:scale-[0.94]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#3157d5]/8
                  via-transparent
                  to-transparent
                  dark:from-black/25
                "
              />

              {/* CLICK LABEL */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  right-3
                  z-30
                  rounded-full
                  border
                  border-[#00aeef]/45
                  bg-[#07152d]/80
                  px-3
                  py-1.5
                  font-mono
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-widest
                  text-white/90
                  shadow-[0_0_8px_rgba(0,174,239,0.25),0_0_20px_rgba(0,174,239,0.12),inset_0_0_12px_rgba(0,174,239,0.06)]
                  backdrop-blur-md
                  sm:bottom-4
                  sm:right-4
                  sm:px-4
                  sm:py-2
                  sm:text-[9px]
                "
              >
                Click to explore
              </div>
            </div>

            {/* ===================================================
                BACK
                =================================================== */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-2xl
                bg-white
                dark:bg-[#07101d]
              "
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg) translateZ(1px)",
                WebkitTransform:
                  "rotateY(180deg) translateZ(1px)",
              }}
            >
              {/* TOP LINE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  z-30
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-[#3157d5]/80
                  to-[#fd3b30]/70
                "
              />

              {/* NEXT IMAGE */}
              <img
                src={backSlide.image}
                alt={`Bytherix experience ${
                  backSlideIndex + 1
                }`}
                draggable={false}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                  select-none
                  object-contain
                  object-center
                  scale-[0.97]
                  sm:scale-[0.965]
                  md:scale-[0.96]
                  lg:scale-[0.95]
                  xl:scale-[0.94]
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#fd3b30]/7
                  via-transparent
                  to-transparent
                  dark:from-black/25
                "
              />

              {/* CLICK LABEL */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-3
                  right-3
                  z-30
                  rounded-full
                  border
                  border-[#fd3b30]/25
                  bg-black/20
                  px-2.5
                  py-1
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-widest
                  text-slate-700
                  backdrop-blur-md
                  dark:border-white/10
                  dark:bg-black/30
                  dark:text-white/60
                  sm:bottom-4
                  sm:right-4
                  sm:px-3
                  sm:py-1.5
                  sm:text-[9px]
                "
              >
                Click to explore
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}