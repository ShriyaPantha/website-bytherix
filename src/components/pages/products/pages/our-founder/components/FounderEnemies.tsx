import { motion, useReducedMotion } from "framer-motion";
import { Crown } from "lucide-react";

import { antagonist, enemies } from "../data/founderContent";
import SectionHeading from "../ui/SectionHeading";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const FounderEnemies = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Enemies that shape the world"
          title="Dangerous, and layered"
          tone="ember"
        />

        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {enemies.map((enemy) => {
            const Icon = enemy.icon;

            return (
              <motion.div
                key={enemy.name}
                variants={reduceMotion ? undefined : cardVariants}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-6 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-secondary)] bg-[var(--bg-tertiary)] text-[var(--accent-red)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="text-base font-semibold text-[var(--text-primary)]">{enemy.name}</h3>
                <p className="text-sm leading-6 text-[var(--text-muted)]">{enemy.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Antagonist spotlight */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-red-500/25 bg-gradient-to-br from-red-950/40 via-[var(--surface-primary)] to-[var(--surface-primary)] p-8 shadow-[var(--shadow-card)] sm:p-12"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-25 blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(200,30,44,0.6), transparent 70%)" }}
            aria-hidden="true"
          />

          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-red-300">
            <Crown className="h-7 w-7" aria-hidden="true" />
          </span>

          <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            {antagonist.name}
          </h3>

          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            {antagonist.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderEnemies;