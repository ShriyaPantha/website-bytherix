import { useRef, useState } from "react";

import NavbarBrand from "./NavbarBrand";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export interface NavbarProps {
  docked: boolean;
}

const Navbar = ({ docked }: NavbarProps) => {
  const introPlayedRef = useRef(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  /* =========================
     CLOSE ALL NAVIGATION STATES
  ========================== */
  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredNavItem(null);
    setMobileSearchOpen(false);
  };

  /* =========================
     NAVIGATION
  ========================== */
  const navigateTo = (path: string) => {
    const currentPath =
      window.location.pathname + window.location.hash;

    if (currentPath === path) {
      closeMenu();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.history.pushState({}, "", path);

    window.dispatchEvent(new PopStateEvent("popstate"));

    closeMenu();

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  /* =========================
     SCROLL TO SECTION
  ========================== */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================
     DROPDOWN ITEM CLICK
  ========================== */
  const handleDropdownItemClick = (item: string) => {
    const pageMap: Record<string, string> = {
      "Our Team": "/our-team",
      FAQs: "/faqs",
      "Blogs & Articles": "/blogs",
      "Our Founder": "/products/our-founder",
      "One For All Management System": "/products/one-for-all",
      "All Products": "/shop",
      "Digital Products": "/shop",
      Software: "/shop",

      "Web Development": "/services/web-development",
      "App Development": "/services/app-development",
      "Game Development": "/services/game-development",
      "E-commerce Development": "/services/e-commerce-development",
      "Maintenance & AMC": "/services/maintenance-amc",
      "AI & Machine Learning": "/services/ai-machine-learning",
      "Cloud & DevOps": "/services/cloud-devops",
      "Cyber Security": "/services/cyber-security",
      "IoT & Robotics": "/services/iot-robotics",
      "Blockchain & Web3": "/services/blockchain-web3",
      "Data Analytics & BI": "/services/data-analytics-bi",
      "UI/UX Design": "/services/ui-ux-design",
      "Digital Marketing": "/services/digital-marketing",
      "Graphic Design": "/services/graphic-design",
      "AR/VR & 3D": "/services/ar-vr-3d",
    };

    const pagePath = pageMap[item];

    if (pagePath) {
      navigateTo(pagePath);
      return;
    }

    const sectionMap: Record<string, string> = {
      "About Us": "about",
      "Our Story": "story",
      Testimonials: "testimonials",
      "Contact Us": "contact",
      "Our Services": "services",
      Courses: "courses",
      "Featured Courses": "courses",
      Certifications: "courses",
      "Teach on Bytherix": "courses",
    };

    const sectionId = sectionMap[item];

    if (!sectionId) {
      closeMenu();
      return;
    }

    if (window.location.pathname !== "/") {
      window.history.pushState(
        {},
        "",
        `/#${sectionId}`,
      );

      window.dispatchEvent(
        new PopStateEvent("popstate"),
      );

      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);

      closeMenu();

      return;
    }

    window.history.replaceState(
      {},
      "",
      `/#${sectionId}`,
    );

    window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);

    closeMenu();
  };

  /* =========================
     MAIN NAV ITEM CLICK
  ========================== */
  const handleNavItemClick = (item: string) => {
    const pageMap: Record<string, string> = {
      Portfolios: "/portfolios",
      Shop: "/shop",
      Products: "/products",
      FAQs: "/faqs",
      Blogs: "/blogs",
    };

    const pagePath = pageMap[item];

    if (pagePath) {
      navigateTo(pagePath);
      return;
    }

    const sectionMap: Record<string, string> = {
      Contact: "contact",
    };

    const sectionId = sectionMap[item];

    if (!sectionId) {
      return;
    }

    if (window.location.pathname !== "/") {
      window.history.pushState(
        {},
        "",
        `/#${sectionId}`,
      );

      window.dispatchEvent(
        new PopStateEvent("popstate"),
      );

      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);

      closeMenu();

      return;
    }

    window.history.replaceState(
      {},
      "",
      `/#${sectionId}`,
    );

    window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);

    closeMenu();
  };

  /* =========================
     LOGO CLICK
  ========================== */
  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    navigateTo("/");

    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <>
      <header
        className="
          relative
          z-[100]
          w-full
          bg-[#050814]
          px-3
          py-3
          sm:px-4
          sm:py-3
          lg:px-5
          lg:py-4
          xl:px-6
        "
        onMouseLeave={() => {
          setActiveDropdown(null);
          setHoveredNavItem(null);
        }}
      >
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[62px]
            w-full
            max-w-[1600px]
            items-center
            rounded-[20px]
            border
            border-white/[0.16]
            bg-[#080F29]
            px-4
            shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_8px_25px_rgba(0,0,0,0.35)]
            sm:min-h-[66px]
            sm:px-5
            lg:min-h-[68px]
            lg:rounded-[22px]
            lg:px-6
            xl:min-h-[70px]
            xl:px-7
          "
        >
          {/* Inner border */}
          <div
            className="
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[19px]
              border
              border-white/[0.035]
              sm:rounded-[21px]
              lg:rounded-[21px]
            "
          />

          {/* =========================
              LOGO
          ========================== */}
          <NavbarBrand
            docked={docked}
            introPlayedRef={introPlayedRef}
            onLogoClick={handleLogoClick}
          />

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <DesktopNavigation
            docked={docked}
            activeDropdown={activeDropdown}
            hoveredNavItem={hoveredNavItem}
            setActiveDropdown={setActiveDropdown}
            setHoveredNavItem={setHoveredNavItem}
            navigateTo={navigateTo}
            handleDropdownItemClick={handleDropdownItemClick}
            handleNavItemClick={handleNavItemClick}
          />

          {/* =========================
              MOBILE NAVIGATION
          ========================== */}
          <div
            className="
              relative
              z-[150]
              ml-auto
              flex
              shrink-0
              items-center
              lg:hidden
            "
          >
            <MobileNavigation
              docked={true}
              mobileMenuOpen={mobileMenuOpen}
              mobileSearchOpen={mobileSearchOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              setMobileSearchOpen={setMobileSearchOpen}
              closeMenu={closeMenu}
              handleDropdownItemClick={
                handleDropdownItemClick
              }
              handleNavItemClick={handleNavItemClick}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;