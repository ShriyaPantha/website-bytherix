import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import StaggerGrid from "../ui/StaggerGrid";
import { roadmap } from "../data/oneForAllContent";

const OneForAllRoadmap = () => {
  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Where it's headed"
          title="Beyond management: a more intelligent platform"
          description="The long-term vision goes beyond traditional business management. These are potential directions for the platform, not shipped features."
        />

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map(({ title, description, icon: Icon }) => (
            <GlassCard key={title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--accent-blue)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </GlassCard>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default OneForAllRoadmap;
