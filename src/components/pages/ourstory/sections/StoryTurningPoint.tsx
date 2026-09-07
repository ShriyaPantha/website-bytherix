'use client';

import { motion } from 'framer-motion';

const philosophy = ['Affordable prices', 'Low cost', 'High quality', 'Because quality matters'];

export default function StoryTurningPoint() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)] px-6 py-24 text-center sm:px-12 lg:px-20 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,78,188,0.08),transparent_65%)]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="mx-auto mb-8 h-px w-16 bg-[var(--accent-green)]" />

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight text-[var(--text-primary)]">
          One conversation at the tea stall changed everything
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
          Someone mentioned how much a simple website cost to build. The number felt absurd for something so simple. That's when the question came up.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: 0.3 }} className="mx-auto mt-12 max-w-xl rounded-2xl border border-[var(--border-primary)] px-8 py-10">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">The moment</p>
          <p className="mt-4 text-2xl font-medium text-[var(--accent-green)]">"Why don't we start something of our own?"</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.4 }} className="mx-auto mt-14 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {philosophy.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-[var(--border-primary)] px-5 py-4 text-left text-sm text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-green)]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}