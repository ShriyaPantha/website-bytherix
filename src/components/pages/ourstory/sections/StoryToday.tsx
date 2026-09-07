'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '3', label: 'Years of journey' },
  { value: '∞', label: 'To learn' },
  { value: '🌍', label: 'Global dream' },
];

export default function StoryToday() {
  return (
    <section className="bg-[var(--bg-primary)] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">05</span>
          <span>Bytherix today</span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight text-[var(--text-primary)]">
          Still learning. Still growing. Still building.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-6 max-w-xl text-lg text-[var(--text-secondary)]">
          We're still far from where we want to be. But the belief we started with hasn't changed.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-14 grid grid-cols-3 gap-6 border-y border-[var(--border-primary)] py-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-3xl font-semibold text-[var(--accent-green)]">{stat.value}</span>
              <span className="text-sm text-[var(--text-muted)]">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-14 border-l-2 border-[var(--accent-green)] pl-6">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">The commitment</p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-primary)]">
            We didn't start with a huge office, millions of dollars, or a perfect business plan. What we had was crazy ideas, good friends, the courage to start, and the willingness to keep going when everything goes wrong.
          </p>
        </motion.div>
      </div>
    </section>
  );
}