"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { stage: "01", label: "Ideas", emoji: "💭" },
  { stage: "02", label: "Starting", emoji: "🚀" },
  { stage: "03", label: "Learning", emoji: "📚" },
  { stage: "04", label: "Failing", emoji: "⚡" },
  { stage: "05", label: "Building", emoji: "🔨" },
  { stage: "06", label: "Fixing", emoji: "🔧" },
  { stage: "07", label: "Hackathons", emoji: "🏆" },
  { stage: "08", label: "Growing", emoji: "📈" },
  { stage: "09", label: "Bytherix", emoji: "✨" },
];

const StoryJourney = () => {
  return (
    <section className="relative bg-[var(--bg-primary)] px-5 py-8 lg:py-8 sm:px-10 sm:py-24 lg:px-20 ">
      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="space-y-10 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-blue)] sm:text-sm">→ 03</span>
              <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">The journey</h2>
            </div>
            <p className="max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">From the first ideas at the tea stall to becoming Bytherix Technology.</p>
          </div>

          {/* Laptop / desktop: horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative pt-16">
              <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute left-0 right-0 top-8 h-1 origin-left bg-gradient-to-r from-[var(--accent-green)]/40 via-[var(--accent-blue)]/40 to-[var(--accent-green)]/40" />
              <div className="grid grid-cols-9 gap-2">
                {MILESTONES.map((m, idx) => (
                  <motion.div key={m.stage} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06 }} className="flex flex-col items-center">
                    <motion.div whileHover={{ scale: 1.15 }} className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--accent-green)] bg-[var(--bg-primary)] shadow-lg">
                      <span className="text-xl">{m.emoji}</span>
                    </motion.div>
                    <div className="text-center">
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--accent-green)]">{m.stage}</p>
                      <p className="text-sm font-semibold">{m.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / tablet: vertical timeline */}
          <div className="lg:hidden">
            <div className="relative space-y-6 pl-7 sm:space-y-8 sm:pl-8">
              <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute bottom-0 left-3.5 top-0 w-1 origin-top bg-gradient-to-b from-[var(--accent-green)]/40 via-[var(--accent-blue)]/40 to-[var(--accent-green)]/40 sm:left-4" />
              {MILESTONES.map((m, idx) => (
                <motion.div key={m.stage} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="relative flex items-center gap-4 sm:gap-6">
                  <div className="absolute -left-6 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--accent-green)] bg-[var(--bg-primary)] text-xs sm:-left-7 sm:h-8 sm:w-8 sm:text-sm">{m.emoji}</div>
                  <div className="flex-1 rounded-lg border border-[var(--border-primary)] bg-[var(--surface-secondary)] px-4 py-2.5 sm:py-3">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-green)] sm:text-xs">{m.stage}</p>
                    <p className="text-sm font-semibold sm:text-base">{m.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="border-t border-[var(--border-primary)] pt-8 sm:pt-12">
            <p className="max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              We failed. We started again. We built projects. We broke things. We fixed them. We entered hackathons. We worked late. We argued about ideas. We laughed about stupid mistakes. And slowly, that small idea from a tea stall became something bigger.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryJourney;