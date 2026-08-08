import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroBackground from "./HeroBackground"; // adjust path to match your folder structure

interface HeroProps {
  docked: boolean;
}

const ROTATING_WORDS = [
  "Web Applications",
  "AI Solutions",
  "Cybersecurity",
  "IoT Systems",
  "Robotics",
  "PCB Design",
  "Mobile Apps",
  "Smart Tools",
];

const Hero = ({ docked }: HeroProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 min-h-[80vh] overflow-hidden">
      <HeroBackground />

      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-16 transition-all duration-700 ease-out"
        style={{
          opacity: docked ? 1 : 0,
          transform: docked ? "translateY(0)" : "translateY(16px)",
          transitionDelay: docked ? "0.3s" : "0s",
        }}
      >
        <div className="border-b border-dotted border-gray-500/20 pb-4">
          <p className="text-sm text-white/50">Nepal&rsquo;s Trusted Digital Partner</p>
        </div>

        <h1 className="mt-10 text-7xl sm:text-9xl md:text-[10rem] font-bold leading-[1.05] tracking-tight text-white">
          WE BUILD
        </h1>

        {/* Mobile: stacks directly below "WE BUILD".
           sm+: original inline layout — spacer pushes red word to the right. */}
        <div className="flex flex-col sm:flex-row sm:items-baseline overflow-hidden py-2 sm:py-4">
          <span
            aria-hidden="true"
            className="hidden sm:inline-block invisible whitespace-pre text-5xl sm:text-7xl font-bold tracking-tight"
          >
            WE BUILD{"     "}
          </span>
          <AnimatePresence mode="wait">
            <motion.h2
              key={ROTATING_WORDS[index]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-full whitespace-nowrap text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-red-500"
              style={{ textShadow: "0 0 40px rgba(239,68,68,0.55)" }}
            >
              {ROTATING_WORDS[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
          A full-spectrum technology partner delivering web and mobile
          applications, AI-driven solutions, IoT systems, robotics, and PCB
          design &mdash; engineered with enterprise-grade cybersecurity at
          every layer, from architecture to deployment.
        </p>
      </div>
    </section>
  );
};

export default Hero;