"use client";

import { motion, type Variants } from "framer-motion";

const BELIEFS = [
  { title: "Technology for Everyone", description: "Technology should not only belong to people who can afford expensive solutions.", icon: "🌐" },
  { title: "Quality Matters", description: "Build high-quality technology that is accessible and affordable.", icon: "✨" },
  { title: "Real Opportunities", description: "Give young people opportunities to work on real problems and real projects.", icon: "🎯" },
  { title: "Learning Without Fear", description: "Create an environment where people can learn without being afraid of failure.", icon: "🚀" },
];

const MANIFESTO = ["Crazy ideas", "Good friends", "Courage to start", "Willingness to keep going"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const StoryBeliefs = () => {
  return (
    <section className="relative bg-[var(--bg-primary)] px-5 py-16 sm:px-10 sm:py-24 lg:px-20 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-l from-[var(--accent-green)]/10 to-transparent blur-3xl sm:h-80 sm:w-80" />

      <div className="relative z-10 mx-auto max-w-3xl lg:max-w-5xl">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="space-y-10 sm:space-y-16">
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 06</span>
              <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">What we believe</h2>
            </div>
            <p className="max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">These core beliefs have guided every decision from day one and continue to shape Bytherix Technology.</p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {BELIEFS.map((belief) => (
              <motion.div key={belief.title} variants={itemVariants} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-6 transition-all duration-300 hover:border-[var(--accent-green)]/50 hover:shadow-lg sm:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-green)]/5 to-[var(--accent-blue)]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  <div className="text-3xl sm:text-4xl">{belief.icon}</div>
                  <h3 className="text-lg font-bold leading-tight sm:text-xl">{belief.title}</h3>
                  <p className="leading-relaxed text-[var(--text-secondary)]">{belief.description}</p>
                </div>
                <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="relative rounded-2xl border-2 border-[var(--accent-green)] bg-gradient-to-br from-[var(--surface-secondary)] to-[var(--surface-primary)] px-6 py-10 sm:px-12 sm:py-16">
            <div className="absolute right-0 top-0 -m-1 h-10 w-10 rounded-bl-2xl border-b-2 border-l-2 border-[var(--accent-green)]/30 sm:h-12 sm:w-12" />
            <div className="absolute bottom-0 left-0 -m-1 h-10 w-10 rounded-tr-2xl border-r-2 border-t-2 border-[var(--accent-green)]/30 sm:h-12 sm:w-12" />

            <div className="relative space-y-4 text-center sm:space-y-6">
              <p className="text-xs uppercase tracking-widest text-[var(--accent-green)] sm:text-sm">Our Manifesto</p>
              <p className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">Sometimes, all you need is:</p>
              <div className="grid grid-cols-2 gap-3 pt-4 sm:gap-4 lg:grid-cols-4">
                {MANIFESTO.map((item, idx) => (
                  <motion.div key={item} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + idx * 0.08 }} className="rounded-lg bg-[var(--bg-primary)] px-3 py-2 text-xs font-semibold text-[var(--accent-green)] sm:text-sm">
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryBeliefs;