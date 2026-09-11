import { motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";

import { companionSummary } from "../data/founderContent";
import SectionHeading from "../ui/SectionHeading";

const FounderCompanion = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 sm:h-52 sm:w-52"
          aria-hidden="true"
        >
          <Users className="h-16 w-16 text-cyan-300 sm:h-20 sm:w-20" />
        </motion.div>

        <div>
          <SectionHeading eyebrow="A companion on the path" title="He's not completely alone" />
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
            {companionSummary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderCompanion;