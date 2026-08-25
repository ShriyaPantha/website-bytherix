import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";

import Navbar from "./components/layout/navbar/Navbar";
import { INTRO_TOTAL_MS } from "./components/layout/navbar/navbar.constants";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import TeamProfile from "./components/pages/team/TeamProfile";

const Home = lazy(() => import("./pages/Home"));

const OurTeam = lazy(
  () => import("./components/pages/team/Team")
);

const Shop = lazy(
  () => import("./components/pages/shop/ShopPage")
);

const OurProducts = lazy(
  () => import("./components/pages/products/ProductsPage")
);

const OurFounder = lazy(
  () => import("./components/pages/products/OurFounderPage")
);

const OneForAll = lazy(
  () => import("./components/pages/products/OneForAllPage")
);

const OurPortfolios = lazy(
  () => import("./components/pages/portfolios/PortfoliosPage")
);

const FAQs = lazy(
  () => import("./components/pages/faqs/FAQsPage")
);

const Blogs = lazy(
  () => import("./components/pages/blogs/BlogsPage")
);

function App() {
  const [docked, setDocked] = useState(false);

  const [pathname, setPathname] = useState(
    () => window.location.pathname
  );

  /**
   * Navbar intro is controlled only from the initial application mount.
   *
   * The Navbar itself remains mounted while pathname changes,
   * so changing:
   *
   * / -> /our-team -> /team/anish-parajuli
   *
   * will NOT recreate the Navbar component.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDocked(true);
    }, INTRO_TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /**
   * Keep the application pathname in sync with browser navigation.
   */
  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  /**
   * Central SPA navigation helper.
   *
   * This keeps navigation inside the SPA instead of opening
   * another browser tab or doing a full page reload.
   */
  const navigateTo = useCallback((path: string) => {
    if (window.location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    window.history.pushState({}, "", path);

    setPathname(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  /**
   * Team profile route:
   *
   * /team/anish-parajuli
   * /team/nikesh-munikar
   * etc.
   */
  const teamProfileMatch = pathname.match(
    /^\/team\/([^/]+)\/?$/
  );

  /**
   * Determine which page should be rendered.
   *
   * Navbar remains outside this conditional so it stays mounted
   * while navigating between pages.
   */
  const renderPage = () => {
    if (teamProfileMatch) {
      return (
        <TeamProfile
          slug={teamProfileMatch[1]}
          onBack={() => navigateTo("/our-team")}
        />
      );
    }

    switch (pathname) {
      case "/":
        return <Home docked={docked} />;

      case "/our-team":
        return <OurTeam />;

      case "/shop":
        return <Shop />;

      case "/products":
        return <OurProducts />;

        case "/products/our-founder":
    return <OurFounder />;

  case "/products/one-for-all":
    return <OneForAll />;

      case "/portfolios":
        return <OurPortfolios />;

      case "/faqs":
        return <FAQs />;

      case "/blogs":
        return <Blogs />;

      default:
        return <Home docked={docked} />;
    }
  };

  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="relative">
          <ThemeToggle />

          {/**
           * IMPORTANT:
           *
           * Navbar stays mounted while Home, Team, Shop,
           * Products, Portfolios, FAQs, Blogs and TeamProfile
           * change.
           *
           * Therefore its intro animation does not restart
           * on navigation.
           */}
          <Navbar docked={docked} />

          <Suspense fallback={<PageLoader />}>
            {renderPage()}
          </Suspense>
        </div>
      </main>
    </ThemeProvider>
  );
}

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050814]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
    </div>
  );
}

export default App;