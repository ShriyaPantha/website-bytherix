import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectFeatures from "./ProjectFeatures";
import ProjectPreview from "./ProjectPreview";
import type { PortfolioProject } from "../data/PortfolioData";

interface ProjectShowcaseProps {
  project: PortfolioProject;
  index: number;
}

const ProjectShowcase = ({
  project,
  index,
}: ProjectShowcaseProps) => {
  const reverse = index % 2 !== 0;

  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      <div className="mx-[4vw] w-auto">
        <div
          className={`grid items-center gap-10 md:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-20 ${
            reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <ProjectPreview
            image={project.image}
            title={project.title}
            liveUrl={project.liveUrl}
            reverse={reverse}
          />

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="text-sm font-bold tracking-[0.18em] text-blue-500">
                  {project.number}
                </span>

                <span className="h-px w-9 bg-white/20" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {project.category}
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                {project.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg md:leading-8">
                {project.longDescription}
              </p>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-blue-500/30 hover:text-blue-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <ProjectFeatures features={project.features} />

            <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-5">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors duration-300 hover:text-blue-400"
            >
              Explore Live Project

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;