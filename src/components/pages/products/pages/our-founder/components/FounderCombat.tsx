import { motion, useReducedMotion } from "framer-motion";

import { combatPhilosophy, weapons } from "../data/founderContent";
import SectionHeading from "../ui/SectionHeading";

const FounderCombat = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Combat rooted in tradition"
          title="No guns. No robots. Just steel and skill."
          description={combatPhilosophy}
          tone="ember"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {weapons.map((weapon, index) => {
            const Icon = weapon.icon;

            return (
              <motion.div
                key={weapon.name}
                initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className="relative overflow-hidden rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-8 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(251,146,60,0.6), transparent 70%)" }}
                  aria-hidden="true"
                />

                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-400/10 text-orange-300">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)]">{weapon.name}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--text-muted)]">{weapon.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FounderCombat;