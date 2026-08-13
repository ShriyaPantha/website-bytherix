import { useEffect, useState, lazy, Suspense } from "react";
import Navbar, { INTRO_TOTAL_MS } from "./components/layout/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import TeamProfile from "./components/sections/team/TeamProfile";

const Home = lazy(() => import("./pages/Home"));

function App() {
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDocked(true);
    }, INTRO_TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * Detect team profile URLs.
   *
   * Example:
   * /team/anish-parajuli
   */
  const pathname = window.location.pathname;

  const teamProfileMatch = pathname.match(
    /^\/team\/([^/]+)\/?$/
  );

  /*
   * Render individual team member profile.
   */
  if (teamProfileMatch) {
    const slug = teamProfileMatch[1];

    return (
      <ThemeProvider>
        <TeamProfile slug={slug} />
      </ThemeProvider>
    );
  }

  /*
   * Render normal homepage.
   */
  return (
    <ThemeProvider>
      <main
        className="
          relative
          min-h-screen
          bg-[var(--bg-primary)]
          text-[var(--text-primary)]
          transition-colors
          duration-500
        "
      >
        <div className="relative">
          <ThemeToggle />

          <Navbar docked={docked} />

          <Suspense
            fallback={
              <div className="min-h-screen bg-[var(--bg-primary)]" />
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