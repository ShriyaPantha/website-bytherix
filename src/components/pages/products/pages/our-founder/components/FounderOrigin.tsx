import { motion, useReducedMotion } from "framer-motion";

import { originStory } from "../data/founderContent";
import SectionHeading from "../ui/SectionHeading";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const FounderOrigin = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="origin" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="A story that starts with tragedy"
          title="One family. One night. One purpose."
          tone="ember"
        />

        <motion.ol
          variants={reduceMotion ? undefined : containerVariants}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.25 }}
          className="relative mt-14 flex flex-col gap-6 sm:gap-8"
        >
          {originStory.map((beat, index) => (
            <motion.li
              key={beat.title}
              variants={reduceMotion ? undefined : itemVariants}
              className="relative flex flex-col gap-2 rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-primary)] p-6 shadow-[var(--shadow-card)] sm:flex-row sm:items-start sm:gap-6 sm:p-8"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-orange-400/30 bg-orange-400/10 text-base font-bold text-orange-300"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">{beat.title}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--text-muted)]">{beat.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default FounderOrigin;