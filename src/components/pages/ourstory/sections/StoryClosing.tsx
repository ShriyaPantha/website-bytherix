"use client";

import { motion } from "framer-motion";

const StoryClosing = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-8 lg:py-8 sm:px-10 sm:py-24 lg:px-20 ">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--surface-secondary)] to-[var(--bg-primary)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--accent-green)]/10 via-[var(--accent-blue)]/10 to-[var(--accent-green)]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto max-w-2xl lg:max-w-3xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="flex min-h-screen flex-col items-center justify-center space-y-10 text-center sm:space-y-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-4 sm:space-y-6">
            <div className="flex items-center justify-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 07</span>
              <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">The bigger dream</h2>
            </div>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">Three years ago, they were just a group of kids sitting at a tea stall, talking about technology and dreaming about the future.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="my-6 flex items-center justify-center gap-4 sm:my-12">
            <div className="text-center">
              <div className="mb-1.5 text-4xl sm:mb-2 sm:text-5xl">☕</div>
              <p className="text-[10px] font-semibold uppercase text-[var(--text-muted)] sm:text-xs">Tea stall</p>
            </div>
            <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-xl font-bold text-[var(--accent-green)] sm:text-2xl">→</motion.div>
            <div className="text-center">
              <div className="mb-1.5 text-4xl sm:mb-2 sm:text-5xl">🌍</div>
              <p className="text-[10px] font-semibold uppercase text-[var(--text-muted)] sm:text-xs">Global</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="w-full space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-base text-[var(--text-secondary)] sm:text-lg">They still sit together. They still argue. They still laugh when things go wrong.</p>
              <p className="text-base text-[var(--text-secondary)] sm:text-lg">But now, they have something they didn't have back then.</p>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="relative rounded-2xl border-2 border-[var(--accent-green)] bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-secondary)] px-5 py-6 sm:px-6 sm:py-8">
              <p className="text-xl font-bold sm:text-2xl lg:text-3xl">
                <span className="bg-gradient-to-r from-[var(--accent-green)] via-[var(--accent-blue)] to-[var(--accent-green)] bg-clip-text text-transparent">Bytherix Technology</span>
              </p>
              <p className="mt-2.5 text-[var(--text-secondary)] sm:mt-3">And a bigger dream.</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }} className="space-y-5 pt-4 sm:space-y-6 sm:pt-8">
            <p className="text-base text-[var(--text-secondary)] sm:text-lg">They don't know exactly where this journey will take them. But they know one thing.</p>
            <p className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              <span className="block">We started together.</span>
              <span className="block text-[var(--accent-green)]">We will grow together.</span>
            </p>
            <p className="pt-2 text-base text-[var(--text-secondary)] sm:pt-4 sm:text-lg">And one day, they hope to look back at that small tea stall and say:</p>
            <div className="rounded-xl border border-[var(--accent-blue)]/40 bg-[var(--accent-blue)]/5 px-5 py-6 sm:px-6 sm:py-8">
              <p className="text-lg font-bold sm:text-xl lg:text-2xl">"That was where it all began."</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }} className="w-full border-t border-[var(--border-primary)] pt-8 sm:pt-12">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] sm:text-sm">Bytherix Technology</p>
            <p className="mt-2.5 text-base font-semibold text-[var(--accent-green)] sm:mt-3 sm:text-lg">Tech . innovated . Secure</p>
            <p className="mt-3 text-sm text-[var(--text-secondary)] sm:mt-4 sm:text-base">From a simple conversation at a tea stall... to a dream of building something global.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryClosing;