import { motion } from "framer-motion";
import type { AboutFeature } from "../../../data/aboutData";

interface AboutFeatureCardProps {
  feature: AboutFeature;
  index: number;
  onSelect: (feature: AboutFeature) => void;
}

export default function AboutFeatureCard({
  feature,
  index,
  onSelect,
}: AboutFeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -7 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onSelect(feature)}
      className="group relative w-full overflow-hidden rounded-[22px] border border-zinc-200 bg-white px-5 py-5 text-left shadow-[0_5px_30px_rgba(0,0,0,0.035)] transition-shadow duration-500 hover:border-zinc-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-zinc-100"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.15, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      <span className="relative z-10 flex items-center gap-4">
        <motion.span
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-white"
        >
          <Icon size={18} strokeWidth={1.8} />
        </motion.span>

        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold tracking-tight text-zinc-950">
            {feature.title}
          </span>
          <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
            {feature.description}
          </span>
        </span>

        <motion.span
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 sm:flex"
          whileHover={{
            x: 4,
            backgroundColor: "#18181b",
            color: "#ffffff",
            borderColor: "#18181b",
          }}
        >
          ↗
        </motion.span>
      </span>

      <motion.span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-zinc-950"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.45 }}
      />
    </motion.button>
  );
}
