'use client';

import { motion } from 'framer-motion';

export default function StoryClosing() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--bg-primary)] px-6 py-24 text-center sm:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(23,182,167,0.06),transparent_65%)]" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-10">
        <div className="flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">07</span>
          <span>The bigger dream</span>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-lg text-[var(--text-secondary)]">
          Three years ago, they were just a group of kids sitting at a tea stall.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }} className="flex items-center gap-6 text-3xl">
          <span>☕</span>
          <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="text-[var(--accent-green)]">→</motion.span>
          <span>🌍</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg leading-relaxed text-[var(--text-secondary)]">
          Today, they are still those same people. They still sit together. They still argue. They still laugh when things go wrong. But now, they have something they didn't have back then.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="rounded-2xl border border-[var(--border-primary)] px-10 py-6">
          <p className="text-xl font-semibold text-[var(--text-primary)]">Bytherix Technology</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">And a bigger dream.</p>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-2xl font-medium text-[var(--text-primary)]">
          We started together. We will grow together.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.4 }} className="border-t border-[var(--border-primary)] pt-8 text-lg italic text-[var(--accent-green)]">
          "That was where it all began."
        </motion.p>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col items-center gap-1">
          <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">Bytherix Technology</span>
          <span className="text-xs text-[var(--text-muted)]">Tech . innovated . Secure</span>
        </motion.div>
      </div>
    </section>
  );
}