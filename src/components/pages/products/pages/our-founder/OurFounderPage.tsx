import FounderHero from "./components/FounderHero";
import FounderOrigin from "./components/FounderOrigin";
import FounderWorld from "./components/FounderWorld";
import FounderCombat from "./components/FounderCombat";
import FounderElements from "./components/FounderElements";
import FounderCompanion from "./components/FounderCompanion";
import FounderEnemies from "./components/FounderEnemies";
import FounderClosing from "./components/FounderClosing";

/**
 * "Founder – The Beginning of Journey" product page.
 *
 * Content is sourced entirely from the uploaded game design document.
 * See IMPLEMENTATION_SUMMARY.md at the repo root for the section-by-section
 * content mapping and design rationale.
 */
const OurFounderPage = () => {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <FounderHero />
      <FounderOrigin />
      <FounderWorld />
      <FounderCombat />
      <FounderElements />
      <FounderCompanion />
      <FounderEnemies />
      <FounderClosing />
    </main>
  );
};

export default OurFounderPage;