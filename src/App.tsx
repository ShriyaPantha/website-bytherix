import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from "react";

import {
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

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

const OurStoryPage = lazy(
  () => import("./components/pages/ourstory/OurStoryPage")
);

const BlogsPage = lazy(
  () => import("./components/pages/blogs/BlogsPage")
);

const BlogArticle = lazy(
  () => import("./components/pages/blogs/BlogArticle")
);

const DemonHunterPage = lazy(
  () => import("./pages/DemonHunterPage")
);

const LoginPage = lazy(
  () => import("./pages/auth/LoginPage")
);

const RegisterPage = lazy(
  () => import("./pages/auth/RegisterPage")
);

const AboutCompany = lazy(
  () => import("./components/pages/aboutcompany/AboutCompanyPage")
);

/**
 * Routes that render as dedicated, full-viewport
 * experiences with no site chrome (navbar / theme
 * toggle). Authentication pages own their entire
 * screen per the Bytherix auth redesign.
 */
const CHROMELESS_ROUTES = ["/login", "/register"];

function TeamProfileRoute() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  return (
    <TeamProfile
      slug={slug ?? ""}
      onBack={() => navigate("/our-team")}
    />
  );
}

/**
 * Scrolls to the top whenever the route changes.
 * React Router controls navigation, so no manual popstate
 * handling is required.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/**
 * Renders the persistent site chrome (navbar + theme
 * toggle) on every route except the chromeless auth
 * routes, where the page owns the full viewport.
 */
function SiteChrome({ docked }: { docked: boolean }) {
  const { pathname } = useLocation();

  const isChromeless = CHROMELESS_ROUTES.includes(pathname);

  if (isChromeless) {
    return null;
  }

  return (
    <>
      <ThemeToggle />

      {/*
        Navbar stays mounted while pages change,
        so its intro animation does not restart
        during navigation.
      */}
      <Navbar docked={docked} />
    </>
  );
}

function App() {
  const [docked, setDocked] = useState(false);

  /**
   * Navbar intro animation is controlled only on the
   * initial application mount.
   *
   * Navbar remains mounted across route changes, so
   * the intro animation does not restart when navigating.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDocked(true);
    }, INTRO_TOTAL_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <ThemeProvider>
      <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="relative">
          <ScrollToTop />

          <SiteChrome docked={docked} />

          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={<Home docked={docked} />}
              />

              
              {/* About Company */}
              <Route
                path="/about-company"
                element={<AboutCompany />}
              />

              {/* Team */}
              <Route
                path="/our-team"
                element={<OurTeam />}
              />

              <Route
                path="/team/:slug"
                element={<TeamProfileRoute />}
              />

              {/* Shop */}
              <Route
                path="/shop"
                element={<Shop />}
              />

              {/* Products */}
              <Route
                path="/products"
                element={<OurProducts />}
              />

              <Route
                path="/products/our-founder"
                element={<OurFounder />}
              />

              <Route
                path="/products/one-for-all"
                element={<OneForAll />}
              />

              {/* Portfolios */}
              <Route
                path="/portfolios"
                element={<OurPortfolios />}
              />

              {/* Our Story */}
              <Route
                path="/our-story"
                element={<OurStoryPage />}
              />

              {/* Blog listing page */}
              <Route
                path="/blogs"
                element={<BlogsPage />}
              />

              {/* Individual blog article page */}
              <Route
                path="/blogs/:slug"
                element={<BlogArticle />}
              />

              {/* Demon Hunter */}
              <Route
                path="/demon-hunter"
                element={<DemonHunterPage />}
              />

              {/* Authentication */}
              <Route
                path="/login"
                element={<LoginPage />}
              />

              <Route
                path="/register"
                element={<RegisterPage />}
              />

              {/* Fallback */}
              <Route
                path="*"
                element={
                  <Navigate
                    to="/"
                    replace
                  />
                }
              />
            </Routes>
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