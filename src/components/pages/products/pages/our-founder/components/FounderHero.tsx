import { motion, useReducedMotion } from "framer-motion";
import { Flame, Gamepad2 } from "lucide-react";

import { category, gameSubtitle, gameTitle, heroSummary, heroTagline } from "../data/founderContent";

/**
 * Ember/fire-toned hero, layered on top of the site's existing dark
 * background tokens. Fire is the game's first and emotionally central
 * element, so the accent shift is deliberate and scoped to this page.
 */
const FounderHero = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-36 sm:pt-44">
      {/* Ambient background: ember glow + subtle grid, purely decorative */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        <div
          className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(251,146,60,0.35), transparent 70%)" }}
        />
        <div
          className="absolute right-[8%] top-[20%] h-[360px] w-[360px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(200,30,44,0.3), transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <motion.div
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300"
        >
          <Gamepad2 className="h-4 w-4" aria-hidden="true" />
          {category}
        </motion.div>

        <motion.h1
          {...fadeUp(0.08)}
          className="text-5xl font-bold leading-[1.05] text-[var(--text-primary)] sm:text-6xl lg:text-7xl"
        >
          {gameTitle}
          <span className="mt-2 block bg-gradient-to-r from-orange-300 via-red-400 to-orange-200 bg-clip-text text-transparent">
            {gameSubtitle}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.16)}
          className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[var(--text-secondary)] sm:text-xl"
        >
          {heroTagline}
        </motion.p>

        <motion.p
          {...fadeUp(0.22)}
          className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)]"
        >
          {heroSummary}
        </motion.p>

        <motion.a
          {...fadeUp(0.3)}
          href="#origin"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_rgba(234,88,12,0.35)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
        >
          <Flame className="h-5 w-5" aria-hidden="true" />
          Begin the story
        </motion.a>
      </div>
    </section>
  );
};

export default FounderHero;