import { Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import StaggerGrid from "../ui/StaggerGrid";
import { packages } from "../data/oneForAllContent";

const OneForAllPackages = () => {
  return (
    <section className="relative px-6 py-8 lg:py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Built to scale with you"
          title="Packages designed for businesses of different sizes"
          description="From a single organization to a multi-business enterprise, the platform is designed for the scale you're operating at today, with room to grow. Exact features and limits can evolve as the platform develops."
        />

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map(({ name, audience, features }, index) => (
            <GlassCard
              key={name}
              className={
                index === 2
                  ? "border-[var(--brand-blue-border)] ring-1 ring-[var(--accent-blue)]/30"
                  : ""
              }
            >
              {index === 2 && (
                <span className="mb-4 inline-block rounded-full bg-[var(--accent-blue)] px-3 py-1 text-xs font-semibold text-white">
                  For growing enterprises
                </span>
              )}
              <h3 className="text-xl font-bold text-[var(--text-primary)]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {audience}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-6 text-[var(--text-secondary)]"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-green)]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default OneForAllPackages;
