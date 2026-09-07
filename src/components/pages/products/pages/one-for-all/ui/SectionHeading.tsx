import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Shared section header used across every One For All page section:
 * an uppercase eyebrow label, a large heading, and an optional
 * supporting description. Keeps heading rhythm/typography consistent
 * without repeating the same markup in every section.
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const reducedMotion = useReducedMotion();
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left";

  return (
    <motion.div
      initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--brand-blue-border)] bg-[var(--brand-blue-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-blue)]">
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
