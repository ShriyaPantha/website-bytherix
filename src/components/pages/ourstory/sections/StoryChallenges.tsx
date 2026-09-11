"use client";

import { motion } from "framer-motion";

const CHALLENGES = ["Times when projects failed", "Moments when money was tight", "Days when plans changed", "Uncertainty and doubt", "Questioning themselves"];

const StoryChallenges = () => {
  return (
    <section className="relative overflow-hidden px-3 py-8 lg:py-8 sm:px-10 sm:py-24 lg:px-8 ">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--surface-secondary)] to-[var(--bg-primary)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-48 w-48 rounded-full bg-[var(--accent-blue)]/5 blur-3xl sm:h-64 sm:w-64" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-48 w-48 rounded-full bg-[var(--accent-red)]/5 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative z-10 mx-auto max-w-2xl lg:max-w-3xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="space-y-8 text-center sm:space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 04</span>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">The hard days</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-3xl font-bold leading-tight text-[var(--accent-red)] sm:text-4xl lg:text-5xl">Things went wrong.</h3>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">Projects failed. Money was tight. Plans changed. Everything seemed harder than expected.</p>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-2.5 border-y border-[var(--border-primary)] py-6 sm:space-y-3 sm:py-8">
              {CHALLENGES.map((challenge, idx) => (
                <motion.p key={challenge} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }} className="text-base text-[var(--text-secondary)] sm:text-lg">
                  • {challenge}
                </motion.p>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.4 }} className="space-y-5 pt-6 sm:space-y-6 sm:pt-8">
              <p className="text-lg font-semibold text-[var(--accent-green)] sm:text-xl">But we were never alone.</p>
              <div className="relative rounded-2xl border-2 border-[var(--accent-green)] bg-gradient-to-br from-[var(--surface-primary)] to-[var(--surface-secondary)] px-5 py-6 sm:px-6 sm:py-8">
                <p className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">Whenever things became difficult, we looked at each other's faces... and laughed.</p>
                <p className="mt-3 text-[var(--text-secondary)] sm:mt-4">Not because everything was okay. But because we knew we were not alone.</p>
              </div>
              <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                That became their strength. They learned technology. They learned business. They learned from mistakes. They were not alone in the journey.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryChallenges;