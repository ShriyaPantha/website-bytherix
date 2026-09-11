import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PortfolioCTA = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-[4vw] w-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111936] via-[#0d142d] to-[#080b18] px-7 py-14 text-center md:px-14 md:py-20 lg:py-24"
        >
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Let's build something
              <span className="text-blue-500"> remarkable.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">
              From concept to launch, we create digital experiences designed
              around your business and your audience.
            </p>

            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              Start a Conversation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioCTA;