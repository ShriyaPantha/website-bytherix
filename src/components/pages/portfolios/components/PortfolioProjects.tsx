import { motion } from "framer-motion";
import { portfolioProjects } from "../data/PortfolioData";
import ProjectShowcase from "./ProjectShowcase";

const PortfolioProjects = () => {
  return (
    <section id="featured-projects" className="relative">
      <div className="mx-[4vw] w-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Featured Work
          </span>

          <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            Projects that turn ideas into
            <span className="text-blue-500"> digital experiences.</span>
          </h2>
        </motion.div>

        <p className="max-w-4xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
          A selection of websites and digital products designed and developed
          with a focus on usability, visual quality and responsive experiences.
        </p>
      </div>

      <div className="mt-2">
        {portfolioProjects.map((project, index) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;