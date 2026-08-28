"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import GlobeCanvas from "./GlobeCanvas";
import AboutCard from "./AboutCard";
import FeatureIcon from "../../ui/FeatureIcon";
import {
  AZURE_BLUE,
  SOFT_TEAL,
  FEATURE_GREEN,
  BUILDER_SLIDES,
  type BuilderSlide,
  type BuilderFeature,
} from "./constants/about.data";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const [displayedSlide, setDisplayedSlide] = useState<number>(0);
  const [featureSlide, setFeatureSlide] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [imagesReady, setImagesReady] = useState<boolean>(false);
  const flipLockRef = useRef<boolean>(false);
  const flipUnlockTimerRef = useRef<number | null>(null);
  const themeTransitionTimerRef = useRef<number | null>(null);
  const lastThemeRef = useRef<boolean | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const styleId = "bytherix-theme-transition-style";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        html.bytherix-theme-switching,
        html.bytherix-theme-switching * {
          transition: none !important;
          animation: none !important;
        }

        body.bytherix-theme-transitioning::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 2147483647;
          pointer-events: auto;
          background: var(--bytherix-theme-transition-color, #ffffff);
          opacity: 1;
        }

        body.bytherix-theme-transition-fade::before {
          opacity: 0;
          transition: opacity 180ms ease-out !important;
        }
      `;
      document.head.appendChild(style);
    }

    const finishTransition = (): void => {
      body.classList.remove("bytherix-theme-transitioning");
      root.classList.remove("bytherix-theme-switching");
      body.classList.remove("bytherix-theme-transition-fade");
      root.style.removeProperty("--bytherix-theme-transition-color");
    };

    const startTransition = (): void => {
      const dark = root.classList.contains("dark");

      if (lastThemeRef.current === dark) {
        return;
      }

      lastThemeRef.current = dark;

      if (themeTransitionTimerRef.current !== null) {
        window.clearTimeout(themeTransitionTimerRef.current);
      }

      root.classList.add("bytherix-theme-switching");
      root.style.setProperty(
        "--bytherix-theme-transition-color",
        dark ? "#020817" : "#ffffff",
      );
      body.classList.remove("bytherix-theme-transition-fade");
      body.classList.add("bytherix-theme-transitioning");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          body.classList.add("bytherix-theme-transition-fade");

          themeTransitionTimerRef.current = window.setTimeout(() => {
            finishTransition();
          }, 190);
        });
      });
    };

    const observer = new MutationObserver((mutations: MutationRecord[]) => {
      const themeChanged = mutations.some(
        (mutation: MutationRecord) =>
          mutation.type === "attributes" && mutation.attributeName === "class",
      );

      if (themeChanged) {
        startTransition();
      }
    });

    lastThemeRef.current = root.classList.contains("dark");

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();

      if (themeTransitionTimerRef.current !== null) {
        window.clearTimeout(themeTransitionTimerRef.current);
      }

      finishTransition();
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    const preloadImages = BUILDER_SLIDES.map(
      (slide: BuilderSlide) =>
        new Promise<void>((resolve) => {
          const image = new Image();

          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = slide.image;
        }),
    );

    Promise.all(preloadImages).then(() => {
      if (mounted) {
        setImagesReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (flipUnlockTimerRef.current !== null) {
        window.clearTimeout(flipUnlockTimerRef.current);
      }
    };
  }, []);

  const nextSlideIndex = (displayedSlide + 1) % BUILDER_SLIDES.length;
  const currentFeatureSlide = BUILDER_SLIDES[featureSlide];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end 10%"],
  });

  const browserY = useTransform(scrollYProgress, [0, 0.5, 1], [18, 0, -18]);
  const browserScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.985, 1, 0.99],
  );
  const globeY = useTransform(scrollYProgress, [0, 0.5, 1], [5, -10, -35]);
  const globeX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const globeScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.98, 1, 1.02],
  );

  const handleImageClick = (): void => {
    if (!imagesReady || isFlipping || flipLockRef.current) {
      return;
    }

    flipLockRef.current = true;
    setFeatureSlide(nextSlideIndex);
    setIsFlipping(true);
  };

  const finishFlip = (): void => {
    if (!isFlipping) {
      return;
    }

    setDisplayedSlide(nextSlideIndex);
    setIsFlipping(false);

    if (flipUnlockTimerRef.current !== null) {
      window.clearTimeout(flipUnlockTimerRef.current);
    }

    flipUnlockTimerRef.current = window.setTimeout(() => {
      flipLockRef.current = false;
    }, 80);
  };

  const getFeatureColor = (index: number): string => {
    if (index === 0) {
      return AZURE_BLUE;
    }

    if (index === 1) {
      return "#d6332f";
    }

    return FEATURE_GREEN;
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-white px-5 pb-12 pt-12 text-slate-900 dark:bg-[#020817] dark:text-white sm:px-8 sm:pb-14 sm:pt-14 lg:px-[60px] lg:pb-16 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-40 h-128 w-128 rounded-full bg-[#3157d5]/7 blur-3xl dark:bg-[#3157d5]/7" />
        <div className="absolute -bottom-48 left-[10%] h-96 w-96 rounded-full bg-[#fd3b30]/5 blur-3xl dark:bg-[#fd3b30]/4" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,174,239,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,.35)_1px,transparent_1px)] bg-size-[70px_70px] opacity-[0.025] dark:bg-[linear-gradient(rgba(0,174,239,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,174,239,.5)_1px,transparent_1px)] dark:opacity-[0.018]" />
      </div>

      <div className="relative w-full">
        <div className="relative z-10">
          <div className="relative grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-8 xl:gap-10 2xl:gap-12">
            <div className="pointer-events-none absolute -right-48 -top-24 z-0 flex h-112 w-112 items-center justify-end overflow-visible sm:-right-20 sm:-top-14 md:-right-16 md:-top-16 lg:hidden">
              <motion.div
                style={
                  reducedMotion
                    ? undefined
                    : { x: globeX, y: globeY, scale: globeScale }
                }
                className="relative h-112 w-112 shrink-0 overflow-visible opacity-50 dark:opacity-80"
              >
                <GlobeCanvas />
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.13)_0%,rgba(59,130,246,.07)_35%,rgba(203,213,225,.04)_55%,transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(0,174,239,.34)_0%,rgba(49,87,213,.22)_32%,rgba(124,58,237,.18)_55%,transparent_75%)]" />
              </motion.div>
            </div>

            <div className="relative z-20 min-w-0 w-full lg:col-span-5 xl:col-span-5 2xl:col-span-4">
              <motion.h2
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-xl text-3xl font-bold leading-none tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl xl:text-6xl"
              >
                We engineer <span className="text-[#3157d5]">the</span>
                <span className="text-[#3157d5]"> future</span>
                <br />
                <span className="text-slate-900 dark:text-white">
                  one system at a time.
                </span>
              </motion.h2>

              <motion.p
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="relative mt-4 max-w-lg text-xs leading-7 text-slate-600 dark:text-slate-300 sm:text-sm"
              >
                Bytherix is Nepal&apos;s full-spectrum technology partner. We
                design and build web applications, AI solutions, IoT systems,
                robotics, mobile apps, and custom PCBs — all protected by
                enterprise-grade cybersecurity.
              </motion.p>

              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.16 }}
                className="group relative mt-6 flex h-40 w-full max-w-xl overflow-hidden rounded-2xl border border-[#3157d5]/25 bg-linear-to-br from-[#3157d5]/8 via-white/95 to-[#fd3b30]/6 p-4 shadow-xl shadow-[#00aeef]/10 backdrop-blur-xl dark:border-white/13 dark:bg-linear-to-br dark:from-[#071522]/95 dark:via-[#07111f]/90 dark:to-[#160b0b]/95 dark:shadow-black/25"
              >
                <motion.div
                  key={`info-${featureSlide}`}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex min-w-0 gap-3 sm:gap-4"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#3157d5]/30 bg-linear-to-br from-[#3157d5]/20 via-[#3157d5]/8 to-[#fd3b30]/12 sm:h-16 sm:w-16">
                    <svg
                      viewBox="0 0 64 64"
                      className="h-8 w-8 text-[#3157d5] sm:h-9 sm:w-9"
                      fill="none"
                    >
                      <path
                        d="M15 13h22c8 0 12 5 12 12v18c0 5-4 8-9 8H25c-6 0-10-4-10-10V13Z"
                        fill="currentColor"
                        opacity=".18"
                      />
                      <path
                        d="M18 18 31 31 20 42"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M35 42h13"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#3157d5] sm:text-xs">
                      {currentFeatureSlide.label}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                      {currentFeatureSlide.title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-[10px] leading-6 text-slate-600 dark:text-slate-300 sm:text-xs">
                      {currentFeatureSlide.body}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative z-20 min-w-0 w-full lg:col-span-7 xl:col-span-7 2xl:col-span-8">
              <div className="pointer-events-none absolute inset-y-0 -right-[92px] z-0 hidden items-center justify-end overflow-visible -translate-y-5 lg:flex sm:-right-24 sm:-translate-y-10 md:-translate-y-12 lg:-translate-y-14 xl:-translate-y-16">
                <motion.div
                  style={
                    reducedMotion
                      ? undefined
                      : { x: globeX, y: globeY, scale: globeScale }
                  }
                  className="relative h-80 w-80 shrink-0 overflow-visible opacity-30 sm:h-96 sm:w-96 sm:opacity-40 md:h-96 md:w-96 md:opacity-45 lg:h-128 lg:w-128 lg:opacity-50 xl:h-128 xl:w-128 xl:opacity-55 dark:opacity-60 lg:dark:opacity-80"
                >
                  <GlobeCanvas />
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,.13)_0%,rgba(59,130,246,.07)_35%,rgba(203,213,225,.04)_55%,transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(0,174,239,.34)_0%,rgba(49,87,213,.22)_32%,rgba(124,58,237,.18)_55%,transparent_75%)]" />
                </motion.div>
              </div>

              <div className="relative z-20">
                <AboutCard
                  displayedSlide={displayedSlide}
                  slides={BUILDER_SLIDES}
                  isFlipping={isFlipping}
                  imagesReady={imagesReady}
                  reducedMotion={reducedMotion}
                  browserY={browserY}
                  browserScale={browserScale}
                  onImageClick={handleImageClick}
                  onFlipComplete={finishFlip}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-8 w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:mt-10 dark:border-white/12 dark:bg-[#06101d]/75 dark:shadow-black/30">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-linear-to-r from-transparent via-[#3157d5]/60 to-transparent dark:via-[#3157d5]/40" />

            <motion.div
              key={`features-${featureSlide}`}
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.8,
                delay: 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid lg:grid-cols-3"
            >
              {currentFeatureSlide.features.map(
                (feature: BuilderFeature, index: number) => {
                  const featureColor = getFeatureColor(index);

                  return (
                    <motion.div
                      key={`${featureSlide}-${feature.num}`}
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reducedMotion ? 0 : 0.8,
                        delay: 0,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={reducedMotion ? undefined : { y: -2 }}
                      className={`group relative overflow-hidden px-4 py-4 transition-colors duration-300 sm:px-5 sm:py-5 lg:px-6 lg:py-6 ${index !== 0 ? "border-t border-slate-200/80 lg:border-l lg:border-t-0 dark:border-white/12" : ""}`}
                    >
                      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-[#3157d5]/5 via-transparent to-[#fd3b30]/4 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="flex items-start gap-3 sm:gap-4">
                        <motion.div
                          whileHover={
                            reducedMotion
                              ? undefined
                              : { scale: 1.06, rotate: 2 }
                          }
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          style={
                            { "--feature-color": featureColor } as CSSProperties
                          }
                          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color-mix(in_srgb,var(--feature-color)_24%,white)] bg-[color-mix(in_srgb,var(--feature-color)_11%,white)] shadow-sm dark:border-[color-mix(in_srgb,var(--feature-color)_32%,#020817)] dark:bg-[color-mix(in_srgb,var(--feature-color)_16%,#020817)] sm:h-14 sm:w-14"
                        >
                          <div className="pointer-events-none absolute inset-0 rounded-xl bg-[color-mix(in_srgb,var(--feature-color)_14%,transparent)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100 dark:bg-[color-mix(in_srgb,var(--feature-color)_18%,transparent)]" />

                          <div className="relative z-10">
                            <FeatureIcon
                              type={feature.icon}
                              color={featureColor}
                            />
                          </div>
                        </motion.div>

                        <div className="min-w-0 flex-1">
                          <div
                            className="mb-0.5 font-mono text-xs font-medium dark:opacity-90"
                            style={{ color: featureColor }}
                          >
                            {feature.num}
                          </div>
                          <h3 className="text-sm font-semibold leading-snug text-slate-900 transition-transform duration-300 group-hover:translate-x-px dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="mt-1 text-[10px] leading-5 text-slate-500 transition-colors duration-300 group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-300 sm:text-xs">
                            {feature.body}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-3 h-0.5 w-10 overflow-hidden rounded-full sm:w-12">
                        <div
                          className="absolute inset-y-0 left-0 w-full rounded-full transition-all duration-500 ease-out group-hover:w-20"
                          style={{
                            background:
                              index === 0
                                ? `linear-gradient(to right, ${AZURE_BLUE}, ${SOFT_TEAL})`
                                : index === 1
                                  ? "linear-gradient(to right, #fd3b30, #ff6b61)"
                                  : `linear-gradient(to right, ${FEATURE_GREEN}, ${AZURE_BLUE})`,
                          }}
                        />
                      </div>

                      <div
                        className="pointer-events-none absolute -bottom-8 -right-8 h-20 w-20 rounded-full bg-current blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{ color: `${featureColor}1A` }}
                      />
                    </motion.div>
                  );
                },
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
