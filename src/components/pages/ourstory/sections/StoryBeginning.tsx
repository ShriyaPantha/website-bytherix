'use client';

import { motion } from 'framer-motion';

const facts = [
  { label: 'Years ago', value: '3' },
  { label: 'Starting office', value: 'Tea stall' },
  { label: 'Investors', value: 'None' },
  { label: 'Business plan', value: 'Just ideas' },
];

export default function StoryBeginning() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-8 flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">01</span>
          <span>How Bytherix began</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg leading-relaxed text-[var(--text-secondary)]">
          It started with nothing more than a simple goal — and each other. No funding, no office, no roadmap. Just three friends who kept showing up to the same tea stall, talking about what they could build if they ever got the chance.
        </motion.p>

        <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="my-10 border-l-2 border-[var(--accent-green)] pl-6 text-xl italic text-[var(--text-primary)]">
          Whenever something went wrong or went right, we would look at each other and laugh.
        </motion.blockquote>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg leading-relaxed text-[var(--text-secondary)]">
          That tea stall became the closest thing they had to an office. Every idea, every argument, every small win started right there, over a cup of tea.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-14 grid grid-cols-2 gap-6 border-t border-[var(--border-primary)] pt-10 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1">
              <span className="text-2xl font-semibold text-[var(--text-primary)]">{fact.value}</span>
              <span className="text-sm text-[var(--text-muted)]">{fact.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}