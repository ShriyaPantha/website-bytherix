import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "ember";
}

/**
 * Small reveal-on-scroll label + heading unit shared by every section of
 * the Founder page, following the project's existing whileInView +
 * useReducedMotion convention (see About.tsx / Card.tsx).
 */
const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) => {
  const reduceMotion = useReducedMotion();
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-2xl flex-col gap-3 ${alignClass}`}
    >
      <span
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          tone === "ember" ? "text-orange-400" : "text-cyan-400"
        }`}
      >
        {eyebrow}
      </span>

      <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;