import { useEffect, useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TechWaterfall from "./TechWaterfall";
import HeroBackground from "./HeroBackground";

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

  const displayWord = ROTATING_WORDS[index];

  return (
    <section className="relative isolate z-10 min-h-[80vh] overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        
        {/* ===== LEFT SIDE ===== */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: docked ? 1 : 0,
            transform: docked ? "translateY(0)" : "translateY(16px)",
            transitionDelay: docked ? "0.3s" : "0s",
          }}
        >
          <div className="border-b border-dotted border-gray-500/20 pb-4">
            <p className="text-sm text-white/50">Nepal&rsquo;s Trusted Digital Partner</p>
          </div>

          {/* WE BUILD + rotating text starting under the "B" */}
          <div className="mt-10">
            <h1 className="text-6xl sm:text-8xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
              WE BUILD
            </h1>

            {/* Rotating text – indented to start under the "B" */}
            <div
              className="overflow-hidden py-2 sm:py-3"
              style={{
                // Adjust this value if needed (1.10em – 1.25em)
                paddingLeft: "1.18em",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={displayWord}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="whitespace-nowrap text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-red-500"
                  style={{ textShadow: "0 0 40px rgba(239,68,68,0.55)" }}
                >
                  {displayWord}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-white/60 leading-relaxed">
            A full-spectrum technology partner delivering web and mobile
            applications, AI-driven solutions, IoT systems, robotics, and PCB
            design &mdash; engineered with enterprise-grade cybersecurity at
            every layer, from architecture to deployment.
          </p>
        </div>

        {/* ===== RIGHT SIDE – Falling tech cubes ===== */}
        <div className="relative flex justify-center lg:justify-end h-[480px] w-full max-w-[920px] overflow-hidden">
          <Suspense fallback={<div style={{ width: "100%", maxWidth: 920, height: 480 }} />}>
            <TechWaterfall />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Hero;