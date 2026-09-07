'use client';

import { motion } from 'framer-motion';

const beliefs = [
  { emoji: '🌐', title: 'Technology for Everyone', description: 'Technology should not only belong to people who can afford expensive solutions.' },
  { emoji: '✨', title: 'Quality Matters', description: 'Build high-quality technology that is accessible and affordable.' },
  { emoji: '🎯', title: 'Real Opportunities', description: 'Give young people opportunities to work on real problems.' },
  { emoji: '🚀', title: 'Learning Without Fear', description: 'Create an environment where people can learn without being afraid of failure.' },
];

const manifesto = ['Crazy ideas', 'Good friends', 'Courage to start', 'Willingness to keep going'];

export default function StoryBeliefs() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">06</span>
          <span>What we believe</span>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-xl text-lg text-[var(--text-secondary)]">
          These core beliefs have guided every decision from day one.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {beliefs.map((belief, i) => (
            <motion.div key={belief.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative overflow-hidden rounded-xl border border-[var(--border-primary)] bg-[var(--bg-primary)] p-6">
              <span className="text-2xl">{belief.emoji}</span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{belief.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{belief.description}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--accent-green)] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="relative mt-16 rounded-2xl border border-[var(--border-primary)] p-10 text-center">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Our manifesto</p>
          <p className="mx-auto mt-4 max-w-md text-lg text-[var(--text-primary)]">Sometimes, all you need is:</p>
          <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
            {manifesto.map((item) => (
              <span key={item} className="rounded-lg border border-[var(--border-primary)] px-4 py-3">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}