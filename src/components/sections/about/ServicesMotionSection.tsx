import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { aboutFeatures, type AboutFeature } from "../../../data/aboutData";
import ServicePopup from "./ServicePopup";

export default function ServicesMotionSection() {
  const ref = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<AboutFeature | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <>
      <section
        ref={ref}
        id="services"
        className="relative overflow-hidden bg-zinc-950 px-5 py-28 text-white sm:px-8 sm:py-36 lg:px-12 lg:py-44"
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:52px_52px]" />

        <motion.div
          style={{ y: titleY }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <div className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/35">
              What we do
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-[100px]">
              Technology
              <br />
              <span className="text-white/25">in motion.</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-3 md:grid-cols-2">
            {aboutFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.button
                  key={feature.id}
                  type="button"
                  onClick={() => setSelected(feature)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 text-left transition-colors duration-500 hover:bg-white/[0.07] sm:p-8"
                >
                  <motion.div
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon size={18} strokeWidth={1.7} />
                    </div>

                    <span className="text-[10px] tracking-[0.3em] text-white/25">
                      0{feature.id}
                    </span>
                  </div>

                  <div className="relative z-10 mt-14">
                    <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                      {feature.description}
                    </p>
                  </div>

                  <motion.span
                    className="absolute bottom-6 right-7 text-xl text-white/30"
                    whileHover={{ x: 5, y: -5, color: "#fff" }}
                  >
                    ↗
                  </motion.span>

                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-white"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.45 }}
                  />
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </section>

      <ServicePopup
        feature={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
