import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/sections/hero/Hero"));
const About = lazy(() => import("../components/sections/about/About"));
const Services = lazy(() => import("../components/sections/ourservices/Services"));
const Courses = lazy(() => import("../components/sections/courses/Courses"));
const Testimonials = lazy(() => import("../components/sections/testimonials/Testimonials"));
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

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      <section id="courses" className="scroll-mt-24">
        <Courses />
      </section>

      <section id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactHero />
        <ContactSection />
      </section>

      <Footer />
    </Suspense>
  );
}

export default Home;