import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { developmentNote } from "../data/oneForAllContent";

const OneForAllCTA = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <motion.div
        initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border-primary)] bg-[var(--surface-primary)]/70 px-8 py-16 text-center backdrop-blur-xl sm:px-16"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-blue-soft),transparent_70%)]"
        />

        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            One account. Every business you run.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--text-secondary)]">
            One For All is being built by Bytherix Technology to bring your
            operations, data, employees and customers into a single
            platform. Reach out to follow its progress or talk through what
            your business needs.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              to="/products/our-founder"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--brand-blue-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
            >
              Meet the founder
            </Link>
          </div>

          <p className="mx-auto mt-8 max-w-lg text-xs leading-6 text-[var(--text-muted)]">
            {developmentNote}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default OneForAllCTA;
