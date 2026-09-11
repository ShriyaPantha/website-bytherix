import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./sections/hero/Hero"));
const About = lazy(() => import("./sections/about/About"));
const Services = lazy(() => import("./sections/ourservices/Services"));
const Courses = lazy(() => import("./sections/courses/Courses"));
const Testimonials = lazy(() => import("./sections/testimonials/Testimonials"));
const ContactHero = lazy(() => import("./sections/contact/layout/ContactHero"));
const ContactSection = lazy(() => import("./sections/contact/ContactSection"));
const Footer = lazy(() => import("../../layout/Footer"));

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