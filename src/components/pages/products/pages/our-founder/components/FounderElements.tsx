import { motion, useReducedMotion } from "framer-motion";

import { elements, elementsSummary } from "../data/founderContent";
import SectionHeading from "../ui/SectionHeading";

const FounderElements = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.5), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Elemental power system"
          title="Power is earned, not given"
          description={elementsSummary}
          align="center"
          tone="ember"
        />

        {/* Progression track: unlocked element -> future elements */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4">
          {elements.map((element, index) => {
            const Icon = element.icon;
            const isUnlocked = element.status === "unlocked";

            return (
              <div key={element.name} className="flex items-center gap-4 sm:gap-4">
                <motion.div
                  initial={reduceMotion ? undefined : { opacity: 0, scale: 0.85 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex w-56 flex-col items-center gap-3 rounded-2xl border p-6 text-center shadow-[var(--shadow-card)] ${
                    isUnlocked
                      ? "border-orange-400/40 bg-gradient-to-b from-orange-400/15 to-transparent"
                      : "border-[var(--border-primary)] bg-[var(--surface-primary)]"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full border ${
                      isUnlocked
                        ? "border-orange-400/40 bg-orange-400/15 text-orange-300"
                        : "border-[var(--border-secondary)] bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                    }`}
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>

                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      isUnlocked ? "text-orange-300" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {isUnlocked ? "First element" : "What comes next"}
                  </span>

                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{element.name}</h3>
                  <p className="text-sm leading-6 text-[var(--text-muted)]">{element.meaning}</p>
                </motion.div>

                {index < elements.length - 1 && (
                  <span
                    className="hidden h-px w-10 bg-gradient-to-r from-orange-400/60 to-transparent sm:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FounderElements;