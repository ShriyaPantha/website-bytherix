import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  Search,
  Heart,
  Bell,
  UserRound,
  ChevronDown,
} from "lucide-react";

import {
  NAV_ITEMS,
  DROPDOWN_CONTENT,
  dropdownVariants,
} from "./navbar.constants";

import MegaMenuItem from "./MegaMenuItem";

interface DesktopNavigationProps {
  docked: boolean;
  activeDropdown: string | null;
  hoveredNavItem: string | null;
  setActiveDropdown: (value: string | null) => void;
  setHoveredNavItem: (value: string | null) => void;
  navigateTo: (path: string) => void;
  handleDropdownItemClick: (item: string) => void;
  handleNavItemClick: (item: string) => void;
}

const DesktopNavigation = ({
  docked,
  activeDropdown,
  hoveredNavItem,
  setActiveDropdown,
  setHoveredNavItem,
  navigateTo,
  handleDropdownItemClick,
  handleNavItemClick,
}: DesktopNavigationProps) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={{
          opacity: docked ? 1 : 0,
          x: docked ? 0 : 10,
        }}
        transition={{
          duration: 0.35,
          delay: docked ? 0.1 : 0,
        }}
        className="relative z-20 ml-auto hidden items-center gap-4 lg:flex xl:gap-5 2xl:gap-6"
      >
        <nav className="flex items-center gap-4 xl:gap-5 2xl:gap-6">
          {NAV_ITEMS.map((item) => {
            const isHovered = hoveredNavItem === item.label;
            const isDropdownOpen = activeDropdown === item.label;

            if (!item.hasDropdown) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavItemClick(item.label)}
                  onMouseEnter={() => setHoveredNavItem(item.label)}
                  onMouseLeave={() => setHoveredNavItem(null)}
                  className={`group relative flex items-center whitespace-nowrap py-2 font-['Inter'] text-[12px] font-bold uppercase tracking-[0.035em] transition-all duration-200 ${
                    isHovered ? "text-[#00AEEF]" : "text-white/85"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#00AEEF] transition-all duration-300 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            }

            return (
              <div
                key={item.label}
                className="relative py-2"
                onMouseEnter={() => {
                  setHoveredNavItem(item.label);
                  setActiveDropdown(item.label);
                }}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(
                      isDropdownOpen ? null : item.label,
                    )
                  }
                  className={`group relative flex items-center gap-1.5 whitespace-nowrap font-['Inter'] text-[12px] font-bold uppercase tracking-[0.035em] transition-all duration-200 ${
                    isHovered ? "text-[#00AEEF]" : "text-white/85"
                  }`}
                >
                  {item.label}

                  <ChevronDown
                    size={12}
                    strokeWidth={2}
                    className={`transition-all duration-200 ${
                      isHovered
                        ? "rotate-180 text-[#00AEEF]"
                        : "text-white/65"
                    }`}
                  />

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#00AEEF] transition-all duration-300 ${
                      isHovered ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </nav>

        <div className="flex h-9 w-[180px] items-center rounded-full border border-white/25 bg-white/[0.035] pl-3 pr-1 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.055] xl:h-10 xl:w-[205px]">
          <Search
            size={16}
            strokeWidth={1.8}
            className="shrink-0 text-white/55"
          />

          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            className="min-w-0 flex-1 bg-transparent px-2 font-['Inter'] text-xs text-white outline-none placeholder:text-white/40"
          />

          <button
            type="button"
            aria-label="Search"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#080F29] transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Search size={14} strokeWidth={2.5} />
          </button>
        </div>

        <button
          type="button"
          aria-label="Wishlist"
          className="text-white/80 transition-all duration-200 hover:scale-105 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none"
        >
          <Heart size={22} strokeWidth={1.7} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative text-white/80 transition-all duration-200 hover:scale-105 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none"
        >
          <Bell size={22} strokeWidth={1.7} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#FF6575] ring-2 ring-[#080F29]" />
        </button>

        <button
          type="button"
          aria-label="Demon Hunter"
          className="group flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black transition-all duration-200 hover:scale-105 hover:border-[#00AEEF] focus-visible:border-[#00AEEF] focus-visible:outline-none"
        >
          <img
            src="/demon hunter.png"
            alt="Demon Hunter"
            className="h-full w-full object-cover transition-all duration-200 group-hover:scale-105"
          />
        </button>

        <button
          type="button"
          aria-label="Profile"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-200 hover:scale-105 hover:border-[#00AEEF] hover:text-[#00AEEF] focus-visible:border-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none"
        >
          <UserRound size={18} strokeWidth={1.7} />
        </button>

        <button
          type="button"
          onClick={() => navigateTo("/#contact")}
          className="whitespace-nowrap rounded-full bg-[#3154C4] px-5 py-2.5 font-['Inter'] text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B5FD0] hover:shadow-[0_6px_16px_rgba(49,84,196,0.22)] active:translate-y-0"
        >
          Get a Quote
        </button>
      </motion.div>

      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={() => setHoveredNavItem(activeDropdown)}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setHoveredNavItem(null);
            }}
            className="absolute left-3 right-3 top-[calc(100%-2px)] z-[90] hidden lg:block"
          >
            <div className="mx-auto max-w-[1100px] overflow-hidden rounded-b-2xl rounded-t-xl border border-white/[0.14] bg-[#080F29]/95 shadow-[0_18px_42px_rgba(0,0,0,0.45),0_0_30px_rgba(0,174,239,0.08)] backdrop-blur-xl">
              <div className="mx-auto h-px w-28 bg-gradient-to-r from-transparent via-[#00AEEF]/55 to-transparent" />

              {activeDropdown === "Services" && (
                <div className="flex justify-center px-5 pt-5 xl:px-6">
                  <button
                    type="button"
                    onClick={() =>
                      handleDropdownItemClick("Our Services")
                    }
                    className="group inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/[0.06] px-6 py-3 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.1em] text-white/90 transition-all duration-200 hover:border-[#00AEEF]/70 hover:bg-[#00AEEF]/[0.12] hover:text-[#00AEEF]"
                  >
                    <span>Our Services</span>

                    <ArrowRight
                      size={14}
                      strokeWidth={1.8}
                      className="text-[#00AEEF] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              )}

              <div
                className={`grid gap-5 px-5 py-5 xl:px-6 ${
                  DROPDOWN_CONTENT[activeDropdown]?.length === 3
                    ? "grid-cols-3"
                    : "grid-cols-2"
                }`}
              >
                {DROPDOWN_CONTENT[activeDropdown]?.map(
                  (column, columnIndex) => {
                    const SectionIcon = column.sectionIcon;

                    return (
                      <div
                        key={column.heading}
                        className={`min-w-0 ${
                          columnIndex > 0
                            ? "border-l border-white/[0.07] pl-5"
                            : ""
                        }`}
                      >
                        <p className="mb-3 flex items-center gap-2 font-['Inter'] text-[9px] font-bold uppercase tracking-[0.16em] text-[#20C997]">
                          <SectionIcon
                            size={13}
                            strokeWidth={1.8}
                            className="text-[#00AEEF]"
                          />

                          {column.heading}
                        </p>

                        <div className="space-y-2">
                          {column.items.map((item) => (
                            <MegaMenuItem
                              key={item.label}
                              label={item.label}
                              icon={item.icon}
                              onClick={() =>
                                handleDropdownItemClick(
                                  item.label,
                                )
                              }
                            />
                          ))}
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopNavigation;