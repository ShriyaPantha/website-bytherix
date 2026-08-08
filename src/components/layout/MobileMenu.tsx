import { motion, AnimatePresence, type Variants } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: string[];
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panelVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", damping: 28, stiffness: 320 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.3 },
  }),
};

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-xs flex-col bg-zinc-900 shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <span className="text-sm font-semibold tracking-widest text-white">
                MENU
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M1 1L15 15M15 1L1 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
              {links.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={onClose}
                  className="rounded-lg px-4 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/5 hover:text-logo-green"
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            <div className="border-t border-white/10 p-5">
              <a
                href="#contact"
                onClick={onClose}
                className="block w-full rounded-full bg-logo-blue py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;