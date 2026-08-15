import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
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
    transition: {
      delay: i * 0.015,
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const LETTERS_DONE_AT = FULL_LENGTH * 0.015 + 0.18;
const UNDERLINE_START = 0;
const UNDERLINE_DURATION = 0.18;
const UNDERLINE_DONE_AT = UNDERLINE_START + UNDERLINE_DURATION;
const HOLD_AFTER_FULL_REVEAL = 0.1;

export const INTRO_TOTAL_MS = Math.round(
  (Math.max(LETTERS_DONE_AT, UNDERLINE_DONE_AT) +
    HOLD_AFTER_FULL_REVEAL) *
  1000
);

const NAV_ITEMS = [
  {
    label: "Company",
    hasDropdown: true,
    columns: [
      {
        title: "Company",
        items: [
          { label: "About Us", href: "#about" },
          { label: "Our Team", href: "#team" },
          { label: "Our Story", href: "#about" },
        ],
      },
      {
        title: "Explore",
        items: [
          { label: "Why Bytherix", href: "#about" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact Us", href: "#contact" },
        ],
      },
    ],
  },

  {
    label: "Services",
    hasDropdown: true,
    columns: [
      {
        title: "Development",
        items: [
          { label: "Web Development", href: "#services" },
          { label: "App Development", href: "#services" },
          { label: "Software Solutions", href: "#services" },
        ],
      },
      {
        title: "Technology",
        items: [
          { label: "AI & Machine Learning", href: "#services" },
          { label: "Cloud Solutions", href: "#services" },
          { label: "Cyber Security", href: "#services" },
        ],
      },
      {
        title: "Creative",
        items: [
          { label: "UI/UX Design", href: "#services" },
          { label: "Digital Solutions", href: "#services" },
          { label: "View All Services", href: "#services" },
        ],
      },
    ],
  },

  {
    label: "Products",
    hasDropdown: true,
    columns: [
      {
        title: "Our Products",
        items: [
          { label: "Digital Products", href: "#products" },
          { label: "Business Solutions", href: "#products" },
          { label: "Custom Software", href: "#products" },
        ],
      },
      {
        title: "Solutions",
        items: [
          { label: "Enterprise Solutions", href: "#products" },
          { label: "Cloud Products", href: "#products" },
          { label: "Explore Products", href: "#products" },
        ],
      },
    ],
  },

  {
    label: "Portfolios",
    href: "#portfolios",
    hasDropdown: false,
  },

  {
    label: "Shop",
    hasDropdown: true,
    columns: [
      {
        title: "Shop",
        items: [
          { label: "All Products", href: "#shop" },
          { label: "Software", href: "#shop" },
          { label: "Digital Products", href: "#shop" },
        ],
      },
      {
        title: "Learning",
        items: [
          { label: "Courses", href: "#courses" },
          { label: "Featured Courses", href: "#courses" },
          { label: "Learn With Bytherix", href: "#courses" },
        ],
      },
    ],
  },

  {
    label: "Contact",
    href: "#contact",
    hasDropdown: false,
  },
];

const DOCK_TRANSITION = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as const,
};

const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

const Navbar = ({ docked }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const activeItem = NAV_ITEMS.find(
    (item) => item.label === activeDropdown
  );

  return (
    <>
      <header
        className="
          relative z-30 w-full
          transparent
          px-6 py-4
          transition-all duration-300
        "
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between  border border-white/20 rounded-full py-2 px-4">
          {/* ================= LOGO ================= */}
          <div className="w-9">
            <motion.div
              layout
              transition={DOCK_TRANSITION}
              className={
                docked
                  ? "relative z-10 flex items-center gap-2.5"
                  : "fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-transparent"
              }
            >
              <AnimatePresence>
                {docked && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    }}
                    className="h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20"
                  >
                    <img
                      src={logo}
                      alt="Bytherix Technology logo"
                      className="h-full w-full scale-125 object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                layout="position"
                transition={DOCK_TRANSITION}
                className={
                  docked
                    ? "flex flex-col items-start"
                    : "flex flex-col items-center"
                }
              >
                <motion.div
                  layout
                  transition={DOCK_TRANSITION}
                  className="flex font-bold tracking-wide text-white"
                  style={{
                    fontSize: docked
                      ? "1.05rem"
                      : "clamp(2.5rem, 7vw, 4.5rem)",
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
                      className={`inline-block ${i === 0 ? "text-logo-red" : ""
                        }`}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  layout
                  transition={DOCK_TRANSITION}
                  className="flex font-medium uppercase tracking-[0.12em] text-gray-400"
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
                      className={`inline-block ${i === 0 ? "text-logo-red" : ""
                        }`}
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
                        transition: {
                          duration: 0.15,
                          ease: "easeIn",
                        },
                      }}
                      style={{
                        originX: 0,
                        boxShadow:
                          "0 0 12px 2px rgba(220,38,38,0.7)",
                      }}
                      className="mt-2 h-[3px] w-full bg-logo-red"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          {/* ================= RIGHT NAV ================= */}
          <div>
            <motion.div
              initial={false}
              animate={{ opacity: docked ? 1 : 0 }}
              transition={{
                duration: 0.2,
                delay: docked ? 0.1 : 0,
              }}
              className="relative z-50 flex items-center gap-5"
            >
              {/* DESKTOP NAV */}
              <nav className="hidden items-center gap-25 md:flex">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeDropdown === item.label;

                  if (!item.hasDropdown) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="
                        relative
                        text-xs
                        font-bold
                        uppercase
                        tracking-wide
                        text-white/85
                        transition-colors
                        duration-200
                        hover:text-logo-green
                      "
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() =>
                        setActiveDropdown(item.label)
                      }
                    >
                      <button
                        type="button"
                        className={`
                        flex items-center gap-1.5
                        text-xs font-bold uppercase tracking-wide
                        transition-colors duration-200
                        ${isActive
                            ? "text-logo-green"
                            : "text-white/85 hover:text-logo-green"
                          }
                      `}
                      >
                        {item.label}

                        <motion.span
                          animate={{
                            rotate: isActive ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px]"
                        >
                          ↓
                        </motion.span>
                      </button>
                    </div>
                  );
                })}
                <a
                  href="#contact"
                  className="
                hidden rounded-full
                bg-logo-blue
                px-5 py-2
                text-xs font-semibold text-white
                shadow-sm
                transition-all duration-200
                hover:bg-blue-700
                hover:shadow-lg
                md:inline-flex
              "
                >
                  Get a Quote
                </a>
              </nav>

              {/* MOBILE */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="
                flex h-9 w-9 items-center justify-center
                rounded-full bg-white/10
                text-white
                transition-colors
                hover:bg-white/20
                md:hidden
              "
              >
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    d="M0 1H14M0 5H14M0 9H14"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* ================= MEGA MENU ================= */}
        <AnimatePresence>
          {activeDropdown && activeItem?.hasDropdown && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onMouseEnter={() =>
                setActiveDropdown(activeDropdown)
              }
              onMouseLeave={() => setActiveDropdown(null)}
              className="
                absolute left-0 right-0 top-full
                z-50
                hidden
                border-t border-white/10
                bg-[#0b1329]
                shadow-2xl
                md:block
              "
            >
              <div className="mx-auto w-full max-w-[1440px] px-6 py-7">
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-3">
                  {activeItem.columns?.map((column) => (
                    <div key={column.title}>
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-logo-green">
                        {column.title}
                      </p>

                      <div className="space-y-1">
                        {column.items.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={() => setActiveDropdown(null)}
                            className="
                              group flex items-center justify-between
                              rounded-lg px-3 py-2.5
                              text-sm font-medium
                              text-white/75
                              transition-all duration-200
                              hover:bg-white/5
                              hover:text-white
                            "
                          >
                            <span>{subItem.label}</span>

                            <span className="
                              translate-x-[-4px]
                              opacity-0
                              transition-all duration-200
                              group-hover:translate-x-0
                              group-hover:opacity-100
                              text-logo-green
                            ">
                              →
                            </span>
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

      {/* Mobile navigation */}
      <MenuOverlay
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;