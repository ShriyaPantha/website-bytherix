import { lazy, Suspense } from "react";


const Hero = lazy(() => import("../components/sections/hero/Hero"));
const AboutSection = lazy( () => import("../components/sections/about/AboutSection"));
const Team = lazy(() => import("../components/sections/team/Team"));

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
      <Hero docked={docked} />
      <AboutSection />
      <Team />
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