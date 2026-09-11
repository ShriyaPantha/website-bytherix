import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section className="relative overflow-hidden pt-14 pb-10 md:pt-16 md:pb-12 lg:pt-16 lg:pb-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10 mx-[4vw] w-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400"
          >
            <Sparkles size={15} />
            Selected Work
          </motion.div>

          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
            Digital experiences
            <span className="block text-blue-500">
              built to stand out.
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-7 text-slate-400 md:text-lg md:leading-8">
            Explore a selection of websites and digital experiences crafted by
            Bytherix Technology — combining modern interfaces, responsive
            experiences and purposeful design.
          </p>

          <div className="mt-7 flex items-center gap-5">
            <a
              href="#featured-projects"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(47,78,188,0.3)]"
            >
              Explore Projects

              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>

            <span className="text-xs font-medium text-slate-500 md:text-sm">
              02 Featured Projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;