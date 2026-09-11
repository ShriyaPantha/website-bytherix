"use client";

import { motion } from "framer-motion";

const FACTS = [
  { label: "Years ago", value: "3" },
  { label: "Starting office", value: "Tea stall" },
  { label: "Investors", value: "None" },
  { label: "Business plan", value: "Ideas" },
];

const StoryBeginning = () => {
  return (
    <section className="relative bg-[var(--bg-secondary)] px-3 py-8 lg:py-8 sm:px-10 sm:py-24 lg:px-8 ">
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="space-y-10 sm:space-y-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 01</span>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">How Bytherix began</h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Three years ago, they started with something very simple. At first, the goal was not to change the world. Honestly, they just wanted to make money and build something of their own. Like everyone else, they were also told to get a good job, build a career, and aim for something "better than their level." But they had each other.
            </motion.p>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="border-l-4 border-[var(--accent-green)] bg-[var(--surface-secondary)] px-5 py-6 sm:px-6 sm:py-8">
              <p className="text-lg font-semibold leading-tight sm:text-xl lg:text-2xl">Whenever something went wrong or something went right, we would look at each other and laugh.</p>
              <p className="mt-3 text-xs text-[var(--text-muted)] sm:mt-4 sm:text-sm">A moment that became a favorite memory</p>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              It all started with simple conversations at a tea stall. They would sit together, drink tea, and talk about technology, upcoming hackathons, ideas, and all the things they wanted to build. They didn't have a proper office. They didn't have investors. They didn't have a business plan. They just had ideas.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-2 gap-4 border-t border-[var(--border-primary)] pt-8 sm:gap-6 sm:pt-12 lg:grid-cols-4">
            {FACTS.map((fact, idx) => (
              <motion.div key={fact.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }} className="text-center">
                <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] sm:text-xs">{fact.label}</div>
                <div className="mt-1.5 text-xl font-bold text-[var(--accent-green)] sm:mt-2 sm:text-2xl lg:text-3xl">{fact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryBeginning;