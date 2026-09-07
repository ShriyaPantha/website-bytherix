'use client';

import { motion } from 'framer-motion';

const milestones = [
  { emoji: '💭', label: 'Ideas' },
  { emoji: '🚀', label: 'Starting' },
  { emoji: '📚', label: 'Learning' },
  { emoji: '⚡', label: 'Failing' },
  { emoji: '🔨', label: 'Building' },
  { emoji: '🔧', label: 'Fixing' },
  { emoji: '🏆', label: 'Hackathons' },
  { emoji: '📈', label: 'Growing' },
  { emoji: '✨', label: 'Bytherix' },
];

export default function StoryJourney() {
  return (
    <section className="bg-[var(--bg-primary)] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">03</span>
          <span>The journey</span>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-xl text-lg text-[var(--text-secondary)]">
          From the first ideas at the tea stall to becoming Bytherix Technology.
        </motion.p>

        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-[var(--border-primary)]" />
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease: 'easeInOut' }} style={{ transformOrigin: 'left' }} className="absolute left-0 right-0 top-6 h-px bg-[var(--accent-green)]" />
          <div className="relative grid grid-cols-9 gap-2">
            {milestones.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-primary)] bg-[var(--bg-primary)] text-xl">{m.emoji}</span>
                <span className="text-xs text-[var(--text-muted)]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium text-[var(--text-primary)]">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 space-y-8 border-l border-[var(--border-primary)] pl-6 lg:hidden">
          {milestones.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: i * 0.06 }} className="relative flex items-center gap-4">
              <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-green)] text-xs">{m.emoji}</span>
              <span className="text-sm font-medium text-[var(--text-primary)]">{m.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mt-16 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
          We failed. We started again. We built projects. We broke things. We fixed them.
        </motion.p>
      </div>
    </section>
  );
}