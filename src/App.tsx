import { lazy, Suspense, useCallback, useEffect, useState } from "react";

import Navbar, { INTRO_TOTAL_MS } from "./components/layout/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import TeamProfile from "./components/sections/team/TeamProfile";

const Home = lazy(() => import("./pages/Home"));
const OurTeam = lazy(() => import("./pages/Team"));

function App() {
  const [docked, setDocked] = useState(false);
  const [pathname, setPathname] = useState(() => window.location.pathname);

  /*
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

  /*
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

  /*
   * Central navigation helper.
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

  const teamProfileMatch = pathname.match(/^\/team\/([^/]+)\/?$/);

  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="relative">
          <ThemeToggle />

          {/*
           * IMPORTANT:
           * Navbar stays mounted while Home, Team and TeamProfile change.
           *
           * Therefore its intro animation does not restart on navigation.
           */}
          <Navbar docked={docked} />

          <Suspense fallback={<PageLoader />}>
            {teamProfileMatch ? (
              <TeamProfile
                slug={teamProfileMatch[1]}
                onBack={() => navigateTo("/our-team")}
              />
            ) : pathname === "/our-team" ? (
              <OurTeam />
            ) : (
              <Home docked={docked} />
            )}
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