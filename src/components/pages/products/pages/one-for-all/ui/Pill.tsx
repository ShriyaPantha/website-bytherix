import type { LucideIcon } from "lucide-react";

interface PillProps {
  label: string;
  icon?: LucideIcon;
}

/**
 * Small rounded chip used for the supported-industries strip. Kept as a
 * separate primitive because it's rendered ~8 times in one section and
 * benefits from a single, easily-tweaked definition.
 */
const Pill = ({ label, icon: Icon }: PillProps) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-primary)] bg-[var(--surface-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:border-[var(--brand-blue-border)] hover:text-[var(--text-primary)]">
    {Icon && <Icon className="h-4 w-4 text-[var(--accent-blue)]" aria-hidden="true" />}
    {label}
  </span>
);

export default Pill;
