import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  developmentNote,
  ecosystemNodes,
  heroHeadline,
  heroSummary,
  productName,
  productTagline,
} from "../data/oneForAllContent";

/**
 * Abstract "system core" visualization: a central One For All node with
 * the platform's shared modules orbiting around it, connected by thin
 * lines. Stands in for a product screenshot, since the system is still
 * under development. Pure decoration (aria-hidden), so it never blocks
 * the accessible reading order of the hero text beside it.
 */
const SystemCoreVisual = () => {
  const reducedMotion = useReducedMotion();
  const radius = 150;
  const center = 200;

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[420px]"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
        {/* Connection lines */}
        {ecosystemNodes.map((_, index) => {
          const angle = (index / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <motion.line
              key={`line-${index}`}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="var(--border-primary)"
              strokeWidth={1.5}
              initial={reducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
              animate={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
            />
          );
        })}

        {/* Orbiting rings, purely ambient */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="var(--border-secondary)"
          strokeDasharray="2 6"
        />

        {/* Module nodes */}
        {ecosystemNodes.map((node, index) => {
          const angle = (index / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <motion.g
              key={node}
              initial={reducedMotion ? undefined : { opacity: 0, scale: 0.6 }}
              animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.08, ease: "easeOut" }}
            >
              <circle
                cx={x}
                cy={y}
                r={34}
                fill="var(--surface-primary)"
                stroke="var(--brand-blue-border)"
                strokeWidth={1.5}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight={600}
                fill="var(--text-secondary)"
              >
                {node}
              </text>
            </motion.g>
          );
        })}

        {/* Center node: One For All */}
        <motion.g
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.7 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <circle cx={center} cy={center} r={62} fill="var(--accent-blue)" opacity={0.12} />
          <circle
            cx={center}
            cy={center}
            r={48}
            fill="var(--surface-primary)"
            stroke="var(--accent-blue)"
            strokeWidth={2}
          />
          <text
            x={center}
            y={center - 6}
            textAnchor="middle"
            fontSize="13"
            fontWeight={700}
            fill="var(--text-primary)"
          >
            One For
          </text>
          <text
            x={center}
            y={center + 12}
            textAnchor="middle"
            fontSize="13"
            fontWeight={700}
            fill="var(--text-primary)"
          >
            All
          </text>
        </motion.g>
      </svg>
    </div>
  );
};

const OneForAllHero = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-40 lg:pt-48">
      {/* Ambient background grid + glow, matches the site's dark-tech hero language */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(var(--border-secondary)_1px,transparent_1px),linear-gradient(90deg,var(--border-secondary)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--accent-blue)]/15 blur-[140px]"
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue-border)] bg-[var(--brand-blue-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-blue)]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Product &middot; {productName}
          </span>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            {heroHeadline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            {heroSummary}
          </p>

          <p className="mt-4 max-w-2xl text-sm font-semibold text-[var(--accent-blue)]">
            {productTagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
            >
              Follow the platform&rsquo;s progress
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--brand-blue-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)]"
            >
              See what it brings together
            </a>
          </div>

          <p className="mt-8 max-w-xl text-xs leading-6 text-[var(--text-muted)]">
            {developmentNote}
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.92 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <SystemCoreVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default OneForAllHero;
