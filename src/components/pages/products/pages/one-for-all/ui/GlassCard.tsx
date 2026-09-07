import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const glassCardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Shared glass-surface card used for capability, module, role, package and
 * roadmap cards. Provides the site's translucent-panel + soft-border +
 * hover-elevation treatment in one place instead of repeating the class
 * list in every section. Wrap in an <li> at the call site when used inside
 * a semantic list.
 */
const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={glassCardVariants}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border-primary)] bg-[var(--surface-primary)]/70 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[var(--brand-blue-border)] hover:shadow-[var(--shadow-card-hover)] ${className}`}
    >
      {/* Ambient corner glow, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--accent-blue)]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
