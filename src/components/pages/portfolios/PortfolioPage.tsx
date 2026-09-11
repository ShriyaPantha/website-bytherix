import PortfolioHero from "./components/PortfolioHero";
import PortfolioProjects from "./components/PortfolioProjects";
import PortfolioCTA from "./components/PortfolioCTA";

const PortfolioPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050812] text-white">
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioCTA />
    </main>
  );
};

export default PortfolioPage;