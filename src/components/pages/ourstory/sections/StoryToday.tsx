"use client";

import { motion } from "framer-motion";

const STATS = [
  { number: "3", label: "Years of Journey" },
  { number: "∞", label: "To Learn" },
  { number: "🌍", label: "Global Dream" },
];

const StoryToday = () => {
  return (
    <section className="relative bg-[var(--bg-secondary)] px-5 py-8 lg:py-8 sm:px-10 sm:py-24 lg:px-20 ">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="space-y-10 sm:space-y-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 05</span>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">Bytherix today</h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Still learning.
              <span className="block">Still growing.</span>
              <span className="block">Still building.</span>
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Bytherix Technology is still far from where they want to be. But the original belief has never changed. The company grew from a simple idea at a tea stall into something bigger. But the vision remains rooted in what they believed from day one.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-3 gap-3 sm:gap-6">
            {STATS.map((item, idx) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }} className="rounded-xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-4 text-center sm:p-8">
                <div className="mb-1.5 text-2xl font-bold text-[var(--accent-green)] sm:mb-2 sm:text-4xl">{item.number}</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] sm:text-sm">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="border-l-4 border-[var(--accent-green)] bg-[var(--surface-secondary)] px-5 py-6 sm:px-8 sm:py-8">
            <p className="mb-3 text-[10px] uppercase tracking-widest text-[var(--text-muted)] sm:mb-4 sm:text-xs">The commitment</p>
            <p className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">We didn't start with a huge office, millions of dollars, or a perfect business plan.</p>
            <p className="mt-3 text-base text-[var(--text-secondary)] sm:mt-4 sm:text-lg">What we had was crazy ideas, good friends, the courage to start, and the willingness to keep going when everything goes wrong.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryToday;