import { AlertTriangle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import StaggerGrid from "../ui/StaggerGrid";
import { problems } from "../data/oneForAllContent";

const OneForAllProblem = () => {
  return (
    <section className="relative px-6 py-8 lg:py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Why a unified platform"
          title="Running separate software for every task adds up"
          description="Many businesses depend on a different system for accounting, inventory, billing, attendance, customers and reporting. Each one may work on its own, but running them together creates problems of its own."
        />

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <GlassCard key={problem.title}>
              <AlertTriangle
                className="h-5 w-5 text-[var(--accent-red)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {problem.description}
              </p>
            </GlassCard>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default OneForAllProblem;
