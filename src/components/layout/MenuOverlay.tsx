import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../../assets/logo.png";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const LINKS = [
  { label: "Company", hasChildren: true },
  { label: "Services", hasChildren: true },
  { label: "Products", hasChildren: true },
  { label: "Portfolios", hasChildren: false },
  { label: "Shop", hasChildren: true },
  { label: "Contact", hasChildren: false },
];

const linkVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ChevronDown = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MenuOverlay = ({ open, onClose }: MenuOverlayProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dark sliver / backdrop on the right, tap to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/80"
          />

          {/* Side panel — covers most of the width on mobile, narrower on larger screens */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-white sm:w-[420px]"
          >
            {/* Top row: logo left, close button right */}
            <div className="flex items-center justify-between px-6 py-5">
              <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-black/10">
                <img src={logo} alt="Bytherix Technology" className="h-full w-full object-cover scale-125" />
              </div>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-zinc-700"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Vertical nav links */}
            <nav className="flex flex-col px-6 pt-6">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={`#${link.label.toLowerCase()}`}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={onClose}
                  className="flex items-center justify-between border-b border-black/5 py-4 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition-colors hover:text-red-500"
                >
                  {link.label}
                  {link.hasChildren && (
                    <span className="text-zinc-400">
                      <ChevronDown />
                    </span>
                  )}
                </motion.a>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + LINKS.length * 0.06, duration: 0.4 }}
              className="flex items-center gap-3 px-6 pt-8"
            >
              <a
                href="#contact"
                onClick={onClose}
                className="rounded-full border border-red-300 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-red-500 hover:text-white"
              >
                Get a Quote
              </a>
              <a
                href="#contact"
                onClick={onClose}
                aria-label="Get a quote"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-red-300 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;