import { motion } from "framer-motion";

const floatingItems = [
  { label: "CODE", x: "12%", y: "18%", delay: 0 },
  { label: "AI", x: "74%", y: "15%", delay: 0.7 },
  { label: "IoT", x: "78%", y: "69%", delay: 1.2 },
  { label: "SEC", x: "10%", y: "73%", delay: 1.7 },
];

export default function AboutVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -45, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[500px] overflow-hidden rounded-[32px] bg-zinc-950 sm:min-h-[610px]"
    >
      <motion.div
        animate={{
          x: [0, 55, -30, 0],
          y: [0, -35, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[95px]"
      />

      <motion.div
        animate={{ x: [0, -80, 30, 0], y: [0, 50, -25, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.11)_1px,transparent_1px)] [background-size:42px_42px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      />

      {floatingItems.map((item) => (
        <motion.div
          key={item.label}
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{
            duration: 4.5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: item.x, top: item.y }}
          className="absolute rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[9px] font-semibold tracking-[0.25em] text-white/50 backdrop-blur-md"
        >
          {item.label}
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.75, opacity: 0, rotate: -8 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            scale: { duration: 1, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.7 },
            rotate: { duration: 1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="relative flex h-56 w-56 items-center justify-center rounded-[38px] border border-white/15 bg-white/[0.07] shadow-2xl backdrop-blur-xl sm:h-72 sm:w-72"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute inset-5 rounded-[32px] border border-white/10"
          />

          <div className="relative text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">
              About
            </p>
            <h3 className="mt-3 text-5xl font-semibold tracking-[-0.07em] text-white">
              Bytherix
            </h3>
            <p className="mt-3 text-xs text-white/40">
              Learn · Build · Innovate
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
        className="absolute left-0 top-[22%] h-px w-28 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <div>
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
            Technology
          </p>
          <p className="mt-1 text-sm font-medium text-white">In Motion</p>
        </div>

        <motion.div
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-white/50"
        >
          +
        </motion.div>
      </div>
    </motion.div>
  );
}
