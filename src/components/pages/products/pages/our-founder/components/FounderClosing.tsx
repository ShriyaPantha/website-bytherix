import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

import { closingHook, closingStatement } from "../data/founderContent";

const FounderClosing = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-30 blur-[120px]"
        style={{ background: "linear-gradient(to top, rgba(234,88,12,0.35), transparent)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-300">
          <Flame className="h-7 w-7" aria-hidden="true" />
        </span>

        <p className="text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
          {closingStatement}
        </p>

        <p className="bg-gradient-to-r from-orange-300 via-red-400 to-orange-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          {closingHook}
        </p>

        <Link
          to="/products"
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[var(--border-primary)] bg-[var(--surface-primary)] px-7 py-3.5 text-base font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:border-orange-400/40 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
        >
          Explore all Bytherix products
        </Link>
      </motion.div>
    </section>
  );
};

export default FounderClosing;