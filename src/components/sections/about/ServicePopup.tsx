import { AnimatePresence, motion } from "framer-motion";
import type { AboutFeature } from "../../../data/aboutData";

interface ServicePopupProps {
  feature: AboutFeature | null;
  onClose: () => void;
}

export default function ServicePopup({
  feature,
  onClose,
}: ServicePopupProps) {
  return (
    <AnimatePresence>
      {feature && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            aria-label="Close service details"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/55 backdrop-blur-md"
          />

          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-popup-title"
            initial={{ opacity: 0, y: 35, scale: 0.94, rotateX: 8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[30px] border border-white/15 bg-zinc-950 p-7 text-white shadow-2xl sm:p-10"
          >
            <motion.div
              animate={{ x: [0, 80, -30, 0], y: [0, -30, 20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[80px]"
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                    Bytherix / 0{feature.id}
                  </p>
                  <h3
                    id="service-popup-title"
                    className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl"
                  >
                    {feature.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:bg-white hover:text-black"
                >
                  ×
                </button>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                {feature.details}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Learn", "Build", "Deploy"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
