'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Lightbulb, Target } from 'lucide-react';

const beliefs = [
  { icon: Users, title: 'Talented People', description: 'People with real talent were not being paid fairly for the work they could do.' },
  { icon: BookOpen, title: 'Learning Barriers', description: 'Good learning resources were often too expensive for the people who needed them most.' },
  { icon: Lightbulb, title: 'Real Experience', description: 'Young people rarely got the chance to work on problems that actually mattered.' },
  { icon: Target, title: 'Growth Together', description: 'Everyone grows faster with a community that supports them, not one competing against them.' },
];

export default function StoryPurpose() {
  return (
    <section className="bg-[var(--bg-secondary)] px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
          <span className="text-[var(--accent-blue)]">02</span>
          <span>More than a company</span>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="max-w-2xl text-lg text-[var(--text-secondary)]">
          But as they learned more, they realized something important — this wasn't only about building a business.
        </motion.p>

        <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="my-12 max-w-2xl border-l-2 border-[var(--accent-red)] pl-6 text-2xl font-medium leading-snug text-[var(--text-primary)]">
          We didn't just want to build a company. We wanted to build a place where people could learn, build, and grow together.
        </motion.blockquote>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {beliefs.map((belief, i) => (
            <motion.div key={belief.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className="group rounded-xl border border-[var(--border-primary)] bg-[var(--bg-primary)] p-6 transition-colors hover:border-[var(--accent-blue)]">
              <belief.icon className="h-6 w-6 text-[var(--accent-blue)]" strokeWidth={1.5} />
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{belief.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{belief.description}</p>
              <div className="mt-4 h-px w-0 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}