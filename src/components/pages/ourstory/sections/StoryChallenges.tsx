'use client';

import { motion } from 'framer-motion';

const challenges = ['Times when projects failed', 'Moments when money was tight', 'Plans that had to change overnight', 'Long stretches of uncertainty', 'Days full of doubt'];

export default function StoryChallenges() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">04</span>
          <span>The hard days</span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold text-[var(--accent-red)]">
          Things went wrong
        </motion.h2>

        <motion.ul initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto mt-8 flex max-w-md flex-col gap-3 text-left">
          {challenges.map((c) => (
            <li key={c} className="flex items-start gap-3 text-[var(--text-secondary)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--text-muted)]" />
              {c}
            </li>
          ))}
        </motion.ul>

        <div className="mx-auto my-14 h-px w-24 bg-[var(--border-primary)]" />

        <motion.h3 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-2xl font-semibold text-[var(--text-primary)]">
          But we were never alone
        </motion.h3>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto mt-8 max-w-xl rounded-2xl border border-[var(--border-primary)] px-8 py-10 text-lg leading-relaxed text-[var(--text-secondary)]">
          Whenever things became difficult, we looked at each other's faces... and laughed. Not because everything was okay. But because we knew we were not alone.
        </motion.div>
      </div>
    </section>
  );
}