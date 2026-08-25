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

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredNavItem(null);
    setMobileSearchOpen(false);
  };

  const navigateTo = (path: string) => {
    if (window.location.pathname + window.location.hash === path) {
      closeMenu();
      return;
    }

    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    closeMenu();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDropdownItemClick = (item: string) => {
    const sectionMap: Record<string, string> = {
      "About Us": "about",
      "Our Story": "story",
      FAQs: "faqs",
      "Blogs & Articles": "blogs",
      Testimonials: "testimonials",
      "Contact Us": "contact",

      "Web Development": "services",
      "App Development": "services",
      "Game Development": "services",
      "E-commerce Development": "services",
      "Maintenance & AMC": "services",

      "AI & Machine Learning": "services",
      "Cloud & DevOps": "services",
      "Cyber Security": "services",
      "IoT & Robotics": "services",
      "Blockchain & Web3": "services",
      "Data Analytics & BI": "services",

      "UI/UX Design": "services",
      "Digital Marketing": "services",
      "Graphic Design": "services",
      "AR/VR & 3D": "services",

      "Our Founder": "products",
      "One For All Management System": "products",

      "All Products": "shop",
      "Digital Products": "shop",
      Software: "shop",

      Courses: "courses",
      "Featured Courses": "courses",
      Certifications: "courses",
      "Teach on Bytherix": "courses",
    };

    if (item === "Our Team") {
      navigateTo("/our-team");
      return;
    }

    const sectionId = sectionMap[item];

    if (!sectionId) {
      closeMenu();
      return;
    }

    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", `/#${sectionId}`);
      window.dispatchEvent(new PopStateEvent("popstate"));

      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);

      closeMenu();
      return;
    }

    window.history.replaceState({}, "", `/#${sectionId}`);

    window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);

    closeMenu();
  };

  const handleNavItemClick = (item: string) => {
    const sectionMap: Record<string, string> = {
      Portfolios: "portfolios",
      Contact: "contact",
    };

    const sectionId = sectionMap[item];

    if (!sectionId) {
      return;
    }

    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", `/#${sectionId}`);
      window.dispatchEvent(new PopStateEvent("popstate"));

      window.setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);

      closeMenu();
      return;
    }

    window.history.replaceState({}, "", `/#${sectionId}`);

    window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);

    closeMenu();
  };

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
      <header className="relative z-[100] w-full bg-[#050814] px-3 py-3 sm:px-4 sm:py-3 lg:px-5 lg:py-4 xl:px-6" onMouseLeave={() => { setActiveDropdown(null); setHoveredNavItem(null); }}>
        <div className="relative mx-auto flex min-h-[62px] w-full max-w-[1600px] items-center rounded-[20px] border border-white/[0.16] bg-[#080F29] px-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_8px_25px_rgba(0,0,0,0.35)] sm:min-h-[66px] sm:px-5 lg:min-h-[68px] lg:rounded-[22px] lg:px-6 xl:min-h-[70px] xl:px-7">
          <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/[0.035] sm:rounded-[21px] lg:rounded-[21px]" />

          <NavbarBrand docked={docked} introPlayedRef={introPlayedRef} onLogoClick={handleLogoClick} />

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

          <MobileNavigation
            docked={docked}
            mobileMenuOpen={mobileMenuOpen}
            mobileSearchOpen={mobileSearchOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            setMobileSearchOpen={setMobileSearchOpen}
            closeMenu={closeMenu}
            handleDropdownItemClick={handleDropdownItemClick}
            handleNavItemClick={handleNavItemClick}
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;