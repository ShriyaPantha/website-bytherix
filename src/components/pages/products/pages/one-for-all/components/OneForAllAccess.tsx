import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import StaggerGrid from "../ui/StaggerGrid";
import { roles } from "../data/oneForAllContent";

const OneForAllAccess = () => {
  return (
    <section className="relative px-6 py-8 lg:py-8 sm:py-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Who sees what"
          title="A hierarchical permission model, from platform to shift"
          description="One For All uses role-based access control so every person, from Bytherix down to a single cashier, only sees the information their responsibilities require."
        />

        <StaggerGrid className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map(({ role, who, responsibilities }, index) => (
            <GlassCard key={role} className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-blue)]">
                Level {index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {role}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">{who}</p>
              <ul className="mt-4 flex flex-1 flex-col gap-2 border-t border-[var(--border-secondary)] pt-4">
                {responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-6 text-[var(--text-secondary)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-blue)]"
                    />
                    {item}
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

export default OneForAllAccess;
