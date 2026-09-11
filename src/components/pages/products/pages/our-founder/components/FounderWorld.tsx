import { motion, useReducedMotion } from "framer-motion";

import { missionStructure, worldSummary } from "../data/founderContent";
import SectionHeading from "../ui/SectionHeading";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const FounderWorld = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="A journey across a living world"
          title="One map opens into many"
          description={worldSummary}
        />

        <motion.div
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3"
        >
          {missionStructure.map((mission) => {
            const Icon = mission.icon;

            return (
              <motion.div
                key={mission.label}
                variants={reduceMotion ? undefined : cardVariants}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-7 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-300">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">{mission.count}</span>
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    {mission.label}
                  </span>
                </div>

                <p className="text-sm leading-6 text-[var(--text-muted)]">{mission.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FounderWorld;