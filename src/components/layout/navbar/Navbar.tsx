import {
  useRef,
  useState,
} from "react";

import NavbarBrand from "./NavbarBrand";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export interface NavbarProps {
  docked: boolean;
}

const Navbar = ({
  docked,
}: NavbarProps) => {
  const introPlayedRef =
    useRef(false);

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  const [
    activeDropdown,
    setActiveDropdown,
  ] = useState<string | null>(null);

  const [
    hoveredNavItem,
    setHoveredNavItem,
  ] = useState<string | null>(null);

  const [
    mobileSearchOpen,
    setMobileSearchOpen,
  ] = useState(false);

  /*
   * =====================================================
   * INTERNAL SPA NAVIGATION
   * =====================================================
   */

  const navigateTo = (
    path: string,
  ) => {
    if (
      window.location.pathname +
        window.location.hash ===
      path
    ) {
      closeMenu();
      return;
    }

    window.history.pushState(
      {},
      "",
      path,
    );

    window.dispatchEvent(
      new PopStateEvent(
        "popstate",
      ),
    );

    closeMenu();
  };

  /*
   * =====================================================
   * DROPDOWN NAVIGATION
   * =====================================================
   */

  const handleDropdownItemClick = (
    item: string,
  ) => {
    switch (item) {
      case "Our Team":
        navigateTo("/our-team");
        break;

      case "About Us":
        navigateTo("/");

        window.setTimeout(() => {
          document
            .getElementById("about")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }, 0);

        break;

      case "Our Story":
        navigateTo("/");

        window.setTimeout(() => {
          document
            .getElementById("story")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }, 0);

        break;

      case "Contact Us":
        navigateTo("/");

        window.setTimeout(() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }, 0);

        break;

      default:
        break;
    }
  };

  /*
   * =====================================================
   * LOGO NAVIGATION
   * =====================================================
   */

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    navigateTo("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
   * =====================================================
   * CLOSE EVERYTHING
   * =====================================================
   */

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredNavItem(null);
    setMobileSearchOpen(false);
  };

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <>
      <header
        className="relative z-[100] w-full bg-[#050814] px-3 py-3 sm:px-4 sm:py-3 lg:px-5 lg:py-4 xl:px-6"
        onMouseLeave={() => {
          setActiveDropdown(null);
          setHoveredNavItem(null);
        }}
      >
        <div className="relative mx-auto flex min-h-[62px] w-full max-w-[1600px] items-center rounded-[20px] border border-white/[0.16] bg-[#080F29] px-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_8px_25px_rgba(0,0,0,0.35)] sm:min-h-[66px] sm:px-5 lg:min-h-[68px] lg:rounded-[22px] lg:px-6 xl:min-h-[70px] xl:px-7">
          <div className="pointer-events-none absolute inset-[1px] rounded-[19px] border border-white/[0.035] sm:rounded-[21px] lg:rounded-[21px]" />

          <NavbarBrand
            docked={docked}
            introPlayedRef={
              introPlayedRef
            }
            onLogoClick={
              handleLogoClick
            }
          />

          <DesktopNavigation
            docked={docked}
            activeDropdown={
              activeDropdown
            }
            hoveredNavItem={
              hoveredNavItem
            }
            setActiveDropdown={
              setActiveDropdown
            }
            setHoveredNavItem={
              setHoveredNavItem
            }
            navigateTo={navigateTo}
            handleDropdownItemClick={
              handleDropdownItemClick
            }
          />

          <MobileNavigation
            docked={docked}
            mobileMenuOpen={
              mobileMenuOpen
            }
            mobileSearchOpen={
              mobileSearchOpen
            }
            setMobileMenuOpen={
              setMobileMenuOpen
            }
            setMobileSearchOpen={
              setMobileSearchOpen
            }
            closeMenu={closeMenu}
            handleDropdownItemClick={
              handleDropdownItemClick
            }
          />
        </div>
      </header>
    </>
  );
};

export default Navbar;
