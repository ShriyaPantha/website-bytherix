import { lazy, Suspense } from "react";
import AboutSection from "../components/sections/about/AboutSection";
import Hero from "../components/sections/hero/Hero";
// import Hero from "../components/sections/Hero";

// const Hero = lazy(() => import("../components/sections/Hero"));
// const AboutSection = lazy( () => import("../components/sections/about/AboutSection")
// );
const Services = lazy(() => import("../components/sections/Services"));
const Courses = lazy(() => import("../components/sections/Courses"));

interface HomeProps {
  docked: boolean;
}

function Home({ docked }: HomeProps) {
  return (
    <Suspense fallback={null}>
      <Hero docked={docked} />
 {/* <AboutSection/> */}
      <Services />
      <Courses />
    </Suspense>
  );
}

export default Home;