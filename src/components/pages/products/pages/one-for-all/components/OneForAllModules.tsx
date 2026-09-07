import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import StaggerGrid from "../ui/StaggerGrid";
import { coreModules, industryModules, type ModuleGroup } from "../data/oneForAllContent";

type TabKey = "core" | "industry";

const TABS: { key: TabKey; label: string; groups: ModuleGroup[] }[] = [
  { key: "core", label: "Core business modules", groups: coreModules },
  { key: "industry", label: "Industry-specific modules", groups: industryModules },
];

const OneForAllModules = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("core");
  const active = TABS.find((tab) => tab.key === activeTab) ?? TABS[0];

  return (
    <section className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          eyebrow="Common foundation, industry-ready"
          title="One core, modules tailored to how each industry works"
          description="A shared management foundation covers what most businesses need. Industry-specific modules are layered on top for hotels, hospitals, schools and restaurants, without duplicating the core."
        />

        <div
          role="tablist"
          aria-label="One For All module categories"
          className="mt-10 inline-flex flex-wrap gap-2 rounded-full border border-[var(--border-primary)] bg-[var(--surface-secondary)] p-1.5"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-blue)] ${
                activeTab === tab.key
                  ? "bg-[var(--accent-blue)] text-white shadow-[var(--shadow-card)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <StaggerGrid
          key={active.key}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {active.groups.map(({ title, items, icon: Icon }) => (
            <GlassCard key={title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-blue-soft)] text-[var(--accent-blue)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-[var(--surface-secondary)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                  >
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

export default OneForAllModules;
