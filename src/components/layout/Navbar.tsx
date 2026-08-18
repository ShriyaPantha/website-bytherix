import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Search, Heart, Bell, UserRound, ChevronDown, Menu } from "lucide-react";

import logo from "../../assets/logo.png";
// import demonHunterLogo from "../../../public/demon hunter.png";
import MenuOverlay from "./MenuOverlay";

interface NavbarProps {
  docked: boolean;
}

const BRAND = "BYTHERIX";
const TECHNOLOGY = "TECHNOLOGY";

const introLetterVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: (index: number) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: index * 0.035, duration: 0.28, ease: [0.22, 1, 0.36, 1] } }),
};

const INTRO_LETTERS = BRAND.length + TECHNOLOGY.length;
const INTRO_DURATION = 0.28;
const INTRO_STAGGER = (INTRO_LETTERS - 1) * 0.035;
const INTRO_FINISH = INTRO_STAGGER + INTRO_DURATION;

export const INTRO_TOTAL_MS = Math.ceil((INTRO_FINISH + 0.45) * 1000);

const NAV_ITEMS = [
  { label: "Company", hasDropdown: true },
  { label: "Services", hasDropdown: true },
  { label: "Products", hasDropdown: true },
  { label: "Portfolios", hasDropdown: false },
  { label: "Shop", hasDropdown: true },
  { label: "Contact", hasDropdown: false },
];

const DROPDOWN_CONTENT: Record<string, { heading: string; items: string[] }[]> = {
  Company: [
    { heading: "Company", items: ["About Us", "Our Team", "Our Story"] },
    { heading: "Explore", items: ["Why Bytherix", "Testimonials", "Contact Us"] },
  ],
  Services: [
    { heading: "Development", items: ["Web Development", "App Development", "Software Solutions"] },
    { heading: "Technology", items: ["AI & Machine Learning", "Cloud Solutions", "Cyber Security"] },
    { heading: "Creative", items: ["UI/UX Design", "Digital Solutions", "All Services"] },
  ],
  Products: [
    { heading: "Products", items: ["Digital Products", "Business Solutions", "Custom Software"] },
    { heading: "Solutions", items: ["Enterprise Solutions", "Cloud Products", "Technology Products"] },
  ],
  Shop: [
    { heading: "Shop", items: ["All Products", "Digital Products", "Software"] },
    { heading: "Learning", items: ["Courses", "Featured Courses", "Learn With Bytherix"] },
  ],
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -6, scale: 0.985, transition: { duration: 0.14 } },
};

const dockTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

const getBrandColor = (index: number) => {
  if (index <= 1) return "text-[#00AEEF]";
  if (index <= 4) return "text-[#20C997]";
  return "text-[#FF3B30]";
};

