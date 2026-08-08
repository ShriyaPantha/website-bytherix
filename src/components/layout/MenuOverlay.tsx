import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../../assets/logo.png";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const LINKS = ["Company", "Services", "Products", "Portfolios", "Contact"];

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-black"
        >
          {/* Top row: logo left, close button right */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10">
              <img src={logo} alt="Bytherix Technology" className="h-full w-full object-cover scale-125" />
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Horizontal nav links, centered in the middle of the screen */}
          <nav className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={onClose}
                  className="text-lg sm:text-2xl font-bold uppercase tracking-wide text-white transition-colors hover:text-red-500"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + LINKS.length * 0.06, duration: 0.4 }}
            className="flex justify-center pb-10"
          >
            <a
              href="#contact"
              onClick={onClose}
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              Get a Quote
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;