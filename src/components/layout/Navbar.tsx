import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../../assets/logo.png";
import MenuOverlay from "./MenuOverlay";
import "./Navbar.css";

interface NavbarProps {
  docked: boolean;
}

const WORD_ONE = "Bytherix";
const WORD_TWO = "Technology";
const FULL_LENGTH = WORD_ONE.length + WORD_TWO.length;

const letterVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.015, duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

const LETTERS_DONE_AT = FULL_LENGTH * 0.015 + 0.18;
const UNDERLINE_START = 0;
const UNDERLINE_DURATION = 0.18;
const UNDERLINE_DONE_AT = UNDERLINE_START + UNDERLINE_DURATION;
const HOLD_AFTER_FULL_REVEAL = 0.1;

export const INTRO_TOTAL_MS = Math.round(
  (Math.max(LETTERS_DONE_AT, UNDERLINE_DONE_AT) + HOLD_AFTER_FULL_REVEAL) * 1000
);

const LINKS = ["Company", "Services", "Products", "Portfolios", "Shop", "Contact"];

const DOCK_TRANSITION = { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const };

const Navbar = ({ docked }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
     <header className="relative z-30 flex items-center justify-between w-full bg-blue-950 px-6 py-4">
        <motion.div
          layout
          transition={DOCK_TRANSITION}
          className={
            docked
              ? "relative z-10 static flex items-center gap-2.5"
              : "fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-[#0b1329]"
          }
        >
          {/* Logo – smaller when docked */}
          <AnimatePresence>
            {docked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/20 shrink-0"
              >
                <img
                  src={logo}
                  alt="Bytherix Technology logo"
                  className="h-full w-full object-cover scale-125"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            layout="position"
            transition={DOCK_TRANSITION}
            className={docked ? "flex flex-col items-start" : "flex flex-col items-center"}
          >
            <motion.div
              layout
              transition={DOCK_TRANSITION}
              className="flex font-bold tracking-wide text-white"
              style={{
                fontSize: docked ? "1.05rem" : "clamp(2.5rem, 7vw, 4.5rem)",
                fontFamily: "'Chakra Petch', sans-serif",
                lineHeight: 1.1,
              }}
            >
              {WORD_ONE.split("").map((char, i) => (
                <motion.span
                  key={`w1-${i}`}
                  layout
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ layout: DOCK_TRANSITION }}
                  className={`inline-block ${i === 0 ? "text-logo-red" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              layout
              transition={DOCK_TRANSITION}
              className="flex font-medium tracking-[0.12em] uppercase text-gray-400"
              style={{
                fontSize: docked ? "0.55rem" : "clamp(0.9rem, 2vw, 1.4rem)",
                fontFamily: "'Chakra Petch', sans-serif",
                lineHeight: 1.1,
              }}
            >
              {WORD_TWO.split("").map((char, i) => (
                <motion.span
                  key={`w2-${i}`}
                  layout
                  custom={WORD_ONE.length + i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ layout: DOCK_TRANSITION }}
                  className={`inline-block ${i === 0 ? "text-logo-red" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <AnimatePresence>
              {!docked && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 1 }}
                  animate={{
                    scaleX: 1,
                    opacity: 1,
                    transition: {
                      delay: UNDERLINE_START,
                      duration: UNDERLINE_DURATION,
                      ease: "linear",
                    },
                  }}
                  exit={{
                    scaleX: 0,
                    opacity: 0,
                    transition: { duration: 0.15, ease: "easeIn" },
                  }}
                  style={{
                    originX: 0,
                    boxShadow: "0 0 12px 2px rgba(220,38,38,0.7)",
                  }}
                  className="mt-2 h-[3px] w-full bg-logo-red"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={false}
          animate={{ opacity: docked ? 1 : 0 }}
          transition={{ duration: 0.2, delay: docked ? 0.1 : 0 }}
          className="relative z-10 flex items-center gap-4"
        >
          <nav className="hidden items-center gap-5 md:flex">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-wide text-white/80 transition-colors hover:text-logo-green"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-logo-blue px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700 md:inline-block shadow-sm"
          >
            Get a Quote
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
          >
            <svg width="13" height="9" viewBox="0 0 14 10" fill="none">
              <path
                d="M0 1H14M0 5H14M0 9H14"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </button>
        </motion.div>
      </header>

      <MenuOverlay open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;