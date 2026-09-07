"use client";

import { motion } from "framer-motion";

const PHILOSOPHY = ["Affordable prices", "Low cost", "High quality", "Because quality matters"];

const StoryTurningPoint = () => {
  return (
    <section className="relative bg-[var(--bg-primary)] px-5 py-16 sm:px-10 sm:py-24 lg:px-20 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[var(--accent-green)]/5 to-[var(--accent-blue)]/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto max-w-2xl lg:max-w-3xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }} className="space-y-8 text-center sm:space-y-12">
          <div className="flex justify-center">
            <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-block h-1 w-10 rounded-full bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] sm:w-12" />
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-5 sm:space-y-6">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              One conversation at the tea stall
              <span className="mt-1.5 block bg-gradient-to-r from-[var(--accent-green)] via-[var(--accent-blue)] to-[var(--accent-green)] bg-clip-text text-transparent sm:mt-2">changed everything.</span>
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              One day, while they were sitting at the tea stall, they heard someone talking about how much money they had paid to build their dream website. They were shocked. The amount was almost double what they believed the project should have cost.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-2xl border border-[var(--accent-green)]/20 bg-[var(--surface-secondary)]/50 px-6 py-8 sm:px-12 sm:py-12">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-[var(--text-muted)] sm:mb-6 sm:text-xs">The moment</p>
            <p className="text-2xl font-bold leading-tight text-[var(--accent-green)] sm:text-3xl lg:text-4xl">"Why don't we start something of our own?"</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.3 }} className="grid grid-cols-2 gap-3 pt-4 sm:gap-4 sm:pt-8 lg:grid-cols-4">
            {PHILOSOPHY.map((item, idx) => (
              <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }} className="flex flex-col items-center gap-2.5 rounded-lg border border-[var(--border-primary)] bg-[var(--surface-secondary)] px-3 py-5 sm:gap-3 sm:px-4 sm:py-6">
                <span className="text-xl text-[var(--accent-green)] sm:text-2xl">✓</span>
                <span className="text-center text-xs font-semibold leading-tight sm:text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryTurningPoint;