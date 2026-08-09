import { useEffect, useState, lazy, Suspense } from "react";
import Navbar, { INTRO_TOTAL_MS } from "./components/layout/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";

const Home = lazy(() => import("./pages/Home"));
function App() {
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDocked(true), INTRO_TOTAL_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
        <div className="relative">
          <ThemeToggle />
          <Navbar docked={docked} />
          <Suspense
            fallback={<div className="min-h-screen bg-[var(--bg-primary)]" />}
          >
            <Home docked={docked} />
          </Suspense>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;