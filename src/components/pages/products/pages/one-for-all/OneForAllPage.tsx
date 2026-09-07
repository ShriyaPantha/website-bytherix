import OneForAllHero from "./components/OneForAllHero";
import OneForAllProblem from "./components/OneForAllProblem";
import OneForAllCapabilities from "./components/OneForAllCapabilities";
import OneForAllArchitecture from "./components/OneForAllArchitecture";
import OneForAllModules from "./components/OneForAllModules";
import OneForAllAccess from "./components/OneForAllAccess";
import OneForAllPackages from "./components/OneForAllPackages";
import OneForAllRoadmap from "./components/OneForAllRoadmap";
import OneForAllCTA from "./components/OneForAllCTA";

/**
 * One For All Management System — product page.
 *
 * Composed as a linear product story rather than a single monolithic file:
 * each section owns its own layout and pulls its copy from
 * `data/oneForAllContent.ts`, which is sourced from the Bytherix "One For
 * All" product document. Nothing on this page states the product is a
 * finished commercial system; capabilities are phrased as designed to /
 * can / planned wherever the source material describes them that way.
 */
const OneForAllPage = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <OneForAllHero />
      <OneForAllProblem />
      <OneForAllCapabilities />
      <OneForAllArchitecture />
      <OneForAllModules />
      <OneForAllAccess />
      <OneForAllPackages />
      <OneForAllRoadmap />
      <OneForAllCTA />
    </main>
  );
};

export default OneForAllPage;
