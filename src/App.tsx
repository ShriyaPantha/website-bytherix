import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";

import Navbar, {
  INTRO_TOTAL_MS,
} from "./components/layout/Navbar";

import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import TeamProfile from "./components/sections/team/TeamProfile";

const Home = lazy(
  () => import("./pages/Home"),
);

function App() {
  const [docked, setDocked] =
    useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDocked(true);
    }, INTRO_TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const pathname =
    window.location.pathname;

  const teamProfileMatch =
    pathname.match(
      /^\/team\/([^/]+)\/?$/,
    );

  if (teamProfileMatch) {
    return (
      <ThemeProvider>
        <TeamProfile
          slug={teamProfileMatch[1]}
        />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <main
        className="
          relative
          min-h-screen
          bg-[var(--bg-primary)]
          text-[var(--text-primary)]
        "
      >
        <div className="relative">
          <ThemeToggle />

          <Navbar docked={docked} />

          <Suspense
            fallback={
              <div
                className="
                  min-h-screen
                  bg-[#050814]
                "
              />
            }
          >
            <Home docked={docked} />
          </Suspense>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;