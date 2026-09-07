import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import StaggerGrid from "../ui/StaggerGrid";
import Pill from "../ui/Pill";
import { businessCategories, capabilities } from "../data/oneForAllContent";

const OneForAllCapabilities = () => {
  return (
    <section id="capabilities" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="What it brings together"
          title="One account, one platform, every core business function"
          description="Instead of centralizing just one function, One For All is designed to bring the operations most businesses share into a single management foundation."
        />

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <GlassCard key={title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--accent-blue)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </GlassCard>
          ))}
        </StaggerGrid>

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Designed to support businesses such as
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {businessCategories.map(({ label, icon }) => (
              <Pill key={label} label={label} icon={icon} />
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--text-muted)]">
            Additional industries can be introduced as the platform evolves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OneForAllCapabilities;