const Navbar = ({ docked }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredNavItem(null);
  };

  return (
    <>
      <header className="relative z-[100] w-full bg-[#050814] px-3 py-3 sm:px-4 sm:py-3 lg:px-5 lg:py-4 xl:px-6" onMouseLeave={() => { setActiveDropdown(null); setHoveredNavItem(null); }}>
        <div className="relative mx-auto flex min-h-[62px] w-full max-w-[1600px] items-center rounded-[20px] border border-white/[0.16] bg-[#080F29] px-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_8px_25px_rgba(0,0,0,0.35)] sm:min-h-[66px] sm:px-5 lg:min-h-[68px] lg:rounded-[22px] lg:px-6 xl:min-h-[70px] xl:px-7">
          <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/[0.035] sm:rounded-[21px] lg:rounded-[21px]" />

          <motion.div layout transition={dockTransition} className={docked ? "relative z-20 flex shrink-0 items-center gap-2.5" : "fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#050814]"}>
            <AnimatePresence>
              {docked && (
                <motion.a href="/" initial={{ opacity: 0, scale: 0.72 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_7px_rgba(255,255,255,0.045)] sm:h-10 sm:w-10 lg:h-11 lg:w-11">
                  <img src={logo} alt="Bytherix Technology" className="h-full w-full scale-125 object-cover" />
                </motion.a>
              )}
            </AnimatePresence>

            <motion.div layout transition={dockTransition} className={docked ? "flex flex-col items-start" : "flex flex-col items-center"}>
              <motion.div layout transition={dockTransition} className="flex font-['Inter'] font-bold leading-none tracking-wide" style={{ fontSize: docked ? "1.08rem" : "clamp(2.8rem, 8vw, 5rem)" }}>
                {BRAND.split("").map((char, index) => (
                  <motion.span key={`brand-${index}`} custom={index} variants={introLetterVariants} initial="hidden" animate="visible" className={getBrandColor(index)}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div layout transition={dockTransition} className="font-['Inter'] font-medium uppercase leading-none tracking-[0.14em] text-white" style={{ marginTop: docked ? "3px" : "10px", fontSize: docked ? "0.46rem" : "clamp(0.85rem, 2vw, 1.3rem)" }}>
                {TECHNOLOGY.split("").map((char, index) => (
                  <motion.span key={`technology-${index}`} custom={BRAND.length + index} variants={introLetterVariants} initial="hidden" animate="visible">
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div initial={false} animate={{ opacity: docked ? 1 : 0, x: docked ? 0 : 10 }} transition={{ duration: 0.35, delay: docked ? 0.1 : 0 }} className="relative z-20 ml-auto hidden items-center gap-3.5 lg:flex xl:gap-4 2xl:gap-5">
            <nav className="flex items-center gap-3.5 xl:gap-4 2xl:gap-5">
              {NAV_ITEMS.map((item) => {
                const isHovered = hoveredNavItem === item.label;
                const isDropdownOpen = activeDropdown === item.label;

                if (!item.hasDropdown) {
                  return (
                    <a key={item.label} href={`#${item.label.toLowerCase()}`} onMouseEnter={() => setHoveredNavItem(item.label)} onMouseLeave={() => setHoveredNavItem(null)} className={`group relative flex items-center whitespace-nowrap py-2 font-['Inter'] text-[10px] font-bold uppercase tracking-wide transition-all duration-200 ${isHovered ? "text-[#00AEEF]" : "text-white/80"}`}>
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-px bg-[#00AEEF] transition-all duration-300 ${isHovered ? "w-full" : "w-0"}`} />
                    </a>
                  );
                }

                return (
                  <div key={item.label} className="relative py-2" onMouseEnter={() => { setHoveredNavItem(item.label); setActiveDropdown(item.label); }} onMouseLeave={() => setHoveredNavItem(null)}>
                    <button type="button" onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)} className={`group relative flex items-center gap-1.5 whitespace-nowrap font-['Inter'] text-[10px] font-bold uppercase tracking-wide transition-all duration-200 ${isHovered ? "text-[#00AEEF]" : "text-white/80"}`}>
                      {item.label}
                      <ChevronDown size={11} strokeWidth={2} className={`transition-all duration-200 ${isHovered ? "rotate-180 text-[#00AEEF]" : "text-white/65"}`} />
                      <span className={`absolute -bottom-2 left-0 h-px bg-[#00AEEF] transition-all duration-300 ${isHovered ? "w-full" : "w-0"}`} />
                    </button>
                  </div>
                );
              })}
            </nav>

            <div className="flex h-9 w-[180px] items-center rounded-full border border-white/25 bg-white/[0.035] pl-3 pr-1 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.055] xl:h-10 xl:w-[205px]">
              <Search size={16} strokeWidth={1.8} className="shrink-0 text-white/55" />
              <input type="text" placeholder="Search" aria-label="Search" className="min-w-0 flex-1 bg-transparent px-2 font-['Inter'] text-xs text-white outline-none placeholder:text-white/40" />
              <button type="button" aria-label="Search" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#080F29] transition-transform duration-200 hover:scale-105 active:scale-95">
                <Search size={14} strokeWidth={2.5} />
              </button>
            </div>

            <div className="h-9 w-px bg-white/20 xl:h-10" />

            <button type="button" aria-label="Wishlist" className="text-white/80 transition-all duration-200 hover:scale-105 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none">
              <Heart size={22} strokeWidth={1.7} />
            </button>

            <button type="button" aria-label="Notifications" className="relative text-white/80 transition-all duration-200 hover:scale-105 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none">
              <Bell size={22} strokeWidth={1.7} />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#FF6575] ring-2 ring-[#080F29]" />
            </button>

            <button type="button" aria-label="Demon Hunter" className="group flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black transition-all duration-200 hover:scale-105 hover:border-[#00AEEF] focus-visible:border-[#00AEEF] focus-visible:outline-none">
              <img src="/demon hunter.png" alt="Demon Hunter" className="h-full w-full object-cover transition-all duration-200 group-hover:scale-105" />
            </button>

            <button type="button" aria-label="Profile" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-200 hover:scale-105 hover:border-[#00AEEF] hover:text-[#00AEEF] focus-visible:border-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none">
              <UserRound size={18} strokeWidth={1.7} />
            </button>

            <a href="#contact" className="whitespace-nowrap rounded-full bg-[#3154C4] px-5 py-2.5 font-['Inter'] text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B5FD0] hover:shadow-[0_6px_16px_rgba(49,84,196,0.22)] active:translate-y-0">
              Get a Quote
            </a>
          </motion.div>

          <motion.div initial={false} animate={{ opacity: docked ? 1 : 0 }} className="relative z-30 ml-auto flex items-center gap-2 lg:hidden">
            <button type="button" aria-label="Open search" onClick={() => setMobileSearchOpen((previous) => !previous)} className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${mobileSearchOpen ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]" : "border-white/25 bg-white/[0.03] text-white"}`}>
              <Search size={18} strokeWidth={1.8} />
            </button>

            <button type="button" aria-label="Open menu" onClick={() => setMobileMenuOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.03] text-white transition-all duration-200 hover:border-[#00AEEF] hover:text-[#00AEEF] active:scale-95 sm:h-10 sm:w-10">
              <Menu size={21} strokeWidth={1.8} />
            </button>
          </motion.div>

          <AnimatePresence>
            {mobileSearchOpen && (
              <motion.div initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.98 }} transition={{ duration: 0.2 }} className="absolute left-3 right-3 top-[calc(100%+8px)] z-[120] lg:hidden">
                <div className="flex h-12 w-full items-center rounded-full border border-white/25 bg-[#080F29] px-2 pl-4 shadow-[0_15px_35px_rgba(0,0,0,0.45)]">
                  <Search size={18} strokeWidth={1.8} className="shrink-0 text-white/55" />
                  <input autoFocus type="text" placeholder="Search anything..." className="min-w-0 flex-1 bg-transparent px-3 font-['Inter'] text-sm text-white outline-none placeholder:text-white/40" />
                  <button type="button" aria-label="Search" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#080F29]">
                    <Search size={15} strokeWidth={2.5} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {activeDropdown && (
            <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" onMouseEnter={() => setHoveredNavItem(activeDropdown)} onMouseLeave={() => { setActiveDropdown(null); setHoveredNavItem(null); }} className="absolute left-3 right-3 top-[calc(100%-2px)] z-[90] hidden lg:block">
              <div className="mx-auto max-w-[1600px] overflow-hidden rounded-b-2xl rounded-t-xl border border-white/15 bg-[#080F29] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                <div className="grid grid-cols-2 gap-7 px-7 py-6 xl:grid-cols-3 xl:px-9">
                  {DROPDOWN_CONTENT[activeDropdown]?.map((column) => (
                    <div key={column.heading}>
                      <p className="mb-3 font-['Inter'] text-[9px] font-bold uppercase tracking-[0.18em] text-[#20C997]">{column.heading}</p>
                      <div className="space-y-1">
                        {column.items.map((item) => (
                          <a key={item} href="#" className="group block rounded-lg px-3 py-2 font-['Inter'] text-xs text-white/65 transition-all duration-200 hover:bg-white/[0.045] hover:pl-4 hover:text-[#00AEEF]">
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MenuOverlay open={mobileMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;