'use client';

import { motion } from 'framer-motion';

export default function StoryHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-6 py-24 text-center sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(23,182,167,0.08),transparent_60%)]" />

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 mb-6 flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--accent-green)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-green)]" />
        Our Story
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative z-10 max-w-4xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.1] text-[var(--text-primary)]">
        From a simple conversation at a tea stall<br className="hidden sm:block" />
        to a dream of building{' '}
        <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] bg-clip-text text-transparent">something global</span>
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="relative z-10 mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
        Three friends, no office, no investors — just an idea, some tea, and the courage to start something of their own.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }} className="relative z-10 mt-16 flex flex-col items-center gap-3">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute h-16 w-16 rounded-full border border-[var(--accent-green)]/30" />
          <span className="absolute h-10 w-10 rounded-full border border-[var(--accent-blue)]/40" />
          <span className="absolute h-4 w-4 rounded-full bg-[var(--accent-green)]/70" />
        </div>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Scroll</motion.span>
      </motion.div>
    </section>
  );
}