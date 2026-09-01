import { useState } from "react";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

import {
  ChevronDown,
  ArrowRight,
  X,
  Search,
  Heart,
  Bell,
  UserRound,
  LogOut,
  UserCircle2,
  LogIn,
  UserPlus,
  Mail,
  Send,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

import logo from "../../../assets/logo.png";

import {
  DROPDOWN_CONTENT,
  NAV_ITEMS,
} from "./navbar.constants";

import MegaMenuItem from "./MegaMenuItem";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  handleDropdownItemClick: (item: string) => void;
  handleNavItemClick: (item: string) => void;
}

const panelVariants: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0.9,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    x: "-100%",
    opacity: 0.9,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.28,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.22,
    },
  },
};

const actionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.16 + index * 0.07,
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.28 + index * 0.055,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const childVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },

  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

type ActionType =
  | "wishlist"
  | "notifications"
  | "account";

/* =========================================================
   SOCIAL LINKS
   Same social links as desktop navigation
   ========================================================= */

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
    label: "Facebook",
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

const MenuOverlay = ({
  open,
  onClose,
  handleDropdownItemClick,
  handleNavItemClick,
}: MenuOverlayProps) => {
  const [expandedItem, setExpandedItem] =
    useState<string | null>(null);

  const [selectedAction, setSelectedAction] =
    useState<ActionType | null>(null);

  const [newsletterEmail, setNewsletterEmail] =
    useState("");

  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleClose = () => {
    setExpandedItem(null);
    setSelectedAction(null);
    setNewsletterEmail("");
    onClose();
  };

  const handleActionClick = (action: ActionType) => {
    setSelectedAction((previous) =>
      previous === action ? null : action,
    );
  };

  const handleChildClick = (label: string) => {
    handleDropdownItemClick(label);
    handleClose();
  };

  const handleMainNavClick = (label: string) => {
    handleNavItemClick(label);
    handleClose();
  };

  const handleAccountNavigate = (path: string) => {
    handleClose();
    navigate(path);
  };

  const handleLogoutClick = () => {
    logout();
    handleClose();
    navigate("/");
  };

  const handleNewsletterSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    /*
     * Connect your newsletter API here.
     * Keeping current UI behaviour unchanged.
     */
    setNewsletterEmail("");
  };

  const actionClass = (action: ActionType) => {
    const selected = selectedAction === action;

    return `flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white/[0.03] transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00AEEF]/40 ${
      selected
        ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]"
        : "border-white/20 text-white/85"
    } hover:border-[#00AEEF] hover:text-[#00AEEF]`;
  };

  /*
   * Desktop social icon effect replicated for mobile.
   *
   * Includes:
   * - hover glow
   * - active/touch feedback
   * - focus-visible glow
   * - smooth transition
   */
  const socialIconClass =
    "group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] text-white/65 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-[#00AEEF]/40 hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] hover:shadow-[0_0_18px_rgba(0,174,239,0.14)] active:translate-y-0 active:scale-95 active:border-[#00AEEF]/60 active:bg-[#00AEEF]/15 active:text-[#00AEEF] active:shadow-[0_0_22px_rgba(0,174,239,0.22)] focus-visible:-translate-y-0.5 focus-visible:scale-105 focus-visible:border-[#00AEEF]/50 focus-visible:bg-[#00AEEF]/10 focus-visible:text-[#00AEEF] focus-visible:shadow-[0_0_20px_rgba(0,174,239,0.18)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00AEEF]/30";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* =================================================
              MOBILE BACKDROP
              ================================================= */}

          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="fixed inset-0 z-[190] bg-black/65 backdrop-blur-[2px] lg:hidden"
          />

          {/* =================================================
              MOBILE MENU PANEL
              ================================================= */}

          <motion.aside
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 left-0 z-[200] flex w-[88%] max-w-[410px] flex-col overflow-hidden border-r border-white/10 bg-[#080F29] shadow-[18px_0_50px_rgba(0,0,0,0.5)] lg:hidden"
          >
            {/* =================================================
                HEADER
                ================================================= */}

            <div className="flex h-[78px] shrink-0 items-center justify-between border-b border-white/10 px-5">
              <button
                type="button"
                onClick={() => {
                  handleClose();
                  handleMainNavClick("Home");
                }}
                className="flex items-center gap-2.5"
              >
                <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_0_8px_rgba(255,255,255,0.04)]">
                  <img
                    src={logo}
                    alt="Bytherix Technology"
                    className="h-full w-full scale-125 object-cover"
                  />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="font-['Inter'] text-base font-bold tracking-wide">
                    <span className="text-[#00AEEF]">
                      BY
                    </span>
                    <span className="text-[#20C997]">
                      THE
                    </span>
                    <span className="text-[#FF3B30]">
                      RIX
                    </span>
                  </span>

                  <span className="mt-1 font-['Inter'] text-[7px] font-medium uppercase tracking-[0.18em] text-white/70">
                    Technology
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-white/80 transition-all duration-200 hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] active:scale-95"
              >
                <X
                  size={17}
                  strokeWidth={1.8}
                />
              </button>
            </div>

            {/* =================================================
                SEARCH + ACTIONS
                ================================================= */}

            <div className="shrink-0 border-b border-white/10 px-5 py-4">
              <motion.div
                custom={0}
                variants={actionVariants}
                initial="hidden"
                animate="visible"
                className="mb-4"
              >
                <div className="flex h-11 w-full items-center rounded-full border border-white/25 bg-white/[0.04] pl-4 pr-1 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.055] focus-within:border-[#00AEEF] focus-within:bg-[#00AEEF]/[0.04]">
                  <Search
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-white/55"
                  />

                  <input
                    type="text"
                    placeholder="Search anything..."
                    aria-label="Search"
                    className="min-w-0 flex-1 bg-transparent px-2 font-['Inter'] text-xs text-white outline-none placeholder:text-white/40"
                  />

                  <button
                    type="button"
                    aria-label="Search"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#080F29] transition-transform duration-200 hover:scale-105 active:scale-95"
                  >
                    <Search
                      size={14}
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                variants={actionVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center justify-between gap-2"
              >
                {/* Wishlist */}

                <button
                  type="button"
                  aria-label="Wishlist"
                  aria-pressed={
                    selectedAction === "wishlist"
                  }
                  onClick={() =>
                    handleActionClick("wishlist")
                  }
                  className={actionClass("wishlist")}
                >
                  <Heart
                    size={20}
                    strokeWidth={1.7}
                  />
                </button>

                {/* Demon Hunter */}

                <Link
                  to="/demon-hunter"
                  onClick={handleClose}
                  aria-label="Demon Hunter"
                  className="group flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black transition-all duration-200 hover:scale-105 hover:border-[#00AEEF] active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00AEEF]/40"
                >
                  <img
                    src="/demon hunter.png"
                    alt="Demon Hunter"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                </Link>

                {/* Notifications */}

                <button
                  type="button"
                  aria-label="Notifications"
                  aria-pressed={
                    selectedAction === "notifications"
                  }
                  onClick={() =>
                    handleActionClick(
                      "notifications",
                    )
                  }
                  className={`relative ${actionClass(
                    "notifications",
                  )}`}
                >
                  <Bell
                    size={20}
                    strokeWidth={1.7}
                  />

                  <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF6575] ring-2 ring-[#080F29]" />
                </button>

                {/* Account */}

                <button
                  type="button"
                  aria-label="Account"
                  aria-pressed={
                    selectedAction === "account"
                  }
                  aria-expanded={
                    selectedAction === "account"
                  }
                  onClick={() =>
                    handleActionClick("account")
                  }
                  className={actionClass("account")}
                >
                  <UserRound
                    size={19}
                    strokeWidth={1.7}
                  />
                </button>
              </motion.div>

              {/* =================================================
                  ACCOUNT DROPDOWN
                  ================================================= */}

              <AnimatePresence initial={false}>
                {selectedAction === "account" && (
                  <motion.div
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-1.5 rounded-2xl border border-white/[0.1] bg-white/[0.02] p-2">
                      {isAuthenticated ? (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              handleAccountNavigate(
                                "/profile",
                              )
                            }
                            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#00AEEF]"
                          >
                            <UserCircle2
                              size={16}
                              strokeWidth={1.8}
                            />
                            My Profile
                          </button>

                          <button
                            type="button"
                            onClick={handleLogoutClick}
                            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#FF6575]"
                          >
                            <LogOut
                              size={16}
                              strokeWidth={1.8}
                            />
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              handleAccountNavigate(
                                "/login",
                              )
                            }
                            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#00AEEF]"
                          >
                            <LogIn
                              size={16}
                              strokeWidth={1.8}
                            />
                            Login
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleAccountNavigate(
                                "/register",
                              )
                            }
                            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left font-['Inter'] text-[12px] font-semibold text-white/85 transition-all duration-150 hover:bg-white/[0.06] hover:text-[#00AEEF]"
                          >
                            <UserPlus
                              size={16}
                              strokeWidth={1.8}
                            />
                            Register
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* =================================================
                MOBILE NAVIGATION
                ================================================= */}

            <nav className="flex-1 overflow-y-auto px-5 py-4 scrollbar-none">
              {NAV_ITEMS.map((item, index) => {
                const isExpanded =
                  expandedItem === item.label;

                const sections =
                  DROPDOWN_CONTENT[item.label] ?? [];

                const isCompany =
                  item.label === "Company";

                return (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    className="border-b border-white/[0.07]"
                  >
                    {/* =================================================
                        MAIN NAV ITEM
                        ================================================= */}

                    {item.hasDropdown ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedItem(
                            isExpanded
                              ? null
                              : item.label,
                          )
                        }
                        className={`group flex w-full items-center justify-between py-4 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.08em] transition-all duration-200 ${
                          isExpanded
                            ? "text-[#00AEEF]"
                            : "text-white/85"
                        } hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none`}
                      >
                        <span>{item.label}</span>

                        <ChevronDown
                          size={14}
                          strokeWidth={1.8}
                          className={`transition-all duration-200 ${
                            isExpanded
                              ? "rotate-180 text-[#00AEEF]"
                              : "text-white/45"
                          } group-hover:text-[#00AEEF]`}
                        />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          handleMainNavClick(
                            item.label,
                          )
                        }
                        className="group flex w-full items-center justify-between py-4 font-['Inter'] text-[11px] font-bold uppercase tracking-[0.08em] text-white/85 transition-all duration-200 hover:text-[#00AEEF] focus-visible:text-[#00AEEF] focus-visible:outline-none"
                      >
                        {item.label}

                        <ArrowRight
                          size={14}
                          strokeWidth={1.7}
                          className="translate-x-[-6px] text-[#00AEEF] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                      </button>
                    )}

                    {/* =================================================
                        DROPDOWN CONTENT
                        ================================================= */}

                    <AnimatePresence initial={false}>
                      {item.hasDropdown &&
                        isExpanded && (
                          <motion.div
                            variants={childVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                          >
                            <div className="mb-4">
                              {/* =================================================
                                  SERVICES SHORTCUT
                                  ================================================= */}

                              {item.label ===
                                "Services" && (
                                <div className="mb-4 flex justify-center">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleChildClick(
                                        "Our Services",
                                      )
                                    }
                                    className="group inline-flex items-center gap-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/[0.06] px-5 py-2.5 font-['Inter'] text-[10px] font-bold uppercase tracking-[0.1em] text-white/90 transition-all duration-200 hover:border-[#00AEEF]/70 hover:bg-[#00AEEF]/[0.1] hover:text-[#00AEEF] active:scale-95"
                                  >
                                    <span>
                                      Our Services
                                    </span>

                                    <ArrowRight
                                      size={13}
                                      strokeWidth={1.8}
                                      className="text-[#00AEEF] transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                  </button>
                                </div>
                              )}

                              {/* =================================================
                                  EXISTING DROPDOWN SECTIONS
                                  ================================================= */}

                              <div className="space-y-4">
                                {sections.map(
                                  (section) => {
                                    const SectionIcon =
                                      section.sectionIcon;

                                    return (
                                      <div
                                        key={
                                          section.heading
                                        }
                                      >
                                        <p className="mb-2 flex items-center gap-2 font-['Inter'] text-[9px] font-bold uppercase tracking-[0.16em] text-[#20C997]">
                                          <SectionIcon
                                            size={12}
                                            strokeWidth={
                                              1.8
                                            }
                                            className="text-[#00AEEF]"
                                          />

                                          {
                                            section.heading
                                          }
                                        </p>

                                        <div className="space-y-2">
                                          {section.items.map(
                                            (
                                              child,
                                            ) => (
                                              <MegaMenuItem
                                                key={
                                                  child.label
                                                }
                                                label={
                                                  child.label
                                                }
                                                icon={
                                                  child.icon
                                                }
                                                compact
                                                onClick={() =>
                                                  handleChildClick(
                                                    child.label,
                                                  )
                                                }
                                              />
                                            ),
                                          )}
                                        </div>
                                      </div>
                                    );
                                  },
                                )}
                              </div>

                              {/* =================================================
                                  COMPANY ONLY
                                  STAY UPDATED + SOCIAL LINKS
                                  ================================================= */}

                              {isCompany && (
                                <div className="mt-6 border-t border-white/[0.08] pt-6">
                                  {/* -----------------------------------------
                                      STAY UPDATED HEADER
                                      ----------------------------------------- */}

                                  <div className="mb-5 flex items-start gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3154C4]/30 bg-[#00AEEF]/[0.08] text-[#00AEEF] shadow-[0_0_20px_rgba(0,174,239,0.06)]">
                                      <Mail
                                        size={18}
                                        strokeWidth={1.8}
                                      />
                                    </span>

                                    <div className="min-w-0">
                                      <p className="font-['Inter'] text-[13px] font-bold uppercase tracking-[0.08em] text-white/90">
                                        Stay Updated
                                      </p>

                                      <div className="mt-1.5 h-px w-10 bg-[#20C997]" />

                                      <p className="mt-2 max-w-[280px] font-['Inter'] text-[11px] leading-relaxed text-white/45">
                                        Subscribe to our
                                        newsletter for the
                                        latest updates and
                                        insights.
                                      </p>
                                    </div>
                                  </div>

                                  {/* -----------------------------------------
                                      NEWSLETTER FORM
                                      ----------------------------------------- */}

                                  <form
                                    onSubmit={
                                      handleNewsletterSubmit
                                    }
                                    className="mb-6 flex h-[54px] w-full items-center gap-2 rounded-2xl border border-white/[0.14] bg-white/[0.025] p-1.5 pl-4 transition-all duration-300 focus-within:border-[#00AEEF]/50 focus-within:bg-white/[0.04] focus-within:shadow-[0_0_20px_rgba(0,174,239,0.07)]"
                                  >
                                    <input
                                      type="email"
                                      required
                                      value={
                                        newsletterEmail
                                      }
                                      onChange={(
                                        event,
                                      ) =>
                                        setNewsletterEmail(
                                          event.target
                                            .value,
                                        )
                                      }
                                      placeholder="Your email address"
                                      aria-label="Email address"
                                      className="min-w-0 flex-1 bg-transparent font-['Inter'] text-[11px] text-white outline-none placeholder:text-white/35"
                                    />

                                    <button
                                      type="submit"
                                      aria-label="Subscribe"
                                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3154C4] text-white transition-all duration-200 hover:scale-105 hover:bg-[#3B5FD0] hover:shadow-[0_6px_18px_rgba(49,84,196,0.3)] active:scale-95 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00AEEF]/50"
                                    >
                                      <Send
                                        size={15}
                                        strokeWidth={2}
                                      />
                                    </button>
                                  </form>

                                  {/* -----------------------------------------
                                      FOLLOW US
                                      ----------------------------------------- */}

                                  <div>
                                    <p className="mb-3 font-['Inter'] text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                                      Follow Us
                                    </p>

                                    <div className="grid grid-cols-6 gap-2">
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
                                            aria-label={
                                              label
                                            }
                                            className={
                                              socialIconClass
                                            }
                                          >
                                            <Icon
                                              size={16}
                                              className="transition-all duration-200 group-hover:scale-110 group-active:scale-105"
                                            />
                                          </a>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>

            {/* =================================================
                BOTTOM GET A QUOTE
                ================================================= */}

            <div className="shrink-0 border-t border-white/10 px-5 py-5">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    handleDropdownItemClick(
                      "Contact Us",
                    )
                  }
                  className="flex-1 rounded-full bg-[#3154C4] px-5 py-3 text-center font-['Inter'] text-xs font-bold text-white transition-all duration-200 hover:bg-[#3B5FD0] hover:shadow-[0_6px_16px_rgba(49,84,196,0.22)] active:scale-[0.98]"
                >
                  Get a Quote
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDropdownItemClick(
                      "Contact Us",
                    )
                  }
                  aria-label="Contact"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/75 transition-all duration-200 hover:border-[#00AEEF] hover:bg-[#00AEEF]/10 hover:text-[#00AEEF] active:scale-95"
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuOverlay;