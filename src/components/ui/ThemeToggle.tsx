import { motion } from "framer-motion";
import { Contrast, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed right-4 top-1/2 z-[100] -translate-y-1/2 sm:right-6"
    >
      <motion.button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${
          isDark ? "light" : "dark"
        } mode`}
        aria-pressed={isDark}
        whileTap={{
          scale: 0.94,
        }}
        className="relative flex h-[112px] w-[48px] flex-col items-center overflow-hidden rounded-full border border-slate-200/80 bg-white/85 p-1 shadow-[0_10px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/85"
      >
        {/* Sliding active background */}
        <motion.span
          className="absolute left-1 right-1 h-[49px] rounded-full"
          initial={false}
          animate={{
            top: isDark ? 56 : 4,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
          }}
          style={{
            background: isDark
              ? "linear-gradient(135deg, #172554, #0f172a)"
              : "linear-gradient(135deg, #eef6ff, #ffffff)",
          }}
        />

        {/* LIGHT */}
        <span className="relative z-10 flex h-[49px] w-full items-center justify-center">
          <motion.span
            animate={{
              scale: !isDark ? 1 : 0.85,
              opacity: !isDark ? 1 : 0.45,
              rotate: !isDark ? 0 : -15,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Sparkles
              size={18}
              strokeWidth={1.8}
              className={
                !isDark
                  ? "text-[var(--color-green,#17b6a7)]"
                  : "text-slate-500 dark:text-slate-400"
              }
            />
          </motion.span>
        </span>

        {/* DARK */}
        <span className="relative z-10 flex h-[49px] w-full items-center justify-center">
          <motion.span
            animate={{
              scale: isDark ? 1 : 0.85,
              opacity: isDark ? 1 : 0.45,
              rotate: isDark ? 0 : 15,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Contrast
              size={18}
              strokeWidth={1.8}
              className={
                isDark
                  ? "text-[var(--color-green,#17b6a7)]"
                  : "text-slate-500 dark:text-slate-400"
              }
            />
          </motion.span>
        </span>

        {/* Small active indicator */}
        <motion.span
          className="absolute right-[7px] h-1.5 w-1.5 rounded-full bg-[var(--color-green,#17b6a7)]"
          animate={{
            top: isDark ? 77 : 25,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
          }}
        />
      </motion.button>
    </motion.div>
  );
}