import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a grid/list of GlassCard (or similar motion) children so they
 * reveal with a staggered fade/rise the first time the section scrolls
 * into view. Respects prefers-reduced-motion by skipping the animation
 * entirely and rendering children in their resting state.
 */
const StaggerGrid = ({ children, className = "" }: StaggerGridProps) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerGrid;
