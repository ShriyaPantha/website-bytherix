import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

import {
  ArrowRight,
  Search,
  Heart,
  Bell,
  UserRound,
  ChevronDown,
  LogOut,
  UserCircle2,
  LogIn,
  UserPlus,
  Mail,
  Send,
} from "lucide-react";

import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

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

const userMenuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },

  exit: {
    opacity: 0,
    y: -6,
    scale: 0.96,
    transition: {
      duration: 0.12,
    },
  },
};

/* Social links shown in the "Follow Us" row of the Company mega menu. */
const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bytherix-technology-84b660420/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/bytherix",
    label: "GitHub",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61591150259850",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bytherix_/",
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@Bytherix_1",
    label: "YouTube",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@bytherix",
    label: "TikTok",
  },
];

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
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  const [newsletterEmail, setNewsletterEmail] = useState("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  const handleUserMenuNavigate = (path: string) => {
    setUserMenuOpen(false);
    navigate(path);
  };

  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Wire this up to your actual newsletter/subscribe endpoint.
    setNewsletterEmail("");
  };

  const showNewsletterColumn = activeDropdown === "Company";

  return (
    <>
      {/* =========================
          DESKTOP NAVIGATION
      ========================== */}
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

        {/* Search */}
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

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Wishlist"
          className="text-white/80 transition-all duration-200 hover:scale-105 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none"
        >
          <Heart size={22} strokeWidth={1.7} />
        </button>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative text-white/80 transition-all duration-200 hover:scale-105 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none"
        >
          <Bell size={22} strokeWidth={1.7} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#FF6575] ring-2 ring-[#080F29]" />
        </button>

        {/* Demon Hunter */}
        <Link
          to="/demon-hunter"
          aria-label="Demon Hunter"
          className="group flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black transition-all duration-200 hover:scale-105 hover:border-[#00AEEF] focus-visible:border-[#00AEEF] focus-visible:outline-none"
        >
          <img
            src="/demon hunter.png"
            alt="Demon Hunter"
            className="h-full w-full object-cover transition-all duration-200 group-hover:scale-105"
          />
        </Link>

        {/* User Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            type="button"
            aria-label="Account"
            aria-haspopup="menu"
            aria-expanded={userMenuOpen}
            onClick={() => setUserMenuOpen((previous) => !previous)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 focus-visible:outline-none ${
              userMenuOpen
                ? "border-[#00AEEF] text-[#00AEEF]"
                : "border-white/25 text-white/80 hover:border-[#00AEEF] hover:text-[#00AEEF] focus-visible:border-[#00AEEF] focus-visible:text-[#00AEEF]"
            }`}
          >
            <UserRound size={18} strokeWidth={1.7} />
          </button>

          <AnimatePresence>
            {userMenuOpen && (
              <motion.div
                role="menu"
                variants={userMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute right-0 top-[calc(100%+10px)] z-[95] w-52 overflow-hidden rounded-2xl border border-white/[0.14] bg-[#080F29]/95 shadow-[0_18px_42px_rgba(0,0,0,0.45),0_0_30px_rgba(0,174,239,0.08)] backdrop-blur-xl"
              >
                {isAuthenticated ? (
                  <div className="p-2">
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() =>
                        handleUserMenuNavigate("/profile")
                      }
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#00AEEF]"
                    >
                      <UserCircle2 size={16} strokeWidth={1.8} />
                      My Profile
                    </button>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#FF6575]"
                    >
                      <LogOut size={16} strokeWidth={1.8} />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="p-2">
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() =>
                        handleUserMenuNavigate("/login")
                      }
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#00AEEF]"
                    >
                      <LogIn size={16} strokeWidth={1.8} />
                      Login
                    </button>

                    <button
                      type="button"
                      role="menuitem"
                      onClick={() =>
                        handleUserMenuNavigate("/register")
                      }
                      className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#00AEEF]"
                    >
                      <UserPlus size={16} strokeWidth={1.8} />
                      Register
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Get a Quote */}
        <button
          type="button"
          onClick={() => navigateTo("/#contact")}
          className="whitespace-nowrap rounded-full bg-[#3154C4] px-5 py-2.5 font-['Inter'] text-xs font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3B5FD0] hover:shadow-[0_6px_16px_rgba(49,84,196,0.22)] active:translate-y-0"
        >
          Get a Quote
        </button>
      </motion.div>

      {/* =========================
          DESKTOP MEGA MENU
      ========================== */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={() =>
              setHoveredNavItem(activeDropdown)
            }
            onMouseLeave={() => {
              setActiveDropdown(null);
              setHoveredNavItem(null);
            }}
            className="absolute left-3 right-3 top-[calc(100%-2px)] z-[90] hidden lg:block"
          >
            <div className="mx-auto w-full max-w-[1600px] overflow-hidden rounded-b-2xl rounded-t-xl border border-white/[0.14] bg-[#080F29]/95 shadow-[0_18px_42px_rgba(0,0,0,0.45),0_0_30px_rgba(0,174,239,0.08)] backdrop-blur-xl">
              {/* Top glow line */}
              <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#00AEEF]/60 to-transparent" />

              {/* Services shortcut */}
              {activeDropdown === "Services" && (
                <div className="flex justify-center px-7 pt-7">
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

              {/* =========================
                  MAIN MEGA MENU GRID
              ========================== */}
              <div
                className={`grid gap-8 px-7 py-7 xl:px-9 ${
                  showNewsletterColumn
                    ? "grid-cols-[1fr_1fr_1.15fr]"
                    : DROPDOWN_CONTENT[activeDropdown]?.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2"
                }`}
              >
                {/* Existing dropdown columns */}
                {DROPDOWN_CONTENT[activeDropdown]?.map(
                  (column, columnIndex) => {
                    const SectionIcon = column.sectionIcon;

                    return (
                      <div
                        key={column.heading}
                        className={`min-w-0 ${
                          columnIndex > 0
                            ? "border-l border-white/[0.08] pl-8"
                            : ""
                        }`}
                      >
                        {/* Section heading */}
                        <div className="mb-5">
                          <p className="flex items-center gap-3 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.16em] text-[#20C997]">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#00AEEF]/10 bg-[#00AEEF]/[0.07]">
                              <SectionIcon
                                size={18}
                                strokeWidth={1.8}
                                className="text-[#00AEEF]"
                              />
                            </span>

                            <span>
                              {column.heading}
                            </span>
                          </p>

                          <div className="ml-14 mt-1.5 h-px w-10 bg-[#20C997]/70" />
                        </div>

                        {/* Menu items */}
                        <div className="space-y-2.5">
                          {column.items.map((item) => (
                            <MegaMenuItem
                              key={item.label}
                              label={item.label}
                              icon={item.icon}
                              sub={item.sub}
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

                {/* =========================
                    STAY UPDATED
                ========================== */}
                {showNewsletterColumn && (
                  <div className="min-w-0 border-l border-white/[0.08] pl-8">
                    {/* Newsletter header */}
                    <div className="mb-5 flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#3154C4]/30 bg-[#00AEEF]/[0.08] text-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.06)]">
                        <Mail
                          size={19}
                          strokeWidth={1.8}
                        />
                      </span>

                      <div className="min-w-0">
                        <p className="font-['Inter'] text-[14px] font-bold uppercase tracking-[0.08em] text-white/90">
                          Stay Updated
                        </p>

                        <div className="mt-1.5 h-px w-10 bg-[#20C997]" />

                        <p className="mt-2 max-w-[320px] font-['Inter'] text-[12px] leading-relaxed text-white/45">
                          Subscribe to our newsletter for the
                          latest updates and insights.
                        </p>
                      </div>
                    </div>

                    {/* Newsletter form */}
                    <form
                      onSubmit={handleNewsletterSubmit}
                      className="mb-7 flex h-[58px] w-full items-center gap-2 rounded-2xl border border-white/[0.14] bg-white/[0.025] p-1.5 pl-5 transition-all duration-300 focus-within:border-[#00AEEF]/50 focus-within:bg-white/[0.04]"
                    >
                      <input
                        type="email"
                        required
                        value={newsletterEmail}
                        onChange={(event) =>
                          setNewsletterEmail(
                            event.target.value,
                          )
                        }
                        placeholder="Your email address"
                        aria-label="Email address"
                        className="min-w-0 flex-1 bg-transparent font-['Inter'] text-[12px] text-white outline-none placeholder:text-white/35"
                      />

                      <button
                        type="submit"
                        aria-label="Subscribe"
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3154C4] text-white transition-all duration-200 hover:scale-105 hover:bg-[#3B5FD0] hover:shadow-[0_6px_18px_rgba(49,84,196,0.3)] active:scale-95"
                      >
                        <Send
                          size={15}
                          strokeWidth={2}
                        />
                      </button>
                    </form>

                    {/* Follow Us */}
                    <div>
                      <p className="mb-3 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                        Follow Us
                      </p>

                      <div className="flex items-center gap-3">
                        {SOCIAL_LINKS.map(
                          ({
                            icon: Icon,
                            href,
                            label,
                          }) => (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={label}
                              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-white/65 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/10 hover:text-[#00AEEF]"
                            >
                              <Icon
                                size={17}
                                strokeWidth={1.8}
                              />
                            </a>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom subtle border */}
              <div className="mx-7 h-px bg-white/[0.05] xl:mx-9" />

              <div className="h-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopNavigation;