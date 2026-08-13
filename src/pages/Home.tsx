import { lazy, Suspense } from "react";
import Hero from "../components/sections/hero/Hero";
import About from "../components/sections/about/About";
import HeroBackground from "../components/sections/hero/HeroBackground"; // adjust path if needed

const Services = lazy(() => import("../components/sections/Services"));
const Courses = lazy(() => import("../components/sections/courses/Courses"));
const Testimonials = lazy(() => import("../components/sections/Testimonials"));


const ContactHero = lazy(() => import("../components/sections/contact/ContactHero"));
const ContactSection = lazy(() => import("../components/sections/contact/ContactSection"));
const Footer = lazy(() => import("../components/layout/Footer"));

interface HomeProps {
  docked: boolean;
}

function Home({ docked }: HomeProps) {
  return (
    <Suspense fallback={null}>
      {/* Only this wrapper gets the space background */}
      <div className="relative">
        <HeroBackground />
        <Hero docked={docked} />
      </div>

      {/* Everything below stays completely normal */}
      <About />
      <Services />
      <Courses />
      <Testimonials />
      <ContactHero />
      <ContactSection />
      <Footer />
    </Suspense>
  );
}

export default Home;