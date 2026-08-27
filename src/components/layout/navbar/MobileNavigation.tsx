import { AnimatePresence, motion } from "framer-motion";

import { Search, Menu } from "lucide-react";

import MenuOverlay from "./MenuOverlay";

interface MobileNavigationProps {
  docked: boolean;
  mobileMenuOpen: boolean;
  mobileSearchOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  setMobileSearchOpen: (value: boolean) => void;
  closeMenu: () => void;
  handleDropdownItemClick: (item: string) => void;
  handleNavItemClick: (item: string) => void;
}

const MobileNavigation = ({
  docked,
  mobileMenuOpen,
  mobileSearchOpen,
  setMobileMenuOpen,
  setMobileSearchOpen,
  closeMenu,
  handleDropdownItemClick,
  handleNavItemClick,
}: MobileNavigationProps) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={{
          opacity: docked ? 1 : 0,
        }}
        className="relative z-30 ml-auto flex items-center gap-2 lg:hidden"
      >
        <button
          type="button"
          aria-label="Open search"
          onClick={() =>
            setMobileSearchOpen(!mobileSearchOpen)
          }
          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
            mobileSearchOpen
              ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]"
              : "border-white/25 bg-white/[0.03] text-white"
          }`}
        >
          <Search size={18} strokeWidth={1.8} />
        </button>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.03] text-white transition-all duration-200 hover:border-[#00AEEF] hover:text-[#00AEEF] active:scale-95 sm:h-10 sm:w-10"
        >
          <Menu size={21} strokeWidth={1.8} />
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileSearchOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute left-3 right-3 top-[calc(100%+8px)] z-[120] lg:hidden"
          >
            <div className="flex h-12 w-full items-center rounded-full border border-white/25 bg-[#080F29] px-2 pl-4 shadow-[0_15px_35px_rgba(0,0,0,0.45)]">
              <Search
                size={18}
                strokeWidth={1.8}
                className="shrink-0 text-white/55"
              />

              <input
                autoFocus
                type="text"
                placeholder="Search anything..."
                className="min-w-0 flex-1 bg-transparent px-3 font-['Inter'] text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="button"
                aria-label="Search"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#080F29]"
              >
                <Search
                  size={15}
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MenuOverlay
        open={mobileMenuOpen}
        onClose={closeMenu}
        handleDropdownItemClick={handleDropdownItemClick}
        handleNavItemClick={handleNavItemClick}
      />
    </>
  );
};

export default MobileNavigation;